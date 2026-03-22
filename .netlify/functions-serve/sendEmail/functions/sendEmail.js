var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// functions/sendEmail.js
var sendEmail_exports = {};
__export(sendEmail_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(sendEmail_exports);

// node_modules/@emailjs/nodejs/mjs/models/emailjs_response_status.js
var EmailJSResponseStatus = class {
  constructor(status, text) {
    this.status = status || 0;
    this.text = text || "Network Error";
  }
};

// node_modules/@emailjs/nodejs/mjs/store/store.js
var store = {
  _publicKey: "",
  _host: "api.emailjs.com"
};

// node_modules/@emailjs/nodejs/mjs/methods/init/init.js
var init = (options) => {
  store._publicKey = options.publicKey;
  store._privateKey = options.privateKey;
  store._host = options.host || "api.emailjs.com";
};

// node_modules/@emailjs/nodejs/mjs/utils/validate_params.js
var validateParams = (publicKey, serviceID, templateID) => {
  if (!publicKey) {
    throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
  }
  if (!serviceID) {
    throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
  }
  if (!templateID) {
    throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  }
  return true;
};

// node_modules/@emailjs/nodejs/mjs/api/send_json.js
var import_https = require("https");
var sendJSON = (params) => {
  const options = {
    host: store._host,
    path: "/api/v1.0/email/send",
    port: 443,
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };
  return new Promise((resolve, reject) => {
    const req = (0, import_https.request)(options, (res) => {
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => {
        const data = Buffer.concat(chunks).toString();
        if (res.statusCode === 200) {
          resolve(new EmailJSResponseStatus(res.statusCode, data));
        } else {
          reject(new EmailJSResponseStatus(res.statusCode, data));
        }
      });
      res.on("error", (error) => {
        reject(error);
      });
    });
    req.on("error", (error) => {
      reject(error);
    });
    if (params) {
      req.write(params);
    }
    req.end();
  });
};

// node_modules/@emailjs/nodejs/mjs/methods/send/send.js
var send = (serviceID, templateID, templatePrams, options) => {
  const pubKey = options?.publicKey || store._publicKey;
  const prKey = options?.privateKey || store._privateKey;
  validateParams(pubKey, serviceID, templateID);
  const params = {
    lib_version: "2.2.0",
    service_id: serviceID,
    template_id: templateID,
    user_id: pubKey,
    accessToken: prKey,
    template_params: templatePrams
  };
  return sendJSON(JSON.stringify(params));
};

// node_modules/@emailjs/nodejs/mjs/emailjs.js
var emailjs_default = {
  init,
  send,
  EmailJSResponseStatus
};

// functions/sendEmail.js
var handler = async (event) => {
  console.log("received event:", event);
  const {
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_API_KEY,
    EMAILJS_PRIVATE_API_KEY
  } = process.env;
  console.log("Service ID:", EMAILJS_SERVICE_ID);
  const body = JSON.parse(event.body);
  console.log("parsed body:", body);
  try {
    const response = await emailjs_default.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      body,
      { publicKey: EMAILJS_PUBLIC_API_KEY, privateKey: EMAILJS_PRIVATE_API_KEY }
    );
    console.log("EmailJS response:", response);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "SEND EMAIL SUCCESS!", response })
    };
  } catch (error) {
    console.error("EmailJS send error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "SEND EMAIL FAILED...",
        error: error.text
      })
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=sendEmail.js.map
