(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{1127:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(2998)}])},9186:function(t,e,n){"use strict";var i=n(5893),r=n(4184),c=n.n(r),a=n(1664),s=n.n(a),l=(n(7294),n(4394));e.Z=function(t){var e=t.breadcrumbs,n=t.border;return(0,i.jsx)("nav",{className:c()("w-full lg:mt-0 mt-20px",{"flex mx-auto w-[calc(100%-80px)] border-t-[1px] border-[#c3c3c3] pt-24px md:pb-[32px] md:px-[40px] px-[20px]":n},{"mb-16px":!n}),"aria-label":"Breadcrumb",children:(0,i.jsx)("ol",{className:"inline-flex flex-wrap items-center",children:e.map((function(t,e){return(0,i.jsxs)(l.If,{condition:!!(null===t||void 0===t?void 0:t.url),children:[(0,i.jsx)(l.Zf,{children:(0,i.jsxs)("li",{className:"inline-flex items-center ml-0",children:[(0,i.jsx)(s(),{href:t.url,children:(0,i.jsx)("a",{className:"text-[14px] text-[#949494] hover:text-[#cecece] capitalize",children:t.title})}),(0,i.jsx)("span",{className:"text-[14px] text-[#949494] mx-8px",children:"/"})]})}),(0,i.jsx)(l.Ot,{children:(0,i.jsx)("li",{"aria-current":"page",className:"ml-0",children:(0,i.jsx)("div",{className:"flex items-center",children:(0,i.jsx)("span",{className:"text-[#333333] text-[14px] font-PlusJakartaSansMedium capitalize",children:t.title})})})})]},"breadcrumbs-item-"+e)}))})})}},7209:function(t,e,n){"use strict";n.d(e,{h:function(){return u}});var i=n(5893),r=n(9008),c=n.n(r),a=n(1163),s=n(2962),l=n(6828),u=function(t){var e=(0,a.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(c(),{children:[(0,i.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,i.jsx)("link",{rel:"apple-touch-icon",href:"/assets/favicon.png"},"apple"),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/assets/favicon.png"},"icon32"),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/assets/favicon.png"},"icon16"),(0,i.jsx)("link",{rel:"icon",href:"/assets/favicon.png"},"favicon")]}),(0,i.jsx)(s.PB,{title:t.title,description:t.description,canonical:t.canonical||e.basePath,openGraph:{title:t.title,description:t.description,url:t.canonical,locale:l.X.locale,site_name:l.X.site_name}})]})}},6828:function(t,e,n){"use strict";n.d(e,{X:function(){return i}});var i={site_name:"Ju Clothing",title:"Ju Clothing",description:"Ju Clothing",locale:"vi"}},3292:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var i=n(5893),r=n(8649),c=n(1745),a=function(t){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z,{}),t.meta,(0,i.jsx)("main",{id:"main-content",children:t.children}),(0,i.jsx)(r.Z,{})]})}},2998:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSP:function(){return g},default:function(){return v}});var i=n(5893),r=n(7209),c=n(6828),a=n(6648),s=n(9186),l=n(7294),u=n(7568),o=n(7582),x=n(7837),d=n(8892),p=n(7041),f=function(t){var e,n=t.breadcrumbs,r=(0,p.getCookie)("uuid")||null,c=(e=String(r),(0,x.a)(["articals"],(0,u.Z)((function(){return(0,o.__generator)(this,(function(t){switch(t.label){case 0:return[4,d.Z.getArticleDetail(e)];case 1:return[2,t.sent().data]}}))})))).data;return(0,l.useEffect)((function(){}),[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"w-full flex flex-col justify-center items-center",children:[(0,i.jsx)(s.Z,{breadcrumbs:n,border:!0}),(0,i.jsxs)("div",{className:"w-full container",children:[(0,i.jsx)("h2",{className:"md:text-[24px] text-[20px] text-left text-[#333] mb-32px font-PlusJakartaSansMedium uppercase",children:null===c||void 0===c?void 0:c.titleVi}),(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:"text-[#9a9a9a] md:text-[16px] text-[14px] leading-[21.79px] text-center px-8px md:mt-8px md:mb-16px my-8px",dangerouslySetInnerHTML:{__html:String(null===c||void 0===c?void 0:c.descriptionVi)}})})]})]})})},m=n(3292),h=n(2746),g=!0,v=function(t){var e=t.slug,n=(0,h.useTranslations)("Category"),s=[{title:n("home"),url:a.Sd},{title:n("blog"),url:a.RM},{title:e}];return(0,i.jsx)(m.Z,{meta:(0,i.jsx)(r.h,{title:c.X.title,description:c.X.description}),children:(0,i.jsx)(f,{breadcrumbs:s})})}},8892:function(t,e,n){"use strict";n.d(e,{l:function(){return p}});var i=n(4111),r=n(7568),c=n(1438),a=n(8029),s=n(460),l=n(7582),u=n(6275),o=n(5758),x=n(5466),d={getArticles:function(t){return u.ZP.get("/articals",{params:t})},getArticleDetail:function(t){return u.ZP.get("/articals/".concat(t))},getArticleByPost:function(t,e){return u.ZP.get("/articals?type=".concat(t),{params:e})}};e.Z=d;var p=function(t){(0,a.Z)(n,t);var e=(0,s.Z)(n);function n(){var t;(0,c.Z)(this,n),t=e.apply(this,arguments);var a=(0,i.Z)(t);t.getPostbySlug=function(){var t=(0,r.Z)((function(t){return(0,l.__generator)(this,(function(e){switch(e.label){case 0:return[4,a.instance.get("".concat(o.vU,"/articals?slug=").concat(t)).catch(x.A)];case 1:return[2,e.sent()]}}))}));return function(e){return t.apply(this,arguments)}}();var s=(0,i.Z)(t);return t.getPostbyHomepage=(0,r.Z)((function(){return(0,l.__generator)(this,(function(t){switch(t.label){case 0:return[4,s.instance.get("".concat(o.vU,"/articals?onTop=true")).catch(x.A)];case 1:return[2,t.sent()]}}))})),t}return n}(x.Z)}},function(t){t.O(0,[61,529,962,114,774,888,179],(function(){return e=1127,t(t.s=e);var e}));var e=t.O();_N_E=e}]);