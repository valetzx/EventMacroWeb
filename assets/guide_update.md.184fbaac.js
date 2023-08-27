import{_ as s,c as a,o as n,d as l}from"./app.5188eaa5.js";const y=JSON.parse('{"title":"\u66F4\u65B0\u65E5\u5FD7","description":"","frontmatter":{},"headers":[{"level":2,"title":"3.1\uFF081.20.1\uFF09","slug":"_3-1\uFF081-20-1\uFF09"},{"level":2,"title":"2.8.3 (1.19.4)","slug":"_2-8-3-1-19-4"},{"level":2,"title":"2.8.2 (1.19.3)","slug":"_2-8-2-1-19-3"},{"level":2,"title":"2.7.0 (1.19.3)","slug":"_2-7-0-1-19-3"},{"level":2,"title":"2.6.0 (1.19.2)","slug":"_2-6-0-1-19-2"},{"level":2,"title":"2.5.0 (Dev)","slug":"_2-5-0-dev"},{"level":2,"title":"2.4.0 (+1.18.2)","slug":"_2-4-0-1-18-2"},{"level":2,"title":"2.3.0 (1.19.2)","slug":"_2-3-0-1-19-2"},{"level":2,"title":"2.2.0 (1.19.2)","slug":"_2-2-0-1-19-2"}],"relativePath":"guide/update.md","lastUpdated":null}'),e={name:"guide/update.md"},p=l(`<h1 id="\u66F4\u65B0\u65E5\u5FD7" tabindex="-1">\u66F4\u65B0\u65E5\u5FD7 <a class="header-anchor" href="#\u66F4\u65B0\u65E5\u5FD7" aria-hidden="true">#</a></h1><h2 id="_3-1\uFF081-20-1\uFF09" tabindex="-1">3.1\uFF081.20.1\uFF09 <a class="header-anchor" href="#_3-1\uFF081-20-1\uFF09" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u66F4\u65B0\u5230\u4E86mc\u7248\u672C1.20.1</span></span>
<span class="line"><span style="color:#A6ACCD;">\u91CD\u5199\u4E86 gui \u90E8\u5206</span></span>
<span class="line"><span style="color:#A6ACCD;">\u652F\u6301\u8BFB\u53D6 Macros \u4E2D\u7684\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4FEE\u6539 stop()\u4E0D\u586B\u53C2\u6570\u5C06\u9ED8\u8BA4\u7ED3\u675F\u672C\u8EAB</span></span>
<span class="line"><span style="color:#A6ACCD;">\u589E\u52A0 message() doing</span></span>
<span class="line"><span style="color:#A6ACCD;">\u589E\u52A0 playerExist() Event</span></span>
<span class="line"><span style="color:#A6ACCD;">	\u53C2\u6570\u4E3A\u73A9\u5BB6\u540D\uFF0C\u5F53\u73A9\u5BB6\u5B58\u5728\u65F6\u89E6\u53D1</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4F18\u5316\u4E86\u90E8\u5206\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_2-8-3-1-19-4" tabindex="-1">2.8.3 (1.19.4) <a class="header-anchor" href="#_2-8-3-1-19-4" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u66F4\u65B0\u5230\u4E86mc\u7248\u672C1.19.4</span></span>
<span class="line"><span style="color:#A6ACCD;">\u79FB\u9664\u4E86shulkerdupe doing</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_2-8-2-1-19-3" tabindex="-1">2.8.2 (1.19.3) <a class="header-anchor" href="#_2-8-2-1-19-3" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u4E3Aclickslot\u589E\u52A0\u4E86\u5DE6\u53F3\u952E\u70B9\u51FB\u529F\u80FD</span></span>
<span class="line"><span style="color:#A6ACCD;">eg. </span></span>
<span class="line"><span style="color:#A6ACCD;">	clickslot(slot,0,PICKUP,0) \u7528\u5DE6\u952E\u70B9\u51FB\u7B2C1\u4E2A\u69FD\u4F4D</span></span>
<span class="line"><span style="color:#A6ACCD;">	clickslot(slot,0,PICKUP,1) \u7528\u53F3\u952E\u70B9\u51FB\u7B2C1\u4E2A\u69FD\u4F4D</span></span>
<span class="line"><span style="color:#A6ACCD;">	clickslot(slot,0,PICKUP,2) \u7528\u4E2D\u952E\u70B9\u51FB\u7B2C1\u4E2A\u69FD\u4F4D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_2-7-0-1-19-3" tabindex="-1">2.7.0 (1.19.3) <a class="header-anchor" href="#_2-7-0-1-19-3" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u4FEE\u590D\u4E86clickslot\u5728\u5176\u4ED6\u754C\u9762\u4E2D\u4E0D\u80FD\u4F7F\u7528\u7684bug</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E3Aclickslot\u589E\u52A0\u4E86action\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">	PICKUP \u62FF\u8D77</span></span>
<span class="line"><span style="color:#A6ACCD;">	QUICK_MOVE \u79FB\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">	SWAP \u4EA4\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;">	CLONE \u521B\u9020\u6A21\u5F0F\u4E13\u5C5E\u7684\u590D\u5236</span></span>
<span class="line"><span style="color:#A6ACCD;">	THROW \u6254\u4E00\u4E2A\u51FA\u53BB</span></span>
<span class="line"><span style="color:#A6ACCD;">	THROW_ALL \u6254\u5168\u90E8\u51FA\u53BB</span></span>
<span class="line"><span style="color:#A6ACCD;">	QUICK_CRAFT \u5FEB\u901F\u5408\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">	PICKUP_ALL \u62FF\u8D77\u5168\u90E8</span></span>
<span class="line"><span style="color:#A6ACCD;"> action\u9ED8\u8BA4\u4E3A\u62FF\u8D77</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u4F8B\u5B50\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">clickslot(slot,0,throw) #\u6254\u51FA\u7B2C\u4E00\u4E2A\u683C\u5B50\u4E2D\u7684\u4E00\u4E2A\u7269\u54C1</span></span>
<span class="line"><span style="color:#A6ACCD;">clickslot(slot,0,throw_all) #\u6254\u51FA\u7B2C\u4E00\u4E2A\u683C\u5B50\u4E2D\u7684\u5168\u90E8\u7269\u54C1</span></span>
<span class="line"><span style="color:#A6ACCD;">\u670D\u52A1\u5668\u7684\u7BB1\u5B50\u83DC\u5355\u63A8\u8350\u4F7F\u7528 pickup</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_2-6-0-1-19-2" tabindex="-1">2.6.0 (1.19.2) <a class="header-anchor" href="#_2-6-0-1-19-2" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u62C6\u5206\u5DE6\u952E\u7684\u4E24\u4E2A\u60C5\u51B5\uFF08\u65B9\u5757\u4E0E\u5B9E\u4F53\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">\u73B0\u5728\u4F60\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u4E24\u4E2A\u65B9\u5F0F\u653B\u51FB</span></span>
<span class="line"><span style="color:#A6ACCD;">attackblock() #\u653B\u51FB\u65B9\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">attackentity() #\u653B\u51FB\u5B9E\u4F53</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_2-5-0-dev" tabindex="-1">2.5.0 (Dev) <a class="header-anchor" href="#_2-5-0-dev" aria-hidden="true">#</a></h2><h2 id="_2-4-0-1-18-2" tabindex="-1">2.4.0 (+1.18.2) <a class="header-anchor" href="#_2-4-0-1-18-2" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u589E\u52A0\u4E861.18.2\u7248\u672C\u7684\u652F\u6301</span></span>
<span class="line"><span style="color:#A6ACCD;">\u589E\u52A0\u4E86\u6F5C\u5F71\u76D2\u590D\u5236doing eg.</span></span>
<span class="line"><span style="color:#A6ACCD;">	shulkerdupe(all) \u590D\u5236\u5168\u90E8</span></span>
<span class="line"><span style="color:#A6ACCD;">	shulkerdupe(0,1) \u590D\u5236\u7B2C\u4E00\u4E2A\u548C\u7B2C\u4E8C\u4E2A\u69FD\u4F4D</span></span>
<span class="line"><span style="color:#A6ACCD;">	shulkerdupe(0,1,2,3,4) \u590D\u5236\u7B2C1\uFF0C2\uFF0C3\uFF0C4\uFF0C5\u4E2A\u69FD\u4F4D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_2-3-0-1-19-2" tabindex="-1">2.3.0 (1.19.2) <a class="header-anchor" href="#_2-3-0-1-19-2" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u589E\u52A0\u4E86LeaveGameDoing eg:</span></span>
<span class="line"><span style="color:#A6ACCD;">	LeaveGame() \u9000\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;">	LeaveGame(\u8840\u91CF\u8FC7\u4F4E) \u9000\u51FA\u65F6\u663E\u793A\u8840\u91CF\u8FC7\u4F4E</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u589E\u52A0\u4E86HealthEvent eg:</span></span>
<span class="line"><span style="color:#A6ACCD;">	Health() \u5F53\u8840\u91CF\u4F4E\u4E8E10(\u4E94\u9897\u5FC3)\u65F6\u89E6\u53D1</span></span>
<span class="line"><span style="color:#A6ACCD;">	Health(15) \u5F53\u8840\u91CF\u4F4E\u4E8E15(\u4E03\u9897\u534A\u5FC3)\u65F6\u89E6\u53D1</span></span>
<span class="line"><span style="color:#A6ACCD;">	Health(15,&gt;) \u5F53\u8840\u91CF\u9AD8\u4E8E15(\u4E03\u9897\u534A\u5FC3)\u65F6\u89E6\u53D1</span></span>
<span class="line"><span style="color:#A6ACCD;">	Health(15,=) \u5F53\u8840\u91CF\u7B49\u4E8E15(\u4E03\u9897\u534A\u5FC3)\u65F6\u89E6\u53D1</span></span>
<span class="line"><span style="color:#A6ACCD;">	Health(15,&gt;=) \u5F53\u8840\u91CF\u5927\u4E8E\u7B49\u4E8E\u4E8E15(\u4E03\u9897\u534A\u5FC3)\u65F6\u89E6\u53D1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u4FEE\u590D\u4E86TargetBlockDoing\u53EF\u80FD\u5BFC\u81F4\u5D29\u6E83\u7684bug</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_2-2-0-1-19-2" tabindex="-1">2.2.0 (1.19.2) <a class="header-anchor" href="#_2-2-0-1-19-2" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">EM 2.2.0 \u66F4\u65B0\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#A6ACCD;">\u589E\u52A0\u4E86TargetBlock\u884C\u4E3A\u6765\u68C0\u6D4B\u6307\u5411\u65B9\u5757 eg:</span></span>
<span class="line"><span style="color:#A6ACCD;">	TargetBlock(minecraft:grass) \u5F53\u6307\u5411\u8349\u65B9\u5757\u65F6\u6267\u884C\u5B8F </span></span>
<span class="line"><span style="color:#A6ACCD;">	TargetBlock(minecraft:air)\u5F53\u65E0\u6307\u5411\u65F6\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E3A\u547D\u4EE4\u3001\u884C\u4E3A\u3001\u4E8B\u4EF6\u7684\u62A5\u9519\u4FE1\u606F\u589E\u52A0\u4E86\u7FFB\u8BD1</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4FEE\u590D\u4E86\u5F53\u4E8B\u4EF6\u51FA\u9519\u65F6\u4E0D\u4F1A\u81EA\u52A8\u505C\u6B62\u5B8F\u7684\u9519\u8BEF</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,18),c=[p];function o(t,r,i,C,A,d){return n(),a("div",null,c)}var D=s(e,[["render",o]]);export{y as __pageData,D as default};
