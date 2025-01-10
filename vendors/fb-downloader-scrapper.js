"use strict";

module.exports = (fbUrl)=>{ 
    return new Promise((resolve)=>{
            const getFbVideoInfo = require("fb-downloader-scrapper");
            const cookies = "c_user=100023331724368; datr=mFhEZ5MCKxiiZ5m5Zv6sVUEE; dpr=1.65625; fr=1r22QB74WvLRVcBUe.AWUyJLzjxcVyqVVVpEc5k6NkRGo.BngVFn..AAA.0.0.BngVFn.AWW6_gIfFcY; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1736532487765%2C%22v%22%3A1%7D; ps_l=1;ps_n=1; sb=5MdGZx8eBfAGvaXTXoeprZpH; wd=489x540; xs=32%3AF0lrE_elDCYHzw%3A2%3A1732692782%3A-1%3A470%3A%3AAcXOesiz-beQ9m-VNx_l8uifuhqZuoHXwO4PTy_hXLU";
            const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
            getFbVideoInfo(fbUrl, cookies, userAgent)
            .then((result)=>{
                return resolve(result);
            }).catch((err)=>{ console.log(err)
                return resolve("Error with scrapping");
            });
    });

}