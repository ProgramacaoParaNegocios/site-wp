import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{b as isAndroidWebView}from"./util.js";const prestoVimeoCss=":host{display:block}",PrestoVimeo=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.src=void 0,this.poster=void 0,this.player=void 0,this.getRef=void 0}getId(e){const s=/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/.exec(e||"");return(null==s?void 0:s[5])||""}parseHash(e){const s=e.match(/^.*(?:vimeo.com\/|video\/)(?:\d+)(?:\?.*\&*h=|\/)+(?<hash>[\d,a-f]+)/);return s?s.groups.hash:null}render(){if(this.src)return isAndroidWebView()?h("div",{class:"presto-iframe-fallback-container"},h("iframe",{src:`https://player.vimeo.com/video/${this.getId(this.src)}?h=${this.parseHash(this.src)}&amp;loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media`,allowFullScreen:!0,allowTransparency:!0,allow:"autoplay",style:{width:"100%"},class:"presto-fallback-iframe"})):h("div",{class:"plyr__video-embed",part:"embed",ref:this.getRef,"data-plyr-provider":"vimeo","data-plyr-embed-id":this.getId(this.src),"data-plyr-embed-hash":this.parseHash(this.src)})}static get style(){return prestoVimeoCss}},[0,"presto-vimeo",{src:[1],poster:[1],player:[8],getRef:[1040]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["presto-vimeo"].forEach((e=>{"presto-vimeo"===e&&(customElements.get(e)||customElements.define(e,PrestoVimeo))}))}defineCustomElement();export{PrestoVimeo as P,defineCustomElement as d};