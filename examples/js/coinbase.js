"use strict";

// ----------------------------------------------------------------------------

const ccxt = require("../../ccxt.js"),
  log = require("ololog"),
  asTable = require("as-table").configure({ delimiter: " | " });

  // ----------------------------------------------------------------------------
(async () => {
  const exchange = new ccxt.coinbase({
    verbose: process.argv.includes("--verbose"),
    timeout: 60000,
    // These don't work. Sorry home slice.
    apiKey: "5ILxQ0DkBIZIKFfS",
    secret: "06aKK7SfVyi4KHXipmPgFZHoCo9snNpF"
  });

  try {
    const accounts = await exchange.fetchMyTrades();
    // const accountIds = accounts.data.map (account => account.id);
    
    // for (const id of accountIds) {
    //   const buys = await exchange.privateGetAccountsAccountIdBuys(this.extend({
    //     'account_id': id,
    //   }))
    //   console.log(buys);
      
    // }

    // console.log(accountIds);
    

    log.green("Succeeded.");
  } catch (e) {
    log.dim("--------------------------------------------------------");
    log(e.constructor.name, e.message);
    log.dim("--------------------------------------------------------");
    log.dim(exchange.last_http_response);
    log.error("Failed.");
  }
})();
