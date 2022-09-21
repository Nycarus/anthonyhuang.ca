"use strict";(self.webpackChunkanthony_s_website=self.webpackChunkanthony_s_website||[]).push([[853],{2766:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var i=n(7294),o=n(9964),r=n(845),a=n(3460),l=n(5604),c=n(3099),d=n(2169),p=n(9299),m=n(3854),s=(0,d.default)(p.Z).withConfig({displayName:"desktopProjectListViewstyled__ContentBox",componentId:"sc-9y2kr2-0"})(["max-width:95vw;width:2000px;margin:0 auto;"]),g=(0,d.default)(m.Z).withConfig({displayName:"desktopProjectListViewstyled__ContentTitle",componentId:"sc-9y2kr2-1"})(["text-align:left;font-weight:500 !important;font-size:28px !important;padding-bottom:30px;"]),f=(0,d.default)(a.ZP).withConfig({displayName:"desktopProjectListViewstyled__ContentGrid",componentId:"sc-9y2kr2-2"})(["direction:column;"]),u=(0,d.default)(a.ZP).withConfig({displayName:"desktopProjectListViewstyled__ContentGridItem",componentId:"sc-9y2kr2-3"})(["padding-top:10px;padding-bottom:60px;"]),y=(0,d.default)(a.ZP).withConfig({displayName:"desktopProjectListViewstyled__ProjectGrid",componentId:"sc-9y2kr2-4"})(["direction:row;justify-content:space-between;"]),h=(0,d.default)(p.Z).withConfig({displayName:"desktopProjectListViewstyled__ProjectInfoBox",componentId:"sc-9y2kr2-5"})(["max-width:60vw;max-height:30vh;min-height:300px;width:1400px;height:400px;padding-right:20px;"]),w=(0,d.default)(m.Z).withConfig({displayName:"desktopProjectListViewstyled__ProjectTitle",componentId:"sc-9y2kr2-6"})(["text-align:left;font-weight:550 !important;font-size:32px !important;padding-left:10px;"]),x=(0,d.default)(a.ZP).withConfig({displayName:"desktopProjectListViewstyled__ProjectTypeGrid",componentId:"sc-9y2kr2-7"})(["direction:row;padding-top:5px;padding-bottom:5px;padding-left:10px;"]),j=(0,d.default)(a.ZP).withConfig({displayName:"desktopProjectListViewstyled__ProjectTypeGridItem",componentId:"sc-9y2kr2-8"})(["padding-right:8px;"]),_=(0,d.default)(p.Z).withConfig({displayName:"desktopProjectListViewstyled__ProjectTypeBox",componentId:"sc-9y2kr2-9"})(["width:fit-content;margin:1px;border-radius:2px !important;"]),P=(0,d.default)(m.Z).withConfig({displayName:"desktopProjectListViewstyled__ProjectTypeTypography",componentId:"sc-9y2kr2-10"})(["color:#fff;padding:5px;font-size:13px !important;font-weight:650 !important;"]),k=(0,d.default)(a.ZP).withConfig({displayName:"desktopProjectListViewstyled__ProjectButtonGrid",componentId:"sc-9y2kr2-11"})(["direction:row;"]),E=(0,d.default)(a.ZP).withConfig({displayName:"desktopProjectListViewstyled__ProjectButtonGridItem",componentId:"sc-9y2kr2-12"})(["padding-right:8px;"]),b=(0,d.default)(p.Z).withConfig({displayName:"desktopProjectListViewstyled__ProjectButtonBox",componentId:"sc-9y2kr2-13"})(["display:flex;min-width:200px;min-height:50px;width:fit-content;height:fit-content;margin:1px;align-items:center;justify-content:center;border-radius:8px !important;box-shadow:2px 2px !important;"]),I=(0,d.default)(m.Z).withConfig({displayName:"desktopProjectListViewstyled__ProjectButtonTypography",componentId:"sc-9y2kr2-14"})(["text-align:center;color:#fff;font-size:15px !important;font-weight:650 !important;"]),C=(0,d.default)(p.Z).withConfig({displayName:"desktopProjectListViewstyled__ProjectDescriptionBox",componentId:"sc-9y2kr2-15"})(["padding-top:5px;padding-bottom:8px;padding-left:10px;"]),Z=(0,d.default)(m.Z).withConfig({displayName:"desktopProjectListViewstyled__ProjectDescriptionTypography",componentId:"sc-9y2kr2-16"})(["font-size:15px !important;max-width:800px;"]),v=(0,d.default)(p.Z).withConfig({displayName:"desktopProjectListViewstyled__ProjectImageBoxOuter",componentId:"sc-9y2kr2-17"})(["display:flex;max-height:30vh;max-width:30vw;min-height:300px;width:400px;height:400px;justify-content:center;"]),L=d.default.img.withConfig({displayName:"desktopProjectListViewstyled__ProjectImage",componentId:"sc-9y2kr2-18"})(["position:relative;width:fit-content;height:fit-content;max-width:100%;max-height:100%;float:right;top:50%;transform:translateY(-50%);object-fit:scale-down;"]);function N(e){return i.createElement(s,null,i.createElement(g,null,"Projects"),i.createElement(f,{container:!0},e.data.allProjectJson.edges.map((function(e){var t=e.node;return i.createElement(u,{item:!0,key:t.title+"desktop"},i.createElement(y,{container:!0},i.createElement(a.ZP,{item:!0},i.createElement(l.Z,null,i.createElement(h,null,i.createElement(w,null,t.title),i.createElement(x,{container:!0},t.project_type?t.project_type.map((function(e){return i.createElement(j,{item:!0},i.createElement(_,{bgcolor:"primary.main"},i.createElement(P,null,e.name)))})):null),i.createElement(x,{container:!0},t.tags?t.tags.map((function(e){return i.createElement(j,{item:!0},i.createElement(_,{bgcolor:"secondary.main"},i.createElement(P,null,e.name)))})):null),i.createElement(k,{container:!0},i.createElement(E,{item:!0},i.createElement(c.Z,{href:"/project/"+t.slug,target:"_blank",rel:"noopener noreferrer"},i.createElement(b,{bgcolor:"warning.main"},i.createElement(I,null,"More Information")))),t.source?i.createElement(E,{item:!0},i.createElement(c.Z,{href:t.source,target:"_blank",rel:"noopener noreferrer"},i.createElement(b,{bgcolor:"warning.main"},i.createElement(I,null,"Github")))):null),i.createElement(C,null,i.createElement(Z,{noWrap:!0},t.description))))),i.createElement(a.ZP,{item:!0},i.createElement(l.Z,null,i.createElement(v,null,t.images?i.createElement(v,null,i.createElement(L,{src:t.images[0].image.publicURL})):i.createElement("div",null))))))}))))}var V=(0,d.default)(m.Z).withConfig({displayName:"mobileProjectListViewstyled__ContentTitle",componentId:"sc-1cvq5et-0"})(["text-align:center;font-weight:500 !important;font-size:28px !important;padding-bottom:30px;"]),T=(0,d.default)(a.ZP).withConfig({displayName:"mobileProjectListViewstyled__ContentGrid",componentId:"sc-1cvq5et-1"})(["direction:row;justify-content:center;"]),B=(0,d.default)(c.Z).withConfig({displayName:"mobileProjectListViewstyled__ProjectButton",componentId:"sc-1cvq5et-2"})(["height:45vw;width:45vw;margin:2vw;"]),G=(0,d.default)(m.Z).withConfig({displayName:"mobileProjectListViewstyled__ProjectTypography",componentId:"sc-1cvq5et-3"})(["text-align:center;margin-left:3px;margin-right:3px;text-overflow:ellipsis;overflow:hidden;color:black;font-size:20px !important;font-weight:600 !important;"]),z=(0,d.default)(l.Z).withConfig({displayName:"mobileProjectListViewstyled__ProjectPaperWithoutImage",componentId:"sc-1cvq5et-4"})(["display:flex;justify-content:center;align-items:center;height:40vw;width:40vw;background-color:white;"]);function q(e){return i.createElement(i.Fragment,null,i.createElement(V,null,"Projects"),i.createElement(T,{container:!0},e.data.allProjectJson.edges.map((function(e){var t=e.node;return i.createElement(p.Z,{key:t.title+"mobile"},t.images?i.createElement(B,{href:"/project/"+t.slug,target:"_blank",rel:"noopener noreferrer"},i.createElement(l.Z,{style:{display:"flex",justifyContent:"center",alignItems:"center",backgroundImage:"linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.8)), url("+t.images[0].image.publicURL+")",backgroundSize:"cover",height:"40vw",width:"40vw"}},i.createElement(G,null,t.title))):i.createElement(B,{href:"/project/"+t.slug,target:"_blank",rel:"noopener noreferrer"},i.createElement(z,null,i.createElement(G,null,t.title))))}))))}function D(e){var t=(0,r.K2)("2541637629");return i.createElement("div",{style:{paddingTop:"40px"}},e.isMobile?i.createElement(q,{data:t}):i.createElement(N,{data:t}))}function J(){return i.createElement(o.Z,null,i.createElement(D,null))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-6fcc41d405ccd5b2943f.js.map