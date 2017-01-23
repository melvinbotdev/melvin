'use strict';

// Wit.ai parameters
const WIT_TOKEN = process.env.WIT_TOKEN || '7ECASU7EMMNSTRHTTZVVFTQ7QRTACDKG';
if (!WIT_TOKEN) {
  throw new Error('missing WIT_TOKEN');
}

// Messenger API parameters
const FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAADBZCLUw5gkBAL9z9XSxDprdwrWdw8p3dXeVfve5DBnIlHtxp142LAicCab8IUZBznAIBccqwazKwyE3SxULfFqGXERZBcVMVBOGE6dridHT58zSjiwZBsVE02rmfZAGtzyb0QXZCceJEqtfykKfZCkG7w2hlGpF3Oe3UkNMPppgZDZD';

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN;
if (!FB_VERIFY_TOKEN) {
  FB_VERIFY_TOKEN = "just_do_it";
}
// curl -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=EAAG2ZBERfJOcBAPqofqH0QH6SAaOsrZAlXE5WSx3fzNeEINb5qMvK2RfrMxkXRSXSOcw1useOkQ83DECZBemDAnt0IclkZBzLUqViiLLmmvLRBUB4zcCk6RWlKoDdnMBzWR1SyGtKpbXN91o7CqdPiuTwCQRZCysPGPyh09HtewZDZD"

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
};

