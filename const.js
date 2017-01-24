'use strict';

// Wit.ai parameters
const WIT_TOKEN = process.env.WIT_TOKEN || '7ECASU7EMMNSTRHTTZVVFTQ7QRTACDKG';
if (!WIT_TOKEN) {
  throw new Error('missing WIT_TOKEN');
}

// Messenger API parameters
const FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAADBZCLUw5gkBAHffQKyUpPKHVsyMDCJGJC0XPTm8bZC5GxU8kI8au1OsLyKFqHc3NKX9MeKBuAwTIHUVsho6u7JLlZB2qTA8IfZA3kWr1ZClvNHvpdG55ptYTPTyjb7kGZAWKiTjTmerRNnLqSmzaWFipX3bvJFP3o87LUZB7jZBQZDZD';

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN;
if (!FB_VERIFY_TOKEN) {
  FB_VERIFY_TOKEN = "just_do_it";
}
// curl -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=EAADBZCLUw5gkBAHffQKyUpPKHVsyMDCJGJC0XPTm8bZC5GxU8kI8au1OsLyKFqHc3NKX9MeKBuAwTIHUVsho6u7JLlZB2qTA8IfZA3kWr1ZClvNHvpdG55ptYTPTyjb7kGZAWKiTjTmerRNnLqSmzaWFipX3bvJFP3o87LUZB7jZBQZDZD"

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
};

