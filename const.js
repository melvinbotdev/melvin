'use strict';

// Wit.ai parameters
const WIT_TOKEN = process.env.WIT_TOKEN || '7ECASU7EMMNSTRHTTZVVFTQ7QRTACDKG';
if (!WIT_TOKEN) {
  throw new Error('missing WIT_TOKEN');
}

// Messenger API parameters
//EAAIur90A0q4BAKjUJOn9P4sguCny4KFEmTOE3v5tbccbNWGFa9sLTgI4sFR1QZBvvRFbwy6sc8iCl3ZBCIom4E9qIISI9isLFoBkpWyr0ud5g6j58jn91vie5fLkEUYni2n78dh4ra5cRSFabZCIKHXmyr6NJpE3pY4A2h41gZDZD
//token melvin EAADBZCLUw5gkBAHffQKyUpPKHVsyMDCJGJC0XPTm8bZC5GxU8kI8au1OsLyKFqHc3NKX9MeKBuAwTIHUVsho6u7JLlZB2qTA8IfZA3kWr1ZClvNHvpdG55ptYTPTyjb7kGZAWKiTjTmerRNnLqSmzaWFipX3bvJFP3o87LUZB7jZBQZDZD
const FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'curl -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=EAAIur90A0q4BAKjUJOn9P4sguCny4KFEmTOE3v5tbccbNWGFa9sLTgI4sFR1QZBvvRFbwy6sc8iCl3ZBCIom4E9qIISI9isLFoBkpWyr0ud5g6j58jn91vie5fLkEUYni2n78dh4ra5cRSFabZCIKHXmyr6NJpE3pY4A2h41gZDZD';

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN;
if (!FB_VERIFY_TOKEN) {
  FB_VERIFY_TOKEN = "just_do_it";
}
// curl -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=EAAIur90A0q4BAKjUJOn9P4sguCny4KFEmTOE3v5tbccbNWGFa9sLTgI4sFR1QZBvvRFbwy6sc8iCl3ZBCIom4E9qIISI9isLFoBkpWyr0ud5g6j58jn91vie5fLkEUYni2n78dh4ra5cRSFabZCIKHXmyr6NJpE3pY4A2h41gZDZD"

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
};

