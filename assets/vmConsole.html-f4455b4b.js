import{_ as r,Y as i,Z as p,$ as n,a0 as e,a1 as a,a2 as l,a3 as d,F as s}from"./framework-5c327d6b.js";const u={},m=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,"虚拟机运行效率太低，不建议使用")],-1),_={href:"https://github.com/sylirre/vmConsole/releases/latest",target:"_blank",rel:"noopener noreferrer"},k=n("li",null,[n("p",null,[e("打开 "),n("code",null,"vmConsole"),e("，登录 "),n("code",null,"root")])],-1),h=n("li",null,[n("p",null,"设置存储设备：")],-1),v=d(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>setup-disk <span class="token parameter variable">-m</span> sys /dev/sda <span class="token operator">&amp;&amp;</span> <span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>可选 <code>Docker</code> 或 <code>TMOE</code>，安装 <code>Docker</code>：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apk update <span class="token operator">&amp;&amp;</span> apk <span class="token function">add</span> <span class="token function">docker</span> <span class="token operator">&amp;&amp;</span> rc-update <span class="token function">add</span> <span class="token function">docker</span> <span class="token operator">&amp;&amp;</span> <span class="token function">service</span> <span class="token function">docker</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3);function f(b,g){const c=s("ExternalLinkIcon"),o=s("FontIcon"),t=s("RouterLink");return i(),p("div",null,[m,n("ol",null,[n("li",null,[n("p",null,[e("准备："),n("a",_,[e("vmConsole"),a(c)])])]),k,h]),v,n("ul",null,[n("li",null,[n("p",null,[a(t,{to:"/Install/Docker.html"},{default:l(()=>[a(o,{icon:"page"}),e(" Docker：Linux 应用容器（推荐）")]),_:1})])]),n("li",null,[n("p",null,[a(t,{to:"/Install/TMOE.html"},{default:l(()=>[a(o,{icon:"page"}),e(" TMOE：PRoot/chroot 容器")]),_:1})])])])])}const C=r(u,[["render",f],["__file","vmConsole.html.vue"]]);export{C as default};
