(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+0UJ":function(t,a,s){},A6W1:function(t,a,s){"use strict";var e={props:["showTitle"]},i=(s("jhY3"),s("KHd+")),n=s("Kw5r");const{computed:o}=n.a.config.optionMergeStrategies,r={metadata:{siteName:"Almadih's Blog"}};var l=({options:t})=>{t.__staticData?t.__staticData.data=r:(t.__staticData=n.a.observable({data:r}),t.computed=o({$static:()=>t.__staticData.data},t.computed))},c=Object(i.a)(e,(function(){var t=this._self._c;return t("div",{staticClass:"author"},[t("g-image",{staticClass:"author__image",attrs:{alt:"Author image",src:s("RfNw"),width:"250",height:"250",blur:"5"}}),this.showTitle?t("h1",{staticClass:"author__site-title"},[this._v("\n    "+this._s(this.$static.metadata.siteName)+"\n  ")]):this._e(),t("p",{staticClass:"author__intro"},[this._v("\n    Welcome to my Personal Blog, i will post once in a while about some\n    challenges i've overcome and other cool stuff\n  ")]),this._m(0)],1)}),[function(){var t=this._self._c;return t("p",{staticClass:"author__links"},[t("a",{attrs:{href:"//twitter.com/almadih_desu"}},[this._v("Twitter")]),t("a",{attrs:{href:"//github.com/almadih"}},[this._v("GitHub")])])}],!1,null,null,null);"function"==typeof l&&l(c);a.a=c.exports},"BA+P":function(t,a,s){"use strict";var e=s("n6yM"),i=s("PpWc"),n={components:{PostMeta:e.a,PostTags:i.a},props:["post"]},o=(s("RbN1"),s("KHd+")),r=Object(o.a)(n,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"post-card content-box",class:{"post-card--has-poster":t.post.poster}},[a("div",{staticClass:"post-card__header"},[t.post.coverImage?a("g-image",{staticClass:"post-card__image",attrs:{alt:"Cover image",src:t.post.coverImage}}):t._e()],1),a("div",{staticClass:"post-card__content"},[a("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.title)}}),a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__description",domProps:{innerHTML:t._s(t.post.description)}}),a("PostMeta",{staticClass:"post-card__meta",attrs:{post:t.post}}),a("PostTags",{staticClass:"post-card__tags",attrs:{post:t.post}}),a("g-link",{staticClass:"post-card__link",attrs:{to:t.post.path}},[t._v("Link")])],1)])}),[],!1,null,null,null);a.a=r.exports},JXcM:function(t,a,s){},PpWc:function(t,a,s){"use strict";var e={props:["post"]},i=(s("UcCJ"),s("KHd+")),n=Object(i.a)(e,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"post-tags"},t._l(t.post.tags,(function(s){return a("g-link",{key:s.id,staticClass:"post-tags__link",attrs:{to:s.path}},[a("span",[t._v("#")]),t._v(" "+t._s(s.title)+"\n\t\t")])})),1)}),[],!1,null,null,null);a.a=n.exports},RbN1:function(t,a,s){"use strict";s("ckdJ")},RfNw:function(t,a){t.exports={type:"image",mimeType:"image/jpeg",src:"/blog/assets/static/author.2bdb4b6.61eb8a68a49b5283febc1fed0eaefc39.jpg",size:{width:250,height:250},sizes:"(max-width: 250px) 100vw, 250px",srcset:["/blog/assets/static/author.2bdb4b6.61eb8a68a49b5283febc1fed0eaefc39.jpg 250w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-12a8ad0d75be149c3f08a4a52ae041cc'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='5'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-12a8ad0d75be149c3f08a4a52ae041cc)' width='250' height='250' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABAAEADASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAABgcEBQgDAP/EADAQAAEDAwMBBwMEAwEAAAAAAAECAwQABRESITEGBxMiQVFhkRSBoQgVMnFCUtGx/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUA/8QAIhEAAgICAQMFAAAAAAAAAAAAAQIAEQMhMRJBYQQiUXHw/9oADAMBAAIRAxEAPwDnE6VLgClBxPqkbVb23pbx6kg7HxEjc44o0hQnStORlwjg55q6FucQlOdRPKsDYVyCTOmKgtEsKdetSQFH0oggWsNOBSR7VZRWm3EHSleoHBCkFOR6ihDtb6kk2KFAtlnWlu8XNRS24eWm0/yV7enzQVetqgZqEKZ1%2bs9lBF0ucWKsD%2bLjgCvjmpFh6rsd8c7u13KPIXgHCVc58hnk%2b1Z1a6DuF2DsiVeEvPrPiKhnUfvUuJ2bXG3LD8K9MsvowptKElKdY9cVvVVA5mZsbk7E1EhZGxroVbUvuyjqabfrTLiXsJTeLa73D%2bBjUMeFXvnfejoHFGT8SltsApT3zytLSRnc12TrkLJJI8se1TZDgTGEdA8SsE7cCucZAbSCec1hrtNmzszzDQRnOeaTH6gmfpuqembjvhMd9sgH0Uk8fc7%2b1O8OBSgEiln242dD0e23V1AKW1/Srz5BRyPzn8V5Go6hUWwBi96YvcZDqWH48pCnT4HCRhR%2bxNTp3UTH1JaZiy1Fo%2bJfhA/JrhGh2m1TLUrUw0hclJW4s7Z22z9h8VZO22yT5jkrLKyHFhDqT4VjgjNP178TZ0GvMJexaM45O6juashqQtlCM7Zwkk7fcCmifagzsytqItskzUgJ%2brXhOP8AVOR/7n4oxz4cZ3FXQ2Bc5eYAOakZs94rJPHlVH1F1nZun1LamyFLlJGSw0gqUM8ZPA%2b5pUXbtTu1xhOR2IrVtTjBcZcKlEeoV5fGaBplxU5rW46tTyskalZ1H%2b/%2b0ienJ20vYjTuvbIpkH9ngNpXkEqkL1ZAO4AGMGqlHV07tMs17s0yZAiSlpQ7bYyRoU86lRVjUTvsAMcnPtSanywuWpKScEhW/Nc%2b77xlSRnOARg7g81oTGidpLIC4IU0fmF0C2Sn31sXKM%2b9IjLw5DfUEhKh7EbGiBNimPOR4tsbdYW5nETvR3SfMqJ4AHOeAKB1dTm5JYF%2bbecmNI7kTWnFIcUkca8fyI4yd6mqvxEV2DblPKZkBPeuuKJJAOdG%2b%2bmpsvuocS2N3KWQAfv8Zo7oG%2bWU2WHaYtwZXKio7pSVeArUCcqTnkE5xjyosUdK6yKLk0020OPIn0Ip29jfUMu6wZkSS8p9qKElC1nKkgk7Z9NqJWpHJjrYMznAnKdhd24o62VFsn1A4/FXdg6evHVcwxrJGLq2yC44pWltrOcFSvLg49aKOxrsyVfGf3XqJtxq2qXqaY3SqSfXPIR7%2bdaEt9st1nY%2bntMONDaV4lIZbCcnjJ9aL5K0J4cTJnaB0Pcuip8T695l5EporQ4yDpBzunfzG3zVDFeUBn/Lj4rRv6gYzUjoVp5aErdZlt6FnlOrIOPY7fFZtSdDgB2yo8fP/aONiwh4MlZQpSVFIIBwfcGpLA7pzSDtVeFeI43FSmFKUrxE%2bgApowMl3BnVDW42cE7fccU/uwqyPWvpBU6WT39xUHEj0bGQn5yT8UiJ9quSr1b7UGVD6kNutKxssObA/wBc1rKKhMWIxHTpAZbSgBIwNgBtSsYmRgeJ/9k=' /%3e%3c/svg%3e"}},RxoO:function(t,a,s){"use strict";s("oeQ+")},UcCJ:function(t,a,s){"use strict";s("+0UJ")},V6Z3:function(t,a,s){"use strict";s("JXcM")},ckdJ:function(t,a,s){},iyQ6:function(t,a,s){"use strict";s.r(a);s("Kw5r");var e=s("DOVJ"),i=(s("Y6W1"),s("FNk8"),s("fVfk")),n={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:(t,{props:a,data:s,parent:n})=>{const{info:r,showLinks:l,showNavigation:c,ariaLabel:p}=a,{current:g,total:u,pages:A,start:d,end:f}=function({currentPage:t=1,totalPages:a=1},s){const e=Math.ceil(s/2);let i=Math.floor(t-e),n=Math.floor(t+e);a<=s?(i=0,n=a):t<=e?(i=0,n=s):t+e>=a&&(i=a-s,n=a);const o=[];for(let t=i+1;t<=n;t++)o.push(t);return{current:t,total:a,start:i,end:n,pages:o}}(r,a.range),h=Object(i.d)(n.$route),b=(s,i=s,n=i,r="")=>{s===g&&(n=a.ariaCurrentLabel);const l={to:o(h,s),exact:!0};return a.activeLinkClass&&(l.activeClass=a.activeLinkClass),a.exactActiveLinkClass&&(l.exactActiveClass=a.exactActiveLinkClass),t(e.a,{class:[a.linkClass,r],attrs:{...l,"aria-label":n.replace("%n",s),"aria-current":g===s}},[i])},C=l?A.map(t=>b(t,t,a.ariaLinkLabel)):[];if(c){const{firstLabel:t,prevLabel:s,nextLabel:e,lastLabel:i}=a,{ariaFirstLabel:n,ariaPrevLabel:o,ariaNextLabel:r,ariaLastLabel:l}=a,{firstClass:c,prevClass:p,nextClass:A,lastClass:h,navClass:v}=a;g>1&&C.unshift(b(g-1,s,o,[p,v])),d>0&&C.unshift(b(1,t,n,[c,v])),g<u&&C.push(b(g+1,e,r,[A,v])),f<u&&C.push(b(u,i,l,[h,v]))}return C.length<2?null:t("nav",{...s,attrs:{role:"navigation","aria-label":p}},C)}};function o(t,a){const s=/\/$/.test(t)?"/":"";return a>1?Object(i.g)(t)+`/${a}${s}`:t}s("6NbQ");var r=s("A6W1"),l=s("BA+P"),c={components:{Author:r.a,PostCard:l.a,Pager:n},metaInfo:{title:"Home"}},p=(s("RxoO"),s("KHd+")),g=null,u=Object(p.a)(c,(function(){var t=this._self._c;return t("Layout",{attrs:{"show-logo":!1}},[t("Author",{attrs:{"show-title":!0}}),t("div",{staticClass:"posts"},this._l(this.$page.posts.edges,(function(a){return t("PostCard",{key:a.node.id,attrs:{post:a.node}})})),1),t("Pager",{staticClass:"pager",attrs:{info:this.$page.posts.pageInfo,linkClass:"pager__link"}})],1)}),[],!1,null,"6e73e617",null);"function"==typeof g&&g(u);a.default=u.exports},jhY3:function(t,a,s){"use strict";s("mu2b")},mu2b:function(t,a,s){},n6yM:function(t,a,s){"use strict";var e={props:["post"]},i=(s("V6Z3"),s("KHd+")),n=Object(i.a)(e,(function(){var t=this._self._c;return t("div",{staticClass:"post-meta"},[this._v("\n   Posted "+this._s(this.post.date)+".\n   "),this.post.timeToRead?[t("strong",[this._v(this._s(this.post.timeToRead)+" min read.")])]:this._e()],2)}),[],!1,null,null,null);a.a=n.exports},"oeQ+":function(t,a,s){}}]);