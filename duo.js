/*************************************

应用名称：Duolingo
脚本功能：kalp-"unlimitedHeartsAvailable\":false},
下载地址：duo.com
更新日期：2026-05-14
脚本作者：@yazar
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/(?:[a-zA-Z0-9-]+\.)?duolingo\.[^\/]+\/\d{4}-\d{2}-\d{2}\/users\/ url script-response-body https://raw.githubusercontent.com/eztakesin/duolingo-mitm-lab/refs/heads/main/duolingo_unlimited_hearts_max.js
^https?:\/\/(?:[a-zA-Z0-9-]+\.)?duolingo\.[^\/]+\/\d{4}-\d{2}-\d{2}\/batch\/ url script-response-body https://raw.githubusercontent.com/circas/duoo/refs/heads/main/duo.js
[mitm]
hostname = ios-api-cf.duolingo.com, duolingo.com

*************************************/
var ddm = JSON.parse($response.body);
var url = $request.url;
const expireDate = "2099-09-09T09:09:09.000Z";

function modifyDayOne() {
  if ([^\/]+\/\d{4}-\d{2}-\d{2}\/batch\/.test(url)) {
    ddm.heart = {"unlimitedHeartsAvailable\":true}; 
	}
                        }
modifyDayOne();
modifySuperwall();


$done({ body: JSON.stringify(ddm) });
