import{_ as i,f as m,c as u,b as d,a as e,w as a,F as p,d as _,o as y,e as t,g as n}from"./index.55f63345.js";const g={setup(){return{example:m(4)}}},b=t(" New "),f=t("7"),h=t("New"),x=t("New"),v=t("New"),k={class:"mt-10"},w=t(" badge button "),N=t(" 2 "),B=t(" badge button "),C={class:"mt-10"},F=t(" badge button (custom) "),V=t(" 9 "),E=d("p",{class:"my-6"},"Animated badges",-1),A={class:"mt-10"},D=t(" Update badge value ");function M(r,c,S,l,T,U){const s=_("v-badge"),o=_("v-button");return y(),u(p,null,[d("div",null,[e(s,{"style-badge":"secondary",class:"mr-4"},{default:a(()=>[b,e(s,{"style-badge":"tiny success",class:"ml-2"},{default:a(()=>[f]),_:1})]),_:1}),e(s,{class:"mr-4"},{default:a(()=>[h]),_:1}),e(s,{"style-badge":"small warn",class:"mr-4"},{default:a(()=>[x]),_:1}),e(s,{"style-badge":"tiny success",class:"mr-4"},{default:a(()=>[v]),_:1})]),d("div",k,[e(o,{class:"relative mr-6"},{default:a(()=>[w,e(s,{position:"top-right","style-badge":"primary tiny danger"},{default:a(()=>[N]),_:1})]),_:1}),e(o,{class:"relative mr-6"},{default:a(()=>[B,e(s,{position:"top-right","style-badge":"circle danger"})]),_:1})]),d("div",C,[e(o,{class:"relative"},{default:a(()=>[F,e(s,{"style-badge":"primary tiny danger",class:"absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2"},{default:a(()=>[V]),_:1})]),_:1})]),E,d("div",null,[e(s,{"style-badge":"small secondary","update-animation":"scale-up","update-key":l.example,class:"mr-10"},{default:a(()=>[t(n(l.example),1)]),_:1},8,["update-key"]),e(s,{"style-badge":"small secondary","update-animation":"bounce","update-key":l.example,class:"mr-10"},{default:a(()=>[t(n(l.example),1)]),_:1},8,["update-key"]),e(s,{"style-badge":"small secondary","update-animation":"to-danger","update-key":l.example,class:"mr-10"},{default:a(()=>[t(n(l.example),1)]),_:1},8,["update-key"]),e(s,{"style-badge":"small secondary","update-animation":"to-success","update-key":l.example,class:"mr-10"},{default:a(()=>[t(n(l.example),1)]),_:1},8,["update-key"])]),d("div",A,[e(o,{onClick:c[0]||(c[0]=j=>l.example=(Math.random()*100).toFixed())},{default:a(()=>[D]),_:1})])],64)}const z=i(g,[["render",M]]);export{z as default};