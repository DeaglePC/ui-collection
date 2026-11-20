import{r as L,j as D}from"./client-CsvIHAk3.js";import{r as Q0}from"./index-BmIoBVfF.js";import{W as Df,S as Hf,O as Bf,a as Lf,N as Yf,P as Xf,M as Nf,C as tr,V as jf}from"./three.module-DWYNQcxN.js";import{S as Ur}from"./stage-EygMkHzf.js";const qf={sm:{borderRadius:32,borderWidth:1,width:70,height:36},md:{borderRadius:16,borderWidth:1},line:{borderRadius:16,borderWidth:1},"pulse-outside":{borderRadius:16,borderWidth:1},"pulse-inner":{borderRadius:16,borderWidth:1}},Gf={sm:{dark:{strokeOpacity:.46,innerOpacity:.24,bloomOpacity:.38,innerShadow:"rgba(255, 255, 255, 0.3)",saturation:1.2},light:{strokeOpacity:.12,innerOpacity:.3,bloomOpacity:.16,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.8}},md:{dark:{strokeOpacity:.26,innerOpacity:.42,bloomOpacity:.24,innerShadow:"rgba(255, 255, 255, 0.27)",saturation:1.2},light:{strokeOpacity:.12,innerOpacity:.26,bloomOpacity:.34,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.5}},line:{dark:{strokeOpacity:1.14,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(255, 255, 255, 0.1)",saturation:1.2},light:{strokeOpacity:.16,innerOpacity:.32,bloomOpacity:.3,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.95}},"pulse-outside":{dark:{strokeOpacity:.94,innerOpacity:.34,bloomOpacity:.3,innerShadow:"transparent",saturation:1.2,brightness:1.9,hairlineOpacity:0},light:{strokeOpacity:1.96,innerOpacity:1.04,bloomOpacity:.42,innerShadow:"transparent",saturation:.6,brightness:1.7,hairlineOpacity:0}},"pulse-inner":{dark:{strokeOpacity:1.54,innerOpacity:.44,bloomOpacity:.66,innerShadow:"transparent",saturation:1.2,brightness:.75},light:{strokeOpacity:.32,innerOpacity:.4,bloomOpacity:.8,innerShadow:"transparent",saturation:.75,brightness:1.3}}},rn={colorful:{border:[{color:"rgb(255, 50, 100)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(40, 140, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(50, 200, 80)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(30, 185, 170)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(100, 70, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(40, 140, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 120, 40)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(240, 50, 180)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(180, 40, 240)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 60, 80)",secondary:"rgba(40, 190, 180, 0.98)"},spikeLt:{primary:"rgb(200, 30, 60)",secondary:"rgb(20, 150, 140)"}},mono:{border:[{color:"rgb(180, 180, 180)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(140, 140, 140)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(160, 160, 160)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(130, 130, 130)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(170, 170, 170)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(150, 150, 150)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(190, 190, 190)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(145, 145, 145)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(165, 165, 165)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(200, 200, 200)",secondary:"rgb(170, 170, 170)"},spikeLt:{primary:"rgb(80, 80, 80)",secondary:"rgb(120, 120, 120)"}},ocean:{border:[{color:"rgb(100, 80, 220)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(60, 120, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(80, 100, 200)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(50, 140, 220)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(120, 80, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(70, 130, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(140, 100, 240)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(90, 110, 230)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(130, 70, 255)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(100, 120, 255)",secondary:"rgba(130, 100, 220, 0.98)"},spikeLt:{primary:"rgb(60, 60, 180)",secondary:"rgb(80, 100, 200)"}},sunset:{border:[{color:"rgb(255, 80, 50)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 160, 40)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(255, 120, 60)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(255, 200, 50)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(255, 100, 80)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(255, 180, 60)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 60, 60)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(255, 140, 50)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(255, 90, 70)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 140, 80)",secondary:"rgba(255, 100, 60, 0.98)"},spikeLt:{primary:"rgb(200, 80, 40)",secondary:"rgb(220, 120, 30)"}},forest:{border:[{color:"rgb(46, 160, 90)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(30, 190, 120)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(70, 180, 70)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(20, 150, 130)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(90, 200, 80)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(40, 170, 110)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(120, 210, 70)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(35, 145, 100)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(60, 195, 140)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(46, 160, 90)",secondary:"rgba(30, 190, 120,, 0.98)"},spikeLt:{primary:"rgb(33, 115, 65)",secondary:"rgb(22, 137, 86)"}},candy:{border:[{color:"rgb(240, 70, 170)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 90, 140)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(215, 60, 200)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(255, 110, 180)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(200, 80, 240)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(250, 60, 150)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(230, 120, 220)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(245, 85, 165)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(210, 70, 230)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(240, 70, 170)",secondary:"rgba(255, 90, 140,, 0.98)"},spikeLt:{primary:"rgb(173, 50, 122)",secondary:"rgb(184, 65, 101)"}},ice:{border:[{color:"rgb(90, 200, 240)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(60, 175, 230)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(130, 220, 250)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(70, 190, 215)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(110, 210, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(50, 165, 220)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(150, 230, 250)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(85, 195, 235)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(65, 180, 245)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(90, 200, 240)",secondary:"rgba(60, 175, 230,, 0.98)"},spikeLt:{primary:"rgb(65, 144, 173)",secondary:"rgb(43, 126, 166)"}},gold:{border:[{color:"rgb(240, 190, 60)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 210, 90)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(225, 165, 40)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(250, 200, 70)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(255, 225, 120)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(230, 175, 50)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(245, 205, 85)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(215, 155, 35)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(255, 215, 100)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(240, 190, 60)",secondary:"rgba(255, 210, 90,, 0.98)"},spikeLt:{primary:"rgb(173, 137, 43)",secondary:"rgb(184, 151, 65)"}}},Ph={colorful:{border:[{color:"rgb(50, 200, 80)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(30, 185, 170)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 120, 40)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(100, 70, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(240, 50, 180)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(180, 40, 240)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(40, 140, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 50, 100)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(50, 200, 80, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(30, 185, 170, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 120, 40, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(100, 70, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(240, 50, 180, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(180, 40, 240, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(40, 140, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 50, 100, 0.3)",pos:"100% 27%",size:"11px 12px"}]},mono:{border:[{color:"rgb(160, 160, 160)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(140, 140, 140)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(180, 180, 180)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(150, 150, 150)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(170, 170, 170)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(155, 155, 155)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(145, 145, 145)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(165, 165, 165)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(160, 160, 160, 0.25)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(140, 140, 140, 0.22)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(180, 180, 180, 0.17)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(150, 150, 150, 0.17)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(170, 170, 170, 0.15)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(155, 155, 155, 0.20)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(145, 145, 145, 0.15)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(165, 165, 165, 0.15)",pos:"100% 27%",size:"11px 12px"}]},ocean:{border:[{color:"rgb(60, 140, 200)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(50, 120, 180)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(100, 80, 220)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(80, 100, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(120, 70, 240)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(90, 80, 220)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(70, 110, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(110, 90, 230)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(60, 140, 200, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(50, 120, 180, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(100, 80, 220, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(80, 100, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(120, 70, 240, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(90, 80, 220, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(70, 110, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(110, 90, 230, 0.3)",pos:"100% 27%",size:"11px 12px"}]},sunset:{border:[{color:"rgb(255, 180, 50)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 150, 40)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 80, 60)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(255, 100, 80)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(255, 60, 80)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(255, 120, 60)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(255, 200, 50)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 90, 70)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(255, 180, 50, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(255, 150, 40, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 80, 60, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(255, 100, 80, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(255, 60, 80, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(255, 120, 60, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(255, 200, 50, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 90, 70, 0.3)",pos:"100% 27%",size:"11px 12px"}]},forest:{border:[{color:"rgb(46, 160, 90)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(30, 190, 120)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(70, 180, 70)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(20, 150, 130)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(90, 200, 80)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(40, 170, 110)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(120, 210, 70)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(35, 145, 100)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(60, 195, 140,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(46, 160, 90,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(30, 190, 120,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(70, 180, 70,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(20, 150, 130,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(90, 200, 80,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(40, 170, 110,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(120, 210, 70,, 0.3)",pos:"100% 27%",size:"11px 12px"}]},candy:{border:[{color:"rgb(240, 70, 170)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 90, 140)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(215, 60, 200)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(255, 110, 180)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(200, 80, 240)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(250, 60, 150)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(230, 120, 220)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(245, 85, 165)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(210, 70, 230,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(240, 70, 170,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 90, 140,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(215, 60, 200,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(255, 110, 180,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(200, 80, 240,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(250, 60, 150,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(230, 120, 220,, 0.3)",pos:"100% 27%",size:"11px 12px"}]},ice:{border:[{color:"rgb(90, 200, 240)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(60, 175, 230)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(130, 220, 250)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(70, 190, 215)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(110, 210, 255)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(50, 165, 220)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(150, 230, 250)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(85, 195, 235)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(65, 180, 245,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(90, 200, 240,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(60, 175, 230,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(130, 220, 250,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(70, 190, 215,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(110, 210, 255,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(50, 165, 220,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(150, 230, 250,, 0.3)",pos:"100% 27%",size:"11px 12px"}]},gold:{border:[{color:"rgb(240, 190, 60)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 210, 90)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(225, 165, 40)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(250, 200, 70)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(255, 225, 120)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(230, 175, 50)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(245, 205, 85)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(215, 155, 35)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(255, 215, 100,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(240, 190, 60,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 210, 90,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(225, 165, 40,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(250, 200, 70,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(255, 225, 120,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(230, 175, 50,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(245, 205, 85,, 0.3)",pos:"100% 27%",size:"11px 12px"}]}};function Uf(e){return Ph[e].border.map(t=>`radial-gradient(ellipse ${t.size} at ${t.pos}, ${t.color}, transparent)`).join(`,
    `)}function Vf(e){return Ph[e].inner.map(t=>`radial-gradient(ellipse ${t.size} at ${t.pos}, ${t.color}, transparent)`).join(`,
    `)}function Kf(e){return rn[e].border.map(t=>`radial-gradient(ellipse ${t.size} at ${t.pos}, ${t.color}, transparent)`).join(`,
    `)}function Qf(e){const t=rn[e],a=e==="mono"?.225:.45;return t.border.map(o=>{const r=o.color.replace("rgb(","rgba(").replace(")",`, ${a})`);return`radial-gradient(ellipse ${o.size.split(" ").map(n=>{const s=parseInt(n);return`${Math.round(s*.9)}px`}).join(" ")} at ${o.pos}, ${r}, transparent)`}).join(`,
    `)}function Zf(e,t){const a=rn[e];return t?a.spike:a.spikeLt}const Jf={colorful:{dark:[{color:"rgb(255, 50, 100)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 180, 220)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 160, 30)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(240, 50, 180)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(30, 185, 170)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(255, 50, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 140, 255)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(30, 185, 170)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(255, 120, 40)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(240, 50, 180)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},mono:{dark:[{color:"rgb(200, 200, 200)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(170, 170, 170)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(155, 155, 155)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(185, 185, 185)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(165, 165, 165)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(180, 180, 180)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(160, 160, 160)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(175, 175, 175)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(190, 190, 190)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(100, 100, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(80, 80, 80)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(90, 90, 90)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(70, 70, 70)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(85, 85, 85)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(95, 95, 95)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(75, 75, 75)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(105, 105, 105)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(65, 65, 65)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},ocean:{dark:[{color:"rgb(100, 80, 220)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(60, 120, 255)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(80, 100, 200)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(130, 70, 255)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(70, 130, 255)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(120, 80, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(90, 110, 230)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(110, 90, 240)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(140, 100, 255)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(80, 60, 200)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(50, 100, 220)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(70, 90, 190)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(110, 60, 220)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(60, 110, 230)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 240)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(80, 100, 210)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(90, 80, 225)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(120, 90, 245)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},sunset:{dark:[{color:"rgb(255, 100, 60)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 180, 50)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(255, 140, 70)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(255, 80, 80)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 200, 60)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(255, 120, 50)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(255, 160, 80)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(255, 90, 60)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(255, 70, 70)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(220, 80, 40)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(230, 150, 30)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(210, 110, 50)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(200, 60, 60)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(220, 170, 40)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(210, 100, 30)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(230, 130, 60)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(190, 70, 50)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(180, 50, 50)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},forest:{dark:[{color:"rgb(46, 160, 90)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(30, 190, 120)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(70, 180, 70)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(20, 150, 130)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(90, 200, 80)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(40, 170, 110)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(120, 210, 70)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(35, 145, 100)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(60, 195, 140)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(33, 115, 65)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(22, 137, 86)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(50, 130, 50)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(14, 108, 94)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(65, 144, 58)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(29, 122, 79)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(86, 151, 50)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(25, 104, 72)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(43, 140, 101)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},candy:{dark:[{color:"rgb(240, 70, 170)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 90, 140)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(215, 60, 200)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(255, 110, 180)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(200, 80, 240)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(250, 60, 150)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(230, 120, 220)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(245, 85, 165)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(210, 70, 230)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(173, 50, 122)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(184, 65, 101)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(155, 43, 144)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(184, 79, 130)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(144, 58, 173)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(180, 43, 108)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(166, 86, 158)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(176, 61, 119)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(151, 50, 166)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},ice:{dark:[{color:"rgb(90, 200, 240)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(60, 175, 230)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(130, 220, 250)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(70, 190, 215)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(110, 210, 255)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(50, 165, 220)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(150, 230, 250)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(85, 195, 235)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(65, 180, 245)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(65, 144, 173)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(43, 126, 166)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(94, 158, 180)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(50, 137, 155)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(79, 151, 184)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(36, 119, 158)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(108, 166, 180)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(61, 140, 169)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(47, 130, 176)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},gold:{dark:[{color:"rgb(240, 190, 60)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 210, 90)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(225, 165, 40)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(250, 200, 70)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 225, 120)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(230, 175, 50)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(245, 205, 85)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(215, 155, 35)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(255, 215, 100)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(173, 137, 43)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(184, 151, 65)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(162, 119, 29)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(180, 144, 50)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(184, 162, 86)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(166, 126, 36)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(176, 148, 61)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(155, 112, 25)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(184, 155, 72)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]}};function ed(e,t,a){return Jf[e][t?"dark":"light"].map(o=>{const r=o.offsetX===0?"":o.offsetX>0?` + ${o.offsetX}px`:` - ${Math.abs(o.offsetX)}px`,n=o.offsetY===0?"":o.offsetY>0?` + ${o.offsetY}px`:` - ${Math.abs(o.offsetY)}px`;return`radial-gradient(ellipse calc(${o.sizeW}px * var(--beam-w-${a})) calc(${o.sizeH}px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%${r}) calc(100%${n}), ${o.color}, transparent)`}).join(`,
       `)}const td={colorful:[{color:"rgba(255, 50, 100, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(40, 180, 220, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(50, 200, 80, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(180, 40, 240, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 160, 30, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(100, 70, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(40, 140, 255, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(240, 50, 180, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(30, 185, 170, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],mono:[{color:"rgba(200, 200, 200, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(170, 170, 170, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(155, 155, 155, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(185, 185, 185, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(165, 165, 165, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(180, 180, 180, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(160, 160, 160, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(175, 175, 175, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(190, 190, 190, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],ocean:[{color:"rgba(100, 80, 220, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(60, 120, 255, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(80, 100, 200, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(130, 70, 255, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(70, 130, 255, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(120, 80, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(90, 110, 230, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(110, 90, 240, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(140, 100, 255, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],sunset:[{color:"rgba(255, 100, 60, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 180, 50, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(255, 140, 70, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(255, 80, 80, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 200, 60, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(255, 120, 50, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(255, 160, 80, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(255, 90, 60, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(255, 70, 70, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],forest:[{color:"rgba(46, 160, 90,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(30, 190, 120,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(70, 180, 70,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(20, 150, 130,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(90, 200, 80,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(40, 170, 110,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(120, 210, 70,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(35, 145, 100,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(60, 195, 140,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],candy:[{color:"rgba(240, 70, 170,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 90, 140,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(215, 60, 200,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(255, 110, 180,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(200, 80, 240,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(250, 60, 150,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(230, 120, 220,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(245, 85, 165,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(210, 70, 230,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],ice:[{color:"rgba(90, 200, 240,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(60, 175, 230,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(130, 220, 250,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(70, 190, 215,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(110, 210, 255,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(50, 165, 220,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(150, 230, 250,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(85, 195, 235,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(65, 180, 245,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],gold:[{color:"rgba(240, 190, 60,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 210, 90,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(225, 165, 40,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(250, 200, 70,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 225, 120,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(230, 175, 50,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(245, 205, 85,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(215, 155, 35,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(255, 215, 100,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}]};function ad(e,t){return td[e].map(a=>{const o=a.offsetX===0?"":a.offsetX>0?` + ${a.offsetX}px`:` - ${Math.abs(a.offsetX)}px`,r=a.offsetY===0?"":` - ${Math.abs(a.offsetY)}px`;return`radial-gradient(ellipse calc(${a.sizeW}px * var(--beam-w-${t})) calc(${a.sizeH}px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%${o}) calc(100%${r}), ${a.color}, transparent)`}).join(`,
    `)}const od={colorful:{dark:{spikes:[{color1:"rgb(100, 70, 255)",color2:"rgba(100, 70, 255, 1)"},{color1:"rgba(255, 170, 40, 0.59)",color2:"rgba(255, 170, 40, 0.29)"},{color1:"rgb(50, 200, 100)",color2:"rgba(50, 200, 100, 1)"},{color1:"rgba(200, 50, 240, 0.91)",color2:"rgba(200, 50, 240, 0.45)"},{color1:"rgb(40, 140, 255)",color2:"rgba(40, 140, 255, 1)"}]},light:{spikes:[{color1:"rgb(80, 50, 200)",color2:"rgba(80, 50, 200, 0.8)"},{color1:"rgba(210, 130, 0, 0.7)",color2:"rgba(210, 130, 0, 0.46)"},{color1:"rgb(30, 160, 70)",color2:"rgba(30, 160, 70, 0.82)"},{color1:"rgb(160, 30, 190)",color2:"rgba(160, 30, 190, 0.7)"},{color1:"rgb(30, 100, 200)",color2:"rgba(30, 100, 200, 0.78)"}]}},mono:{dark:{spikes:[{color1:"rgb(200, 200, 200)",color2:"rgba(200, 200, 200, 1)"},{color1:"rgba(180, 180, 180, 0.59)",color2:"rgba(180, 180, 180, 0.29)"},{color1:"rgb(190, 190, 190)",color2:"rgba(190, 190, 190, 1)"},{color1:"rgba(170, 170, 170, 0.91)",color2:"rgba(170, 170, 170, 0.45)"},{color1:"rgb(185, 185, 185)",color2:"rgba(185, 185, 185, 1)"}]},light:{spikes:[{color1:"rgb(80, 80, 80)",color2:"rgba(80, 80, 80, 0.8)"},{color1:"rgba(100, 100, 100, 0.7)",color2:"rgba(100, 100, 100, 0.46)"},{color1:"rgb(70, 70, 70)",color2:"rgba(70, 70, 70, 0.82)"},{color1:"rgb(90, 90, 90)",color2:"rgba(90, 90, 90, 0.7)"},{color1:"rgb(85, 85, 85)",color2:"rgba(85, 85, 85, 0.78)"}]}},ocean:{dark:{spikes:[{color1:"rgb(100, 80, 255)",color2:"rgb(100, 80, 255)"},{color1:"rgba(80, 130, 220, 0.59)",color2:"rgba(80, 130, 220, 0.29)"},{color1:"rgb(60, 100, 255)",color2:"rgb(60, 100, 255)"},{color1:"rgba(90, 120, 200, 0.91)",color2:"rgba(90, 120, 200, 0.45)"},{color1:"rgb(120, 90, 255)",color2:"rgb(120, 90, 255)"}]},light:{spikes:[{color1:"rgb(50, 40, 180)",color2:"rgba(50, 40, 180, 0.8)"},{color1:"rgba(40, 80, 200, 0.7)",color2:"rgba(40, 80, 200, 0.46)"},{color1:"rgb(30, 50, 190)",color2:"rgba(30, 50, 190, 0.82)"},{color1:"rgb(60, 90, 180)",color2:"rgba(60, 90, 180, 0.7)"},{color1:"rgb(70, 60, 200)",color2:"rgba(70, 60, 200, 0.78)"}]}},sunset:{dark:{spikes:[{color1:"rgb(255, 100, 80)",color2:"rgb(255, 100, 80)"},{color1:"rgba(255, 150, 80, 0.59)",color2:"rgba(255, 150, 80, 0.29)"},{color1:"rgb(255, 80, 60)",color2:"rgb(255, 80, 60)"},{color1:"rgba(255, 120, 50, 0.91)",color2:"rgba(255, 120, 50, 0.45)"},{color1:"rgb(255, 140, 70)",color2:"rgb(255, 140, 70)"}]},light:{spikes:[{color1:"rgb(200, 60, 30)",color2:"rgba(200, 60, 30, 0.8)"},{color1:"rgba(220, 100, 20, 0.7)",color2:"rgba(220, 100, 20, 0.46)"},{color1:"rgb(180, 40, 20)",color2:"rgba(180, 40, 20, 0.82)"},{color1:"rgb(210, 80, 10)",color2:"rgba(210, 80, 10, 0.7)"},{color1:"rgb(190, 70, 30)",color2:"rgba(190, 70, 30, 0.78)"}]}},forest:{dark:{spikes:[{color1:"rgb(46, 160, 90)",color2:"rgb(30, 190, 120)"},{color1:"rgba(70, 180, 70,, 0.59)",color2:"rgba(20, 150, 130,, 0.29)"},{color1:"rgb(90, 200, 80)",color2:"rgb(40, 170, 110)"},{color1:"rgba(120, 210, 70,, 0.91)",color2:"rgba(35, 145, 100,, 0.45)"},{color1:"rgb(60, 195, 140)",color2:"rgb(46, 160, 90)"}]},light:{spikes:[{color1:"rgb(33, 115, 65)",color2:"rgba(22, 137, 86,, 0.8)"},{color1:"rgba(50, 130, 50,, 0.7)",color2:"rgba(14, 108, 94,, 0.46)"},{color1:"rgb(65, 144, 58)",color2:"rgba(29, 122, 79,, 0.82)"},{color1:"rgb(86, 151, 50)",color2:"rgba(25, 104, 72,, 0.7)"},{color1:"rgb(43, 140, 101)",color2:"rgba(33, 115, 65,, 0.78)"}]}},candy:{dark:{spikes:[{color1:"rgb(240, 70, 170)",color2:"rgb(255, 90, 140)"},{color1:"rgba(215, 60, 200,, 0.59)",color2:"rgba(255, 110, 180,, 0.29)"},{color1:"rgb(200, 80, 240)",color2:"rgb(250, 60, 150)"},{color1:"rgba(230, 120, 220,, 0.91)",color2:"rgba(245, 85, 165,, 0.45)"},{color1:"rgb(210, 70, 230)",color2:"rgb(240, 70, 170)"}]},light:{spikes:[{color1:"rgb(173, 50, 122)",color2:"rgba(184, 65, 101,, 0.8)"},{color1:"rgba(155, 43, 144,, 0.7)",color2:"rgba(184, 79, 130,, 0.46)"},{color1:"rgb(144, 58, 173)",color2:"rgba(180, 43, 108,, 0.82)"},{color1:"rgb(166, 86, 158)",color2:"rgba(176, 61, 119,, 0.7)"},{color1:"rgb(151, 50, 166)",color2:"rgba(173, 50, 122,, 0.78)"}]}},ice:{dark:{spikes:[{color1:"rgb(90, 200, 240)",color2:"rgb(60, 175, 230)"},{color1:"rgba(130, 220, 250,, 0.59)",color2:"rgba(70, 190, 215,, 0.29)"},{color1:"rgb(110, 210, 255)",color2:"rgb(50, 165, 220)"},{color1:"rgba(150, 230, 250,, 0.91)",color2:"rgba(85, 195, 235,, 0.45)"},{color1:"rgb(65, 180, 245)",color2:"rgb(90, 200, 240)"}]},light:{spikes:[{color1:"rgb(65, 144, 173)",color2:"rgba(43, 126, 166,, 0.8)"},{color1:"rgba(94, 158, 180,, 0.7)",color2:"rgba(50, 137, 155,, 0.46)"},{color1:"rgb(79, 151, 184)",color2:"rgba(36, 119, 158,, 0.82)"},{color1:"rgb(108, 166, 180)",color2:"rgba(61, 140, 169,, 0.7)"},{color1:"rgb(47, 130, 176)",color2:"rgba(65, 144, 173,, 0.78)"}]}},gold:{dark:{spikes:[{color1:"rgb(240, 190, 60)",color2:"rgb(255, 210, 90)"},{color1:"rgba(225, 165, 40,, 0.59)",color2:"rgba(250, 200, 70,, 0.29)"},{color1:"rgb(255, 225, 120)",color2:"rgb(230, 175, 50)"},{color1:"rgba(245, 205, 85,, 0.91)",color2:"rgba(215, 155, 35,, 0.45)"},{color1:"rgb(255, 215, 100)",color2:"rgb(240, 190, 60)"}]},light:{spikes:[{color1:"rgb(173, 137, 43)",color2:"rgba(184, 151, 65,, 0.8)"},{color1:"rgba(162, 119, 29,, 0.7)",color2:"rgba(180, 144, 50,, 0.46)"},{color1:"rgb(184, 162, 86)",color2:"rgba(166, 126, 36,, 0.82)"},{color1:"rgb(176, 148, 61)",color2:"rgba(155, 112, 25,, 0.7)"},{color1:"rgb(184, 155, 72)",color2:"rgba(173, 137, 43,, 0.78)"}]}}};function Gs(e,t){const a=e.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*[\d.]+\s*\)$/);if(a)return`rgba(${a[1]}, ${a[2]}, ${a[3]}, ${t})`;const o=e.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return o?`rgba(${o[1]}, ${o[2]}, ${o[3]}, ${t})`:e}function Rr(e,t){const a=e.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);if(a)return`rgba(${a[1]}, ${a[2]}, ${a[3]}, ${(parseFloat(a[4])*t).toFixed(2)})`;const o=e.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return o?`rgba(${o[1]}, ${o[2]}, ${o[3]}, ${t.toFixed(2)})`:e}function rd(e,t,a){const o=Zf(e,t),r=od[e][t?"dark":"light"],n=e==="mono",s=n?.14:1,i=n?Rr(o.primary,.14):o.primary,l=n?Rr(o.primary,.09):o.primary,h=n?Rr(o.secondary,.12):o.secondary,d=n?Gs(o.secondary,.06):Gs(o.secondary,.49),u=r.spikes.map(S=>n?{color1:Rr(S.color1,s),color2:Rr(S.color2,s*.7)}:S),c=n?"12px":"0.8px",f=n?"14px":"2px",g=n?"12px":"1.2px",m=n?"10px":"0.6px",x=n?"42px":"92px",v=n?"38px":"72px",b=n?"40px":"85px",y=n?"32px":"60px",$=n?"12px":"1px",p=n?"rgba(255, 255, 255, 0.5)":"rgba(255, 255, 255, 1)",M=n?"rgba(255, 255, 255, 0.45)":"rgba(255, 255, 255, 0.9)",w=n?"rgba(255, 255, 255, 0.25)":"rgba(255, 255, 255, 0.5)",z=n?"rgba(255, 255, 255, 0.15)":"rgba(255, 255, 255, 0.3)",k=n?"rgba(255, 255, 255, 0.06)":"rgba(255, 255, 255, 0.12)",F=n?"rgba(255, 255, 255, 0.015)":"rgba(255, 255, 255, 0.03)";if(t)return`radial-gradient(ellipse calc(${c} * var(--beam-spike-${a}) * var(--beam-spike-mul, 1)) calc(${x} * var(--beam-h-${a}) * var(--beam-spike-mul, 1)) at 8% calc(100% - 2px), ${i}, ${l} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${a}) * var(--beam-spike-mul, 1)) calc(35px * var(--beam-h-${a}) * var(--beam-spike-mul, 1)) at 22% calc(100% - 4px), ${h}, ${d} 50%, transparent 95%),
       radial-gradient(ellipse calc(${f} * (2 - var(--beam-spike-${a})) * var(--beam-spike-mul, 1)) calc(${v} * var(--beam-h-${a}) * var(--beam-spike-mul, 1)) at 36% calc(100% - 3px), ${u[0].color1}, ${u[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${a}) * var(--beam-spike-mul, 1)) calc(28px * var(--beam-h-${a}) * var(--beam-spike-mul, 1)) at 50% calc(100% - 2px), ${u[1].color1}, ${u[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${g} * (2 - var(--beam-spike2-${a})) * var(--beam-spike-mul, 1)) calc(${b} * var(--beam-h-${a}) * var(--beam-spike-mul, 1)) at 64% calc(100% - 4px), ${u[2].color1}, ${u[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${a}) * var(--beam-spike-mul, 1)) calc(45px * var(--beam-h-${a}) * var(--beam-spike-mul, 1)) at 78% calc(100% - 2px), ${u[3].color1}, ${u[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${m} * (2 - var(--beam-spike-${a})) * var(--beam-spike-mul, 1)) calc(${y} * var(--beam-h-${a}) * var(--beam-spike-mul, 1)) at 92% calc(100% - 3px), ${u[4].color1}, ${u[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(21px * var(--beam-spike-${a})) calc(15px * var(--beam-spike2-${a})) at calc(var(--beam-x-${a}) * 100%) calc(100% + 1px), ${p} 0%, ${M} 20%, ${w} 50%, transparent 100%),
       radial-gradient(ellipse calc(42px * var(--beam-w-${a})) calc(40px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) 100%, ${z} 0%, ${k} 25%, ${F} 55%, transparent 80%)`;{const S=n?Rr(o.primary,.11):Gs(o.primary,.85),_=n?Rr(o.secondary,.09):Gs(o.secondary,.7);return`radial-gradient(ellipse calc(${c} * var(--beam-spike-${a}) * var(--beam-spike-mul, 1)) calc(${x} * var(--beam-h-${a}) * var(--beam-spike-mul, 1)) at 8% calc(100% - 2px), ${i}, ${S} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${a}) * var(--beam-spike-mul, 1)) calc(35px * var(--beam-h-${a}) * var(--beam-spike-mul, 1)) at 22% calc(100% - 4px), ${h}, ${_} 50%, transparent 95%),
       radial-gradient(ellipse calc(${f} * (2 - var(--beam-spike-${a})) * var(--beam-spike-mul, 1)) calc(${v} * var(--beam-h-${a}) * var(--beam-spike-mul, 1)) at 36% calc(100% - 3px), ${u[0].color1}, ${u[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${a}) * var(--beam-spike-mul, 1)) calc(28px * var(--beam-h-${a}) * var(--beam-spike-mul, 1)) at 50% calc(100% - 2px), ${u[1].color1}, ${u[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${g} * (2 - var(--beam-spike2-${a})) * var(--beam-spike-mul, 1)) calc(${b} * var(--beam-h-${a}) * var(--beam-spike-mul, 1)) at 64% calc(100% - 4px), ${u[2].color1}, ${u[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${a}) * var(--beam-spike-mul, 1)) calc(45px * var(--beam-h-${a}) * var(--beam-spike-mul, 1)) at 78% calc(100% - 2px), ${u[3].color1}, ${u[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${$} * (2 - var(--beam-spike-${a})) * var(--beam-spike-mul, 1)) calc(${y} * var(--beam-h-${a}) * var(--beam-spike-mul, 1)) at 92% calc(100% - 3px), ${u[4].color1}, ${u[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(50px * var(--beam-w-${a})) calc(32px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) calc(100%), rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.18) 30%, rgba(0, 0, 0, 0.03) 60%, transparent 85%)`}}const Wh=[{region:1,quad:"tl"},{region:2,quad:"tl"},{region:3,quad:"bl"},{region:1,quad:"bl"},{region:2,quad:"br"},{region:3,quad:"br"},{region:1,quad:"tr"},{region:2,quad:"tr"},{region:3,quad:"tr"}],nd=[[65,35],[55,30],[35,65],[15,30],[173,28],[80,22],[69,28],[22,38],[47,44]],sd=[{ci:0,region:1,quad:"tl",w:84,h:48},{ci:1,region:2,quad:"tl",w:72,h:42},{ci:2,region:3,quad:"bl",w:48,h:84},{ci:4,region:2,quad:"br",w:216,h:38},{ci:5,region:3,quad:"br",w:102,h:31},{ci:6,region:1,quad:"tr",w:89,h:38},{ci:8,region:3,quad:"tr",w:62,h:58}],nc=[{ci:0,region:1,quad:"tl",w:80,h:19,x:"27%",y:"0%"},{ci:6,region:2,quad:"tr",w:74,h:11,x:"73%",y:"-1%"},{ci:7,region:3,quad:"tr",w:15,h:44,x:"100%",y:"33%"},{ci:8,region:1,quad:"br",w:19,h:38,x:"101%",y:"72%"},{ci:4,region:2,quad:"br",w:84,h:13,x:"67%",y:"100%"},{ci:1,region:3,quad:"bl",w:60,h:21,x:"24%",y:"101%"},{ci:2,region:1,quad:"bl",w:17,h:40,x:"0%",y:"60%"},{ci:3,region:2,quad:"tl",w:13,h:32,x:"-1%",y:"28%"}],id=[{ci:0,region:1,quad:"tl",w:110,h:30,x:"27%",y:"3%"},{ci:6,region:2,quad:"tr",w:100,h:20,x:"73%",y:"1%"},{ci:7,region:3,quad:"tr",w:26,h:62,x:"100%",y:"33%"},{ci:8,region:1,quad:"br",w:30,h:56,x:"101%",y:"72%"},{ci:4,region:2,quad:"br",w:120,h:22,x:"67%",y:"99%"},{ci:1,region:3,quad:"bl",w:88,h:32,x:"24%",y:"99%"},{ci:2,region:1,quad:"bl",w:28,h:58,x:"0%",y:"60%"}];function ld(e,t,a){const o=e.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);return`rgba(${o?`${o[1]}, ${o[2]}, ${o[3]}`:"255, 255, 255"}, var(--bop-${t}-${a}))`}function Il(e,t,a,o,r,n,s,i){return`radial-gradient(ellipse calc(${t}px * var(--bw${o}-${i}) * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${a}px * var(--bh${o}-${i}) * var(--bgh-${i}) * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at calc(${n} + var(--bx${o}-${i})) calc(${s} + var(--by${o}-${i})), ${ld(e,r,i)}, transparent)`}function cd(e,t){return rn[e].border.map((a,o)=>{const{region:r,quad:n}=Wh[o],[s,i]=a.pos.split(" "),[l,h]=a.size.split(" ").map(parseFloat);return Il(a.color,l,h,r,n,s,i,t)}).join(`,
    `)}function hd(e,t,a){const o=rn[e].border.map((i,l)=>{const{region:h,quad:d}=Wh[l],[u,c]=i.pos.split(" "),[f,g]=nd[l];return Il(i.color,f,g,h,d,u,c,t)}),r=a?"255, 255, 255":"0, 0, 0",n=a?.18:.08,s=[["0%","0%","tl"],["100%","0%","tr"],["0%","100%","bl"],["100%","100%","br"]].map(([i,l,h])=>`radial-gradient(ellipse 60px 60px at ${i} ${l}, rgba(${r}, calc(${n} * var(--bop-${h}-${t}))), transparent 70%)`);return[...o,...s].join(`,
    `)}function sc(e,t,a){const o=rn[t].border;return e.map(r=>{const n=o[r.ci],[s,i]=n.pos.split(" ");return Il(n.color,r.w,r.h,r.region,r.quad,r.x??s,r.y??i,a)}).join(`,
    `)}function Th(e,t,a){const o=rn[t].border,r=+a.toFixed(3);return e.map(n=>{const s=o[n.ci],[i,l]=s.pos.split(" "),h=n.x??i,d=n.y??l,u=s.color.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/),c=u?`${u[1]}, ${u[2]}, ${u[3]}`:"255, 255, 255";return`radial-gradient(ellipse calc(${n.w}px * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${n.h}px * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at ${h} ${d}, rgba(${c}, ${r}), transparent)`}).join(`,
    `)}function Ps(e){return`
[data-beam="${e}"][data-paused],
[data-beam="${e}"][data-paused]::after,
[data-beam="${e}"][data-paused]::before,
[data-beam="${e}"][data-paused] [data-beam-bloom] {
  animation-play-state: paused !important;
}`}function Eh(e){const t=["bw1","bh1","bw2","bh2","bw3","bh3","bgh","bop-tl","bop-tr","bop-bl","bop-br"],a=["bx1","by1","bx2","by2","bx3","by3"],o=t.map(n=>`@property --${n}-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}`).join(`

`),r=a.map(n=>`@property --${n}-${e} {
  syntax: "<length>";
  initial-value: 0px;
  inherits: true;
}`).join(`

`);return`${o}

${r}

@property --beam-opacity-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-hue-${e} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}`}function Pl(e,t,a){const o=t==="dark",r=a/2.3;return e==="pulse-inner"?{sp:.28,dr:o?33:40,op:o?.48:.45,gh:o?.34:.22,bs:(o?1.9:2.6)*r,ss:(o?2.6:4.6)*r,ghs:(o?2.4:5.5)*r,huePeriod:16}:{sp:o?.28:.36,dr:o?14:19,op:o?.46:0,gh:o?.16:.58,bs:(o?2.3:3.7)*r,ss:(o?6.4:4.6)*r,ghs:(o?2.4:3.8)*r,huePeriod:14}}function ud(e,t){const{sp:a,dr:o,op:r,gh:n,bs:s,ss:i,ghs:l}=t;return[{prop:`--bw1-${e}`,a:1-a,b:1+a*1.1,period:i*.9,delay:0,unit:""},{prop:`--bh1-${e}`,a:1+a*.9,b:1-a*.85,period:i*1.26,delay:0,unit:""},{prop:`--bx1-${e}`,a:-o,b:o*.9,period:s*1.6,delay:0,unit:"px"},{prop:`--by1-${e}`,a:o*.55,b:-o*.7,period:s*1.6,delay:0,unit:"px"},{prop:`--bw2-${e}`,a:1+a,b:1-a*.85,period:i*1.1,delay:0,unit:""},{prop:`--bh2-${e}`,a:1-a*.8,b:1+a*1.05,period:i*.81,delay:0,unit:""},{prop:`--bx2-${e}`,a:o*.8,b:-o*.9,period:s*1.88,delay:0,unit:"px"},{prop:`--by2-${e}`,a:-o,b:o*.65,period:s*1.88,delay:0,unit:"px"},{prop:`--bw3-${e}`,a:1-a*.6,b:1+a*1.15,period:i*.98,delay:0,unit:""},{prop:`--bh3-${e}`,a:1+a*.75,b:1-a,period:i*1.4,delay:0,unit:""},{prop:`--bx3-${e}`,a:-o*.6,b:o,period:s*1.45,delay:0,unit:"px"},{prop:`--by3-${e}`,a:-o*.85,b:o*.45,period:s*1.45,delay:0,unit:"px"},{prop:`--bgh-${e}`,a:1-n,b:1+n,period:l,delay:0,unit:""},{prop:`--bop-tl-${e}`,a:1-r,b:1,period:s,delay:0,unit:""},{prop:`--bop-tr-${e}`,a:1-r,b:1,period:s*1.32,delay:s*.28,unit:""},{prop:`--bop-bl-${e}`,a:1-r,b:1,period:s*.84,delay:s*.55,unit:""},{prop:`--bop-br-${e}`,a:1-r,b:1,period:s*1.58,delay:s*.83,unit:""}]}function fd(e,t,a,o,r,n){if(e!=="pulse-inner"&&e!=="pulse-outside")return null;const s=Pl(e,t,a);return{oscillators:ud(n,s),hue:r?null:{prop:`--beam-hue-${n}`,range:360,period:s.huePeriod,continuous:!0}}}function Oi(e,t,a){return`  animation: ${t}-${e} ${a}s ease forwards;`}function fr(e,t=1){return Math.max(.5,Math.round(e*t*100)/100)}function dd(e){const{size:t}=e;return t==="line"?xd(e):t==="sm"?pd(e):t==="pulse-inner"?gd(e):t==="pulse-outside"?bd(e):md(e)}function pd(e){const{id:t,borderRadius:a,borderWidth:o,duration:r,strokeOpacity:n,innerOpacity:s,bloomOpacity:i,innerShadow:l,colorVariant:h,staticColors:d,brightness:u,saturation:c,hueRange:f,theme:g,glowSize:m=1}=e,x=Math.max(0,a-o),v=h==="mono"?.5:1,b=n*v,y=s*v,$=i*v,p=d?"":`animation: beam-hue-shift-${t} 12s ease-in-out infinite;`,M=d?"":`
@keyframes beam-hue-shift-${t} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${f}deg)) brightness(${u.toFixed(2)}) saturate(${c.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${f}deg)) brightness(${u.toFixed(2)}) saturate(${c.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${f}deg)) brightness(${u.toFixed(2)}) saturate(${c.toFixed(2)}); }
}`,w=g==="dark",z=w?`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`:`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,k=Uf(h),F=Vf(h),S=w?`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`:`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`,_=`conic-gradient(
    from var(--beam-angle-${t}),
    transparent 0%, transparent 22%,
    rgba(255, 255, 255, 0.12) 28%, rgba(255, 255, 255, 0.4) 36%,
    white 46%, white 82%,
    rgba(255, 255, 255, 0.4) 88%, rgba(255, 255, 255, 0.12) 94%,
    transparent 97%, transparent 100%
  )`;return`
@property --beam-angle-${t} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${a}px;
  overflow: hidden;
}

[data-beam="${t}"][data-active] {
  animation:
    beam-spin-${t} ${r}s linear infinite,
    beam-fade-in-${t} 0.6s ease forwards;
}

[data-beam="${t}"][data-fading] {
  animation:
    beam-spin-${t} ${r}s linear infinite,
    beam-fade-out-${t} 0.5s ease forwards;
}

[data-beam="${t}"][data-active]::after,
[data-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${x}px;
  padding: ${o}px;
  clip-path: inset(0 round ${a}px);
  background: ${z},${k};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${t}) * ${b.toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${p}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${a}px;
  clip-path: inset(0 round ${a}px);
  background: ${F};
  box-shadow: inset 0 0 5px 1px ${l};
  -webkit-mask-image: ${_};
  -webkit-mask-composite: source-over;
  mask-image: ${_};
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${t}) * ${y.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${p}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${x}px;
  clip-path: inset(0 round ${a}px);
  background: ${S};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${o}px;
  filter: blur(${fr(8,m)}px) brightness(${u.toFixed(2)}) saturate(${c.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${t}"][data-active] [data-beam-bloom],
[data-beam="${t}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${t}) * ${$.toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
}

@keyframes beam-spin-${t} {
  to { --beam-angle-${t}: 360deg; }
}

@keyframes beam-fade-in-${t} {
  to { --beam-opacity-${t}: 1; }
}

@keyframes beam-fade-out-${t} {
  from { --beam-opacity-${t}: 1; }
  to { --beam-opacity-${t}: 0; }
}
${M}
${Ps(t)}
`}function md(e){const{id:t,borderRadius:a,borderWidth:o,duration:r,strokeOpacity:n,innerOpacity:s,bloomOpacity:i,innerShadow:l,colorVariant:h,staticColors:d,brightness:u,saturation:c,hueRange:f,theme:g,glowSize:m=1}=e,x=Math.max(0,a-o),v=h==="mono"?.5:1,b=n*v,y=s*v,$=i*v,p=d?"":`animation: beam-hue-shift-${t} 12s ease-in-out infinite;`,M=d?"":`
@keyframes beam-hue-shift-${t} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${f}deg)) brightness(${u.toFixed(2)}) saturate(${c.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${f}deg)) brightness(${u.toFixed(2)}) saturate(${c.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${f}deg)) brightness(${u.toFixed(2)}) saturate(${c.toFixed(2)}); }
}`,w=g==="dark",z=w?`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`:`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,k=Kf(h),F=Qf(h),S=w?`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`:`conic-gradient(
        from var(--beam-angle-${t}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`;return`
@property --beam-angle-${t} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${a}px;
  overflow: hidden;
}

[data-beam="${t}"][data-active] {
  animation:
    beam-spin-${t} ${r}s linear infinite,
    beam-fade-in-${t} 0.6s ease forwards;
}

[data-beam="${t}"][data-fading] {
  animation:
    beam-spin-${t} ${r}s linear infinite,
    beam-fade-out-${t} 0.5s ease forwards;
}

[data-beam="${t}"][data-active]::after,
[data-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${x}px;
  padding: ${o}px;
  clip-path: inset(0 round ${a}px);
  background: ${z},${k};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${t}) * ${b.toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${p}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${a}px;
  background: ${F};
  box-shadow: inset 0 0 9px 1px ${l};
  -webkit-mask-image:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    conic-gradient(
      from var(--beam-angle-${t}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${t}) * ${y.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  clip-path: inset(0 round ${a}px);
  ${p}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${x}px;
  clip-path: inset(0 round ${a}px);
  background: ${S};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${o}px;
  filter: blur(${fr(8,m)}px) brightness(${u.toFixed(2)}) saturate(${c.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${t}"][data-active] [data-beam-bloom],
[data-beam="${t}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${t}) * ${$.toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
}

@keyframes beam-spin-${t} {
  to { --beam-angle-${t}: 360deg; }
}

@keyframes beam-fade-in-${t} {
  to { --beam-opacity-${t}: 1; }
}

@keyframes beam-fade-out-${t} {
  from { --beam-opacity-${t}: 1; }
  to { --beam-opacity-${t}: 0; }
}
${M}
${Ps(t)}
`}function gd(e){const{id:t,borderRadius:a,borderWidth:o,duration:r,strokeOpacity:n,innerOpacity:s,bloomOpacity:i,colorVariant:l,staticColors:h,brightness:d,saturation:u,hueRange:c,theme:f,glowSize:g=1}=e,m=f==="dark",x=l==="mono"?.5:1,v=(n*x).toFixed(2),b=(s*x).toFixed(2),y=(i*x).toFixed(2),{op:$}=Pl("pulse-inner",f,r),p=fr(8,g),M=d.toFixed(2),w=u.toFixed(2),z=h?`filter: brightness(${M}) saturate(${w});`:`filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) brightness(${M}) saturate(${w});`,k=h?`filter: blur(${p}px) brightness(${M}) saturate(${w});`:`filter: blur(${p}px) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) brightness(${M}) saturate(${w});`,F=cd(l,t),S=hd(l,t,m),_=Th(sd,l,1-$*.5);return`
${Eh(t)}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${a}px;
  overflow: hidden;
  isolation: isolate;
}

[data-beam="${t}"][data-active] {
${Oi(t,"beam-fade-in",.6)}
}

[data-beam="${t}"][data-fading] {
${Oi(t,"beam-fade-out",.5)}
}

[data-beam="${t}"][data-active]::after,
[data-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${a}px;
  padding: ${o}px;
  clip-path: inset(0 round ${a}px);
  background: ${F};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${t}) * ${v} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${z}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${a}px;
  clip-path: inset(0 round ${a}px);
  background: ${S};
  -webkit-mask-image:
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-over;
  mask-image:
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${t}) * ${b} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${z}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${a}px;
  clip-path: inset(0 round ${a}px);
  background: ${_};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${o}px;
  pointer-events: none;
  z-index: 3;
  will-change: opacity;
  opacity: 0;
}

[data-beam="${t}"][data-active] [data-beam-bloom],
[data-beam="${t}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${t}) * ${y} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${k}
}

@keyframes beam-fade-in-${t} { to { --beam-opacity-${t}: 1; } }
@keyframes beam-fade-out-${t} { from { --beam-opacity-${t}: 1; } to { --beam-opacity-${t}: 0; } }
${Ps(t)}

@media (prefers-reduced-motion: reduce) {
  [data-beam="${t}"][data-active],
  [data-beam="${t}"][data-fading],
  [data-beam="${t}"][data-active]::after,
  [data-beam="${t}"][data-fading]::after,
  [data-beam="${t}"][data-active]::before,
  [data-beam="${t}"][data-fading]::before,
  [data-beam="${t}"][data-active] [data-beam-bloom],
  [data-beam="${t}"][data-fading] [data-beam-bloom] {
    animation: none !important;
  }
}
`}function bd(e){const{id:t,borderRadius:a,duration:o,strokeOpacity:r,innerOpacity:n,bloomOpacity:s,colorVariant:i,staticColors:l,brightness:h,saturation:d,hueRange:u,theme:c,hairlineOpacity:f=0,glowSize:g=1}=e,m=c==="dark",x=i==="mono"?.5:1,v=(r*x).toFixed(2),b=(n*x).toFixed(2),y=(s*x).toFixed(2),$=m?"70, 70, 70":"0, 0, 0",p=f.toFixed(2),M=`linear-gradient(rgba(${$}, ${p}), rgba(${$}, ${p}))`,{op:w}=Pl("pulse-outside",c,o),z=.95,k=.9,F=fr(m?3:6,g),S=fr(m?22.5:15,g),_=h.toFixed(2),A=d.toFixed(2),C=l?`filter: brightness(${_}) saturate(${A});`:`filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) brightness(${_}) saturate(${A});`,R=`brightness(var(--beam-glow-brightness, ${_})) saturate(var(--beam-glow-saturate, ${A}))`,O=l?`filter: blur(var(--beam-core-blur, ${F}px)) ${R};`:`filter: blur(var(--beam-core-blur, ${F}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) ${R};`,E=l?`filter: blur(var(--beam-bloom-blur, ${S}px)) ${R};`:`filter: blur(var(--beam-bloom-blur, ${S}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${t}))) ${R};`,I=sc(nc,i,t),P=sc(nc,i,t),T=Th(id,i,1-w*.5),Y=f>0?`${I},
    ${M}`:I;return`
${Eh(t)}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${a}px;
  overflow: visible;
  isolation: isolate;
}

[data-beam="${t}"][data-active] {
${Oi(t,"beam-fade-in",.6)}
}

[data-beam="${t}"][data-fading] {
${Oi(t,"beam-fade-out",.5)}
}
${f>0?`
/* Idle hairline — painted above the (opaque) child in the inner 1px edge ring so
   it overlaps a standard inset component border exactly. */
[data-beam="${t}"]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${a}px;
  padding: 1px;
  clip-path: inset(0 round ${a}px);
  background: ${M};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
}
`:""}
[data-beam="${t}"][data-active]::after,
[data-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${a}px;
  padding: 1px;
  clip-path: inset(0 round ${a}px);
  background: ${Y};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${t}) * ${v} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${C}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: -10px;
  z-index: -1;
  border-radius: ${a+10}px;
  background: ${P};
  transform: scale(${z}, ${k});
  pointer-events: none;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${t}) * ${b} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${O}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: -30px;
  z-index: -1;
  border-radius: ${a+30}px;
  background: ${T};
  transform: scale(${z}, ${k});
  pointer-events: none;
  will-change: transform;
  opacity: 0;
}

[data-beam="${t}"][data-active] [data-beam-bloom],
[data-beam="${t}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${t}) * ${y} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${E}
}

@keyframes beam-fade-in-${t} { to { --beam-opacity-${t}: 1; } }
@keyframes beam-fade-out-${t} { from { --beam-opacity-${t}: 1; } to { --beam-opacity-${t}: 0; } }
${Ps(t)}

@media (prefers-reduced-motion: reduce) {
  [data-beam="${t}"][data-active],
  [data-beam="${t}"][data-fading],
  [data-beam="${t}"][data-active]::after,
  [data-beam="${t}"][data-fading]::after,
  [data-beam="${t}"][data-active]::before,
  [data-beam="${t}"][data-fading]::before,
  [data-beam="${t}"][data-active] [data-beam-bloom],
  [data-beam="${t}"][data-fading] [data-beam-bloom] {
    animation: none !important;
  }
}
`}function xd(e){const{id:t,borderRadius:a,borderWidth:o,duration:r,strokeOpacity:n,innerOpacity:s,bloomOpacity:i,innerShadow:l,colorVariant:h,staticColors:d,brightness:u,saturation:c,hueRange:f,theme:g,glowSize:m=1}=e,x=Math.max(0,a-o),v=g==="dark",b=n,y=s,$=i,p=d?"":`animation: beam-hue-shift-${t} 12s ease-in-out infinite;`,M=d?"":`animation: beam-hue-shift-bloom-${t} 8s ease-in-out infinite;`,w=d?"":`
@keyframes beam-hue-shift-${t} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${f}deg)) brightness(${u.toFixed(2)}) saturate(${c.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${f}deg)) brightness(${u.toFixed(2)}) saturate(${c.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${f}deg)) brightness(${u.toFixed(2)}) saturate(${c.toFixed(2)}); }
}

@keyframes beam-hue-shift-bloom-${t} {
  0% { filter: blur(${fr(8,m)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${f+10}deg)) brightness(${u.toFixed(2)}) saturate(${c.toFixed(2)}); }
  50% { filter: blur(${fr(8,m)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) + ${f+10}deg)) brightness(${u.toFixed(2)}) saturate(${c.toFixed(2)}); }
  100% { filter: blur(${fr(8,m)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${f+10}deg)) brightness(${u.toFixed(2)}) saturate(${c.toFixed(2)}); }
}`,z=v?`radial-gradient(
        ellipse calc(24px * var(--beam-w-${t})) calc(28px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) calc(100% + 2px),
        rgba(255, 255, 255, 0.38) 0%,
        rgba(255, 255, 255, 0.12) 30%,
        transparent 65%
      )`:`radial-gradient(
        ellipse calc(35px * var(--beam-w-${t})) calc(28px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) calc(100% + 2px),
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.25) 35%,
        transparent 70%
      )`,k=ed(h,v,t),F=ad(h,t),S=rd(h,v,t),_=h==="mono"?"filter: blur(6px);":"";return`
@property --beam-x-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-w-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-h-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike2-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-edge-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-opacity-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${t}"] {
  position: relative;
  border-radius: ${a}px;
  overflow: hidden;
}

[data-beam="${t}"][data-active] {
  animation:
    beam-travel-${t} ${r}s linear infinite,
    beam-edge-fade-${t} ${r}s linear infinite,
    beam-breathe-${t} ${(r*1.3).toFixed(1)}s ease-in-out infinite,
    beam-spike-${t} ${(r*1.33).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${t} ${(r*1.7).toFixed(1)}s ease-in-out infinite,
    beam-fade-in-${t} 0.6s ease forwards;
}

[data-beam="${t}"][data-fading] {
  animation:
    beam-travel-${t} ${r}s linear infinite,
    beam-edge-fade-${t} ${r}s linear infinite,
    beam-breathe-${t} ${(r*1.3).toFixed(1)}s ease-in-out infinite,
    beam-spike-${t} ${(r*1.33).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${t} ${(r*1.7).toFixed(1)}s ease-in-out infinite,
    beam-fade-out-${t} 0.5s ease forwards;
}

[data-beam="${t}"][data-active]::after,
[data-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${x}px;
  padding: ${o}px;
  clip-path: inset(0 round ${a}px);
  background: ${z}, ${k};
  -webkit-mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${t})) calc(60px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${t})) calc(60px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${t}) * var(--beam-edge-${t}) * ${b.toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${p}
}

[data-beam="${t}"][data-active]::before,
[data-beam="${t}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${a}px;
  background: ${F};
  box-shadow: inset 0 0 9px 1px ${l};
  -webkit-mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${t})) calc(60px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${t})) calc(60px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${t}) * var(--beam-edge-${t}) * ${y.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  clip-path: inset(0 round ${a}px);
  ${p}
}

[data-beam="${t}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${x}px;
  clip-path: inset(0 round ${a}px);
  padding: 0;
  -webkit-mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${t})) calc(110px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  -webkit-mask-composite: source-over;
  mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${t})) calc(110px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  mask-composite: add;
  background: ${S};
  ${_}
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${t}"][data-active] [data-beam-bloom],
[data-beam="${t}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${t}) * var(--beam-edge-${t}) * ${$.toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${M}
}

@keyframes beam-travel-${t} {
  0%   { --beam-x-${t}: 0.06;  --beam-w-${t}: 0.5; }
  10%  { --beam-x-${t}: 0.15;  --beam-w-${t}: 0.8; }
  20%  { --beam-x-${t}: 0.25;  --beam-w-${t}: 1.1; }
  30%  { --beam-x-${t}: 0.35;  --beam-w-${t}: 1.3; }
  40%  { --beam-x-${t}: 0.44;  --beam-w-${t}: 1.45; }
  50%  { --beam-x-${t}: 0.5;   --beam-w-${t}: 1.5; }
  60%  { --beam-x-${t}: 0.56;  --beam-w-${t}: 1.45; }
  70%  { --beam-x-${t}: 0.65;  --beam-w-${t}: 1.3; }
  80%  { --beam-x-${t}: 0.75;  --beam-w-${t}: 1.1; }
  90%  { --beam-x-${t}: 0.85;  --beam-w-${t}: 0.8; }
  100% { --beam-x-${t}: 0.94;  --beam-w-${t}: 0.5; }
}

@keyframes beam-edge-fade-${t} {
  0%    { --beam-edge-${t}: 0; }
  12.5% { --beam-edge-${t}: 0; }
  32.5% { --beam-edge-${t}: 1; }
  67.5% { --beam-edge-${t}: 1; }
  87.5% { --beam-edge-${t}: 0; }
  100%  { --beam-edge-${t}: 0; }
}

@keyframes beam-breathe-${t} {
  0%, 100% { --beam-h-${t}: 0.8; }
  25%      { --beam-h-${t}: 1.25; }
  55%      { --beam-h-${t}: 0.85; }
  80%      { --beam-h-${t}: 1.3; }
}

@keyframes beam-spike-${t} {
  0%   { --beam-spike-${t}: 0.8; }
  25%  { --beam-spike-${t}: 1.3; }
  50%  { --beam-spike-${t}: 0.9; }
  75%  { --beam-spike-${t}: 1.4; }
  100% { --beam-spike-${t}: 0.8; }
}

@keyframes beam-spike2-${t} {
  0%   { --beam-spike2-${t}: 1.2; }
  25%  { --beam-spike2-${t}: 0.7; }
  50%  { --beam-spike2-${t}: 1.4; }
  75%  { --beam-spike2-${t}: 0.8; }
  100% { --beam-spike2-${t}: 1.2; }
}

@keyframes beam-fade-in-${t} {
  to { --beam-opacity-${t}: 1; }
}

@keyframes beam-fade-out-${t} {
  from { --beam-opacity-${t}: 1; }
  to { --beam-opacity-${t}: 0; }
}
${w}
${Ps(t)}
`}const Ii=new Set;let On=null,Z0=0;const vd=1e3/30-2,Md=Math.PI*2;function ic(e){return(1-Math.cos(Md*e))/2}function Dh(e){if(On=requestAnimationFrame(Dh),e-Z0<vd)return;Z0=e;const t=e/1e3;Ii.forEach(({el:a,config:o})=>{for(const r of o.oscillators){const n=(t-r.delay)/r.period,s=r.a+(r.b-r.a)*ic(n);a.style.setProperty(r.prop,r.unit==="px"?`${s.toFixed(2)}px`:s.toFixed(4))}if(o.hue){const{prop:r,range:n,period:s,continuous:i}=o.hue,l=i?t/s%1*n:-n+2*n*ic(t/s);a.style.setProperty(r,`${l.toFixed(2)}deg`)}})}function yd(){On==null&&(Z0=0,On=requestAnimationFrame(Dh))}function wd(){Ii.size===0&&On!=null&&(cancelAnimationFrame(On),On=null)}function $d(e,t){const a={el:e,config:t};return Ii.add(a),yd(),()=>{Ii.delete(a),wd()}}function kd(){const[e,t]=L.useState(()=>typeof window>"u"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return L.useEffect(()=>{if(typeof window>"u")return;const a=window.matchMedia("(prefers-color-scheme: dark)"),o=r=>{t(r.matches?"dark":"light")};return a.addEventListener("change",o),()=>a.removeEventListener("change",o)},[]),e}function Sd(e,t){return e==="auto"?t:e}const zd=L.forwardRef(function({children:e,size:t="md",colorVariant:a="colorful",theme:o="dark",staticColors:r=!1,duration:n,active:s=!0,borderRadius:i,brightness:l,saturation:h,hueRange:d=30,glowSize:u=1,strength:c=1,className:f,style:g,css:m,onActivate:x,onDeactivate:v,onAnimationEnd:b,...y},$){const p=L.useId().replace(/:/g,"-"),M=kd(),w=L.useRef(null),[z,k]=L.useState(s),[F,S]=L.useState(!1),[_,A]=L.useState(!0),[C,R]=L.useState(null),[O,E]=L.useState({x:1,y:1});L.useEffect(()=>{if(i!=null)return;const U=w.current;if(!U)return;const fe=()=>{const de=U.firstElementChild;if(!de)return;const oe=getComputedStyle(de),ue=parseFloat(oe.borderTopLeftRadius);!isNaN(ue)&&ue>0&&R(ue)};fe();const H=new MutationObserver(fe);return H.observe(U,{childList:!0,subtree:!1}),()=>H.disconnect()},[i,e]),L.useEffect(()=>{s&&!z&&!F?k(!0):!s&&z&&!F&&S(!0)},[s,z,F]),L.useEffect(()=>{const U=w.current;if(!U||typeof IntersectionObserver>"u")return;const fe=new IntersectionObserver(H=>{for(const de of H)A(de.isIntersecting)},{rootMargin:"256px"});return fe.observe(U),()=>fe.disconnect()},[]),L.useEffect(()=>{if(t!=="pulse-outside"){E({x:1,y:1});return}const U=w.current;if(!U)return;const fe=350,H=140,de=.35,oe=4,ue=ge=>Math.max(de,Math.min(oe,ge)),te=()=>{const ge=U.firstElementChild;if(!ge)return;const he=ge.getBoundingClientRect();if(!he.width||!he.height)return;const be=+ue(he.width/fe).toFixed(3),ze=+ue(he.height/H).toFixed(3);E(Qe=>Qe.x===be&&Qe.y===ze?Qe:{x:be,y:ze})};if(te(),typeof ResizeObserver>"u")return;const Xe=U.firstElementChild;if(!Xe)return;const qe=new ResizeObserver(te);return qe.observe(Xe),()=>qe.disconnect()},[t,e]);const I=L.useCallback(U=>{const fe=U.animationName;fe.includes("fade-out")?(k(!1),S(!1),v?.()):fe.includes("fade-in")&&x?.(),b?.(U)},[x,v,b]),P=Sd(o,M),T=Gf[t][P],Y=qf[t],q=t==="pulse-inner"||t==="pulse-outside",j=i??C??Y.borderRadius,X=n??(t==="line"?3.1:q?2.3:1.96),K=h??T.saturation,Q=l??T.brightness??1.3,W=t==="line"?Math.min(d,13):d,N=a==="mono"?!0:r,ae=L.useMemo(()=>dd({id:p,borderRadius:j,borderWidth:Y.borderWidth,duration:X,strokeOpacity:T.strokeOpacity,innerOpacity:T.innerOpacity,bloomOpacity:T.bloomOpacity,innerShadow:T.innerShadow,size:t,colorVariant:a,staticColors:N,brightness:Q,saturation:K,hueRange:W,theme:P,hairlineOpacity:T.hairlineOpacity,glowSize:u}),[p,j,Y.borderWidth,X,T.strokeOpacity,T.innerOpacity,T.bloomOpacity,T.innerShadow,T.hairlineOpacity,t,a,N,Q,K,W,u,P]),G=L.useMemo(()=>q?fd(t,P,X,W,N,p):null,[q,t,P,X,W,N,p]);L.useEffect(()=>{var U;if(!G||!(z||F)||!_)return;const fe=w.current;if(fe&&!(typeof window<"u"&&(U=window.matchMedia)!=null&&U.call(window,"(prefers-reduced-motion: reduce)").matches))return $d(fe,G)},[G,z,F,_]);const J=L.useCallback(U=>{w.current=U,typeof $=="function"?$(U):$&&($.current=U)},[$]),V={...g??{},"--beam-strength":Math.max(0,Math.min(1,c)),...t==="pulse-outside"?{"--pulse-glow-sx":O.x,"--pulse-glow-sy":O.y}:{}};return D.jsxs(D.Fragment,{children:[D.jsx("style",{children:m?`${ae}
${m.split("{id}").join(p)}`:ae}),D.jsxs("div",{...y,ref:J,"data-beam":p,"data-active":z&&!F?"":void 0,"data-fading":F?"":void 0,"data-paused":z&&!F&&!_?"":void 0,className:f,style:V,onAnimationEnd:I,children:[e,D.jsx("div",{"data-beam-bloom":!0})]})]})});function t0(e,t,a){return e+(t-e)*a}function Hh(e){return e-Math.floor(e)}function a0(e,t){const a=Math.floor(e),o=Math.floor(t);let r=e-a,n=t-o;r=r*r*(3-2*r),n=n*n*(3-2*n);const s=to(a,o),i=to(a+1,o),l=to(a,o+1),h=to(a+1,o+1);return s+(i-s)*r+(l-s)*n+(s-i-l+h)*r*n}function to(e,t){const a=Math.sin(e*12.9898+t*78.233)*43758.5453;return a-Math.floor(a)}function Wl(e,t){const a=Math.PI*(3-Math.sqrt(5)),o=1-2*(e+.5)/t,r=Math.sqrt(1-o*o),n=e*a;return[r*Math.cos(n),o,r*Math.sin(n)]}function Cd(e,t){return Math.atan2(Math.sin(e-t),Math.cos(e-t))}function nn(e,t,a,o,r){const n=Math.sin(t),s=Math.cos(t),i=Math.sin(e),l=Math.cos(e);return(h,d,u)=>{const c=h*l+u*i,f=-h*i+u*l,g=d*s-f*n,m=d*n+f*s;return[a+c*r,o-g*r,m]}}function Bh(e,t,a,o){if(!o){const n=Math.round((a?1-e:e)*255);return`rgba(${n},${n},${n},${t})`}const r=n=>Math.round(a?n*(1-e):n+(255-n)*e);return`rgba(${r(o.r)},${r(o.g)},${r(o.b)},${t})`}function Ad(e,t,a,o=.3,r){for(const n of t){const s=n.a??1,i=Math.min(1,Math.max(0,n.white));e.fillStyle=Bh(i,s,a,r),e.beginPath(),e.arc(n.x,n.y,n.r,0,Math.PI*2),e.fill()}}function _d(e,t,a,o){for(const r of t){const n=r.a??1,s=Math.min(1,Math.max(0,r.white));e.strokeStyle=Bh(s,n,a,o),e.lineWidth=r.w,e.beginPath(),e.moveTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.stroke()}}function yr(e,t,a=.3){const o=[];for(const r of e)(r.a??1)<.02||(r.r=Math.max(a,r.r),o.push(r));return o.sort((r,n)=>r.z-n.z),{dots:o,lines:t.filter(r=>(r.a??1)>=.02)}}function Lh(e,t,a,o){t.lines.length&&_d(e,t.lines,a,o),Ad(e,t.dots,a,.3,o)}function sn(e,t){return(e/300)**t}const Rd=[["latRings","lonDensity"],["rings","lonDensity"],["lanes","segs"]],Fd=["orbitN","ghostN","nodeN","strandN","signals"],Od=["iconD"],Id=["rBase","rDepth","rActive","rDot","ghostR","partR","partRDepth","nodeR","nodeRDepth"];function Yh(e,t){const a={...e},o=new Set,r=Math.sqrt(t);for(const[n,s]of Rd){const i=a[n],l=a[s];i!=null&&l!=null&&!o.has(n)&&!o.has(s)&&(a[n]=Math.max(2,Math.round(i*r)),a[s]=Math.max(2,Math.round(l*r)),o.add(n),o.add(s))}for(const n of Fd){const s=a[n];s!=null&&s!==0&&!o.has(n)&&(a[n]=Math.max(1,Math.round(s*t)))}for(const n of Od){const s=a[n];s!=null&&(a[n]=Math.max(.02,s*t))}return a}function Xh(e,t){const a={...e};for(const o of Id){const r=a[o];r!=null&&(a[o]=r*t)}return a.rSizeMul=(a.rSizeMul??1)*t,a}const Pd={globe:{latRings:17,lonDensity:44,rBase:.6,rDepth:1.7,rBoost:1,inkFar:.62,inkSpan:.54,rsPow:.6,rMin:.3},orbits:{orbitN:12,ghostN:40,ghostR:.9,ghostA:.5,particles:3,partR:1.2,partRDepth:1.6,rsPow:.6,rMin:.3},rubik:{latRings:15,lonDensity:40,moveCount:14,rBase:.6,rDepth:1.7,rActive:.3,inkFar:.62,inkSpan:.54,rsPow:.6,rMin:.3},wave:{rings:15,lonDensity:40,rBase:.6,rDepth:1.7,rsPow:.6,rMin:.3},web:{nodeN:30,thr:.72,signals:5,nodeR:1.4,nodeRDepth:1.8,lineW:.8,rsPow:.6,rMin:.3},braid:{strandN:52,turns:3,ghostN:150,rBase:1.2,rDepth:1.8,rsPow:.6,rMin:.3},ribbon:{lanes:5,segs:88,ghostN:150,rBase:1.1,rDepth:1.7,rsPow:.6,rMin:.3},ring:{lanes:5,segs:88,ghostN:0,faceOn:1,rBase:1.1,rDepth:1.7,rsPow:.6,rMin:.3},morph:{rDot:.021,iconD:1,rMin:.25}},Wd=(e,t,a)=>{const o=e/2,r=e/2,n=e/2*.76,s=nn(t*.4,.3,o,r,1),i=sn(e,a.rsPow??.6),l=[],h=a.ghostN??150;for(let c=0;c<h;c++){const f=Wl(c,h),[g,m,x]=s(f[0]*n,f[1]*n,f[2]*n),v=(x/n+1)/2;l.push({x:g,y:m,z:x,r:.8*i,white:.78,a:.1+.22*v})}const d=a.strandN??52,u=a.turns??3;for(let c=0;c<3;c++){const f=c/3*2*Math.PI;for(let g=0;g<d;g++){const m=(Hh(g/d+t*.045)*2-1)*.96,x=Math.sqrt(Math.max(0,1-m*m)),v=Math.min(1,(1-Math.abs(m))/.1),b=m*Math.PI*u+f,y=1+.075*Math.sin(m*Math.PI*u*2+f*2+t*.8),$=x*n*y,[p,M,w]=s(Math.cos(b)*$,m*n*y,Math.sin(b)*$),z=(w/n+1)/2;l.push({x:p,y:M,z:w,r:((a.rBase??1.2)+(a.rDepth??1.8)*z)*i,white:.55-.45*z,a:v*(.45+.55*z)})}}return yr(l,[],a.rMin)};function Td(e,t,a,o){const r=2*t*a+o,n=e%r,s=new Array(t).fill(0);let i=-1;if(n<2*t*a){const l=Math.floor(n/a),h=(n-l*a)/a,u=1-(1-Math.min(1,h/.7))**3;if(l<t){for(let c=0;c<l;c++)s[c]=1;s[l]=u,i=l}else{const c=2*t-1-l;for(let f=0;f<c;f++)s[f]=1;s[c]=1-u,i=c}}return{amount:s,active:i}}function Ed(e,t,a){let[o,r,n]=e,s=!1;for(let i=0;i<t.length;i++){if(a.amount[i]<=0)continue;const l=t[i],h=l.axis===0?o:l.axis===1?r:n;if(h<l.lo||h>=l.hi)continue;i===a.active&&(s=!0);const d=l.ang*a.amount[i],u=Math.cos(d),c=Math.sin(d);if(l.axis===0){const f=r*u-n*c;n=r*c+n*u,r=f}else if(l.axis===1){const f=o*u+n*c;n=-o*c+n*u,o=f}else{const f=o*u-r*c;r=o*c+r*u,o=f}}return[o,r,n,s]}function Dd(e){const t=[];for(let a=0;a<e;a++){const o=Math.min(2,Math.floor(to(a,2.3)*3)),r=-1+.5*Math.min(3,Math.floor(to(a,5.9)*4)),n=to(a,7.7)<.5?1:-1;t.push({axis:o,lo:r,hi:r+.5,ang:n*Math.PI/2})}return t}const Hd=(e,t,a)=>{const r=e/2,n=e/2,s=e/2*.82,i=.4+.06*Math.sin(t*.35),l=nn(t*.5,i,r,n,s),h=t*(.5+(1.7-.5)*(a.scanMul??1)),d=sn(e,a.rsPow??.6),u=a.dimBase??1,c=[],f=a.latRings??17,g=a.lonDensity??44;for(let m=0;m<=f;m++){const x=-Math.PI/2+m/f*Math.PI,v=Math.cos(x),b=Math.sin(x),y=Math.max(1,Math.round(Math.abs(v)*g));for(let $=0;$<y;$++){const p=$/y*2*Math.PI,[M,w,z]=l(v*Math.cos(p),b,v*Math.sin(p)),k=(z+1)/2,F=Cd(p+t*.5,h),S=Math.exp(-(F*F)/.18)*Math.max(0,z);c.push({x:M,y:w,z,r:((a.rBase??.6)+(a.rDepth??1.7)*k+(a.rBoost??1)*S)*d,white:(a.inkFar??.62)-(a.inkSpan??.54)*k,a:u+(1-u)*Math.min(1,S)})}}return yr(c,[],a.rMin)},Bd=(e,t,a)=>{const o=e/2,r=e/2,n=e/2*.82,s=nn(t*.55,.35+.1*Math.sin(t*.9),o,r,n),i=sn(e,a.rsPow??.6),l=a.moveCount??14,h=Dd(l),d=Td(t,l,.42,1.2),u=[],c=a.latRings??15,f=a.lonDensity??40;for(let g=0;g<=c;g++){const m=-Math.PI/2+g/c*Math.PI,x=Math.cos(m),v=Math.sin(m),b=Math.max(1,Math.round(Math.abs(x)*f));for(let y=0;y<b;y++){const $=y/b*2*Math.PI,[p,M,w,z]=Ed([x*Math.cos($),v,x*Math.sin($)],h,d),[k,F,S]=s(p,M,w),_=(S+1)/2;u.push({x:k,y:F,z:S,r:((a.rBase??.6)+(a.rDepth??1.7)*_+(z?a.rActive??.3:0))*i,white:(a.inkFar??.62)-(a.inkSpan??.54)*_-(z?.14:0)})}}return yr(u,[],a.rMin)},Ld=(e,t,a)=>{const o=e/2,r=e/2,n=e/2*.874,s=nn(t*.18,.38,o,r,1),i=sn(e,a.rsPow??.6),l=[],h=a.rings??15,d=a.lonDensity??40;for(let u=0;u<=h;u++){const c=-Math.PI/2+u/h*Math.PI,f=Math.cos(c),g=Math.sin(c),m=.62*Math.sin(t*2.1-u*.52)+.38*Math.sin(t*1.27+u*.83),x=n*(.88+.105*m),v=Math.max(1,Math.round(Math.abs(f)*d));for(let b=0;b<v;b++){const y=b/v*2*Math.PI,[$,p,M]=s(f*Math.cos(y)*x,g*x,f*Math.sin(y)*x),w=(M/n+1)/2,z=Math.max(0,m);l.push({x:$,y:p,z:M,r:((a.rBase??.6)+(a.rDepth??1.7)*w)*(1+.4*z)*i,white:.66-.56*w-.1*z})}}return yr(l,[],a.rMin)};function Yd(e){return e*e*(3-2*e)}function Nh(e){const t=e.length,a=[];let o=0;for(let r=0;r<t;r++){const n=e[r],s=e[(r+1)%t],i=Math.hypot(s[0]-n[0],s[1]-n[1]);a.push(i),o+=i}return r=>{let n=r*o,s=0;for(;n>a[s]&&s<t-1;)n-=a[s],s++;const i=e[s],l=e[(s+1)%t],h=a[s]?Math.min(1,n/a[s]):0;return[i[0]+(l[0]-i[0])*h,i[1]+(l[1]-i[1])*h]}}const Xd=e=>{const t=-Math.PI/2+e*2*Math.PI;return[Math.cos(t)*.24,Math.sin(t)*.24]},Nd=Nh([[0,-.26],[.24,.16],[-.24,.16]]),jd=Nh([[0,-.2],[.2,-.2],[.2,.2],[-.2,.2],[-.2,-.2]]),o0=[Xd,Nd,jd];function qd(e){return Math.max(6,Math.round(34*e))}const J0=1.4,jh=.9,Us=J0+jh,Gd=(e,t,a)=>{const o=o0.length,r=t%(Us*o),n=a.shape!=null&&a.shape>=0&&a.shape<o?Math.floor(a.shape):-1,s=n>=0?n:Math.floor(r/Us),i=n>=0?t%Us:r-s*Us,l=n>=0?0:i>J0?Yd((i-J0)/jh):0,h=a.spread??1,d=o0[s],u=n>=0?d:o0[(s+1)%o],c=160,f=[];for(let w=0;w<c;w++){const z=w/c,k=d(z),F=u(z);f.push([(k[0]+(F[0]-k[0])*l)*h,(k[1]+(F[1]-k[1])*l)*h])}const g=[];let m=0;for(let w=0;w<c;w++){const z=f[w],k=f[(w+1)%c],F=Math.hypot(k[0]-z[0],k[1]-z[1]);g.push(F),m+=F}const x=qd(a.iconD??1),v=(a.rDot??.021)*1.35*h,b=1+.02*Math.sin(i*3.1),y=[],$=e/2;let p=0,M=0;for(let w=0;w<x;w++){const z=w/x*m;for(;M+g[p]<z&&p<c-1;)M+=g[p],p++;const k=f[p],F=f[(p+1)%c],S=g[p]?Math.min(1,(z-M)/g[p]):0,_=(k[0]+(F[0]-k[0])*S)*b,A=(k[1]+(F[1]-k[1])*S)*b;y.push({x:$+_*e,y:$+A*e,z:0,r:Math.max(.35,v*e),white:.1})}return yr(y,[],a.rMin)},Ud=(e,t,a)=>{const o=e/2,r=e/2,n=e/2*.82,s=nn(t*.12,.3,o,r,1),i=sn(e,a.rsPow??.6),l=[],h=a.orbitN??12,d=a.ghostN??40,u=a.particles??3;for(let c=0;c<h;c++){const f=to(c,1.7),g=to(c,5.2),m=to(c,8.9),x=n*(.45+.52*f),v=f*2*Math.PI,b=Math.acos(2*g-1),y=Math.sin(b)*Math.cos(v),$=Math.cos(b),p=Math.sin(b)*Math.sin(v);let M=-$,w=y;const z=0,k=Math.max(1e-6,Math.sqrt(M*M+w*w));M/=k,w/=k;const F=$*z-p*w,S=p*M-y*z,_=y*w-$*M,A=(.25+.55*m)*(m>.5?1:-1);for(let C=0;C<d;C++){const R=C/d*2*Math.PI,[O,E,I]=s((M*Math.cos(R)+F*Math.sin(R))*x,(w*Math.cos(R)+S*Math.sin(R))*x,(z*Math.cos(R)+_*Math.sin(R))*x),P=(I/x+1)/2;l.push({x:O,y:E,z:I,r:(a.ghostR??.9)*i,white:.72,a:(a.ghostA??.5)*(.4+.6*P)})}for(let C=0;C<u;C++){const R=t*A+C/u*2*Math.PI+g*6,[O,E,I]=s((M*Math.cos(R)+F*Math.sin(R))*x,(w*Math.cos(R)+S*Math.sin(R))*x,(z*Math.cos(R)+_*Math.sin(R))*x),P=(I/x+1)/2;l.push({x:O,y:E,z:I,r:((a.partR??1.2)+(a.partRDepth??1.6)*P)*i,white:.3-.22*P})}}return yr(l,[],a.rMin)},lc=(e,t,a)=>{const o=e/2,r=e/2,n=e/2*.78,s=a.spin??1,i=.3,l=nn(t*.1*s,i,o,r,1),h=sn(e,a.rsPow??.6),d=[],u=a.ghostN??150;for(let _=0;_<u;_++){const A=Wl(_,u),[C,R,O]=l(A[0]*n,A[1]*n,A[2]*n),E=(O/n+1)/2;d.push({x:C,y:R,z:O,r:.8*h,white:.78,a:.1+.22*E})}const c=t*.24*s,f=a.faceOn?-i:.55+.3*Math.sin(t*.18)*s,g=Math.cos(c),m=0,x=Math.sin(c),v=-x*Math.sin(f),b=Math.cos(f),y=g*Math.sin(f),$=m*y-x*b,p=x*v-g*y,M=g*b-m*v,w=.23*(a.wobMul??1),z=a.faceOn?n/(1+.85*w):n,k=a.lanes??5,F=a.segs??88,S=Math.max(1,Math.round(k*(a.bandMul??1)));for(let _=0;_<S;_++){const A=(_-(S-1)/2)*.075,C=Math.abs(_-(S-1)/2)/Math.max(1,(S-1)/2);for(let R=0;R<F;R++){const O=R/F*2*Math.PI,E=(.16*Math.sin(O*3-t*1.7+_*.22)+.07*Math.sin(O*5+t*1.1))*(a.wobMul??1),I=a.faceOn?1+E:1,P=a.faceOn?A:A+E,T=g*Math.cos(O)+v*Math.sin(O)+$*P,Y=m*Math.cos(O)+b*Math.sin(O)+p*P,q=x*Math.cos(O)+y*Math.sin(O)+M*P,j=Math.sqrt(T*T+Y*Y+q*q),X=z*I,[K,Q,W]=l(T/j*X,Y/j*X,q/j*X),N=(W/n+1)/2;d.push({x:K,y:Q,z:W,r:((a.rBase??1.1)+(a.rDepth??1.7)*N)*(1-.25*C)*h,white:.52-.44*N+.18*C,a:.4+.6*N})}}return yr(d,[],a.rMin)},Vd=(e,t,a)=>{const o=e/2,r=e/2,n=e/2*.8*(a.spread??1),s=nn(t*.12,.32,o,r,n),i=sn(e,a.rsPow??.6),l=a.nodeN??30,h=a.thr??.72,d=a.nodeR??1.4,u=a.nodeRDepth??1.8,c=[];for(let x=0;x<l;x++){const v=Wl(x,l),b=v[0]+.3*(a0(x*.31+9,t*.24)-.5)*2,y=v[1]+.3*(a0(x*.53+27,t*.21)-.5)*2,$=v[2]+.3*(a0(x*.77+55,t*.27)-.5)*2,p=Math.sqrt(b*b+y*y+$*$);c.push([b/p,y/p,$/p])}const f=[],g=[];for(let x=0;x<l;x++)for(let v=x+1;v<l;v++){const b=c[x][0]-c[v][0],y=c[x][1]-c[v][1],$=c[x][2]-c[v][2],p=Math.sqrt(b*b+y*y+$*$);if(p>=h)continue;const[M,w,z]=s(c[x][0],c[x][1],c[x][2]),[k,F,S]=s(c[v][0],c[v][1],c[v][2]),_=((z+S)/2+1)/2;f.push({x1:M,y1:w,x2:k,y2:F,white:.42,a:(1-p/h)*(.3+.55*_),w:Math.max(.6,(a.lineW??.8)*i)})}for(let x=0;x<l;x++){const[v,b,y]=s(c[x][0],c[x][1],c[x][2]),$=(y+1)/2,p=1+.25*Math.sin(t*1.4+x*2.7);g.push({x:v,y:b,z:y,r:(d+u*$)*p*i,white:.55-.45*$})}const m=a.signals??5;for(let x=0;x<m;x++){const v=Math.floor(t*.55+x*7.31),b=Math.floor(to(v,x*3.1+1.7)*l),y=Math.floor(to(v,x*5.7+4.2)*l);if(b===y)continue;const $=Hh(t*.55+x*7.31),p=t0(c[b][0],c[y][0],$),M=t0(c[b][1],c[y][1],$),w=t0(c[b][2],c[y][2],$),z=Math.max(1e-6,Math.sqrt(p*p+M*M+w*w)),[k,F,S]=s(p/z,M/z,w/z),_=(S+1)/2;g.push({x:k,y:F,z:S,r:(d*1.5+u*_)*i,white:.05,a:.5+.5*_})}return yr(g,f,a.rMin)},qh={orbits:Ud,globe:Hd,rubik:Bd,wave:Ld,web:Vd,braid:Wd,ribbon:lc,ring:lc,morph:Gd};Object.fromEntries(Object.entries(qh).map(([e,t])=>[e,(a,o,r,n,s)=>Lh(a,t(o,r,s),n)]));const Kd={working:"orbits",searching:"globe",solving:"rubik",listening:"wave",connecting:"web",weaving:"braid",composing:"ribbon",breathing:"ring",shaping:"morph"},Qd={orbits:{64:{speed:1.885,count:1,size:1},32:{speed:2.9072,count:.4251,size:1.6849},20:{speed:3.9,count:.238,size:2.4}},globe:{64:{speed:2.015,count:.42,size:1.15,extra:{scanMul:4.08,dimBase:.45}},32:{speed:2.3803,count:.1839,size:1.4769,extra:{scanMul:4.2301,dimBase:.45}},20:{speed:2.665,count:.105,size:1.75,extra:{scanMul:4.335,dimBase:.45}}},rubik:{64:{speed:1.82,count:.35,size:1.05},32:{speed:1.8964,count:.1537,size:1.4951},20:{speed:1.95,count:.088,size:1.9}},wave:{64:{speed:4.388,count:.341,size:1},32:{speed:4.1512,count:.169,size:1.3232},20:{speed:3.998,count:.105,size:1.6}},web:{64:{speed:3.315,count:1.35,size:.95},32:{speed:5.0104,count:.4942,size:1.2571},20:{speed:6.63,count:.25,size:1.52}},braid:{64:{speed:1.625,count:.5,size:1},32:{speed:2.2234,count:.2056,size:1.2011},20:{speed:2.75,count:.1125,size:1.36}},ribbon:{64:{speed:2.34,count:.25,size:.85,extra:{spin:0,bandMul:3.9,wobMul:1}},32:{speed:2.7776,count:.0969,size:.9766,extra:{spin:0,bandMul:4.49,wobMul:1}},20:{speed:3.12,count:.051,size:1.073,extra:{spin:0,bandMul:4.94,wobMul:1}}},ring:{64:{speed:3.24,count:.25,size:.956,extra:{spin:0,bandMul:3.627,wobMul:.368}},32:{speed:3.5517,count:.0678,size:1.31,extra:{spin:0,bandMul:3.8265,wobMul:.4751}},20:{speed:3.78,count:.028,size:1.622,extra:{spin:0,bandMul:3.968,wobMul:.565}}},morph:{64:{speed:2.405,count:.702,size:.395,extra:{spread:1.45}},32:{speed:2.2057,count:.5937,size:.6916,extra:{spread:1.45}},20:{speed:2.08,count:.53,size:1.011,extra:{spread:1.45}}}},cc=new Map;function Zd(e,t){const a=`${e}-${t}`,o=cc.get(a);if(o)return o;const r=Kd[e],n=Qd[r][t];let s={...Pd[r]};n.count!==1&&(s=Yh(s,n.count)),n.size!==1&&(s=Xh(s,n.size)),n.extra&&(s={...s,...n.extra});const i={mode:r,speed:n.speed,opts:s};return cc.set(a,i),i}function Jd(e){let t=e;for(;t;){const a=t.getAttribute("data-theme");if(a==="dark")return!0;if(a==="light")return!1;if(t.classList.contains("dark"))return!0;if(t.classList.contains("light"))return!1;t=t.parentElement}return null}function ep(){return typeof matchMedia>"u"||matchMedia("(prefers-color-scheme: dark)").matches}function tp(e,t){const[a,o]=L.useState(!0);return L.useEffect(()=>{if(e==="dark"){o(!0);return}if(e==="light"){o(!1);return}const r=()=>{const l=Jd(t.current);o(l??ep())};r();const n=typeof matchMedia<"u"?matchMedia("(prefers-color-scheme: dark)"):null,s=()=>r();n?.addEventListener("change",s);let i=null;return typeof MutationObserver<"u"&&t.current&&(i=new MutationObserver(r),i.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"],subtree:!0})),()=>{n?.removeEventListener("change",s),i?.disconnect()}},[e,t]),a}function ap(){const[e,t]=L.useState(!1);return L.useEffect(()=>{if(typeof matchMedia>"u")return;const a=matchMedia("(prefers-reduced-motion: reduce)");t(a.matches);const o=r=>t(r.matches);return a.addEventListener("change",o),()=>a.removeEventListener("change",o)},[]),e}const Ja=Object.freeze({reach:160,strength:11,deform:19,taper:1.95,curve:2.8,falloff:24,smoothing:.3,handover:.6,squash:1.2,blur:1,fadeMs:180});let uo=null,tn=null,In=null,hc=0,Gh=0,fs=!1,el="",tl=0;function op(e){if(e===uo||(uo=e,tn=null,In=null,fs=!1,tl=0,Gh=typeof window<"u"&&window.devicePixelRatio||1,an(),!e||typeof Image>"u"))return;const t=new Image;t.decoding="async",t.onload=()=>{uo===e&&(tn=t,Ui())},t.src=e.src}const zn=new Set;let En=!1,dr=0,al=0,co=Number.NaN,Hr=Number.NaN,ol=0,rl=0,or=0,Xa=null,xi=!0,ds=!1;function rp(e,t=!0){const a=t===!0?{}:t;a.sprite&&op(a.sprite);const o={el:e,opts:{reach:Math.max(1,a.reach??Ja.reach),strength:Math.max(0,Math.min(64,a.strength??Ja.strength)),deform:Math.max(0,Math.min(32,a.deform??Ja.deform)),taper:Math.max(1,Math.min(4,a.taper??Ja.taper)),curve:Math.max(1,Math.min(4,a.curve??Ja.curve)),falloff:Math.max(2,Math.min(200,a.falloff??Ja.falloff)),smoothing:uc(a.smoothing??Ja.smoothing),handover:uc(a.handover??Ja.handover),squash:Math.max(0,Math.min(3,a.squash??Ja.squash)),blur:Math.max(0,Math.min(24,a.blur??Ja.blur)),fadeMs:Math.max(1,a.fadeMs??Ja.fadeMs)}};return zn.add(o),ip(),Ui(),()=>{zn.delete(o),Xa===o&&(Xa=null),zn.size===0&&queueMicrotask(()=>{zn.size===0&&lp()})}}const uc=e=>Math.max(0,Math.min(1,e)),vi=e=>e.opts,ls=e=>typeof window.matchMedia=="function"&&window.matchMedia(e).matches;function np(){if(fs)return el||"disabled by a fail-safe";if(!uo)return"no pointer sprite set";if(!tn)return"pointer sprite still loading";if(ls("(prefers-reduced-motion: reduce)"))return"prefers-reduced-motion is on";if(ls("(forced-colors: active)"))return"forced colours are active";if(!ls("(pointer: fine)")||!ls("(hover: hover)"))return"no fine pointer";if((window.devicePixelRatio||1)!==Gh)return"display scale changed since the sprite was set — reload";const e=window.visualViewport;return e&&Math.abs(e.scale-1)>.001?"page is zoomed":null}function sp(){return np()===null}function ip(){En||zn.size===0||typeof document>"u"||ls("(pointer: fine)")&&(En=!0,document.addEventListener("pointermove",Uh,{passive:!0}),document.addEventListener("pointerleave",lr),document.addEventListener("pointercancel",lr),document.addEventListener("keydown",Vh,{passive:!0}),document.addEventListener("visibilitychange",lr),window.addEventListener("blur",lr))}function lp(){En&&(En=!1,document.removeEventListener("pointermove",Uh),document.removeEventListener("pointerleave",lr),document.removeEventListener("pointercancel",lr),document.removeEventListener("keydown",Vh),document.removeEventListener("visibilitychange",lr),window.removeEventListener("blur",lr),dr!==0&&(cancelAnimationFrame(dr),dr=0),Xa=null,or=0,an(),Fo&&(Fo.remove(),Fo=null,Lo=null,Pi=null),Nr&&(Nr.remove(),Nr=null))}function Uh(e){xi=e.pointerType==="mouse"||e.pointerType==="",ds=!1,Tl++,co=ol=e.clientX,Hr=rl=e.clientY,ks&&(ks=!1,ps(),ms=0,gs=0,Br=Cn=Number.NaN),Ui()}function Vh(){ds=!0,an()}function lr(){co=Hr=Number.NaN,Ui()}function Ui(){!En||dr!==0||(al=performance.now(),dr=requestAnimationFrame(il))}let Fo=null,Lo=null,Pi=null,Dn=!1;const Vr="thinking-orb-gravity-hide";let Nr=null,$s=!1;const fc=new WeakMap;let Tl=0,El=-1,nl=0,Kh=-1;function cp(){if(Fo)return!0;const e=document.createElement("div");e.className="thinking-orb-gravity-cursor",e.setAttribute("aria-hidden","true"),e.style.cssText="position:fixed;left:0;top:0;pointer-events:none;z-index:2147483001;will-change:transform;display:none";const t=document.createElement("canvas");t.style.display="block",e.appendChild(t),document.body.appendChild(e);const a=t.getContext("2d");return a?(Fo=e,Lo=t,Pi=a,sl=0,!0):(e.remove(),!1)}function hp(){Nr||(Nr=document.createElement("style"),Nr.textContent=`html.${Vr}, html.${Vr} * { cursor: none !important; }`,document.head.appendChild(Nr))}function up(e){const t=fc.get(e);if(t)return t;const a=document.documentElement,o=a.classList.contains(Vr);o&&a.classList.remove(Vr);const r=getComputedStyle(e).cursor;return o&&a.classList.add(Vr),fc.set(e,r),r}function dc(e,t){const a=document.elementFromPoint(e,t);if(!a)return!1;const o=up(a);return o!=="auto"&&o!=="default"?(Dl(),!1):($s||(hp(),document.documentElement.classList.add(Vr),$s=!0,El=Tl,Kh=nl),!0)}function Dl(){$s&&(document.documentElement.classList.remove(Vr),$s=!1,El=-1)}function ps(){Fo&&Dn&&(Fo.style.display="none",Dn=!1)}const fp=500;let pc=Number.NEGATIVE_INFINITY,ks=!1;function an(){ks=!1,Dl(),ps(),ms=0,gs=0,Br=Cn=Number.NaN}const jr={cx:0,cy:0,r:0};let ms=0,gs=0,Br=Number.NaN,Cn=Number.NaN;const Fr=48,mc=10;let fn=null,r0=null,Or=null,Ir=null,An=null,sl=0,gc=0,bc=0;function dp(e){if(!tn||!uo)return null;const t=document.createElement("canvas");t.width=Math.ceil(uo.width*e),t.height=Math.ceil(uo.height*e);const a=t.getContext("2d",{willReadFrequently:!0});return a?(a.scale(e,e),a.drawImage(tn,0,0,uo.width,uo.height),a.getImageData(0,0,t.width,t.height)):null}function pp(e,t,a,o,r,n,s){if(!In||!An)return;const i=An.width,l=An.height,h=In,d=h.width,u=h.height,c=h.data,f=An.data;f.fill(0);const g=Math.max(1,Math.hypot(d,u)),m=n-o,x=s-r,v=Math.hypot(m,x)||1,b=m/v,y=x/v,$=Math.max(0,Math.floor(a+Math.min(0,e*b)-3)),p=Math.min(i,Math.ceil(a+d+Math.max(0,e*b)+3)),M=Math.max(0,Math.floor(a+Math.min(0,e*y)-3)),w=Math.min(l,Math.ceil(a+u+Math.max(0,e*y)+3));for(let z=M;z<w;z++)for(let k=$;k<p;k++){const F=(z*i+k)*4;let S=k-a,_=z-a;if(e>.01){let Y=k,q=z,j=0,X=0,K=0,Q=1;for(let ae=0;ae<7;ae++){const G=Math.hypot(Y-o,q-r)/g;j=e*Math.pow(Math.min(1,G),t),X=n-Y,K=s-q,Q=Math.hypot(X,K)||1,Y+=(k-j*X/Q-Y)*.5,q+=(z-j*K/Q-q)*.5}const W=Y+j*X/Q-k,N=q+j*K/Q-z;if(W*W+N*N>2.25){f[F]=f[F+1]=f[F+2]=f[F+3]=0;continue}S=Y-a,_=q-a}const A=Math.floor(S),C=Math.floor(_);if(A<-1||C<-1||A>=d||C>=u){f[F]=f[F+1]=f[F+2]=f[F+3]=0;continue}const R=S-A,O=_-C;let E=0,I=0,P=0,T=0;for(let Y=0;Y<4;Y++){const q=A+(Y&1),j=C+(Y>>1);if(q<0||j<0||q>=d||j>=u)continue;const X=(Y&1?R:1-R)*(Y>>1?O:1-O),K=(j*d+q)*4,Q=X*c[K+3];E+=c[K]*Q,I+=c[K+1]*Q,P+=c[K+2]*Q,T+=Q}T>0?(f[F]=E/T,f[F+1]=I/T,f[F+2]=P/T,f[F+3]=T):f[F]=f[F+1]=f[F+2]=f[F+3]=0}}function xc(e,t,a){if(!Pi||!Lo||!Fo||!uo||!tn)return;const o=uo,r=vi(e),n=Math.min(3,window.devicePixelRatio||1);if(fn||(fn=document.createElement("canvas"),r0=fn.getContext("2d")),Or||(Or=document.createElement("canvas"),Ir=Or.getContext("2d")),!r0||!Ir||((!In||hc!==n)&&(In=dp(n),hc=n),!In))return;if(n!==sl||o.width!==gc||o.height!==bc){sl=n,gc=o.width,bc=o.height;const O=Math.ceil((o.width+2*Fr)*n),E=Math.ceil((o.height+2*Fr)*n);Lo.width=fn.width=Or.width=O,Lo.height=fn.height=Or.height=E,Lo.style.width=`${o.width+2*Fr}px`,Lo.style.height=`${o.height+2*Fr}px`,An=Ir.createImageData(O,E)}const s=Lo.width,i=Lo.height,l=Math.pow(t,r.curve),h=1-Math.exp(-a/(.012+r.smoothing*.14));ms+=(r.strength*l-ms)*h,gs+=(r.deform*l-gs)*h;let d=ms*n,u=gs*n;if(Number.isNaN(Br))Br=jr.cx,Cn=jr.cy;else{const O=1-Math.exp(-a/(.05+r.handover*.6));Br+=(jr.cx-Br)*O,Cn+=(jr.cy-Cn)*O}const c=Fr*n,f=c+o.hotX*n,g=c+o.hotY*n,m=f+(Br-ol)*n,x=g+(Cn-rl)*n,v=Math.hypot(m-f,x-g)||1,b=(m-f)/v,y=(x-g)/v,$=r.falloff*n;if(r.squash>0){const O=Math.hypot(o.width*.5-o.hotX,o.height-o.hotY)||1,E=(o.width*.5-o.hotX)/O,I=(o.height-o.hotY)/O,P=Math.max(0,-(b*E+y*I)),T=1+r.squash*P;d*=T,u*=T}const p=Math.ceil(Math.max(u,1))+4,M=Math.floor(Math.min(c,c+b*d)-p),w=Math.floor(Math.min(c,c+y*d)-p),z=Math.ceil(Math.max(c,c+b*d)+o.width*n+p),k=Math.ceil(Math.max(c,c+y*d)+o.height*n+p),F=Math.max(0,M),S=Math.max(0,w),_=Math.min(s,z)-F,A=Math.min(i,k)-S;u>.01?(pp(u,r.taper,c,f,g,m,x),Ir.putImageData(An,0,0,F,S,_,A)):(Ir.setTransform(1,0,0,1,0,0),Ir.clearRect(0,0,s,i),Ir.drawImage(tn,c,c,o.width*n,o.height*n));const C=Pi,R=r0;if(C.setTransform(1,0,0,1,0,0),C.clearRect(0,0,s,i),C.globalAlpha=1,C.globalCompositeOperation="source-over",C.drawImage(Or,0,0),d>.5){const O=c+o.width*n*.42,E=c+o.height*n*.5,I=$/2,P=R.createLinearGradient(O-b*I,E-y*I,O+b*I,E+y*I);P.addColorStop(0,"rgba(0,0,0,0)"),P.addColorStop(1,"rgba(0,0,0,1)");for(let T=mc;T>=1;T--){const Y=T/mc;R.setTransform(1,0,0,1,0,0),R.globalCompositeOperation="source-over",R.globalAlpha=1,R.clearRect(F,S,_,A),R.drawImage(Or,F,S,_,A,F+b*d*Y,S+y*d*Y,_,A),R.globalCompositeOperation="destination-in",R.fillStyle=P,R.fillRect(F,S,_,A),C.globalCompositeOperation="destination-over",C.globalAlpha=Math.pow(1-Y,1.6)*.9,r.blur>0&&(C.filter=`blur(${(r.blur*Math.sqrt(Y)*n).toFixed(2)}px)`),C.drawImage(fn,F,S,_,A,F,S,_,A)}C.filter="none",C.globalAlpha=1,C.globalCompositeOperation="source-over"}Fo.style.transform=`translate3d(${(ol-o.hotX-Fr).toFixed(2)}px,${(rl-o.hotY-Fr).toFixed(2)}px,0)`,Dn||(Fo.style.display="",Dn=!0)}function il(e){if(dr=0,!En)return;const t=performance.now();try{mp(e)}catch(o){fs=!0,el=`disabled after an error (${o instanceof Error?o.message:String(o)})`,an(),Xa=null,typeof console<"u"&&console.warn("thinking-orbs: gravity disabled after error",o);return}const a=performance.now()-t;a>12?++tl>=30&&!fs&&(fs=!0,el=`disabled after slow frames (~${Math.round(a)}ms each)`,an()):tl=0}function mp(e){const t=Math.min(.05,Math.max(.001,(e-al)/1e3));al=e,nl++;let a=null,o=0;if(!Number.isNaN(co)&&sp()){let i=Number.POSITIVE_INFINITY;for(const l of zn){if(!l.el.isConnected)continue;const h=l.el.getBoundingClientRect();if(h.width<=0)continue;const d=h.left+h.width/2,u=h.top+h.height/2,c=Math.min(h.width,h.height)/2,f=vi(l).reach;if(co<d-c-f||co>d+c+f||Hr<u-c-f||Hr>u+c+f)continue;const g=Math.hypot(co-d,Hr-u)-c;g<=f&&g<i&&(i=g,a=l,jr.cx=d,jr.cy=u,jr.r=c)}if(a){const l=1-Math.max(0,i)/vi(a).reach;o=l*l*(3-2*l),pc=e}}const r=Xa??a,n=r?vi(r).fadeMs:Ja.fadeMs,s=1-Math.exp(-(t*1e3)/(n/3));if(or+=(o-or)*s,a&&a!==Xa&&(Xa=a),!a&&or<.002){if(or=0,Xa&&$s&&!ks&&xi&&!ds&&!Number.isNaN(co)){if(e-pc<fp){dc(co,Hr)?xc(Xa,0,t):ps(),dr=requestAnimationFrame(il);return}if(Dn){Dl(),ks=!0,Xa=null;return}}Xa=null,an();return}Xa&&(or>.002&&xi&&!ds&&!Number.isNaN(co)&&cp()&&dc(co,Hr)?El===Tl&&nl-Kh<2&&!Dn?ps():xc(Xa,or,t):or>.002&&!Number.isNaN(co)&&xi&&!ds?ps():an(),dr=requestAnimationFrame(il))}function gp(e){if(!e)return;const t=e.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(t){let o=t[1];o.length===3&&(o=o.replace(/./g,n=>n+n));const r=parseInt(o,16);return{r:r>>16&255,g:r>>8&255,b:r&255}}const a=e.trim().match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);if(a)return{r:Number(a[1]),g:Number(a[2]),b:Number(a[3])}}const bp={working:"Working…",searching:"Searching…",solving:"Solving…",listening:"Listening…",connecting:"Connecting…",weaving:"Weaving…",composing:"Composing…",breathing:"Thinking…",shaping:"Shaping…"};function xp({state:e="working",size:t=64,theme:a="auto",speed:o=1,paused:r=!1,color:n,dots:s=1,dotSize:i=1,opts:l,frame:h,gravity:d,style:u,"aria-label":c,...f}){const g=L.useRef(null),m=l?JSON.stringify(l):"",x=tp(a,g),v=d?JSON.stringify(d):"";L.useEffect(()=>{const y=g.current;if(!(!y||!d))return rp(y,d===!0?!0:d)},[v]);const b=ap();return L.useEffect(()=>{const y=g.current;if(!y)return;const $=Math.min(2,typeof devicePixelRatio<"u"&&devicePixelRatio||1);y.width=Math.round(t*$),y.height=Math.round(t*$);const p=y.getContext("2d");if(!p)return;const{mode:M,speed:w,opts:z}=Zd(e,t);let k=s!==1?Yh(z,Math.max(.1,s)):z;i!==1&&(k=Xh(k,Math.max(.1,i))),l&&(k={...k,...l});const F=h??qh[M],S=gp(n),_=w*o,A=q=>{p.setTransform($,0,0,$,0,0),p.clearRect(0,0,t,t),Lh(p,F(t,q,k),x,S)};if(b){A(.6);return}let C=0,R=!1;const O=()=>{A(performance.now()/1e3*_),R&&(C=requestAnimationFrame(O))},E=()=>{R||r||(R=!0,C=requestAnimationFrame(O))},I=()=>{R=!1,cancelAnimationFrame(C)};A(performance.now()/1e3*_);let P=!0;const T=typeof IntersectionObserver<"u"?new IntersectionObserver(([q])=>{P=q.isIntersecting,P&&document.visibilityState!=="hidden"?E():I()}):null;T?.observe(y);const Y=()=>{document.visibilityState==="hidden"?I():P&&E()};return document.addEventListener("visibilitychange",Y),T||E(),()=>{I(),T?.disconnect(),document.removeEventListener("visibilitychange",Y)}},[e,t,x,o,r,b,n,s,i,m,h]),D.jsx("canvas",{ref:g,role:"img","aria-label":c??bp[e],style:{width:t,height:t,display:"block",...u},...f})}function vc(e){let t=e.replace("#","");(t.length===3||t.length===4)&&(t=t.split("").map(o=>o+o).join(""));const a=t.length>=8?parseInt(t.slice(6,8),16)/255:1;return[parseInt(t.slice(0,2),16)/255,parseInt(t.slice(2,4),16)/255,parseInt(t.slice(4,6),16)/255,a]}function Qh(e,t,a){e/=255,t/=255,a/=255;const o=Math.max(e,t,a),r=Math.min(e,t,a),n=o-r;let s=0;const i=o===0?0:n/o;return n!==0&&(o===e?s=((t-a)/n+6)%6:o===t?s=(a-e)/n+2:s=(e-t)/n+4,s/=6),[s,i,o]}function Zh(e,t,a){const o=Math.floor(e*6),r=e*6-o,n=a*(1-t),s=a*(1-r*t),i=a*(1-(1-r)*t);let l=0,h=0,d=0;switch(o%6){case 0:l=a,h=i,d=n;break;case 1:l=s,h=a,d=n;break;case 2:l=n,h=a,d=i;break;case 3:l=n,h=s,d=a;break;case 4:l=i,h=n,d=a;break;case 5:l=a,h=n,d=s;break}return[Math.round(l*255),Math.round(h*255),Math.round(d*255)]}const vp=66,Mp=66,yp=1500,wp=1,Mc=16,$p=96,kp=2,Sp=0,zp=1,Hn={colorBack:"#00000000",speed:1,repetition:1.5,softness:.05,shiftRed:.3,shiftBlue:.3,distortion:.1,contour:.4,angle:90,shape:Sp,scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0,fit:zp},Cp={name:"chromatic",modes:{dark:{...Hn,colorTint:"#88ccff2e",shiftRed:.75,shiftBlue:.75,repetition:2,softness:.09,shaderOpacity:1},light:{...Hn,colorTint:"#66b0ff99",shiftRed:.6,shiftBlue:.6,shaderOpacity:1}}},Ap={name:"silver",modes:{dark:{...Hn,colorTint:"#ffffff66",shaderOpacity:.88},light:{...Hn,colorTint:"#ffffff40",shaderOpacity:1}}},_p={name:"gold",modes:{dark:{...Hn,colorTint:"#ffcc55cc",speed:.85,shaderOpacity:.92},light:{...Hn,colorTint:"#f7d488aa",shaderOpacity:1}}},Jh={chromatic:Cp,silver:Ap,gold:_p},Rp=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,Fp=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,Op=`
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`,Ip=`
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`,Pp=`#version 300 es
precision mediump float;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform vec2 u_resolution;
uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colorTint;

uniform float u_softness;
uniform float u_repetition;
uniform float u_shiftRed;
uniform float u_shiftBlue;
uniform float u_distortion;
uniform float u_contour;
uniform float u_angle;

uniform float u_shape;
uniform bool u_isImage;

in vec2 v_objectUV;
in vec2 v_responsiveUV;
in vec2 v_responsiveBoxGivenSize;
in vec2 v_imageUV;

out vec4 fragColor;

${Rp}
${Fp}
${Ip}

float getColorChanges(float c1, float c2, float stripe_p, vec3 w, float blur, float bump, float tint) {

  float ch = mix(c2, c1, smoothstep(.0, 2. * blur, stripe_p));

  float border = w[0];
  ch = mix(ch, c2, smoothstep(border, border + 2. * blur, stripe_p));

  if (u_isImage == true) {
    bump = smoothstep(.2, .8, bump);
  }
  border = w[0] + .4 * (1. - bump) * w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2. * blur, stripe_p));

  border = w[0] + .5 * (1. - bump) * w[1];
  ch = mix(ch, c2, smoothstep(border, border + 2. * blur, stripe_p));

  border = w[0] + w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2. * blur, stripe_p));

  float gradient_t = (stripe_p - w[0] - w[1]) / w[2];
  float gradient = mix(c1, c2, smoothstep(0., 1., gradient_t));
  ch = mix(ch, gradient, smoothstep(border, border + .5 * blur, stripe_p));

  // Tint color is applied with color burn blending
  ch = mix(ch, 1. - min(1., (1. - ch) / max(tint, 0.0001)), u_colorTint.a);
  return ch;
}

float getImgFrame(vec2 uv, float th) {
  float frame = 1.;
  frame *= smoothstep(0., th, uv.y);
  frame *= 1.0 - smoothstep(1. - th, 1., uv.y);
  frame *= smoothstep(0., th, uv.x);
  frame *= 1.0 - smoothstep(1. - th, 1., uv.x);
  return frame;
}

float blurEdge3x3(sampler2D tex, vec2 uv, vec2 dudx, vec2 dudy, float radius, float centerSample) {
  vec2 texel = 1.0 / vec2(textureSize(tex, 0));
  vec2 r = radius * texel;

  float w1 = 1.0, w2 = 2.0, w4 = 4.0;
  float norm = 16.0;
  float sum = w4 * centerSample;

  sum += w2 * textureGrad(tex, uv + vec2(0.0, -r.y), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(0.0, r.y), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(-r.x, 0.0), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(r.x, 0.0), dudx, dudy).r;

  sum += w1 * textureGrad(tex, uv + vec2(-r.x, -r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, -r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(-r.x, r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, r.y), dudx, dudy).r;

  return sum / norm;
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

void main() {

  const float firstFrameOffset = 2.8;
  float t = .3 * (u_time + firstFrameOffset);

  vec2 uv = v_imageUV;
  vec2 dudx = dFdx(v_imageUV);
  vec2 dudy = dFdy(v_imageUV);
  vec4 img = textureGrad(u_image, uv, dudx, dudy);

  if (u_isImage == false) {
    uv = v_objectUV + .5;
    uv.y = 1. - uv.y;
  }

  float cycleWidth = u_repetition;
  float edge = 0.;
  float contOffset = 1.;

  vec2 rotatedUV = uv - vec2(.5);
  float angle = (-u_angle + 70.) * PI / 180.;
  float cosA = cos(angle);
  float sinA = sin(angle);
  rotatedUV = vec2(
  rotatedUV.x * cosA - rotatedUV.y * sinA,
  rotatedUV.x * sinA + rotatedUV.y * cosA
  ) + vec2(.5);

  if (u_isImage == true) {
    float edgeRaw = img.r;
    edge = blurEdge3x3(u_image, uv, dudx, dudy, 6., edgeRaw);
    edge = pow(edge, 1.6);
    edge *= mix(0.0, 1.0, smoothstep(0.0, 0.4, u_contour));
  } else {
    if (u_shape < 1.) {
      // full-fill on canvas
      vec2 borderUV = v_responsiveUV + .5;
      float ratio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
      vec2 mask = min(borderUV, 1. - borderUV);
      vec2 pixel_thickness = min(250. / v_responsiveBoxGivenSize, vec2(.5));
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);

      uv = v_responsiveUV;
      if (ratio > 1.) {
        uv.y /= ratio;
      } else {
        uv.x *= ratio;
      }
      uv += .5;
      uv.y = 1. - uv.y;

      cycleWidth *= 2.;
      contOffset = 1.5;

    } else if (u_shape < 2.) {
      // circle
      vec2 shapeUV = uv - .5;
      shapeUV *= .67;
      edge = pow(clamp(3. * length(shapeUV), 0., 1.), 18.);
    } else if (u_shape < 3.) {
      // daisy
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.68;

      float r = length(shapeUV) * 2.;
      float a = atan(shapeUV.y, shapeUV.x) + .2;
      r *= (1. + .05 * sin(3. * a + 2. * t));
      float f = abs(cos(a * 3.));
      edge = smoothstep(f, f + .7, r);
      edge *= edge;

      uv *= .8;
      cycleWidth *= 1.6;

    } else if (u_shape < 4.) {
      // diamond
      vec2 shapeUV = uv - .5;
      shapeUV = rotate(shapeUV, .25 * PI);
      shapeUV *= 1.42;
      shapeUV += .5;
      vec2 mask = min(shapeUV, 1. - shapeUV);
      vec2 pixel_thickness = vec2(.15);
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);
    } else if (u_shape < 5.) {
      // metaballs
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.3;
      edge = 0.;
      for (int i = 0; i < 5; i++) {
        float fi = float(i);
        float speed = 1.5 + 2./3. * sin(fi * 12.345);
        float angle = -fi * 1.5;
        vec2 dir1 = vec2(cos(angle), sin(angle));
        vec2 dir2 = vec2(cos(angle + 1.57), sin(angle + 1.));
        vec2 traj = .4 * (dir1 * sin(t * speed + fi * 1.23) + dir2 * cos(t * (speed * 0.7) + fi * 2.17));
        float d = length(shapeUV + traj);
        edge += pow(1.0 - clamp(d, 0.0, 1.0), 4.0);
      }
      edge = 1. - smoothstep(.65, .9, edge);
      edge = pow(edge, 4.);
    }

    edge = mix(smoothstep(.9 - 2. * fwidth(edge), .9, edge), edge, smoothstep(0.0, 0.4, u_contour));

  }

  float opacity = 0.;
  if (u_isImage == true) {
    opacity = img.g;
    float frame = getImgFrame(v_imageUV, 0.);
    opacity *= frame;
  } else {
    opacity = 1. - smoothstep(.9 - 2. * fwidth(edge), .9, edge);
    if (u_shape < 2.) {
      edge = 1.2 * edge;
    } else if (u_shape < 5.) {
      edge = 1.8 * pow(edge, 1.5);
    }
  }

  float diagBLtoTR = rotatedUV.x - rotatedUV.y;
  float diagTLtoBR = rotatedUV.x + rotatedUV.y;

  vec3 color = vec3(0.);
  vec3 color1 = vec3(.98, 0.98, 1.);
  vec3 color2 = vec3(.1, .1, .1 + .1 * smoothstep(.7, 1.3, diagTLtoBR));

  vec2 grad_uv = uv - .5;

  float dist = length(grad_uv + vec2(0., .2 * diagBLtoTR));
  grad_uv = rotate(grad_uv, (.25 - .2 * diagBLtoTR) * PI);
  float direction = grad_uv.x;

  float bump = pow(1.8 * dist, 1.2);
  bump = 1. - bump;
  bump *= pow(uv.y, .3);


  float thin_strip_1_ratio = .12 / cycleWidth * (1. - .4 * bump);
  float thin_strip_2_ratio = .07 / cycleWidth * (1. + .4 * bump);
  float wide_strip_ratio = (1. - thin_strip_1_ratio - thin_strip_2_ratio);

  float thin_strip_1_width = cycleWidth * thin_strip_1_ratio;
  float thin_strip_2_width = cycleWidth * thin_strip_2_ratio;

  float noise = snoise(uv - t);

  edge += (1. - edge) * u_distortion * noise;

  direction += diagBLtoTR;
  float contour = 0.;
  direction -= 2. * noise * diagBLtoTR * (smoothstep(0., 1., edge) * (1.0 - smoothstep(0., 1., edge)));
  direction *= mix(1., 1. - edge, smoothstep(.5, 1., u_contour));
  direction -= 1.7 * edge * smoothstep(.5, 1., u_contour);
  direction += .2 * pow(u_contour, 4.) * (1.0 - smoothstep(0., 1., edge));

  bump *= clamp(pow(uv.y, .1), .3, 1.);
  direction *= (.1 + (1.1 - edge) * bump);

  direction *= (.4 + .6 * (1.0 - smoothstep(.5, 1., edge)));
  direction += .18 * (smoothstep(.1, .2, uv.y) * (1.0 - smoothstep(.2, .4, uv.y)));
  direction += .03 * (smoothstep(.1, .2, 1. - uv.y) * (1.0 - smoothstep(.2, .4, 1. - uv.y)));

  direction *= (.5 + .5 * pow(uv.y, 2.));
  direction *= cycleWidth;
  direction -= t;


  float colorDispersion = (1. - bump);
  colorDispersion = clamp(colorDispersion, 0., 1.);
  float dispersionRed = colorDispersion;
  dispersionRed += .03 * bump * noise;
  dispersionRed += 5. * (smoothstep(-.1, .2, uv.y) * (1.0 - smoothstep(.1, .5, uv.y))) * (smoothstep(.4, .6, bump) * (1.0 - smoothstep(.4, 1., bump)));
  dispersionRed -= diagBLtoTR;

  float dispersionBlue = colorDispersion;
  dispersionBlue *= 1.3;
  dispersionBlue += (smoothstep(0., .4, uv.y) * (1.0 - smoothstep(.1, .8, uv.y))) * (smoothstep(.4, .6, bump) * (1.0 - smoothstep(.4, .8, bump)));
  dispersionBlue -= .2 * edge;

  dispersionRed *= (u_shiftRed / 20.);
  dispersionBlue *= (u_shiftBlue / 20.);

  float blur = 0.;
  float rExtraBlur = 0.;
  float gExtraBlur = 0.;
  if (u_isImage == true) {
    float softness = 0.05 * u_softness;
    blur = softness + .5 * smoothstep(1., 10., u_repetition) * smoothstep(.0, 1., edge);
    float smallCanvasT = 1.0 - smoothstep(100., 500., min(u_resolution.x, u_resolution.y));
    blur += smallCanvasT * smoothstep(.0, 1., edge);
    rExtraBlur = softness * (0.05 + .1 * (u_shiftRed / 20.) * bump);
    gExtraBlur = softness * 0.05 / max(0.001, abs(1. - diagBLtoTR));
  } else {
    blur = u_softness / 15. + .3 * contour;
  }

  vec3 w = vec3(thin_strip_1_width, thin_strip_2_width, wide_strip_ratio);
  w[1] -= .02 * smoothstep(.0, 1., edge + bump);
  float stripe_r = fract(direction + dispersionRed);
  float r = getColorChanges(color1.r, color2.r, stripe_r, w, blur + fwidth(stripe_r) + rExtraBlur, bump, u_colorTint.r);
  float stripe_g = fract(direction);
  float g = getColorChanges(color1.g, color2.g, stripe_g, w, blur + fwidth(stripe_g) + gExtraBlur, bump, u_colorTint.g);
  float stripe_b = fract(direction - dispersionBlue);
  float b = getColorChanges(color1.b, color2.b, stripe_b, w, blur + fwidth(stripe_b), bump, u_colorTint.b);

  color = vec3(r, g, b);
  color *= opacity;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  ${Op}

  fragColor = vec4(color, opacity);
}
`,Wp=`#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`,Tp=Pp;function yc(e,t,a){const o=e.createShader(t);if(!o)throw new Error("metal-fx: gl.createShader returned null");if(e.shaderSource(o,a),e.compileShader(o),!e.getShaderParameter(o,e.COMPILE_STATUS)){const r=e.getShaderInfoLog(o);throw e.deleteShader(o),new Error(`metal-fx: shader compile failed: ${r??"(no info log)"}`)}return o}function Ep(e,t,a){const o=e.createProgram();if(!o)throw new Error("metal-fx: gl.createProgram returned null");if(e.attachShader(o,t),e.attachShader(o,a),e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS)){const r=e.getProgramInfoLog(o);throw e.deleteProgram(o),new Error(`metal-fx: program link failed: ${r??"(no info log)"}`)}return o}const eu=140,tu=40,au=1.6,ou=1.3;let ce=null,dn=null;function Dp(){var e;if(dn!==null)return dn;if(typeof document>"u")return dn=!1;try{const t=document.createElement("canvas").getContext("webgl2");dn=!!t,(e=t?.getExtension("WEBGL_lose_context"))==null||e.loseContext()}catch{dn=!1}return dn}let ll=null;function Hp(e){ll=e}const Bp=["u_resolution","u_time","u_pixelRatio","u_colorBack","u_colorTint","u_repetition","u_softness","u_shiftRed","u_shiftBlue","u_distortion","u_contour","u_angle","u_shape","u_isImage","u_image","u_originX","u_originY","u_worldWidth","u_worldHeight","u_fit","u_scale","u_rotation","u_offsetX","u_offsetY","u_imageAspectRatio"];function wc(e){e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA);const t=yc(e,e.VERTEX_SHADER,Wp),a=yc(e,e.FRAGMENT_SHADER,Tp),o=Ep(e,t,a);e.useProgram(o);const r=e.createBuffer();if(!r)throw new Error("metal-fx: gl.createBuffer returned null");e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const n=e.getAttribLocation(o,"a_position");e.enableVertexAttribArray(n),e.vertexAttribPointer(n,2,e.FLOAT,!1,0,0);const s={};for(const l of Bp)s[l]=e.getUniformLocation(o,l);const i=e.createTexture();return i&&(e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),s.u_image&&e.uniform1i(s.u_image,0)),{program:o,buffer:r,uniforms:s,dummyTexture:i}}function ru(){if(ce)return ce;const e=Math.min(kp,typeof window<"u"&&window.devicePixelRatio||1),t=Math.round($p*e),a=typeof OffscreenCanvas<"u";let o,r;if(a)o=new OffscreenCanvas(t,t),r=o.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1});else{const u=document.createElement("canvas");u.width=t,u.height=t,r=u.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,preserveDrawingBuffer:!0}),o=u}if(!r)throw new Error("metal-fx: WebGL2 not supported");const{program:n,buffer:s,uniforms:i,dummyTexture:l}=wc(r),h=u=>{u.preventDefault(),ce&&(ce.contextLost=!0)},d=()=>{if(!ce)return;const u=wc(ce.gl);ce.program=u.program,ce.buffer=u.buffer,ce.uniforms=u.uniforms,ce.dummyTexture=u.dummyTexture,ce.presetDirty=!0,ce.contextLost=!1,ll?.()};return o.addEventListener("webglcontextlost",h,!1),o.addEventListener("webglcontextrestored",d,!1),ce={glCanvas:o,gl:r,program:n,buffer:s,uniforms:i,dummyTexture:l,preset:Jh.chromatic.modes.dark,presetDirty:!0,contextLost:!1,useOffscreen:a,frameBitmap:null,startMs:performance.now(),pausedMs:0,pausedAtMs:null,rafId:0,dpr:e,instances:new Set,frameCount:0,glowQueue:[],glowIdx:0,glowSkip:0,glowPixels:new Uint8Array(t*t*4),glowPixelsW:t,glowPixelsH:t},ce}function Lp(){var e;if(!ce)return;const{gl:t,program:a,buffer:o,frameBitmap:r,dummyTexture:n}=ce;try{r?.close(),t.deleteBuffer(o),t.deleteProgram(a),n&&t.deleteTexture(n),(e=t.getExtension("WEBGL_lose_context"))==null||e.loseContext()}catch{}ce=null}let $c=0;function Yp(){if(!ce)return;const e=performance.now();if(e-$c<yp)return;$c=e;const{gl:t,glCanvas:a}=ce,o=a.width,r=a.height;(ce.glowPixelsW!==o||ce.glowPixelsH!==r)&&(ce.glowPixelsW=o,ce.glowPixelsH=r,ce.glowPixels=new Uint8Array(o*r*4)),t.readPixels(0,0,o,r,t.RGBA,t.UNSIGNED_BYTE,ce.glowPixels)}const pn={bx:0,by:0};function Hl(e,t,a){if(!ce)return pn.bx=0,pn.by=0,pn;const{glCanvas:o}=ce,r=o.width,n=o.height,s=e.dpr,i=e.cssWidth*s,l=e.cssHeight*s,h=eu*s,d=tu*s;let u=i*(r/h)/e.shaderScale,c=l*(n/d)/e.shaderScale;u>r&&(u=r),c>n&&(c=n);const f=(r-u)/2,g=(n-c)/2,m=f+t/e.cssWidth*u,x=g+a/e.cssHeight*c;return pn.bx=Math.round(m),pn.by=Math.round(n-1-x),pn}const lo={r:0,g:0,b:0,lum:0,count:0};function nu(e,t,a,o,r,n){const s=Math.max(1,n|0),i=Math.max(0,o-s),l=Math.min(t,o+s+1),h=Math.max(0,r-s),d=Math.min(a,r+s+1);lo.r=0,lo.g=0,lo.b=0,lo.lum=0,lo.count=0;for(let u=h;u<d;u++){const c=u*t;for(let f=i;f<l;f++){const g=(c+f)*4;lo.r+=e[g],lo.g+=e[g+1],lo.b+=e[g+2],lo.lum+=(.2126*e[g]+.7152*e[g+1]+.0722*e[g+2])/255,lo.count++}}return lo}const qt={r:255,g:255,b:255};function cl(e,t,a,o){if(!ce)return 0;const r=Hl(e,t,a),n=nu(ce.glowPixels,ce.glowPixelsW,ce.glowPixelsH,r.bx,r.by,o);return n.count>0?n.lum/n.count:0}function su(e,t,a,o){if(!ce)return qt.r=255,qt.g=255,qt.b=255,qt;const r=Hl(e,t,a),n=nu(ce.glowPixels,ce.glowPixelsW,ce.glowPixelsH,r.bx,r.by,o);return n.count===0?(qt.r=255,qt.g=255,qt.b=255,qt):(qt.r=n.r/n.count,qt.g=n.g/n.count,qt.b=n.b/n.count,qt)}function Xp(e,t,a,o){if(!ce)return qt.r=255,qt.g=255,qt.b=255,qt;const r=Hl(e,t,a),{glowPixels:n,glowPixelsW:s,glowPixelsH:i}=ce,l=Math.max(1,o|0),h=Math.max(0,r.bx-l),d=Math.min(s,r.bx+l+1),u=Math.max(0,r.by-l),c=Math.min(i,r.by+l+1);let f=-1;qt.r=255,qt.g=255,qt.b=255;for(let g=u;g<c;g++){const m=g*s;for(let x=h;x<d;x++){const v=(m+x)*4,b=n[v],y=n[v+1],$=n[v+2],p=Math.max(b,y,$),M=Math.min(b,y,$),w=(p>0?(p-M)/p:0)*(.35+.65*(p/255));w>f&&(f=w,qt.r=b,qt.g=y,qt.b=$)}}return qt}const n0=14,kc=1.5,s0={x:0,y:0};function Bn(e=512){return{xy:new Float32Array(e*2),n:0}}function Ln(e,t,a,o,r,n,s=Bn()){r=Math.max(0,Math.min(r,Math.min(a,o)/2));const i=4*(n0+1)+Math.ceil(2*(a+o)/kc)+8;s.xy.length<i*2&&(s.xy=new Float32Array(i*2));const l=s.xy;let h=0;const d=(f,g)=>{n?(n(f,g,s0),l[h*2]=s0.x,l[h*2+1]=s0.y):(l[h*2]=f,l[h*2+1]=g),h++},u=(f,g,m,x)=>{const v=Math.hypot(m-f,x-g),b=Math.max(1,Math.ceil(v/kc));for(let y=0;y<b;y++){const $=y/b;d(f+(m-f)*$,g+(x-g)*$)}},c=(f,g,m,x)=>{for(let v=0;v<=n0;v++){const b=m+(x-m)*(v/n0);d(f+r*Math.cos(b),g+r*Math.sin(b))}};return u(e+r,t,e+a-r,t),c(e+a-r,t+r,-Math.PI/2,0),u(e+a,t+r,e+a,t+o-r),c(e+a-r,t+o-r,0,Math.PI/2),u(e+a-r,t+o,e+r,t+o),c(e+r,t+o-r,Math.PI/2,Math.PI),u(e,t+o-r,e,t+r),c(e+r,t+r,Math.PI,1.5*Math.PI),s.n=h,s}Hp(()=>{ce&&ce.instances.size>0&&ce.pausedAtMs===null&&Ws()});typeof document<"u"&&document.addEventListener("visibilitychange",()=>{!ce||ce.pausedAtMs!==null||ce.contextLost||(document.hidden?hu():ce.instances.size>0&&Ws())});function Np(e){const t=ru(),a=e.hostCanvas.getContext("2d",{alpha:!0});if(!a)throw new Error("metal-fx: canvas 2D context unavailable");const o=e.scale??1,r={canvas:e.hostCanvas,ctx:a,cssWidth:e.cssWidth,cssHeight:e.cssHeight,cornerRadius:e.cornerRadius,kind:e.kind,ringCssPx:e.ringCssPx??(e.kind==="circle"?2:1)*o,shaderScale:e.shaderScale??(e.kind==="circle"?ou:au)*o,opacityMul:e.opacityMul??1,glowGain:e.glowGain??1,visible:!0,paused:e.paused??!1,everCopied:!1,frozen:null,dpr:typeof window<"u"&&window.devicePixelRatio||1,scale:o,onAfterFrame:e.onAfterFrame,onComposite:e.onComposite,onFirstCopy:e.onFirstCopy,mask:e.mask??null,deform:null,deformLayers:null,overscan:0,cursorLight:null,glowFast:!1,rawCanvas:null,wantRaw:!1,ringCanvas:null,wantRing:!1};return Bl(r),t.instances.add(r),t.rafId===0&&t.pausedAtMs===null&&Ws(),r}function jp(e){if(!ce)return;ce.instances.delete(e);const t=ce.glowQueue.indexOf(e);t!==-1&&ce.glowQueue.splice(t,1),ce.instances.size===0&&(hu(),Lp())}function qp(e){ce&&(ce.glowQueue.includes(e)||ce.glowQueue.push(e))}function Gp(e){if(!ce)return;const t=ce.glowQueue.indexOf(e);t!==-1&&ce.glowQueue.splice(t,1)}function mn(e,t){let a=!1;t.mask!==void 0&&(e.mask=t.mask),t.cssWidth!==void 0&&t.cssWidth!==e.cssWidth&&(e.cssWidth=t.cssWidth,a=!0),t.cssHeight!==void 0&&t.cssHeight!==e.cssHeight&&(e.cssHeight=t.cssHeight,a=!0),t.cornerRadius!==void 0&&(e.cornerRadius=t.cornerRadius),t.scale!==void 0&&(e.scale=t.scale),t.kind!==void 0&&t.kind!==e.kind&&(e.kind=t.kind,t.shaderScale===void 0&&(e.shaderScale=(t.kind==="circle"?ou:au)*e.scale),t.ringCssPx===void 0&&(e.ringCssPx=(t.kind==="circle"?2:1)*e.scale)),t.shaderScale!==void 0&&(e.shaderScale=t.shaderScale),t.ringCssPx!==void 0&&(e.ringCssPx=t.ringCssPx),t.opacityMul!==void 0&&(e.opacityMul=t.opacityMul),t.glowGain!==void 0&&(e.glowGain=t.glowGain),t.paused!==void 0&&t.paused!==e.paused&&(e.paused=t.paused,t.paused?iu(e):e.frozen=null,!t.paused&&ce&&ce.rafId===0&&ce.pausedAtMs===null&&!ce.contextLost&&Ws()),a&&Bl(e)}function Up(e,t){e.visible=t,t&&ce&&ce.rafId===0&&ce.pausedAtMs===null&&!ce.contextLost&&Ws()}function Vp(e){return(typeof window<"u"&&window.devicePixelRatio||1)===e.dpr?!1:(Bl(e),lu(e),!0)}function Kp(e,t){const a=ru();a.preset=Jh[e].modes[t],a.presetDirty=!0}let qr=null;function Qp(e){qr=e}function i0(e,t){!qr||!ce||!e.visible||e.paused||ce.glowQueue.includes(e)&&(e.glowFast=!!qr(e,t))}function Bl(e){e.dpr=typeof window<"u"&&window.devicePixelRatio||1;const t=e.overscan,a=Math.max(1,Math.round((e.cssWidth+2*t)*e.dpr)),o=Math.max(1,Math.round((e.cssHeight+2*t)*e.dpr));e.canvas.width!==a&&(e.canvas.width=a),e.canvas.height!==o&&(e.canvas.height=o);const r=e.canvas.style;t>0?(r.left=`${-t}px`,r.top=`${-t}px`,r.width=`calc(100% + ${2*t}px)`,r.height=`calc(100% + ${2*t}px)`,r.borderRadius="0"):r.left!==""&&(r.left="",r.top="",r.width="100%",r.height="100%",r.borderRadius="")}function Zp(e){const{ctx:t,dpr:a,canvas:o}=e,r=e.ringCssPx*a,n=o.width,s=o.height,i=Math.max(0,(e.cornerRadius-e.ringCssPx)*a);t.save(),t.globalCompositeOperation="destination-out",t.fillStyle="#000",t.beginPath(),t.roundRect(r,r,n-2*r,s-2*r,i),t.fill(),t.restore()}const Jp=Bn();function Pr(e,t,a,o,r,n,s,i){const{xy:l,n:h}=Ln(t,a,o,r,n,s,Jp);e.beginPath();for(let d=0;d<h;d++)d===0?e.moveTo(l[0]*i,l[1]*i):e.lineTo(l[d*2]*i,l[d*2+1]*i);e.closePath()}function iu(e){if(!ce)return null;const t=ce.frameBitmap??ce.glCanvas,a=ce.glCanvas.width,o=ce.glCanvas.height;if(a<1||o<1)return null;let r=e.frozen;r||(r=document.createElement("canvas"),e.frozen=r),(r.width!==a||r.height!==o)&&(r.width=a,r.height=o);const n=r.getContext("2d");return n?(n.clearRect(0,0,a,o),n.drawImage(t,0,0),r):(e.frozen=null,null)}function lu(e){var t,a;if(!ce)return;const o=(e.paused?e.frozen??iu(e):null)??ce.frameBitmap??ce.glCanvas,r=e.dpr,n=e.canvas.width,s=e.canvas.height;if(n<1||s<1)return;const i=Math.max(1,Math.round(e.cssWidth*r)),l=Math.max(1,Math.round(e.cssHeight*r)),h=e.overscan*r,d=o.width,u=o.height,c=eu*r,f=tu*r;let g=i*(d/c)/e.shaderScale,m=l*(u/f)/e.shaderScale;g>d&&(g=d),m>u&&(m=u);const x=Math.max(0,(d-g)/2),v=Math.max(0,(u-m)/2),b=e.opacityMul*ce.preset.shaderOpacity,y=e.ctx;y.clearRect(0,0,n,s);const $=e.deform;if(e.mask){if(b<1&&(y.globalAlpha=b),y.drawImage(o,x,v,g,m,0,0,n,s),b<1&&(y.globalAlpha=1),e.wantRaw){let p=e.rawCanvas;p||(p=document.createElement("canvas"),e.rawCanvas=p),(p.width!==n||p.height!==s)&&(p.width=n,p.height=s);const M=p.getContext("2d");M&&(M.clearRect(0,0,n,s),M.drawImage(e.canvas,0,0))}y.save(),y.globalCompositeOperation="destination-in",y.fillStyle="#000",e.mask(y,n,s,r),y.restore(),y.globalCompositeOperation="source-over"}else if(!$)b<1&&(y.globalAlpha=b),y.drawImage(o,x,v,g,m,0,0,n,s),b<1&&(y.globalAlpha=1),Zp(e);else{const p=e.cssWidth,M=e.cssHeight,w=e.cornerRadius,z=e.ringCssPx,k=e.deformLayers;y.save(),y.translate(h,h);const F=i/g,S=l/m,_=Math.min(d,g*(i+2*h)/i),A=Math.min(u,m*(l+2*h)/l),C=Math.max(0,(d-_)/2),R=Math.max(0,(u-A)/2),O=_*F,E=A*S;if(b<1&&(y.globalAlpha=b),y.drawImage(o,C,R,_,A,i/2-O/2,l/2-E/2,O,E),b<1&&(y.globalAlpha=1),y.globalCompositeOperation="destination-in",Pr(y,0,0,p,M,w,$,r),y.fillStyle="#000",y.fill(),y.globalCompositeOperation="destination-out",Pr(y,z,z,p-2*z,M-2*z,Math.max(0,w-z),$,r),y.fill(),e.wantRing){let I=e.ringCanvas;I||(I=document.createElement("canvas"),e.ringCanvas=I),(I.width!==n||I.height!==s)&&(I.width=n,I.height=s);const P=I.getContext("2d");P&&(P.setTransform(1,0,0,1,0,0),P.globalCompositeOperation="source-over",P.clearRect(0,0,n,s),P.translate(h,h),b<1&&(P.globalAlpha=b),P.drawImage(o,C,R,_,A,i/2-O/2,l/2-E/2,O,E),P.globalAlpha=1,P.globalCompositeOperation="destination-out",Pr(P,z,z,p-2*z,M-2*z,Math.max(0,w-z),$,r),P.fillStyle="#000",P.fill(),P.globalCompositeOperation="source-over",P.setTransform(1,0,0,1,0,0))}if(k!=null&&k.hairline){const I=k.hairline;y.globalCompositeOperation="destination-over",Pr(y,I.inset,I.inset,p-2*I.inset,M-2*I.inset,Math.max(0,w-I.inset),$,r),y.lineWidth=I.width*r,y.strokeStyle=I.color,y.stroke()}if(k!=null&&k.fill&&(y.globalCompositeOperation="destination-over",Pr(y,0,0,p,M,w,$,r),y.fillStyle=k.fill,y.fill()),k!=null&&k.rim){const I=k.rim;y.globalCompositeOperation="source-over",y.save(),Pr(y,0,0,p,M,w,$,r),y.clip();const P=I.inset+I.width/2;Pr(y,P,P,p-2*P,M-2*P,Math.max(0,w-P),$,r),y.lineWidth=I.width*r,y.strokeStyle=I.color,y.stroke(),y.restore()}y.restore(),y.globalCompositeOperation="source-over"}if((t=e.onComposite)==null||t.call(e),e.onFirstCopy){const p=e.onFirstCopy;e.onFirstCopy=void 0,p()}(a=e.onAfterFrame)==null||a.call(e)}function e2(){if(!ce)return;const{gl:e,uniforms:t,preset:a,glCanvas:o,dpr:r}=ce;t.u_resolution&&e.uniform2f(t.u_resolution,o.width,o.height),t.u_pixelRatio&&e.uniform1f(t.u_pixelRatio,r),t.u_colorBack&&e.uniform4fv(t.u_colorBack,vc(a.colorBack)),t.u_colorTint&&e.uniform4fv(t.u_colorTint,vc(a.colorTint)),t.u_repetition&&e.uniform1f(t.u_repetition,a.repetition),t.u_softness&&e.uniform1f(t.u_softness,a.softness),t.u_shiftRed&&e.uniform1f(t.u_shiftRed,a.shiftRed),t.u_shiftBlue&&e.uniform1f(t.u_shiftBlue,a.shiftBlue),t.u_distortion&&e.uniform1f(t.u_distortion,a.distortion),t.u_contour&&e.uniform1f(t.u_contour,a.contour),t.u_angle&&e.uniform1f(t.u_angle,a.angle),t.u_shape&&e.uniform1f(t.u_shape,a.shape),t.u_isImage&&e.uniform1i(t.u_isImage,0),t.u_imageAspectRatio&&e.uniform1f(t.u_imageAspectRatio,1),t.u_originX&&e.uniform1f(t.u_originX,a.originX),t.u_originY&&e.uniform1f(t.u_originY,a.originY),t.u_worldWidth&&e.uniform1f(t.u_worldWidth,a.worldWidth),t.u_worldHeight&&e.uniform1f(t.u_worldHeight,a.worldHeight),t.u_fit&&e.uniform1f(t.u_fit,a.fit),t.u_scale&&e.uniform1f(t.u_scale,a.scale),t.u_rotation&&e.uniform1f(t.u_rotation,a.rotation),t.u_offsetX&&e.uniform1f(t.u_offsetX,a.offsetX),t.u_offsetY&&e.uniform1f(t.u_offsetY,a.offsetY),ce.presetDirty=!1}function t2(e){if(!ce)return;const{gl:t,uniforms:a,preset:o,glCanvas:r}=ce,n=(e-ce.startMs-ce.pausedMs)/1e3*o.speed;t.viewport(0,0,r.width,r.height),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),ce.presetDirty&&e2(),a.u_time&&t.uniform1f(a.u_time,n),t.drawArrays(t.TRIANGLES,0,6),ce.frameCount++}let Sc=0;function cu(e){var t;if(!ce)return;if(ce.contextLost){ce.rafId=0;return}let a=!1;for(const o of ce.instances)if(o.visible&&(!o.paused||!o.everCopied)){a=!0;break}if(!a){ce.rafId=0;return}if(ce.rafId=requestAnimationFrame(cu),e-Sc<vp){if(qr)for(const o of ce.glowQueue)o.glowFast&&o.visible&&!o.paused&&(o.glowFast=!!qr(o,e));return}Sc=e,t2(e),Yp(),ce.useOffscreen&&((t=ce.frameBitmap)==null||t.close(),ce.frameBitmap=ce.glCanvas.transferToImageBitmap());for(const o of ce.instances)o.visible&&(o.paused&&o.everCopied||(lu(o),o.everCopied=!0));if(qr&&ce.glowQueue.length>0&&++ce.glowSkip%wp===0)for(const o of ce.glowQueue)o.visible&&!o.paused&&(o.glowFast=!!qr(o,e))}function Ws(){!ce||ce.rafId!==0||(ce.rafId=requestAnimationFrame(cu))}function hu(){ce&&(ce.rafId!==0&&cancelAnimationFrame(ce.rafId),ce.rafId=0)}const hl={linear:e=>e,smoothstep:e=>e*e*(3-2*e)};function Qn(e,t,a,o=hl.linear){return{from:e,to:t,dur:a,ease:o,startMs:-1,val:e,done:!1}}function Zn(e,t){e.startMs=t,e.val=e.from,e.done=!1}function zc(e,t){if(e.done||e.startMs<0)return e.val;const a=Math.min(1,(t-e.startMs)/e.dur);return e.val=e.from+(e.to-e.from)*e.ease(a),a>=1&&(e.done=!0),e.val}const a2=Object.freeze({haloOpMul:2,extraIntensity:3.51,peakOp:.85,baseOp:.34,inset:1.5,extraOutward:1,wanderRange:15,wanderLerp:.0075,fadeRate:.00875,lumLo:.08,lumHi:.32,minDwellMs:1500,relocFadeMs:300,relocFadeOutMs:450,pointGain:2.5,haloHalfLen:7.8,extraHalfLen:9.13952/3,haloStrokeXl:26.4,haloStrokeLg:15.6,haloStrokeMd:7.2,haloStrokeSm:3,haloBlurXl:8.4,haloBlurLg:4.8,haloBlurMd:2.1,haloBlurSm:.9,haloOpXl:.385,haloOpLg:.595,haloOpMd:.7,haloOpSm:.7,extraStrokeOuter:4/3,extraStrokeCore:2/3,extraBlurOuter:2/3,extraBlurCore:1.35/3,extraFadeR:13/3,extraOpOuter:.85}),Pe={...a2},Cc=new Set;function o2(e){return Cc.add(e),()=>{Cc.delete(e)}}const r2=Object.freeze({enabled:!0,reach:56,fadeMs:200,cursor:!0,cursorDistance:186,cursorStrength:3.35,cursorDiffuse:1.4,cursorFalloff:37,cursorDepth:.4,cursorEdge:0,cursorReach:11.5,cursorBlur:.5,cursorZoom:3,spill:!1,spillRadius:48,spillStrength:.55,spillOffset:.35,spillLumGain:.7,spillSaturation:1.3,spillInside:.5,spillBlur:0,catchLight:!1,catchFollow:.25,catchGain:1}),cs={...r2};let uu=!1,fu=0,Vs=0,bs=0,Yn=!1,Kr=0,ul=0,Yo=Number.NaN,Gr=Number.NaN,fl=0,dl=0,Tr=0,vn=0,jt=null;const Qt={d:0,nx:0,ny:0,k:1,left:0,top:0},l0={x:0,y:0},To={r:255,g:255,b:255};let Go=null,pl="",ml=-1,gl=-1,Ss=!1;function n2(){bs++,l2()}function s2(){bs=Math.max(0,bs-1),bs===0&&c2()}const i2=e=>typeof window.matchMedia=="function"&&window.matchMedia(e).matches;function Ac(){return uu||performance.now()<fu,!1}function l2(){Yn||bs===0||typeof document>"u"||i2("(pointer: fine)")&&(Yn=!0,document.addEventListener("pointermove",du,{passive:!0}),document.addEventListener("pointerleave",cr),document.addEventListener("pointercancel",cr),document.addEventListener("keydown",pu,{passive:!0}),document.addEventListener("visibilitychange",cr),window.addEventListener("blur",cr))}function c2(){Yn&&(Yn=!1,document.removeEventListener("pointermove",du),document.removeEventListener("pointerleave",cr),document.removeEventListener("pointercancel",cr),document.removeEventListener("keydown",pu),document.removeEventListener("visibilitychange",cr),window.removeEventListener("blur",cr),Kr!==0&&(cancelAnimationFrame(Kr),Kr=0),jt&&(jt.cursorLight=null,jt=null),Tr=0,vn=0,Go&&(Go.remove(),Go=null,pl="",ml=-1,gl=-1,Ss=!1),on(),pr&&(pr.remove(),pr=null))}let bl=!0,Ll=!1;function du(e){bl=e.pointerType==="mouse"||e.pointerType==="",Ll=!1,Yo=fl=e.clientX,Gr=dl=e.clientY,xl&&pr&&(bl&&gu(Yo,Gr)?void 0:on()),mu()}function pu(){Ll=!0,on()}function cr(){Yo=Gr=Number.NaN,mu()}function mu(){!Yn||Kr!==0||(ul=performance.now(),Kr=requestAnimationFrame(bu))}function h2(e,t,a,o,r,n,s){const i=n==="circle"?Math.min(a,o)/2:Math.max(0,Math.min(r,Math.min(a,o)/2)),l=a/2,h=o/2,d=Math.max(0,a/2-i),u=Math.max(0,o/2-i),c=Math.max(-d,Math.min(d,e-l)),f=Math.max(-u,Math.min(u,t-h)),g=e-l-c,m=t-h-f,x=Math.hypot(g,m);if(x>1e-6)return s.x=l+c+g/x*i,s.y=h+f+m/x*i,x-i;const v=e,b=a-e,y=t,$=o-t,p=Math.min(v,b,y,$);return p===v?(s.x=0,s.y=t):p===b?(s.x=a,s.y=t):p===y?(s.x=e,s.y=0):(s.x=e,s.y=o),-p}let pr=null,xl=!1,_n=!1,vl="",jo=null,xs="";const u2=/^(INPUT|TEXTAREA|SELECT)$/;let Ml=new WeakMap,_c=0,yl=null;function f2(e){let t=e;for(;t&&t!==document.body;){if(u2.test(t.tagName)||t.isContentEditable)return!0;t=t.parentElement}return!1}function d2(){if(pr)return!0;const e=document.createElement("div");e.className="metal-fx-cursor",e.setAttribute("aria-hidden","true"),e.style.cssText="position:fixed;left:0;top:0;pointer-events:none;z-index:2147483001;will-change:transform;transform-origin:0 0;display:none";const t=document.createElement("canvas");t.style.display="block",e.appendChild(t),document.body.appendChild(e);const a=t.getContext("2d"),o=document.createElement("canvas"),r=o.getContext("2d");return!a||!r?(e.remove(),!1):(pr=e,!0)}function gu(e,t,a=!1){const o=performance.now();if(!a&&_n&&o-_c<12)return!0;_c=o;const r=document.elementFromPoint(e,t);if(!r)return wl(),!1;if(r===yl&&_n)return!0;yl=r;let n=Ml.get(r);if(n===void 0){if(n=!f2(r),n){const s=getComputedStyle(r).cursor;n=s==="auto"||s==="default"||s==="none"}Ml.set(r,n)}if(!n)return wl(),!1;if(!_n){const s=document.documentElement;vl=s.style.cursor,s.style.cursor="none",_n=!0}return r!==jo&&(jo&&(jo.style.cursor=xs,jo=null,xs=""),getComputedStyle(r).cursor!=="none"&&(jo=r,xs=r.style.cursor,r.style.cursor="none")),!0}function wl(){jo&&(jo.isConnected&&(jo.style.cursor=xs),jo=null,xs=""),_n&&(document.documentElement.style.cursor=vl,_n=!1,vl=""),yl=null,Ml=new WeakMap}function on(){wl(),pr&&xl&&(pr.style.display="none",xl=!1)}function p2(){if(Go)return Go;const e=document.createElement("div");return e.className="metal-fx-cursor-spill",e.setAttribute("aria-hidden","true"),e.style.cssText="position:fixed;left:0;top:0;pointer-events:none;z-index:2147483000;border-radius:50%;mix-blend-mode:plus-lighter;will-change:transform,opacity;opacity:0;display:none",document.body.appendChild(e),Go=e,e}function $l(){!Go||!Ss||(Go.style.display="none",Go.style.opacity="0",Ss=!1)}function bu(e){if(Kr=0,!Yn)return;const t=performance.now();try{m2(e)}catch(a){uu=!0,on(),$l(),jt&&(jt.cursorLight=null,jt=null),typeof console<"u"&&console.warn("metal-fx: cursor light disabled after error",a);return}performance.now()-t>6?++Vs>=20&&(Vs=0,fu=performance.now()+5e3,on()):Vs>0&&Vs--}function m2(e){const t=cs,a=Math.min(.05,Math.max(.001,(e-ul)/1e3));ul=e;let o=null,r=0,n=0;if(t.enabled&&ce&&!Number.isNaN(Yo)){let i=Number.POSITIVE_INFINITY;const l=Math.max(1,t.reach),h=t.cursor&&Ac()?Math.max(1,t.cursorDistance):0,d=Math.max(l,h);for(const u of ce.instances){if(!u.visible||!u.canvas.isConnected)continue;const c=u.canvas.getBoundingClientRect();if(c.width<=0)continue;const f=u.overscan,g=c.width/(u.cssWidth+2*f),m=c.left+f*g,x=c.top+f*g,v=d*g;if(Yo<m-v||Yo>m+u.cssWidth*g+v||Gr<x-v||Gr>x+u.cssHeight*g+v)continue;const b=(Yo-m)/g,y=(Gr-x)/g,$=h2(b,y,u.cssWidth,u.cssHeight,u.cornerRadius,u.kind,l0),p=Math.abs($);p<=d&&p<i&&(i=p,o=u,Qt.d=$,Qt.nx=l0.x,Qt.ny=l0.y,Qt.k=g,Qt.left=m,Qt.top=x)}if(o){if(i<=l){const u=1-i/l;r=u*u*(3-2*u)}i<=h&&(n=Math.min(1,(1-i/h)*3)),o.mask&&(Qt.nx=o.cssWidth/2,Qt.ny=o.cssHeight/2,o.wantRaw=!0)}}const s=1-Math.exp(-(a*1e3)/(Math.max(1,t.fadeMs)/3));if(Tr+=(r-Tr)*s,vn+=(n-vn)*s,o&&o!==jt&&(jt&&(jt.cursorLight=null,i0(jt,e)),jt=o),!o&&Tr<.002&&vn<.002){Tr=0,vn=0,jt&&(jt.cursorLight=null,i0(jt,e),jt=null),$l(),on();return}if(jt){if(t.catchLight){const i=jt.cursorLight??(jt.cursorLight={x:0,y:0,w:0});i.x=Qt.nx,i.y=Qt.ny,i.w=Tr}else jt.cursorLight&&(jt.cursorLight=null);if(i0(jt,e),t.cursor&&vn>.002&&bl&&!Ll&&!Number.isNaN(Yo)&&Ac()&&d2()&&gu(Yo,Gr)?void 0:on(),t.spill){const i=p2(),l=su(jt,Qt.nx,Qt.ny,2),h=cl(jt,Qt.nx,Qt.ny,3),d=Math.max(l.r,l.g,l.b)||1,u=Qh(l.r*255/d,l.g*255/d,l.b*255/d),[c,f,g]=Zh(u[0],Math.min(1,u[1]*t.spillSaturation),1);To.r+=(c-To.r)*.15,To.g+=(f-To.g)*.15,To.b+=(g-To.b)*.15;const m=Math.round(To.r/6)*6,x=Math.round(To.g/6)*6,v=Math.round(To.b/6)*6,b=`radial-gradient(closest-side, rgba(${m},${x},${v},1) 0%, rgba(${m},${x},${v},0.35) 45%, rgba(${m},${x},${v},0) 100%)`;b!==pl&&(pl=b,i.style.background=b);const y=Math.max(1,t.spillRadius*Qt.k);y!==ml&&(ml=y,i.style.width=`${(2*y).toFixed(1)}px`,i.style.height=`${(2*y).toFixed(1)}px`),t.spillBlur!==gl&&(gl=t.spillBlur,i.style.filter=t.spillBlur>0?`blur(${t.spillBlur}px)`:"");const $=Qt.left+Qt.nx*Qt.k,p=Qt.top+Qt.ny*Qt.k,M=fl+($-fl)*t.spillOffset,w=dl+(p-dl)*t.spillOffset;i.style.transform=`translate3d(${(M-y).toFixed(2)}px,${(w-y).toFixed(2)}px,0)`;const z=Math.min(1,Math.max(0,h/.3)),k=1-t.spillLumGain+t.spillLumGain*z,F=Qt.d<0?t.spillInside:1,S=Math.max(0,Math.min(1,t.spillStrength*Tr*k*F));Ss||(i.style.display="",Ss=!0),i.style.opacity=S.toFixed(3)}else $l();Kr=requestAnimationFrame(bu)}}const Wi=new Map;function g2(e,t){const a=Math.sqrt(12*e*e/t+1);let o=Math.floor(a);o%2===0&&o--;const r=o+2,n=(12*e*e-t*o*o-4*t*o-3*t)/(-4*o-4),s=Math.round(n),i=[];for(let l=0;l<t;l++)i.push(l<s?o:r);return i}function b2(e,t,a,o,r){const n=1/(r+r+1);for(let s=0;s<o;s++){const i=s*a;let l=0;for(let h=-r;h<=r;h++)l+=e[i+Math.min(a-1,Math.max(0,h))];for(let h=0;h<a;h++){t[i+h]=l*n;const d=i+Math.max(0,h-r),u=i+Math.min(a-1,h+r+1);l+=e[u]-e[d]}}}function x2(e,t,a,o,r){const n=1/(r+r+1);for(let s=0;s<a;s++){let i=0;for(let l=-r;l<=r;l++)i+=e[Math.min(o-1,Math.max(0,l))*a+s];for(let l=0;l<o;l++){t[l*a+s]=i*n;const h=Math.max(0,l-r)*a+s,d=Math.min(o-1,l+r+1)*a+s;i+=e[d]-e[h]}}}function Yl(e,t,a,o){if(o<=.05)return e;const r=new Float32Array(e.length);let n=e;for(const s of g2(o,3)){const i=(s-1)/2;b2(n,r,t,a,i),x2(r,n,t,a,i)}return n}function v2(e,t,a,o,r,n,s){const i=document.createElement("canvas");i.width=a,i.height=o;const l=i.getContext("2d",{willReadFrequently:!0}),h=new Float32Array(a*o);if(!l)return h;l.scale(r,r),l.strokeStyle="#fff",l.lineCap="round",l.lineJoin="round",l.lineWidth=t,l.beginPath(),l.moveTo(n-e,s),l.lineTo(n+e,s),l.stroke();const d=l.getImageData(0,0,a,o).data;for(let u=0,c=3;u<h.length;u++,c+=4)h[u]=d[c]/255;return h}function xu(e,t,a,o,r){let n=0;for(const m of e)n=Math.max(n,(m.stroke/2+3*m.blur)*a);const s=Math.ceil(n)+1,i=2*t+2*s,l=2*s,h=Math.ceil(i*o),d=Math.ceil(l*o),u=new Float32Array(h*d);for(const m of e){let x=v2(t,m.stroke*a,h,d,o,s,s);x=Yl(x,h,d,m.blur*a*o);const v=m.opacity;for(let b=0;b<u.length;b++){const y=x[b]*v;u[b]=u[b]+y*(1-u[b])}}if(r>0){const m=s*o,x=s*o,v=r*a*o;for(let b=0;b<d;b++)for(let y=0;y<h;y++){const $=Math.hypot(y+.5-m,b+.5-x)/v;let p;$<=.3?p=1:$<=.65?p=1-($-.3)/.35*.75:$<1?p=.25*(1-($-.65)/.35):p=0,u[b*h+y]*=p}}const c=document.createElement("canvas");c.width=h,c.height=d;const f=c.getContext("2d"),g=new Uint8ClampedArray(h*d);for(let m=0;m<u.length;m++)g[m]=Math.round(Math.min(1,u[m])*255);if(f){const m=f.createImageData(h,d),x=m.data;for(let v=0,b=0;v<u.length;v++,b+=4)x[b]=255,x[b+1]=255,x[b+2]=255,x[b+3]=g[v];f.putImageData(m,0,0)}return{canvas:c,alpha:g,w:i,h:l,ax:s,ay:s}}function vu(){return[Pe.haloStrokeXl,Pe.haloStrokeLg,Pe.haloStrokeMd,Pe.haloStrokeSm,Pe.haloBlurXl,Pe.haloBlurLg,Pe.haloBlurMd,Pe.haloBlurSm,Pe.haloOpXl,Pe.haloOpLg,Pe.haloOpMd,Pe.haloOpSm,Pe.extraStrokeOuter,Pe.extraStrokeCore,Pe.extraBlurOuter,Pe.extraBlurCore,Pe.extraFadeR,Pe.extraOpOuter].join(",")}function M2(e,t,a){const o=`h|${e.toFixed(2)}|${t}|${a}|${vu()}`;let r=Wi.get(o);return r||(r=xu([{stroke:Pe.haloStrokeXl,blur:Pe.haloBlurXl,opacity:Pe.haloOpXl},{stroke:Pe.haloStrokeLg,blur:Pe.haloBlurLg,opacity:Pe.haloOpLg},{stroke:Pe.haloStrokeMd,blur:Pe.haloBlurMd,opacity:Pe.haloOpMd},{stroke:Pe.haloStrokeSm,blur:Pe.haloBlurSm,opacity:Pe.haloOpSm}],e,t,a,0),Wi.set(o,r)),r}function y2(e,t,a){const o=`e|${e.toFixed(2)}|${t}|${a}|${vu()}`;let r=Wi.get(o);return r||(r=xu([{stroke:Pe.extraStrokeOuter,blur:Pe.extraBlurOuter,opacity:Pe.extraOpOuter},{stroke:Pe.extraStrokeCore,blur:Pe.extraBlurCore,opacity:1}],e,t,a,Pe.extraFadeR),Wi.set(o,r)),r}function Rc(e,t,a,o,r){var n;const s=t<<16|a<<8|o;if(r.canvas&&r.tint===s&&r.src===e)return r.canvas;let i=r.canvas,l=r.img;(!i||!l||r.src!==e)&&(i=document.createElement("canvas"),i.width=e.canvas.width,i.height=e.canvas.height,l=((n=i.getContext("2d"))==null?void 0:n.createImageData(i.width,i.height))??null);const h=i.getContext("2d");if(h&&l){const d=l.data,u=e.alpha;for(let c=0,f=0;c<u.length;c++,f+=4)d[f]=t,d[f+1]=a,d[f+2]=o,d[f+3]=u[c];h.putImageData(l,0,0)}return r.canvas=i,r.img=l,r.tint=s,r.src=e,i}function Xl(e,t,a){const o=Math.max(0,Math.min(a,Math.min(e,t)/2));return 2*Math.max(0,e-2*o)+2*Math.max(0,t-2*o)+2*Math.PI*o}function Ti(e,t,a,o){return o==="circle"?2*Math.PI*Math.max(0,Math.min(a,Math.min(e,t)/2)):Xl(e,t,a)}function zs(e,t,a,o,r,n,s,i){const l=i||{x:0,y:0},h=Math.max(0,Math.min(o,Math.min(t,a)/2));if(s==="circle"){const v=2*Math.PI*h;if(v<=1e-4)return l.x=t*.5,l.y=a*.5,l;e=(e%v+v)%v;const b=-Math.PI/2+e/v*Math.PI*2,y=Math.max(0,h-r+n);return l.x=t*.5+y*Math.cos(b),l.y=a*.5+y*Math.sin(b),l}const d=Math.max(0,t-2*h),u=Math.max(0,a-2*h),c=Math.PI*h/2,f=2*(d+u)+4*c;e=(e%f+f)%f;const g=Math.max(0,h-r+n);let m=e;if(m<d)return l.x=h+m,l.y=r-n,l;if(m-=d,m<c){const v=-Math.PI/2+(c>0?m/c:0)*(Math.PI/2);return l.x=t-h+g*Math.cos(v),l.y=h+g*Math.sin(v),l}if(m-=c,m<u)return l.x=t-r+n,l.y=h+m,l;if(m-=u,m<c){const v=(c>0?m/c:0)*(Math.PI/2);return l.x=t-h+g*Math.cos(v),l.y=a-h+g*Math.sin(v),l}if(m-=c,m<d)return l.x=t-h-m,l.y=a-r+n,l;if(m-=d,m<c){const v=Math.PI/2+(c>0?m/c:0)*(Math.PI/2);return l.x=h+g*Math.cos(v),l.y=a-h+g*Math.sin(v),l}if(m-=c,m<u)return l.x=r-n,l.y=a-h-m,l;m-=u;const x=Math.PI+(c>0?m/c:0)*(Math.PI/2);return l.x=h+g*Math.cos(x),l.y=h+g*Math.sin(x),l}function w2(e,t,a,o,r,n){const s=Math.max(0,Math.min(r,Math.min(a,o)/2));if(n==="circle"){const p=2*Math.PI*s;return p<=1e-4?0:((Math.atan2(t-o/2,e-a/2)+Math.PI/2)/(2*Math.PI)*p%p+p)%p}const i=Math.max(0,a-2*s),l=Math.max(0,o-2*s),h=Math.PI*s/2,d=Math.PI/2,u=i,c=u+h,f=c+l,g=f+h,m=g+i,x=m+h,v=x+l,b=e>=s&&e<=a-s,y=t>=s&&t<=o-s;if(b&&y){const p=e,M=a-e,w=t,z=o-t,k=Math.min(p,M,w,z);return k===w?e-s:k===M?c+(t-s):k===z?g+(a-s-e):x+(o-s-t)}if(b)return t<o/2?e-s:g+(a-s-e);if(y)return e>a/2?c+(t-s):x+(o-s-t);if(e>a/2&&t<o/2){const p=Math.atan2(t-s,e-(a-s));return u+(p+d)/d*h}if(e>a/2){const p=Math.atan2(t-(o-s),e-(a-s));return f+p/d*h}if(t>o/2){const p=Math.atan2(t-(o-s),e-s);return m+(p-d)/d*h}const $=Math.atan2(t-s,e-s);return v+($+Math.PI)/d*h}const c0={x:0,y:0},h0={x:0,y:0};function $2(e,t,a,o,r,n){return zs(e-.1,t,a,o,r,0,n,c0),zs(e+.1,t,a,o,r,0,n,h0),Math.atan2(h0.y-c0.y,h0.x-c0.x)}function Fc(e,t,a){if(e===t)return a<e?0:1;const o=Math.max(0,Math.min(1,(a-e)/(t-e)));return o*o*(3-2*o)}function k2(e){if(e.samplePoints&&e.samplePoints.length>0)return e.samplePoints.map((r,n)=>({x:r.x,y:r.y,arc:n}));const t=Ti(e.width,e.height,e.cornerRadius,e.kind),a=Pe.inset*(e.scale??1),o=[];for(let r=0;r<Mc;r++){const n=r/Mc*t,s=zs(n,e.width,e.height,e.cornerRadius,a,0,e.kind);o.push({x:s.x,y:s.y,arc:n})}return o}const S2=.05,z2=120*(1e3/15),Oc=1e3/15,Ic=2e3,u0=400,C2=2.625,A2=1.008,_2=.31,Mu=140,yu=40,wu=20,R2=34,Ks=.25,F2=.01,Pc=.004,O2=.5,I2=3.5,Za={x:0,y:0};function Wc(e,t){const{width:a,height:o}=t,r=t.scale??1,n=Math.min(3,typeof window<"u"&&window.devicePixelRatio||1),s=Ti(a,o,t.cornerRadius,t.kind)/Xl(Mu,yu,wu),i=Math.max(1,Pe.haloHalfLen*s),l=Math.max(.6,Pe.extraHalfLen*s),h=M2(i,r,n),d=y2(l,r,n),u=Math.ceil(Math.max(h.ay,d.ay)+Pe.extraOutward*s*r+2),c=document.createElement("div");c.className="metal-fx-glow-svg",c.setAttribute("aria-hidden","true");const f=document.createElement("div");f.className="metal-fx-glow-env",f.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0";const g=document.createElement("canvas");g.className="metal-fx-glow-canvas";const m=a+2*u,x=o+2*u;g.width=Math.ceil(m*n),g.height=Math.ceil(x*n),g.style.cssText=`position:absolute;left:${-u}px;top:${-u}px;width:${m}px;height:${x}px;pointer-events:none`,f.appendChild(g),c.appendChild(f),e.appendChild(c);const v=g.getContext("2d",{willReadFrequently:!!t.maskDataUrl});if(!v)throw new Error("metal-fx: glow canvas 2D context unavailable");const b={wrap:c,env:f,canvas:g,ctx:v,surroundPath:null,bandPath:null,maskAlpha:null,maskReady:!1,margin:u,dpr:n,halo:h,extra:d,haloTint:{canvas:null,img:null,tint:-1,src:null},extraTint:{canvas:null,img:null,tint:-1,src:null},mO:Bn(),mI:Bn(),maskSum:Number.NaN,maskDeformed:!1,deform:null,width:a,height:o,cornerRadius:t.cornerRadius,kind:t.kind,scale:r,perim:k2(t),pointMode:!!(t.samplePoints&&t.samplePoints.length>0),currentIdx:0,appearedAt:0,glowOpacity:0,relocTween:null,relocNextIdx:-1,relocMul:0,envClock:0,cursorMode:!1,cursorArc:0,cursorTargetArc:0,lastTickMs:0,wanderS:0,wanderTargetS:0,wanderFrames:0,tintFrom:{r:255,g:255,b:255},tintTarget:{r:255,g:255,b:255},tintTween:null,tintHoldUntil:0,dX:Number.NaN,dY:Number.NaN,dAng:Number.NaN,dEX:Number.NaN,dEY:Number.NaN,dHOp:Number.NaN,dEOp:Number.NaN,dHaloTint:"",dExtraTint:"",dirty:!0,dEnv:-1};if(t.maskDataUrl){const y=new Image;y.onload=()=>{const $=document.createElement("canvas");$.width=g.width,$.height=g.height;const p=$.getContext("2d",{willReadFrequently:!0});if(!p)return;p.scale(n,n),p.drawImage(y,u,u,a,o);const M=p.getImageData(0,0,$.width,$.height).data,w=$.width*$.height,z=new Float32Array(w);for(let A=0,C=3;A<w;A++,C+=4)z[A]=M[C]/255;const k=Yl(Float32Array.from(z),$.width,$.height,I2*n);let F=0;for(let A=0;A<w;A++)k[A]>F&&(F=k[A]);const S=F>0?O2/F:0,_=new Uint8ClampedArray(w);for(let A=0;A<w;A++)_[A]=Math.round(Math.max(z[A],k[A]*S)*255);b.maskAlpha=_,b.maskReady=!0,b.dirty=!0},y.src=t.maskDataUrl}else kl(b,null);return b}function kl(e,t){if(e.pointMode)return;const{margin:a,width:o,height:r,cornerRadius:n}=e,s=e.kind==="circle"?2:1;Ln(0,0,o,r,n,t,e.mO),Ln(s,s,o-2*s,r-2*s,Math.max(0,n-s),t,e.mI);const i=new Path2D;f0(i,e.mO,a);const l=new Path2D;f0(l,e.mO,a),f0(l,e.mI,a);const h=new Path2D;h.rect(0,0,o+2*a,r+2*a),h.addPath(i),e.surroundPath=h,e.bandPath=l,e.maskReady=!0}function f0(e,t,a){const o=t.xy;for(let r=0;r<t.n;r++){const n=o[r*2]+a,s=o[r*2+1]+a;r===0?e.moveTo(n,s):e.lineTo(n,s)}e.closePath()}function P2(e,t){if(!e)return 0;Ln(0,0,t.width,t.height,t.cornerRadius,e,t.mO);let a=0;const o=t.mO.xy;for(let r=0;r<t.mO.n;r+=4)a+=o[r*2]*1.37+o[r*2+1];return a}function W2(e,t){if(e.deform=t,!e.pointMode)if(t){const a=P2(t,e);a!==e.maskSum&&(e.maskSum=a,kl(e,t),e.maskDeformed=!0,e.dirty=!0)}else e.maskDeformed&&(e.maskSum=Number.NaN,kl(e,null),e.maskDeformed=!1,e.dirty=!0)}function T2(e,t,a,o,r="dark"){var n;const{width:s,height:i,cornerRadius:l,perim:h}=e;if(h.length===0)return!1;const d=2;let u=-1,c=e.currentIdx,f=0;for(let H=0;H<h.length;H++){const de=h[H],oe=cl(t,de.x,de.y,d);oe>u&&(u=oe,c=H),H===e.currentIdx&&(f=oe)}const g=e.appearedAt>0&&a-e.appearedAt<Pe.minDwellMs,m=Pe.baseOp+(Pe.peakOp-Pe.baseOp)*Fc(Pe.lumLo,Pe.lumHi,f),x=!g&&u-f>S2,v=t.cursorLight,b=cs.enabled&&cs.catchLight&&!e.pointMode&&!!v&&v.w>.02,y=Ti(s,i,l,e.kind);b&&(e.cursorTargetArc=w2(v.x,v.y,s,i,l,e.kind));const $=b?Math.min(1,Pe.peakOp*cs.catchGain*v.w):0,p=e.lastTickMs>0?Math.min(200,Math.max(.5,a-e.lastTickMs)):Oc;e.lastTickMs=a,e.envClock+=Math.min(p,R2);const M=H=>1-Math.pow(1-H,p/Oc),w=Math.max(1,Pe.relocFadeMs),z=Math.max(1,Pe.relocFadeOutMs),k=-2,F=-3,S=()=>{e.appearedAt=a,e.wanderS=0,e.wanderTargetS=0,e.wanderFrames=0,e.relocTween=Qn(0,1,w,hl.smoothstep),Zn(e.relocTween,e.envClock)},_=H=>{e.relocNextIdx=H,e.relocTween=Qn(1,0,z,hl.smoothstep),Zn(e.relocTween,e.envClock)};if((n=e.relocTween)!=null&&n.done&&e.relocTween.to===0){let H=e.relocNextIdx;if(H===k&&!b&&(H=F),H===F)e.cursorMode=!1,e.appearedAt=0,e.relocTween=null;else if(H===k)e.cursorMode=!0,e.cursorArc=e.cursorTargetArc,e.glowOpacity=$,S();else{e.currentIdx=H;const de=h[e.currentIdx],oe=cl(t,de.x,de.y,d);e.glowOpacity=Pe.baseOp+(Pe.peakOp-Pe.baseOp)*Fc(Pe.lumLo,Pe.lumHi,oe),S()}}if((!e.relocTween||e.relocTween.done)&&(e.appearedAt===0?(b?(e.cursorMode=!0,e.cursorArc=e.cursorTargetArc,e.glowOpacity=$):(e.cursorMode=!1,e.currentIdx=c,e.glowOpacity=m),S()):b!==e.cursorMode?_(b?k:F):!e.cursorMode&&x&&_(c)),e.cursorMode){b&&(e.glowOpacity=$);const H=Math.max(.01,Math.min(1,cs.catchFollow)),de=1-Math.pow(1-H,p/(1e3/60));let oe=e.cursorTargetArc-e.cursorArc;oe=(oe%y+y*1.5)%y-y/2,e.cursorArc+=oe*de}else e.glowOpacity+=(m-e.glowOpacity)*M(Pe.fadeRate);e.glowOpacity=Math.max(0,Math.min(1,e.glowOpacity)),e.relocMul=e.relocTween?zc(e.relocTween,e.envClock):1;const A=Ti(s,i,l,e.kind)/Xl(Mu,yu,wu),C=Pe.wanderRange*A;e.wanderFrames+=p,e.wanderFrames>=z2&&(e.wanderTargetS=(Math.random()*2-1)*C,e.wanderFrames=0),e.wanderS+=(e.wanderTargetS-e.wanderS)*M(Pe.wanderLerp);let R,O,E,I,P;if(e.pointMode){const H=h[e.currentIdx];R=H.x+e.wanderS,O=H.y,E=0,I=R,P=O}else{const H=e.cursorMode?e.cursorArc:h[e.currentIdx].arc+e.wanderS,de=Pe.inset*e.scale;zs(H,s,i,l,de,0,e.kind,Za),R=Za.x,O=Za.y,E=$2(H,s,i,l,de,e.kind);const oe=Pe.extraOutward*A*e.scale;zs(H,s,i,l,de,oe,e.kind,Za),I=Za.x,P=Za.y}e.deform&&(e.deform(R,O,Za),R=Za.x,O=Za.y,e.deform(I,P,Za),I=Za.x,P=Za.y);const T=r==="light",Y=T?Xp(t,R,O,d):su(t,R,O,d);e.tintTween?e.tintTween.done&&(T?(e.tintFrom={r:e.tintFrom.r+(e.tintTarget.r-e.tintFrom.r)*e.tintTween.val,g:e.tintFrom.g+(e.tintTarget.g-e.tintFrom.g)*e.tintTween.val,b:e.tintFrom.b+(e.tintTarget.b-e.tintFrom.b)*e.tintTween.val},e.tintTarget={...Y},e.tintTween=Qn(0,1,u0),Zn(e.tintTween,a)):a>=e.tintHoldUntil&&(e.tintFrom={...e.tintTarget},e.tintTarget={...Y},e.tintTween=Qn(0,1,u0),Zn(e.tintTween,a),e.tintHoldUntil=a+Ic)):(e.tintFrom={...Y},e.tintTarget={...Y},e.tintTween=Qn(0,1,u0),Zn(e.tintTween,a),e.tintHoldUntil=T?0:a+Ic),zc(e.tintTween,a);const q=e.tintTween.val;let j,X,K;if(T)j=Math.round(e.tintFrom.r+(e.tintTarget.r-e.tintFrom.r)*q),X=Math.round(e.tintFrom.g+(e.tintTarget.g-e.tintFrom.g)*q),K=Math.round(e.tintFrom.b+(e.tintTarget.b-e.tintFrom.b)*q);else{const H=e.tintFrom.r+(e.tintTarget.r-e.tintFrom.r)*q,de=e.tintFrom.g+(e.tintTarget.g-e.tintFrom.g)*q,oe=e.tintFrom.b+(e.tintTarget.b-e.tintFrom.b)*q,ue=Math.max(H,de,oe)||1;j=Math.round(255*(H/ue)),X=Math.round(255*(de/ue)),K=Math.round(255*(oe/ue))}const Q=`rgb(${j},${X},${K})`;let W="#ffffff";if(T){const H=Qh(j,X,K),[de,oe,ue]=Zh(H[0],Math.min(1,H[1]*C2),Math.max(_2,H[2]*A2));W=`rgb(${de},${oe},${ue})`}const N=Math.max(0,Math.min(1,o))*(e.pointMode?Pe.pointGain:1),ae=Math.min(1,e.glowOpacity*Pe.haloOpMul*N),G=Math.min(1,e.glowOpacity*Pe.extraIntensity*N);if(Math.abs(e.relocMul-e.dEnv)>.002){const H=e.relocMul>=.998&&e.dEnv<.998;e.dEnv=e.relocMul,e.env.style.opacity=e.relocMul.toFixed(3),H&&(e.dirty=!0)}const J=!!(e.relocTween&&!e.relocTween.done)||e.cursorMode,V=!(Math.abs(R-e.dX)<Ks&&Math.abs(O-e.dY)<Ks&&Math.abs(E-e.dAng)<F2&&Math.abs(I-e.dEX)<Ks&&Math.abs(P-e.dEY)<Ks),U=!(Math.abs(ae-e.dHOp)<Pc&&Math.abs(G-e.dEOp)<Pc),fe=Q!==e.dHaloTint||W!==e.dExtraTint;return(e.dirty||V||U||fe)&&(e.dX=R,e.dY=O,e.dAng=E,e.dEX=I,e.dEY=P,e.dHOp=ae,e.dEOp=G,e.dHaloTint=Q,e.dExtraTint=W,e.dirty=!1,E2(e,R,O,E,I,P,ae,G,Q,W)),J}function E2(e,t,a,o,r,n,s,i,l,h){const{ctx:d,canvas:u,dpr:c,margin:f}=e;if(d.setTransform(1,0,0,1,0,0),d.globalCompositeOperation="source-over",d.globalAlpha=1,d.clearRect(0,0,u.width,u.height),s<=.002&&i<=.002||!e.maskReady)return;const g=s>.002?Rc(e.halo,...Tc(l),e.haloTint):null,m=i>.002?h==="#ffffff"?e.extra.canvas:Rc(e.extra,...Tc(h),e.extraTint):null,x=$=>{g&&(d.save(),d.translate(t+f,a+f),d.rotate(o),d.globalAlpha=s*$,d.drawImage(g,-e.halo.ax,-e.halo.ay,e.halo.w,e.halo.h),d.restore()),m&&(d.save(),d.translate(r+f,n+f),d.rotate(o),d.globalAlpha=i*$,d.drawImage(m,-e.extra.ax,-e.extra.ay,e.extra.w,e.extra.h),d.restore())};if(!e.pointMode&&e.surroundPath&&e.bandPath){d.save(),d.scale(c,c),d.clip(e.surroundPath,"evenodd"),x(.5),d.restore(),d.save(),d.scale(c,c),d.clip(e.bandPath,"evenodd"),x(1),d.restore();return}d.save(),d.scale(c,c),x(1),d.restore();const v=e.maskAlpha;if(!v)return;const b=d.getImageData(0,0,u.width,u.height),y=b.data;for(let $=0,p=3;$<v.length;$++,p+=4){const M=v[$];if(M!==255){if(M===0){y[p]=0;continue}y[p]=(y[p]*M+127)/255}}d.putImageData(b,0,0)}const gn=[255,255,255];function Tc(e){if(e[0]==="#")return gn[0]=parseInt(e.slice(1,3),16),gn[1]=parseInt(e.slice(3,5),16),gn[2]=parseInt(e.slice(5,7),16),gn;let t=4,a=0,o=0;for(;t<e.length&&o<3;){const r=e.charCodeAt(t++);r>=48&&r<=57?a=a*10+(r-48):(r===44||r===41)&&(gn[o++]=a,a=0)}return gn}function D2(e,t){e.pointMode===t.pointMode&&(t.currentIdx=Math.min(e.currentIdx,Math.max(0,t.perim.length-1)),t.appearedAt=e.appearedAt,t.glowOpacity=e.glowOpacity,t.relocTween=e.relocTween,t.relocNextIdx=e.relocNextIdx,t.relocMul=e.relocMul,t.envClock=e.envClock,t.cursorMode=e.cursorMode,t.cursorArc=e.cursorArc,t.cursorTargetArc=e.cursorTargetArc,t.lastTickMs=e.lastTickMs,t.wanderS=e.wanderS,t.wanderTargetS=e.wanderTargetS,t.wanderFrames=e.wanderFrames,t.tintFrom=e.tintFrom,t.tintTarget=e.tintTarget,t.tintTween=e.tintTween,t.tintHoldUntil=e.tintHoldUntil,t.dEnv=e.relocMul,t.env.style.opacity=e.relocMul.toFixed(3))}const Ec=Object.freeze({offsetY:1,blur:.5,alpha:.9,color:"#ffffff"});function H2(e,t,a){const o=Math.min(3,typeof window<"u"&&window.devicePixelRatio||1),r=Math.ceil(3*a.blur+Math.abs(a.offsetY)+1),n=t.width+2*r,s=t.height+2*r,i=document.createElement("canvas");i.className="metal-fx-rim-canvas",i.setAttribute("aria-hidden","true"),i.width=Math.ceil(n*o),i.height=Math.ceil(s*o),i.style.cssText=`position:absolute;left:${-r}px;top:${-r}px;width:${n}px;height:${s}px;pointer-events:none`;const l=i.getContext("2d"),h=document.createElement("canvas");h.width=i.width,h.height=i.height;const d=h.getContext("2d",{willReadFrequently:!0});if(!l||!d)return null;e.appendChild(i);const u={canvas:i,ctx:l,scratch:h,sctx:d,width:t.width,height:t.height,cornerRadius:t.cornerRadius,kind:t.kind,ring:t.ring,margin:r,dpr:o,opts:a,mO:Bn(),mI:Bn(),sum:Number.NaN};return $u(u,null,!0),u}function Dc(e,t,a){const o=t.xy;for(let r=0;r<t.n;r++){const n=o[r*2]+a,s=o[r*2+1]+a;r===0?e.moveTo(n,s):e.lineTo(n,s)}e.closePath()}function $u(e,t,a=!1){const{width:o,height:r,cornerRadius:n,ring:s,margin:i,dpr:l}=e;Ln(0,0,o,r,n,t,e.mO),Ln(s,s,o-2*s,r-2*s,Math.max(0,n-s),t,e.mI);let h=0;const d=e.mO.xy;for(let A=0;A<e.mO.n;A+=4)h+=d[A*2]*1.37+d[A*2+1];if(!a&&h===e.sum)return;e.sum=h;const{sctx:u,scratch:c,ctx:f,canvas:g,opts:m}=e,x=c.width,v=c.height;u.setTransform(1,0,0,1,0,0),u.clearRect(0,0,x,v),u.scale(l,l),u.fillStyle="#fff",u.beginPath(),Dc(u,e.mO,i),Dc(u,e.mI,i),u.fill("evenodd");const b=u.getImageData(0,0,x,v).data,y=x*v,$=new Float32Array(y);for(let A=0,C=3;A<y;A++,C+=4)$[A]=b[C]/255;const p=Math.round(m.offsetY*l)*x,M=new Float32Array(y);if(p>=0)for(let A=0;A<y;A++)M[A]=Math.max(0,$[A]-(A>=p?$[A-p]:0));else for(let A=0;A<y;A++)M[A]=Math.max(0,$[A]-(A-p<y?$[A-p]:0));const w=Yl(M,x,v,m.blur*l),z=parseInt(m.color.slice(1,3),16),k=parseInt(m.color.slice(3,5),16),F=parseInt(m.color.slice(5,7),16),S=f.createImageData(x,v),_=S.data;for(let A=0,C=0;A<y;A++,C+=4)_[C]=z,_[C+1]=k,_[C+2]=F,_[C+3]=Math.round(Math.min(1,w[A]*$[A]*m.alpha)*255);f.setTransform(1,0,0,1,0,0),f.putImageData(S,0,0)}function Hc(e){e&&e.canvas.remove()}const Mi=12,Bc=32,Lc=1,Yc=.55,B2=1,L2=1,Y2=.85,X2=0,N2=1.3,Xc=3.6,j2=.7,q2=1,G2=.52,U2=1,V2=.044,K2=235,Q2=2.535,Nc=.7,Z2=.5,J2=new Set(["INPUT","TEXTAREA","SELECT","OPTION"]);function em(e,t){const a=Math.max(e.left-t.right,t.left-e.right,0),o=Math.max(e.top-t.bottom,t.top-e.bottom,0);return Math.sqrt(a*a+o*o)}function tm(e,t,a,o){return!(Math.min(e.bottom,t.bottom)-Math.max(e.top,t.top)<a||Math.max(e.left-t.right,t.left-e.right,0)>o)}function am(e,t,a,o){return Math.min(e.right,t.right)-Math.max(e.left,t.left)<a?!1:Math.max(e.top-t.bottom,t.top-e.bottom,0)<=o}function Qr(e,t,a,o,r,n){const s=Math.max(0,Math.min(n,o*.5,r*.5)),i=e.roundRect;if(typeof i=="function"){i.call(e,t,a,o,r,s);return}e.moveTo(t+s,a),e.lineTo(t+o-s,a),e.quadraticCurveTo(t+o,a,t+o,a+s),e.lineTo(t+o,a+r-s),e.quadraticCurveTo(t+o,a+r,t+o-s,a+r),e.lineTo(t+s,a+r),e.quadraticCurveTo(t,a+r,t,a+r-s),e.lineTo(t,a+s),e.quadraticCurveTo(t,a,t+s,a)}function ku(e,t,a,o,r){if(!r.flipX&&!r.flipY){e.drawImage(t,r.sx??0,r.sy??0,a,o,r.x,r.y,r.w,r.h);return}e.save(),r.flipX&&(e.translate(r.x+r.w,0),e.scale(-1,1)),r.flipY&&(e.translate(0,r.y+r.h),e.scale(1,-1)),e.drawImage(t,r.sx??0,r.sy??0,a,o,r.flipX?0:r.x,r.flipY?0:r.y,r.w,r.h),e.restore()}const om=4;function rm(e,t,a,o,r,n,s){if(o<=2*s||r<=2*s){e.beginPath(),Qr(e,t,a,o,r,n),e.clip();return}e.beginPath(),Qr(e,t,a,o,r,n),Qr(e,t+s,a+s,o-2*s,r-2*s,Math.max(0,n-s)),e.clip("evenodd")}function nm(e,t,a,o,r,n,s,i,l,h,d,u){const c=u??Math.max(1,Math.round((Mi+om*3)*d));let f=Math.max(0,s),g=!0;for(let m=0;m<3&&f>1e-4;m++){const x=Math.min(1,f);e.save(),rm(e,h.x,h.y,h.w,h.h,h.r,c),e.globalCompositeOperation=g?"source-over":"lighter",g=!1,e.globalAlpha=x,ku(e,t,a,o,l),e.globalAlpha=1,e.globalCompositeOperation="destination-in",e.fillStyle=i,e.fillRect(0,0,r,n),e.restore(),f-=x}}function Su(e,t,a,o,r,n,s){const i=s|0;if(i<1||o<=2*i||r<=2*i){e.beginPath(),Qr(e,t,a,o,r,n),e.clip();return}e.beginPath(),Qr(e,t,a,o,r,n),Qr(e,t+i,a+i,o-2*i,r-2*i,Math.max(0,n-i)),e.clip("evenodd")}function sm(e,t,a,o,r,n,s,i,l,h,d,u){let c=i*d,f=!0;for(let g=0;g<3&&c>1e-4;g++){const m=Math.min(1,c);e.save(),Su(e,s.x,s.y,s.w,s.h,s.r,l),e.globalCompositeOperation=f?"source-over":"lighter",f=!1,e.globalAlpha=m,ku(e,t,a,o,u),e.globalAlpha=1,e.globalCompositeOperation="destination-in",e.fillStyle=h,e.fillRect(0,0,r,n),e.restore(),c-=m}}function im(e,t,a,o,r,n,s,i){const l=e.createLinearGradient(o,r,n,s);l.addColorStop(0,`rgba(255,255,255,${i.toFixed(3)})`),l.addColorStop(.5,`rgba(255,255,255,${(i*.45).toFixed(3)})`),l.addColorStop(1,"rgba(255,255,255,0)"),e.save(),Su(e,t.x,t.y,t.w,t.h,t.r,a),e.globalCompositeOperation="lighter",e.lineWidth=a*2,e.strokeStyle=l,e.beginPath(),Qr(e,t.x,t.y,t.w,t.h,t.r),e.stroke(),e.restore()}function zu(e){const t=getComputedStyle(e),a=[parseFloat(t.borderTopLeftRadius)||0,parseFloat(t.borderTopRightRadius)||0,parseFloat(t.borderBottomRightRadius)||0,parseFloat(t.borderBottomLeftRadius)||0].filter(o=>o>0);return a.length?Math.min.apply(null,a):0}function Cu(e){const t=getComputedStyle(e),a=Math.max(parseFloat(t.borderTopWidth)||0,parseFloat(t.borderRightWidth)||0,parseFloat(t.borderBottomWidth)||0,parseFloat(t.borderLeftWidth)||0);let o=0,r=0;const n=t.boxShadow;if(n&&n!=="none"){const i=n.replace(/rgba?\([^)]*\)/g,d=>d.replace(/,/g,"\0")).split(/,\s*/);let l=1/0,h=1/0;for(const d of i){const u=d.match(/-?\d+(?:\.\d+)?px/g);if(!u||u.length<4)continue;const c=parseFloat(u[3]);c>0&&(/\binset\b/.test(d)?c<l&&(l=c):c<h&&(h=c))}Number.isFinite(l)&&(o=l),Number.isFinite(h)&&(r=h)}const s=Math.max(a,r);return{width:Math.max(a,o,r)||1,outerCssPx:s}}function jc(e){e.cornerRadius=zu(e.el);const t=Cu(e.el);e.hairlineWidth=t.width,e.hairlineOuterCssPx=t.outerCssPx}function lm(e){typeof ResizeObserver<"u"&&(e.resizeObserver=new ResizeObserver(()=>jc(e)),e.resizeObserver.observe(e.el)),typeof MutationObserver<"u"&&(e.mutationObserver=new MutationObserver(()=>jc(e)),e.mutationObserver.observe(e.el,{attributes:!0,attributeFilter:["style","class"]}))}function cm(e){var t,a;(t=e.resizeObserver)==null||t.disconnect(),e.resizeObserver=null,(a=e.mutationObserver)==null||a.disconnect(),e.mutationObserver=null}const mr=new Set,hm=Object.freeze({enabled:!0,radius:11.5,strength:.57,penumbra:.55,falloff:.21,edgeFade:.7,softness:.24,repaintMs:36}),Vi={...hm};let sr=null,d0=0,qc=0,Gc=!1;function Nl(){d0!==0||typeof requestAnimationFrame>"u"||(d0=requestAnimationFrame(e=>{if(d0=0,e-qc<Vi.repaintMs){Nl();return}qc=e,_u()}))}let Ei=!1;function um(e,t){const a=Vi.radius;for(const o of mr){const r=o.anchorEl.getBoundingClientRect(),n=o.el.getBoundingClientRect(),s=Math.min(r.left,n.left)-a,i=Math.max(r.right,n.right)+a,l=Math.min(r.top,n.top)-a,h=Math.max(r.bottom,n.bottom)+a;if(e>=s&&e<=i&&t>=l&&t<=h)return!0}return!1}function Uc(e){if(sr={x:e.clientX,y:e.clientY},!Vi.enabled)return;const t=um(e.clientX,e.clientY);(t||Ei)&&Nl(),Ei=t}function Qs(){sr=null,Ei&&Nl(),Ei=!1}function Au(e){typeof document>"u"||e===Gc||(Gc=e,e?(document.addEventListener("pointermove",Uc,{passive:!0}),document.addEventListener("pointerleave",Qs),window.addEventListener("blur",Qs)):(document.removeEventListener("pointermove",Uc),document.removeEventListener("pointerleave",Qs),window.removeEventListener("blur",Qs),sr=null))}function fm(e,t,a,o,r,n,s,i,l){if(!sr)return;const h=Vi;if(!h.enabled||h.strength<=0)return;const d=h.radius;let u,c,f,g,m,x;if(r){const E=a.left>=o.right;u=E?o.right:a.right,c=E?a.left:o.left,f=sr.x,g=sr.y,m=Math.max(a.top,o.top),x=Math.min(a.bottom,o.bottom)}else{const E=a.top>=o.bottom;u=E?o.bottom:a.bottom,c=E?a.top:o.top,f=sr.y,g=sr.x,m=Math.max(a.left,o.left),x=Math.min(a.right,o.right)}const v=Math.min(u,c),b=Math.max(u,c),y=Math.max(1,b-v);if(f<v-d||f>b+d||g<m-d||g>x+d)return;const $=Math.max(0,Math.min(1,Math.abs(f-u)/y)),p=Math.max(.5,d*h.edgeFade),M=Math.min(1,Math.min(f-(v-d),b+d-f)/p),w=Math.min(1,Math.min(g-(m-d),x+d-g)/p),z=h.strength*(1-h.falloff*$)*M*w;if(z<=.001)return;const k=d*l*(1+h.penumbra*$),F=r?(g-o.top+i)*l:(g-o.left+i)*l,S=Math.max(0,Math.min(.5,(1-h.softness)*.5)),_=Math.max(.001,.5-S),A=r?s:n,C=Math.max(0,Math.floor(F-k)),R=Math.min(A,Math.ceil(F+k));if(R<=C)return;const O=new Float32Array(R-C);for(let E=C;E<R;E++){const I=(E+.5-(F-k))/(2*k),P=I<_?I/_:I>1-_?(1-I)/_:1;O[E-C]=1-z*Math.max(0,Math.min(1,P))}for(const E of[e,t]){const I=r?0:C,P=r?C:0,T=r?n:R-C,Y=r?R-C:s,q=E.getImageData(I,P,T,Y),j=q.data;if(r)for(let X=0;X<Y;X++){const K=O[X];if(!(K>=.999))for(let Q=X*T*4+3,W=(X+1)*T*4;Q<W;Q+=4)j[Q]=j[Q]*K}else for(let X=0;X<Y;X++)for(let K=0;K<T;K++){const Q=O[K];if(Q>=.999)continue;const W=(X*T+K)*4+3;j[W]=j[W]*Q}E.putImageData(q,I,P)}}let Ho=null,Mn=null,yn=null,wn=null;function dm(e,t){return Ho||(Ho=document.createElement("canvas"),Mn=document.createElement("canvas"),yn=Ho.getContext("2d",{alpha:!0}),wn=Mn.getContext("2d",{alpha:!0})),!yn||!wn||!Ho||!Mn?!1:(Ho.width!==e&&(Ho.width=e,Mn.width=e),Ho.height!==t&&(Ho.height=t,Mn.height=t),yn.setTransform(1,0,0,1,0,0),wn.setTransform(1,0,0,1,0,0),yn.globalCompositeOperation="source-over",wn.globalCompositeOperation="source-over",yn.clearRect(0,0,e,t),wn.clearRect(0,0,e,t),!0)}function pm(e,t,a,o=1){if(typeof document>"u"||J2.has(e.tagName))return null;for(const g of mr)if(g.el===e)return g.strength=o,g;const r=document.createElement("div");r.setAttribute("data-metal-fx-reflection",""),r.setAttribute("aria-hidden","true");const n=document.createElement("canvas");n.className="metal-fx-reflection-canvas";const s=n.getContext("2d",{alpha:!0,willReadFrequently:!0});if(!s)return null;const i=document.createElement("canvas");i.className="metal-fx-reflection-stroke-canvas";const l=i.getContext("2d",{alpha:!0,willReadFrequently:!0});if(!l)return null;r.appendChild(n),r.appendChild(i);const h=getComputedStyle(e);let d=!1;h.position==="static"&&(e.style.position="relative",d=!0);let u=!1;h.isolation!=="isolate"&&(e.style.isolation="isolate",u=!0),e.setAttribute("data-metal-fx-reflect-host",""),e.insertBefore(r,e.firstChild);const c=Cu(e),f={el:e,anchor:t,anchorEl:a,strength:o,wrap:r,canvas:n,ctx:s,strokeCanvas:i,strokeCtx:l,cornerRadius:zu(e),hairlineWidth:c.width,hairlineOuterCssPx:c.outerCssPx,appliedPositionRelative:d,appliedIsolation:u,resizeObserver:null,mutationObserver:null};return lm(f),mr.add(f),Au(!0),f}function mm(e){for(const t of mr)if(t.el===e){cm(t),t.canvas.width=0,t.canvas.height=0,t.strokeCanvas.width=0,t.strokeCanvas.height=0,t.wrap.parentNode===t.el&&t.el.removeChild(t.wrap),t.el.removeAttribute("data-metal-fx-reflect-host"),t.appliedPositionRelative&&(t.el.style.position=""),t.appliedIsolation&&(t.el.style.isolation=""),mr.delete(t),mr.size===0&&Au(!1);return}}function gm(e,t,a,o,r){if(o<1||r<1)return null;const n=e.getContext("2d");if(!n)return null;const s=n.getImageData(t,a,o,r).data;let i=o,l=r,h=-1,d=-1;for(let u=0;u<r;u++){const c=u*o;for(let f=0;f<o;f++)s[(c+f)*4+3]>8&&(f<i&&(i=f),f>h&&(h=f),u<l&&(l=u),u>d&&(d=u))}return h<0?null:{x:t+i,y:a+l,w:h-i+1,h:d-l+1}}function _u(){if(mr.size===0)return;const e=typeof window<"u"&&window.devicePixelRatio||1,t=new Map;for(const a of mr){const o=a.el.getBoundingClientRect();let r=t.get(a.anchorEl);if(r||(r=a.anchorEl.getBoundingClientRect(),t.set(a.anchorEl,r)),o.width<1||o.height<1||r.width<1||r.height<1)continue;const n=a.el.hasAttribute("data-metal-fx-text");if(n&&!a.glyphStyled&&(a.canvas.style.filter="blur(0.4px) saturate(1.35) brightness(1.2)",a.glyphStyled=!0),!tm(r,o,Lc,Bc)&&!am(r,o,Lc,Bc)){a.canvas.width!==1&&(a.canvas.width=1,a.canvas.height=1),a.strokeCanvas.width!==1&&(a.strokeCanvas.width=1,a.strokeCanvas.height=1);continue}const s=n&&!!a.anchor.mask;s&&!a.anchor.wantRaw&&(a.anchor.wantRaw=!0),a.anchor.wantRing||(a.anchor.wantRing=!0);const i=!!a.anchor.deform&&!!a.anchor.ringCanvas,l=s&&a.anchor.rawCanvas?a.anchor.rawCanvas:i?a.anchor.ringCanvas:a.anchor.canvas,h=Math.round(a.anchor.overscan*e);let d=h,u=h,c=(l.width|0)-2*h,f=(l.height|0)-2*h;if(a.anchor.mask&&!s){const Y=gm(l,d,u,c,f);Y&&(d=Y.x,u=Y.y,c=Y.w,f=Y.h)}if(c<4||f<4)continue;const g=(r.left+r.right)*.5,m=(r.top+r.bottom)*.5,x=(o.left+o.right)*.5,v=(o.top+o.bottom)*.5,b=g-x,y=m-v,$=Math.max(r.left-o.right,o.left-r.right,0),p=Math.max(r.top-o.bottom,o.top-r.bottom,0),M=$>=p,w=em(r,o);let z=1-Math.min(1,w/Mi);z=z*z*(3-2*z);const k=Yc+(B2-Yc)*z,F=Math.min(Xc,k*N2*j2)*a.strength,S=r.left>=o.left&&r.right<=o.right&&r.top>=o.top&&r.bottom<=o.bottom?[!0,!1]:[M],_=a.anchor.scale??1,A=Math.max(q2*_,a.hairlineWidth),C=Math.max(1,Math.round(A*e)),R=Math.max(1,Math.round(Math.max(U2*_,a.hairlineWidth)*e)),O=a.hairlineOuterCssPx;a.wrap.style.inset=`${-O}px`,a.wrap.style.borderRadius=`${Math.max(0,a.cornerRadius)}px`;const E=Math.max(1,Math.round((o.width+O*2)*e)),I=Math.max(1,Math.round((o.height+O*2)*e));a.canvas.width!==E&&(a.canvas.width=E),a.canvas.height!==I&&(a.canvas.height=I),a.strokeCanvas.width!==E&&(a.strokeCanvas.width=E),a.strokeCanvas.height!==I&&(a.strokeCanvas.height=I);const P=a.ctx;P.setTransform(1,0,0,1,0,0),P.clearRect(0,0,E,I);const T=a.strokeCtx;T.setTransform(1,0,0,1,0,0),T.clearRect(0,0,E,I);for(const[Y,q]of S.entries()){const j=Y>0&&dm(E,I),X=j?yn:P,K=j?wn:T,Q=Math.min((n?Mi*1.5:Mi)*e,Math.max(E,I));let W,N,ae,G;q?(W=b>0?E:0,ae=b>0?E-Q:Q,N=I*.5,G=I*.5):(N=y>0?I:0,G=y>0?I-Q:Q,W=E*.5,ae=E*.5);const J=P.createLinearGradient(W,N,ae,G);J.addColorStop(0,`rgba(0,0,0,${L2})`),J.addColorStop(.5,`rgba(0,0,0,${Y2})`),J.addColorStop(1,`rgba(0,0,0,${X2})`);const V=c/e,U=n?Math.max(1,Math.min(q?E:I,Math.round(q?c:f))):Math.max(1,Math.round(K2*Math.max(.1,V/140)*e));let fe,H,de,oe,ue=!1,te=!1;if(q){const he=Math.max(r.top,o.top),be=Math.min(r.bottom,o.bottom);ue=!0,fe=b>0?E-U:0,H=Math.round((he-o.top+O)*e),de=U,oe=Math.max(1,Math.round((be-he)*e))}else{const he=Math.max(r.left,o.left),be=Math.min(r.right,o.right);te=!0,fe=Math.round((he-o.left+O)*e),H=y>0?I-U:0,de=Math.max(1,Math.round((be-he)*e)),oe=U}const Xe={x:fe,y:H,w:de,h:oe,flipX:ue,flipY:te,sx:d,sy:u},qe={x:0,y:0,w:E,h:I,r:Math.max(0,a.cornerRadius*e)},ge=n?Math.min(1,F*Nc):Math.min(Xc,F*Q2*Nc*Z2);nm(X,l,c,f,E,I,ge,J,Xe,qe,e,n?Math.max(E,I):void 0),n||(sm(K,l,c,f,E,I,qe,F,C,J,G2,Xe),im(K,qe,R,W,N,ae,G,Math.min(.85,V2*F))),j&&(P.globalCompositeOperation="lighter",P.drawImage(Ho,0,0),T.globalCompositeOperation="lighter",T.drawImage(Mn,0,0))}for(const Y of S)fm(P,T,r,o,Y,E,I,O,e);P.globalCompositeOperation="source-over",T.globalCompositeOperation="source-over"}}let p0=!1,Vc=0;function bm(){p0||(p0=!0,!(typeof requestAnimationFrame>"u")&&requestAnimationFrame(e=>{p0=!1,!(e-Vc<Mp)&&(Vc=e,_u())}))}const Kc="metal-fx-styles",xm=`
.metal-fx-root {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
  overflow: visible;
  background: #272727;
  color: #f8f8f8;
}
.metal-fx-root[data-theme='light'] {
  background: #ffffff;
  color: #1d1d1d;
}

.metal-fx-root::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: 2;
  box-shadow: inset 0 0 50px 0 rgba(255, 255, 255, 0.02);
}
.metal-fx-root[data-theme='light']::before {
  box-shadow: inset 0 0 50px 0 rgba(0, 0, 0, 0.02);
}

.metal-fx-root::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: 4;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}
.metal-fx-root[data-theme='light']::after {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
}
/* Circle variant gets a thicker outer rim than the button variant. */
.metal-fx-root[data-variant='circle']::after {
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.1);
}
.metal-fx-root[data-theme='light'][data-variant='circle']::after {
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.06);
}

.metal-fx-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 0;
  pointer-events: none;
  border-radius: inherit;
}

/* The inner spacer — defines the inset geometry where the metal ring meets
   the interior (3 px for Button, 1-2 px for Circle) and carries the Circle dark
   hairline ('box-shadow: inset' rules below). Intentionally transparent so
   the wrapper's background propagates through to the punched shader centre,
   giving consumers a single surface tone to override. See "Single-surface
   background" in the file header for the rationale. */
.metal-fx-inner {
  position: absolute;
  inset: 3px;
  border-radius: inherit;
  z-index: 1;
  pointer-events: none;
}

.metal-fx-root[data-variant='button'][data-shape='pill'] .metal-fx-inner {
  border-radius: calc(var(--mfx-radius, 20px) - 3px);
}
.metal-fx-root[data-variant='button'][data-shape='circle'] .metal-fx-inner {
  border-radius: calc(var(--mfx-radius, 16px) - 3px);
}
.metal-fx-root[data-variant='circle'][data-shape='pill'] .metal-fx-inner {
  inset: 0;
  border-radius: var(--mfx-radius, 20px);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.45);
}
.metal-fx-root[data-variant='circle'][data-shape='circle'] .metal-fx-inner {
  inset: 0;
  border-radius: var(--mfx-radius, 16px);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.45);
}
/* Circle-variant hairline alpha — light mode.
   Source-of-truth: index.html L2261-2267. The 0.45-alpha black inset that
   reads as a single-pixel frame against the dark interior is too heavy
   on a #ffffff inner: it ends up looking like a hard 2-px black ring
   against the iridescent shader. Suppressed entirely (alpha 0) — the
   shader's own iridescent rim already defines the silhouette in light
   mode, so an extra dark hairline only competes with it. The rule is
   kept (rather than deleted) as a tunable hook in case a future variant
   wants to re-introduce a soft edge. NOTE: we keep the dark-mode inset
   and border-radius values because — unlike index.html — our renderer
   does NOT overscan the canvas in light mode, so there is no 1-px gap
   between inner element and shader to compensate for. */
.metal-fx-root[data-theme='light'][data-variant='circle'][data-shape='pill'] .metal-fx-inner,
.metal-fx-root[data-theme='light'][data-variant='circle'][data-shape='circle'] .metal-fx-inner {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0);
}

/* ─── Combined glow SVG (z=3) ──────────────────────────────────────────────
   Single SVG per instance that holds BOTH the wide-halo group
   (#mfx_haloTravel) and the catch-light group (#mfx_extraTravel), exactly
   mirroring canonical's _buildGlowSvgInner (index.html L8078). One
   mix-blend-mode: screen lifts the combined composite onto the shader
   ring; per-frame opacity attributes on each inner group still drive the
   independent fade-in / fade-out cycles for the halo and the catch-light.

   Why a single SVG: the circle variant anchors halo + catch-light at the same
   perimeter point, so they overlap in the bright zone. Two separately-
   screened SVGs would double-screen the overlap (A + B + C - AB - AC -
   BC + ABC instead of A + B + C - AB - AC once both groups composite
   in source-over inside one SVG and then screen against the host once).
   That overlap looked muted versus canonical specifically on the circle
   variant where both layers travel together.

   Source-of-truth opacity: #btnGlowSvg drops to 0.7 in dark and 0.2746 in
   light (index.html L632/L643). */
.metal-fx-glow-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  z-index: 3;
  pointer-events: none;
  opacity: 0.7;
}
.metal-fx-root[data-theme='light'] .metal-fx-glow-svg {
  /* Light-mode 1-px overscan mirrors .btn-glow-svg in metal.html so the
     halo stays glued to the visible silhouette (the shader ring there sits
     1 px outside the host's padding box). */
  inset: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  mix-blend-mode: multiply;
  /* Source-of-truth: html[data-theme="light"] #btnGlowSvg { opacity: 0.2746 }
     → −35 % from 0.4225 from the original 0.7 dark-mode opacity. */
  opacity: 0.2746;
  filter: saturate(5.355) brightness(0.78);
}
/* Circle light-mode small variants (e.g. 36×36 send button): the geometrically
   shrunk halo loses density when multiplied against #ffffff. Mirror the
   canonical override at index.html L2316 — bump saturation + drop brightness
   so the small glow holds together visually. */
.metal-fx-root[data-variant='circle'][data-shape='circle'][data-theme='light'] .metal-fx-glow-svg {
  filter: saturate(7.5) brightness(0.6);
}

/* The wrapped child — hoisted into z=5 so it sits above every overlay, with
   normalized chrome so consumer button styles don't fight the metal frame. */
.metal-fx-content {
  position: relative;
  z-index: 5;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  pointer-events: none;
}
.metal-fx-content > * {
  pointer-events: auto;
}
.metal-fx-root[data-normalize='true'] .metal-fx-content > * {
  background: transparent !important;
  border: 0 !important;
  outline: 0 !important;
  box-shadow: none !important;
  /* Sizing: we deliberately DO NOT force \`width: 100%; height: 100%\` on the
     child here. That used to be the contract ("the wrapper is the visible
     button surface; the child stretches to fill it"), but it created a cyclic
     percentage dependency: the wrapper is \`inline-flex\` with no intrinsic
     size, .metal-fx-content is \`width/height: 100%\` of the wrapper, and the
     child was \`100%\` of .metal-fx-content. With nothing breaking the cycle,
     icon-only / class-sized children collapsed.

     The new contract: the child sizes itself (intrinsic content, CSS class,
     or inline style — all work), and the wrapper's \`inline-flex\` wraps it
     tightly. Consumers who want a metal frame BIGGER than the child (e.g.
     padding around an icon) size <MetalFx style={{ width, height }}> AND
     explicitly set width/height on the child to fill (or accept that the
     child renders at its intrinsic size, centered).

     Typography is intentionally NOT touched. We used to apply
     \`color: inherit; font: inherit;\` here to "match" the wrapper, but
     \`font: inherit\` is a shorthand that overrides font-family, font-size,
     font-weight, AND line-height on the child — which (a) shrank the
     button height (line-height changes propagate through the flex
     content box) and (b) scaled em-based icons / font-icons inside the
     child to whatever the wrapper inherited. The wrapper now stays out
     of the child's typography entirely; consumers who want typographic
     normalization can apply it themselves on the child element. */
}

[data-metal-fx-reflection] {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  overflow: hidden;
  z-index: 0;
  isolation: isolate;
}
.metal-fx-reflection-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  filter: blur(4px) saturate(1.2) brightness(1.58);
}
.metal-fx-reflection-stroke-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  filter: saturate(1.35) brightness(1.75);
}
/* Hosts that participate as reflection targets need positioning + isolation
   so the wrap composites only against the host (not the parent stack). The
   wrap injects these inline as well, but stating them here keeps reflections
   working on hosts that already have other inline styles applied. */
[data-metal-fx-reflect-host] {
  isolation: isolate;
}
`;let m0=!1;function vm(){if(m0||typeof document>"u")return;if(document.getElementById(Kc)){m0=!0;return}const e=document.createElement("style");e.id=Kc,e.textContent=xm,document.head.appendChild(e),m0=!0}vm();const Mm={position:"absolute",inset:0,width:"100%",height:"100%"},ym={position:"absolute",inset:3},wm={position:"absolute",inset:0,pointerEvents:"none",zIndex:3,borderRadius:"inherit"},$m={position:"absolute",inset:0,pointerEvents:"none",zIndex:4},vs=new Map;function km(){const e=globalThis;e.__MFX_DEBUG__&&(e.__mfxGlow=vs)}Qp((e,t)=>{const a=vs.get(e);return a?T2(a.handles,e,t,e.opacityMul*e.glowGain,a.themeRef.current):!1});function Sm(e){const[t,a]=L.useState(()=>e!=="auto"?e:typeof window>"u"||!window.matchMedia||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return L.useEffect(()=>{if(e!=="auto"){a(e);return}if(typeof window>"u"||!window.matchMedia)return;const o=window.matchMedia("(prefers-color-scheme: dark)"),r=()=>a(o.matches?"dark":"light");return r(),o.addEventListener("change",r),()=>o.removeEventListener("change",r)},[e]),t}const Ru=L.forwardRef(function({children:e,variant:t="button",preset:a="chromatic",theme:o="auto",strength:r=1,glowGain:n=1,paused:s=!1,borderRadius:i,normalizeHostStyles:l=!0,reflectionTargets:h,disableGlow:d=!1,innerShadow:u,shaderScale:c,ringCssPx:f,scale:g=1,mask:m,glowMode:x="mask",className:v,style:b,...y},$){const p=L.useRef(null),M=L.useRef(null),w=L.useRef(null),z=L.useRef(null),k=L.useRef(null),F=L.useRef(null),S=L.useRef(null),_=L.useRef(null),A=L.useRef("dark"),C=L.useRef(0),[R,O]=L.useState(!1),E=Sm(o),I=L.useMemo(()=>Dp(),[]);A.current=E;const P=t==="circle"?"circle":"pill",T=!d;L.useImperativeHandle($,()=>p.current,[]);const Y=(j,X)=>{if(P==="circle")return Math.min(j,X)/2;const K=typeof i=="number"?i:(()=>{var Q;const W=(Q=F.current)==null?void 0:Q.firstElementChild;if(W){const N=parseFloat(getComputedStyle(W).borderTopLeftRadius);if(Number.isFinite(N)&&N>0)return N}return C.current})();return Math.min(K,Math.min(j,X)/2)};L.useEffect(()=>{I&&Kp(a,E)},[a,E,I]),L.useEffect(()=>{const j=S.current;j&&mn(j,{mask:m??null})},[m]),L.useEffect(()=>{const j=S.current;j&&mn(j,{paused:s})},[s]),L.useEffect(()=>{const j=S.current;if(!j)return;const X={};c!==void 0&&(X.shaderScale=c),f!==void 0&&(X.ringCssPx=f),g!==void 0&&(X.scale=g),Object.keys(X).length>0&&mn(j,X)},[c,f,g]),L.useLayoutEffect(()=>{const j=M.current,X=p.current,K=w.current;if(!j||!X||!I)return;{const ge=getComputedStyle(X),he=parseFloat(ge.borderTopLeftRadius);C.current=Number.isFinite(he)?he:0}const Q=()=>{const ge=X.getBoundingClientRect(),he=Math.max(1,Math.round(ge.width)),be=Math.max(1,Math.round(ge.height));return{cssWidth:he,cssHeight:be,cornerRadius:Y(he,be)}},W=Q();S.current=Np({onComposite:()=>{const ge=S.current,he=_.current;ge&&he&&W2(he,ge.deform);const be=k.current;ge&&be&&$u(be,ge.deform)},hostCanvas:j,cssWidth:W.cssWidth,cssHeight:W.cssHeight,cornerRadius:W.cornerRadius,kind:P,paused:s,shaderScale:c,ringCssPx:f,scale:g,mask:m??null,onFirstCopy:()=>O(!0)}),X.style.setProperty("--mfx-radius",`${W.cornerRadius}px`),X.style.borderRadius=`${W.cornerRadius}px`;const N=(ge,he)=>{if(!m||x==="ring")return{};const be=window.devicePixelRatio||1,ze=document.createElement("canvas");ze.width=Math.max(1,Math.round(ge*be)),ze.height=Math.max(1,Math.round(he*be));const Qe=ze.getContext("2d");if(!Qe)return{};Qe.fillStyle="#fff",m(Qe,ze.width,ze.height,be);const ie=Qe.getImageData(0,0,ze.width,ze.height).data,_e=[],ve=Math.max(1,Math.round(2*be));for(let Ne=ve>>1;Ne<ze.height;Ne+=ve)for(let He=ve>>1;He<ze.width;He+=ve)ie[(Ne*ze.width+He)*4+3]>128&&_e.push({x:He/be,y:Ne/be});return{samplePoints:_e,maskDataUrl:ze.toDataURL("image/png")}};K&&(_.current=Wc(K,{width:W.cssWidth,height:W.cssHeight,cornerRadius:W.cornerRadius,kind:P,scale:g,...N(W.cssWidth,W.cssHeight)}));const ae=ge=>{if(!K)return;const he=_.current;K.innerHTML="",_.current=Wc(K,{width:ge.cssWidth,height:ge.cssHeight,cornerRadius:ge.cornerRadius,kind:P,scale:g,...N(ge.cssWidth,ge.cssHeight)}),he&&D2(he,_.current);const be=S.current;be&&_.current&&vs.set(be,{handles:_.current,themeRef:A})},G=()=>u?u===!0?Ec:{...Ec,...u}:null,J=ge=>{const he=z.current,be=S.current;Hc(k.current),k.current=null;const ze=G();!he||!be||!ze||(k.current=H2(he,{width:ge.cssWidth,height:ge.cssHeight,cornerRadius:ge.cornerRadius,kind:P,ring:be.ringCssPx},ze))};J(W);let V=0,U=W.cssWidth,fe=W.cssHeight,H=W.cornerRadius;const de=new ResizeObserver(()=>{V===0&&(V=requestAnimationFrame(()=>{V=0;const ge=Q(),he=S.current;!he||Math.abs(ge.cssWidth-U)<.5&&Math.abs(ge.cssHeight-fe)<.5&&Math.abs(ge.cornerRadius-H)<.5||(U=ge.cssWidth,fe=ge.cssHeight,H=ge.cornerRadius,mn(he,{cssWidth:ge.cssWidth,cssHeight:ge.cssHeight,cornerRadius:ge.cornerRadius}),X.style.setProperty("--mfx-radius",`${ge.cornerRadius}px`),X.style.borderRadius=`${ge.cornerRadius}px`,ae(ge),J(ge))}))});de.observe(X);let oe=null;const ue=()=>{const ge=S.current;if(ge&&Vp(ge)){const he=Q();ae(he),J(he)}te()},te=()=>{oe?.removeEventListener("change",ue),oe=typeof window.matchMedia=="function"?window.matchMedia(`(resolution: ${window.devicePixelRatio||1}dppx)`):null,oe?.addEventListener("change",ue)};te();const Xe=o2(ge=>{ge&&S.current&&ae(Q())});let qe=null;return typeof IntersectionObserver<"u"&&(qe=new IntersectionObserver(ge=>{const he=S.current;if(he)for(const be of ge)Up(he,be.isIntersecting)},{rootMargin:"64px"}),qe.observe(X)),S.current&&_.current&&(vs.set(S.current,{handles:_.current,themeRef:A}),qp(S.current)),n2(),km(),()=>{s2(),Hc(k.current),k.current=null,de.disconnect(),oe?.removeEventListener("change",ue),qe?.disconnect(),Xe(),V!==0&&cancelAnimationFrame(V);const ge=S.current;ge&&(vs.delete(ge),Gp(ge),jp(ge)),S.current=null,_.current=null,K&&(K.innerHTML="")}},[P]),L.useEffect(()=>{const j=S.current;j&&mn(j,{opacityMul:Math.max(0,Math.min(1,r)),glowGain:Math.max(0,n)})},[r,n,t]),L.useEffect(()=>{const j=S.current,X=p.current;if(!j||!X||!h||E!=="dark")return;j.onAfterFrame=bm;const K=h.flatMap(Q=>{const W="current"in Q?Q:Q.ref,N="current"in Q?1:Q.strength??1;return W.current?[{el:W.current,strength:N}]:[]});for(const{el:Q,strength:W}of K)pm(Q,j,X,W);return()=>{j.onAfterFrame=void 0;for(const{el:Q}of K)mm(Q)}},[h,E]),L.useEffect(()=>{const j=p.current,X=S.current;if(!j||!X)return;const K=Y(X.cssWidth,X.cssHeight);mn(X,{cornerRadius:K}),j.style.setProperty("--mfx-radius",`${K}px`),j.style.borderRadius=`${K}px`},[i,E,t,P]);const q=L.useMemo(()=>({...b,"--mfx-strength":String(Math.min(1,Math.max(0,r))),opacity:R?1:0,visibility:R?"visible":"hidden",transition:R?"opacity 0.15s ease-out":"none"}),[b,r,R]);return I?D.jsxs("div",{...y,ref:p,className:v?`metal-fx-root ${v}`:"metal-fx-root","data-variant":t,"data-shape":P,"data-theme":E,"data-paused":s?"true":void 0,"data-normalize":l?"true":"false",style:q,children:[D.jsx("canvas",{ref:M,className:"metal-fx-canvas",style:Mm}),D.jsx("div",{className:"metal-fx-inner","aria-hidden":"true",style:ym}),D.jsx("div",{ref:w,"aria-hidden":"true",style:{...wm,display:T?void 0:"none"}}),u?D.jsx("div",{ref:z,"aria-hidden":"true",style:$m}):null,D.jsx("div",{ref:F,className:"metal-fx-content",children:e})]}):D.jsx("div",{...y,ref:p,className:v?`metal-fx-fallback ${v}`:"metal-fx-fallback","data-metal-fx-unsupported":"",style:{display:"inline-flex",...b},children:e})});Ru.displayName="MetalFx";const zm=Object.freeze({enabled:!0,applyTo:"ring",strength:.74,fadeInMs:200,fadeOutMs:350,smoothMs:140,reach:36,blob:13,liquidBlob:10,maxDisp:9,gain:.6,pressGain:.55,pullGain:.49,press:5,liquid:7.5,liquidReach:8,liquidStiffness:53,liquidDamping:9,stiffness:260,damping:13,mass:1,follow:.32,mapRes:2,smooth:.25});({...zm});var Fu=L.createContext(null);function jl(){const e=L.useContext(Fu);if(!e)throw new Error("<Gooey.Item> must be rendered inside a <Gooey> group.");return e}var Cm="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -29.5";function Am({i:e,s:t}){const a=[];let o="bin";return t.spread!==0&&(a.push(D.jsx("feMorphology",{in:o,operator:t.spread>0?"erode":"dilate",radius:Math.abs(t.spread),result:`s${e}-er`},"er")),o=`s${e}-er`),(t.x!==0||t.y!==0)&&(a.push(D.jsx("feOffset",{in:o,dx:t.x,dy:t.y,result:`s${e}-o`},"o")),o=`s${e}-o`),t.blur>0&&(a.push(D.jsx("feGaussianBlur",{in:o,stdDeviation:t.blur/2,result:`s${e}-b`},"b")),o=`s${e}-b`),a.push(D.jsx("feComposite",{in:"bin",in2:o,operator:"out",result:`s${e}-band`},"band"),D.jsx("feFlood",{floodColor:t.color,result:`s${e}-c`},"c"),D.jsx("feComposite",{in:`s${e}-c`,in2:`s${e}-band`,operator:"in",result:`s${e}`},"f")),D.jsx(D.Fragment,{children:a})}function _m({i:e,s:t}){const a=[];let o="shape";return t.spread!==0&&(a.push(D.jsx("feMorphology",{in:"bin",operator:t.spread>0?"dilate":"erode",radius:Math.abs(t.spread),result:`s${e}-sp`},"sp")),o=`s${e}-sp`),t.blur>0&&(a.push(D.jsx("feGaussianBlur",{in:o,stdDeviation:t.blur/2,result:`s${e}-b`},"b")),o=`s${e}-b`),(t.x!==0||t.y!==0)&&(a.push(D.jsx("feOffset",{in:o,dx:t.x,dy:t.y,result:`s${e}-o`},"o")),o=`s${e}-o`),a.push(D.jsx("feFlood",{floodColor:t.color,result:`s${e}-c`},"c"),D.jsx("feComposite",{in:`s${e}-c`,in2:o,operator:"in",result:`s${e}`},"f")),D.jsx(D.Fragment,{children:a})}function Rm({blur:e,contrast:t,shadows:a,waviness:o=0,wavinessFreq:r=.018}){const n=o>0,s=Math.round((.5-t*(5/12))*100)/100;return D.jsxs(D.Fragment,{children:[D.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:e,result:"blur"}),D.jsx("feColorMatrix",{in:"blur",type:"matrix",values:`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${t} ${s}`,result:"goo"}),D.jsx("feComposite",{in:"SourceGraphic",in2:"goo",operator:"atop",result:n?"shape-raw":"shape"}),n&&D.jsxs(D.Fragment,{children:[D.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:r,numOctaves:2,seed:"7",result:"wave-noise"}),D.jsx("feDisplacementMap",{in:"shape-raw",in2:"wave-noise",scale:o*2,xChannelSelector:"R",yChannelSelector:"G",result:"shape"})]}),a.some(i=>i.inset||i.spread!==0)&&D.jsx("feColorMatrix",{in:"shape",type:"matrix",values:Cm,result:"bin"}),a.map((i,l)=>i.inset?D.jsx(Am,{i:l,s:i},l):D.jsx(_m,{i:l,s:i},l)),a.length>0&&D.jsxs("feMerge",{children:[a.map((i,l)=>i.inset?-1:l).filter(i=>i>=0).reverse().map(i=>D.jsx("feMergeNode",{in:`s${i}`},i)),D.jsx("feMergeNode",{in:"shape"}),a.map((i,l)=>i.inset?D.jsx("feMergeNode",{in:`s${l}`},l):null)]})]})}var Fm={blur:7,contrast:40,reach:.8,fade:17,warp:0,mix:1,mixBlur:8,gravity:1.9,waviness:12};function Om(){const e=new Set,t=new Set,a=()=>t.forEach(o=>o());return{register(o){return e.add(o),a(),()=>{e.delete(o),a()}},subscribe(o){return t.add(o),()=>t.delete(o)},entries:()=>[...e]}}function Qc(e,t){const a=e.getBoundingClientRect(),o=t.getBoundingClientRect(),r=getComputedStyle(t),n=parseFloat(r.borderTopLeftRadius)||0;return{x:o.left-a.left,y:o.top-a.top,w:o.width,h:o.height,r:Math.min(n,o.width/2,o.height/2)}}var Zc=e=>`${Math.round(e.x*2)},${Math.round(e.y*2)},${Math.round(e.w)},${Math.round(e.h)},${Math.round(e.r)}`;function Im(e,t=14){const[a,o]=L.useState(e),r=L.useRef({value:e,target:e,raf:0,last:0});return L.useEffect(()=>{const n=r.current;if(n.target=e,n.raf)return;n.last=performance.now();const s=i=>{const l=Math.min(.05,(i-n.last)/1e3);n.last=i;const h=1-Math.exp(-t*l);n.value+=(n.target-n.value)*h,Math.abs(n.value-n.target)<.004&&(n.value=n.target),o(n.value),n.raf=n.value===n.target?0:requestAnimationFrame(s)};return n.raf=requestAnimationFrame(s),()=>{n.raf&&cancelAnimationFrame(n.raf),n.raf=0}},[e,t]),a}function Pm({a:e,b:t,srcA:a,srcB:o,opts:r,width:n,height:s}){const i=`lgm-${L.useId().replace(/[^a-zA-Z0-9_-]/g,"")}`,{blur:l,contrast:h,reach:d,fade:u,warp:c,mix:f,mixBlur:g,gravity:m,waviness:x}=r,v={x:e.x+e.w/2,y:e.y+e.h/2},b={x:t.x+t.w/2,y:t.y+t.h/2},y=Math.max(0,Math.hypot(Math.max(Math.abs(v.x-b.x)-(e.w+t.w)/2,0),Math.max(Math.abs(v.y-b.y)-(e.h+t.h)/2,0))),$=Math.max(0,Math.min(1,1-y/Math.max(8,l*2.6))),p=$*$*(3-2*$),M=Im(p),w=Math.round((.5-h*(5/12))*100)/100,z=Math.hypot(e.w,e.h)/2*d*M,k=Math.hypot(t.w,t.h)/2*d*M,F={x:(v.x+b.x)/2,y:(v.y+b.y)/2},S=b.x-v.x,_=b.y-v.y,A=Math.max(.001,Math.hypot(S,_)),C=-_/A,R=S/A,O=Math.max(0,(e.w+t.w)/2-Math.abs(S)),E=Math.max(0,(e.h+t.h)/2-Math.abs(_)),I=.5*(O*Math.abs(C)+E*Math.abs(R))*M,P=Math.round(Math.atan2(R,C)*180/Math.PI),T=Math.round(f*M*100)/100,Y=Math.round((2+(l-2)*M)*10)/10,q=Math.round(c*M*10)/10,j=Math.round(Y*2.5*10)/10,X=Math.round((.4+(2+l*.8)*M)*10)/10,K=`translate(${e.x}, ${e.y})`,Q=`translate(${t.x}, ${t.y})`;return D.jsxs("svg",{"aria-hidden":"true",focusable:"false","data-gooey-imagemelt":"",width:n,height:s,viewBox:`0 0 ${n} ${s}`,style:{position:"absolute",inset:0,overflow:"visible",pointerEvents:"none"},children:[D.jsxs("defs",{children:[D.jsx("pattern",{id:`${i}-pa`,patternUnits:"userSpaceOnUse",width:e.w,height:e.h,children:D.jsx("image",{href:a,width:e.w,height:e.h,preserveAspectRatio:"xMidYMid slice"})}),D.jsx("pattern",{id:`${i}-pb`,patternUnits:"userSpaceOnUse",width:t.w,height:t.h,children:D.jsx("image",{href:o,width:t.w,height:t.h,preserveAspectRatio:"xMidYMid slice"})}),D.jsxs("filter",{id:`${i}-goo`,x:"-15%",y:"-15%",width:"130%",height:"130%",colorInterpolationFilters:"sRGB",children:[D.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:Y,result:"b"}),D.jsx("feColorMatrix",{in:"b",type:"matrix",values:`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${h} ${w}`,result:"goo"}),D.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:j,result:"bc"}),D.jsx("feComposite",{in:"bc",in2:"goo",operator:"in",result:"mix"}),D.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:(2+x*1.2)/1e3,numOctaves:"2",seed:"4",result:"wn"}),D.jsx("feDisplacementMap",{in:"mix",in2:"wn",scale:q,xChannelSelector:"R",yChannelSelector:"G",result:"warped"}),D.jsx("feComposite",{in:"warped",in2:"warped",operator:"over",result:"s1"}),D.jsx("feComposite",{in:"s1",in2:"s1",operator:"over",result:"s2"}),D.jsx("feComposite",{in:"s2",in2:"s2",operator:"over",result:"solid"}),D.jsx("feGaussianBlur",{in:"solid",stdDeviation:"0.6"})]}),D.jsx("filter",{id:`${i}-soft`,x:"-60%",y:"-60%",width:"220%",height:"220%",children:D.jsx("feGaussianBlur",{stdDeviation:u})}),T>.01&&D.jsxs("filter",{id:`${i}-marble`,x:"-25%",y:"-25%",width:"150%",height:"150%",colorInterpolationFilters:"sRGB",children:[D.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:g,result:"c"}),D.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.011",numOctaves:"2",seed:"5",result:"n1"}),D.jsx("feDisplacementMap",{in:"c",in2:"n1",scale:T*90,xChannelSelector:"R",yChannelSelector:"G",result:"d1"}),D.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.019",numOctaves:"2",seed:"11",result:"n2"}),D.jsx("feDisplacementMap",{in:"d1",in2:"n2",scale:T*50,xChannelSelector:"R",yChannelSelector:"G",result:"d2"}),D.jsx("feComposite",{in:"d2",in2:"d2",operator:"over",result:"m1"}),D.jsx("feComposite",{in:"m1",in2:"m1",operator:"over",result:"m2"}),D.jsx("feGaussianBlur",{in:"m2",stdDeviation:"0.6",result:"marble"}),D.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:Y,result:"mb"}),D.jsx("feColorMatrix",{in:"mb",type:"matrix",values:`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${h} ${w}`,result:"mg"}),D.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:(2+x*1.2)/1e3,numOctaves:"2",seed:"4",result:"mwn"}),D.jsx("feDisplacementMap",{in:"mg",in2:"mwn",scale:q,xChannelSelector:"R",yChannelSelector:"G",result:"mshape"}),D.jsx("feComposite",{in:"marble",in2:"mshape",operator:"in"})]}),T>.01&&D.jsx("mask",{id:`${i}-marblemask`,maskUnits:"userSpaceOnUse",x:"0",y:"0",width:n,height:s,children:D.jsx("g",{filter:`url(#${i}-soft)`,children:D.jsx("ellipse",{cx:F.x,cy:F.y,rx:(z+k)/2+I,ry:(z+k)/2*m,transform:`rotate(${P}, ${F.x}, ${F.y})`,fill:"#fff"})})}),D.jsx("filter",{id:`${i}-edge`,x:"-40%",y:"-40%",width:"180%",height:"180%",children:D.jsx("feGaussianBlur",{stdDeviation:X})}),D.jsxs("mask",{id:`${i}-ma`,maskUnits:"userSpaceOnUse",x:"0",y:"0",width:n,height:s,children:[D.jsx("g",{filter:`url(#${i}-edge)`,children:D.jsx("g",{transform:K,children:D.jsx("rect",{width:e.w,height:e.h,rx:e.r,fill:"#fff"})})}),D.jsx("g",{filter:`url(#${i}-soft)`,children:D.jsx("ellipse",{cx:F.x,cy:F.y,rx:k+I,ry:k,transform:`rotate(${P}, ${F.x}, ${F.y})`,fill:"#000"})})]}),D.jsxs("mask",{id:`${i}-mb`,maskUnits:"userSpaceOnUse",x:"0",y:"0",width:n,height:s,children:[D.jsx("g",{filter:`url(#${i}-edge)`,children:D.jsx("g",{transform:Q,children:D.jsx("rect",{width:t.w,height:t.h,rx:t.r,fill:"#fff"})})}),D.jsx("g",{filter:`url(#${i}-soft)`,children:D.jsx("ellipse",{cx:F.x,cy:F.y,rx:z+I,ry:z,transform:`rotate(${P}, ${F.x}, ${F.y})`,fill:"#000"})})]})]}),D.jsxs("g",{filter:`url(#${i}-goo)`,children:[D.jsx("g",{transform:K,children:D.jsx("rect",{width:e.w,height:e.h,rx:e.r,fill:`url(#${i}-pa)`})}),D.jsx("g",{transform:Q,children:D.jsx("rect",{width:t.w,height:t.h,rx:t.r,fill:`url(#${i}-pb)`})})]}),T>.01&&D.jsx("g",{mask:`url(#${i}-marblemask)`,children:D.jsxs("g",{filter:`url(#${i}-marble)`,children:[D.jsx("g",{transform:K,children:D.jsx("rect",{width:e.w,height:e.h,rx:e.r,fill:`url(#${i}-pa)`})}),D.jsx("g",{transform:Q,children:D.jsx("rect",{width:t.w,height:t.h,rx:t.r,fill:`url(#${i}-pb)`})})]})}),D.jsx("g",{mask:`url(#${i}-ma)`,children:D.jsx("g",{transform:K,children:D.jsx("rect",{width:e.w,height:e.h,rx:e.r,fill:`url(#${i}-pa)`})})}),D.jsx("g",{mask:`url(#${i}-mb)`,children:D.jsx("g",{transform:Q,children:D.jsx("rect",{width:t.w,height:t.h,rx:t.r,fill:`url(#${i}-pb)`})})})]})}function Wm({registry:e}){const{getGroup:t}=jl(),[,a]=L.useState(0),[o,r]=L.useState(null),n=L.useRef("");L.useEffect(()=>e.subscribe(()=>a(u=>u+1)),[e]);const s=e.entries().slice(0,2),i=s.length===2;if(L.useEffect(()=>{if(!i){r(null),n.current="";return}let u=0;const c=()=>{const f=t();if(f){const g=Qc(f,s[0].el),m=Qc(f,s[1].el),x=Zc(g)+"|"+Zc(m);x!==n.current&&(n.current=x,r({a:g,b:m}))}u=requestAnimationFrame(c)};return u=requestAnimationFrame(c),()=>cancelAnimationFrame(u)},[i,s[0]?.el,s[1]?.el,t]),!i||!o)return null;const l=t(),h=l?.offsetWidth??0,d=l?.offsetHeight??0;return D.jsx(Pm,{a:o.a,b:o.b,srcA:s[0].src,srcB:s[1].src,opts:s[0].opts,width:h,height:d})}function Tm({src:e,opts:t,registry:a,children:o}){const r=L.useRef(null);return L.useEffect(()=>{const s=r.current?.firstElementChild;if(!s)return;const i=e??s.querySelector("img")?.src??s.src;if(!i)return;const l=s.style.opacity;s.style.opacity="0";const h=a.register({el:s,src:i,opts:t});return()=>{s.style.opacity=l,h()}},[e,t,a]),D.jsx("span",{ref:r,style:{display:"contents"},children:o})}var Di=typeof window<"u"?L.useLayoutEffect:L.useEffect;function Em(){const[e,t]=L.useState(!1);return L.useEffect(()=>{const a=window.matchMedia("(prefers-reduced-motion: reduce)");t(a.matches);const o=r=>t(r.matches);return a.addEventListener("change",o),()=>a.removeEventListener("change",o)},[]),e}function Dm(e,t){let a=0,o=0,r=e;for(;r&&r!==t&&t.contains(r);)a+=r.offsetLeft,o+=r.offsetTop,r=r.offsetParent;return{x:a,y:o}}function hs(e,t,a){const o=getComputedStyle(e),r=n=>{const s=n.split(" ")[0];return s.endsWith("%")?(parseFloat(s)||0)/100*Math.min(t,a):parseFloat(s)||0};return[r(o.borderTopLeftRadius),r(o.borderTopRightRadius),r(o.borderBottomRightRadius),r(o.borderBottomLeftRadius)]}function Ou(e){return typeof e=="number"?[e,e,e,e]:e}function Hm(e,t,a,o,r){let[n,s,i,l]=r.map(d=>Math.max(0,d));const h=Math.min(1,a/Math.max(1e-6,n+s),a/Math.max(1e-6,l+i),o/Math.max(1e-6,n+l),o/Math.max(1e-6,s+i));return n*=h,s*=h,i*=h,l*=h,`M ${e+n} ${t} H ${e+a-s} A ${s} ${s} 0 0 1 ${e+a} ${t+s} V ${t+o-i} A ${i} ${i} 0 0 1 ${e+a-i} ${t+o} H ${e+l} A ${l} ${l} 0 0 1 ${e} ${t+o-l} V ${t+n} A ${n} ${n} 0 0 1 ${e+n} ${t} Z`}var eo={massStiffness:320,massDamping:17,sizeStiffness:170,sizeDamping:11.5,radiusStiffness:900,radiusDamping:60,contentBlur:7,roundness:1,cornerDuration:460,cornerDelay:0,cornerEase:"cubic-bezier(0.3, 1.05, 0.4, 1)",anticipation:90,travel:32},Jc=new Map;function Iu(e){let t=Jc.get(e);if(t)return t;const a=/cubic-bezier\(([^)]+)\)/.exec(e);if(a){const[o,r,n,s]=a[1].split(",").map(Number);t=i=>{if(i<=0)return 0;if(i>=1)return 1;let l=0,h=1;for(let u=0;u<24;u++){const c=(l+h)/2;3*c*(1-c)*(1-c)*o+3*c*c*(1-c)*n+c**3<i?l=c:h=c}const d=(l+h)/2;return 3*d*(1-d)*(1-d)*r+3*d*d*(1-d)*s+d**3}}else e==="ease-in-out"?t=Iu("cubic-bezier(0.42, 0, 0.58, 1)"):t=o=>Math.min(1,Math.max(0,o));return Jc.set(e,t),t}var hr={stiffness:380,damping:18,stretch:.18,tail:.46,force:.5,bend:0,bendX:0},Bm=3;function e1(e){return Math.max(0,e.cornerDelay)+Math.max(1,e.cornerDuration)}function Zs(e,t,a){return Math.max(0,Math.min(e,Math.min(t,a)/2))}function Lm(e,t,a,o,r,n){const s=o*(a-e)-r*t,i=t+s*n;return[e+i*n,i]}function Eo(e,t,a,o,r,n){let s=Math.max(1,Math.ceil(n*60));const i=n/s;let l=e,h=t;for(;s-- >0;){const d=Lm(l,h,a,o,r,i);l=d[0],h=d[1]}return[l,h]}function Nt(e,t){return Math.round(e/t)*t}var Ym="http://www.w3.org/2000/svg",t1=0;function Jn(e){const t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)}function St(e,t){const a=document.createElementNS(Ym,e);for(const[o,r]of Object.entries(t))a.setAttribute(o,r);return a}function Xm(e){try{if(!e.complete||!e.naturalWidth)return null;const t=Math.max(2,Math.min(e.naturalWidth,Math.round((e.offsetWidth||40)*3))),a=Math.max(2,Math.min(e.naturalHeight,Math.round((e.offsetHeight||40)*3)));if(e.naturalWidth<=t*1.5)return null;const o=document.createElement("canvas");o.width=t,o.height=a;const r=o.getContext("2d");if(!r)return null;const n=Math.max(t/e.naturalWidth,a/e.naturalHeight),s=t/n,i=a/n;return r.drawImage(e,(e.naturalWidth-s)/2,(e.naturalHeight-i)/2,s,i,0,0,t,a),o.toDataURL()}catch{return null}}var Nm=class{constructor(e){this.getGroup=e,this.gooBlur=6,this.items=new Set,this.awake=!1,this.clean=0,this.raf=0,this.sourcesReady=!1,this.mo=null,this.interval=null,this.removeListeners=[],this.wake=()=>{this.clean=0,!(this.awake||this.items.size===0)&&(this.awake=!0,this.raf=requestAnimationFrame(this.loop))},this.lastNow=0,this.frameEma=17,this.loop=t=>{if(this.items.size===0){this.awake=!1,this.lastNow=0;return}const a=this.lastNow?Math.min(.25,Math.max(1/240,(t-this.lastNow)/1e3)):1/60;if(this.lastNow&&(this.frameEma+=(Math.min(t-this.lastNow,80)-this.frameEma)*.12),this.lastNow=t,this.measureAll(a)?this.clean=0:this.clean++,this.clean>30){this.awake=!1,this.lastNow=0;return}this.raf=requestAnimationFrame(this.loop)}}add(e){const t={...e,baseW:e.target.offsetWidth||1,baseH:e.target.offsetHeight||1,radiusPx:this.resolveRadius(e),last:null,frame:null,lastBlend:null,melt:null,sim:null,motionEnv:0,tPrev:null,tvx:0,tvy:0,lead01:0,cornerT0:0,lastTargetMoveT:0,lastTargetSize:null,morphActive:!1,round01:0,tailEl:null,tailMidA:null,tailMidB:null,tailPhase:0,bendCur:0,bendCurX:0,bendPathEl:null,lastBendD:null,lastBendVars:null,tailX:0,tailY:0,tailVx:0,tailVy:0,tailR:0,contentBlurred:!1,lastPaint:null,lastTail:null,lastBi:e.blobInset??0,biSmooth:null,meltFade:0,meltRel:null,meltOp:1,meltPhase:0,meltPrev:null,meltGeom:null,meltWroteAt:0,meltAxis:null,meltHostLast:null,ro:new ResizeObserver(()=>{t.baseW=e.target.offsetWidth||1,t.baseH=e.target.offsetHeight||1,t.radiusPx=this.resolveRadius(e),this.syncMelt(t),this.wake()})};if(t.ro.observe(e.target),this.items.add(t),this.refreshMelt(t),e.dynamics?.move){const a=St("circle",{cx:"0",cy:"0",r:"0"}),o=St("circle",{cx:"0",cy:"0",r:"0"}),r=St("circle",{cx:"0",cy:"0",r:"0"});e.blob.parentNode?.insertBefore(a,e.blob),e.blob.parentNode?.insertBefore(o,e.blob),e.blob.parentNode?.insertBefore(r,e.blob),t.tailEl=a,t.tailMidA=o,t.tailMidB=r;const n=St("path",{d:""});e.blob.parentNode?.insertBefore(n,e.blob),t.bendPathEl=n}return this.ensureSources(),this.measureAll(),this.wake(),()=>{t.ro.disconnect(),this.items.delete(t),this.clearBlend(t),t.contentBlurred&&t.target.style.removeProperty("filter"),t.tailEl?.remove(),t.tailMidA?.remove(),t.tailMidB?.remove(),t.bendPathEl?.remove()}}dispose(){cancelAnimationFrame(this.raf),this.mo?.disconnect(),this.removeListeners.forEach(e=>e()),this.removeListeners=[],this.interval&&clearInterval(this.interval),this.items.forEach(e=>e.ro.disconnect()),this.items.clear(),this.awake=!1,this.sourcesReady=!1}resolveRadius(e){return e.radius!=null?e.radius:hs(e.target,e.target.offsetWidth,e.target.offsetHeight)[0]}syncMelt(e){if(!e.blend)return;const t=e.melt,a=e.target,o=a instanceof HTMLImageElement?[a]:Array.from(a.querySelectorAll("img"));if(!(!!t&&t.entries.length===o.length&&t.entries.every((n,s)=>n.el===o[s]))){this.refreshMelt(e);return}for(const n of t.entries)n.radiusPx=hs(n.el,n.el.offsetWidth,n.el.offsetHeight)[0],n.lastGeom=null}refreshMelt(e){const t=e.blend;if(!t)return;const a=t.host;for(;a.firstChild;)a.removeChild(a.firstChild);const o=e.target,r=o instanceof HTMLImageElement?[o]:Array.from(o.querySelectorAll("img")),n=`gooey-melt-${++t1}`,s=String(t1*7%100),i=t.zone??this.gooBlur*2.2+4,l=Math.max(.2,t.warpFreq??1),h=Math.min(.3,Math.max(.01,l/(i*1.1))).toFixed(4),d=String(Math.max(1,Math.round(t.detail??2))),u=t.warpStyle??"fractalNoise",c=St("defs",{}),f=St("radialGradient",{id:`${n}-g`});f.append(St("stop",{offset:"0%","stop-color":"#fff"}),St("stop",{offset:"55%","stop-color":"#fff"}),St("stop",{offset:"78%","stop-color":"#fff","stop-opacity":"0.55"}),St("stop",{offset:"100%","stop-color":"#fff","stop-opacity":"0"})),c.append(f);const g=b=>{const y=St("filter",{id:`${n}-f${b}`,filterUnits:"userSpaceOnUse",x:"0",y:"0",width:"0",height:"0","color-interpolation-filters":"sRGB"}),$=St("feTurbulence",{type:u,baseFrequency:h,numOctaves:d,seed:s,result:"noise0"});y.append($);const p=St("feOffset",{in:"noise0",dx:"0",dy:"0",result:"noise"}),M=St("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"0",xChannelSelector:"R",yChannelSelector:"G",result:"disp"});y.append(p);const w=St("feGaussianBlur",{in:"disp",stdDeviation:"0",result:"soft"}),z=St("feColorMatrix",{in:"soft",type:"saturate",values:"1.2",result:"col"}),k=St("feColorMatrix",{in:"noise",type:"matrix",values:"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1",result:"erode"}),F=St("feComposite",{in:"col",in2:"erode",operator:"in"});y.append(M,w,z,k,F);const S=St("mask",{id:`${n}-m${b}`,maskUnits:"userSpaceOnUse",x:"-10000",y:"-10000",width:"20000",height:"20000"}),_=St("circle",{cx:"0",cy:"0",r:"0",fill:`url(#${n}-g)`});S.append(_),c.append(y,S);const A=St("g",{});A.setAttribute("mask",`url(#${n}-m${b})`),A.setAttribute("opacity","0");const C=St("g",{});C.setAttribute("filter",`url(#${n}-f${b})`);const R=St("g",{});return C.append(R),A.append(C),{filter:y,disp:M,blurEl:w,erode:k,turb:$,noiseOffset:p,circle:_,gl:A,shift:R}},m=Array.from({length:Bm},(b,y)=>g(`l${y}`));a.append(c,...m.map(b=>b.gl));let x=null;if((t.seamBlur??1)>0){const b=St("filter",{id:`${n}-fs`,filterUnits:"userSpaceOnUse",x:"0",y:"0",width:"0",height:"0","color-interpolation-filters":"sRGB"}),y=St("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0"});b.append(y);const $=St("mask",{id:`${n}-ms`,maskUnits:"userSpaceOnUse",x:"-10000",y:"-10000",width:"20000",height:"20000"}),p=St("circle",{cx:"0",cy:"0",r:"0",fill:`url(#${n}-g)`});$.append(p),c.append(b,$);const M=St("g",{});M.setAttribute("mask",`url(#${n}-ms)`),M.setAttribute("opacity","0");const w=St("g",{});w.setAttribute("filter",`url(#${n}-fs)`),M.append(w),a.insertBefore(M,c.nextSibling),x={gl:M,filter:b,blurEl:y,circle:p}}const v=r.map((b,y)=>{const $=St("pattern",{id:`${n}-p${y}`,patternUnits:"userSpaceOnUse",x:"0",y:"0",width:"1",height:"1"}),p=St("image",{width:"1",height:"1",preserveAspectRatio:"xMidYMid slice"});p.setAttribute("href",b.currentSrc||b.src),$.append(p),c.append($);const M=m.map(z=>{const k=St("rect",{x:"0",y:"0",width:"0",height:"0",fill:`url(#${n}-p${y})`});return z.shift.append(k),k});if(x){const z=St("rect",{x:"0",y:"0",width:"0",height:"0",fill:`url(#${n}-p${y})`});x.gl.firstElementChild.append(z),M.push(z)}const w=hs(b,b.offsetWidth,b.offsetHeight)[0];return{el:b,rects:M,pattern:$,image:p,radiusPx:w,lowRes:!1,measured:null,lastGeom:null,lastHole:null}});if(a.setAttribute("opacity","0"),e.melt={layers:m,entries:v,seam:x},t.surface==="image"&&r[0]){const b=St("pattern",{id:`${n}-bp`,patternUnits:"objectBoundingBox",patternContentUnits:"objectBoundingBox",width:"1",height:"1"}),y=St("image",{width:"1",height:"1",preserveAspectRatio:"xMidYMid slice"});y.setAttribute("href",r[0].currentSrc||r[0].src),b.append(y),c.append(b),e.blob.setAttribute("fill",`url(#${n}-bp)`)}else e.blob.removeAttribute("fill")}clearBlend(e){e.blend?.host.setAttribute("opacity","0"),e.meltHostLast=null,e.meltWroteAt=0,e.meltAxis=null;for(const t of e.melt?.layers??[])t.last=void 0;e.melt?.seam&&(e.melt.seam.last=void 0,e.melt.seam.gl.setAttribute("opacity","0"));for(const t of e.melt?.entries??[])t.el.style.removeProperty("mask-image"),t.el.style.removeProperty("-webkit-mask-image"),t.el.style.removeProperty("mask-composite"),t.el.style.removeProperty("-webkit-mask-composite"),t.lastHole=null,t.lastGeom=null}measureAll(e=1/60){const t=this.getGroup();if(!t||this.items.size===0)return!1;const a=t.getBoundingClientRect();let o=!1;for(const r of this.items){const n=r.target.getBoundingClientRect();r.frame={x:n.left-a.left,y:n.top-a.top,w:n.width,h:n.height}}for(const r of this.items)if(!(!r.blend||!r.melt))for(const n of r.melt.entries){const s=n.el.getBoundingClientRect();n.measured={x:s.left-a.left,y:s.top-a.top,w:s.width,h:s.height,ow:n.el.offsetWidth,oh:n.el.offsetHeight}}for(const r of this.items)this.writeBlob(r,e)&&(o=!0);for(const r of this.items)r.blend&&this.writeBlend(r,e)&&(o=!0);return o}effectiveInset(e,t){let a=e.blobInset??0;const o=e.bridgeGrow??0;if(o>0&&e.frame){const r=e.frame,n=Math.max(14,this.gooBlur*3);let s=1/0;for(const i of this.items){if(i===e||!i.frame)continue;const l=i.frame,h=Math.max(l.x-(r.x+r.w),r.x-(l.x+l.w),0),d=Math.max(l.y-(r.y+r.h),r.y-(l.y+l.h),0),u=Math.hypot(h,d);u<s&&(s=u)}s<n&&(a-=o*Jn(1-s/n))}return o<=0?(e.biSmooth=a,a):(e.biSmooth===null?e.biSmooth=a:e.biSmooth+=(a-e.biSmooth)*Math.min(1,t*18),e.biSmooth)}writeBlob(e,t){const a=e.frame,o=e.dynamics;if(!o||!o.evolve&&!o.move){const p=this.effectiveInset(e,t),M=e.last,w=!M||Math.abs(M.x-a.x)>=.05||Math.abs(M.y-a.y)>=.05||Math.abs(M.w-a.w)>=.05||Math.abs(M.h-a.h)>=.05,z=Math.abs(p-e.lastBi)>=.05;if(!w&&!z)return!1;if(e.blob.style.transform=`translate(${a.x+p}px, ${a.y+p}px)`,w||z){const k=Math.max(0,a.w-p*2),F=Math.max(0,a.h-p*2);e.blob.setAttribute("width",String(k)),e.blob.setAttribute("height",String(F));const S=e.baseW>0?a.w/e.baseW:1;e.blob.setAttribute("rx",String(Zs(e.radiusPx*S-p,k,F)))}return e.lastPaint=null,e.last=a,e.lastBi=p,!0}const r=a.x+a.w/2,n=a.y+a.h/2;let s;if(o.evolve){const p=e.target.offsetWidth,M=e.target.offsetHeight;s=hs(e.target,p,M)[0]}else s=e.radiusPx*(e.baseW>0?a.w/e.baseW:1);e.sim||(e.sim={cx:r,cy:n,w:a.w,h:a.h,r:s,vcx:0,vcy:0,vw:0,vh:0,vr:0});const i=e.sim;if(o.move){const p=o.moveOpts??hr;[i.cx,i.vcx]=Eo(i.cx,i.vcx,r,p.stiffness,p.damping,t),[i.cy,i.vcy]=Eo(i.cy,i.vcy,n,p.stiffness,p.damping,t)}else if(o.evolve){const p=o.evolveOpts??eo,M=e.tPrev?(r-e.tPrev.cx)/t:0,w=e.tPrev?(n-e.tPrev.cy)/t:0;e.tvx=e.tvx*.7+M*.3,e.tvy=e.tvy*.7+w*.3,e.tPrev={cx:r,cy:n};const z=r-i.cx,k=n-i.cy,F=Math.hypot(z,k),S=Math.hypot(e.tvx,e.tvy);let _=0,A=0;S>.001?(_=e.tvx/S,A=e.tvy/S):F>.001&&(_=z/F,A=k/F);const C=Math.max(0,p.anticipation)/1e3,R=C>0?1-Math.exp(-t/C):1;e.lead01+=((F>.5?1:0)-e.lead01)*R;const O=Math.min(Math.max(0,p.travel)*e.lead01,F),E=_*O,I=A*O;[i.cx,i.vcx]=Eo(i.cx,i.vcx,r+E,p.massStiffness,p.massDamping,t),[i.cy,i.vcy]=Eo(i.cy,i.vcy,n+I,p.massStiffness,p.massDamping,t)}else i.cx=r,i.cy=n,i.vcx=0,i.vcy=0;if(o.evolve){const p=o.evolveOpts??eo;[i.w,i.vw]=Eo(i.w,i.vw,a.w,p.sizeStiffness,p.sizeDamping,t),[i.h,i.vh]=Eo(i.h,i.vh,a.h,p.sizeStiffness,p.sizeDamping,t),[i.r,i.vr]=Eo(i.r,i.vr,s,p.radiusStiffness,p.radiusDamping,t)}else i.w=a.w,i.h=a.h,i.r=s,i.vw=0,i.vh=0,i.vr=0;let l="";const h=Math.hypot(i.vcx,i.vcy);if(o.move&&h>2){const p=Math.min((o.moveOpts??hr).stretch,h*6e-4),M=Math.round(Math.atan2(i.vcy,i.vcx)*100)/100;l+=` rotate(${M}rad) scale(${(1+p).toFixed(3)}, ${(1/(1+p*.65)).toFixed(3)}) rotate(${-M}rad)`}if(o.move&&e.tailEl){const p=T=>Math.round(T*10)/10;e.tailR===0&&Math.abs(e.tailX)<.001&&Math.abs(e.tailY)<.001&&(e.tailX=i.cx,e.tailY=i.cy),[e.tailX,e.tailVx]=Eo(e.tailX,e.tailVx,i.cx,170,22,t),[e.tailY,e.tailVy]=Eo(e.tailY,e.tailVy,i.cy,170,22,t);const M=e.blobInset??0,w=h>.001?i.vcx/h:1,z=h>.001?i.vcy/h:0,k=Math.max(4,Math.abs(w)*i.h+Math.abs(z)*i.w-M*2),F=(Math.abs(w)*i.w+Math.abs(z)*i.h)/2,S=k/2,_=e.tailX-i.cx,A=e.tailY-i.cy,C=Math.hypot(_,A),R=o.moveOpts??hr,O=F+S*(.2+R.force*1.6);C>O&&(e.tailX=i.cx+_/C*O,e.tailY=i.cy+A/C*O);const E=R.tail,I=Math.max(0,Math.min(1,(h-20)/120)),P=S*E*I;if(e.tailR+=(P-e.tailR)*Math.min(1,t*10),e.tailR<.3)e.lastTail!=="hidden"&&(e.tailEl.setAttribute("r","0"),e.tailMidA?.setAttribute("r","0"),e.tailMidB?.setAttribute("r","0"),e.lastTail="hidden");else{e.tailPhase+=h*t*.045;const T=e.tailR*.16,Y=-z,q=w,j=Math.sin(e.tailPhase)*T,X=Math.sin(e.tailPhase+2.4)*-T,K=i.cx+_*.45+Y*j,Q=i.cy+A*.45+q*j,W=i.cx+_*.75+Y*X,N=i.cy+A*.75+q*X,ae=`${p(e.tailX)},${p(e.tailY)},${p(e.tailR)},${p(K)},${p(Q)},${p(W)},${p(N)}`;ae!==e.lastTail&&(e.tailEl.setAttribute("cx",String(p(e.tailX))),e.tailEl.setAttribute("cy",String(p(e.tailY))),e.tailEl.setAttribute("r",String(p(e.tailR))),e.tailMidA&&(e.tailMidA.setAttribute("cx",String(p(K))),e.tailMidA.setAttribute("cy",String(p(Q))),e.tailMidA.setAttribute("r",String(p(e.tailR*.62)))),e.tailMidB&&(e.tailMidB.setAttribute("cx",String(p(W))),e.tailMidB.setAttribute("cy",String(p(N))),e.tailMidB.setAttribute("r",String(p(e.tailR*.4)))),e.lastTail=ae)}}let d=Math.max(0,i.r),u=!1;if(o.evolve){const p=o.evolveOpts??eo,M=performance.now(),w=e.lastTargetSize;(w?Math.abs(a.w-w.w)+Math.abs(a.h-w.h):0)>.5?(e.morphActive||(e.cornerT0=M,e.morphActive=!0),e.lastTargetMoveT=M):e.morphActive&&M-e.lastTargetMoveT>150&&M-e.cornerT0>e1(p)&&(e.morphActive=!1),e.lastTargetSize={w:a.w,h:a.h};const k=e1(p);let F=0;if(e.cornerT0>0&&p.roundness>0&&M-e.cornerT0<k){const R=Math.min(1,Math.max(0,(M-e.cornerT0-Math.max(0,p.cornerDelay))/Math.max(1,p.cornerDuration))),O=Iu(p.cornerEase)(R);F=Math.min(1,Math.max(0,(1-O)*p.roundness))}const S=t*8;if(e.round01+=Math.max(-S,Math.min(S,F-e.round01)),u=e.cornerT0>0&&M-e.cornerT0<k+80||Math.abs(F-e.round01)>.004||e.round01>.004,e.round01>.001){const R=Math.max(Math.min(i.w,i.h)/2,d);d=d+(R-d)*e.round01,d=Math.max(d,s)}const _=Math.min(1,(Math.hypot(i.vcx,i.vcy)+Math.abs(i.vw)+Math.abs(i.vh))/420);e.motionEnv=Math.max(_,e.motionEnv-t*1.9);const A=e.motionEnv,C=A*A*Math.max(0,p.contentBlur);C>.3?(e.target.style.filter=`blur(${C.toFixed(1)}px)`,e.contentBlurred=!0):e.contentBlurred&&(e.target.style.removeProperty("filter"),e.contentBlurred=!1)}const c=e.blobInset??0,f=Math.max(0,i.w-c*2),g=Math.max(0,i.h-c*2),m=Zs(d-c,f,g);let x="";if(o.move&&e.bendPathEl){const p=o.moveOpts??hr,M=Math.min(f,g)*.5,w=Math.max(-M,Math.min(M,i.vcy*.05))*p.bend,z=Math.min(f,g)*.9,k=Math.max(-z,Math.min(z,i.vcx*.09))*p.bendX;e.bendCur+=(w-e.bendCur)*Math.min(1,t*9),e.bendCurX+=(k-e.bendCurX)*Math.min(1,t*9);const F=Math.round(e.bendCurX*10)/10,S=Math.round(e.bendCur*10)/10,_=`${F},${S}`;if(_!==e.lastBendVars&&(e.target.style.setProperty("--lg-bend-x",`${F}px`),e.target.style.setProperty("--lg-bend-y",`${S}px`),e.target.style.setProperty("--lg-bend-xn",String(F)),e.target.style.setProperty("--lg-bend-yn",String(S)),e.lastBendVars=_),(Math.abs(e.bendCur)>.5||Math.abs(e.bendCurX)>.5)&&f>1&&g>1){const C=Math.min(m,f/2,g/2),R=Math.round(e.bendCur*2*10)/10,O=e.bendCurX,E=Math.max(C*.2,Math.min(C*3,O>0?C-.8*O:C+1.6*-O)),I=Math.max(C*.2,Math.min(C*3,O>0?C+1.6*O:C-.8*-O)),P=.5523,T=Y=>Math.round(Y*10)/10;x=`M ${T(I)} 0 Q ${T(f/2)} ${R} ${T(f-E)} 0 C ${T(f-E+P*E)} 0 ${T(f)} ${T(C-P*C)} ${T(f)} ${T(C)} L ${T(f)} ${T(g-C)} C ${T(f)} ${T(g-C+P*C)} ${T(f-E+P*E)} ${T(g)} ${T(f-E)} ${T(g)} Q ${T(f/2)} ${T(g+e.bendCur*2)} ${T(I)} ${T(g)} C ${T(I-P*I)} ${T(g)} 0 ${T(g-C+P*C)} 0 ${T(g-C)} L 0 ${T(C)} C 0 ${T(C-P*C)} ${T(I-P*I)} 0 ${T(I)} 0 Z`}}const v=x!=="",b={t:`translate(${i.cx-i.w/2+c}px, ${i.cy-i.h/2+c}px)`+l,w:v?"0":String(f),h:String(g),rx:String(m)},y=e.lastPaint;return(!y||y.t!==b.t)&&(e.blob.style.transform=b.t),(!y||y.w!==b.w)&&e.blob.setAttribute("width",b.w),(!y||y.h!==b.h)&&e.blob.setAttribute("height",b.h),(!y||y.rx!==b.rx)&&e.blob.setAttribute("rx",b.rx),e.lastPaint=b,e.bendPathEl&&(x!==(e.lastBendD??"")&&(e.bendPathEl.setAttribute("d",x),e.lastBendD=x),v&&(e.bendPathEl.style.transform=b.t)),e.last=a,!(Math.abs(i.cx-r)<.05&&Math.abs(i.cy-n)<.05&&Math.abs(i.w-a.w)<.05&&Math.abs(i.h-a.h)<.05&&Math.abs(i.r-s)<.05&&h<1&&Math.abs(i.vw)+Math.abs(i.vh)+Math.abs(i.vr)<1&&e.motionEnv<.01&&e.tailR<.3&&!u)}writeBlend(e,t){const a=e.frame,o=e.blend,r=e.melt;if(!r)return!1;const n=o.range??Math.max(10,this.gooBlur*2.5);let s=1/0,i=null;for(const re of this.items){if(re===e||!re.frame)continue;const we=re.frame,Be=Math.max(we.x-(a.x+a.w),a.x-(we.x+we.w),0),ee=Math.max(we.y-(a.y+a.h),a.y-(we.y+we.h),0),pe=Math.hypot(Be,ee);pe<s&&(s=pe,i=we)}let l=0,h=0;if(i&&s===0){const re=i,we=Math.min(a.x+a.w,re.x+re.w)-Math.max(a.x,re.x),Be=Math.min(a.y+a.h,re.y+re.h)-Math.max(a.y,re.y),ee=Math.max(1,Math.min(a.w,a.h,re.w,re.h));l=Math.max(0,Math.min(we,Be))/ee,h=Math.max(0,Math.max(we,Be))}let d=0;if(i&&s<n&&o.active!==!1){const re=Jn(Math.min(1,(1-s/n)/.65)),we=Math.max(0,Math.min(1,o.strength??1)),Be=Math.max(.01,o.sink??.45),ee=Jn(Math.max(0,Math.min(1,(l-Be*.2)/Math.max(.01,Be*.8))));d=Math.pow(re,1.25)*we*(1-ee)}if(d>=e.meltFade)e.meltFade+=(d-e.meltFade)*Math.min(1,t*16),e.meltRel=null;else if(d>.02)e.meltFade+=(d-e.meltFade)*Math.min(1,t*6),e.meltRel=null;else{const re=Math.max(40,Math.max(o.releaseMs??240,o.fadeMs??o.releaseMs??240));e.meltRel||(e.meltRel={from:e.meltFade,t:0});const we=e.meltRel;we.t+=t*1e3;const Be=Math.min(1,we.t/re);e.meltFade=d+(we.from-d)*(1-Be)*(1-Be)}d===0&&e.meltFade<.001&&(e.meltFade=0);const u=e.meltFade;if(u<=.001)return e.lastBlend&&e.lastBlend.s!==0?(this.clearBlend(e),e.lastBlend={cx:0,cy:0,s:0,d:0,pk:""},!0):!1;let c=i;if((!c||s>=n)&&e.meltGeom&&(c=e.meltGeom.o),!c)return!1;const f=a.x+a.w<c.x?(a.x+a.w+c.x)/2:c.x+c.w<a.x?(c.x+c.w+a.x)/2:(Math.max(a.x,c.x)+Math.min(a.x+a.w,c.x+c.w))/2,g=a.y+a.h<c.y?(a.y+a.h+c.y)/2:c.y+c.h<a.y?(c.y+c.h+a.y)/2:(Math.max(a.y,c.y)+Math.min(a.y+a.h,c.y+c.h))/2;e.meltGeom={o:{...c}};const m=e.meltRel,x=Math.max(40,o.fadeMs??o.releaseMs??240),v=m?Math.min(1,m.t/x):0,b=m?(1-v)*(1-v):1,y=m?Math.min(1,m.from*(.55+.45*(1-v))):u,$=y*y*(3-2*y);e.meltOp=b<e.meltOp?b:e.meltOp+(b-e.meltOp)*Math.min(1,t*16);const p=o.zone??this.gooBlur*2.2+4,M=Math.min(Math.min(a.w,a.h)*.9,p*(.7+.6*y)),w=Math.max(0,o.flowSpeed??26),z=e.meltPrev,k=z?Math.hypot(a.x-z.x,a.y-z.y)/Math.max(.001,t):0;e.meltPrev={x:a.x,y:a.y};const F=Math.min(t,1/24)*w*.12*Math.min(1,k/40);e.meltPhase+=F;const S=e.lastBlend,_=`${o.seamBlur??""}/${o.strength??""}/${o.warp}/${o.blur}/${o.mix??""}/${o.gravity??""}`;if(F<1e-4&&S&&S.pk===_&&Math.abs(S.cx-f)<.05&&Math.abs(S.cy-g)<.05&&Math.abs(S.s-u)<.005&&Math.abs(S.d-M)<.05)return!1;const A=performance.now();if(this.frameEma>20&&A-e.meltWroteAt<35)return!0;e.meltWroteAt=A;const C=re=>Math.round(re*10)/10,R=o.host,O=r.layers.length,E=c.x+c.w/2,I=c.y+c.h/2,P=E-f,T=I-g,Y=Math.hypot(P,T)||1,q=P/Y,j=T/Y,X=Math.max(0,o.gravity??25)*$,K=C(Math.atan2(j,q)*180/Math.PI),Q=re=>Math.round(re*1e3)/1e3,W=Math.max(0,Math.min(1,o.taper??.65)),N=Math.max(.2,o.warpFreq??1),ae=o.zone??this.gooBlur*2.2+4,G=Math.min(.3,Math.max(.01,N/(ae*1.1))),J=(G*.35).toFixed(4),V=(G*1.6).toFixed(4),U=Math.abs(q),fe=Math.abs(j),H=e.meltAxis==="x"?fe>U*1.25?"y":"x":e.meltAxis==="y"?U>fe*1.25?"x":"y":U>=fe?"x":"y";e.meltAxis=H;const de=H==="x"?`${J} ${V}`:`${V} ${J}`,oe=f+q*M*.05,ue=g+j*M*.05,te=r.layers.map((re,we)=>{const Be=O>1?we/(O-1):1,ee=.15+.85*Math.pow(Be,1.4),pe=.45+.55*Be,Me=.7+.45*Be,me=6*Math.sin(e.meltPhase*Me),ye=2*Math.sin(e.meltPhase*Me*1.31+1.7);return[String(Nt(o.warp*pe*$,.25)),String(Nt(o.blur*ee*$,.25)),String(Nt(q*me-j*ye,.5)),String(Nt(j*me+q*ye,.5)),String(Nt(oe,.5)),String(Nt(ue,.5)),String(Nt(M*(.95-.55*Be),.5)),String(Nt(Math.min(1,$*(.75+.25*Be)),.02))]}),Xe=f-q*M,qe=g-j*M,ge=1-.45*Jn(Math.min(1,l*2.2)),he=Math.min(2.2,(X+s)/Math.max(8,2*M))*(.5+W)*ge,be=re=>{const we=Q(1+he*re),Be=Q(1/(1+he*.35*re));return`translate(${C(Xe)}, ${C(qe)}) rotate(${K}) scale(${we}, ${Be}) rotate(${-K}) translate(${C(-Xe)}, ${C(-qe)})`},ze=Math.max(0,Math.min(1,o.mix??0))*$,Qe=re=>{if(re<.002)return"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1";const we=Q(1+4*re),Be=Q(1-we*(.38+.12*re));return`0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  ${we} 0 0 0 ${Be}`},ie=Nt(1+Math.min(1.8,s/Math.max(8,2*M)),.05),_e=ie>1.001?`translate(${C(oe)}, ${C(ue)}) rotate(${K}) scale(${Q(ie)}, 1) rotate(${-K}) translate(${C(-oe)}, ${C(-ue)})`:"",ve=o.blur*2.5+o.warp+X*.5+he*M+8,Ne=Nt(M*1.15*ie+ve,8),He=String(Nt(oe-Ne,8)),Ue=String(Nt(ue-Ne,8)),Ot=String(Nt(Ne*2,8));if(r.layers.forEach((re,we)=>{const Be=O>1?we/(O-1):1,ee=te[we],pe=be(.4+.6*Be),Me=Qe(Nt(ze*(.15+.85*Be),.01)),me=ee.join(",")+"|"+de+"|"+pe+"|"+Me+"|"+_e+"|"+He+","+Ue+","+Ot;re.last!==me&&(re.last=me,re.filter.setAttribute("x",He),re.filter.setAttribute("y",Ue),re.filter.setAttribute("width",Ot),re.filter.setAttribute("height",Ot),re.disp.setAttribute("scale",ee[0]),re.blurEl.setAttribute("stdDeviation",ee[1]),re.turb.getAttribute("baseFrequency")!==de&&re.turb.setAttribute("baseFrequency",de),re.noiseOffset.setAttribute("dx",ee[2]),re.noiseOffset.setAttribute("dy",ee[3]),re.circle.setAttribute("cx",ee[4]),re.circle.setAttribute("cy",ee[5]),re.circle.setAttribute("r",ee[6]),_e?re.circle.setAttribute("transform",_e):re.circle.removeAttribute("transform"),re.gl.setAttribute("opacity",ee[7]),re.shift.setAttribute("transform",pe),re.erode.setAttribute("values",Me))}),r.seam){const re=r.seam,we=Nt((o.seamBlur??o.blur*1.6)*$,.25),Be=Nt(Math.min(1,$*1.2)*.55,.02),ee=Nt(M*1.25,.5),pe=`${we}|${Be}|${Nt(oe,.5)},${Nt(ue,.5)},${ee}|${_e}|${He},${Ue},${Ot}`;re.last!==pe&&(re.last=pe,re.filter.setAttribute("x",He),re.filter.setAttribute("y",Ue),re.filter.setAttribute("width",Ot),re.filter.setAttribute("height",Ot),re.blurEl.setAttribute("stdDeviation",String(we)),re.circle.setAttribute("cx",String(Nt(oe,.5))),re.circle.setAttribute("cy",String(Nt(ue,.5))),re.circle.setAttribute("r",String(ee)),_e?re.circle.setAttribute("transform",_e):re.circle.removeAttribute("transform"),re.gl.setAttribute("opacity",String(Be)))}const Rt=a.x+a.w/2,Wt=a.y+a.h/2,ta=Math.atan2(g-Wt,f-Rt),$t=o.pull*y,aa=Q(e.meltOp).toString()+`|translate(${C(Math.cos(ta)*$t)}px, ${C(Math.sin(ta)*$t)}px)`;if(aa!==e.meltHostLast){e.meltHostLast=aa;const re=aa.split("|");R.setAttribute("opacity",re[0]),R.style.transform=re[1]}const Ut=Math.max(10,this.gooBlur*2.5),la=i?s<Ut?Jn(1-s/Ut):0:u,nt=Nt(Math.max(0,1-Math.min(u,la)*2.2),.05).toFixed(2),At=(Math.round((1+2*Number(nt))/3*20)/20).toFixed(2);for(const re of r.entries){if(!re.lowRes){const Ze=Xm(re.el);Ze?(re.image.setAttribute("href",Ze),re.lowRes=!0):re.el.complete&&re.el.naturalWidth&&(re.lowRes=!0)}const we=re.measured;if(!we||we.w<1||we.h<1)continue;const Be=we.x,ee=we.y,pe=(we.ow||we.w)/we.w,Me=`${C(Be)},${C(ee)},${C(we.w)},${C(we.h)},${C(Zs(re.radiusPx/(pe||1),we.w,we.h))}`;if(Me!==re.lastGeom){re.lastGeom=Me;for(const Ze of re.rects)Ze.setAttribute("x",String(C(Be))),Ze.setAttribute("y",String(C(ee))),Ze.setAttribute("width",String(C(we.w))),Ze.setAttribute("height",String(C(we.h))),Ze.setAttribute("rx",String(C(Zs(re.radiusPx/(pe||1),we.w,we.h))));re.pattern.setAttribute("x",String(C(Be))),re.pattern.setAttribute("y",String(C(ee))),re.pattern.setAttribute("width",String(C(we.w))),re.pattern.setAttribute("height",String(C(we.h))),re.image.setAttribute("width",String(C(we.w))),re.image.setAttribute("height",String(C(we.h)))}const me=(we.oh||we.h)/we.h;if(Math.hypot(Math.max(Be-f,f-(Be+we.w),0),Math.max(ee-g,g-(ee+we.h),0))>M){re.lastHole!==null&&(re.lastHole=null,re.el.style.removeProperty("mask-image"),re.el.style.removeProperty("-webkit-mask-image"),re.el.style.removeProperty("mask-composite"),re.el.style.removeProperty("-webkit-mask-composite"));continue}const Re=we.ow||we.w,at=we.oh||we.h,Ve=Math.min(Re,at)/2;let $e=(f-Be)*pe,_t=(g-ee)*me,dt=$e-Re/2,Ce=_t-at/2;const ht=Math.hypot(dt,Ce);ht<Ve&&(ht<.001?(dt=q,Ce=j):(dt/=ht,Ce/=ht),$e=Re/2+dt*Ve,_t=at/2+Ce*Ve);const vt=Math.round($e),zt=Math.round(_t),Ht=Nt(Math.min(Math.max(M,h*.75)*Math.min(pe,me),Ve),1),It=C(Math.max(Math.hypot(vt,zt),Math.hypot(vt-Re,zt),Math.hypot(vt,zt-at),Math.hypot(vt-Re,zt-at)))+2;let st;if(s===0&&h>4&&i){const Ze=i,et=(Ze.x+Ze.w/2-Be)*pe,kt=(Ze.y+Ze.h/2-ee)*me,_a=(Math.max(a.x,Ze.x)-Be)*pe,ao=(Math.max(a.y,Ze.y)-ee)*me,ja=(Math.min(a.x+a.w,Ze.x+Ze.w)-Be)*pe,qa=(Math.min(a.y+a.h,Ze.y+Ze.h)-ee)*me,Ga=Math.round(Math.max(Math.hypot(_a-et,ao-kt),Math.hypot(ja-et,ao-kt),Math.hypot(_a-et,qa-kt),Math.hypot(ja-et,qa-kt))+3),Je=Math.round(Math.min(Ve*2.6,Math.max(Ht,(o.seamBlur??o.blur*1.6)*3.2))),Ua=Math.max(0,Ga-Je),Ra=Math.round(Math.max(Math.hypot(et,kt),Math.hypot(et-Re,kt),Math.hypot(et,kt-at),Math.hypot(et-Re,kt-at)))+2;st=`radial-gradient(circle at ${Math.round(et)}px ${Math.round(kt)}px, rgba(255,255,255,${nt}) ${Ua}px, #fff ${Ga}px, #fff ${Ra}px)`}else st=`radial-gradient(circle at ${vt}px ${zt}px, rgba(255,255,255,${nt}) ${C(Ht*.2)}px, rgba(255,255,255,${At}) ${C(Ht*.45)}px, #fff ${C(Ht*.78)}px, #fff ${It}px)`;st!==re.lastHole&&(re.lastHole=st,re.el.style.setProperty("mask-image",st),re.el.style.setProperty("-webkit-mask-image",st),re.el.style.removeProperty("mask-composite"),re.el.style.removeProperty("-webkit-mask-composite"))}return e.lastBlend={cx:f,cy:g,s:u,d:M,pk:_},!0}ensureSources(){if(this.sourcesReady)return;const e=this.getGroup();if(!e)return;this.sourcesReady=!0,this.mo=new MutationObserver(a=>{for(const o of a){const r=o.target;if(!(r instanceof Element)||!r.closest("[data-gooey-svg], [data-gooey-overlay]")){this.wake();return}}}),this.mo.observe(e,{attributes:!0,childList:!0,subtree:!0,attributeFilter:["style","class"]});const t=()=>this.wake();for(const a of["transitionrun","animationstart","pointerdown"])e.addEventListener(a,t,!0),this.removeListeners.push(()=>e.removeEventListener(a,t,!0));window.addEventListener("scroll",t,{capture:!0,passive:!0}),this.removeListeners.push(()=>window.removeEventListener("scroll",t,!0)),this.interval=setInterval(()=>{!this.awake&&this.measureAll()&&this.wake()},300)}};function a1(e,t){const a=[];let o=0,r="";for(const n of e)n==="("?o++:n===")"&&o--,o===0&&(t===","?n===",":/\s/.test(n))?(r.trim()&&a.push(r.trim()),r=""):r+=n;return r.trim()&&a.push(r.trim()),a}var jm=/^[+-]?(\d+\.?\d*|\.\d+)(px)?$/;function qm(e){if(!e||e.trim()===""||e.trim()==="none")return[];const t=[];for(const a of a1(e,",")){const o=a1(a," ");if(o.length===0)continue;const r=o.includes("inset"),n=[],s=[];for(const u of o)u!=="inset"&&(n.length<4&&jm.test(u)?n.push(parseFloat(u)):s.push(u));const[i=0,l=0,h=0,d=0]=n;t.push({x:i,y:l,blur:h,spread:d,color:s.join(" ")||"rgba(0, 0, 0, 0.35)",inset:r})}return t}var Gm=L.forwardRef(function({blur:t=6,contrast:a=18,fill:o="#fff",shadow:r,filterPadding:n=24,waviness:s=0,wavinessFreq:i=.018,filter:l,className:h,style:d,children:u,...c},f){const g=L.useRef(null),[m,x]=L.useState(null),[v,b]=L.useState(null),[y,$]=L.useState({w:0,h:0}),p=L.useCallback(R=>{g.current=R,typeof f=="function"?f(R):f&&(f.current=R)},[f]),M=`gooey-${L.useId().replace(/[^a-zA-Z0-9_-]/g,"")}`,w=L.useMemo(()=>qm(r),[r]);Di(()=>{const R=g.current;if(!R)return;const O=()=>$(I=>I.w===R.offsetWidth&&I.h===R.offsetHeight?I:{w:R.offsetWidth,h:R.offsetHeight});O();const E=new ResizeObserver(O);return E.observe(R),()=>E.disconnect()},[]);const z=L.useMemo(()=>new Nm(()=>g.current),[]),k=L.useMemo(()=>Om(),[]);L.useEffect(()=>()=>z.dispose(),[z]),L.useEffect(()=>{z.gooBlur=t},[z,t]);const F=L.useMemo(()=>({portal:m,meltPortal:v,fill:o,getGroup:()=>g.current,engine:z,imageMelt:k}),[m,v,o,z,k]),S=w.filter(R=>R.inset||R.spread!==0),_=w.filter(R=>!R.inset&&R.spread===0).map(R=>`drop-shadow(${R.x}px ${R.y}px ${R.blur}px ${R.color})`).join(" "),A=S.reduce((R,O)=>Math.max(R,Math.max(Math.abs(O.x),Math.abs(O.y))+O.blur*1.5+Math.max(0,O.spread)),0),C=Math.ceil(t*3+A+n);return D.jsxs("div",{...c,ref:p,className:h,style:{position:"relative",isolation:"isolate",...d},children:[D.jsxs("svg",{"aria-hidden":"true",focusable:"false","data-gooey-svg":"",style:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible",pointerEvents:"none",zIndex:-1,filter:_||void 0,willChange:"filter, transform"},children:[D.jsx("defs",{children:l?D.jsx("filter",{id:M,filterUnits:"userSpaceOnUse",x:-C,y:-C,width:y.w+C*2,height:y.h+C*2,colorInterpolationFilters:"sRGB",dangerouslySetInnerHTML:{__html:l}}):D.jsx("filter",{id:M,filterUnits:"userSpaceOnUse",x:-C,y:-C,width:y.w+C*2,height:y.h+C*2,colorInterpolationFilters:"sRGB",children:D.jsx(Rm,{blur:t,contrast:a,shadows:S,waviness:s,wavinessFreq:i})})}),D.jsx("g",{id:`${M}-sil`,ref:x,filter:`url(#${M})`,style:{fill:o}})]}),D.jsxs("svg",{"aria-hidden":"true",focusable:"false","data-gooey-overlay":"",style:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible",pointerEvents:"none",zIndex:9999},children:[D.jsx("defs",{children:D.jsx("mask",{id:`${M}-meltmask`,maskUnits:"userSpaceOnUse",x:-C,y:-C,width:y.w+C*2,height:y.h+C*2,children:D.jsx("use",{href:`#${M}-sil`})})}),D.jsx("g",{mask:`url(#${M}-meltmask)`,children:D.jsx("g",{ref:b})})]}),D.jsxs(Fu.Provider,{value:F,children:[u,D.jsx(Wm,{registry:k})]})]})}),Um={snappy:{stiffness:480,damping:34,mass:1},smooth:{stiffness:190,damping:26,mass:1},bouncy:{stiffness:320,damping:17,mass:1}},Js=1/240;function Vm(e){let t=0,a=0,o=0,r=-1,n=0;const s=[0];for(;o<10;){const u=(-e.stiffness*(t-1)-e.damping*a)/e.mass;if(a+=u*Js,t+=a*Js,o+=Js,s.push(t),t>n&&(n=t),Math.abs(t-1)<.001&&Math.abs(a)<.02){if(r<0&&(r=o),o-r>=.064)break}else r=-1}const i=r>0?r:o,l=Math.round(Math.min(120,Math.max(24,i*90))),h=Math.min(s.length-1,i/Js),d=[];for(let u=0;u<=l;u++){const c=Math.min(s.length-1,Math.round(u/l*h));d.push(Math.round(s[c]*1e4)/1e4)}return d[d.length-1]=1,{duration:i,values:d,overshoots:n>1.001}}var g0=null;function o1(){return g0==null&&(g0=typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("transition-timing-function","linear(0, 1)")),g0}var r1=new Map,n1=new Map;function us(e){let t=n1.get(e);if(t)return t;const a=/^linear\(([^)]+)\)$/.exec(e.trim()),o=/^cubic-bezier\(([^)]+)\)$/.exec(e.trim());if(a){const r=a[1].split(",").map(Number);t=n=>{if(n<=0)return r[0];if(n>=1)return r[r.length-1];const s=n*(r.length-1),i=Math.floor(s);return r[i]+(r[i+1]-r[i])*(s-i)}}else if(o){const[r,n,s,i]=o[1].split(",").map(Number);t=l=>{if(l<=0)return 0;if(l>=1)return 1;let h=0,d=1;for(let c=0;c<24;c++){const f=(h+d)/2;3*f*(1-f)*(1-f)*r+3*f*f*(1-f)*s+f**3<l?h=f:d=f}const u=(h+d)/2;return 3*u*(1-u)*(1-u)*n+3*u*u*(1-u)*i+u**3}}else e==="ease"?t=us("cubic-bezier(0.25, 0.1, 0.25, 1)"):e==="ease-in"?t=us("cubic-bezier(0.42, 0, 1, 1)"):e==="ease-out"?t=us("cubic-bezier(0, 0, 0.58, 1)"):e==="ease-in-out"?t=us("cubic-bezier(0.42, 0, 0.58, 1)"):t=r=>Math.min(1,Math.max(0,r));return n1.set(e,t),t}function Km(e,t=!1){if(t)return{duration:0,easing:"linear"};const a=e??"smooth";if(typeof a=="object"&&"duration"in a)return{duration:a.duration,easing:a.ease??"cubic-bezier(0.22, 1, 0.36, 1)"};const o=typeof a=="string"?Um[a]:{stiffness:300,damping:24,mass:1,...a},r=`${o.stiffness}/${o.damping}/${o.mass}/${o1()}`;let n=r1.get(r);if(!n){const s=Vm(o);n={duration:Math.round(s.duration*1e3),easing:o1()?`linear(${s.values.join(", ")})`:s.overshoots?"cubic-bezier(0.34, 1.56, 0.64, 1)":"cubic-bezier(0.22, 1, 0.36, 1)"},r1.set(r,n)}return n}function Pu(e){return Array.isArray(e)?e:e?[e]:[]}function b0(e){const t=jl();return e.observe||Pu(e.effect).some(o=>o!=="morph")?D.jsx(t5,{...e,ctx:t}):D.jsx(Jm,{...e,ctx:t})}function Qm(e){return typeof e=="string"?e:JSON.stringify(e??null)}function Zm(e,t){return!!e&&e.x===t.x&&e.y===t.y&&e.w===t.w&&e.h===t.h&&e.r.every((a,o)=>a===t.r[o])}function Jm({x:e=0,y:t=0,scale:a=1,transition:o="smooth",delay:r=0,radius:n,className:s,style:i,children:l,ctx:h}){const d=L.useRef(null),u=L.useRef(null),[c,f]=L.useState(null),g=Em(),m=Qm(o),{duration:x,easing:v}=L.useMemo(()=>Km(o,g),[m,g]),b=n==null?"":JSON.stringify(n);Di(()=>{const p=d.current,M=h.getGroup();if(!p||!M)return;const w=()=>{const k=Dm(p,M),F=p.offsetWidth,S=p.offsetHeight,_=p.firstElementChild??p,A=n!=null?Ou(n):hs(_,F,S),C={x:k.x,y:k.y,w:F,h:S,r:A};f(R=>Zm(R,C)?R:C)};w();const z=new ResizeObserver(w);return z.observe(p),z.observe(M),()=>z.disconnect()},[h,b]);const y=L.useRef(null),$=(p,M,w)=>{const z=`translate(${p}px, ${M}px)`+(w!==1?` scale(${w})`:"");d.current&&(d.current.style.transform=z),u.current&&(u.current.style.transform=z)};return Di(()=>{const p=y.current;if(!p||x<=0||p.x===e&&p.y===t&&p.s===a){y.current={x:e,y:t,s:a},$(e,t,a);return}const M={...p},w=us(v),z=performance.now()+r;let k=0;const F=S=>{const _=Math.min(1,Math.max(0,(S-z)/x)),A=w(_),C=M.x+(e-M.x)*A,R=M.y+(t-M.y)*A,O=M.s+(a-M.s)*A;y.current={x:C,y:R,s:O},$(C,R,O),_<1&&(k=requestAnimationFrame(F))};return k=requestAnimationFrame(F),()=>cancelAnimationFrame(k)},[e,t,a,x,v,r]),D.jsxs(D.Fragment,{children:[D.jsx("div",{ref:d,className:s,style:{display:"inline-block",...i,willChange:"transform"},children:l}),h.portal&&c&&Q0.createPortal(e5(c,{transformBox:"fill-box",transformOrigin:"center",willChange:"transform"},p=>{if(u.current=p,p){const M=y.current??{x:e,y:t,s:a};p.style.transform=`translate(${M.x}px, ${M.y}px)`+(M.s!==1?` scale(${M.s})`:"")}}),h.portal)]})}function e5(e,t,a){const[o,r,n,s]=e.r;if(o===r&&r===n&&n===s){const l=Math.max(0,Math.min(o,Math.min(e.w,e.h)/2));return D.jsx("rect",{ref:a,x:e.x,y:e.y,width:e.w,height:e.h,rx:l,style:t})}return D.jsx("path",{ref:a,d:Hm(e.x,e.y,e.w,e.h,e.r),style:t})}function t5({radius:e,blobInset:t,bridgeGrow:a,contactBlur:o,effect:r,evolve:n,move:s,className:i,style:l,children:h,ctx:d}){const u=L.useRef(null),c=L.useRef(null),f=L.useRef(null),g=L.useRef(null),m=typeof o=="object"?o:{},x=m.blur??8,v=m.warp??26,b=m.pull??4,y=m.range,$=m.zone,p=m.mix??0,M=m.gravity??60,w=m.taper??1,z=m.warpFreq??1.7,k=m.flowSpeed??22,F=m.warpStyle??"fractalNoise",S=m.detail??2,_=m.active!==!1,A=m.releaseMs??240,C=m.fadeMs,R=m.strength??1,O=m.sink,E=m.surface,I=m.seamBlur,P=Pu(r),T={evolve:P.includes("evolve"),move:P.includes("move"),evolveOpts:{...eo,...n},moveOpts:{...hr,...s}},Y=T.evolve||T.move,q=e==null?"":JSON.stringify(e),j=o?`${x}/${v}/${b}/${y??"auto"}/${$??"auto"}/${p}/${M}/${w}/${z}/${k}/${F}/${S}/${E??"liquid"}/${(I??1)>0?"seam":"noseam"}`:"",X=P.join(",")+(T.evolve?JSON.stringify(T.evolveOpts):"")+(T.move?JSON.stringify(T.moveOpts):"");return Di(()=>{const K=u.current,Q=c.current,W=K?.firstElementChild??null;if(!W||!Q)return;const N=o&&f.current?{host:f.current,blur:x,warp:v,pull:b,range:y,zone:$,mix:p,gravity:M,taper:w,warpFreq:z,flowSpeed:k,warpStyle:F,detail:S,active:_,releaseMs:A,fadeMs:C,strength:R,sink:O,surface:E,seamBlur:I}:void 0;return g.current=N??null,d.engine.add({target:W,blob:Q,radius:e==null?void 0:Ou(e)[0],blobInset:t,bridgeGrow:a,blend:N,dynamics:Y?T:void 0})},[d,q,j,X,t,a]),L.useEffect(()=>{g.current&&(g.current.active=_,g.current.releaseMs=A,g.current.fadeMs=C,g.current.strength=R,g.current.sink=O,g.current.seamBlur=I,d.engine.wake())},[d,_,A,C,R,O,I]),D.jsxs(D.Fragment,{children:[D.jsx("span",{ref:u,className:i,style:{display:"contents",...l},children:h}),d.portal&&Q0.createPortal(D.jsx("rect",{ref:c,x:0,y:0,width:0,height:0,style:{willChange:"transform",transformBox:"fill-box",transformOrigin:"center"}}),d.portal),o!==void 0&&o!==!1&&d.meltPortal&&Q0.createPortal(D.jsx("g",{ref:f,opacity:0}),d.meltPortal)]})}function Hi(e){return Math.max(.12,1-1.1*Math.min(1,Math.max(0,e)))}function a5(e){const t=Math.max(.25,e?.speed??1),a=Hi(e?.bounce??.5)/Hi(.5);return{massStiffness:eo.massStiffness*t*t,massDamping:eo.massDamping*t*a,sizeStiffness:eo.sizeStiffness*t*t,sizeDamping:eo.sizeDamping*t*a,radiusStiffness:eo.radiusStiffness*t*t,radiusDamping:eo.radiusDamping*t,cornerDuration:eo.cornerDuration/t,contentBlur:e?.contentBlur??eo.contentBlur}}function s1(e){return{warp:26,blur:8,mix:.7,gravity:60,taper:1,warpFreq:1.7,flowSpeed:22,detail:2,zone:18,range:49,releaseMs:110,strength:typeof e=="number"?Math.min(1,Math.max(0,e)):1}}function Wu(e){const t=Math.min(1,Math.max(0,e?.springiness??.5)),a=hr.stiffness*Math.pow(10,t-.5),o=hr.damping*Math.sqrt(a/hr.stiffness)*(Hi(e?.wobble??.5)/Hi(.5));return{stiffness:a,damping:o,stretch:.5*Math.min(1,Math.max(0,e?.stretch??.36)),tail:.8*Math.min(1,Math.max(0,e?.trail??.575)),...e?.advanced}}function o5(e){return{...Wu({springiness:1,stretch:0,trail:0}),bend:Math.min(1,Math.max(0,e?.vertical??.6)),bendX:Math.min(1,Math.max(0,e?.horizontal??.35)),...e?.advanced}}function r5({melt:e,children:t}){const{imageMelt:a}=jl(),{src:o,...r}=e??{};return D.jsx(Tm,{src:o,opts:{...Fm,...r},registry:a,children:t})}function n5(e){const{effect:t="morph",morph:a,move:o,bend:r,melt:n,dissolve:s,observe:i,...l}=e;if(t==="melt")return D.jsx(r5,{melt:n,children:l.children});if(t==="bend")return D.jsx(b0,{...l,observe:!0,effect:"move",move:o5(r)});if(t==="move")return D.jsx(b0,{...l,observe:!0,effect:"move",move:Wu(o)});const h=a?.advanced,d=!!a?.shape,c=s!==void 0&&s!==!1?typeof s=="object"?{...s1(!0),...s}:s1(s):void 0,f=d?{...a5(a),...h?.evolve}:void 0;return D.jsx(b0,{...l,observe:i||d||!!c||void 0,effect:d?"evolve":void 0,evolve:f,contactBlur:c,blobInset:h?.blobInset,bridgeGrow:h?.bridgeGrow})}var ei=Object.assign(Gm,{Item:n5});function Tu(e){const t=e.trim(),a=t.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(a){const r=a[1].length===3?a[1].split("").map(n=>n+n).join(""):a[1];return[parseInt(r.slice(0,2),16),parseInt(r.slice(2,4),16),parseInt(r.slice(4,6),16)]}const o=t.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);return o?[Math.round(+o[1]),Math.round(+o[2]),Math.round(+o[3])]:null}function s5(e){const t=Tu(e);return t?`rgb(${t[0]}, ${t[1]}, ${t[2]})`:null}function ti(e){const t=Tu(e);return t?`${t[0]}, ${t[1]}, ${t[2]}`:null}const i5={dark:{strokeOpacity:1.16,innerOpacity:.47,bloomOpacity:.89,innerShadow:"rgba(255, 255, 255, 0.1)",saturation:1.2,brightness:1.1},light:{strokeOpacity:1.2,innerOpacity:.85,bloomOpacity:.5,innerShadow:"rgba(0, 0, 0, 0.08)",saturation:1.6,brightness:.95,hueRange:40,hueDuration:8.5,hueBase:5,strength:.8,bandStrength:1.7}},xr=[{x:0,w:74,h:46,band:0},{x:-36,w:54,h:40,band:1},{x:36,w:54,h:40,band:1},{x:-72,w:48,h:32,band:2},{x:72,w:48,h:32,band:2},{x:-108,w:42,h:26,band:1},{x:108,w:42,h:26,band:1}],l5=36,c5=l5*xr.length,h5={colorful:{dark:["rgb(255, 70, 120)","rgb(60, 190, 255)","rgb(175, 70, 255)","rgb(60, 220, 130)","rgb(255, 150, 40)","rgb(90, 100, 255)","rgb(40, 200, 190)"],light:["rgb(255, 201, 21)","rgb(126, 196, 255)","rgb(180, 40, 230)","rgb(235, 100, 160)","rgb(255, 176, 122)","rgb(154, 160, 255)","rgb(127, 217, 238)"]},mono:{dark:["rgb(215, 215, 215)","rgb(180, 180, 180)","rgb(190, 190, 190)","rgb(160, 160, 160)","rgb(170, 170, 170)","rgb(150, 150, 150)","rgb(155, 155, 155)"],light:["rgb(60, 60, 60)","rgb(90, 90, 90)","rgb(85, 85, 85)","rgb(110, 110, 110)","rgb(105, 105, 105)","rgb(125, 125, 125)","rgb(120, 120, 120)"]},ocean:{dark:["rgb(80, 140, 255)","rgb(40, 200, 230)","rgb(120, 90, 255)","rgb(30, 170, 210)","rgb(160, 80, 240)","rgb(60, 110, 255)","rgb(40, 190, 180)"],light:["rgb(40, 100, 240)","rgb(20, 160, 200)","rgb(90, 60, 230)","rgb(20, 130, 180)","rgb(130, 50, 220)","rgb(40, 80, 230)","rgb(20, 150, 150)"]},sunset:{dark:["rgb(255, 110, 60)","rgb(255, 180, 40)","rgb(255, 60, 90)","rgb(255, 210, 80)","rgb(240, 70, 140)","rgb(255, 140, 50)","rgb(230, 50, 110)"],light:["rgb(235, 80, 30)","rgb(230, 150, 10)","rgb(230, 30, 70)","rgb(225, 175, 30)","rgb(215, 40, 110)","rgb(235, 110, 20)","rgb(205, 30, 90)"]},forest:{dark:["rgb(70, 220, 120)","rgb(40, 200, 180)","rgb(140, 230, 80)","rgb(30, 170, 140)","rgb(190, 235, 70)","rgb(50, 190, 110)","rgb(30, 150, 120)"],light:["rgb(30, 170, 80)","rgb(20, 150, 130)","rgb(90, 180, 30)","rgb(20, 130, 100)","rgb(130, 180, 20)","rgb(30, 150, 80)","rgb(20, 120, 90)"]},candy:{dark:["rgb(255, 90, 170)","rgb(255, 120, 220)","rgb(210, 80, 255)","rgb(255, 150, 190)","rgb(180, 110, 255)","rgb(255, 70, 140)","rgb(230, 100, 240)"],light:["rgb(235, 40, 140)","rgb(230, 70, 190)","rgb(180, 40, 230)","rgb(235, 100, 160)","rgb(150, 70, 230)","rgb(230, 30, 110)","rgb(200, 60, 210)"]},ice:{dark:["rgb(150, 230, 255)","rgb(90, 200, 255)","rgb(190, 240, 255)","rgb(120, 190, 255)","rgb(160, 220, 250)","rgb(80, 170, 255)","rgb(200, 235, 255)"],light:["rgb(30, 160, 220)","rgb(20, 130, 210)","rgb(60, 180, 230)","rgb(40, 120, 220)","rgb(50, 160, 220)","rgb(20, 110, 220)","rgb(70, 170, 230)"]},gold:{dark:["rgb(255, 200, 70)","rgb(255, 170, 40)","rgb(255, 220, 110)","rgb(240, 150, 30)","rgb(255, 235, 140)","rgb(230, 160, 40)","rgb(250, 210, 90)"],light:["rgb(200, 140, 10)","rgb(190, 120, 0)","rgb(210, 160, 30)","rgb(180, 110, 0)","rgb(205, 170, 40)","rgb(175, 115, 5)","rgb(195, 150, 20)"]}};function u5(e,t){const a=e.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return a?`rgba(${a[1]}, ${a[2]}, ${a[3]}, ${t.toFixed(2)})`:e}function x0(e,t=1){return Math.max(.5,Math.round(e*t*100)/100)}function f5(e,t){return`calc(50% + (var(--vb-cx-${t}) + var(--vb-x${e}-${t})) * var(--vb-w-${t}) * var(--vb-z-${t}, 1))`}function v0({id:e,colors:t,alpha:a,sw:o,sh:r,y:n,fade:s,count:i}){return(i?xr.slice(0,i):xr).map((l,h)=>{const d=a>=1?t[h%t.length]:u5(t[h%t.length],a),u=`calc(${Math.round(l.w*o)}px * var(--vb-w-${e}) * var(--vb-z-${e}, 1))`,c=`calc(${Math.round(l.h*r)}px * var(--vb-h-${e}) * var(--vb-l${h}-${e}) * var(--vb-z-${e}, 1))`,f=`calc(100% + (${n}px + var(--vb-y${h}-${e})) * var(--vb-z-${e}, 1))`;return`radial-gradient(ellipse ${u} ${c} at ${f5(h,e)} ${f}, ${d} 0%, transparent ${s}%)`}).join(`,
    `)}function d5(e){const{id:t,borderRadius:a,borderWidth:o,strokeOpacity:r,innerOpacity:n,bloomOpacity:s,innerShadow:i,colorVariant:l,colors:h,brightness:d,saturation:u,theme:c,hueBase:f=0,glowSize:g=1,glowWidth:m=1,glowHeight:x=1,strokeScale:v=1,innerScale:b=1,innerHeight:y=1,bloomScale:$=1,bloomHeight:p=1,coreSize:M=1,coreLight:w=0,coreLightWidth:z=1,coreLightHeight:k=1,rangeWidth:F=1,rangeHeight:S=1,softness:_=1,distortion:A=!1,scale:C=1}=e,R=Math.round(28*C*10)/10,O=Math.round(9*C*10)/10,E=Math.max(0,a-o),I=Math.round(Math.max(40,Math.min(95,70*_))),P=ie=>m*ie,T=ie=>x*ie,Y=ie=>Math.round(ie*10)/10,q=`var(--vb-z-${t}, 1)`,j=ie=>`calc(${Y(ie)}px * ${q})`,X=c==="dark",K=h5[l][X?"dark":"light"].map((ie,_e)=>{const ve=h?.[_e];return ve&&s5(ve)||ie}),Q=l==="mono"?.6:1,W=(r*Q).toFixed(2),N=(n*Q).toFixed(2),ae=(s*Q).toFixed(2),G=d.toFixed(2),J=u.toFixed(2),V=`hue-rotate(calc(var(--voice-hue-base, ${f}deg) + var(--vb-hue-${t})))`,U=A?` url(#vb-distort-${t})`:"",fe=`filter: ${V} brightness(${G}) saturate(${J});`,H=`filter: ${V} brightness(${G}) saturate(${J})${U};`,de=`filter: blur(${j(x0(10,g))}) ${V} brightness(${G}) saturate(${J});`,oe=`filter: blur(${j(x0(10,g))}) ${V} brightness(${G}) saturate(${J})${U};`,ue=`calc(50% + var(--vb-cx-${t}) * var(--vb-w-${t}) * ${q})`,te=`calc(100% + (2px + var(--vb-cy-${t})) * ${q})`,Xe=X?`radial-gradient(ellipse calc(${Y(30*M)}px * var(--vb-w-${t}) * ${q}) calc(${Y(30*M)}px * var(--vb-h-${t}) * ${q}) at ${ue} ${te}, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.14) 30%, transparent 65%)`:`radial-gradient(ellipse calc(${Y(40*M)}px * var(--vb-w-${t}) * ${q}) calc(${Y(30*M)}px * var(--vb-h-${t}) * ${q}) at ${ue} ${te}, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.22) 35%, transparent 70%)`,qe=v0({id:t,colors:K,alpha:1,sw:P(v),sh:T(v),y:2,fade:I}),ge=v0({id:t,colors:K,alpha:.46,sw:P(.9*b),sh:T(.9*b*y),y:0,fade:I}),he=v0({id:t,colors:K,alpha:X?.9:.7,sw:P(1.15*$),sh:T(1.5*$*p),y:0,fade:Math.min(95,I+2)}),be=(ie,_e,ve,Ne=0)=>`radial-gradient(ellipse calc(${Y(ie*F)}px * var(--vb-w-${t}) * var(--vb-mw-${t}) * ${q}) calc((${Y(_e*S)}px * var(--vb-h-${t}) + var(--vb-bh-${t})) * ${q}) at ${ue} calc(100% + var(--vb-cy-${t}) * ${q}), white 0%, rgba(255, 255, 255, 0.5) ${ve}%${Ne>0?`, rgba(255, 255, 255, ${Ne}) 85%`:""}, transparent 100%)`,ze=(ie,_e)=>`opacity: calc(var(--vb-opacity-${t}, 1) * var(--vb-glow-${t}) * ${_e} * var(--voice-${ie}-opacity, 1) * var(--voice-strength, 1));`,Qe=(ie,_e,ve,Ne)=>`${ie} {
  ${_e}
  position: absolute;
  inset: 0;
  border-radius: ${j(a)};
  background: ${ge};
  box-shadow: inset 0 0 ${j(O)} 1px ${i};
  -webkit-mask-image:
    ${be(170,64,45,.3)},
    linear-gradient(white, transparent ${j(R)}, transparent calc(100% - ${R}px * ${q}), white),
    linear-gradient(to right, white, transparent ${j(R)}, transparent calc(100% - ${R}px * ${q}), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    ${be(170,64,45,.3)},
    linear-gradient(white, transparent ${j(R)}, transparent calc(100% - ${R}px * ${q}), white),
    linear-gradient(to right, white, transparent ${j(R)}, transparent calc(100% - ${R}px * ${q}), white);
  mask-composite: intersect, add;
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  z-index: 1;
  ${ve}
  ${ze("inner",N)}
  ${Ne}
}`;return`
@property --vb-opacity-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-voice-beam="${t}"] {
  position: relative;
  border-radius: ${a}px;
  overflow: hidden;
  --vb-h-${t}: 0.8;
  --vb-w-${t}: 1;
${xr.map((ie,_e)=>`  --vb-x${_e}-${t}: ${ie.x}px;
  --vb-l${_e}-${t}: 1;
  --vb-y${_e}-${t}: 0px;`).join(`
`)}
  --vb-glow-${t}: 0.4;
  --vb-z-${t}: 1;
  --vb-cx-${t}: 0px;
  --vb-cy-${t}: 0px;
  --vb-bh-${t}: 0px;
  --vb-bendA-${t}: 0;
  --vb-mw-${t}: 1;
  --vb-hue-${t}: 0deg;
  --vb-level-${t}: 0;
}

[data-voice-beam="${t}"][data-active] {
  animation: vb-fade-in-${t} 0.6s ease forwards;
}

[data-voice-beam="${t}"][data-fading] {
  animation: vb-fade-out-${t} 0.5s ease forwards;
}

/* Stroke — the colours painted into the 1px edge ring, masked to the centred ellipse. */
[data-voice-beam="${t}"][data-active]::after,
[data-voice-beam="${t}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${j(E)};
  padding: ${j(o)};
  clip-path: inset(0 round ${j(a)});
  background:
    ${Xe},
    ${qe};
  -webkit-mask:
    ${be(170,64,45)},
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    ${be(170,64,45)},
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  z-index: 2;
  ${ze("stroke",W)}
  ${fe}
}

/* Inner glow — soft light inside the element, faded off at the corners.
   With distortion on, this copy is clipped to ABOVE the band line (the
   polygon the driver writes each frame) and a mirror layer below carries
   the displacement filter, so only the glow under the line warps. */
${Qe(`[data-voice-beam="${t}"][data-active]::before,
[data-voice-beam="${t}"][data-fading]::before`,'content: "";',A?`clip-path: var(--vb-clip-above-${t}, inset(0 round ${a}px));`:`clip-path: inset(0 round ${a}px);`,fe)}
${A?Qe(`[data-voice-beam="${t}"][data-active] [data-voice-beam-warp="inner"],
[data-voice-beam="${t}"][data-fading] [data-voice-beam-warp="inner"]`,"display: block;",`clip-path: var(--vb-clip-below-${t}, inset(0 round ${a}px));`,H):""}

/* Bloom — the blurred halo, tallest of the three, above the content. */
[data-voice-beam="${t}"] [data-voice-beam-bloom],
[data-voice-beam="${t}"] [data-voice-beam-warp] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${j(E)};
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  opacity: 0;
}

[data-voice-beam="${t}"] [data-voice-beam-bloom],
[data-voice-beam="${t}"] [data-voice-beam-warp="bloom"] {
  -webkit-mask: ${be(200,130,35)};
  mask: ${be(200,130,35)};
  background: ${he};
  z-index: 3;
}

[data-voice-beam="${t}"][data-active] [data-voice-beam-bloom],
[data-voice-beam="${t}"][data-fading] [data-voice-beam-bloom] {
  display: block;
  clip-path: ${A?`var(--vb-clip-above-${t}, inset(0 round ${a}px))`:`inset(0 round ${a}px)`};
  ${ze("bloom",ae)}
  ${de}
}
${A?`
[data-voice-beam="${t}"][data-active] [data-voice-beam-warp="bloom"],
[data-voice-beam="${t}"][data-fading] [data-voice-beam-warp="bloom"] {
  display: block;
  clip-path: var(--vb-clip-below-${t}, inset(0 round ${a}px));
  ${ze("bloom",ae)}
  ${oe}
}

/* Processing drops the distortion: the driver marks the wrapper once the
   warp has faded out, the warp layers leave the paint and the base layers
   give up their split at the band line. */
[data-voice-beam="${t}"][data-voice-warp="off"]::before,
[data-voice-beam="${t}"][data-voice-warp="off"] [data-voice-beam-bloom] {
  clip-path: inset(0 round ${a}px);
}

[data-voice-beam="${t}"][data-voice-warp="off"] [data-voice-beam-warp] {
  display: none;
}`:""}

/* Epicentre — a soft white wash at the source, under the band line (the
   driver's clip; unclipped when no line is drawn), sitting above every
   glow layer and the band's halo so the centre reads lighter than the
   band (same z as the band canvases, painted after them). Sized by the voice like the
   other layers; off unless \`coreLight\` is set (the light theme sets it).
   Up to 1 it is the wash's opacity; past 1 the solid white core widens
   too, for a centre that stays lighter than a strong band. It follows the
   glow's presence but not \`strength\`, which would only dim it. */
${w>0?(()=>{const ie=Math.max(0,Math.min(2,w-1)),_e=Math.min(1,ie),ve=Math.max(0,ie-1),Ne=1+.3*ie,He=Y(45*_e+27*ve),Ue=Y(40+25*_e+15*ve),Ot=Math.min(1,.55+.35*_e+.1*ve).toFixed(2),Rt=Y(72+14*_e+8*ve);return`[data-voice-beam="${t}"] [data-voice-beam-core] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${j(E)};
  overflow: hidden;
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  /* The blur sits on this wrapper and the band-line clip on the child,
     so the cut edge is blurred too rather than left hard. */
  filter: blur(${j(x0(8,g))});
  z-index: 4;
}

[data-voice-beam="${t}"] [data-voice-beam-core] > div {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse calc(${Y(120*z*Ne*C)}px * var(--vb-w-${t}) * ${q}) calc((${Y(70*k*Ne*C)}px * var(--vb-h-${t}) + var(--vb-bh-${t})) * ${q}) at ${ue} calc(100% + var(--vb-cy-${t}) * ${q}), white 0%, white ${He}%, rgba(255, 255, 255, ${Ot}) ${Ue}%, transparent ${Rt}%);
  clip-path: var(--vb-clip-below-${t}, none);
}

[data-voice-beam="${t}"][data-active] [data-voice-beam-core],
[data-voice-beam="${t}"][data-fading] [data-voice-beam-core] {
  display: block;
  opacity: calc(var(--vb-opacity-${t}, 1) * min(1, var(--vb-glow-${t}) * ${Math.min(1,w).toFixed(2)} * ${(1.6+1.4*ie).toFixed(2)}) * var(--voice-core-light-opacity, 1));
}
`})():""}
/* Band — the canvas the driver draws the bend's contour on: an organic
   bell with chromatic fringes. Fades with the root, follows the strength
   and turns with the hue drift like the other layers. */
[data-voice-beam="${t}"] [data-voice-beam-band],
[data-voice-beam="${t}"] [data-voice-beam-band-halo] {
  display: none;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  z-index: 4;
}

[data-voice-beam="${t}"][data-active] [data-voice-beam-band],
[data-voice-beam="${t}"][data-fading] [data-voice-beam-band],
[data-voice-beam="${t}"][data-active] [data-voice-beam-band-halo],
[data-voice-beam="${t}"][data-fading] [data-voice-beam-band-halo] {
  display: block;
  opacity: calc(var(--vb-opacity-${t}, 1) * var(--voice-band-opacity, 1) * var(--voice-strength, 1));
  /* The blur vars are 0 where the canvas blurs its own strokes; where the
     2D context has no filter (WebKit) the driver sets them and the layers
     are blurred here instead — the ridge on the band canvas, its wider
     halo on the canvas beneath. */
  filter: blur(var(--vb-band-blur-${t}, 0px)) ${V} brightness(${G}) saturate(${J});
}

[data-voice-beam="${t}"][data-active] [data-voice-beam-band-halo],
[data-voice-beam="${t}"][data-fading] [data-voice-beam-band-halo] {
  filter: blur(var(--vb-band-halo-blur-${t}, 0px)) ${V} brightness(${G}) saturate(${J});
}

/* Resolution. The soft layers — inner light and its warp mirror, bloom and
   its mirror, the epicentre — are rastered at half size and scaled back
   up by the compositor: the box is halved, every length inside rides the
   layer's factor \`--vb-z\` at 0.5 (the driver also writes the band-line
   clips at half scale), and the will-change transform is rastered
   pre-scale where the engine does that (Chromium, Safari 18). For blurred
   gradients that is the same picture at a quarter of the raster and
   filter work, which is what a phone at 3x runs out of. The 1px stroke
   stays full-res on every screen: at half size it is half a CSS pixel,
   which a 3x phone rasters into a faint smear instead of the hairline,
   and the layer is cheap (no blur). The component sets
   \`data-voice-halfres\`. */
[data-voice-beam="${t}"][data-voice-halfres]::before,
[data-voice-beam="${t}"][data-voice-halfres] [data-voice-beam-warp],
[data-voice-beam="${t}"][data-voice-halfres] [data-voice-beam-bloom],
[data-voice-beam="${t}"][data-voice-halfres] [data-voice-beam-core] {
  --vb-z-${t}: 0.5;
  inset: auto;
  left: 0;
  top: 0;
  width: 50%;
  height: 50%;
  transform: translateZ(0) scale(2);
  transform-origin: 0 0;
}
${A?`[data-voice-beam="${t}"][data-voice-halfres][data-active]::before,
[data-voice-beam="${t}"][data-voice-halfres][data-fading]::before,
[data-voice-beam="${t}"][data-voice-halfres][data-active] [data-voice-beam-bloom],
[data-voice-beam="${t}"][data-voice-halfres][data-fading] [data-voice-beam-bloom] {
  clip-path: var(--vb-clip-above-z-${t}, inset(0 round ${j(a)}));
}
[data-voice-beam="${t}"][data-voice-halfres][data-active] [data-voice-beam-warp],
[data-voice-beam="${t}"][data-voice-halfres][data-fading] [data-voice-beam-warp] {
  clip-path: var(--vb-clip-below-z-${t}, inset(0 round ${j(a)}));
}
/* Processing (warp off): the mirrors are gone, so the base layers paint
   the whole box again — this must outweigh the split above. */
[data-voice-beam="${t}"][data-voice-halfres][data-voice-warp="off"]::before,
[data-voice-beam="${t}"][data-voice-halfres][data-voice-warp="off"] [data-voice-beam-bloom] {
  clip-path: inset(0 round ${j(a)});
}`:`[data-voice-beam="${t}"][data-voice-halfres][data-active]::before,
[data-voice-beam="${t}"][data-voice-halfres][data-fading]::before,
[data-voice-beam="${t}"][data-voice-halfres][data-active] [data-voice-beam-bloom],
[data-voice-beam="${t}"][data-voice-halfres][data-fading] [data-voice-beam-bloom] {
  clip-path: inset(0 round ${j(a)});
}`}
[data-voice-beam="${t}"][data-voice-halfres] [data-voice-beam-core] > div {
  clip-path: var(--vb-clip-below-z-${t}, none);
}
@keyframes vb-fade-in-${t} {
  to { --vb-opacity-${t}: 1; }
}

@keyframes vb-fade-out-${t} {
  from { --vb-opacity-${t}: 1; }
  to { --vb-opacity-${t}: 0; }
}

[data-voice-beam="${t}"][data-paused],
[data-voice-beam="${t}"][data-paused]::after,
[data-voice-beam="${t}"][data-paused]::before,
[data-voice-beam="${t}"][data-paused] [data-voice-beam-bloom] {
  animation-play-state: paused !important;
}
`}let es=null;function p5(){if(typeof window>"u")return null;const e=window;return e.AudioContext??e.webkitAudioContext??null}function m5(){const e=p5();return e?(es||(es=new e),es.state==="suspended"&&es.resume().catch(()=>{}),es):null}const M0=new WeakMap;function g5(e){const t=m5();if(!t||e.getAudioTracks().length===0)return null;let a=M0.get(e);a||(a={node:t.createMediaStreamSource(e),refs:0},M0.set(e,a)),a.refs+=1;const o=t.createAnalyser();o.fftSize=1024,o.smoothingTimeConstant=.5,a.node.connect(o);let r=!1;return{analyser:o,release:()=>{if(!r){r=!0;try{a.node.disconnect(o)}catch{}if(a.refs-=1,a.refs<=0){try{a.node.disconnect()}catch{}M0.delete(e)}}}}}const Eu={gather:0,offset:0,stretch:0,heldLevel:0,cornerFollow:0},i1=new WeakMap;function b5(e){let t=i1.get(e);return t||(t={level:0,bands:[0,0,0],phase:0,motion:{...Eu},t:0,lastTs:0,warp:1,drift:0,fast:0,fastBands:[0,0,0]},i1.set(e,t)),t}const Bi=new Set;new Float32Array(xr.length);new Float32Array(xr.length);let Pn=null,Sl=0;const x5=1e3/60-2,v5=22,M5=500,y5=4e3;let yi=0,y0=!1,ai=!1,$n=0,l1=0;const Du=Math.PI*2,w5=5,$5=1.7,k5=[[80,300],[300,2e3],[2e3,6e3]];function kn(e){return e<0?0:e>1?1:e}function S5(e,t){const a=t/2;return((e+a)%t+t)%t-a}function z5(e,t){const a=e/(t/2+4);return Math.max(0,1-a*a)}function c1(e,t){if(e<=t)return 0;const a=(e-t)/Math.max(.001,1-t);return kn((1-Math.exp(-3*a))/(1-Math.exp(-3)))}function ts(e,t,a,o,r){const n=t>e?o:r,s=1-Math.exp(-a/Math.max(.001,n));return e+(t-e)*s}const C5=2,A5=.06,_5=.35,R5=.03,h1=.03,F5=!(typeof navigator<"u"&&/AppleWebKit/.test(navigator.userAgent)&&!/Chrome\/|Chromium\/|Edg\/|OPR\//.test(navigator.userAgent)),u1=.05,O5=6,I5=12,P5=.1,f1=.1,W5=170,T5=64,d1=56;function E5(e,t,a,o){const r=e<0?1-o:1+o,n=Math.max(.05,a*r),s=Math.exp(-Math.pow(Math.abs(e)/n,t)),i=Math.exp(-Math.pow(1/n,t));return Math.max(0,(s-i)/(1-i))}function D5(e,t,a,o,r){if(a<=0||t<=0)return 0;const n=t*Math.max(0,Math.min(.98,o));if(e<=n)return 0;const s=Math.min(1,(e-n)/Math.max(1,t-n));return a*Math.pow(s,Math.max(.5,r))}function Hu(e,t,a){return Math.max(0,Math.min(e,t/2,a/2))}function zl(e,t,a,o=0){if(a<=0)return 0;const r=Math.min(e,t-e)-o;if(r>=a)return 0;if(r<=0)return a;const n=a-r;return a-Math.sqrt(Math.max(0,a*a-n*n))}function H5(e,t,a,o){const r=a/2+t.cx*t.w,n=W5*e.rangeWidth*t.w*t.mw,s=o*.82*Math.min(1,e.scale),i=Math.min(s,(T5*e.rangeHeight*t.h+t.lift)*e.bandPosition),l=o-e.bandOffset,h=Math.min(1,t.corner*4),d=e.bandTail*(1-h*h*(3-2*h)),u=d>.001,c=u?e.bandTailOverflow:0,f=u?-c:r-n,g=u?a+c:r+n,m=[];for(let x=0;x<=d1;x++){const v=f+(g-f)*x/d1,b=Math.max(-1,Math.min(1,(v-r)/Math.max(1,n))),y=(v<r?r:a-r)+c,$=E5(b,e.bandCurve,e.bandSpread,e.bandSkew)+D5(Math.abs(v-r),y,d,e.bandTailPosition,e.bandTailCurve),p=t.corner>0?zl(v,a,Hu(e.radius,a,o))*t.corner:0;m.push([v,l-i*$-p])}return m}function B5(e,t,a,o,r){for(const[n,s]of[["",1],["-z",.5]]){const i=u=>(u*s).toFixed(1)+"px",l=a.map(([u,c])=>`${i(u)} ${i(c)}`),h=`polygon(0 ${i(r)}, ${l.join(", ")}, ${i(o)} ${i(r)})`,d=`polygon(0 0, ${i(o)} 0, ${i(o)} ${i(r)}, ${l.slice().reverse().join(", ")}, 0 ${i(r)})`;e.style.setProperty(`--vb-clip-below${n}-${t}`,h),e.style.setProperty(`--vb-clip-above${n}-${t}`,d)}}function L5(e,t,a){let o=a;for(let i=0;i<t.length;i++)t[i][1]<o&&(o=t[i][1]);const r=Math.max(0,Math.min(.9,Math.floor((o-O5)/a/u1)*u1));if(r===e.filterTop)return;e.filterTop=r;const n=1+Math.max(P5,I5/a),s=e.filter;s.setAttribute("x",`${-f1*100}%`),s.setAttribute("width",`${(1+2*f1)*100}%`),s.setAttribute("y",`${(r*100).toFixed(0)}%`),s.setAttribute("height",`${((n-r)*100).toFixed(1)}%`)}function Y5(e,t,a){const{canvas:o,ctx:r,el:n,config:s}=e;if(!o||!r)return;const i=n.clientWidth,l=n.clientHeight;if(!i||!l)return;const h=Math.min(C5,typeof window<"u"&&window.devicePixelRatio||1),d=Math.round(i*h),u=Math.round(l*h);(o.width!==d||o.height!==u)&&(o.width=d,o.height=u),r.setTransform(h,0,0,h,0,0),r.clearRect(0,0,i,l);const c=e.haloCanvas,f=e.haloCtx;c&&f&&((c.width!==d||c.height!==u)&&(c.width=d,c.height=u),f.setTransform(h,0,0,h,0,0),f.clearRect(0,0,i,l));const g=Math.min(1,.6*s.bandStrength*t.strength);if(g<.005||s.bandWidth<=0)return;const m=s.theme==="dark",x=s.bandWidth*(1+.35*t.level),v=s.bandAberration*(.35+.65*t.level),b=(4+12*v)*s.scale,y=4*v*s.scale,$=(I,P)=>{r.beginPath(),r.moveTo(a[0][0]+I,a[0][1]+P);for(let T=1;T<a.length;T++)r.lineTo(a[T][0]+I,a[T][1]+P)},p={r:s.bandColors.above,g:s.bandColors.mid,c:s.bandColors.core,b:s.bandColors.below},M=(m?.42:.4)*g,w=14*x,z=3.5*s.bandWidth/2,k=z*h,F=typeof r.filter=="string",S=F?"0px":`${z.toFixed(2)}px`;e.cssBlur!==S&&(n.style.setProperty(`--vb-band-blur-${s.id}`,S),n.style.setProperty(`--vb-band-halo-blur-${s.id}`,F?"0px":`${(z*3).toFixed(2)}px`),e.cssBlur=S);const _=[[1,.16],[.72,.2],[.46,.26],[.22,.34]],A=[{rgb:p.r,a:1,ox:y,oy:-b},{rgb:p.g,a:.55,ox:y*.35,oy:-b*.35},{rgb:p.b,a:1,ox:-y,oy:b},{rgb:p.c,a:.9,ox:0,oy:0}];r.lineCap="round",r.lineJoin="round",r.globalCompositeOperation="source-over";const C=a[0][0],R=a[a.length-1][0],O=(I,P)=>{const T=r.createLinearGradient(C,0,R,0),Y=s.bandTail>0?.015:.18;return T.addColorStop(0,`rgba(${I}, 0)`),T.addColorStop(Y,`rgba(${I}, ${P.toFixed(3)})`),T.addColorStop(1-Y,`rgba(${I}, ${P.toFixed(3)})`),T.addColorStop(1,`rgba(${I}, 0)`),T},E=!F&&f?f:r;F&&(r.filter=`blur(${(k*3).toFixed(1)}px)`),E.lineCap="round",E.lineJoin="round",E.strokeStyle=O(p.c,M*.3),E.lineWidth=w*2.2,E.beginPath(),E.moveTo(a[0][0],a[0][1]);for(let I=1;I<a.length;I++)E.lineTo(a[I][0],a[I][1]);E.stroke(),F&&(r.filter=`blur(${k.toFixed(1)}px)`);for(const I of A)for(const[P,T]of _)r.strokeStyle=O(I.rgb,M*I.a*T),r.lineWidth=Math.max(.6,w*P),$(I.ox,I.oy),r.stroke();F&&(r.filter="none"),r.globalCompositeOperation="source-over"}function X5(e){return(1-Math.cos(Du*e))/2}function N5(e,t){const a=e.analyser,o=e.time,r=e.freq;a.getFloatTimeDomainData(o);let n=0;for(let i=0;i<o.length;i++)n+=o[i]*o[i];t.level=Math.sqrt(n/o.length)*w5*e.config.sensitivity,a.getByteFrequencyData(r);const s=a.context.sampleRate/a.fftSize;for(let i=0;i<3;i++){const[l,h]=k5[i],d=Math.max(0,Math.floor(l/s)),u=Math.min(r.length-1,Math.ceil(h/s));let c=0;for(let g=d;g<=u;g++)c+=r[g];const f=u>=d?c/(u-d+1)/255:0;t.bands[i]=f*$5*e.config.sensitivity}}const Wr={level:0,bands:[0,0,0]};function Bu(e){Pn=requestAnimationFrame(Bu);const t=yi?e-yi:0;if(yi=e,y0){if(ai=!ai,ai)return;e>=l1&&(y0=!1,$n=0)}else t>v5?$n?e-$n>M5&&(y0=!0,ai=!1,l1=e+y5):$n=e:$n=0;e-Sl<x5||(Sl=e,Bi.forEach(a=>{var o,r;const{el:n,config:s,source:i,s:l}=a,h=s.paused;if(h&&a.paintedConfig===s)return;const d=h?0:l.lastTs?Math.min(.05,(e-l.lastTs)/1e3):1/60;l.lastTs=e,l.t+=d;const u=l.t;if(!h)if(a.analyser)N5(a,Wr);else{const X=i.getLevel?kn(i.getLevel()):0;Wr.level=X,Wr.bands[0]=X,Wr.bands[1]=X*(.72+.28*Math.sin(u*9.1)),Wr.bands[2]=X*(.6+.4*Math.sin(u*13.7+2))}const c=c1(Wr.level,s.threshold);l.level=ts(l.level,c,d,s.attack,s.release);for(let X=0;X<3;X++){const K=c1(Wr.bands[X],s.threshold*.6);l.bands[X]=ts(l.bands[X],K,d,s.attack,s.release*1.15),a.surface&&(l.fastBands[X]=ts(l.fastBands[X],K,d,s.attack*.6,h1))}a.surface&&(l.fast=ts(l.fast,c,d,s.attack*.6,h1));const f=c5*s.lobeSpacing;if(!h){const X=(o=i.getMotion)==null?void 0:o.call(i);l.motion=X?{gather:kn(X.gather),offset:X.offset??0,stretch:kn(X.stretch??0),heldLevel:kn(X.heldLevel??0),cornerFollow:kn(X.cornerFollow??0)}:Eu}const g=l.motion,m=g.gather,x=n.clientWidth,v=n.clientHeight,b=s.reducedMotion?0:g.offset*f/2,y=1-m*.6,$=1-m*.45,p=1+m*.3*g.stretch,M=s.reducedMotion?.5:.5+.5*Math.sin(Du*u/s.breatheDuration),w=l.level+(1-l.level)*s.idle*M,z=Math.max(0,Math.min(1,(m-.25)/.75)),k=z*z*(3-2*z),F=Math.max(w,g.heldLevel*k),S=.15+.85*F,_=.5+s.reach*F,A=(.85+s.spread*F)*p;s.flow!==0&&!s.reducedMotion&&(l.phase=((l.phase+s.flow*F*d)%f+f)%f,l.drift+=s.flow*F*d),n.style.setProperty(`--vb-level-${s.id}`,l.level.toFixed(3)),n.style.setProperty(`--vb-cx-${s.id}`,`${b.toFixed(1)}px`),n.style.setProperty(`--vb-mw-${s.id}`,$.toFixed(3));const C=s.bend*F;n.style.setProperty(`--vb-bh-${s.id}`,`${Math.max(0,C).toFixed(1)}px`);const R=s.bend>0?Math.min(1,C/s.bend):0;n.style.setProperty(`--vb-bendA-${s.id}`,R.toFixed(3));const O={cx:b,w:A,h:_,mw:$,lift:C,strength:R,level:l.level,corner:m},E=x/2+b*A,I=30*s.scale*A,P=Hu(s.radius,x,v),T=m*g.cornerFollow;n.style.setProperty(`--vb-cy-${s.id}`,`${(-zl(E,x,P,I*1.4)*T).toFixed(1)}px`),l.warp=ts(l.warp,m>.02?0:1,d,_5,A5);const Y=l.warp,q=a.displace!=null&&Y<R5;if(q!==a.warpOff&&(a.warpOff=q,q?n.setAttribute("data-voice-warp","off"):n.removeAttribute("data-voice-warp")),x&&v&&(a.ctx||a.displace)){const X=H5(s,O,x,v);(a.displace&&!q||s.coreLight>0)&&B5(n,s.id,X,x,v),a.filter&&!q&&F5&&L5(a,X,v),a.ctx&&Y5(a,O,X)}if(a.displace&&!q){const X=s.reducedMotion?0:s.distortion*120*s.scale*(.15+.85*F)*Y;a.displace.scale.baseVal=X,a.noiseShift&&(a.noiseShift.dx.baseVal=8*s.scale*Math.sin(u*.9),a.noiseShift.dy.baseVal=4*s.scale*Math.sin(u*.6+1.3))}n.style.setProperty(`--vb-glow-${s.id}`,S.toFixed(3)),n.style.setProperty(`--vb-h-${s.id}`,_.toFixed(3)),n.style.setProperty(`--vb-w-${s.id}`,A.toFixed(3));for(let X=0;X<xr.length;X++){const K=xr[X],Q=S5(K.x*s.lobeSpacing+l.phase,f),W=s.bands?.6+.7*l.bands[K.band]:1;n.style.setProperty(`--vb-x${X}-${s.id}`,`${(Q*y).toFixed(1)}px`),n.style.setProperty(`--vb-l${X}-${s.id}`,(W*z5(Q,f)).toFixed(3));const N=x/2+(b+Q*y)*A;n.style.setProperty(`--vb-y${X}-${s.id}`,`${(-zl(N,x,P,I)*T).toFixed(1)}px`)}const j=s.staticColors||s.reducedMotion||s.hueRange===0?0:-s.hueRange+2*s.hueRange*X5(u/s.hueDuration);n.style.setProperty(`--vb-hue-${s.id}`,`${j.toFixed(2)}deg`),(r=a.onLevel)==null||r.call(a,l.level),a.paintedConfig=s}))}function j5(){Pn==null&&(Sl=0,yi=0,$n=0,Pn=requestAnimationFrame(Bu))}function q5(){Bi.size===0&&Pn!=null&&(cancelAnimationFrame(Pn),Pn=null)}function G5(e,t,a,o){const r={el:e,config:t,source:a,onLevel:o,analyser:null,releaseAnalyser:null,time:null,freq:null,canvas:null,ctx:null,haloCanvas:null,haloCtx:null,displace:null,noiseShift:null,filter:null,filterTop:-1,s:b5(e),paintedConfig:null,cssBlur:null,warpOff:e.hasAttribute("data-voice-warp"),surface:null};t.distortion>0&&(r.displace=e.querySelector(":scope > svg feDisplacementMap"),r.noiseShift=e.querySelector(":scope > svg feOffset"),r.filter=e.querySelector(":scope > svg filter"));const n=e.querySelector(":scope > [data-voice-beam-band]");if(n){r.canvas=n,r.ctx=n.getContext("2d");const s=e.querySelector(":scope > [data-voice-beam-band-halo]");s&&(r.haloCanvas=s,r.haloCtx=s.getContext("2d"))}if(r.s.lastTs=0,a.stream){const s=g5(a.stream);s&&(r.analyser=s.analyser,r.releaseAnalyser=s.release,r.time=new Float32Array(s.analyser.fftSize),r.freq=new Uint8Array(s.analyser.frequencyBinCount))}return Bi.add(r),j5(),()=>{var s;Bi.delete(r),(s=r.releaseAnalyser)==null||s.call(r),q5()}}const U5={scale:1,glowSize:1,strokeOpacity:1,innerOpacity:1,bloomOpacity:1,idle:.18,reach:1.2,spread:1.05,flow:48,bend:60,bandStrength:1.55,bandWidth:2.15,bandPosition:.35,bandCurve:1.75,bandSpread:.87,bandSkew:.12,bandOffset:-27,bandTail:.59,bandTailPosition:.67,bandTailCurve:2.4,bandTailOverflow:15,bandAberration:.89,distortion:.62,distortionDetail:2.3,glowWidth:.65,glowHeight:1.25,lobeSpacing:.85,rangeWidth:.75,rangeHeight:1,softness:1.07,coreSize:1,coreLight:0,coreLightWidth:1,coreLightHeight:1,strokeScale:1,innerScale:1,innerHeight:1,bloomScale:1,bloomHeight:1},V5={default:{},pill:{scale:.45,glowSize:.95,strokeOpacity:1.2,innerOpacity:.85,reach:1.35,spread:1.1,flow:0,bend:23,bandStrength:1.55,bandWidth:1.85,bandCurve:1.95,bandSpread:.38,bandOffset:-16,bandTail:0,distortion:.45,distortionDetail:3,glowWidth:.65,glowHeight:.95,lobeSpacing:.45,rangeWidth:.8,rangeHeight:.7,softness:.88,coreSize:.25,strokeScale:1.25,innerScale:.95,bloomScale:1.05,bloomHeight:2.25},mobile:{scale:1.25,spread:.45,reach:3,flow:60,bend:70,bandWidth:2.4,bandCurve:1.55,bandSpread:.9,bandOffset:-50,bandTail:.62,bandTailPosition:.42,bandTailCurve:2.7,bandTailOverflow:22,bandStrength:1.8,distortionDetail:2,glowWidth:1.15,glowHeight:2.1,lobeSpacing:1.35,rangeWidth:1.25,rangeHeight:1.2,softness:1.1}},K5={default:{brightness:1.15},pill:{brightness:1.35,saturation:1.5},mobile:{strength:1,brightness:1.2,saturation:1.5}},Q5={default:{},pill:{},mobile:{strength:1}};function Z5(e="default",t="dark"){return(t==="light"?Q5[e]:void 0)??K5[e]}const J5={default:{bandStrength:1.7},pill:{bandStrength:2},mobile:{bandStrength:1.7}};function eg(e="default",t="dark"){const a=V5[e],o={};return t==="light"&&(a.reach===void 0&&(o.reach=1.8),a.spread===void 0&&(o.spread=.8),a.coreLight===void 0&&(o.coreLight=1.8)),{...U5,...o,...a,...t==="light"?J5[e]:void 0}}const oi={dark:{core:"255, 255, 255",above:"255, 70, 80",mid:"90, 255, 150",below:"80, 140, 255"},light:{core:"197, 139, 255",above:"255, 122, 182",mid:"126, 196, 255",below:"45, 255, 171"}},tg=1,ag=16,og=6e4,p1=typeof navigator<"u"&&/AppleWebKit/.test(navigator.userAgent)&&!/Chrome\/|Chromium\/|Edg\/|OPR\//.test(navigator.userAgent),rg=(()=>{if(typeof document>"u")return!0;const e=document.createElement("canvas").getContext("2d");return!!e&&typeof e.filter=="string"})();function ng(){const[e,t]=L.useState(()=>typeof window>"u"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return L.useEffect(()=>{if(typeof window>"u")return;const a=window.matchMedia("(prefers-color-scheme: dark)"),o=r=>t(r.matches?"dark":"light");return a.addEventListener("change",o),()=>a.removeEventListener("change",o)},[]),e}function sg(){const[e,t]=L.useState(()=>typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches);return L.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const a=window.matchMedia("(prefers-reduced-motion: reduce)"),o=r=>t(r.matches);return a.addEventListener("change",o),()=>a.removeEventListener("change",o)},[]),e}function ig(e,t){return e==="auto"?t:e}const lg=L.forwardRef(function({children:e,type:t="default",look:a="glow",dotSize:o=1,dotGap:r=1,dotShape:n="round",lineWidth:s=1,lineGap:i=1,linePattern:l="rows",seeThrough:h=!1,texture:d=.6,gravity:u=1,surfaceHeight:c=1,surfaceCurve:f=1,surfaceTail:g=0,surfaceTailPosition:m=.6,surfaceTailCurve:x=2.4,surfaceFade:v=.2,scale:b,stream:y=null,level:$=0,sensitivity:p=3.1,threshold:M=.015,attack:w=.325,release:z=.86,idle:k,breatheDuration:F=5.2,reach:S,spread:_,bands:A=!0,flow:C,motion:R=null,colorVariant:O="colorful",colors:E,bandColors:I,theme:P="dark",staticColors:T=!1,hueRange:Y,hueDuration:q,active:j=!0,paused:X=!1,borderRadius:K,brightness:Q,saturation:W,glowSize:N,strokeOpacity:ae,innerOpacity:G,bloomOpacity:J,bend:V,bandStrength:U,bandWidth:fe,bandPosition:H,bandCurve:de,bandSpread:oe,bandSkew:ue,bandOffset:te,bandTail:Xe,bandTailPosition:qe,bandTailCurve:ge,bandTailOverflow:he,bandAberration:be,distortion:ze,distortionDetail:Qe,glowWidth:ie,glowHeight:_e,lobeSpacing:ve,rangeWidth:Ne,rangeHeight:He,softness:Ue,coreSize:Ot,coreLight:Rt,coreLightWidth:Wt,coreLightHeight:ta,strokeScale:$t,innerScale:aa,innerHeight:Ut,bloomScale:la,bloomHeight:nt,strength:At,className:re,style:we,css:Be,onLevel:ee,onActivate:pe,onDeactivate:Me,onAnimationEnd:me,...ye},Re){const at=L.useId().replace(/:/g,"-"),Ve=ng(),$e=ig(P,Ve),_t=E?E.join("|"):"",dt=I?[I.core,I.above,I.mid,I.below].join("|"):"",Ce=eg(t,$e),ht=Math.max(.05,b??Ce.scale),vt=N??Ce.glowSize,zt=ae??Ce.strokeOpacity,Ht=G??Ce.innerOpacity,It=J??Ce.bloomOpacity,st=k??Ce.idle,Ze=S??Ce.reach,et=_??Ce.spread,kt=(C??Ce.flow)*ht,_a=(V??Ce.bend)*ht,ao=U??Ce.bandStrength,ja=(fe??Ce.bandWidth)*ht,qa=H??Ce.bandPosition,Ga=de??Ce.bandCurve,Je=oe??Ce.bandSpread,Ua=ue??Ce.bandSkew,Ra=(te??Ce.bandOffset)*ht,Fa=Xe??Ce.bandTail,go=qe??Ce.bandTailPosition,Vo=ge??Ce.bandTailCurve,oo=(he??Ce.bandTailOverflow)*ht,bo=be??Ce.bandAberration,Gn=ze??Ce.distortion,wr=(Qe??Ce.distortionDetail)/ht,je=(ie??Ce.glowWidth)*ht,it=(_e??Ce.glowHeight)*ht,yt=(ve??Ce.lobeSpacing)*ht,Et=(Ne??Ce.rangeWidth)*ht,oa=(He??Ce.rangeHeight)*ht,xa=Ue??Ce.softness,ea=(Ot??Ce.coreSize)*ht,da=Math.max(0,Math.min(3,Rt??Ce.coreLight)),Bt=Wt??Ce.coreLightWidth,Pa=ta??Ce.coreLightHeight,ga=$t??Ce.strokeScale,ro=aa??Ce.innerScale,xo=Ut??Ce.innerHeight,Wa=la??Ce.bloomScale,Ta=nt??Ce.bloomHeight,vo=sg(),$r=L.useRef(null),[Po,Ma]=L.useState(j),[Ea,ln]=L.useState(!1),[ya,Da]=L.useState(!0),[kr,Un]=L.useState(null),[Wo,Mo]=L.useState(0);L.useEffect(()=>{if(!p1)return;const Z=$r.current;if(!Z)return;const ne=()=>Mo(Z.clientWidth*Z.clientHeight);if(ne(),typeof ResizeObserver>"u")return;const xe=new ResizeObserver(ne);return xe.observe(Z),()=>xe.disconnect()},[]);const Ko="glow",Vn=!1,yo=p1&&Wo>og?0:Gn;L.useEffect(()=>{if(K!=null)return;const Z=$r.current;if(!Z)return;const ne=()=>{const Ae=Z.firstElementChild;if(!Ae)return;const ke=getComputedStyle(Ae),Ge=parseFloat(ke.borderTopLeftRadius);!isNaN(Ge)&&Ge>0&&Un(Ge)};ne();const xe=new MutationObserver(ne);return xe.observe(Z,{childList:!0,subtree:!1}),()=>xe.disconnect()},[K,e]),L.useEffect(()=>{j&&!Po&&!Ea?Ma(!0):!j&&Po&&!Ea&&ln(!0)},[j,Po,Ea]),L.useEffect(()=>{const Z=$r.current;if(!Z||typeof IntersectionObserver>"u")return;const ne=new IntersectionObserver(xe=>{for(const Ae of xe)Da(Ae.isIntersecting)},{rootMargin:"256px"});return ne.observe(Z),()=>ne.disconnect()},[]);const Kn=L.useCallback(Z=>{const ne=Z.animationName;ne.includes("fade-out")?(Ma(!1),ln(!1),Me?.()):ne.includes("fade-in")&&pe?.(),me?.(Z)},[pe,Me,me]),wa=i5[$e],Sr=K??kr??ag,cn=Z5(t,$e),Bs=At??cn.strength??wa.strength??1,zr=Y??wa.hueRange??24,Ls=q??wa.hueDuration??12,hn=Q??cn.brightness??wa.brightness,Ys=W??cn.saturation??wa.saturation,Qo=L.useMemo(()=>d5({id:at,borderRadius:Sr,borderWidth:tg,strokeOpacity:wa.strokeOpacity*zt,innerOpacity:wa.innerOpacity*Ht,bloomOpacity:wa.bloomOpacity*It,innerShadow:wa.innerShadow,colorVariant:O,colors:E,brightness:hn,saturation:Ys,theme:$e,hueBase:wa.hueBase??0,glowSize:vt*ht,glowWidth:je,glowHeight:it,strokeScale:ga,innerScale:ro,innerHeight:xo,bloomScale:Wa,bloomHeight:Ta,coreSize:ea,coreLight:da,coreLightWidth:Bt,coreLightHeight:Pa,rangeWidth:Et,rangeHeight:oa,softness:xa,distortion:yo>0,scale:ht}),[at,Sr,wa,O,_t,hn,Ys,$e,Ce,vt,zt,Ht,It,ht,je,it,ga,ro,xo,Wa,Ta,ea,da,Bt,Pa,Et,oa,xa,yo>0,Ko]),Cr=L.useMemo(()=>({id:at,sensitivity:Math.max(0,p),threshold:Math.max(0,Math.min(.95,M)),attack:Math.max(0,w),release:Math.max(0,z),idle:Math.max(0,Math.min(1,st)),breatheDuration:Math.max(.2,F),reach:Math.max(0,Ze),spread:Math.max(0,et),bands:A,flow:kt,lobeSpacing:Math.max(.1,yt),bend:Math.max(0,_a),bandStrength:Math.max(0,ao),bandWidth:Math.max(0,ja),bandPosition:Math.max(0,qa),bandCurve:Math.max(.3,Ga),bandSpread:Math.max(.05,Je),bandSkew:Math.max(-.9,Math.min(.9,Ua)),bandOffset:Ra,bandTail:Math.max(0,Math.min(1.5,Fa)),bandTailPosition:Math.max(0,Math.min(.98,go)),bandTailCurve:Math.max(.5,Vo),bandTailOverflow:Math.max(0,oo),bandAberration:Math.max(0,Math.min(1,bo)),rangeWidth:Et,rangeHeight:oa,theme:$e,bandColors:{core:I?.core&&ti(I.core)||oi[$e].core,above:I?.above&&ti(I.above)||oi[$e].above,mid:I?.mid&&ti(I.mid)||oi[$e].mid,below:I?.below&&ti(I.below)||oi[$e].below},distortion:Math.max(0,Math.min(1,yo)),coreLight:da,scale:ht,radius:Sr,hueRange:Math.max(0,zr),hueDuration:Math.max(.5,Ls),staticColors:O==="mono"?!0:T,reducedMotion:vo,paused:X,look:Ko,dotSize:Math.max(.1,o),dotGap:Math.max(.3,r),dotShape:n==="square"?"square":"round",lineWidth:Math.max(.05,s),lineGap:Math.max(.3,i),linePattern:l==="columns"||l==="grid"?l:"rows",seeThrough:h,texture:Math.max(0,Math.min(1,d)),gravity:Math.max(.05,u),surfaceHeight:Math.max(.1,c),surfaceCurve:Math.max(-3,Math.min(5,f)),surfaceTail:Math.max(-2,Math.min(3,g)),surfaceTailPosition:Math.max(0,Math.min(.98,m)),surfaceTailCurve:Math.max(.5,x),surfaceFade:Math.max(0,Math.min(1,v)),layers:{glowWidth:je,glowHeight:it,innerScale:ro,innerHeight:xo,bloomScale:Wa,bloomHeight:Ta,strokeScale:ga,softness:xa,coreSize:ea,innerOpacity:Ht,bloomOpacity:It,strokeOpacity:zt,brightness:hn}}),[at,p,M,w,z,st,F,Ze,et,A,kt,yt,_a,ao,ja,qa,Ga,Je,Ua,Ra,Fa,go,Vo,oo,bo,Et,oa,$e,dt,yo,da,ht,Sr,zr,Ls,T,O,vo,X,Ko,o,r,n,s,i,l,h,d,u,c,f,g,m,x,v,je,it,ro,xo,Wa,Ta,ga,xa,ea,Ht,It,zt,hn]),Xs=L.useRef($);Xs.current=$;const un=L.useRef(ee);un.current=ee;const B=L.useRef(R);B.current=R,L.useEffect(()=>{if(!(Po||Ea)||!ya)return;const Z=$r.current;return Z?G5(Z,Cr,{stream:y,getLevel:()=>{const ne=Xs.current;return typeof ne=="function"?ne():ne},getMotion:()=>{const ne=B.current;return typeof ne=="function"?ne():ne}},ne=>{var xe;return(xe=un.current)==null?void 0:xe.call(un,ne)}):void 0},[Cr,y,Po,Ea,ya]);const se=L.useCallback(Z=>{$r.current=Z,typeof Re=="function"?Re(Z):Re&&(Re.current=Z)},[Re]),le={...we??{},"--voice-strength":Math.max(0,Math.min(1,Bs))};return D.jsxs(D.Fragment,{children:[D.jsx("style",{children:Be?`${Qo}
${Be.split("{id}").join(at)}`:Qo}),D.jsxs("div",{...ye,ref:se,"data-voice-beam":at,"data-voice-type":t,"data-voice-look":Ko,"data-voice-halfres":"","data-active":Po&&!Ea?"":void 0,"data-fading":Ea?"":void 0,"data-paused":Po&&!Ea&&(!ya||X)?"":void 0,"data-listening":y?"":void 0,className:re,style:le,onAnimationEnd:Kn,children:[e,Vn,D.jsx("div",{"data-voice-beam-bloom":!0}),yo>0&&D.jsxs(D.Fragment,{children:[D.jsx("div",{"data-voice-beam-warp":"inner"}),D.jsx("div",{"data-voice-beam-warp":"bloom"})]}),!rg&&D.jsx("canvas",{"data-voice-beam-band-halo":!0,"aria-hidden":"true"}),D.jsx("canvas",{"data-voice-beam-band":!0,"aria-hidden":"true"}),da>0&&D.jsx("div",{"data-voice-beam-core":!0,children:D.jsx("div",{})}),yo>0&&D.jsx("svg",{"aria-hidden":"true",width:"0",height:"0",style:{position:"absolute",pointerEvents:"none"},children:D.jsxs("filter",{id:`vb-distort-${at}`,x:"-20%",y:"-20%",width:"140%",height:"140%",colorInterpolationFilters:"sRGB",children:[D.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:`${(.012*wr).toFixed(4)} ${(.05*wr).toFixed(4)}`,numOctaves:2,seed:7,result:"noise"}),D.jsx("feOffset",{in:"noise",dx:"0",dy:"0",result:"moved"}),D.jsx("feColorMatrix",{in:"moved",type:"matrix",values:"1 0 0 0 0  0 0 0 0 0.5  0 0 0 0 0  0 0 0 0 1",result:"map"}),D.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"map",scale:0,xChannelSelector:"R",yChannelSelector:"G"})]})})]})]})}),Li={clover:{label:"Clover",color:"#41C4FF",face:"eyes",faceX:50,faceY:50,faceScale:1,brightness:1.2,saturation:1.59},flower:{label:"Flower",color:"#2FCB7A",face:"eyes",faceX:50,faceY:51,faceScale:.95},triangle:{label:"Triangle",color:"#DC48FF",face:"eyes",faceX:50,faceY:61,faceScale:.9},square:{label:"Square",color:"#35B8FF",face:"eyes",faceX:50,faceY:50,faceScale:1},blob:{label:"Blob",color:"#2FCB7A",face:"eyes",faceX:49.5,faceY:50,faceScale:1},ghost:{label:"Ghost",color:"#F4F2FA",face:"eyes",faceX:50,faceY:48,faceScale:.95},circle:{label:"Circle",color:"#9A62FF",face:"eyes",faceX:50,faceY:50,faceScale:1},drop:{label:"Drop",color:"#1ED3C6",face:"eyes",faceX:50,faceY:62,faceScale:.9},star:{label:"Star",color:"#EFDB8E",face:"eyes",faceX:50,faceY:52,faceScale:.82,brightness:1.1,saturation:1.84},droid:{label:"Droid",color:"#D5DBEA",face:"eyes",faceX:50,faceY:60,faceScale:.95},mech:{label:"Mech",color:"#95A6C4",face:"eyes",faceX:50,faceY:59,faceScale:1},alien:{label:"Alien",color:"#9CD66A",face:"eyes",faceX:50,faceY:45,faceScale:1.05},hexagon:{label:"Hexagon",color:"#EB7575",face:"eyes",faceX:50,faceY:50,faceScale:.95},cat:{label:"Cat",color:"#EAA06F",face:"eyes",faceX:50,faceY:58,faceScale:1,brightness:1.22,saturation:1.88},cloud:{label:"Cloud",color:"#CFD5E4",face:"eyes",faceX:50,faceY:58,faceScale:.95},pill:{label:"Pill",color:"#ACAAF3",face:"eyes",faceX:50,faceY:50,faceScale:.9},pebble:{label:"Pebble",color:"#ABC793",face:"eyes",faceX:50,faceY:50,faceScale:.95},puddle:{label:"Puddle",color:"#EE8BDB",face:"eyes",faceX:50,faceY:50,faceScale:.95}},cg=Object.keys(Li);Object.fromEntries(cg.map(e=>[e,Li[e].color]));const m1={default:"idle",working:"working",sleeping:"sleeping"},g1={clover:"M26.53 22.38A25 25 0 0 1 73.47 22.38A7 7 0 0 0 77.62 26.53A25 25 0 0 1 77.62 73.47A7 7 0 0 0 73.47 77.62A25 25 0 0 1 26.53 77.62A7 7 0 0 0 22.38 73.47A25 25 0 0 1 22.38 26.53A7 7 0 0 0 26.53 22.38Z",flower:"M31.2 19.82A20.5 20.5 0 0 1 68.8 19.82A5 5 0 0 0 72.9 22.8A20.5 20.5 0 0 1 84.51 58.55A5 5 0 0 0 82.95 63.37A20.5 20.5 0 0 1 52.54 85.47A5 5 0 0 0 47.46 85.47A20.5 20.5 0 0 1 17.05 63.37A5 5 0 0 0 15.49 58.55A20.5 20.5 0 0 1 27.1 22.8A5 5 0 0 0 31.2 19.82Z",triangle:"M38.75 27.43A13 13 0 0 1 61.25 27.43L82.7 64.49A13 13 0 0 1 71.45 84L28.55 84A13 13 0 0 1 17.3 64.49L38.75 27.43Z",square:"M93 50C93 53.66 92.96 58.23 92.88 60.97C92.8 63.71 92.67 64.81 92.51 66.44C92.35 68.08 92.15 69.44 91.9 70.77C91.66 72.1 91.37 73.3 91.04 74.44C90.72 75.58 90.35 76.63 89.94 77.63C89.53 78.63 89.07 79.55 88.58 80.43C88.08 81.31 87.54 82.13 86.96 82.9C86.37 83.67 85.75 84.39 85.07 85.07C84.39 85.75 83.67 86.37 82.9 86.96C82.13 87.54 81.31 88.08 80.43 88.58C79.55 89.07 78.63 89.53 77.63 89.94C76.63 90.35 75.58 90.72 74.44 91.04C73.3 91.37 72.1 91.66 70.77 91.9C69.44 92.15 68.08 92.35 66.44 92.51C64.81 92.67 63.71 92.8 60.97 92.88C58.23 92.96 53.66 93 50 93C46.34 93 41.77 92.96 39.03 92.88C36.29 92.8 35.19 92.67 33.56 92.51C31.92 92.35 30.56 92.15 29.23 91.9C27.9 91.66 26.7 91.37 25.56 91.04C24.42 90.72 23.37 90.35 22.37 89.94C21.37 89.53 20.45 89.07 19.57 88.58C18.69 88.08 17.87 87.54 17.1 86.96C16.33 86.37 15.61 85.75 14.93 85.07C14.25 84.39 13.63 83.67 13.04 82.9C12.46 82.13 11.92 81.31 11.42 80.43C10.93 79.55 10.47 78.63 10.06 77.63C9.65 76.63 9.28 75.58 8.96 74.44C8.63 73.3 8.34 72.1 8.1 70.77C7.85 69.44 7.65 68.08 7.49 66.44C7.33 64.81 7.2 63.71 7.12 60.97C7.04 58.23 7 53.66 7 50C7 46.34 7.04 41.77 7.12 39.03C7.2 36.29 7.33 35.19 7.49 33.56C7.65 31.92 7.85 30.56 8.1 29.23C8.34 27.9 8.63 26.7 8.96 25.56C9.28 24.42 9.65 23.37 10.06 22.37C10.47 21.37 10.93 20.45 11.42 19.57C11.92 18.69 12.46 17.87 13.04 17.1C13.63 16.33 14.25 15.61 14.93 14.93C15.61 14.25 16.33 13.63 17.1 13.04C17.87 12.46 18.69 11.92 19.57 11.42C20.45 10.93 21.37 10.47 22.37 10.06C23.37 9.65 24.42 9.28 25.56 8.96C26.7 8.63 27.9 8.34 29.23 8.1C30.56 7.85 31.92 7.65 33.56 7.49C35.19 7.33 36.29 7.2 39.03 7.12C41.77 7.04 46.34 7 50 7C53.66 7 58.23 7.04 60.97 7.12C63.71 7.2 64.81 7.33 66.44 7.49C68.08 7.65 69.44 7.85 70.77 8.1C72.1 8.34 73.3 8.63 74.44 8.96C75.58 9.28 76.63 9.65 77.63 10.06C78.63 10.47 79.55 10.93 80.43 11.42C81.31 11.92 82.13 12.46 82.9 13.04C83.67 13.63 84.39 14.25 85.07 14.93C85.75 15.61 86.37 16.33 86.96 17.1C87.54 17.87 88.08 18.69 88.58 19.57C89.07 20.45 89.53 21.37 89.94 22.37C90.35 23.37 90.72 24.42 91.04 25.56C91.37 26.7 91.66 27.9 91.9 29.23C92.15 30.56 92.35 31.92 92.51 33.56C92.67 35.19 92.8 36.29 92.88 39.03C92.96 41.77 93 46.34 93 50Z",blob:"M93.92 50C94.18 51.9 94.24 53.9 93.99 55.79C93.73 57.68 93.18 59.61 92.39 61.36C91.6 63.1 90.48 64.78 89.27 66.27C88.07 67.76 86.58 69.08 85.14 70.29C83.7 71.49 82.1 72.5 80.62 73.5C79.14 74.49 77.64 75.34 76.24 76.24C74.84 77.15 73.51 78 72.2 78.93C70.88 79.86 69.66 80.83 68.36 81.8C67.06 82.76 65.78 83.82 64.39 84.74C63 85.67 61.55 86.63 60.01 87.35C58.47 88.08 56.82 88.73 55.15 89.1C53.48 89.47 51.71 89.64 50 89.57C48.29 89.5 46.55 89.16 44.91 88.68C43.27 88.21 41.67 87.47 40.16 86.72C38.65 85.96 37.24 85.02 35.86 84.13C34.48 83.24 33.19 82.29 31.89 81.37C30.58 80.46 29.32 79.56 28.03 78.63C26.74 77.71 25.44 76.82 24.16 75.84C22.88 74.86 21.57 73.87 20.36 72.74C19.15 71.62 17.95 70.42 16.91 69.1C15.88 67.79 14.92 66.35 14.15 64.85C13.38 63.35 12.76 61.73 12.29 60.1C11.81 58.48 11.52 56.78 11.29 55.1C11.06 53.41 10.98 51.71 10.91 50C10.83 48.29 10.83 46.59 10.83 44.84C10.84 43.1 10.85 41.34 10.93 39.53C11.02 37.72 11.09 35.86 11.34 33.99C11.59 32.12 11.88 30.16 12.43 28.31C12.99 26.46 13.69 24.56 14.66 22.88C15.64 21.21 16.86 19.58 18.27 18.27C19.69 16.96 21.4 15.84 23.17 15.03C24.93 14.22 26.95 13.71 28.89 13.43C30.83 13.15 32.9 13.21 34.82 13.36C36.74 13.5 38.66 13.92 40.43 14.28C42.2 14.65 43.87 15.16 45.46 15.54C47.06 15.93 48.52 16.31 50 16.58C51.48 16.85 52.87 17.02 54.32 17.17C55.77 17.32 57.22 17.36 58.71 17.49C60.2 17.62 61.74 17.7 63.28 17.95C64.81 18.19 66.39 18.5 67.91 18.98C69.43 19.46 70.95 20.08 72.38 20.83C73.81 21.58 75.19 22.5 76.5 23.5C77.81 24.5 79.03 25.63 80.22 26.81C81.41 27.99 82.54 29.25 83.65 30.57C84.76 31.89 85.85 33.26 86.89 34.72C87.93 36.18 88.98 37.69 89.9 39.31C90.82 40.92 91.73 42.64 92.4 44.42C93.07 46.2 93.66 48.1 93.92 50Z",ghost:"M17 50C17 31.78 31.78 17 50 17C68.22 17 83 31.78 83 50V81.5Q72 93.5 61 81.5Q50 93.5 39 81.5Q28 93.5 17 81.5Z",circle:"M50 8A42 42 0 1 1 50 92A42 42 0 1 1 50 8Z",drop:"M50 8.5C52.2 8.5 53.4 10.3 56.4 15.2C62.9 25.5 84 44.6 84 61.5C84 80.3 68.8 92 50 92C31.2 92 16 80.3 16 61.5C16 44.6 37.1 25.5 43.6 15.2C46.6 10.3 47.8 8.5 50 8.5Z",star:"M45.77 9.7A5 5 0 0 1 54.23 9.7L65.02 26.81A4 4 0 0 0 67.42 28.55L87.02 33.53A5 5 0 0 1 89.63 41.57L76.7 57.12A4 4 0 0 0 75.78 59.94L77.11 80.12A5 5 0 0 1 70.26 85.09L51.48 77.59A4 4 0 0 0 48.52 77.59L29.74 85.09A5 5 0 0 1 22.89 80.12L24.22 59.94A4 4 0 0 0 23.3 57.12L10.37 41.57A5 5 0 0 1 12.98 33.53L32.58 28.55A4 4 0 0 0 34.98 26.81L45.77 9.7Z",droid:"M16 50C16 38.95 24.95 30 36 30H64C75.05 30 84 38.95 84 50V70C84 81.05 75.05 90 64 90H36C24.95 90 16 81.05 16 70ZM4 62A7 7 0 1 1 18 62A7 7 0 1 1 4 62ZM82 62A7 7 0 1 1 96 62A7 7 0 1 1 82 62Z",mech:"M10 48C10 38.06 18.06 30 28 30H72C81.94 30 90 38.06 90 48V70C90 79.94 81.94 88 72 88H28C18.06 88 10 79.94 10 70ZM3 54C3 51.79 4.79 50 7 50H11V72H7C4.79 72 3 70.21 3 68ZM89 50H93C95.21 50 97 51.79 97 54V68C97 70.21 95.21 72 93 72H89Z",alien:"M50 10C70 10 83 27 83 46C83 65 64 92 50 92C36 92 17 65 17 46C17 27 30 10 50 10Z",hexagon:"M91.4 45.5A9 9 0 0 1 91.4 54.5L74.6 83.61A9 9 0 0 1 66.8 88.11L33.2 88.11A9 9 0 0 1 25.4 83.61L8.6 54.5A9 9 0 0 1 8.6 45.5L25.4 16.39A9 9 0 0 1 33.2 11.89L66.8 11.89A9 9 0 0 1 74.6 16.39L91.4 45.5Z",cat:"M50 20A36 36 0 1 1 50 92A36 36 0 1 1 50 20ZM24.72 44.64A4.5 4.5 0 0 1 17.35 40.67L20.21 16.66A4.5 4.5 0 0 1 26.86 13.26L42.3 21.83A4.5 4.5 0 0 1 43.02 29.21L24.72 44.64ZM82.65 40.67A4.5 4.5 0 0 1 75.28 44.64L56.98 29.21A4.5 4.5 0 0 1 57.7 21.83L73.14 13.26A4.5 4.5 0 0 1 79.79 16.66L82.65 40.67Z",cloud:"M19 44A25 25 0 1 1 69 44A25 25 0 1 1 19 44ZM47 50A21 21 0 1 1 89 50A21 21 0 1 1 47 50ZM7 68A17 17 0 1 1 41 68A17 17 0 1 1 7 68ZM32 73A18 18 0 1 1 68 73A18 18 0 1 1 32 73ZM60 70A16 16 0 1 1 92 70A16 16 0 1 1 60 70Z",pill:"M28 28H72C84.15 28 94 37.85 94 50C94 62.15 84.15 72 72 72H28C15.85 72 6 62.15 6 50C6 37.85 15.85 28 28 28Z",pebble:"M94.6 50C94.71 51.92 94.56 53.93 94.17 55.82C93.79 57.7 93.13 59.6 92.28 61.33C91.44 63.06 90.32 64.72 89.1 66.19C87.87 67.67 86.41 69.01 84.92 70.16C83.42 71.31 81.75 72.29 80.11 73.1C78.47 73.92 76.73 74.55 75.06 75.06C73.39 75.58 71.7 75.91 70.1 76.2C68.5 76.48 66.93 76.62 65.45 76.76C63.96 76.9 62.55 76.94 61.2 77.03C59.84 77.11 58.57 77.16 57.31 77.26C56.05 77.36 54.86 77.48 53.64 77.63C52.42 77.79 51.24 77.98 50 78.18C48.76 78.39 47.52 78.64 46.2 78.85C44.89 79.06 43.53 79.3 42.11 79.46C40.69 79.61 39.2 79.75 37.67 79.77C36.14 79.78 34.54 79.74 32.95 79.54C31.35 79.33 29.7 79.03 28.1 78.55C26.49 78.07 24.86 77.45 23.33 76.67C21.8 75.88 20.29 74.94 18.92 73.85C17.54 72.77 16.23 71.51 15.08 70.16C13.94 68.8 12.9 67.29 12.04 65.72C11.17 64.16 10.45 62.46 9.91 60.74C9.36 59.03 8.98 57.22 8.76 55.43C8.55 53.64 8.5 51.8 8.6 50C8.71 48.2 8.98 46.39 9.38 44.65C9.79 42.91 10.35 41.19 11.02 39.56C11.7 37.92 12.52 36.34 13.43 34.85C14.34 33.37 15.39 31.96 16.5 30.66C17.61 29.36 18.84 28.15 20.11 27.07C21.39 25.98 22.76 25 24.15 24.15C25.54 23.3 27.01 22.56 28.48 21.95C29.94 21.33 31.46 20.85 32.95 20.46C34.44 20.08 35.95 19.83 37.43 19.66C38.91 19.48 40.38 19.43 41.81 19.43C43.24 19.43 44.64 19.53 46.01 19.66C47.37 19.78 48.7 19.98 50 20.18C51.3 20.39 52.57 20.63 53.83 20.87C55.1 21.11 56.34 21.37 57.6 21.62C58.87 21.87 60.13 22.12 61.43 22.39C62.74 22.66 64.07 22.93 65.45 23.24C66.83 23.56 68.25 23.88 69.72 24.3C71.19 24.72 72.71 25.17 74.25 25.75C75.78 26.34 77.37 27 78.91 27.81C80.46 28.63 82.04 29.56 83.5 30.66C84.97 31.75 86.43 33 87.7 34.38C88.98 35.77 90.19 37.32 91.17 38.97C92.14 40.62 92.98 42.43 93.56 44.27C94.13 46.1 94.5 48.08 94.6 50Z",puddle:"M85.34 50C85.65 51.54 85.9 53.13 86.01 54.74C86.11 56.35 86.11 58 85.95 59.63C85.8 61.26 85.51 62.93 85.07 64.52C84.62 66.12 84.03 67.72 83.3 69.23C82.58 70.74 81.7 72.21 80.72 73.57C79.74 74.94 78.62 76.23 77.43 77.43C76.24 78.62 74.93 79.72 73.58 80.73C72.23 81.74 70.79 82.65 69.33 83.48C67.86 84.31 66.34 85.04 64.79 85.71C63.24 86.37 61.65 86.95 60.04 87.46C58.42 87.96 56.77 88.4 55.1 88.75C53.43 89.09 51.72 89.37 50 89.54C48.28 89.71 46.52 89.81 44.76 89.76C43.01 89.72 41.22 89.58 39.47 89.29C37.72 89 35.95 88.58 34.26 88C32.57 87.42 30.89 86.69 29.33 85.8C27.77 84.92 26.26 83.87 24.91 82.7C23.56 81.53 22.3 80.19 21.23 78.77C20.16 77.35 19.22 75.79 18.47 74.2C17.71 72.61 17.13 70.91 16.7 69.23C16.26 67.55 16.02 65.81 15.88 64.13C15.75 62.45 15.78 60.76 15.88 59.14C15.97 57.52 16.21 55.94 16.45 54.42C16.7 52.89 17.03 51.43 17.34 50C17.65 48.57 18 47.2 18.32 45.83C18.63 44.46 18.94 43.13 19.24 41.76C19.53 40.39 19.79 39.03 20.08 37.61C20.36 36.18 20.62 34.74 20.95 33.23C21.28 31.72 21.61 30.16 22.07 28.57C22.52 26.98 23.02 25.32 23.69 23.69C24.35 22.06 25.11 20.38 26.05 18.79C26.99 17.21 28.08 15.62 29.33 14.2C30.58 12.78 32 11.41 33.54 10.26C35.08 9.12 36.8 8.11 38.57 7.35C40.34 6.6 42.27 6.04 44.17 5.73C46.08 5.43 48.08 5.37 50 5.54C51.92 5.71 53.87 6.15 55.69 6.75C57.52 7.36 59.3 8.22 60.94 9.19C62.57 10.15 64.11 11.33 65.51 12.56C66.91 13.78 68.17 15.15 69.33 16.52C70.48 17.89 71.5 19.34 72.44 20.76C73.38 22.18 74.19 23.62 74.97 25.03C75.75 26.43 76.44 27.83 77.12 29.19C77.8 30.56 78.42 31.89 79.05 33.23C79.67 34.57 80.28 35.87 80.87 37.21C81.46 38.55 82.05 39.88 82.6 41.27C83.14 42.65 83.68 44.05 84.14 45.51C84.6 46.96 85.03 48.46 85.34 50Z"},b1={droid:"M47.5 14H52.5V32H47.5ZM43 11A7 7 0 1 1 57 11A7 7 0 1 1 43 11Z",mech:"M19.5 32L24.5 32L17 13L12 13ZM75.5 32L80.5 32L88 13L83 13ZM10 11.5A4.5 4.5 0 1 1 19 11.5A4.5 4.5 0 1 1 10 11.5ZM81 11.5A4.5 4.5 0 1 1 90 11.5A4.5 4.5 0 1 1 81 11.5Z"};function Ts(e){const t=e.trim(),a=t.match(/^hsla?\(\s*([\d.]+)(?:deg)?[,\s]+([\d.]+)%[,\s]+([\d.]+)%/i);if(a)return mg([Number(a[1])/360,Number(a[2])/100,Number(a[3])/100]);const o=t.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(o){let n=o[1];n.length===3&&(n=n.split("").map(i=>i+i).join(""));const s=parseInt(n,16);return[s>>16&255,s>>8&255,s&255]}const r=t.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/i);return r?[Number(r[1]),Number(r[2]),Number(r[3])]:null}function hg(e){const t=Ts(e);if(!t)return .5;const a=o=>{const r=o/255;return r<=.03928?r/12.92:((r+.055)/1.055)**2.4};return .2126*a(t[0])+.7152*a(t[1])+.0722*a(t[2])}const ug="#1E1A33",fg="#F7F5F2";function dg(e){return hg(e)<.13?fg:ug}function pg([e,t,a]){e/=255,t/=255,a/=255;const o=Math.max(e,t,a),r=Math.min(e,t,a),n=(o+r)/2;if(o===r)return[0,0,n];const s=o-r,i=n>.5?s/(2-o-r):s/(o+r);let l=0;return o===e?l=(t-a)/s+(t<a?6:0):o===t?l=(a-e)/s+2:l=(e-t)/s+4,[l/6,i,n]}function mg([e,t,a]){if(t===0)return[a*255,a*255,a*255];const o=a<.5?a*(1+t):a+t-a*t,r=2*a-o,n=s=>(s=(s%1+1)%1,s<1/6?r+(o-r)*6*s:s<1/2?o:s<2/3?r+(o-r)*(2/3-s)*6:r);return[n(e+1/3)*255,n(e)*255,n(e-1/3)*255]}function gg([e,t,a]){return`hsl(${(e*360).toFixed(1)} ${(t*100).toFixed(1)}% ${(a*100).toFixed(1)}%)`}const x1=e=>Math.min(1,Math.max(0,e));function Pt(e,t,a=0){const o=Ts(e);if(!o)return e;const[r,n,s]=pg(o);return gg([r,x1(n+a+(t<0?-t*.25:0)),x1(s+t)])}const w0=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4),bg=e=>e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055;function xg(e,t,a){const o=Math.cbrt(.4122214708*e+.5363325363*t+.0514459929*a),r=Math.cbrt(.2119034982*e+.6806995451*t+.1073969566*a),n=Math.cbrt(.0883024619*e+.2817188376*t+.6299787005*a);return[.2104542553*o+.793617785*r-.0040720468*n,1.9779984951*o-2.428592205*r+.4505937099*n,.0259040371*o+.7827717662*r-.808675766*n]}function v1(e,t,a){const o=Math.pow(e+.3963377774*t+.2158037573*a,3),r=Math.pow(e-.1055613458*t-.0638541728*a,3),n=Math.pow(e-.0894841775*t-1.291485548*a,3);return[4.0767416621*o-3.3077115913*r+.2309699292*n,-1.2684380046*o+2.6097574011*r-.3413193965*n,-.0041960863*o-.7034186147*r+1.707614701*n]}const vg=e=>e.every(t=>t>=-1e-4&&t<=1+1e-4);function Mg(e,t){const a=Ts(e);if(!a||!(t>0))return e;const[o,r,n]=xg(w0(a[0]/255),w0(a[1]/255),w0(a[2]/255)),s=Math.hypot(r,n);if(s<1e-4)return e;const i=r/s,l=n/s,h=s*(1+.5*t);let d=null,u=s;for(let f=0;f<=6;f++){const g=o*(1-.15*t*f/6);let m=0,x=h;for(let v=0;v<18;v++){const b=(m+x)/2;vg(v1(g,i*b,l*b))?m=b:x=b}if(m>u+.004*f&&(u=m,d=v1(g,i*m,l*m)),m>=h-1e-4)break}if(!d)return e;const c=d.map(f=>Math.round(255*bg(Math.min(1,Math.max(0,f)))));return`rgb(${c[0]} ${c[1]} ${c[2]})`}const wi=["default","working","sleeping"],$i=.68,Lu=26,yg=.2,M1={height:Lu,time:$i,stretch:1,squash:1.15,squashTime:.37,squashEase:"pulse",groundTime:.11,groundEase:"pulse",riseTime:.33,riseEase:"pulse",clickSquashTime:.24,spin:1,lean:6,every:8,land:0},Yu=(e,t)=>t?e.clickSquashTime:yg*e.time,$0=(e,t)=>Yu(e,t)+e.time+Xu[e.squashEase]*(t?e.clickSquashTime:e.squashTime)+Math.max(0,e.groundTime)+e.riseTime+Math.max(0,e.land)+.05,Xu={sharp:0,pulse:2/7,soft:.5,bouncy:.144},y1=(e,t)=>{if(e<=0)return 1;if(e>=1)return 0;switch(t){case"sharp":return(1-e)*(1-e);case"soft":return .5+.5*Math.cos(Math.PI*e);case"bouncy":return Math.exp(-3.2*e)*Math.cos(5.4*e)-e*e*e*.026;default:{const a=4.2*e;return(1+a)*Math.exp(-a)-e*e*e*.078}}},w1=(e,t)=>1+.25*Nu(e,t),Nu=(e,t)=>{if(e<=0||e>=1)return 0;let a;switch(t){case"sharp":a=(1-e)*(1-e);break;case"soft":a=Math.sin(Math.PI*e)**2;break;case"bouncy":a=Math.exp(-3.15*e)*Math.sin(8.43*e)/.596;break;default:{const r=7*e;a=r*r*Math.exp(2-r)/4}}const o=e>.85?1-(e-.85)/.15:1;return a*o*o*(3-2*o)},k0=e=>Math.exp(-Math.pow(Math.min(Math.abs(e),Math.abs(e-1))/.11,2)),ua=Math.PI/180,ar=Math.PI*2,wg={default:1.2,working:.7,sleeping:1.4},$g=1;function kg(e){let t=e*2654435761>>>0||1;return()=>{t=t+1831565813>>>0;let a=t;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}}function Er(e,t,a,o){return e+(t-e)*(1-Math.exp(-a*o))}const as=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,Sg=e=>.5-.5*Math.cos(Math.PI*e);class os{constructor(t,a,o,r,n,s=!1){this.rand=t,this.amp=a,this.holdMin=o,this.holdMax=r,this.rate=n,this.spring=s,this.value=0,this.vel=0,this.target=0,this.next=0}update(t,a){if(t>=this.next&&(this.target=(this.rand()*2-1)*this.amp,this.next=t+this.holdMin+this.rand()*(this.holdMax-this.holdMin)),this.spring){const o=this.rate*1.6,r=.9;this.vel+=(o*o*(this.target-this.value)-2*r*o*this.vel)*a,this.value+=this.vel*a}else this.value=Er(this.value,this.target,this.rate,a)}aim(t){this.target=t,this.next=1/0}set(t,a,o,r){this.amp=t,this.holdMin=a,this.holdMax=o,this.rate=r,this.next=0}}class rs{constructor(t){this.duration=t,this.p=-1}fire(){this.p=0}get active(){return this.p>=0}update(t){this.p<0||(this.p+=t/this.duration,this.p>=1&&(this.p=-1))}}const $1=35*ua,k1=14*ua,S1=3.2*ua,z1=2.6,zg=4.4,ju={default:{pitch:0,roll:0,y:0,lookX:0,lookY:0},working:{pitch:5*ua,roll:0,y:0,lookX:0,lookY:0},sleeping:{pitch:-16*ua,roll:6*ua,y:3,lookX:0,lookY:1}};class Cg{constructor(t,a="default"){this.pose={yaw:0,pitch:0,roll:0,x:0,y:0,sx:1,sy:1,eyeOpen:1,blinkL:0,blinkR:0,lookX:0,lookY:0,breath:0,laugh:0,whirl:0,whirlAngle:0,w:[1,0,0]},this.state="default",this.t=0,this.wFrom=[1,0,0],this.tr=1,this.trDuration=1.2,this.blink=new rs(.17),this.blinkAgain=!1,this.dart=new rs(.12),this.dartX=0,this.dartY=0,this.flip=new rs($0(M1,!1)),this.flipPoked=!1,this.jump={...M1},this.flipSide=1,this.nod=new rs(1.7),this.hopPhase=0,this.hopCount=0,this.hopGain=0,this.laughEv=new rs(.8),this.prevYaw=0,this.jelly=0,this.jellyV=0,this.gazeLead=0,this.gazeDir=[0,0],this.gazeAt=0,this.turnK=1,this.breathPhase=0,this.ptrX=0,this.ptrY=0,this.ptrS=0,this.ptrTargetX=0,this.ptrTargetY=0,this.ptrTargetS=0,this.baseYaw=0,this.rand=kg(Math.floor(t*1e6)+1);const o=this.rand;this.yawW=new os(o,36*ua,1.1,2.6,3,!0),this.pitchW=new os(o,10*ua,1.1,2.6,2.6,!0),this.rollW=new os(o,5*ua,1.6,3.2,2,!0),this.lookXW=new os(o,3.6,.5,2,14),this.lookYW=new os(o,2.4,.5,2,14),this.t=o()*10,this.hopPhase=o(),this.breathPhase=o(),this.blinkAt=this.t+1+o()*3,this.flipAt=this.nextFlip(this.t,1),this.nodAt=this.t+3+o()*4,this.dartAt=this.t+1+o()*2,this.laughAt=this.t+.6+o()*1.5,this.setState(a,!0)}setState(t,a=!1){if(t===this.state&&!a)return;const o=this.state;this.state=t;const r=this.pose.w;if(a){for(let n=0;n<3;n++)r[n]=wi[n]===t?1:0;this.tr=1}else this.wFrom=[r[0],r[1],r[2]],this.tr=0,this.trDuration=o==="sleeping"?$g:wg[t];switch(t){case"default":this.yawW.set($1,2.6,5.4,2),this.pitchW.set(k1,2.8,5.8,1.8),this.rollW.set(S1,3.4,6.6,1.5),this.gazeAt=0,this.gazeDir=[0,0],this.lookXW.set(3.6,.6,2.2,13),this.lookYW.set(2.4,.6,2.2,13),this.flipAt=this.nextFlip(this.t,.6);break;case"working":this.yawW.set(16*ua,.9,1.8,4),this.pitchW.set(3*ua,1.2,2.4,3),this.rollW.set(0,1,2,3),this.lookXW.set(2,.5,1.2,12),this.lookYW.set(1,.5,1.2,12),this.hopPhase=0,this.hopCount=0,this.laughAt=this.t+.5+this.rand()*1.2;break;case"sleeping":this.yawW.set(7*ua,3,6,.7),this.pitchW.set(3*ua,3,6,.7),this.rollW.set(2*ua,3,6,.6),this.lookXW.set(0,2,4,2),this.lookYW.set(0,2,4,2),this.nodAt=this.t+2.5+this.rand()*4;break}}setPointer(t,a,o){this.ptrTargetX=Math.max(-1.2,Math.min(1.2,t)),this.ptrTargetY=Math.max(-1.2,Math.min(1.2,a)),this.ptrTargetS=Math.max(0,Math.min(1,o))}poke(){this.flip.active&&this.flip.p<.6||(this.flipPoked=!0,this.flip.duration=$0(this.jump,!0),this.flipSide=this.rand()<.5?-1:1,this.flip.fire(),this.flipAt=this.nextFlip(this.t,1.1))}setTurn(t){const a=Math.max(0,t);a!==this.turnK&&(this.turnK=a,this.state==="default"&&(this.gazeAt=0))}setJump(t){const a=this.jump.every;Object.assign(this.jump,t),t.every!==void 0&&t.every!==a&&(this.flipAt=this.nextFlip(this.t,1))}nextGaze(){const t=this.rand,[a,o]=this.gazeDir;if(a!==0||o!==0){const n=t();return n<.66?[-a,-o]:n<.85?[-a,o]:[0,0]}const r=[[1,-1],[-1,1],[-1,-1],[1,1]];return r[Math.floor(t()*r.length)]}nextFlip(t,a){const o=this.jump.every;return o>0?t+o*a*(.625+this.rand()*.75):1/0}update(t){t=Math.min(t,.05),this.t+=t;const a=this.t,o=this.pose,r=o.w;if(this.tr<1){this.tr=Math.min(1,this.tr+t/this.trDuration);const W=Sg(this.tr);for(let N=0;N<3;N++){const ae=wi[N]===this.state?1:0;r[N]=this.wFrom[N]+(ae-this.wFrom[N])*W}}const[n,s,i]=r,l={pitch:0,roll:0,y:0,lookX:0,lookY:0};for(let W=0;W<3;W++){const N=ju[wi[W]];l.pitch+=N.pitch*r[W],l.roll+=N.roll*r[W],l.y+=N.y*r[W],l.lookX+=N.lookX*r[W],l.lookY+=N.lookY*r[W]}if(this.state==="default"&&a>=this.gazeAt){const[W,N]=this.nextGaze();this.gazeDir=[W,N];const ae=.84+this.rand()*.16;this.yawW.aim(W*$1*ae*this.turnK),this.pitchW.aim(N*k1*ae),this.rollW.aim(W*S1*ae*this.turnK),this.gazeAt=a+z1+this.rand()*(zg-z1)}this.yawW.update(a,t),this.pitchW.update(a,t),this.rollW.update(a,t),this.lookXW.update(a,t),this.lookYW.update(a,t),this.ptrS=Er(this.ptrS,this.ptrTargetS,8,t),this.ptrX=Er(this.ptrX,this.ptrTargetX,14,t),this.ptrY=Er(this.ptrY,this.ptrTargetY,14,t);const h=this.ptrS,d=1-.75*h;this.baseYaw=Er(this.baseYaw,this.yawW.value*d+22*ua*this.ptrX*h,5,t);const u=l.pitch+this.pitchW.value*d-12*ua*this.ptrY*h,c=l.roll+this.rollW.value*d,f=l.y,g=l.lookX+this.lookXW.value*d+4.5*this.ptrX*h,m=l.lookY+this.lookYW.value*d+3*this.ptrY*h;let x=0,v=0,b=1,y=1,$=0,p=0,M=0,w=0,z=0,k=0,F=0,S=0;const _=(W,N,ae)=>{const G=Math.min(1,Math.max(0,(ae-W)/(N-W)));return G*G*(3-2*G)},A=W=>_(.1,.26,W)*(1-_(.66,.9,W)),C=W=>ar*(1.5*W+.9*as(W));if(a>=this.blinkAt&&!this.blink.active&&n+s>.5&&(this.blink.fire(),this.blinkAgain=!this.blinkAgain&&this.rand()<.22,this.blinkAt=a+(this.blinkAgain?.28:2.2+this.rand()*2.6)),this.blink.update(t),this.blink.active&&(M=Math.sin(Math.PI*this.blink.p)),a>=this.dartAt&&!this.dart.active&&n+s>.5&&(this.dart.fire(),this.dartX=(this.rand()*2-1)*4,this.dartY=(this.rand()*2-1)*2,this.dart.duration=.25+this.rand()*.45,this.dartAt=a+1.2+this.rand()*2.6),this.dart.update(t),this.dart.active){const W=this.dart.p,N=W<.15?W/.15:W>.8?(1-W)/.2:1;w+=this.dartX*N*(n+s),z+=this.dartY*N*(n+s)}if(this.state==="default"&&a>=this.flipAt&&!this.flip.active&&(this.flipPoked=!1,this.flip.duration=$0(this.jump,!1),this.flipSide=this.rand()<.5?-1:1,this.flip.fire(),this.flipAt=this.nextFlip(a,1)),this.flip.update(t),this.flip.active){const W=this.jump,N=Yu(W,this.flipPoked),ae=(this.flip.p*this.flip.duration-N)/W.time,G=Math.min(1,Math.max(0,ae)),J=Math.sin(Math.PI*G);x+=ar*W.spin*as(G),v-=W.height*J;const V=(ae-1)*W.time-W.land,U=this.flipPoked?W.clickSquashTime:W.squashTime,fe=Xe=>this.flipPoked?Xe*Xe*(3-2*Xe):k0(Xe-1),H=Math.max(0,W.groundTime),de=Xu[W.squashEase]*U,oe=V-de-H,ue=V<=de?Nu(V/U,W.squashEase):oe<=0?w1((V-de)/H,W.groundEase):y1(oe/W.riseTime,W.riseEase),te=(ae<0?fe(Math.max(0,1+ae*W.time/N)):V>0?ue:ae<.2?k0(ae):0)*W.squash;b+=.16*te-.06*J*W.stretch,y+=-.18*te+.09*J*W.stretch,p+=this.flipSide*W.lean*ua*J,W.spin>0&&(k=Math.max(k,J),F=Math.max(F,A(G)),S=C(G))}const R=this.jump,O=Math.max(0,R.groundTime),E=O+R.riseTime;if(this.state==="working"&&(this.hopGain=s),this.hopGain>.02&&(this.state==="working"||this.hopPhase>0)){this.hopPhase+=t/$i,this.hopPhase>=1&&(this.state==="working"?(this.hopPhase-=1,this.hopCount+=1):(this.hopPhase-1)*$i>=E&&(this.hopPhase=0,this.hopGain=0));const W=this.hopGain,N=Math.min(1,this.hopPhase),ae=Math.sin(Math.PI*N),G=this.hopCount%3===2;v-=(G?Lu:18)*ae*W;const J=this.state!=="working"&&this.hopPhase>1?(this.hopPhase-1)*$i:-1,V=J<0?k0(this.hopPhase):J<O?w1(J/O,R.groundEase):y1((J-O)/R.riseTime,R.riseEase);b+=(.16*V-.06*ae)*W,y+=(-.18*V+.09*ae)*W,G&&(x+=ar*as(N)*W,k=Math.max(k,ae*W),A(N)*W>F&&(F=A(N)*W,S=C(N))),p+=(this.hopCount%2===0?1:-1)*6*ua*ae*W}if(this.state==="working"&&a>=this.laughAt&&!this.laughEv.active&&(this.laughEv.fire(),this.laughEv.duration=.6+this.rand()*.5,this.laughAt=a+1.6+this.rand()*2.2),this.laughEv.update(t),this.laughEv.active){const W=this.laughEv.p;k=Math.max(k,W<.18?W/.18:W>.78?(1-W)/.22:1)}if(this.state==="sleeping"&&a>=this.nodAt&&!this.nod.active&&(this.nod.fire(),this.nodAt=a+4+this.rand()*4),this.nod.update(t),this.nod.active){const W=this.nod.p,N=W<.72?as(W/.72):1-as((W-.72)/.28);$-=13*ua*N*i}this.breathPhase+=t/(3.6+1.2*i);const I=Math.sin(this.breathPhase*ar);o.breath=I,b+=I*(.008+.014*i),y+=I*(.012+.02*i);const P=Math.sin(a*ar/3.4)*2*(1-i);o.yaw=this.baseYaw+x;let T=this.baseYaw-this.prevYaw;T=((T+Math.PI)%ar+ar)%ar-Math.PI,this.prevYaw=this.baseYaw;const Y=t>0?Math.abs(T)/t:0,q=t>0?Math.max(-2.2,Math.min(2.2,T/t*2.4)):0;this.gazeLead=Er(this.gazeLead,q,9,t);const j=Math.min(.22,.055*Y),X=16,K=.45;this.jellyV+=(X*X*(j-this.jelly)-2*K*X*this.jellyV)*t,this.jelly+=this.jellyV*t;const Q=Math.max(-.08,Math.min(.28,this.jelly))*.6;b*=1+Q,y*=1-.55*Q,o.pitch=u+$,o.roll=c+p,o.x=0,o.y=f+v+P,o.sx=b,o.sy=y,o.eyeOpen=1,o.laugh=Er(o.laugh,k,30,t),o.blinkL=M,o.blinkR=M,o.lookX=g+w+this.gazeLead,o.lookY=m+z,o.whirl=F,o.whirlAngle=S}}function C1(e){const t=ju[e];return{yaw:0,pitch:t.pitch,roll:t.roll,x:0,y:t.y,sx:1,sy:1,eyeOpen:1,blinkL:0,blinkR:0,lookX:t.lookX,lookY:t.lookY,breath:0,laugh:0,whirl:0,whirlAngle:0,w:wi.map(a=>a===e?1:0)}}const Fe=3,rt=100+2*Fe,ma=64,ki=ma*ma,fo=24,qu=1e12,Gu=48*Math.PI/180,A1=Math.cos(Gu),Ag=Math.sin(Gu);function _1(e,t,a,o,r,n){let s=0;r[0]=0,n[0]=-1e30,n[1]=1e30;for(let i=1;i<t;i++){let l=0;for(;;){const h=r[s];if(l=(e[i]+i*i-e[h]-h*h)/(2*(i-h)),l>n[s])break;s--}s++,r[s]=i,n[s]=l,n[s+1]=1e30}s=0;for(let i=0;i<t;i++){for(;n[s+1]<i;)s++;const l=r[s];a[i]=(i-l)*(i-l)+e[l],o[i]=l}}function Cl(e,t,a,o,r){const n=new Float32Array(a),s=new Float32Array(a),i=new Int32Array(a),l=new Int32Array(a),h=new Float32Array(a+1),d=new Float32Array(a*a),u=new Int32Array(a*a);for(let c=0;c<a;c++){for(let f=0;f<a;f++)n[f]=e[f*a+c]===t?0:qu;_1(n,a,s,i,l,h);for(let f=0;f<a;f++)d[f*a+c]=s[f],u[f*a+c]=i[f]}for(let c=0;c<a;c++){const f=c*a;for(let g=0;g<a;g++)n[g]=d[f+g];_1(n,a,s,i,l,h);for(let g=0;g<a;g++)o[f+g]=s[g],r&&(r[f+g]=u[f+i[g]]*a+i[g])}}function S0(e,t,a){for(let o=0;o<t;o++){const r=o*t;for(let n=0;n<t;n++){const s=n<2?0:n-2,i=n<1?0:n-1,l=n>t-2?t-1:n+1,h=n>t-3?t-1:n+2;a[r+n]=(e[r+s]+4*e[r+i]+6*e[r+n]+4*e[r+l]+e[r+h])*.0625}}for(let o=0;o<t;o++)for(let r=0;r<t;r++){const n=r<2?0:r-2,s=r<1?0:r-1,i=r>t-2?t-1:r+1,l=r>t-3?t-1:r+2;e[r*t+o]=(a[n*t+o]+4*a[s*t+o]+6*a[r*t+o]+4*a[i*t+o]+a[l*t+o])*.0625}}function _g(e,t,a){const o=[];for(let n=t,s=1;s<=4&&n%2===0||s===1;n>>=1,s<<=1){const i=new Uint8Array(n*n);for(let l=0;l<n;l++)for(let h=0;h<n;h++){let d=0;for(let u=0;u<s;u++)for(let c=0;c<s;c++)d+=e[(l*s+u)*t+h*s+c];i[l*n+h]=d>=128*s*s?1:0}if(o.push({n,mask:i,phi:new Float32Array(n*n)}),s===4)break}const r=(n,s,i,l)=>{const{n:h,mask:d,phi:u}=n,c=s*s;for(let f=0;f<i;f++)for(let g=1;g<h-1;g++){const m=g*h;for(let x=1;x<h-1;x++){const v=m+x;if(!d[v])continue;const b=(u[v-1]+u[v+1]+u[v-h]+u[v+h]+c)*.25;u[v]+=l*(b-u[v])}}};for(let n=o.length-1;n>=0;n--){const s=o[n],i=1<<n;if(n<o.length-1){const h=o[n+1],d=s.n,u=h.n;for(let c=0;c<d;c++){const f=Math.min(u-1,Math.max(0,(c+.5)/2-.5)),g=f|0,m=Math.min(u-1,g+1),x=f-g;for(let v=0;v<d;v++){const b=c*d+v;if(!s.mask[b])continue;const y=Math.min(u-1,Math.max(0,(v+.5)/2-.5)),$=y|0,p=Math.min(u-1,$+1),M=y-$;s.phi[b]=(h.phi[g*u+$]*(1-M)+h.phi[g*u+p]*M)*(1-x)+(h.phi[m*u+$]*(1-M)+h.phi[m*u+p]*M)*x}}}const l=Math.min(1.9,2/(1+Math.sin(Math.PI/s.n))-.05);r(s,a*i,4,1),r(s,a*i,n===2?100:n===1?30:16,l),r(s,a*i,8,1)}return o[0].phi}const Rg=[1,1,0,-1,-1,-1,0,1],Fg=[0,1,1,1,0,-1,-1,-1],Og=[1,Math.SQRT2,1,Math.SQRT2,1,Math.SQRT2,1,Math.SQRT2];function Ig(e,t,a){const o=rt/t,r=t*t,n=new Uint8Array(r);for(let k=0;k<r;k++)n[k]=e[k]>=128?1:0;const s=new Float32Array(r),i=new Float32Array(r),l=new Int32Array(r);Cl(n,0,t,s,null),Cl(n,1,t,i,l);const h=new Float32Array(r),d=new Float32Array(r);for(let k=0;k<r;k++){const F=e[k]/255;h[k]=o*(F>0&&F<1?F-.5:n[k]?Math.sqrt(s[k])-.5:.5-Math.sqrt(i[k]))}S0(h,t,d),S0(h,t,d);const u=_g(e,t,o);let c=0;for(let k=0;k<r;k++)u[k]>c&&(c=u[k]);const f=2*Math.sqrt(c),g=Math.min(1.5*a+.32*f,1.4*f),m=c>0?g/Math.sqrt(c):0,x=new Float32Array(r);for(let k=0;k<r;k++)x[k]=u[k]>0?m*Math.sqrt(u[k]):0;S0(x,t,d);const v={N:t,i00:new Uint16Array(r),wx:new Uint8Array(r),wy:new Uint8Array(r),ao:new Uint8Array(r),sd:h,h:x},{i00:b,wx:y,wy:$,ao:p}=v,M=t<=64?[1,2,3,5,8]:t<=96?[1,2,4,7,11]:[1,2,4,7,11,15],w=64,z=t-1;for(let k=0;k<t;k++)for(let F=0;F<t;F++){const S=k*t+F,_=n[S]?S:i[S]<=w?l[S]:-1;if(_<0)continue;const A=_%t,C=(_-A)/t,R=A>0?A-1:0,O=A<z?A+1:z,E=C>0?C-1:0,I=C<z?C+1:z;let P=-(x[C*t+O]-x[C*t+R])/(2*o),T=-(x[I*t+A]-x[E*t+A])/(2*o),Y=1,q=Math.sqrt(P*P+T*T+1);P/=q,T/=q,Y/=q;const j=Math.max(0,h[_]);if(j<2){let U=h[C*t+O]-h[C*t+R],fe=h[I*t+A]-h[E*t+A];const H=Math.hypot(U,fe)||1;U/=H,fe/=H;const de=.7*(1-j/2);P+=de*(-U-P),T+=de*(-fe-T),Y+=de*(0-Y),q=Math.sqrt(P*P+T*T+Y*Y)||1,P/=q,T/=q,Y/=q}const X=x[_];let K=0;for(let U=0;U<8;U++){let fe=0;for(let H=0;H<M.length;H++){const de=M[H];let oe=A+Rg[U]*de,ue=C+Fg[U]*de;oe<0?oe=0:oe>z&&(oe=z),ue<0?ue=0:ue>z&&(ue=z);const te=(x[ue*t+oe]-X)/(de*o*Og[U]);te>fe&&(fe=te)}K+=fe/Math.sqrt(1+fe*fe)}const Q=1-Math.min(1,j/3),W=1-.2*Q*Q,N=Math.pow(1-.9*K/8,1.5)*W;p[S]=Math.max(1,Math.round(255*Math.pow(N,1/2.2)));const ae=(P*.5+.5)*(ma-1),G=(T*.5+.5)*(ma-1),J=Math.min(ma-2,Math.max(0,ae|0)),V=Math.min(ma-2,Math.max(0,G|0));b[S]=V*ma+J,y[S]=Math.round(255*Math.min(1,Math.max(0,ae-J))),$[S]=Math.round(255*Math.min(1,Math.max(0,G-V)))}return v}function Zt(e){if(typeof OffscreenCanvas=="function")return new OffscreenCanvas(e,e);if(typeof document<"u"){const t=document.createElement("canvas");return t.width=t.height=e,t}return null}function Gt(e,t){return e.getContext("2d",t?{willReadFrequently:!0}:void 0)}function Uu(e,t){const a=Zt(t),o=a&&Gt(a,!0);if(!o)return null;const r=rt/t;o.setTransform(1/r,0,0,1/r,Fe/r,Fe/r),o.fillStyle="#fff",o.fill(e);const n=o.getImageData(0,0,t,t).data,s=new Uint8ClampedArray(t*t);for(let i=0;i<t*t;i++)s[i]=n[i*4+3];return s}const Dr=new Map,Si=new Set,R1=new WeakMap;let Pg=0;function z0(e){let t=R1.get(e);return t||R1.set(e,t=`p${Pg++}`),t}const Ms=[];let Al=!1;const Wg=6,C0=()=>typeof performance<"u"?performance.now():Date.now(),Tg=20;let Cs=0;function zi(e){Al=!1;const t=C0();let a=Ms.shift();for(;a&&(a(),!((Cs>0?Tg-(C0()-t):e&&!e.didTimeout?e.timeRemaining()-6:Wg-(C0()-t))<=0));)a=Ms.shift();Ms.length&&Vu()}function Vu(){if(Al)return;if(Al=!0,Cs>0){setTimeout(()=>zi(),0);return}const e=globalThis.requestIdleCallback;e?e(zi,{timeout:60}):setTimeout(()=>zi(),24)}function ri(e){Cs=Math.max(0,Cs+(e?1:-1)),e&&Ms.length&&setTimeout(()=>zi(),0)}function Ci(){return Si.size>0||Lr.size>0}function ql(e){Ms.push(e),Vu()}const Yi=new Set;let Xi=!1,A0=!1;function Ku(){A0||!Yi.size||(A0=!0,setTimeout(()=>{A0=!1;for(const e of[...Yi])e()},0))}function _0(e){return Yi.add(e),()=>{Yi.delete(e)}}function ni(){const e=Xi;return Xi=!1,e}function Qu(e,t,a,o,r){const n=`${e}|${a}|${Math.round(o)}`,s=Dr.get(n);if(s)return s;const i=()=>{if(Si.delete(n),Dr.has(n))return;const l=Uu(t,a);l&&(Dr.size>=48&&Dr.clear(),Dr.set(n,Ig(l,a,o)),Ku())};return r?(i(),Dr.get(n)??null):(Si.has(n)||(Si.add(n),ql(i)),Xi=!0,null)}function Eg(e,t,a=192,o=.65,r=!1,n=vr,s=295,i){const l=Qu(e,t,Zu(a),15*o,!0);if(r&&l){const h=s*Math.PI/180;Ul(l,e,15*o,Math.ceil(rt*a/100),!1,Math.sin(h),-Math.cos(h),n,i??Es(Math.sin(h),-Math.cos(h)))}}function Zu(e){return e<=100?64:e<=224?96:128}const F1=new WeakMap;function Dg(e,t,a){const o=Math.max(.05,Math.min(1,a)),r=`${t}|${o.toFixed(2)}`;let n=F1.get(e);n||F1.set(e,n=new Map);const s=n.get(r);if(s)return s;const{N:i,h:l,sd:h}=e;let d=0;for(let M=0;M<i*i;M++)l[M]>d&&(d=l[M]);const u=rt/i,c=new Float32Array(t),f=new Float32Array(t),g=new Float32Array(t),m=new Float32Array(t),x=new Float32Array(t);x[0]=1.2;const v=M=>{let w=0,z=0,k=0;for(let F=0,S=0;F<i;F++)for(let _=0;_<i;_++,S++)M(S)&&(w+=1,z+=_,k+=F);return w?[w,(z/w+.5)*u-Fe,(k/w+.5)*u-Fe]:[0,50,50]},[b,y,$]=v(M=>h[M]>=0);f[0]=1,g[0]=y,m[0]=$;for(let M=1;M<t;M++){const w=M/t;c[M]=d*w;const z=d*Math.pow(w,1/o),[k,F,S]=v(R=>h[R]>=0&&l[R]>=z);f[M]=Math.min(f[M-1],b?Math.sqrt(k/b):1),g[M]=F,m[M]=S;const _=d/(2*t);let A=0,C=0;for(let R=0;R<i*i;R++)h[R]>0&&Math.abs(l[R]-z)<_&&(C+=h[R],A++);x[M]=Math.max(x[M-1],A?C/A:x[M-1])}const p={top:d,z:c,q:o,scale:f,cx:g,cy:m,inset:x};return n.size>6&&n.clear(),n.set(r,p),p}function Hg(e,t,a,o,r=1){const n=`${e}|`,s=`|${Math.round(t)}`;let i=null;for(const[p,M]of Dr)p.startsWith(n)&&p.endsWith(s)&&(i=M);if(!i)return null;const{N:l,h}=i,d=rt/l,u=Math.min(l-1,Math.max(0,(a+Fe)/d-.5)),c=Math.min(l-1,Math.max(0,(o+Fe)/d-.5)),f=Math.min(l-2,u|0),g=Math.min(l-2,c|0),m=u-f,x=c-g,v=g*l+f,b=(h[v]*(1-m)+h[v+1]*m)*(1-x)+(h[v+l]*(1-m)+h[v+l+1]*m)*x;let y=0;for(let p=0;p<l*l;p++)h[p]>y&&(y=h[p]);if(y<=0)return 0;const $=Math.max(.05,Math.min(1,r));return y*Math.pow(Math.max(0,b)/y,$)}const R0=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4),si=new Map;function Zr(e){let t=si.get(e);if(!t){let a=Ts(e);if(!a){const o=Zt(1),r=o&&Gt(o,!0);if(r){r.fillStyle=e,r.fillRect(0,0,1,1);const n=r.getImageData(0,0,1,1).data;a=[n[0],n[1],n[2]]}else a=[128,128,128]}t=[R0(a[0]/255),R0(a[1]/255),R0(a[2]/255)],si.size>200&&si.clear(),si.set(e,t)}return t}const Ki=2048,Ju=2.5,ef=Ki/Ju,tf=new Float32Array(Ki);for(let e=0;e<Ki;e++){const t=(e+.5)/ef,a=t<=.75?t:.75+.25*(1-Math.exp(-(t-.75)/.25));tf[e]=255*(a<=.0031308?12.92*a:1.055*Math.pow(a,1/2.4)-.055)}const F0=e=>tf[e<=0?0:e>=Ju?Ki-1:e*ef|0],Ca=e=>e<=0?0:e>=1?255:255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055),Wn=1024,ii=new Map;function Ni(e){let t=ii.get(e);if(!t){t=new Float32Array(Wn+1);for(let a=0;a<=Wn;a++)t[a]=Math.pow(a/Wn,e);ii.size>16&&ii.clear(),ii.set(e,t)}return t}function af(e,t,a=1/0){if(!(t>0))return;const o=.2126*e[0]+.7152*e[1]+.0722*e[2],r=Math.min(e[0],e[1],e[2]),n=Math.max(e[0],e[1],e[2]);let s=1+3*t;r<o&&(s=Math.min(s,o/(o-r))),n>o&&(s=Math.min(s,Math.max(1,(a-o)/(n-o)))),e[0]=o+(e[0]-o)*s,e[1]=o+(e[1]-o)*s,e[2]=o+(e[2]-o)*s}const O0=[.92,.96,1],I0=[1,.98,.95],Dt=(e,t,a)=>{const o=a<=e?0:a>=t?1:(a-e)/(t-e);return o*o*(3-2*o)},O1=(e,t,a)=>1-Dt(e-t,e+t,a);function Bg(e,t,a,o){const{L:r,V:n,H:s,U:i,W:l,A:h,B:d}=a,u=o.vivid??0,c=[0,0,0],f=Math.max(t[0],t[1],t[2],.05),g=[t[0]/f,t[1]/f,t[2]/f],m=Math.max(.03,.3-.15*o.shadow),x=.15+.14*o.spread,v=.85,b=Math.min(90,Math.round(110/Math.pow(o.spread,1.3))),y=Math.max(2,Math.round(8/o.spread)),$=Ni(b),p=Ni(y),M=.45*o.highlight,w=.1*o.highlight,z=.11*o.highlight,k=.3*o.rim,F=[m*g[0],m*g[1],m*g[2]];for(let S=0;S<ma;S++)for(let _=0;_<ma;_++){let A=_/(ma-1)*2-1,C=S/(ma-1)*2-1,R=A*A+C*C;if(R>1.14)continue;if(R>1){const H=1/Math.sqrt(R);A*=H,C*=H,R=1}const O=Math.sqrt(1-R),E=A*r[0]+C*r[1]+O*r[2],I=Math.max(0,A*n[0]+C*n[1]+O*n[2]),P=Math.max(0,A*s[0]+C*s[1]+O*s[2]),T=Math.min(1,Math.max(0,(E+x)/(1+x))),Y=1-I,q=Y*Y,j=q*Y,X=j*q,K=P*Wn|0,Q=(M*$[K]+w*p[K])*(1+3*X),W=2*I*A-n[0],N=2*I*C-n[1],ae=2*I*O-n[2],G=.45+.55*Dt(-.4,.6,W*i[0]+N*i[1]+ae*i[2]),J=W*l[0]+N*l[1]+ae*l[2];let V=0;if(J>.5){const H=(W*h[0]+N*h[1]+ae*h[2])/J,de=(W*d[0]+N*d[1]+ae*d[2])/J;V=O1(.34,.12,Math.abs(H))*O1(.12,.06,Math.abs(de))}const U=k*j*G+z*V,fe=(S*ma+_)*3;c[0]=t[0]*(F[0]+v*T),c[1]=t[1]*(F[1]+v*T),c[2]=t[2]*(F[2]+v*T),af(c,u),e[fe]=F0(c[0]+Q*I0[0]+U*O0[0]),e[fe+1]=F0(c[1]+Q*I0[1]+U*O0[1]),e[fe+2]=F0(c[2]+Q*I0[2]+U*O0[2])}}const I1=new WeakMap;function Lg(e){let t=I1.get(e);if(t)return t;const{N:a,sd:o,ao:r}=e;t={ao:new Uint8Array(a*a),k:new Float32Array(a*a)};for(let n=0;n<a*a;n++){if(r[n]===0)continue;const s=Math.max(0,o[n]),i=1-Math.min(1,s/3),l=1-.2*i*i,h=Math.min(1,Math.pow(r[n]/255,2.2)/l);t.ao[n]=Math.max(1,Math.round(255*Math.pow(h,1/2.2))),t.k[n]=1}return I1.set(e,t),t}const of=5;function Yg(e,t,a,o,r){const{N:n,i00:s,wx:i,wy:l,ao:h,sd:d}=e,u=ma*3;for(let c=0,f=0;c<n*n;c++,f+=4){const g=h[c];if(g===0){a[f+3]=0;continue}let m=r?o[r.ao[c]]*r.k[c]:o[g];const x=s[c]*3,v=i[c]*(1/255),b=l[c]*(1/255);if(r){const z=(t[x+1]*(1-v)+t[x+4]*v)*(1-b)+(t[x+u+1]*(1-v)+t[x+u+4]*v)*b;m=1-(1-m)*(1.1-.75*Math.min(1,z/235))}const y=(1-v)*(1-b)*m,$=v*(1-b)*m,p=(1-v)*b*m,M=v*b*m;a[f]=t[x]*y+t[x+3]*$+t[x+u]*p+t[x+u+3]*M,a[f+1]=t[x+1]*y+t[x+4]*$+t[x+u+1]*p+t[x+u+4]*M,a[f+2]=t[x+2]*y+t[x+5]*$+t[x+u+2]*p+t[x+u+5]*M;const w=d[c]/of;a[f+3]=w>=1?255:w<=0?0:Math.round(255*w*w*(3-2*w))}}const P1=new WeakMap;function Xg(e,t){let a=P1.get(e);if(a||P1.set(e,a=new Map),a.has(t))return a.get(t);const o=Zt(t),r=o&&Gt(o,!1);if(!o||!r)return a.set(t,null),null;const{N:n,sd:s}=e,i=new ImageData(t,t),l=t/rt;for(let h=0;h<t;h++)for(let d=0;d<t;d++){const u=(gr(s,n,(d+.5)/l/rt*n-.5,(h+.5)/l/rt*n-.5)+.2)/.6,c=(h*t+d)*4;i.data[c]=i.data[c+1]=i.data[c+2]=255,i.data[c+3]=u>=1?255:u<=0?0:Math.round(255*u*u*(3-2*u))}return r.putImageData(i,0,0),a.set(t,o),o}const W1=new WeakMap;function Qi(e){let t=W1.get(e);if(t)return t;const{N:a,sd:o}=e,r=rt/a,n=[];for(let s=0,i=0;s<a;s++)for(let l=0;l<a;l++,i++)o[i]>=0&&o[i]<2*r&&n.push((l+.5)*r-Fe,(s+.5)*r-Fe,o[i]);return t=Float32Array.from(n),W1.set(e,t),t}const T1=new WeakMap;function Ng(e){let t=T1.get(e);if(t)return t;const a=Qi(e),o=[];let r=0,n=0;for(let l=0;l<a.length;l+=3)r+=a[l],n+=a[l+1];r/=a.length/3||1,n/=a.length/3||1;for(let l=0;l<a.length;l+=3)o.push([a[l],a[l+1],Math.atan2(a[l+1]-n,a[l]-r),a[l+2]]);o.sort((l,h)=>l[2]-h[2]);const s=Math.max(1,Math.floor(o.length/96)),i=o.filter((l,h)=>h%s===0);return t={x:Float32Array.from(i,l=>l[0]),y:Float32Array.from(i,l=>l[1]),d:Float32Array.from(i,l=>l[3])},T1.set(e,t),t}function E1(e,t,a){const o=Math.round((t+Math.PI)/(2*Math.PI)*e),r=a&1?a+1>>1:-(a>>1);return((o+r)%e+e)%e}function ji(e,t,a){let o=-qu;for(let r=0;r<e.length;r+=3){const n=e[r]*t+e[r+1]*a+e[r+2];n>o&&(o=n)}return o}const _o=new Map,Lr=new Set,rf=(e,t)=>Math.round(Math.atan2(t,e)/(Math.PI/12)),nf=e=>e<=200?192:e<=360?320:512,vr={length:1,density:1.6,fuzz:.9,clumps:.4,curl:.7,gravity:.9},jg=e=>`${e.length.toFixed(2)},${e.density.toFixed(2)},${e.fuzz.toFixed(2)},${e.clumps.toFixed(2)},${e.curl.toFixed(2)},${(e.gravity??vr.gravity).toFixed(2)}`,sf=(e,t,a,o,r,n)=>`${e}|${Math.round(t)}|${a}|${o}|${jg(r)}|${pb(n)}`,D1=new Map,P0=new Set,Do=128,qg=3.2,W0=1/2.56,T0=1/(2/3*Math.sqrt(1/3)),Gg=.6,H1=.07,B1=.14,L1=.3,Ug=.6,Vg=.35,Kg=.3,Y1=.3,Qg=1.26,Zg=1.6,Jg=.045,lf=.5,li=Math.cos(lf),X1=Math.sin(lf),eb=.22,tb=.5,cf=.36,ab=1.1,N1=1.625,ob=.5,rb=.9,ci=.7,nb=.15,sb=1.3,ho=20,pa=rt+2*ho,ib=.8,lb=.3,cb=.8,hb=.7,ub=.5,ns=2.5,E0=1.2,_l=3,fb=.8,db=.3,j1=.1,ys=32*Math.PI/180,qi=1;function hf(e,t,a=ys){const o=Math.cos(a),r=Math.sin(a);return qo([e[0]*o+t[0]*r,e[1]*o+t[1]*r,e[2]*o+t[2]*r])}function uf(e,t){return qo([.94*e[0]-.34*t[0],.94*e[1]-.34*t[1],.94*e[2]-.34*t[2]])}function Gl(e,t){const a=-.5*e,o=-.5*t-.87,r=Math.hypot(a,o)||1;return[a/r,o/r]}const Es=(e,t)=>{const[a,o]=Gl(e,t);return{bx:a,by:o,front:ys}},pb=e=>`${Math.round(Math.atan2(e.by,e.bx)/(Math.PI/36))}|${Math.round(e.front/(Math.PI/90))}`;function Ai(e,t){let a=e*374761393+t*668265263|0;return a=Math.imul(a^a>>>13,1274126177),((a^a>>>16)>>>0)/4294967296}function gr(e,t,a,o){const r=t-1,n=Math.min(r,Math.max(0,a)),s=Math.min(r,Math.max(0,o)),i=Math.min(r-1,n|0),l=Math.min(r-1,s|0),h=n-i,d=s-l,u=l*t+i;return(e[u]*(1-h)+e[u+1]*h)*(1-d)+(e[u+t]*(1-h)+e[u+t+1]*h)*d}function Ul(e,t,a,o,r,n,s,i=vr,l=Es(n,s)){const h=nf(o),d=rf(n,s),u=sf(t,a,h,d,i,l),c=_o.get(u);if(c)return c;if(r)return xb(e,t,a,o,n,s,i,l);const f=`${t}|${Math.round(a)}|`;if(h>192&&!Cs&&!Lr.has(u)){let g=!1;for(const m of _o.keys())m.startsWith(f)&&(g=!0);for(const m of Lr)m.startsWith(f)&&(g=!0);g||Ul(e,t,a,1,!1,n,s,i,l)}if(!Lr.has(u)){Lr.add(u),P0.delete(u);const g=`${t}|${Math.round(a)}|${h}|${d}`,m=D1.get(g)??[];for(m.push(u);m.length>2;){const v=m.shift();P0.add(v),Lr.delete(v)}D1.set(g,m);const x=ff(e,u,h,n,s,i,l);if(x)for(const v of x.steps)ql(()=>P0.has(u)?void 0:v())}Xi=!0;for(const[g,m]of _o)if(g.startsWith(f))return m;return null}function mb(e){let t=e>>>0;return()=>{t=t+1831565813|0;let a=Math.imul(t^t>>>15,1|t);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296}}function bn(e,t){return(a,o)=>{const r=a/e,n=o/e,s=Math.floor(r),i=Math.floor(n),l=r-s,h=n-i,d=l*l*(3-2*l),u=h*h*(3-2*h),c=(v,b)=>Ai(v+t*131,b-t*71),f=c(s,i),g=c(s+1,i),m=c(s,i+1),x=c(s+1,i+1);return(f+(g-f)*d)*(1-u)+(m+(x-m)*d)*u}}function gb(e,t,a){let o=e*374761393+t*668265263+a*1274126177|0;return o=Math.imul(o^o>>>13,1274126177),((o^o>>>16)>>>0)/4294967296}function bb(e,t){return(a,o,r)=>{const n=a/e,s=o/e,i=r/e,l=Math.floor(n),h=Math.floor(s),d=Math.floor(i),u=n-l,c=s-h,f=i-d,g=u*u*(3-2*u),m=c*c*(3-2*c),x=f*f*(3-2*f),v=(w,z,k)=>gb(w+t*131,z-t*71,k+t*17),b=(w,z,k)=>w+(z-w)*k,y=b(v(l,h,d),v(l+1,h,d),g),$=b(v(l,h+1,d),v(l+1,h+1,d),g),p=b(v(l,h,d+1),v(l+1,h,d+1),g),M=b(v(l,h+1,d+1),v(l+1,h+1,d+1),g);return b(b(y,$,m),b(p,M,m),x)}}function xb(e,t="custom",a=9.75,o=320,r=-1,n=0,s=vr,i=Es(r,n)){const l=nf(o),h=sf(t,a,l,rf(r,n),s,i),d=_o.get(h);if(d)return d;const u=ff(e,h,l,r,n,s,i);if(u)for(const c of u.steps)c();return _o.get(h)??{R:0,mask:null,haze:null,cut:null,core:null,dark:null,light:null,glint:null,back:null,backSoft:null}}function ff(e,t,a,o,r,n=vr,s=Es(o,r)){if(_o.has(t))return null;const i=B=>{_o.size>=24&&_o.delete(_o.keys().next().value),_o.set(t,B),Lr.delete(t),Ku()},{N:l}=e,h=a/rt,d=(B,se,le)=>gr(B,l,(se+Fe)/rt*l-.5,(le+Fe)/rt*l-.5),u=(B,se)=>d(e.sd,B,se),c=Fe+ho,f=Math.round(a*pa/rt),g={R:a,mask:null,haze:null,cut:null,core:null,dark:null,light:null,glint:null,back:null,backSoft:null},m=Zt(f),x=Zt(f),v=Zt(a),b=Zt(f),y=Zt(f),$=Zt(f),p=m&&Gt(m,!1),M=x&&Gt(x,!1),w=v&&Gt(v,!1),z=b&&Gt(b,!1),k=y&&Gt(y,!1),F=$&&Gt($,!1);if(!m||!x||!v||!b||!y||!$||!p||!M||!w||!z||!k||!F)return i(g),null;const S=mb(l*7919+17),_=bn(3.4,21),A=bn(22,9),C=bn(13,57),{length:R,density:O,fuzz:E,clumps:I,curl:P}=n,T=n.gravity??vr.gravity,Y=Math.hypot(o,r)||1,q=o/Y,j=r/Y,X=[q,j,0],K=[0,0,1],Q=[0,1,0],W=hf(X,K,s.front),N=uf([s.bx,s.by,0],K),ae=qo([W[0],W[1],W[2]+1]),G=qo([-.55*X[0]+.85*K[0]+.15*Q[0],-.55*X[1]+.85*K[1]+.15*Q[1],-.55*X[2]+.85*K[2]+.15*Q[2]]);let J=12;for(let B=-Fe;B<60;B+=.5)if(u(50,B)>.5){J=B+1;break}J-=18;const V=50,U=(B,se)=>{const le=u(B-.8,se)-u(B+.8,se),Z=u(B,se-.8)-u(B,se+.8),ne=Math.hypot(le,Z)||1;return[le/ne,Z/ne]},fe=(B,se)=>{let le=B-V,Z=se-J;const ne=Math.hypot(le,Z)||1;le/=ne,Z/=ne;const xe=T*(1-.6*Math.exp(-ne/8));let Ae=le*(1-.8*xe),ke=Z*(1-.8*xe)+xe;const Ge=u(B,se);if(Ge<5){const[ut,ft]=U(B,se),ot=Math.max(0,-ft),Ee=ut*(1-T*ot),De=ft*(1-T*ot)+1.2*T,Ke=Math.max(0,Math.min(1,1-Ge/5))*.75;Ae=Ae*(1-Ke)+Ee*Ke*1.6,ke=ke*(1-Ke)+De*Ke*1.6}const Te=(_(B,se)-.5)*(.5+1.6*P)+(C(B,se)-.5)*(.6+P),We=Math.cos(Te),Ie=Math.sin(Te),Se=Ae*We-ke*Ie,Oe=Ae*Ie+ke*We,Le=Math.hypot(Se,Oe)||1;return[Se/Le,Oe/Le]},H=[],de=(B,se,le)=>{for(let Z=0;Z<B;Z+=se)H.push(()=>le(Z,Math.min(B,Z+se)))},oe=(B,se)=>d(e.h,B,se),ue=(B,se)=>{const le=(oe(B+.6,se)-oe(B-.6,se))/1.2,Z=(oe(B,se+.6)-oe(B,se-.6))/(2*.6),ne=Math.hypot(le,Z);return[ne>1e-6?-le/ne:0,ne>1e-6?-Z/ne:0,ne/Math.sqrt(1+ne*ne)]},te=112,Xe=pa/te,qe=new Float32Array(te*te),ge=new Float32Array(te*te),he=new Float32Array(te*te),be=new Float32Array(te*te),ze=new Float32Array(te*te),Qe=new Float32Array(te*te),ie=new Float32Array(te*te),_e=new Float32Array(te*te),ve=new Float32Array(te*te),Ne=new Float32Array(te*te),He=new Float32Array(te*te),Ue=new Float32Array(te*te),Ot=new Float32Array(te*te);de(te,28,(B,se)=>{for(let le=B,Z=B*te;le<se;le++)for(let ne=0;ne<te;ne++,Z++){const xe=(ne+.5)*Xe-c,Ae=(le+.5)*Xe-c;let[ke,Ge]=fe(xe,Ae);const[Te,We,Ie]=ue(xe,Ae),Se=Ie*(.25+.5*(1-T))*(1-T*Math.max(0,-We));ke=ke*(1-Se)+Te*Se,Ge=Ge*(1-Se)+(We+.35*T)*Se;const Oe=Math.hypot(ke,Ge)||1;ke/=Oe,Ge/=Oe,qe[Z]=ke,ge[Z]=Ge,he[Z]=Ie;let Le=Te*Ie,ut=We*Ie,ft=Math.sqrt(Math.max(0,1-Ie*Ie));const ot=u(xe,Ae);if(ot<2){const[bt,xt]=U(xe,Ae),Mt=ot>=0?.7*(1-ot/2):Math.min(1,.7-.2*ot);Le+=Mt*(bt-Le),ut+=Mt*(xt-ut),ft-=Mt*ft;const Lt=Math.hypot(Le,ut,ft)||1;Le/=Lt,ut/=Lt,ft/=Lt}be[Z]=Le,ze[Z]=ut,Qe[Z]=ft,ie[Z]=Dt(-3.5,-1.5,ot),Ot[Z]=A(xe,Ae),He[Z]=ot>0?oe(xe,Ae):0;const Ee=Math.sqrt(Le*Le+ut*ut),De=Ee>1e-4?Le/Ee:0,Ke=Ee>1e-4?ut/Ee:0,tt=ke*De+Ge*Ke,lt=(1-Math.max(0,ft))*tt;let mt=li*(ke-lt*De)+X1*Ee*De,ct=li*(Ge-lt*Ke)+X1*Ee*Ke;const gt=Dt(-.5,1.5,ot);mt=ke+(mt-ke)*gt,ct=Ge+(ct-Ge)*gt;const wt=Math.sqrt(mt*mt+ct*ct)||1;_e[Z]=mt/wt,ve[Z]=ct/wt,Ne[Z]=1+(Math.min(1,wt)-1)*gt}}),H.push(()=>{const B=new Float32Array(te*te),se=Float32Array.from(He);for(let le=0;le<3;le++){for(let Z=0,ne=0;Z<te;Z++)for(let xe=0;xe<te;xe++,ne++){let Ae=0;for(let ke=-2;ke<=2;ke++)Ae+=se[Z*te+Math.min(te-1,Math.max(0,xe+ke))];B[ne]=Ae/5}for(let Z=0,ne=0;Z<te;Z++)for(let xe=0;xe<te;xe++,ne++){let Ae=0;for(let ke=-2;ke<=2;ke++)Ae+=B[Math.min(te-1,Math.max(0,Z+ke))*te+xe];se[ne]=Ae/5}}for(let le=0,Z=0;le<te;le++)for(let ne=0;ne<te;ne++,Z++){const xe=Dt(.2,2,u((ne+.5)*Xe-c,(le+.5)*Xe-c)),Ae=Dt(.3,3.5,se[Z]-He[Z])*xe,ke=Dt(.15,.85,ze[Z])*(1-Qe[Z]);Ue[Z]=Math.min(1,Ae+.45*ke)*ie[Z]}});const Rt=(B,se,le)=>gr(B,te,(se+c)/Xe-.5,(le+c)/Xe-.5),Wt=(B,se)=>{const le=Rt(_e,B,se),Z=Rt(ve,B,se),ne=Math.sqrt(le*le+Z*Z);return ne>1e-4?[le/ne,Z/ne]:[0,1]},ta=(B,se)=>{const le=Rt(qe,B,se),Z=Rt(ge,B,se),ne=Math.sqrt(le*le+Z*Z);return ne>1e-4?[le/ne,Z/ne]:[0,1]},$t=f>>1,aa=$t/pa,Ut=new Float32Array($t*$t),la=new Float32Array($t*$t),nt=(B,se,le)=>gr(B,$t,(se+c)*aa-.5,(le+c)*aa-.5),At=bn(.7+.35*R,61),re=bn(2.2+.6*R,67),we=(.2+.5*E)*Math.min(1.8,R),Be=(B,se)=>{const le=.3*Math.max(-1.6,Math.min(1.6,nt(Ut,B,se)))/1.6+.25*(At(B,se)-.5)*2.4+.45*(re(B,se)-.5)*2.4;return we*Math.max(-1,Math.min(1,le))},ee=(.8+.45*R)*(.65+.4*I),pe=1.5+1.6*R,Me=.32*ee*(.15+.85*I),me=new Float32Array(f*f).fill(-.25*Me),ye=new Int32Array(f*f).fill(-1),Re=16,at=Math.sqrt(.6*ee*pe/qg/W0),Ve=Math.ceil(pa/at),$e=new Float32Array(Ve*Ve*Re);let _t=0;const dt=.45-.2*T,Ce=bb(1.6*pe,79),ht=bn(9,73),vt=1.5*Me*(.25+I);H.push(()=>{for(let B=0;B<Ve;B++)for(let se=0;se<Ve;se++){const le=(se+S())*at-c,Z=(B+S())*at-c,ne=S(),xe=S(),Ae=S(),ke=S(),Ge=S(),Te=S(),We=S();let Ie=Rt(be,le,Z),Se=Rt(ze,le,Z),Oe=Rt(Qe,le,Z);const Le=Math.hypot(Ie,Se,Oe)||1;Ie/=Le,Se/=Le,Oe/=Le;const[ut,ft]=ta(le,Z),ot=(ne-.5)*(.2+.45*P),Ee=Math.cos(ot),De=Math.sin(ot),Ke=ut*Ee-ft*De,tt=ut*De+ft*Ee,lt=Ke*Ie+tt*Se;let mt=Ke-lt*Ie,ct=tt-lt*Se,gt=-lt*Oe,wt=Math.hypot(mt,ct,gt);wt<.05&&(mt=Oe*Ie,ct=Oe*Se,gt=Oe*Oe-1,wt=Math.hypot(mt,ct,gt)||1),mt/=wt,ct/=wt,gt/=wt;let bt=Se*gt-Oe*ct,xt=Oe*mt-Ie*gt,Mt=Ie*ct-Se*mt;const Lt=dt+.2*xe,ca=Math.cos(Lt),ra=Math.sin(Lt),Ha=.8+.45*ht(le,Z),Ba=ee*Ha*(.8+.4*Ae),$a=pe*Ha*(.75+.5*ke);let na=(mt*ca+Ie*ra)*$a*h,Yt=(ct*ca+Se*ra)*$a*h,Xt=Math.hypot(na,Yt);Xt<1.5?(na=Ke,Yt=tt,Xt=1.5):(na/=Xt,Yt/=Xt);let sa=-bt*Yt+xt*na;sa<0&&(bt=-bt,xt=-xt,Mt=-Mt,sa=-sa);const va=Math.max(.6,.5*Ba*h*Math.max(.15,sa)),La=Xt/($a*h)*(va/(.5*Ba*h)),Vt=Ce(le,Z,oe(le,Z));if(Ge>W0/Math.max(W0,La)*(1-Gg*I*(1-Dt(.25,.65,Vt))))continue;const Ft=_t++*Re;$e[Ft]=(le+c)*h,$e[Ft+1]=(Z+c)*h,$e[Ft+2]=na,$e[Ft+3]=Yt,$e[Ft+4]=Xt,$e[Ft+5]=va,$e[Ft+6]=.1*Me*Te+vt*Vt,$e[Ft+7]=(We-.5)*1.2*P,$e[Ft+8]=mt,$e[Ft+9]=ct,$e[Ft+10]=gt,$e[Ft+11]=bt,$e[Ft+12]=xt,$e[Ft+13]=Mt,$e[Ft+14]=$a,$e[Ft+15]=Ba}});const zt=B=>(B<.25?4*B:1)*(1-.5*B),Ht=6;for(let B=0;B<Ht;B++)H.push(()=>{const se=Math.floor(_t*B/Ht),le=Math.floor(_t*(B+1)/Ht);for(let Z=se;Z<le;Z++){const ne=Z*Re,xe=$e[ne],Ae=$e[ne+1],ke=$e[ne+2],Ge=$e[ne+3],Te=$e[ne+4],We=$e[ne+5],Ie=$e[ne+6],Se=$e[ne+7],Oe=We*(1+Math.abs(Se))+1,Le=xe+ke*Te,ut=Ae+Ge*Te,ft=Math.max(0,Math.floor(Math.min(xe,Le)-Oe)),ot=Math.min(f-1,Math.ceil(Math.max(xe,Le)+Oe)),Ee=Math.max(0,Math.floor(Math.min(Ae,ut)-Oe)),De=Math.min(f-1,Math.ceil(Math.max(Ae,ut)+Oe)),Ke=1/Te,tt=1/We;for(let lt=Ee;lt<=De;lt++){const mt=lt+.5-Ae;for(let ct=ft,gt=lt*f+ft;ct<=ot;ct++,gt++){const wt=ct+.5-xe,bt=(wt*ke+mt*Ge)*Ke;if(bt<=0||bt>=1)continue;const xt=T0*Math.sqrt(bt)*(1-bt),Mt=(mt*ke-wt*Ge)*tt-Se*bt*bt;if(Mt>=xt||Mt<=-xt)continue;const Lt=Mt/xt,ca=Ie+Me*zt(bt)*(1-Lt*Lt);ca>me[gt]&&(me[gt]=ca,ye[gt]=Z)}}}});const It=new Float32Array(f*f),st=Math.max(1,Math.round(.3*ee*h)),Ze=new Float32Array(f),et=(B,se,le,Z,ne)=>{const xe=ne===1?f:1,Ae=1/(2*le+1),ke=We=>Ze[We<0?0:We>=f?f-1:We],Ge=Z*xe;for(let We=0;We<f;We++)Ze[We]=B[Ge+We*ne];let Te=0;for(let We=-le;We<=le;We++)Te+=ke(We);for(let We=0;We<f;We++)se[Ge+We*ne]=Te*Ae,Te+=ke(We+le+1)-ke(We-le)};H.push(()=>{for(let B=0;B<f;B++)et(me,It,st,B,1);for(let B=0;B<f;B++)et(It,It,st,B,1)}),H.push(()=>{for(let B=0;B<f;B++)et(It,It,st,B,f);for(let B=0;B<f;B++)et(It,It,st,B,f)}),H.push(()=>{for(let B=0;B<f;B++)et(me,me,1,B,1);for(let B=0;B<f;B++)et(me,me,1,B,f)});const kt=new ImageData(f,f),_a=new ImageData(f,f),ao=new ImageData(f,f),ja=new ImageData(f,f),qa=new ImageData(f,f),Ga=new Float32Array(f*f),Je=new Float32Array(11),Ua=(B,se,le,Z,ne)=>{const xe=Math.min(te-1,Math.max(0,(B+c)/Xe-.5)),Ae=Math.min(te-1,Math.max(0,(se+c)/Xe-.5)),ke=Math.min(te-2,xe|0),Ge=Math.min(te-2,Ae|0),Te=xe-ke,We=Ae-Ge,Ie=Ge*te+ke,Se=(1-Te)*(1-We),Oe=Te*(1-We),Le=(1-Te)*We,ut=Te*We,ft=Ft=>Ft[Ie]*Se+Ft[Ie+1]*Oe+Ft[Ie+te]*Le+Ft[Ie+te+1]*ut;let ot=ft(be),Ee=ft(ze),De=ft(Qe);const Ke=Math.sqrt(ot*ot+Ee*Ee+De*De)||1;ot/=Ke,Ee/=Ke,De/=Ke;const tt=ot*W[0]+Ee*W[1]+De*W[2];Je[4]=ot,Je[5]=Ee,Je[6]=De,Je[7]=tt,Je[8]=ft(Ue);const lt=ft(ie);if(Je[9]=lt,Je[10]=ft(Ot),lt<=0){Je[0]=Je[1]=Je[3]=0,Je[2]=.7;return}const mt=Dt(-.2,.5,tt),ct=le*ot+Z*Ee;let gt=le-ct*ot,wt=Z-ct*Ee,bt=-ct*De;const xt=Math.sqrt(gt*gt+wt*wt+bt*bt);xt>.001?(gt/=xt,wt/=xt,bt/=xt):(gt=0,wt=0,bt=1);const Mt=Math.cos(ne),Lt=Math.sin(ne);gt=gt*Mt+ot*Lt,wt=wt*Mt+Ee*Lt,bt=bt*Mt+De*Lt;const ca=gt*ae[0]+wt*ae[1]+bt*ae[2],ra=ot*ae[0]+Ee*ae[1]+De*ae[2],Ha=ca-.12*ra,Ba=ca+.2*ra,$a=Math.max(0,1-Ha*Ha),na=$a*$a,Yt=na*na,Xt=Yt*Yt,sa=Xt*Xt,va=Math.max(0,1-Ba*Ba),La=va*va;Je[0]=mt*(.85*sa*sa*Yt+.15*La*La),Je[0]*=(.4+.6*(1-Dt(.35,.85,tt)))*lt;const Vt=Math.sqrt(Math.max(0,1-bt*bt));Je[1]=Dt(-.3,.6,ot*N[0]+Ee*N[1]+De*N[2])*Math.pow(1-De,1.6)*(.4+.6*Vt)*(1-.6*Math.max(0,Ee))*lt,Je[3]=Dt(-.5,.75,ot*N[0]+Ee*N[1]+De*N[2])*Math.pow(1-De,.85)*(1-.6*Math.max(0,Ee))*lt,Je[2]=mt*lt+.7*(1-lt)};H.push(()=>{for(let B=0,se=0;B<f;B++)for(let le=0;le<f;le++,se++){const Z=Ai(le+911,B+37);Ga[se]=Z*Z*Z}});const Ra=.25,Fa=Math.sqrt(1/7-1/16),go=Math.max(1,Math.round((.35+.4*R)*h)),Vo=[],oo=new Float32Array(2*go+1),bo=new Float32Array(2*go+1);for(let B=0;B<=2*go;B++){const se=new Float32Array(B+1);let le=0,Z=0;for(let ne=0;ne<=B;ne++){const xe=B?ne/B:0,Ae=xe<=ci?1:(1-xe)/(1-ci);se[ne]=1-ob*xe,le+=se[ne]*Ae*Ra,Z+=se[ne]*se[ne]*(Ae/7-Ra*Ra*Ae*Ae)}Vo.push(se),oo[B]=le,bo[B]=Math.sqrt(Math.max(1e-6,Z))}const Gn=.12*(a>=512?1:a>=320?.75:.4)*Math.min(1.4,.55+.35*O),wr=Math.max(1,1.5*ee*h),je=Math.max(1,Math.min(5,Math.round(wr))),it=new Int32Array(je),yt=new Int32Array(je),Et=new Float32Array(je);for(let B=0;B<je;B++){const se=(B+1)/je*wr;it[B]=Math.round(q*se),yt[B]=Math.round(j*se),Et[B]=Math.hypot(it[B],yt[B])/h}const oa=Ni(1.35),xa=Ni(1/2.2),ea=B=>{const se=(B+L1)/(1+L1);return se<=0?0:se>=1?1:oa[se*Wn|0]},da=a>=512?1:a>=320?.8:.55,Bt=new Float32Array(4),Pa=(B,se,le,Z,ne)=>{if(ne<0){const[lt,mt]=Wt(le,Z);Bt[0]=lt,Bt[1]=mt,Bt[2]=.5,Bt[3]=0;return}const xe=ne*Re,Ae=$e[xe+2],ke=$e[xe+3],Ge=$e[xe+4],Te=$e[xe+5],We=$e[xe+7],Ie=B+.5-$e[xe],Se=se+.5-$e[xe+1],Oe=Math.min(.995,Math.max(.005,(Ie*Ae+Se*ke)/Ge)),Le=Math.sqrt(Oe),ut=T0*Le*(1-Oe),ft=T0*(.5*(1-Oe)/Le-Le),ot=Math.max(-1,Math.min(1,((Se*Ae-Ie*ke)/Te-We*Oe*Oe)/ut)),Ee=Math.max(-1.2,Math.min(1.2,ot*ft+2*We*Oe)),De=Ge*Ae-Ee*Te*ke,Ke=Ge*ke+Ee*Te*Ae,tt=Math.sqrt(De*De+Ke*Ke)||1;Bt[0]=De/tt,Bt[1]=Ke/tt,Bt[2]=Oe,Bt[3]=zt(Oe)*(1-ot*ot)},ga=new Float32Array(f*f);de(f,32,(B,se)=>{for(let le=B;le<se;le++){const Z=(le+.5)/h-c;for(let ne=0,xe=le*f;ne<f;ne++,xe++){const Ae=(ne+.5)/h-c;Pa(ne,le,Ae,Z,ye[xe]);const ke=Bt[0],Ge=Bt[1],Te=Math.min(te-1,Math.max(0,(Ae+c)/Xe-.5)),We=Math.min(te-1,Math.max(0,(Z+c)/Xe-.5)),Ie=Math.min(te-2,Te|0),Se=Math.min(te-2,We|0),Oe=Te-Ie,Le=We-Se,ut=Se*te+Ie,ft=(he[ut]*(1-Oe)+he[ut+1]*Oe)*(1-Le)+(he[ut+te]*(1-Oe)+he[ut+te+1]*Oe)*Le,ot=(Ne[ut]*(1-Oe)+Ne[ut+1]*Oe)*(1-Le)+(Ne[ut+te]*(1-Oe)+Ne[ut+te+1]*Oe)*Le,Ee=2*Math.max(1,Math.min(go,Math.round(go*(.5+.5*ft)*ot/li))),De=Vo[Ee];let Ke=0,tt=0;for(let ct=0;ct<=Ee;ct++){const gt=Math.round(ne-ke*ct),wt=Math.round(le-Ge*ct);if(gt<0||wt<0||gt>=f||wt>=f){Ke+=oo[Ee]/(Ee+1);continue}const bt=Ga[wt*f+gt],xt=bt*53.7,Mt=Ee*(ci+(1-ci)*(xt-Math.floor(xt)));ct<=Mt&&(Ke+=bt*De[ct],tt+=bt*De[ct]*ct/(Mt||1))}const lt=(Ke-oo[Ee])/bo[Ee],mt=Ke>1e-4?tt/Ke:.5;ga[xe]=lt+rb*Math.min(2.5,Math.max(0,lt))*(mt-.45)}}});let ro=0,xo=0;de(f,16,(B,se)=>{const le=kt.data,Z=_a.data,ne=ao.data,xe=ja.data,Ae=qa.data;for(let ke=B;ke<se;ke++){const Ge=(ke+.5)/h-c;for(let Te=0;Te<f;Te++){const We=(Te+.5)/h-c,Ie=ke*f+Te,Se=ye[Ie],Oe=Se*Re;Pa(Te,ke,We,Ge,Se);const Le=Bt[0],ut=Bt[1],ft=Bt[2],ot=Bt[3];Ua(We,Ge,Le,ut,.25+.2*ot);const Ee=Je[4],De=Je[5],Ke=Je[6],tt=Je[7],lt=Te>0?Ie-1:Ie,mt=Te<f-1?Ie+1:Ie,ct=ke>0?Ie-f:Ie,gt=ke<f-1?Ie+f:Ie,wt=(me[mt]-me[lt])*h/(mt-lt||1),bt=(me[gt]-me[ct])*h*f/(gt-ct||1),xt=Math.sqrt(Ee*Ee+De*De);let Mt=1,Lt=0,ca=0,ra=1,Ha=0;xt>.001&&(Mt=-De/xt,Lt=Ee/xt,ca=-Ke*Ee/xt,ra=-Ke*De/xt,Ha=xt);const Ba=Math.max(-1.5,Math.min(1.5,wt*Mt+bt*Lt)),$a=Math.max(-1.5,Math.min(1.5,wt*ca+bt*ra));let na=Ee-Ba*Mt-$a*ca,Yt=De-Ba*Lt-$a*ra,Xt=Ke-$a*Ha;const sa=Math.sqrt(na*na+Yt*Yt+Xt*Xt)||1;na/=sa,Yt/=sa,Xt/=sa;let va=1;if(Se>=0){const Sa=$e[Oe+8],So=$e[Oe+9],Ka=$e[Oe+10],Qa=.9*Sa+.44*Ee,zo=.9*So+.44*De,Co=.9*Ka+.44*Ke,er=(Qa*W[0]+zo*W[1]+Co*W[2])/(Math.sqrt(Qa*Qa+zo*zo+Co*Co)||1);va=1-Y1+Y1*Math.min(1.2,Math.sqrt(Math.max(0,1-er*er))/.85)}const La=na*W[0]+Yt*W[1]+Xt*W[2],Vt=me[Ie];let Ft=1;if(tt>-.25){const Sa=Math.min(.97,Math.max(.05,tt)),So=Sa/Math.sqrt(1-Sa*Sa);let Ka=0;for(let Qa=0;Qa<je;Qa++){const zo=Te+it[Qa],Co=ke+yt[Qa];if(zo<0||Co<0||zo>=f||Co>=f)break;const er=me[Co*f+zo]-Vt-Et[Qa]*So;er>Ka&&(Ka=er)}Ft=1-Ug*Dt(0,.35*Me,Ka)}let Zo=1-Vg*Dt(0,.6*Me,It[Ie]-Vt);Se>=0&&(Zo*=1-Kg*(1-Dt(0,.35,ft)));const no=H1+B1*Math.max(0,na*G[0]+Yt*G[1]+Xt*G[2]),Va=H1+B1*Math.max(0,Ee*G[0]+De*G[1]+Ke*G[2]);let Kt=Zo*(no+ea(La)*Ft*va)*Qg/(Va+ea(tt));Se>=0&&(Kt*=(1+.15*ft*ft)*(1+.08*(Ai(Se,5)-.5)));const wo=Je[8];Kt*=1-eb*wo*(.6+.4*Dt(0,.6*Me,It[Ie]-Vt)),Kt=1+(Kt-1)*da;const Ya=Je[9],so=(Va+ea(tt))/ab,$o=(so>=1?1:xa[so*Wn|0])*Ya+.75*(1-Ya);let io=Math.sqrt(Kt>2.4?2.4:Kt);io>1&&(io=1+(io-1)/(1+2.5*$o*(io-1)));const Ar=ga[Ie];let Ns=0;if(tt>0){const Sa=W[0]-tt*Ee,So=W[1]-tt*De,Ka=Math.sqrt(1-tt*tt),Qa=Ka>.001?nb*h*Math.min(3,Ka/Math.max(.2,tt))/Ka:0,zo=Math.min(f-1.001,Math.max(0,Te+Sa*Qa)),Co=Math.min(f-1.001,Math.max(0,ke+So*Qa)),er=zo|0,oc=Co|0,js=zo-er,rc=Co-oc,qs=oc*f+er,Ef=(ga[qs]*(1-js)+ga[qs+1]*js)*(1-rc)+(ga[qs+f]*(1-js)+ga[qs+f+1]*js)*rc;Ns=Math.max(0,Ef-Math.max(0,Ar))*Dt(0,.3,tt)}let _r=io*(1+Gn*(Ar*(.45+.55*Je[2])*(.75+.5*ft)-sb*Ns))+.04*(Je[10]-.5)+Jg*da*Ya;const ba=Math.min(We+c,pa-c-We,Ge+c,pa-c-Ge),e0=ba>=8?1:ba<=0?0:ba/8*(ba/8)*(3-2*ba/8);_r=1+(_r-1)*e0;const ha=Ie*4;_r<1?le[ha+3]=Math.round(255*Math.min(1,(1-_r)*$o/Math.max(.4,$o-cf))):(Z[ha]=Z[ha+1]=Z[ha+2]=255,Z[ha+3]=Math.round(255*Math.min(1,Zg*(N1-1)*$o/(N1-$o)*(_r-1)*(1-.7*wo))));const ko=Math.max(-2,Math.min(2,4*(io-1))),Ct=Te>>1,Tt=ke>>1;if(Ct<$t&&Tt<$t){const Sa=Tt*$t+Ct;Ut[Sa]+=.25*Vt,la[Sa]+=.25*ko}const ka=Dt(-.4,1,ko)*Math.max(0,Math.min(1.4,.65+.25*Ar));ne[ha]=ne[ha+1]=ne[ha+2]=xe[ha]=xe[ha+1]=xe[ha+2]=255,ne[ha+3]=Math.round(255*Math.min(1,Je[0]*ka)),xe[ha+3]=Math.round(255*Math.min(1,Je[1]*Math.max(0,Math.min(1.6,.5+.4*Ar))));const Jo=Math.max(.55,Math.min(1.3,.85+.15*Ar+.12*ko));Ae[ha]=Ae[ha+1]=Ae[ha+2]=255,Ae[ha+3]=Math.round(255*Math.min(1,.85*Je[3]*Jo))}}}),H.push(()=>{const B=$t*$t;for(let Z=0;Z<B;Z++)ro+=Ut[Z],xo+=Ut[Z]*Ut[Z];const se=ro/B,le=Math.sqrt(Math.max(1e-9,xo/B-se*se));for(let Z=0;Z<B;Z++)Ut[Z]=Math.max(-2.5,Math.min(2.5,(Ut[Z]-se)/le))}),H.push(()=>{p.putImageData(kt,0,0),M.putImageData(_a,0,0),z.putImageData(ao,0,0),F.putImageData(qa,0,0),k.putImageData(ja,0,0);for(const B of[p,M,z,k])B.setTransform(1,0,0,1,ho*h,ho*h),B.lineCap="round",B.lineJoin="round"});const Wa=16,Ta=pa*pa,vo=a>=512?1:a>=320?.45:0,$r=[{count:.12,len:1.2,vary:1,endOn:.6,width:.09,spread:30,alpha:.4,deep:1,lift:.25,light:.46,dark:.34,bend:.93,clump:[1,0],clumpW:0,shadow:0,shadowW:1,over:0,crowd:!1,short:0},{count:.4*vo,len:.9,vary:1.2,endOn:.35,width:.13,spread:100,alpha:.26,deep:.2,lift:.18,light:.55,dark:.06,bend:1.2,clump:[1,Math.round(1+2*I)],clumpW:.08+.07*I,shadow:.25,shadowW:2,over:.25,crowd:!0,short:1}],Po=B=>Math.min(Wa-1,Math.max(0,Math.round((Math.max(-1,Math.min(1,B))+1)/2*(Wa-1)))),Ma=6,Ea=B=>Math.min(Ma-1,B*Ma|0),ln=4,ya=new Float32Array(ln+1),Da=new Float32Array(ln+1);for(const B of $r){if(B.count<=0)continue;const se=B.clump[0]+.5*B.clump[1],le=Math.max(1,Math.ceil(Ta*B.count*O*(B.crowd?2:1)*(.5+.5*se)/9e3));for(let Z=0;Z<le;Z++)H.push(()=>{const ne=[],xe=[],Ae=[],ke=[];for(let Se=0;Se<Wa;Se++)ne.push(new Path2D);for(let Se=0;Se<Ma;Se++)xe.push(new Path2D),Ae.push(new Path2D);for(let Se=0;Se<3;Se++)ke.push(new Path2D);const Ge=new Path2D,Te=Math.round(Ta*B.count*O*(B.crowd?2:1)/le);for(let Se=0;Se<Te;Se++){const Oe=S()*pa-c,Le=S()*pa-c,ut=S(),ft=S(),ot=S(),Ee=S(),De=S(),Ke=S();if(Ke*8>Math.min(Oe+c,pa-c-Oe,Le+c,pa-c-Le)||B.crowd&&Ke>(u(Oe,Le)>0?.5/Math.max(.25,Rt(Qe,Oe,Le)):.5))continue;const[tt,lt]=Wt(Oe,Le),mt=Rt(he,Oe,Le),ct=Rt(Ne,Oe,Le)/li,gt=(ft-.5)*(.6+.8*P)*(1-.5*mt),wt=Math.cos(gt),bt=Math.sin(gt),xt=tt*wt-lt*bt,Mt=tt*bt+lt*wt,Lt=ot<.1?1.35+.6*Ee:1,ca=(B.len+B.vary*Ee*Ee)*h*R*Lt*ct*(1-B.endOn+1.25*B.endOn*mt);Ua(Oe,Le,xt,Mt,.1+.5*Ai(Se,7+Z));let ra=.22*nt(Ut,Oe,Le)+.3*nt(la,Oe,Le);const Ha=ut<B.light*(.4+.6*Je[2]);Ha?ra+=.2+.28*De:ut<B.light+B.dark&&(ra-=.2+.28*De),ra+=B.lift,ra+=.45*(Je[2]-.5)-.35*Je[8],ra>0&&(ra*=.3+.7*Je[2]);const Ba=.15*(1-Je[2]),$a=(Oe+Fe)*h,na=(Le+Fe)*h,Yt=(S()-.5)*B.bend*P*ca,Xt=De<.3?-.6*Yt:Yt*(.6+.8*S()),sa=B.clump[0]+(S()*(B.clump[1]+1)|0),va=B.clumpW*h*Math.min(1.5,R);for(let La=0;La<sa;La++){const Vt=sa>1?S()-.5:0,Ft=sa>1?.7+.3*S():1,Zo=sa>1?(S()-.5)*.3:0,no=$a-Mt*Vt*va,Va=na+xt*Vt*va,Kt=ca*Ft,wo=Yt+Zo*Kt,Ya=Xt+Zo*Kt-Vt*va*.7,so=no+xt*Kt*.33-Mt*wo,$o=Va+Mt*Kt*.33+xt*wo,io=no+xt*Kt*.67-Mt*Ya,Ar=Va+Mt*Kt*.67+xt*Ya,Ns=no+xt*Kt-Mt*(Xt-Vt*va*.75),_r=Va+Mt*Kt+xt*(Xt-Vt*va*.75),ba=Kt<4?2:Kt<10?3:ln;for(let Ct=0;Ct<=ba;Ct++){const Tt=Ct/ba,ka=1-Tt,Jo=ka*ka*ka,Sa=3*ka*ka*Tt,So=3*ka*Tt*Tt,Ka=Tt*Tt*Tt;ya[Ct]=Jo*no+Sa*so+So*io+Ka*Ns,Da[Ct]=Jo*Va+Sa*$o+So*Ar+Ka*_r}const e0=ra+(sa>1?(S()-.5)*.25:0),ha=.3+.15*Je[2];for(let Ct=0;Ct<ba;Ct++){const Tt=ne[Po(e0-.3-Ba*(1-Ct/ba)+ha*(Ct+.5)/ba)];Tt.moveTo(ya[Ct],Da[Ct]),Tt.lineTo(ya[Ct+1],Da[Ct+1])}if(Ha&&B.over>0){Ge.moveTo(ya[1],Da[1]);for(let Ct=2;Ct<=ba;Ct++)Ge.lineTo(ya[Ct],Da[Ct])}if(La===0&&B.shadow>0&&Je[2]>.25&&ra>-.2){const Ct=B.shadow*h*Math.min(1,R),Tt=ke[Math.min(2,(Je[2]-.25)*4|0)];for(let ka=1;ka<=ba;ka++){const Jo=ka/ba,Sa=-q*Ct*Jo,So=-j*Ct*Jo+.3*Ct*Jo;ka===1&&Tt.moveTo(ya[0],Da[0]),Tt.lineTo(ya[ka]+Sa,Da[ka]+So)}}const ko=ba>>1;if(Je[0]>.3){const Ct=xe[Ea(Je[0])];Ct.moveTo(ya[ko],Da[ko]);for(let Tt=ko+1;Tt<=ba;Tt++)Ct.lineTo(ya[Tt],Da[Tt])}if(Je[1]>.1){const Ct=Ae[Ea(Je[1])];Ct.moveTo(ya[ko],Da[ko]);for(let Tt=ko+1;Tt<=ba;Tt++)Ct.lineTo(ya[Tt],Da[Tt])}}}const We=Math.min(1,R)**B.short,Ie=Math.max(.45,B.width*h*(.5+.5*We));if(B.over>0&&(p.globalCompositeOperation="destination-out",p.lineWidth=Ie,p.globalAlpha=B.over*We,p.strokeStyle="#000",p.stroke(Ge),p.globalCompositeOperation="source-over"),B.shadow>0){p.lineWidth=Ie*B.shadowW,p.strokeStyle="#000";for(let Se=0;Se<3;Se++)p.globalAlpha=.03*(Se+1)*We,p.stroke(ke[Se])}for(let Se=0;Se<Wa;Se++){const Oe=Do+(Se/(Wa-1)*2-1)*B.spread,Le=Oe<Do?p:M;Le.lineWidth=Ie,Le.globalAlpha=B.alpha*We*(Oe<Do?B.deep*(1-Oe/Do):(Oe-Do)/(255-Do)),Le.strokeStyle=Oe<Do?"#000":"#fff",Le.stroke(ne[Se])}for(const Se of[z,k])Se.lineWidth=Ie,Se.strokeStyle="#fff";for(let Se=0;Se<Ma;Se++)z.globalAlpha=.4*(Se+.5)/Ma,k.globalAlpha=.8*(Se+.5)/Ma,z.stroke(xe[Se]),k.stroke(Ae[Se]);p.globalAlpha=M.globalAlpha=z.globalAlpha=k.globalAlpha=1})}const kr=new Path2D,Un=[];for(let B=0;B<Ma;B++)Un.push(new Path2D);const Wo=[],Mo=rt/l;let Ko=0;const Vn=2;for(let B=0;B<Vn;B++)H.push(()=>{if(B===0){for(let le=0;le<l*l;le++)e.sd[le]>-1.6&&e.sd[le]<2.2&&Wo.push(le);Ko=Math.round(Wo.length*Mo*Mo*24*(.3+1.4*E)*Math.sqrt(O)*(.5+.5*Math.min(1,a/512))*(1-.55*vo))}const se=Math.floor(Ko*(B+1)/Vn);for(let le=Math.floor(Ko*B/Vn);le<se;le++){const Z=Wo[S()*Wo.length|0],ne=(Z%l+S())*Mo-Fe,xe=((Z/l|0)+S())*Mo-Fe,Ae=u(ne,xe);if(Ae<-1.2||Ae>1.8)continue;const ke=Ae+Be(ne,xe);if(ke<-.2||ke>1.2)continue;const[Ge,Te]=fe(ne,xe),[We,Ie]=U(ne,xe),Se=(S()-.5)*1.1,Oe=Math.cos(Se),Le=Math.sin(Se);let ut=Ge*Oe-Te*Le,ft=Ge*Le+Te*Oe;const ot=S(),Ee=1+.5*T*Math.max(0,Ie)-.35*T*Math.max(0,-Ie);let De=(.3+1.5*ot*ot*ot)*h*R*(.5+E)*Ee;const Ke=(ne+Fe)*h,tt=(xe+Fe)*h;let lt=(S()-.5)*1.17*P*De;Ie<-.3&&S()<.06*(.3+E)&&(ut=We*.8+(S()-.5)*.6,ft=Ie*.8,De*=1.2,lt=(S()<.5?-1:1)*(.25+.3*T)*De),kr.moveTo(Ke,tt);const mt=Ke+ut*De*.5-ft*lt,ct=tt+ft*De*.5+ut*lt,gt=Ke+ut*De,wt=tt+ft*De+T*De*.25;if(kr.quadraticCurveTo(mt,ct,gt,wt),Ua(ne,xe,ut,ft,.3),Je[1]>.08){const bt=Un[Ea(Je[1])];bt.moveTo(Ke,tt),bt.quadraticCurveTo(mt,ct,gt,wt)}}});const yo=new Path2D,Kn=[new Path2D,new Path2D,new Path2D],wa=[];for(let B=0;B<Ma;B++)wa.push(new Path2D);H.push(()=>{const B=Wo.length*Mo*Mo,se=B/3.8,le=Math.round(se/(.45+.3*R)*(.3+.8*E)*Math.sqrt(O)*(1+.6*vo));for(let Z=0,ne=0;Z<le&&ne<6*le;ne++){const xe=Wo[S()*Wo.length|0],Ae=(xe%l+S())*Mo-Fe,ke=((xe/l|0)+S())*Mo-Fe,Ge=S(),Te=S(),We=S(),Ie=S(),Se=u(Ae,ke);if(Se<-.5||Se>1.6)continue;const Oe=Se+Be(Ae,ke);if(Oe<0||Oe>.9||nt(Ut,Ae,ke)<-.4+.8*Ie)continue;Z++;const[Le,ut]=fe(Ae,ke),[ft,ot]=U(Ae,ke),Ee=(Ge-.5)*.8*(.5+P),De=Math.cos(Ee),Ke=Math.sin(Ee);let tt=.75*ft+.25*Le,lt=.75*ot+.25*ut,mt=.55*Le+.45*ft,ct=.55*ut+.45*ot+.35*T;const gt=Math.hypot(tt,lt)||1,wt=Math.hypot(mt,ct)||1;[tt,lt]=[(tt*De-lt*Ke)/gt,(tt*Ke+lt*De)/gt],[mt,ct]=[(mt*De-ct*Ke)/wt,(mt*Ke+ct*De)/wt];const bt=1+.5*T*Math.max(0,ot)-.35*T*Math.max(0,-ot),xt=(.5+1.1*Te*Te)*h*R*(.5+E)*bt,Mt=(.3+.35*We)*h*Math.min(1.5,R),Lt=(Ae+Fe)*h,ca=(ke+Fe)*h,ra=Lt+tt*xt*.5,Ha=ca+lt*xt*.5,Ba=Lt+(tt*.4+mt*.6)*xt,$a=ca+(lt*.4+ct*.6)*xt,na=-lt,Yt=tt;Ua(Ae,ke,mt,ct,.4);const Xt=Je[1]>.08?wa[Ea(Je[1])]:null,sa=Kn[Math.min(2,Je[2]*3|0)],va=4+(S()*5|0);for(let La=0;La<va;La++){const Vt=S()-.5,Ft=.7+.3*S(),Zo=(S()-.5)*.35,no=Lt+na*Vt*Mt,Va=ca+Yt*Vt*Mt,Kt=ra+na*Vt*Mt*.6,wo=Ha+Yt*Vt*Mt*.6,Ya=no+(Ba+na*(Vt*.25+Zo)*Mt-no)*Ft,so=Va+($a+Yt*(Vt*.25+Zo)*Mt-Va)*Ft;yo.moveTo(no,Va),yo.quadraticCurveTo(Kt,wo,Ya,so);const $o=.25*no+.5*Kt+.25*Ya,io=.25*Va+.5*wo+.25*so;sa.moveTo($o,io),sa.quadraticCurveTo(.5*(Kt+Ya),.5*(wo+so),Ya,so),Xt&&(Xt.moveTo($o,io),Xt.quadraticCurveTo(.5*(Kt+Ya),.5*(wo+so),Ya,so))}}}),H.push(()=>{const B=Math.max(.4,.11*h);p.lineWidth=M.lineWidth=k.lineWidth=B,p.globalCompositeOperation="destination-out",p.globalAlpha=.6,p.strokeStyle="#000",M.strokeStyle="#fff";for(let se=0;se<3;se++)p.stroke(Kn[se]),M.globalAlpha=.08+.11*se,M.stroke(Kn[se]);p.globalCompositeOperation="source-over",k.strokeStyle="#fff";for(let se=0;se<Ma;se++)k.globalAlpha=(se+.5)/Ma,k.stroke(wa[se]);p.globalAlpha=M.globalAlpha=k.globalAlpha=1,M.lineWidth=p.lineWidth=Math.max(.35,.08*h),M.globalAlpha=.5*((140-Do)/(255-Do)),M.strokeStyle="#fff",M.stroke(kr),M.globalAlpha=1,k.lineWidth=M.lineWidth,k.strokeStyle="#fff";for(let se=0;se<Ma;se++)k.globalAlpha=(se+.5)/Ma,k.stroke(Un[se]);k.globalAlpha=1,p.globalCompositeOperation="destination-out",p.globalAlpha=.7,p.strokeStyle="#000",p.stroke(kr),p.globalAlpha=1,p.globalCompositeOperation="source-over"});const Sr=new ImageData(a,a),cn=new ImageData(a,a),Bs=new ImageData(a,a),zr=.5+1.2*E,Ls=zr+we,hn=ib*(1-.6*vo),Ys=lb*(1+1.2*vo),Qo=Math.max(1,Math.round(cb*R*h)),Cr=Qo+1,Xs=Fa*Math.sqrt(1+Qo*(2*Qo+1)/(3*Cr))/Cr,un=Math.round(ho*h);return de(a,64,(B,se)=>{const le=Sr.data,Z=cn.data,ne=Bs.data;for(let xe=B;xe<se;xe++){const Ae=(xe+.5)/h-Fe;for(let ke=0;ke<a;ke++){const Ge=(ke+.5)/h-Fe,Te=(xe*a+ke)*4;le[Te]=le[Te+1]=le[Te+2]=Z[Te]=Z[Te+1]=Z[Te+2]=255;const We=u(Ge,Ae);if(We>=we+E0){le[Te+3]=ne[Te+3]=255;continue}const Ie=We<=-Ls?We:We+Be(Ge,Ae);if(Ie>=0){le[Te+3]=255,ne[Te+3]=Math.round(255*Dt(.25*E0,E0,Ie));continue}const Se=Math.min(1,-Ie/(2*zr)),Oe=Rt(be,Ge,Ae)*N[0]+Rt(ze,Ge,Ae)*N[1];if(Z[Te+3]=Math.round(255*hb*Se*Se*(3-2*Se)*(.45+.55*Dt(-.3,.6,Oe))),Ie<=-zr)continue;const Le=1+Ie/zr,ut=Le*Le*(3-2*Le),[ft,ot]=ta(Ge,Ae);let Ee=0;for(let Ke=-Qo;Ke<=Qo;Ke++){const tt=Math.round(ke+un+ft*Ke),lt=Math.round(xe+un+ot*Ke);Ee+=(tt<0||lt<0||tt>=f||lt>=f?Ra:Ga[lt*f+tt])*(1-Math.abs(Ke)/Cr)}const De=(Ee/Cr-Ra)/Xs;le[Te+3]=Math.round(255*Math.max(0,Math.min(1,ut*(hn+Ys*De))))}}}),H.push(()=>{const B=Zt(a),se=B&&Gt(B,!1);B&&se&&(se.putImageData(cn,0,0),g.haze=B),w.putImageData(Sr,0,0),w.lineCap="round",w.lineWidth=Math.max(.35,.08*h),w.strokeStyle="rgba(255,255,255,0.45)",w.stroke(kr),w.lineWidth=Math.max(.4,.11*h),w.strokeStyle="rgba(255,255,255,0.8)",w.stroke(yo);const le=Zt(a),Z=le&&Gt(le,!1);le&&Z&&(Z.putImageData(Bs,0,0),g.core=le),g.dark=m,g.light=x,g.glint=b,g.back=y,g.backSoft=$,g.mask=v,i(g)}),{steps:H}}function vb(e){if(e.cut||!e.mask)return e.cut;const t=e.mask.width,a=Zt(t),o=a&&Gt(a,!1);return a&&o&&(o.fillRect(0,0,t,t),o.globalCompositeOperation="destination-out",o.drawImage(e.mask,0,0),e.cut=a),e.cut}function Mb(e,t,a,o){const{V:r,U:n,D:s}=a,i=o.vivid??0,l=[0,0,0],h=hf(n,r,o.front),d=uf(a.K,r),u=Math.max(.03,.2-.15*o.shadow),c=Math.max(.04,.24-.13*o.shadow),f=Math.min(.7,.05+.12*o.spread),g=1.3,m=.34*Math.min(1.6,o.shadow/.35),x=qo([-.55*n[0]+.85*r[0]+.15*s[0],-.55*n[1]+.85*r[1]+.15*s[1],-.55*n[2]+.85*r[2]+.15*s[2]]),v=o.sheen??0,b=Math.min(1,Math.max(0,o.backSoft??qi)),y=.16*o.highlight*v,$=1.15*o.rim*v,p=.2+.25*i,M=Math.max(t[0],t[1],t[2],.02),w=[t[0]/M,t[1]/M,t[2]/M],z=[w[0],w[1],w[2]],k=.45*(1-i),F=.25*(1-i),S=[k+(1-k)*w[0],k+(1-k)*w[1],k+(1-k)*w[2]],_=[F+(1-F)*w[0],F+(1-F)*w[1],F+(1-F)*w[2]],A=P=>.2126*P[0]+.7152*P[1]+.0722*P[2],C=1.8+2.2*i,R=[Math.pow(t[0],C),Math.pow(t[1],C),Math.pow(t[2],C)],O=A(t)/Math.max(1e-4,A(R)),E=[R[0]*O,R[1]*O,R[2]*O],I=[w[0]*w[0]*t[0],w[1]*w[1]*t[1],w[2]*w[2]*t[2]];for(let P=0;P<ma;P++)for(let T=0;T<ma;T++){let Y=T/(ma-1)*2-1,q=P/(ma-1)*2-1,j=Y*Y+q*q;if(j>1.14)continue;if(j>1){const ve=1/Math.sqrt(j);Y*=ve,q*=ve,j=1}const X=Math.sqrt(1-j),K=Y*h[0]+q*h[1]+X*h[2],Q=Math.max(0,Y*r[0]+q*r[1]+X*r[2]),W=Y*s[0]+q*s[1]+X*s[2],N=Y*d[0]+q*d[1]+X*d[2],ae=1-Q,G=f+(.45-f)*ae*ae;let J=Math.min(1,Math.max(0,(K+G)/(1+G)));J=Math.pow(J,1.35);const V=c*Math.max(0,Y*x[0]+q*x[1]+X*x[2]),U=1-m*Math.max(0,W)*(.6+.4*ae),fe=(u+g*J+V)*U,H=Math.min(1,Math.max(0,1-fe)),de=Math.max(0,1-(K+.08)*(K+.08)/.18),oe=p*de*de*U,ue=Math.min(1,Math.max(0,(K+.2)/.8)),te=y*ae*ae*ue,Xe=Dt(-.3,.6,N),qe=Dt(.18-.12*b,.62+.18*b,ae),ge=$*qe*Math.sqrt(qe)*(.3+.7*Xe)*(1-.7*Math.max(0,W)),he=qe*qe*Math.sqrt(qe)*(1-.5*b),be=(P*ma+T)*3;let ze=0,Qe=0,ie=0;for(let ve=0;ve<3;ve++){const Ne=(t[ve]+(E[ve]-t[ve])*H*.9)*fe+oe*I[ve]+te*_[ve]+ge*(z[ve]+(S[ve]-z[ve])*he);ve===0?ze=Ne:ve===1?Qe=Ne:ie=Ne}const _e=Math.max(ze,Qe,ie);if(_e>.8){const ve=(.8+.2*(1-Math.exp(-(_e-.8)/.2)))/_e;ze*=ve,Qe*=ve,ie*=ve}i>0&&(l[0]=ze,l[1]=Qe,l[2]=ie,af(l,i,1),[ze,Qe,ie]=l),e[be]=Ca(ze),e[be+1]=Ca(Qe),e[be+2]=Ca(ie)}}const yb=.28,wb=.42,q1=new WeakMap;function $b(e,t,a=0){const o=e.dark;if(!o)return null;let r=q1.get(e);r||q1.set(e,r=new Map);const n=Math.round(Math.min(1,a)*10)/10,s=`${t}|${n}`,i=r.get(s);if(i!==void 0)return i;const l=Zt(o.width),h=l&&Gt(l,!1);if(l&&h){const d=Zr(t),u=[Ca(d[0])/255,Ca(d[1])/255,Ca(d[2])/255],c=Math.max(u[0],u[1],u[2],.001),f=.2126*u[0]+.7152*u[1]+.0722*u[2],g=Math.min(u[0],u[1],u[2])/c,m=yb+wb*f*f*g,x=p=>Math.round(255*m*p*Math.pow(p/c,3.2+3*n)),v=x(u[0]),b=x(u[1]),y=x(u[2]),$=(.2126*v+.7152*b+.0722*y)/255/Math.max(.001,f);h.globalAlpha=Math.min(1,Math.sqrt((1-cf)/Math.max(.05,1-$))),h.drawImage(o,0,0),h.globalAlpha=1,h.globalCompositeOperation="source-in",h.fillStyle=`rgb(${v} ${b} ${y})`,h.fillRect(0,0,o.width,o.height)}return r.size>=4&&r.clear(),r.set(s,l&&h?l:null),l&&h?l:null}const G1=.6,U1=new WeakMap;function kb(e,t,a){const o=e.light;if(!o)return null;const r=Math.round((G1+(1-G1)*Math.min(1,Math.max(0,a)))*10)/10,n=`${t}|${r}`;let s=U1.get(e);s||U1.set(e,s=new Map);const i=s.get(n);if(i!==void 0)return i;const l=Zt(o.width),h=l&&Gt(l,!1);if(l&&h){h.drawImage(o,0,0),h.globalCompositeOperation="source-in";const d=Zr(t),u=[Ca(d[0]),Ca(d[1]),Ca(d[2])],c=Math.max(u[0],u[1],u[2],1),f=g=>Math.round(255+(255*g/c-255)*Math.min(1,r));h.fillStyle=`rgb(${f(u[0])} ${f(u[1])} ${f(u[2])})`,h.fillRect(0,0,o.width,o.height)}return s.size>=6&&s.clear(),s.set(n,l&&h?l:null),l&&h?l:null}const V1=new WeakMap;function Sb(e,t,a){const o=e.glint,r=e.back;if(!o||!r)return null;const n=Math.min(1,.45*a.highlight*(a.shine??0)),s=Math.min(1,1.1*a.rim);if(n<=.01&&s<=.01)return null;const i=Math.min(1,a.vivid??0),l=Math.min(1,Math.max(0,Math.round((a.backSoft??qi)*20)/20)),h=`${t}|${n.toFixed(2)}|${s.toFixed(2)}|${i.toFixed(1)}|${l}`;let d=V1.get(e);d||V1.set(e,d=new Map);const u=d.get(h);if(u!==void 0)return u;const c=o.width,f=Zt(c),g=f&&Gt(f,!1),m=Zt(c),x=m&&Gt(m,!1);if(f&&g&&m&&x){const v=Zr(t),b=[Ca(v[0]),Ca(v[1]),Ca(v[2])],y=Math.max(b[0],b[1],b[2],1),$=M=>`rgb(${[0,1,2].map(w=>Math.round(255+(255*b[w]/y-255)*M)).join(" ")})`,p=[[r,$(.65+.35*i),s*(1-.85*l)],[e.backSoft,$(.7+.3*i),s*l],[o,$(.45+.55*i),n]];for(const[M,w,z]of p)M&&(z<=.01||(x.globalCompositeOperation="copy",x.drawImage(M,0,0),x.globalCompositeOperation="source-in",x.fillStyle=w,x.fillRect(0,0,c,c),g.globalAlpha=z,g.drawImage(m,0,0)));g.globalAlpha=1}return d.size>=6&&d.clear(),d.set(h,f&&g?f:null),f&&g?f:null}const qo=e=>{const t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function zb(e){const t=Math.cos(e.roll),a=Math.sin(e.roll),o=t*e.lx+a*e.ly,r=-a*e.lx+t*e.ly,n=e.facing<0?-1:1,s=n*Math.min(1,Math.abs(e.facing)/.16),{cy:i,sy:l,cp:h,sp:d}=e,u=(C,R,O,E=s)=>qo([i*C+l*d*R-l*h*O,h*R+d*O,E*(l*C-i*d*R+i*h*O)]),c=u(A1*o,A1*r,Ag),f=u(0,0,1,n),g=qo([c[0]+f[0],c[1]+f[1],c[2]+f[2]]),m=u(o,r,0,n),x=Math.cos(80*Math.PI/180),v=Math.sin(80*Math.PI/180),b=x*o-v*r,y=v*o+x*r,$=qo([.55*b,.55*y,.83]),p=qo([$[1],-$[0],0]),M=[$[1]*p[2]-$[2]*p[1],$[2]*p[0]-$[0]*p[2],$[0]*p[1]-$[1]*p[0]],w=u($[0],$[1],$[2],n),z=u(p[0],p[1],p[2],n),k=u(M[0],M[1],M[2],n),F=u(a,t,0,n),[S,_]=e.bx!==void 0&&e.by!==void 0?[e.bx,e.by]:Gl(e.lx,e.ly),A=u(t*S+a*_,-a*S+t*_,0,n);return{L:c,V:f,H:g,U:m,W:w,A:z,B:k,D:F,K:A}}const K1=new WeakMap;function Cb(e,t){const a=e.canvas??e;let o=K1.get(a);o||(o=new Map,K1.set(a,o));let r=o.get(t);return r||(r={N:0,img:null,mc:new Float32Array(ki*3),mcPrev:new Float32Array(ki*3),mcMix:new Float32Array(ki*3),mixVersion:0,blendT:1,blendFrames:1,sinceBuild:0,L:null,V:null,lx:NaN,ly:NaN,base:"",shadow:NaN,highlight:NaN,spread:NaN,rim:NaN,vivid:NaN,front:NaN,sheen:NaN,backSoft:NaN,K:null,version:0,imgVersion:-1,imgAoK:NaN,imgForm:null,aoK:-1,aoMul:new Float32Array(256),scratch:[null,null],scratchIdx:0,scratchN:0,scratchStale:!0,sprites:[null,null,null,null,null],sliceG:[],sliceIns:[],sliceSpr:new Map,sliceSprKey:"",sliceSprMade:new Set,sliceKey:"",body:[null,null],bodyIdx:0,spriteVersion:-1,spritePx:0,spriteFur:null,miss:[0,0],missAt:[0,0],turnAt:[0,0],fade:null,lay:1,layTmp:null,haloTmp:null},o.size>4&&o.clear(),o.set(t,r)),r}const D0=1/48,H0=(e,t)=>!t||Math.abs(e[0]-t[0])>=D0||Math.abs(e[1]-t[1])>=D0||Math.abs(e[2]-t[2])>=D0;function Sn(e,t){return[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]]}function Q1(e,t,a){const{N:o,sd:r}=t,n=e.data,s=h=>(h+Fe)/rt*o-.5,i=[],l=[];for(let h=0;h<fo;h++){const d=h/fo*Math.PI*2,u=Math.cos(d),c=Math.sin(d),f=[],g=[];for(let m=0;m<80;m+=.5){const x=a[0]+u*m,v=a[1]+c*m,b=gr(r,o,s(x),s(v));if(b<0)break;const y=Math.round(s(x)),$=Math.round(s(v));if(y<0||$<0||y>=o||$>=o)break;const p=($*o+y)*4;f.push(b),g.push(n[p],n[p+1],n[p+2])}i.push(Float32Array.from(f)),l.push(Float32Array.from(g))}return{d:i,c:l}}function Z1(e,t,a,o,r,n,s){const i=d=>{const u=t.d[d],c=t.c[d],f=typeof a=="number"?a:a[d],g=1-(typeof o=="number"?o:o[d]);let m=0;for(let x=0;x<u.length;x++)u[x]>=f&&(m=x);return c.length?`rgb(${c[m*3]*g|0} ${c[m*3+1]*g|0} ${c[m*3+2]*g|0})`:"rgb(0 0 0)"};if(!s&&typeof e.createConicGradient=="function"){const d=e.createConicGradient(0,r[0],r[1]);for(let u=0;u<=fo;u++)d.addColorStop(u/fo,i(u%fo));return d}const l=e.createLinearGradient(r[0]+n[0]*50,r[1]+n[1]*50,r[0]-n[0]*50,r[1]-n[1]*50),h=d=>Math.round((d%(Math.PI*2)+Math.PI*2)%(Math.PI*2)/(Math.PI*2/fo))%fo;return l.addColorStop(0,i(h(Math.atan2(n[1],n[0])))),l.addColorStop(.5,i(h(Math.atan2(n[0],-n[1])))),l.addColorStop(1,i(h(Math.atan2(-n[1],-n[0])))),l}function Ab(e,t,a,o=0){const r=/rgb\((\d+) (\d+) (\d+)\)/.exec(_b(e)),n=r?[+r[1],+r[2],+r[3]]:[255,255,255],s=Zr(t),i=[Ca(s[0]),Ca(s[1]),Ca(s[2])],l=Math.max(i[0],i[1],i[2],1),h=Math.min(.85,.75*a),d=.45+.55*Math.min(1,o),u=c=>Math.round(n[c]+(255+(255*i[c]/l-255)*d-n[c])*h);return`rgb(${u(0)} ${u(1)} ${u(2)})`}function _b(e){let t=-1,a=0,o=0,r=0;for(const s of e.c)for(let i=0;i<s.length;i+=3){const l=.2126*s[i]+.7152*s[i+1]+.0722*s[i+2];l>t&&(t=l,a=s[i],o=s[i+1],r=s[i+2])}const n=s=>Math.min(255,Math.round(s/4)*4);return`rgb(${n(a)} ${n(o)} ${n(r)})`}function Rl(e,t,a,o,r,n,s,i,l){const h=n*e.cx[0]+s*e.cy[0],d=(n*a+s*o)*r;let u=i,c=0,f=!1;for(let g=1;g<t;g++){const m=n*e.cx[g]+s*e.cy[g]+e.scale[g]*(i-h);m+e.z[g]*d>u&&(u=m+e.z[g]*d,c=g,f=!1),m-e.z[g]*d>u&&(u=m-e.z[g]*d,c=g,f=!0)}return l&&(l.k=c,l.far=f),u}function Rb(e,t,a,o,r,n){if(n<=1e-4)return[1,0,0,1,0,0];const s=Qi(e),i=ji(s,o,r),l=ji(s,-o,-r),h=Rl(t,a,o,r,n,o,r,i),d=Rl(t,a,o,r,n,-o,-r,l),u=(h+d)/Math.max(1,i+l)-1,c=h-(u+1)*i;return[1+u*o*o,u*o*r,u*o*r,1+u*r*r,o*c,r*c]}function Fb(e,t,a,o,r,n,s,i){const l=Qi(e),h=new Float32Array(fo),d=new Float32Array(fo),u=s[0]+s[3]-2,c={k:0,far:!1};for(let f=0;f<fo;f++){const g=f/fo*Math.PI*2,m=Math.cos(g),x=Math.sin(g),v=m*o+x*r,b=u/(1+u);let y=m-b*v*o,$=x-b*v*r;const p=Math.hypot(y,$);y/=p,$/=p,Rl(t,a,o,r,n,y,$,ji(l,y,$),c),h[f]=Math.max(_l,t.inset[c.k]),d[f]=c.far?ub*i*(1-Math.exp(-2.4*(c.k/a))):0}return{inset:h,dark:d}}const J1=new WeakMap,za=96,Rn=.1;function Ob(e,t,a,o,r,n,s,i){const l=`${o}|${a.q}|${Math.round(n/Rn)}|${Math.round(s/Rn)}`;let h=J1.get(e);h||J1.set(e,h=new Map);const d=h.get(l);if(d||d===null&&!i)return d??null;if(h.size>256&&h.clear(),!i)return h.set(l,null),ql(()=>{h.set(l,eh(e,t,a,o,r,n,s))}),null;const u=eh(e,t,a,o,r,n,s);return h.set(l,u),u}function eh(e,t,a,o,r,n,s){const i=Zt(za),l=i&&Gt(i,!0);if(!l)return[0,0];const h=rt/za,d=r[0]*r[3]-r[1]*r[2],u=r[3]/d,c=-r[1]/d,f=-r[2]/d,g=r[0]/d,m=-(u*r[4]+f*r[5]),x=-(c*r[4]+g*r[5]);l.fillStyle="#fff";for(let M=0;M<o;M++)for(const w of M?[a.z[M],-a.z[M]]:[0]){l.setTransform(1/h,0,0,1/h,Fe/h,Fe/h),l.transform(u,c,f,g,m,x),l.translate(w*n,w*s);const z=a.scale[M];M&&l.transform(z,0,0,z,a.cx[M]-z*a.cx[0],a.cy[M]-z*a.cy[0]),l.fill(t)}const v=l.getImageData(0,0,za,za).data,b=new Uint8Array(za*za),y=new Float32Array(za*za);for(let M=0;M<za*za;M++)b[M]=v[M*4+3]>127?1:0;Cl(b,1,za,y,null);let $=0,p=0;for(let M=0,w=0;M<za;M++)for(let z=0;z<za;z++,w++){const k=gr(e.sd,e.N,(z+.5)/za*e.N-.5,(M+.5)/za*e.N-.5);b[w]&&k<0&&($=Math.max($,-k)),!b[w]&&k>0&&(p=Math.max(p,Math.sqrt(y[w])*h))}return[$,p]}const B0=typeof navigator<"u"&&/AppleWebKit\//.test(navigator.userAgent)&&!/Chrome\/|Chromium\/|Edg\//.test(navigator.userAgent),Ib=typeof navigator<"u"&&/Firefox\//.test(navigator.userAgent);function Pb(e,t,a,o,r,n){const s=Zu(a.dev),i=Qu(t.typeKey??z0(t.path),t.path,s,a.halfDepth,!!a.still);if(!i)return!1;const l=t.shading==="fabric",h=Math.ceil(rt*a.dev/100),d=(()=>{const[ee,pe]=a.bx!==void 0&&a.by!==void 0?[a.bx,a.by]:Gl(a.lx,a.ly);return{bx:ee,by:pe,front:n.front??ys}})(),u=l?Ul(i,t.typeKey??z0(t.path),a.halfDepth,h,!!a.still&&!t.furOnIdle,a.lx,a.ly,t.fur??vr,d):null;if(l&&!u)return!1;const c=Cb(e,(t.typeKey??z0(t.path))+(l?"|fabric":"")),f=zb(a),g=(()=>{const ee=Math.hypot(f.L[0],f.L[1]);return ee<.05?[0,-1]:[f.L[0]/ee,f.L[1]/ee]})();if((H0(f.L,c.L)||H0(f.V,c.V)||a.lx!==c.lx||a.ly!==c.ly||o.base!==c.base||n.shadow!==c.shadow||n.highlight!==c.highlight||n.spread!==c.spread||n.rim!==c.rim||(n.vivid??0)!==c.vivid||(n.front??ys)!==c.front||(n.sheen??0)!==c.sheen||(n.backSoft??qi)!==c.backSoft||l&&H0(f.K,c.K))&&(c.version>0&&c.mcPrev.set(c.mcMix),l?Mb(c.mc,Zr(o.base),f,n):Bg(c.mc,Zr(o.base),f,n),c.version===0||a.still?(c.mcMix.set(c.mc),c.blendT=1):(c.blendFrames=Math.min(10,Math.max(1,c.sinceBuild)),c.blendT=0),c.sinceBuild=0,c.mixVersion++,c.L=f.L,c.V=f.V,c.lx=a.lx,c.ly=a.ly,c.base=o.base,c.shadow=n.shadow,c.highlight=n.highlight,c.spread=n.spread,c.rim=n.rim,c.vivid=n.vivid??0,c.front=n.front??ys,c.sheen=n.sheen??0,c.backSoft=n.backSoft??qi,c.K=f.K,c.version++),c.sinceBuild++,c.blendT<1){c.blendT=Math.min(1,c.blendT+1/c.blendFrames);const ee=c.blendT>=1?1:c.blendT*c.blendT*(3-2*c.blendT),pe=c.mcPrev,Me=c.mc,me=c.mcMix;for(let ye=0;ye<ki*3;ye++)me[ye]=pe[ye]+(Me[ye]-pe[ye])*ee;c.mixVersion++}const m=u?Math.min(1.2,.3+.8*n.shadow):Math.min(1.3,1.2*n.shadow);if(m!==c.aoK){for(let ee=0;ee<256;ee++)c.aoMul[ee]=Math.max(0,1-m*(1-ee/255));c.aoK=m}if((!c.img||c.N!==s)&&(c.img=new ImageData(s,s),c.N=s,c.imgVersion=-1),(c.imgVersion!==c.mixVersion||c.imgAoK!==m||c.imgForm!==i)&&(Yg(i,c.mcMix,c.img.data,c.aoMul,u?Lg(i):void 0),c.imgVersion=c.mixVersion,c.imgAoK=m,c.imgForm=i,c.scratchStale=!0),c.scratchN!==s&&(c.scratch=[null,null],c.scratchN=s,c.scratchStale=!0),c.scratchStale){c.scratchIdx^=1;let ee=c.scratch[c.scratchIdx];if(!ee){const pe=Zt(s),Me=pe&&Gt(pe,!1);if(!pe||!Me)return!1;ee=c.scratch[c.scratchIdx]={c:pe,g:Me}}ee.g.putImageData(c.img,0,0),c.scratchStale=!1}const x=c.scratch[c.scratchIdx].c,v=a.dev<=100?14:a.dev<=224?20:26,b=Dg(i,v,a.round??1),{cy:y,sy:$,cp:p,sp:M}=a,[w,z,k,F,S,_]=a.ctm,A=$*M,C=w*y+k*A,R=z*y+F*A,O=k*p,E=F*p;e.imageSmoothingEnabled=!0,e.imageSmoothingQuality="high";const I=a.facing>=0?1:-1,P=$/y,T=-M/(y*p),Y=Math.hypot(P,T);let q=50;for(let ee=1;ee<v;ee++)q=Math.max(q,50*b.scale[ee]+b.z[ee]*Y);const j=Y>1e-6?I*P/Y:1,X=Y>1e-6?I*T/Y:0,K=Math.min(.7,.55*Math.min(1.6,n.shadow/.35)),Q=u?Rb(i,b,v,j,X,Y):null,W=Math.ceil(rt*a.dev/100);if(c.spritePx!==W&&(c.sprites=[null,null,null,null,null],c.spritePx=W,c.spriteVersion=-1),c.spriteVersion!==c.version||c.spriteFur!==u){const ee=W/rt,pe=u?Xg(i,u.R):null,Me=Q1(c.img,i,[b.cx[0],b.cy[0]]);for(let me=0;me<4;me++){if(me===2)continue;let ye=c.sprites[me];if(!ye){const $e=Zt(W),_t=$e&&Gt($e,!1);if(!$e||!_t)return!1;ye=c.sprites[me]={c:$e,g:_t}}const Re=ye.g;Re.setTransform(1,0,0,1,0,0),Re.globalCompositeOperation="source-over",Re.clearRect(0,0,W,W),Re.imageSmoothingEnabled=!0,Re.imageSmoothingQuality="high";const at=me===0&&u&&u.mask?u:null;at&&at.haze&&(Re.imageSmoothingQuality="low",Re.drawImage(at.haze,0,0,W,W),Re.imageSmoothingQuality="high",Re.globalCompositeOperation="source-in",Re.fillStyle=Ab(Me,o.base,n.rim,n.vivid??0),Re.fillRect(0,0,W,W),Re.globalCompositeOperation="destination-over"),Re.setTransform(ee,0,0,ee,Fe*ee,Fe*ee);const Ve=at&&Q?Fb(i,b,v,j,X,Y,Q,K):null;Re.fillStyle=me===1?"#000":Z1(Re,Me,Ve?Ve.inset:u?Math.max(_l,b.inset[0]):b.inset[0],Ve?Ve.dark:0,[b.cx[0],b.cy[0]],g,B0),u&&u.mask?(Re.fillRect(-Fe,-Fe,rt,rt),Re.setTransform(1,0,0,1,0,0),Re.globalCompositeOperation="destination-in",Re.drawImage((me===0?u.mask:pe)??u.mask,0,0,W,W),Re.globalCompositeOperation="source-over"):Re.fill(t.path)}if(u&&u.core){let me=c.sprites[4];if(!me){const ye=Zt(W),Re=ye&&Gt(ye,!1);ye&&Re&&(me=c.sprites[4]={c:ye,g:Re})}me&&(me.g.setTransform(1,0,0,1,0,0),me.g.globalCompositeOperation="copy",me.g.drawImage(c.sprites[0].c,0,0),me.g.globalCompositeOperation="destination-out",me.g.drawImage(u.core,0,0,W,W),me.g.globalCompositeOperation="source-over")}c.spriteVersion=c.version,c.spriteFur=u}const N=(q+50)/100,ae=(q-50)/2,G=1+(N-1)*j*j,J=(N-1)*j*X,V=1+(N-1)*X*X,U=Sn(Sn(a.ctm,[y,A,0,p,0,0]),[G,J,J,V,ae*j-50*G-50*J,ae*X-50*J-50*V]),fe=u!=null&&u.dark&&u.light?u:null;let H=e,de=0,oe=0,ue=0,te=0;if(fe){let ee=1/0,pe=1/0,Me=-1/0,me=-1/0;for(const Re of[-b.top,b.top]){const at=Re*$-50*y,Ve=-Re*y*M-50*A-50*p,$e=w*at+k*Ve+S,_t=z*at+F*Ve+_;for(const dt of[-Fe,100+Fe])for(const Ce of[-Fe,100+Fe]){const ht=C*dt+O*Ce+$e,vt=R*dt+E*Ce+_t;ht<ee&&(ee=ht),ht>Me&&(Me=ht),vt<pe&&(pe=vt),vt>me&&(me=vt)}}de=Math.floor(ee)-1,oe=Math.floor(pe)-1,ue=Math.ceil(Me)+1-de,te=Math.ceil(me)+1-oe,c.bodyIdx^=1;let ye=c.body[c.bodyIdx];if(!ye||ye.w<ue||ye.h<te||ye.w>2*ue+64||ye.h>2*te+64){const Re=Math.ceil(ue/64)*64,at=Math.ceil(te/64)*64;let Ve=null;typeof document<"u"?(Ve=document.createElement("canvas"),Ve.width=Re,Ve.height=at):typeof OffscreenCanvas<"u"&&(Ve=new OffscreenCanvas(Re,at));const $e=Ve&&Gt(Ve,!1);ye=Ve&&$e?c.body[c.bodyIdx]={c:Ve,g:$e,w:Ve.width,h:Ve.height}:null}ye?(H=ye.g,H.setTransform(1,0,0,1,0,0),H.globalCompositeOperation="source-over",H.globalAlpha=1,H.clearRect(0,0,ue,te),H.imageSmoothingEnabled=!0,H.imageSmoothingQuality="high"):de=oe=0}const Xe=ee=>{const pe=ee*$-50*y,Me=-ee*y*M-50*A-50*p;H.setTransform(C,R,O,E,w*pe+k*Me+S-de,z*pe+F*Me+_-oe)},[qe,ge,,he]=c.sprites,be=[b.cx[0],b.cy[0]],ze=`${c.version}|${v}|${b.q}`;if(c.sliceKey!==ze){const ee=Q1(c.img,i,be);c.sliceG=[],c.sliceIns=[];for(let pe=0;pe<v;pe++){const Me=u?Math.max(_l,b.inset[pe]):b.inset[pe];c.sliceIns.push(Me),c.sliceG.push(Z1(e,ee,Me,0,be,g,B0))}c.sliceKey=ze}const Qe=Ib&&typeof document<"u",ie=`${ze}|${W}`;Qe&&c.sliceSprKey!==ie&&(c.sliceSprKey=ie,c.sliceSprMade=new Set,c.sliceSpr.size>32&&c.sliceSpr.clear());const _e=ee=>{const pe=c.sliceIns[ee];let Me=c.sliceSpr.get(pe);if(Me&&c.sliceSprMade.has(pe))return Me;if(!Me||Me.c.width!==W){const ye=document.createElement("canvas");ye.width=ye.height=W;const Re=ye.getContext("2d");if(!Re)return;Me={c:ye,g:Re},c.sliceSpr.set(pe,Me)}const me=W/rt;return Me.g.setTransform(1,0,0,1,0,0),Me.g.clearRect(0,0,W,W),Me.g.setTransform(me,0,0,me,Fe*me,Fe*me),Me.g.fillStyle=c.sliceG[ee],Me.g.fill(t.path),c.sliceSprMade.add(pe),Me},ve=(ee,pe,Me)=>{Xe(pe);const me=b.scale[ee];if(ee>0){H.transform(me,0,0,me,b.cx[ee]-me*b.cx[0],b.cy[ee]-me*b.cy[0]);const ye=Qe?_e(ee):void 0;ye?H.drawImage(ye.c,-Fe,-Fe,rt,rt):(H.fillStyle=c.sliceG[ee],H.fill(t.path)),Me>.01&&(H.globalAlpha=Me,H.fillStyle="#000",H.fill(t.path),H.globalAlpha=1);return}u?H.drawImage(he.c,-Fe,-Fe,rt,rt):(H.fillStyle=c.sliceG[0],H.fill(t.path)),u&&H===e&&He>.01&&(H.globalAlpha=He,H.drawImage(qe.c,-Fe,-Fe,rt,rt),H.globalAlpha=1),Me>.01&&(H.globalAlpha=Me,H.drawImage(ge.c,-Fe,-Fe,rt,rt),H.globalAlpha=1)},Ne=Math.abs(a.facing),He=Ne>=.8?1:Ne<=.45?0:(Ne-.45)/.35,Ue=Ng(i),Ot=Ue.x.length,Rt=i.sd,Wt=i.N,ta=1.5/(Math.sqrt(Math.abs(C*E-R*O))||1)+.4,$t=rt/Wt,aa=ee=>(ee+Fe)/rt*Wt-.5,Ut=Math.atan2(-I*T,-I*P),la=Math.atan2(I*T,I*P);for(let ee=v-1;ee>=1;ee--){const pe=-I*b.z[ee],Me=b.scale[ee];if(u){const me=b.cx[ee]-Me*b.cx[0]+pe*P,ye=b.cy[ee]-Me*b.cy[0]+pe*T;let Re=Number.isFinite(me)&&Number.isFinite(ye);for(let at=0;Re&&at<Ot;at++){const Ve=E1(Ot,Ut,at);gr(Rt,Wt,aa(Me*Ue.x[Ve]+me),aa(Me*Ue.y[Ve]+ye))<ta+Me*(Ue.d[Ve]+$t)&&(Re=!1)}if(Re)continue}ve(ee,pe,u?0:K*(1-Math.exp(-2.4*(ee/v))))}if(u&&Y>.001){const ee=ji(Qi(i),-j,-X),pe=1.3*b.top*Y;Xe(0);const Me=H.createLinearGradient(-j*ee,-X*ee,-j*(ee+pe),-X*(ee+pe));for(let me=0;me<=8;me++){const ye=me/8;Me.addColorStop(ye,`rgba(0,0,0,${(K*(1-Math.exp(-2.4*ye))*ye*ye*(3-2*ye)).toFixed(3)})`)}H.globalCompositeOperation="source-atop",H.fillStyle=Me,H.fillRect(-Fe-60,-Fe-60,rt+120,rt+120),H.globalCompositeOperation="source-over"}ve(0,0,0);const nt=Math.abs(a.facing),At=nt>=.72?1:nt<=.34?0:((nt-.34)/.38)**1.5,re=U[0]*U[3]-U[1]*U[2],we=of+1.5/(Math.sqrt(Math.abs(re))||1);for(let ee=1;ee<v;ee++){const pe=I*b.z[ee],Me=b.scale[ee];if(At>=1&&Math.abs(re)>1e-9){const me=pe*$-50*y,ye=-pe*y*M-50*A-50*p,Re=w*me+k*ye+S-U[4],at=z*me+F*ye+_-U[5],Ve=b.cx[ee]-Me*b.cx[0],$e=b.cy[ee]-Me*b.cy[0];let _t=!0;for(let dt=0;_t&&dt<Ot;dt++){const Ce=E1(Ot,la,dt),ht=Me*Ue.x[Ce]+Ve,vt=Me*Ue.y[Ce]+$e,zt=C*ht+O*vt+Re,Ht=R*ht+E*vt+at,It=(U[3]*zt-U[2]*Ht)/re,st=(U[0]*Ht-U[1]*zt)/re;gr(Rt,Wt,aa(It),aa(st))<we+Me*(Ue.d[Ce]+$t)&&(_t=!1)}if(_t)continue}ve(ee,pe,0)}if(At>.01&&(H.save(),H.setTransform(U[0],U[1],U[2],U[3],U[4]-de,U[5]-oe),H.globalAlpha=At,H.drawImage(x,-Fe,-Fe,rt,rt),H.restore()),u&&u.mask&&Q&&H!==e){const ee=I*P,pe=I*T,Me=Math.abs(ee-c.missAt[0])>1.5*Rn||Math.abs(pe-c.missAt[1])>1.5*Rn,me=Y>1e-4?Ob(i,t.path,b,v,Q,ee,pe,!!a.still||Me):[0,0];me&&(c.miss=me,c.missAt=[ee,pe]);const[ye,Re]=c.miss,at=Math.max(ye,Re);let Ve=Dt(ns/2,2*ns,at),$e=Dt(ns/2,ns,Re);const _t=Math.abs(ee-c.turnAt[0])>Rn||Math.abs(pe-c.turnAt[1])>Rn;c.turnAt=[ee,pe];const dt=!a.still&&!_t;if(dt&&c.fade){const st=(Ze,et)=>Math.abs(et-Ze)<.02?et:Ze+(et-Ze)*.2;Ve=st(c.fade[0],Ve),$e=st(c.fade[1],$e)}c.fade=[Ve,$e];const Ce=c.sprites[4];H.imageSmoothingQuality="low",Xe(0),H.transform(Q[0],Q[1],Q[2],Q[3],Q[4],Q[5]);const ht=(1-Dt(0,db,Ve))*(1-$e),vt=c.lay=dt?c.lay+Math.max(-j1,Math.min(j1,ht-c.lay)):ht;let zt=null;if(vt>0&&vt<1){let st=c.layTmp;if(!st||st.c.width<ue||st.c.height<te){const Ze=Math.ceil(Math.max(ue,te)/64)*64;let et=null;typeof document<"u"?(et=document.createElement("canvas"),et.width=et.height=Ze):et=Zt(Ze);const kt=et&&Gt(et,!1);st=c.layTmp=et&&kt?{c:et,g:kt}:null}st&&(zt=st.g,zt.setTransform(1,0,0,1,0,0),zt.globalAlpha=1,zt.globalCompositeOperation="copy",zt.drawImage(H.canvas,0,0,ue,te,0,0,ue,te),zt.imageSmoothingQuality="low",zt.setTransform(H.getTransform()))}const Ht=fb*Math.min(1,Y/.2),It=st=>{if(B0){let Ze=c.haloTmp;if(!Ze||Ze.c.width<ue||Ze.c.height<te){const et=Math.ceil(Math.max(ue,te)/64)*64;let kt=null;typeof document<"u"?(kt=document.createElement("canvas"),kt.width=kt.height=et):kt=Zt(et);const _a=kt&&Gt(kt,!1);Ze=c.haloTmp=kt&&_a?{c:kt,g:_a}:null}if(Ze){const et=Ze.g;et.setTransform(1,0,0,1,0,0),et.globalCompositeOperation="source-over",et.globalAlpha=1,et.clearRect(0,0,ue,te),et.imageSmoothingEnabled=!0,et.imageSmoothingQuality="low",et.setTransform(st.getTransform()),et.drawImage(qe.c,-Fe,-Fe,rt,rt),st.save(),st.setTransform(1,0,0,1,0,0),st.globalCompositeOperation="destination-atop",st.drawImage(Ze.c,0,0,ue,te,0,0,ue,te),st.restore()}}else st.globalCompositeOperation="destination-atop",st.drawImage(qe.c,-Fe,-Fe,rt,rt);Ce&&Ht>.01&&(st.globalCompositeOperation="source-atop",st.globalAlpha=Ht,st.drawImage(Ce.c,-Fe,-Fe,rt,rt),st.globalAlpha=1),st.globalCompositeOperation="source-over"};if(zt&&It(zt),vt>=1||!zt&&vt>=.5)It(H);else{const st=Ve<1?vb(u):null;if(st){const Ze=1+Ve*(at+ns)/25,et=b.cx[0],kt=b.cy[0];H.save(),H.transform(Ze,0,0,Ze,et*(1-Ze),kt*(1-Ze)),H.globalCompositeOperation="destination-out",H.drawImage(st,-Fe,-Fe,rt,rt),H.restore()}$e<1&&(H.globalAlpha=1-$e,H.globalCompositeOperation="destination-over",H.drawImage(qe.c,-Fe,-Fe,rt,rt),H.globalAlpha=1),zt&&(H.setTransform(1,0,0,1,0,0),H.globalCompositeOperation="destination-in",H.globalAlpha=1-vt,H.fillStyle="#000",H.fillRect(0,0,ue,te),H.globalCompositeOperation="lighter",H.globalAlpha=vt,H.drawImage(zt.canvas,0,0,ue,te,0,0,ue,te),H.globalAlpha=1)}H.globalCompositeOperation="source-over"}if(H!==e&&fe){H.globalCompositeOperation="source-atop",H.imageSmoothingQuality="low";const ee=Zr(o.base),pe=Math.pow(.2126*ee[0]+.7152*ee[1]+.0722*ee[2],1/2.2),Me=$b(fe,o.base,n.vivid??0)??fe.dark,me=kb(fe,o.base,n.vivid??0)??fe.light,ye=a.dev<160?0:nt>=.88?1:nt<=.55?0:(nt-.55)/.33,Re=ye>.01?Sb(fe,o.base,n):null,at=I*tb*(t.fur??vr).length,Ve=Sn(Sn(Sn(a.ctm,[1,0,0,1,at*$,-at*y*M]),[y,A,0,p,0,0]),[G,J,J,V,ae*j-50*G-50*J,ae*X-50*J-50*V]),$e=(dt,Ce,ht,vt=dt)=>{H.setTransform(dt[0],dt[1],dt[2],dt[3],dt[4]-de,dt[5]-oe),H.globalAlpha=Ce,H.drawImage(Me,-Fe-ho,-Fe-ho,pa,pa),vt!==dt&&H.setTransform(vt[0],vt[1],vt[2],vt[3],vt[4]-de,vt[5]-oe),H.globalAlpha=Ce*(.25+.75*pe),H.drawImage(me,-Fe-ho,-Fe-ho,pa,pa),ht&&Re&&(H.globalAlpha=Ce*ye,H.drawImage(Re,-Fe-ho,-Fe-ho,pa,pa)),H.globalAlpha=1},_t=nt>=.62?0:nt<=.36?1:(.62-nt)/.26;if(_t<1&&$e(U,1-_t,!0,Ve),_t>0){const dt=a.dev/100,Ce=de+ue/2,ht=oe+te/2;$e([dt,0,0,dt,Ce-50*dt,ht-50*dt],_t,!1)}H.globalCompositeOperation="source-over",e.save(),e.setTransform(1,0,0,1,0,0),e.imageSmoothingEnabled=!1,e.drawImage(H.canvas,0,0,ue,te,de,oe,ue,te),e.restore()}e.setTransform(w,z,k,F,S,_);const Be=nt>=.95?1:nt<=.8?0:(nt-.8)/.15;if(!u&&a.dev>=256&&n.rim>0&&n.highlight>0&&Be>.01){e.save(),e.globalCompositeOperation="source-atop",e.setTransform(U[0],U[1],U[2],U[3],U[4],U[5]);const ee=Be*Math.min(.5,.3*n.rim*Math.min(1.4,n.highlight)),pe=e.createLinearGradient(50+g[0]*50,50+g[1]*50,50-g[0]*50,50-g[1]*50);pe.addColorStop(0,`rgba(235,244,255,${ee.toFixed(3)})`),pe.addColorStop(.45,`rgba(235,244,255,${(.35*ee).toFixed(3)})`),pe.addColorStop(.75,"rgba(235,244,255,0)"),e.strokeStyle=pe,e.lineJoin="round",e.lineWidth=1.3,e.stroke(t.path),e.restore()}return!0}function df(e,t,a,o,r){return{m:e,o:t,L:a,H:o,px:r,toScreen:n=>{const s=n[0]-t[0],i=n[1]-t[1],l=n[2]-t[2];return[e[0]*s+e[1]*i+e[2]*l,e[3]*s+e[4]*i+e[5]*l]},depth:n=>e[6]*(n[0]-t[0])+e[7]*(n[1]-t[1])+e[8]*(n[2]-t[2]),dir:n=>mo([e[0]*n[0]+e[1]*n[1]+e[2]*n[2],e[3]*n[0]+e[4]*n[1]+e[5]*n[2],e[6]*n[0]+e[7]*n[1]+e[8]*n[2]])}}const Jr=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],As=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Aa=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],mo=e=>{const t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},Vl=Math.PI*2;function ia(e,t,a,o,r=11){return Math.max(a,Math.min(o,Math.round(t*e.px/r)))}function pf(e,t,a,o,r=!0){const n=t+1,s=n*(a+1),i=new Float64Array(s*3);let l=0;for(let m=0,x=0;m<=a;m++)for(let v=0;v<=t;v++,x++){const b=e(v/t,m/a);i[x*3]=b[0],i[x*3+1]=b[1],i[x*3+2]=b[2],l=Math.max(l,Math.abs(b[0]-i[0])+Math.abs(b[1]-i[1])+Math.abs(b[2]-i[2]))}const h=m=>[i[m*3],i[m*3+1],i[m*3+2]],d=new Float64Array(t*a*3);for(let m=0;m<a;m++)for(let x=0;x<t;x++){const v=m*n+x,b=h(v),y=h(v+1),$=h(v+n+1),p=h(v+n);let M=As(Jr($,b),Jr(p,y));const w=[(b[0]+y[0]+$[0]+p[0])/4,(b[1]+y[1]+$[1]+p[1])/4,(b[2]+y[2]+$[2]+p[2])/4],z=typeof o=="function"?o((x+.5)/t,(m+.5)/a):o;Aa(M,Jr(w,z))<0&&(M=[-M[0],-M[1],-M[2]]),M=mo(M);const k=(m*t+x)*3;d[k]=M[0],d[k+1]=M[1],d[k+2]=M[2]}const u=1e-6+l*1e-5,c=(m,x)=>Math.abs(i[m*3]-i[x*3])+Math.abs(i[m*3+1]-i[x*3+1])+Math.abs(i[m*3+2]-i[x*3+2])<u;let f=!0;for(let m=0;m<=a&&f;m++)f=c(m*n,m*n+t);let g=null;if(r){const m=new Float64Array(s*3);for(let v=0;v<a;v++)for(let b=0;b<t;b++){const y=(v*t+b)*3,$=v*n+b;for(const p of[$,$+1,$+n+1,$+n])m[p*3]+=d[y],m[p*3+1]+=d[y+1],m[p*3+2]+=d[y+2]}const x=v=>{let b=0,y=0,$=0;for(const p of v)b+=m[p*3],y+=m[p*3+1],$+=m[p*3+2];for(const p of v)m[p*3]=b,m[p*3+1]=y,m[p*3+2]=$};if(f)for(let v=0;v<=a;v++)x([v*n,v*n+t]);for(const v of[0,a]){let b=!0;for(let y=1;y<=t&&b;y++)b=c(v*n,v*n+y);b&&x(Array.from({length:n},(y,$)=>v*n+$))}for(let v=0;v<s;v++){const b=m[v*3],y=m[v*3+1],$=m[v*3+2],p=Math.hypot(b,y,$)||1;m[v*3]=b/p,m[v*3+1]=y/p,m[v*3+2]=$/p}g=m}return{nu:t,nv:a,closed:f,pos:i,fn:d,vn:g}}function Wb(e,t,a,o,r,n=!1){const s=i=>e(n?(i%1+1)%1:Math.max(0,Math.min(1,i)));return pf((i,l)=>{const h=e(i),d=mo(Jr(s(i+.001),s(i-.001))),u=Aa(t,d),c=mo([t[0]-d[0]*u,t[1]-d[1]*u,t[2]-d[2]*u]),f=As(d,c),[g,m]=a(i,l*Vl);return[h[0]+c[0]*g+f[0]*m,h[1]+c[1]*g+f[1]*m,h[2]+c[2]*g+f[2]*m]},o,r,i=>e(i))}const _s=(e,t,a=1)=>(o,r)=>{const n=Math.cos(r),s=Math.sin(r);return[e*Math.sign(n)*Math.pow(Math.abs(n),a),t*Math.sign(s)*Math.pow(Math.abs(s),a)]};function mf(e,t){const{nu:a,nv:o,pos:r,fn:n,vn:s}=t,i=a+1,l=i*(o+1),h=a*o,[d,u,c,f,g,m,x,v,b]=e.m,[y,$,p]=e.o,M=new Float64Array(l),w=new Float64Array(l),z=new Float64Array(l);for(let A=0;A<l;A++){const C=r[A*3]-y,R=r[A*3+1]-$,O=r[A*3+2]-p;M[A]=d*C+u*R+c*O,w[A]=f*C+g*R+m*O,z[A]=x*C+v*R+b*O}const k=(A,C,R)=>{for(let O=0;O<R;O++){const E=A[O*3],I=A[O*3+1],P=A[O*3+2],T=d*E+u*I+c*P,Y=f*E+g*I+m*P,q=x*E+v*I+b*P,j=Math.hypot(T,Y,q)||1;C[O*3]=T/j,C[O*3+1]=Y/j,C[O*3+2]=q/j}};let F=null;s&&k(s,F=new Float64Array(l*3),l);const S=new Float64Array(h*3),_=new Float64Array(h);k(n,S,h);for(let A=0,C=0;A<o;A++)for(let R=0;R<a;R++,C++){const O=A*i+R;_[C]=(z[O]+z[O+1]+z[O+i]+z[O+i+1])/4}return{nu:a,nv:o,closed:t.closed,x:M,y:w,d:z,n:F,f:S,cd:_}}function Kl(e){let t=1/0,a=1/0,o=-1/0,r=-1/0;for(const n of e)for(let s=0;s<n.x.length;s++)n.x[s]<t&&(t=n.x[s]),n.x[s]>o&&(o=n.x[s]),n.y[s]<a&&(a=n.y[s]),n.y[s]>r&&(r=n.y[s]);return{x0:t,y0:a,x1:o,y1:r,cx:(t+o)/2,cy:(a+r)/2,w:o-t,h:r-a}}function Tb(e,t,a,o){const r=e[o]-e[a],n=t[o]-t[a];let s=-1/0;for(let i=a;i<=o;i++){const l=(e[i]-e[a])*r+(t[i]-t[a])*n;if(l<s-1e-9)return!1;s=l}return!0}const L0=e=>e<0?0:e>255?255:Math.round(e),ir=e=>`rgb(${L0(e[0])},${L0(e[1])},${L0(e[2])})`;function Na(e,t,a){const o=[],r=[];for(const s of t){const i=s.bias??0,l=s.keep,h=s.cull!==!1;for(const d of s.parts){const{nu:u,nv:c,f,cd:g,x:m,y:x}=d,v=u+1,b=y=>(!h||f[y*3+2]>-.04)&&(!l||l(g[y]));for(let y=0;y<c;y++){if(s.flat){for(let M=0;M<u;M++){const w=y*u+M;b(w)&&(o.push({d:g[w]+i,l:s,p:d,j:y,cols:[M,M+1],cells:[w]}),r.push([m[y*v+M],x[y*v+M]],[m[(y+1)*v+M+1],x[(y+1)*v+M+1]]))}continue}const $=[];let p=null;for(let M=0;M<u;M++)b(y*u+M)?(p||$.push(p=[]),p.push(M)):p=null;d.closed&&$.length>1&&$[0][0]===0&&$[$.length-1][$[$.length-1].length-1]===u-1&&($[0]=$.pop().concat($[0]));for(const M of $){const w=M.concat(M[M.length-1]+1),z=[],k=[];for(let S=0;S<w.length;S++){const _=y*v+w[S],A=_+v;z.push((m[_]+m[A])/2),k.push((x[_]+x[A])/2),S===0||S===w.length-1?r.push([m[_],x[_]],[m[A],x[A]]):y===0?r.push([m[_],x[_]]):y===c-1&&r.push([m[A],x[A]])}let F=0;for(;F<w.length-1;){let S=F+1;for(;S+1<w.length&&Tb(z,k,F,S+1);)S++;let _=0;for(let A=F;A<S;A++)_+=g[y*u+M[A]];o.push({d:_/(S-F)+i,l:s,p:d,j:y,cols:w.slice(F,S+1),cells:M.slice(F,S)}),F=S}}}}}o.sort((s,i)=>s.d-i.d);const n=.5/a;for(const s of o){const{p:i,l,j:h,cols:d,cells:u}=s,{x:c,y:f,n:g,f:m}=i,x=i.nu+1,v=d.length,b=[],y=[],$=[],p=[],M=h*x+d[0],w=h*x+d[v-1];let z=(c[w]+c[w+x])/2-(c[M]+c[M+x])/2,k=(f[w]+f[w+x])/2-(f[M]+f[M+x])/2;const F=Math.hypot(z,k),S=F>1e-9?z/F:0,_=F>1e-9?k/F:0;for(let R=0;R<v;R++){const O=h*x+d[R],E=O+x;let I=c[O]-c[E],P=f[O]-f[E];const T=Math.hypot(I,P);T>1e-9?(I/=T,P/=T):I=P=0;const Y=R===0?-n:R===v-1?n:0;b.push(c[O]+I*n+S*Y),y.push(f[O]+P*n+_*Y),$.push(c[E]-I*n+S*Y),p.push(f[E]-P*n+_*Y)}const A=R=>{if(g&&!l.flat){const I=(h*x+d[R])*3,P=I+x*3;return l.shade(mo([g[I]+g[P],g[I+1]+g[P+1],g[I+2]+g[P+2]]))}const O=u[Math.max(0,Math.min(u.length-1,R-1))]*3,E=u[Math.min(u.length-1,R)]*3;return l.shade(l.flat?[m[E],m[E+1],m[E+2]]:mo([m[O]+m[E],m[O+1]+m[E+1],m[O+2]+m[E+2]]))};let C;if(l.flat||F<1e-6)C=ir(A(0));else{const R=e.createLinearGradient((c[M]+c[M+x])/2,(f[M]+f[M+x])/2,(c[w]+c[w+x])/2,(f[w]+f[w+x])/2);let O=null;const E=(c[M]+c[M+x])/2,I=(f[M]+f[M+x])/2;for(let P=0;P<v;P++){const T=A(P);if(O&&P<v-1&&Math.abs(T[0]-O[0])+Math.abs(T[1]-O[1])+Math.abs(T[2]-O[2])<5)continue;const Y=h*x+d[P],q=(((c[Y]+c[Y+x])/2-E)*z+((f[Y]+f[Y+x])/2-I)*k)/(F*F);R.addColorStop(q<0?0:q>1?1:q,ir(T)),O=T}C=R}e.fillStyle=C,e.beginPath(),e.moveTo(b[0],y[0]);for(let R=1;R<v;R++)e.lineTo(b[R],y[R]);for(let R=v-1;R>=0;R--)e.lineTo($[R],p[R]);e.closePath(),e.fill()}return r}function Xn(e){const t=e.slice().sort((n,s)=>n[0]-s[0]||n[1]-s[1]);if(t.length<3)return t;const a=(n,s,i)=>(s[0]-n[0])*(i[1]-n[1])-(s[1]-n[1])*(i[0]-n[0]),o=[],r=[];for(const n of t){for(;o.length>=2&&a(o[o.length-2],o[o.length-1],n)<=0;)o.pop();o.push(n)}for(let n=t.length-1;n>=0;n--){const s=t[n];for(;r.length>=2&&a(r[r.length-2],r[r.length-1],s)<=0;)r.pop();r.push(s)}return o.pop(),r.pop(),o.concat(r)}const Jt=e=>e<0?0:e>1?1:e,Ia=(e,t,a)=>[e[0]+(t[0]-e[0])*a,e[1]+(t[1]-e[1])*a,e[2]+(t[2]-e[2])*a],Uo=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Mr=[255,255,255];function br(e,t,a=1){const o=e.L;return r=>{const n=Aa(r,o),s=Math.pow(Jt((n+.4)/1.4),1.35),i=Math.pow(1-Jt(r[2]),2),l=(.22+.95*s+.22*i*Jt(n+.6))*a,h=26*s*a;return[t[0]*l+h,t[1]*l+h,t[2]*l+h*1.05]}}function Eb(e,t){const a=e.L,o=Ia(t,Mr,.3);return r=>{const n=Aa(r,a),s=Jt((n+.3)/1.3),i=Math.pow(1-Jt(r[2]),1.6);return Ia(Uo(t,.2+.7*s),o,.6*i*(.4+.6*s))}}function th(e,t){const a=e.L,o=e.H;return r=>{const n=Jt((Aa(r,a)+.2)/1.2),s=Math.pow(Jt(Aa(r,o)),22)*.3;return Ia(Uo(t,.36+.7*n),Mr,s)}}function Yr(e,t,a=1){const o=e.L,r=e.H;return n=>{const s=Jt((Aa(n,o)+.25)/1.25),i=Jt(Aa(n,r)),l=(Math.pow(i,16)*.2+Math.pow(i,80)*.6)*a,h=Math.pow(1-Jt(n[2]),3)*.14*a;return Ia(Uo(t,.28+.78*s),Mr,Jt(l+h))}}function ah(e,t){const a=e.L,o=e.H,r=Uo(t,.42),n=Ia(t,Mr,.55);return s=>{const i=Jt((Aa(s,a)+.35)/1.35),l=Jt(Aa(s,o)),h=Math.pow(l,6)*.5+Math.pow(l,40)*.35;return Ia(Ia(r,t,i),n,Jt(h))}}function Ql(e,t,a,o){const r=e.H,n=e.L;return s=>{const i=2*s[2]*s[2]-1,l=-(2*s[2]*s[1]),h=Jt(.45+l*.85+i*.1),d=Math.exp(-Math.pow((l+.12)/.16,2))*.55,u=Jt(Aa(s,n)),c=Ia(a,t,Jt(.1+h*.72+u*.3)),f=Math.pow(Jt(Aa(s,r)),70)+d*.4;return Ia(c,o,Jt(f))}}const gf=e=>Ql(e,[255,200,88],[86,50,8],[255,247,220]),Db=e=>Ql(e,[232,236,242],[58,62,72],[255,255,255]);function Hb(e,t){const a=e.L,o=e.H,r=Uo(t,.22),n=Ia(t,Mr,.3);return s=>{const i=Ia(r,n,Jt(Jt(s[2])*.75+Aa(s,a)*.4));return Ia(i,Mr,Math.pow(Jt(Aa(s,o)),24)*.95)}}const Bb={gold:[[0,"#fffbe8"],[.08,"#ffe7a0"],[.3,"#eeb546"],[.62,"#ad7214"],[.87,"#5a3806"],[1,"#8c5c18"]],silver:[[0,"#ffffff"],[.08,"#f3f5f9"],[.32,"#c6ccd6"],[.64,"#7a808c"],[.88,"#3d4149"],[1,"#6b717c"]],pearl:[[0,"#ffffff"],[.1,"#fdf9f7"],[.45,"#ebe4e6"],[.8,"#c6bccb"],[1,"#a89db5"]]};function Ao(e,t,a,o,r){const n=t.toScreen(a),s=t.H,i=e.createRadialGradient(n[0]+s[0]*o*.85,n[1]+s[1]*o*.85,0,n[0],n[1],o);if(typeof r=="string")for(const[l,h]of Bb[r])i.addColorStop(l,h);else i.addColorStop(0,ir(Ia(r,Mr,.8))),i.addColorStop(.1,ir(Ia(r,Mr,.3))),i.addColorStop(.35,ir(r)),i.addColorStop(.85,ir(Uo(r,.5))),i.addColorStop(1,ir(Uo(r,.62)));e.fillStyle=i,e.beginPath(),e.arc(n[0],n[1],o,0,Vl),e.fill()}function Lb(e,t,a,o,r,n,s){const i=As(o,r),l=(x,v,b)=>{const y=x*Math.cos(v),$=x*Math.sin(v);return[a[0]+y*r[0]+$*i[0]+b*o[0],a[1]+y*r[1]+$*i[1]+b*o[1],a[2]+y*r[2]+$*i[2]+b*o[2]]},h=8,d=.55,u=.36*n,c=[],f=[];for(let x=0;x<h;x++){const v=(x+.5)/h*Vl;c.push(l(n,v,0)),f.push(l(n*d,v,u))}const g=Hb(t,s),m=(x,v)=>{const b=t.dir(v);b[2]<=.02||(e.fillStyle=ir(g(b)),e.beginPath(),x.forEach((y,$)=>{const p=t.toScreen(y);$?e.lineTo(p[0],p[1]):e.moveTo(p[0],p[1])}),e.closePath(),e.fill(),e.strokeStyle=e.fillStyle,e.stroke())};e.lineWidth=Math.min(.3,1/t.px),e.lineJoin="round";for(let x=0;x<h;x++){const v=c[x],b=c[(x+1)%h],y=f[(x+1)%h],$=f[x];let p=As(Jr(y,v),Jr($,b));Aa(p,o)<0&&(p=[-p[0],-p[1],-p[2]]),m([v,b,y,$],mo(p))}if(m(f,o),t.dir(o)[2]>.1){const x=t.toScreen(l(0,0,u)),v=t.L;e.fillStyle="rgba(255,255,255,0.3)",e.beginPath();const b=t.toScreen(l(n*d*.8,Math.atan2(-v[1],-v[0])+2.2,u)),y=t.toScreen(l(n*d*.9,Math.atan2(-v[1],-v[0])+Math.PI,u)),$=t.toScreen(l(n*d*.8,Math.atan2(-v[1],-v[0])+Math.PI+.94,u));e.moveTo(x[0],x[1]),e.lineTo(b[0],b[1]),e.lineTo(y[0],y[1]),e.lineTo($[0],$[1]),e.closePath(),e.fill()}}function Zi(e,t){const a=e.right-e.left;for(let o=0;o<e.widths.length;o++)if(e.widths[o]>=t*a)return o*e.step-Fe;return e.top}const oh=new WeakMap;function bf(e){const t=oh.get(e);if(t)return t;const a=128,o=Uu(e,a);if(!o)return null;const r=rt/a,n=M=>(M+.5)*r-Fe,s=(M,w)=>o[w*a+M]>=128,i=Math.floor((42+Fe)/r),l=Math.ceil((58+Fe)/r);let h=a,d=-1;for(let M=i;M<=l;M++){for(let w=0;w<a;w++)if(s(M,w)){w<h&&(h=w);break}for(let w=a-1;w>=0;w--)if(s(M,w)){w>d&&(d=w);break}}const u=M=>{let w=-1,z=-1;for(let k=0;k<a;k++)s(k,M)&&(w<0&&(w=k),z=k);return[w,z]},c=Math.min(a-1,h+Math.round(8/r)),[f,g]=u(c);let m=-1,x=0,v=0,b=0;for(let M=Math.round((33+Fe)/r);M<=Math.round((67+Fe)/r);M++){const[w,z]=u(M);w>=0&&z-w>m&&(m=z-w,x=w,v=z,b=M)}const y=new Float32Array(a),$=[];for(let M=0;M<a;M++){const[w,z]=u(M);y[M]=w<0?0:(z-w+1)*r,w>=0&&$.push([n(w)-.5*r,n(M)],[n(z)+.5*r,n(M)])}const p={top:n(h)-.5*r,topL:n(f),topR:n(g),mid:n(b),left:n(x)-.5*r,right:n(v)+.5*r,bottom:n(d)+.5*r,widths:y,step:r,hull:Xn($)};return oh.set(e,p),p}function Nn(e,t,a){const o=Math.cos(t),r=Math.sin(t),n=e[0]*o-e[1]*r,s=e[0]*r+e[1]*o,i=Math.cos(a),l=Math.sin(a);return[n,s*i-e[2]*l,s*l+e[2]*i]}const Ji=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Xo=(e,t,a)=>[e[0]+t[0]*a,e[1]+t[1]*a,e[2]+t[2]*a];function Rs(e,t=!0){const a=new Path2D;return e.forEach((o,r)=>r?a.lineTo(o[0],o[1]):a.moveTo(o[0],o[1])),t&&a.closePath(),a}function Ds(e){let t=1/0,a=1/0,o=-1/0,r=-1/0;for(const[n,s]of e)n<t&&(t=n),s<a&&(a=s),n>o&&(o=n),s>r&&(r=s);return{x0:t,y0:a,x1:o,y1:r,cx:(t+o)/2,cy:(a+r)/2,w:o-t,h:r-a}}const Ro=(e,t=0)=>{let a=e*2654435761+t*40503|0;return a=Math.imul(a^a>>>15,2246822507),a=Math.imul(a^a>>>13,3266489909),((a^a>>>16)>>>0)/4294967296};let Y0=null;function Yb(){if(Y0)return Y0;const e=48,t=typeof OffscreenCanvas=="function"?new OffscreenCanvas(e,e):typeof document<"u"?Object.assign(document.createElement("canvas"),{width:e,height:e}):null,a=t&&t.getContext("2d");if(!t||!a)return null;const o=a.createImageData(e,e);for(let r=0;r<e*e;r++){const n=r%e,s=r/e|0;let i=0;for(let h=-2;h<=2;h++)i+=Ro((n+h+e)%e+(s+h+e)%e*e,5);i/=5;const l=Math.round(255*(.82+.36*i));o.data[r*4]=o.data[r*4+1]=o.data[r*4+2]=Math.min(255,l),o.data[r*4+3]=255}return a.putImageData(o,0,0),Y0=t,t}const rh=new WeakMap;function Zl(e,t,a,o=.18){var r;const n=Yb();if(!n||t.length<3)return;let s=rh.get(e);s||rh.set(e,s=new Map);let i=s.get(o);if(i===void 0&&(i=e.createPattern(n,"repeat"),(r=i?.setTransform)==null||r.call(i,new DOMMatrix().scale(o)),s.set(o,i)),!i)return;const l=Ds(t);e.save(),e.clip(Rs(t)),e.globalCompositeOperation="multiply",e.globalAlpha=a,e.fillStyle=i,e.fillRect(l.x0-1,l.y0-1,l.w+2,l.h+2),e.restore()}function Jl(e,t,a,o,r,n=2.4){const s=t.length;if(s<3)return;let i=0;const l=[];for(let m=0;m<s;m++){const x=t[m],v=t[(m+1)%s],b=Math.hypot(v[0]-x[0],v[1]-x[1]);l.push(b),i+=b}const h=Math.min(360,Math.max(24,Math.round(i*Math.min(2.4,n*.5)))),d=Ds(t),u=new Path2D,c=new Path2D;let f=0,g=0;for(let m=0;m<h;m++){const x=(m+Ro(m,o)*.8)*(i/h);for(;f<s-1&&g+l[f]<x;)g+=l[f++];const v=t[f],b=t[(f+1)%s],y=l[f]?(x-g)/l[f]:0,$=v[0]+(b[0]-v[0])*y,p=v[1]+(b[1]-v[1])*y;let M=$-d.cx,w=p-d.cy;const z=Math.hypot(M,w)||1;M/=z,w/=z;const k=(Ro(m,o+1)-.5)*.9,F=Math.cos(k),S=Math.sin(k),_=M*F-w*S,A=M*S+w*F,C=r*(.35+Ro(m,o+2)),R=Ro(m,o+3)>.5?u:c;R.moveTo($-_*.4,p-A*.4),R.lineTo($+_*C,p+A*C)}e.save(),e.lineCap="round",e.lineWidth=.4,e.globalAlpha=.55,e.strokeStyle=Pt(a,.14),e.stroke(u),e.strokeStyle=Pt(a,-.06),e.stroke(c),e.restore()}function qn(e,t,a,o,r,n,s){if(!(r>0)||!(n>0))return;e.save(),t&&e.clip(t),e.translate(a,o),e.scale(1,n/r);const i=e.createRadialGradient(0,0,0,0,0,r);i.addColorStop(0,`rgba(0,0,0,${s})`),i.addColorStop(.55,`rgba(0,0,0,${s*.45})`),i.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=i,e.beginPath(),e.arc(0,0,r,0,Math.PI*2),e.fill(),e.restore()}const nh=48*Math.PI/180;function xf(e,t){const a=Math.cos(nh),o=Math.sin(nh),r=mo([e*a,t*a,o]);return{L:r,H:mo([r[0],r[1],r[2]+1])}}function ec(e){var t;const a=(t=e.getTransform)==null?void 0:t.call(e);return a?Math.sqrt(Math.abs(a.a*a.d-a.b*a.c))||1:2}function vf(e,t){const{L:a,H:o}=xf(e.lx,e.ly);return df([e.cy,0,e.sy,e.sy*e.sp,e.cp,-e.cy*e.sp,-e.sy*e.cp,e.sp,e.cy*e.cp],[50,50,0],a,o,t)}const Fl=new WeakMap;let Fs=Fl;function Mf(e,t){let a=Fl.get(Fs);a||Fl.set(Fs,a=new Map);let o=a.get(e);return o||(a.size>240&&a.clear(),o=t(),a.set(e,o)),o}function fa(e,t,a,o,r,n,s=!0){return mf(e,Mf(`${t}|${o}x${r}`,()=>pf(a,o,r,n,s)))}function ur(e,t,a,o,r,n,s,i=!1){return mf(e,Mf(`${t}|${n}x${s}`,()=>Wb(a,o,r,n,s,i)))}const Oo=(e,t=[40,40,44])=>Ts(e)??t,pt=Math.PI*2,yf=e=>e<=0?0:e>=1?1:e*e*(3-2*e),rr=(e,t)=>Math.sign(e)*Math.pow(Math.abs(e),t);function Xb(e,t,a,o,r,n){return fa(e,t,(s,i)=>{const l=s*pt,h=i*Math.PI;return[a[0]+o*Math.sin(h)*Math.cos(l),a[1]-o*Math.cos(h),a[2]+o*Math.sin(h)*Math.sin(l)]},r,n,a)}function Gi(e,t,a,o,r,n,s,i,l){return fa(e,t,(h,d)=>{const u=h*pt,c=d*pt,f=o+n*Math.cos(c);return a([f*Math.cos(u),r-n*Math.sin(c),f*s*Math.sin(u)])},i,l,h=>a([o*Math.cos(h*pt),r,o*s*Math.sin(h*pt)]))}function sh(e,t,a){return o=>{const r=mo(Jr(e(Math.min(1,o+.001)),e(Math.max(0,o-.001)))),n=As(r,t);return Xo(e(o),n,a(o))}}function wf(e,t,a,o,r,n){const s=Oo(r),i=ia(t,pt*o,12,20),l=Na(e,[{parts:[Xb(t,`ball${n}`,a,o*.86,i,Math.max(6,i>>1))],shade:br(t,s,.92)}],t.px),h=t.toScreen(a),d=Ds(l),u=Math.max(d.w,d.h)/2,c=Math.round(Math.min(340,50+u*t.px*5)),f=new Path2D,g=new Path2D;for(let v=0;v<c;v++){const b=Ro(v,n)*pt,y=u*(.25+.7*Math.sqrt(Ro(v,n+1))),$=u*(.25+.35*Ro(v,n+2)),p=h[0]+Math.cos(b)*y,M=h[1]+Math.sin(b)*y,w=(Ro(v,n+3)-.5)*.6,z=Math.cos(b+w),k=Math.sin(b+w),F=Ro(v,n+4)>.45?f:g;F.moveTo(p,M),F.quadraticCurveTo(p+Math.cos(b)*$*.5,M+Math.sin(b)*$*.5,p+z*$,M+k*$)}e.save(),e.lineCap="round",e.lineWidth=Math.max(.3,u*.06);const m=t.L,x=e.createLinearGradient(h[0]+m[0]*u,h[1]+m[1]*u,h[0]-m[0]*u,h[1]-m[1]*u);x.addColorStop(0,Pt(r,.2,-.03)),x.addColorStop(1,Pt(r,-.12,.02)),e.strokeStyle=x,e.globalAlpha=.85,e.stroke(f),e.strokeStyle=Pt(r,-.18,.03),e.globalAlpha=.6,e.stroke(g),e.restore()}function Nb(e,t,a,o,r){const n=a.right-a.left,s=.46*n,i=.21*n,l=.33*n,h=.05*n,d=[50-.07*n,Math.max(a.top+.22*n,Zi(a,.5)+.1*n),0],u=-.24,c=-.2,f=S=>Ji(d,Nn(S,u,c)),g=ia(t,pt*s,32,56),m=ia(t,1.2*s,10,32,6),x=fa(t,"beret:dome",(S,_)=>{const A=S*pt;let C,R;const O=.74;if(_<=O){const I=_/O*(Math.PI/2);C=s*Math.sin(I),R=-(h+i*Math.pow(Math.cos(I),.8))}else{const I=yf((_-O)/(1-O));C=s+(l-s)*I,R=-h*(1-I)}const E=Math.sin(Math.min(1,_/O)*Math.PI*.9);return C*=1+.035*Math.sin(A*7+.4)*E,f([C*Math.cos(A),R,C*.93*Math.sin(A)])},g,m,f([0,-h-i*.4,0])),v=fa(t,"beret:under",(S,_)=>{const A=S*pt,C=l*(1-_);return f([C*Math.cos(A),-.004*n*_,C*.93*Math.sin(A)])},24,2,f([0,-h-i*.4,0])),b=Oo(o),y=t.toScreen(f([0,.02*n,0]));qn(e,r,y[0]+.02*n,y[1]+.045*n,l*1.25,.08*n,.4);const $=Gi(t,"beret:binding",f,l,-.005*n,.022*n,.93,ia(t,pt*l,24,48),5),p=Oo(Pt(o,-.06)),M=Na(e,[{parts:[v],shade:br(t,b,.7)},{parts:[$],shade:Yr(t,p,.45)},{parts:[x],shade:br(t,b)}],t.px),w=Xn(M);Zl(e,w,.5,.14),Jl(e,w,o,11,.4,t.px);const z=.02*n,k=-h-i+.006*n,F=ur(t,"beret:stalk",S=>f([z+.014*n*S*S,k-.045*n*S,0]),[0,0,1],(S,_)=>[.016*n*(1-.25*S)*Math.cos(_),.016*n*(1-.25*S)*Math.sin(_)],8,3);Na(e,[{parts:[F],shade:br(t,b,.95)}],t.px),Ao(e,t,f([z+.014*n,k-.047*n,0]),.019*n,Uo(b,1.15))}function jb(e,t,a,o,r){const n=a.right-a.left,s=.53*Math.max(.5*n,a.topR-a.topL)+.08*n,i=.32*n,l=.1*n,h=s*1.05,d=[50,Zi(a,.72)+.06*n,0],u=0,c=-.14,f=_=>Ji(d,Nn(_,u,c)),g=(_,A)=>{const C=_*pt,R=A*(Math.PI/2),O=s*Math.sin(R)*(1-.03*(1-A)),E=-(l+i*Math.cos(R));return f([O*Math.cos(C),E,O*.92*Math.sin(C)])},m=f([0,-l-i*.4,0]),x=fa(t,"beanie:dome",g,ia(t,pt*s,28,48),ia(t,1.3*i,9,24,6),m),v=(_,A)=>{const C=_*pt,R=2*A-1,O=h*(1-.07*R*R*R*R)*1.01;return f([O*Math.cos(C),-l*(1-A),O*.92*Math.sin(C)])},b=fa(t,"beanie:cuff",v,ia(t,pt*h,28,56),4,f([0,-l/2,0])),y=Oo(o),$=Oo(Pt(o,.03)),p=Kl([b]);qn(e,r,p.cx,p.y1-.01*n,p.w*.5,.06*n,.34);const M=Na(e,[{parts:[x],shade:br(t,y,.96)}],t.px),w=40,z=11;if(s*pt/w*t.px>=2.2){const _=fa(t,"beanie:stitch",g,w,z,m,!1),A=new Path2D,C=new Path2D,R=w+1;for(let E=0;E<w*z;E++){if(_.f[E*3+2]<.12)continue;const I=Math.floor(E/w)*R+E%w,P=[_.x[I],_.y[I]],T=[_.x[I+1],_.y[I+1]],Y=[_.x[I+R+1],_.y[I+R+1]],q=[_.x[I+R],_.y[I+R]],j=(X,K)=>{const Q=[P[0]+(T[0]-P[0])*X,P[1]+(T[1]-P[1])*X],W=[q[0]+(Y[0]-q[0])*X,q[1]+(Y[1]-q[1])*X];return[Q[0]+(W[0]-Q[0])*K,Q[1]+(W[1]-Q[1])*K]};for(const[X,K]of[[A,0],[C,-.06]]){const Q=j(.14+K,.12),W=j(.5+K,.88),N=j(.86+K,.12);X.moveTo(Q[0],Q[1]),X.lineTo(W[0],W[1]),X.lineTo(N[0],N[1])}}const O=s*pt/w;e.save(),e.clip(Rs(Xn(M))),e.lineCap="round",e.lineJoin="round",e.lineWidth=Math.max(.35,O*.2),e.strokeStyle=Pt(o,-.22,.03),e.globalAlpha=.5,e.stroke(A),e.lineWidth=Math.max(.3,O*.12),e.strokeStyle=Pt(o,.2,-.03),e.globalAlpha=.35,e.stroke(C),e.restore()}const k=Na(e,[{parts:[b],shade:br(t,$,.98)}],t.px),F=pt*h/30;if(F*t.px>=3){const _=new Path2D,A=new Path2D;for(let C=0;C<60;C++){const R=C/60,O=R*pt;if(t.dir(Nn([Math.cos(O),0,.92*Math.sin(O)],u,c))[2]<.08)continue;const E=t.toScreen(v(R,.1)),I=t.toScreen(v(R,.9)),P=C%2?_:A;P.moveTo(E[0],E[1]),P.lineTo(I[0],I[1])}e.save(),e.lineCap="round",e.lineWidth=F*.34,e.strokeStyle=Pt(o,-.2,.03),e.globalAlpha=.45,e.stroke(_),e.lineWidth=F*.22,e.strokeStyle=Pt(o,.16,-.02),e.globalAlpha=.4,e.stroke(A),e.restore()}const S=Xn(M.concat(k));Jl(e,S,o,23,.35,t.px),wf(e,t,f([0,-l-i-.055*n,0]),.085*n,Pt(o,.06),31)}function qb(e,t,a,o,r){const n=a.right-a.left,s=[50+.06*n,Zi(a,.3)+.04*n,0],i=.18*n,l=Math.max(.3*n,Math.min(.46*n,s[1]+31-.1*n)),h=.18,d=-.12,u=k=>Ji(s,Nn(k,h,d)),c=(k,F,S=1)=>{const _=k*pt,A=i*(1-F)*(1+.04*Math.sin(F*Math.PI))*S;return u([A*Math.cos(_),-l*F,A*Math.sin(_)])},f=(k,F)=>u([0,-l*Math.min(.97,F),0]),g=ia(t,pt*i,20,40),m=ia(t,l,10,24,6),x=fa(t,"party:cone",(k,F)=>c(k,F),g,m,f),v=Oo(o),b=[252,246,234],y=Kl([x]);qn(e,r,y.cx,y.y1,i*1.15,.04*n,.3);const $=Gi(t,"party:trim",u,i*1.02,.004*n,.016*n,1,ia(t,pt*i,20,40),5),p=[],M=6,w=3.2;for(let k=0;k<M;k+=1)p.push(fa(t,`party:stripe${k}`,(F,S)=>c((k+.5*S-w*F*.97)/M,F*.97,1.004),m+3,1,f));const z=Na(e,[{parts:[x],shade:th(t,b)},{parts:[$],shade:gf(t)}],t.px);Na(e,[{parts:p,shade:th(t,v)}],t.px),Zl(e,Xn(z),.18,.1),wf(e,t,u([0,-l-.035*n,0]),.06*n,"#f4efe6",37)}function Gb(e,t,a,o){const r=a.right-a.left,n=.44*Math.max(.45*r,a.topR-a.topL)+.07*r,s=.11*r,i=.15*r,l=.9,h=[50,Zi(a,.42)+.05*r,0],d=.05,u=-.22,c=G=>Ji(h,Nn(G,d,u)),f=G=>mo(Nn(G,d,u)),g=(G,J,V)=>c([J*Math.cos(G),V,J*l*Math.sin(G)]),m=G=>c([0,G,0]),x=ia(t,pt*n,32,64),v=fa(t,"crown:band",(G,J)=>g(G*pt,n*(1-.018*Math.sin(J*Math.PI)),-s*(1-J)),x,2,(G,J)=>m(-s*(1-J))),b=.017*r,y=Gi(t,"crown:rimTop",c,n+.004*r,-s,b,l,x,5),$=Gi(t,"crown:rimBot",c,n+.004*r,0,b*1.15,l,x,5),p=-s*.55,M=Math.max(.12*r,h[1]-a.top+.04*r+p),w=Math.PI/2,z=fa(t,"crown:cap",(G,J)=>{const V=G*pt,U=J*(Math.PI/2),fe=.08*Math.sin(2*U)*(.55+.45*Math.cos(5*(V-w-Math.PI/5)));return g(V,n*(.9*Math.sin(U)+fe),p-M*Math.cos(U))},ia(t,pt*n,24,48),ia(t,1.4*M,8,20,6),m(p-M*.4)),k=[],F=[],S=[],_=[],A=(G,J,V,U,fe,H,de)=>{de.push(fa(t,G,(oe,ue)=>{const te=oe*2-1,Xe=J+te*V*Math.pow(1-ue,1.3),qe=n+.004*r+fe*(1-Math.abs(te))*(1-.5*ue)+H*ue*ue;return g(Xe,qe,-s-U*ue)},2,ia(t,U,3,5),(oe,ue)=>g(J,n*.5,-s-U*ue),!1))};for(let G=0;G<5;G++){const J=w+G/5*pt;A(`crown:point${G}`,J,pt/5*.34,i,.05*r,.03*r,k),S.push(g(J,n+.004*r+.03*r+.02*r,-s-i-.018*r));const V=J+Math.PI/5;A(`crown:bud${G}`,V,pt/5*.12,i*.36,.02*r,.01*r,F),_.push(g(V,n+.004*r+.012*r,-s-i*.36-.012*r))}const C=Kl([v]);qn(e,o,C.cx,C.y1,C.w*.5,.045*r,.34);const R=t.depth(m(p)),O=gf(t),E=Ql(t,[255,196,80],[92,54,10],[255,222,150]),I=G=>E(G[2]<0?[-G[0],-G[1],-G[2]]:G),P=.024*r,T=.019*r;for(const G of S)t.depth(G)<R&&Ao(e,t,G,P,"pearl");for(const G of _)t.depth(G)<R&&Ao(e,t,G,T,"gold");Na(e,[{parts:[z],shade:Eb(t,[150,22,44])},{parts:[v],shade:O,bias:.01*r},{parts:[y],shade:O,bias:.012*r},{parts:[$],shade:O,bias:.012*r},{parts:k,shade:I,cull:!1,flat:!0},{parts:F,shade:I,cull:!1,flat:!0}],t.px);const Y=[[208,20,60],[30,150,92],[36,90,220],[36,90,220],[30,150,92]];for(let G=0;G<5;G++)for(const[J,V]of[[w+G/5*pt,"stone"],[w+G/5*pt+Math.PI/5,"stud"]]){const U=f([Math.cos(J),0,l*Math.sin(J)]);if(t.dir(U)[2]<.12)continue;const fe=g(J,n+.01*r,-s*.5);if(V==="stud"){Ao(e,t,fe,.013*r,"gold");continue}const H=(G===0?.034:.027)*r;Ao(e,t,fe,H*1.3,"gold");const de=f([-Math.sin(J),0,l*Math.cos(J)]);Lb(e,t,Xo(fe,U,.006*r),U,de,H,Y[G])}for(const G of S)t.depth(G)>=R&&Ao(e,t,G,P,"pearl");for(const G of _)t.depth(G)>=R&&Ao(e,t,G,T,"gold");const q=.034*r,j=m(p-M-q*.75),X=f([0,-1,0]),K=(G,J,V)=>ur(t,G,U=>[J[0]+(V[0]-J[0])*U,J[1]+(V[1]-J[1])*U,J[2]+(V[2]-J[2])*U],f([0,0,1]),_s(.009*r,.009*r,.5),2,6),Q=Xo(j,X,q*.8),W=Xo(j,X,q*.8+.075*r),N=Xo(j,X,q*.8+.05*r),ae=f([1,0,0]);Ao(e,t,j,q,"gold"),Na(e,[{parts:[K("crown:barV",Q,W)],shade:O},{parts:[K("crown:barH",Xo(N,ae,-.026*r),Xo(N,ae,.026*r))],shade:O}],t.px)}function Ub(e,t,a){const o=t.right-t.left,r=.15*o,n=1.1,s=.05*o,i=.068*o,l=t.mid-.07*o,h=.5,d=Oo(a),u=Oo(Pt(a,-.12)),c=Oo(Pt(a,.08)),f=ia(e,pt*r,20,40),g=[],m=[],x=[],v=[],b=Db(e);for(const W of[-1,1]){const N=[W*Math.cos(h),0,Math.sin(h)],ae=[0,1,0],G=[-Math.sin(h),0,W*Math.cos(h)],J=[(W<0?t.left:t.right)-W*.02*o,l,.01*o],V=(ie,_e,ve)=>{const Ne=Math.cos(ve)*n*_e,He=Math.sin(ve)*_e;return[J[0]+N[0]*ie+ae[0]*Ne+G[0]*He,J[1]+N[1]*ie+ae[1]*Ne+G[1]*He,J[2]+N[2]*ie+ae[2]*Ne+G[2]*He]},U=ie=>Xo(J,N,ie);v.push({c:J,ry:r*n});const fe=r*.9-s*.5,H=f>=48?1:0,de=fa(e,`phones:cushion${W}`,(ie,_e)=>{const ve=ie*pt,Ne=_e*Math.PI,He=1+.006*H*Math.sin(ve*24)*Math.sin(Ne);return V(s*.5*(1-Math.cos(Ne)),(fe+s*.62*Math.sin(Ne))*He,ve)},f,5,(ie,_e)=>U(s*.5*(1-Math.cos(_e*Math.PI)))),oe=fa(e,`phones:shell${W}`,(ie,_e)=>{const ve=_e*(Math.PI/2);return V(s+i*Math.pow(Math.sin(ve),.55),r*(.7+.3*Math.pow(Math.cos(ve),.55)),ie*pt)},f,5,U(s+i*.5)),ue=.66*r,te=.017*o,Xe=fa(e,`phones:ring${W}`,(ie,_e)=>V(s+i+te*.45*Math.sin(_e*pt),ue+te*Math.cos(_e*pt),ie*pt),f,5,ie=>V(s+i,ue,ie*pt)),qe=ue-te*.5,ge=fa(e,`phones:plate${W}`,(ie,_e)=>V(s+i+.013*o*(1-_e*_e),qe*_e,ie*pt),f,3,U(s+i-.02*o)),he=s+i*.45,be=r*1.04+.022*o,ze=ie=>{const _e=ie*Math.PI,ve=-Math.sin(_e)*n*be,Ne=Math.cos(_e)*be;return[J[0]+N[0]*he+ae[0]*ve+G[0]*Ne,J[1]+N[1]*he+ae[1]*ve+G[1]*Ne,J[2]+N[2]*he+ae[2]*ve+G[2]*Ne]},Qe=ur(e,`phones:yoke${W}`,ze,N,_s(.013*o,.008*o,.6),ia(e,Math.PI*be,12,24),6);m.push(ze(0),ze(1)),x.push(ze(.5)),g.push({parts:[de],shade:Yr(e,u,.35)},{parts:[oe],shade:Yr(e,d,.8)},{parts:[Xe],shade:b,bias:.02*o},{parts:[ge],shade:Yr(e,c,1.3),bias:.01*o},{parts:[Qe],shade:b})}const[y,$]=x,p=(y[2]+$[2])/2,M=(y[0]+$[0])/2,w=($[0]-y[0])/2,z=(y[1]+$[1])/2,k=W=>.005*o+.022*o*Math.pow(Math.sin(Math.PI*W),.35),F=2/2.2,S=W=>{let N=1/0;const ae=t.hull;for(let G=0;G<ae.length;G++){const J=ae[G],V=ae[(G+1)%ae.length];J[0]===V[0]||W<Math.min(J[0],V[0])||W>Math.max(J[0],V[0])||(N=Math.min(N,J[1]+(V[1]-J[1])*(W-J[0])/(V[0]-J[0])))}return N};let _=z-t.top;for(let W=1;W<64;W++){const N=Math.PI*(1-W/64),ae=Math.pow(Math.abs(Math.sin(N)),F),G=S(M+w*rr(Math.cos(N),F));ae>.05&&Number.isFinite(G)&&(_=Math.max(_,(z-G+2*k(W/64)+.006*o)/ae))}const A=W=>{const N=Math.PI*(1-W);return[M+w*rr(Math.cos(N),F),z-_*Math.pow(Math.abs(Math.sin(N)),F),p]},C=(W,N)=>ae=>A(W+(N-W)*ae),R=[0,0,1],O=w*2+_*2,E=ia(e,O,24,48),I=.09,P=.016*o,T=sh(C(I,1-I),R,()=>P),Y=W=>yf(Math.min(W,1-W)/.07),q=ur(e,"phones:bandShell",T,R,(W,N)=>{const ae=Y(W);return[(.024+.016*ae)*o*rr(Math.cos(N),.4),(.008+.008*ae)*o*rr(Math.sin(N),.4)]},E,6),j=sh(C(I+.02,1-I-.02),R,W=>-k(I+.02+(1-2*I-.04)*W)),X=ur(e,"phones:bandPad",j,R,(W,N)=>[.034*o*rr(Math.cos(N),.5),k(I+.02+(1-2*I-.04)*W)*rr(Math.sin(N),.7)],E,6),K=[C(0,I+.03),C(1-I-.03,1)].map((W,N)=>ur(e,`phones:slider${N}`,W,R,_s(.022*o,.006*o,.4),4,6));g.push({parts:[q],shade:Yr(e,d,.9)},{parts:[X],shade:Yr(e,u,.3)},{parts:K,shade:b});const Q=[];for(let W=0;W<=48;W++)Q.push(Xo(j(.04+.92*W/48),R,.034*o+.001*o));return{layers:g,pivots:m,pivotR:.017*o,stitch:Q,seats:v}}let ss=null;function $f(e,t,a,o,r,n){const s=`${t.m.join()}|${t.px}|${t.L.join()}|${o}`;(!ss||ss.m!==a||ss.key!==s)&&(ss={m:a,key:s,ph:Ub(t,a,o)});const i=ss.ph,l=a.right-a.left,h=d=>r==="front"?d>=0:d<0;if(r==="front")for(const d of i.seats){if(t.depth(d.c)<0)continue;const u=t.toScreen(d.c);qn(e,n,u[0],u[1]+.01*l,.06*l,d.ry*1.05,.26)}Na(e,i.layers.map(d=>({...d,keep:h})),t.px);for(const d of i.pivots)h(t.depth(d))&&Ao(e,t,d,i.pivotR,"silver");if(r==="front"&&l*t.px>120&&t.dir([0,0,1])[2]>.3){const d=i.stitch.map(u=>t.toScreen(u));e.save(),e.setLineDash([.022*l,.014*l]),e.lineCap="round",e.lineWidth=.0045*l,e.strokeStyle=Pt(o,.12),e.globalAlpha=.55,e.stroke(Rs(d,!1)),e.restore()}}function Vb(e,t,a,o,r,n,s,i,l=!1){if(a.facing<.05)return;const h=o.right-o.left,d=i.y+22*i.scale,u=Math.max(d,o.bottom-.15*h),c=Math.max(0,o.bottom-3-u),f=Math.min(h,100)*Math.max(.5,Math.min(1,c/15)),g=n(50,u),m=(S,_,A)=>[50+S*f,u+_*f,g+A*f],x=Oo(r),v=[m(-.36,-.18,0),m(.36,.18,0),m(-.36,.18,0),m(.36,-.18,0)].map(S=>t.toScreen(S)),b=Ds(v),y=t.toScreen(m(.01,.08,0));qn(e,s,y[0],y[1],b.w*.52,b.h*.5,.3);const $=ia(t,.32*f,8,16),p=ia(t,.3*f,8,16,6),M=`${g.toFixed(2)},${u.toFixed(2)},${f.toFixed(2)}`,w=!!l,z=w?br(t,x):ah(t,x),k=[];for(const S of[-1,1]){const _=(A,C)=>{const R=.058+.3*A-.035*Math.pow(A,4)*Math.sin(Math.PI*C),O=-(.05+.12*Math.pow(A,.8))*Math.cos(Math.PI*C)+.012*A*A,E=.018+.058*Math.sin(Math.PI*(.12+.88*A)),I=.016*Math.sin(3*Math.PI*C)*Math.pow(1-A,1.3);return m(S*R,O,(E+I)*Math.sin(Math.PI*C)+.004)};k.push({parts:[fa(t,`bow:wing${S}@${M}`,_,$,p,A=>m(S*(.058+.3*A),0,-.03))],shade:z}),k.push({parts:[fa(t,`bow:end${S}@${M}`,(A,C)=>{const R=_(1,C);return[R[0],R[1],R[2]-(R[2]-g)*A]},1,p,m(S*.2,0,-.03))],shade:z})}const F=fa(t,`bow:knot@${M}`,(S,_)=>{const A=.068*(2*S-1)*(1-.12*Math.sin(Math.PI*_)),C=.075*(2*_-1),R=Math.pow(Math.max(0,1-Math.pow(Math.abs(2*S-1),3)),.5),O=Math.pow(Math.max(0,1-Math.pow(Math.abs(2*_-1),5)),.4);return m(A,C,.012+.075*R*O)},6,6,m(0,0,-.02));if(k.push({parts:[F],shade:w?br(t,x,.9):ah(t,Uo(x,.9))}),!w){Na(e,k,t.px);return}for(let S=0;S<k.length;S+=2){const _=k.slice(S,S+2),A=Xn(Na(e,_,t.px));Zl(e,A,.5,.1),Jl(e,A,r,41+S,.3,t.px)}}const ih={round:{rx:10.8,ry:10.8,n:2,tr:1.15,td:1.2},square:{rx:12,ry:9.6,n:4.2,tr:1.45,td:1.4},shades:{rx:12.6,ry:10,n:3.4,tr:1.6,td:1.5}};function lh(e,t,a,o,r,n={yaw:0,pitch:0}){if(t==="none")return;Fs=ih;const s=ih[t],i=Math.cos(n.yaw),l=Math.sin(n.yaw),h=Math.cos(n.pitch),d=Math.sin(n.pitch),{L:u,H:c}=xf(o.lx,o.ly),f=df([i,0,l,d*l,h,-d*i,-h*l,d,h*i],[0,0,0],u,c,ec(e)),g=Math.max(a[0].fz,a[1].fz)+3.2,m=_=>g-.0045*_*_,x=2/s.n,v=(_,A)=>C=>{const R=C*pt,O=_.ox+(s.rx+A)*rr(Math.cos(R),x),E=_.oy+(s.ry+A)*rr(Math.sin(R),x);return[O,E,m(O)]},b=(_,A,C=48)=>{const R=v(_,A),O=[];for(let E=0;E<C;E++)O.push(f.toScreen(R(E/C)));return O},y=a.map(_=>Math.max(0,Math.min(1,(_.z-.18)*3.2)));if(r==="shadow"){for(let _=0;_<2;_++)y[_]<=0||(e.save(),e.globalAlpha=.22*y[_],e.translate(-o.lx*1.6,-o.ly*1.6+.8),e.lineWidth=s.tr*2+.6,e.lineJoin="round",e.strokeStyle="#000",e.stroke(Rs(b(a[_],0))),e.restore());return}const $=Yr(f,[22,22,26],1.1);for(let _=0;_<2;_++){if(y[_]<=0)continue;const A=Rs(b(a[_],-s.tr*.5)),C=Ds(b(a[_],0,16));if(e.save(),e.globalAlpha=y[_],t==="shades"){const P=e.createLinearGradient(C.cx,C.y0,C.cx,C.y1);P.addColorStop(0,"rgba(58,60,78,0.97)"),P.addColorStop(.55,"rgba(18,18,26,0.98)"),P.addColorStop(1,"rgba(30,26,44,0.98)"),e.fillStyle=P}else{const P=e.createLinearGradient(C.cx,C.y0,C.cx,C.y1);P.addColorStop(0,"rgba(236,244,255,0.26)"),P.addColorStop(.45,"rgba(214,230,255,0.08)"),P.addColorStop(1,"rgba(214,230,255,0.14)"),e.fillStyle=P}e.fill(A),e.clip(A);const R=C.w,O=C.h,E=(P,T,Y)=>{e.globalAlpha=y[_]*Y,e.fillStyle="#fff",e.beginPath(),e.moveTo(C.x0+R*P,C.y1+O*.1),e.lineTo(C.x0+R*(P+.55),C.y0-O*.1),e.lineTo(C.x0+R*(P+.55+T),C.y0-O*.1),e.lineTo(C.x0+R*(P+T),C.y1+O*.1),e.closePath(),e.fill()},I=t==="shades"?1.4:1;E(-.28,.26,.16*I),E(.06,.07,.3*I),e.restore()}const p=ia(f,pt*s.rx*1.1,28,56,8),M=_=>ur(f,`rim:${t}:${_.ox},${_.oy},${_.fz.toFixed(2)}`,v(_,0),[0,0,1],_s(s.td,s.tr,.55),p,6,!0),[w,z]=a,k=_=>{const A=t==="round",C=[w.ox+s.rx*(A?.9:.98),w.oy-s.ry*(A?.32:.42),0],R=[z.ox-s.rx*(A?.9:.98),z.oy-s.ry*(A?.32:.42),0],O=[0,(w.oy+z.oy)/2-s.ry*(A?.8:.6),0],E=1-_,I=E*E*C[0]+2*E*_*O[0]+_*_*R[0],P=E*E*C[1]+2*E*_*O[1]+_*_*R[1];return[I,P,m(I)+.3]},F=ur(f,`bridge:${t}:${w.ox},${w.oy},${z.ox},${g.toFixed(2)}`,k,[0,0,1],_s(s.td*.8,s.tr*.75,.7),8,6),S=[{part:M(w),a:y[0],d:f.depth([w.ox,w.oy,g])},{part:M(z),a:y[1],d:f.depth([z.ox,z.oy,g])},{part:F,a:Math.min(y[0],y[1]),d:f.depth([0,w.oy,g])}].sort((_,A)=>_.d-A.d);for(const _ of S)_.a<=0||(e.save(),e.globalAlpha=_.a,Na(e,[{parts:[_.part],shade:$}],f.px),e.restore());for(const[_,A,C]of[[w,-1,y[0]],[z,1,y[1]]]){if(C<=0)continue;e.save(),e.globalAlpha=C;const R=_.ox+A*s.rx*.93;Ao(e,f,[R,_.oy-s.ry*.5,m(R)+s.td],.75,"silver"),e.restore()}}function Kb(e,t,a,o){if(!o.headphones)return;const r=bf(t);r&&(Fs=r,$f(e,vf(a,ec(e)),r,o.color,"behind",null))}function Qb(e,t,a,o,r,n,s){const i=bf(t);if(!i)return;Fs=i;const l=vf(a,ec(e));switch(o.bowTie&&Vb(e,l,a,i,o.color,n,r,s,o.fabric),o.headphones&&$f(e,l,i,o.color,"front",r),o.hat){case"beret":Nb(e,l,i,o.color,r);break;case"beanie":jb(e,l,i,o.color,r);break;case"party":qb(e,l,i,o.color,r);break;case"crown":Gb(e,l,i,r);break}}const Bo=1.5,_i=.1,Xr=17,Zb=15,Jb=.9,ch=(e,t)=>t+(1-t)*Math.sqrt(Math.max(0,1-e*e)),ex=25,tx=6.3,ax={eyes:1,mouth:-3.5},hi=new Map;function ox(e,t,a){const o=`${e}|${t}|${a}`;let r=hi.get(o);if(!r){const n=Pt(e,-.3*t,.05*t),s=Pt(e,-.12*t,.03*t),i=[],l=[];for(let h=0;h<Xr;h++){const d=h/(Xr-1);i.push(d>.6?"":uh(n,s,d/.6)),l.push(d>=.5?e:uh(n,e,d/.5))}r={base:e,far:n,near:s,light:Pt(e,.04*a),dark:Pt(e,-.3*t,.05*t),capTop:Pt(e,.035*a),capBottom:Pt(e,-.035*t),crispMix:i,smoothMix:l,grad:null},hi.size>200&&hi.clear(),hi.set(o,r)}return r}const hh=e=>(e.startsWith("hsl(")?e:Pt(e,0)).match(/[\d.]+/g).map(Number);function uh(e,t,a){const o=hh(e),r=hh(t),n=o.map((s,i)=>s+(r[i]-s)*a);return`hsl(${n[0].toFixed(1)} ${n[1].toFixed(1)}% ${n[2].toFixed(1)}%)`}const xn=34,rx=Math.PI*1.55,nx=57,sx=.4,fh=-.28,ui=new Map;function ix(e){let t=ui.get(e);return t||(t={base:Pt(e,.1,.02),light:Pt(e,.3,.04),dark:Pt(e,-.22,.08),halo:Pt(e,.2)},ui.size>200&&ui.clear(),ui.set(e,t)),t}const fi=(e,t)=>e.replace(")",` / ${Math.max(0,Math.min(1,t)).toFixed(3)})`);function dh(e,t,a,o,r,n,s){const i=s?.strength??0,l=Math.min(1,t.whirl*i);if(l<=.01)return;const h=s?.size??1,d=s?.width??1,u=s?.length??1,c=s?.tilt??1,f=rx*u,g=ix(a),m=-t.whirlAngle,x=nx*h,v=x*sx*c*(n?1.14:.86),b=Math.atan2(r,o)-fh;e.save(),e.rotate(fh),e.translate(0,5),e.lineCap="butt";const y=($,p,M,w,z)=>{e.strokeStyle=w,e.lineWidth=M,e.beginPath(),e.ellipse(0,z,x,v,0,$,p,!1),e.stroke()};if(n)for(let $=0;$<xn;$++){const p=$/xn,M=m+p*f,w=M+f/xn+.012;if(Math.sin((w+M)/2)<=0)continue;const z=Math.pow(1-p,1.3);y(M,w,(2+8*z)*1.5*d,`rgba(0,0,0,${(.2*l*z).toFixed(3)})`,3.5)}for(let $=0;$<xn;$++){const p=$/xn,M=m+p*f,w=M+f/xn+.012,z=(w+M)/2;if(Math.sin(z)>0!==n)continue;const k=.6+.4*Math.sin(z),F=Math.pow(1-p,1.3),S=1+.18*Math.sin(p*9+1.2),_=(2+8*F)*k*d*S,A=l*(.3+.7*F)*k,C=.5+.5*Math.cos(z-b);y(M,w,_*2.6,fi(g.halo,A*.2),0),y(M,w,_*.8,fi(g.dark,A*.45),_*.32),y(M,w,_,fi(g.base,A*.72),0),y(M,w,_*.62,fi(g.light,A*.78*(.4+.6*C)),-_*.16),y(M,w,_*.24,`rgba(255,255,255,${(A*.9*(.15+.85*C*C)).toFixed(3)})`,-_*.3)}e.restore()}const lx=e=>{if(e===void 0||!Number.isFinite(e))return{};const t=e*Math.PI/180;return{bx:Math.sin(t),by:-Math.cos(t)}},kf={fabric:{shadow:1.15,highlight:1.45,light:295,rim:.6,spread:1.6},other:{shadow:.35,highlight:1.3,light:300,rim:.5,spread:1.55}};function ph(e,t,a,o){const r=t*Bo;e.clearRect(0,0,r,r);const n=t/100;let s,i;if(o.dpr!==void 0)s=o.dpr,i=[s,0,0,s,0,0];else if(e.getTransform){const oe=e.getTransform();i=[oe.a,oe.b,oe.c,oe.d,oe.e,oe.f],s=oe.a||1}else s=1,i=[1,0,0,1,0,0];const l=kf[o.shading==="fabric"?"fabric":"other"],h=o.shadow??l.shadow,d=o.highlight??l.highlight,u=Zb*(o.depth??.65),c=o.rim??l.rim,f=1-(1-Jb)*c,g=o.spread??l.spread,m=(o.light??l.light)*Math.PI/180,x=Math.sin(m),v=-Math.cos(m),b=ox(o.color,h,d),y=Math.cos(a.yaw),$=Math.sin(a.yaw),p=Math.cos(a.pitch),M=Math.sin(a.pitch),w=y*p,z=oe=>Math.abs(oe)<.22?oe<0?-.22:.22:oe,k=z(y),F=z(p),S=Math.cos(a.roll),_=Math.sin(a.roll),A=a.sx*n,C=a.sy*n,R=50*(1-a.sy)*n,O=Sn(i,[S*A,_*A,-_*C,S*C,r/2+a.x*n-_*R,r/2+_i*t+a.y*n+S*R]);e.save(),e.setTransform(O[0],O[1],O[2],O[3],O[4],O[5]),e.lineCap="round",e.lineJoin="round";const E=o.shading,I=(oe,ue,te,Xe=!0)=>{let qe=b.near,ge=b.base;if(E==="crisp"){if(!b.grad||b.grad.lx!==x||b.grad.ly!==v){const nt=e.createLinearGradient(x*56,v*56,-x*56,-v*56);nt.addColorStop(0,b.light),nt.addColorStop(.45,b.near),nt.addColorStop(1,b.dark);const At=e.createLinearGradient(x*46,v*46,-x*46,-v*46);At.addColorStop(0,b.capTop),At.addColorStop(1,b.capBottom),b.grad={lx:x,ly:v,lit:nt,cap:At}}qe=b.grad.lit,ge=b.grad.cap}let he=!1;(E==="plastic"||E==="fabric")&&(he=Pb(e,{...o,path:oe,typeKey:ue,shading:Xe?E:"plastic"},{cy:k,sy:$,cp:F,sp:M,facing:w,roll:a.roll,halfDepth:te,lx:x,ly:v,...lx(o.backLight),dev:t*s,ctm:O,still:o.still,round:o.roundness??1},b,null,{shadow:h,highlight:d,spread:g,rim:c,vivid:o.vivid??0,front:Math.min(85,Math.max(0,o.lightFront??32))*Math.PI/180,shine:o.shine??0,sheen:o.sheen??0,backSoft:o.backSoftness??1}));const be=(E==="plastic"||E==="fabric")&&!he?"smooth":E,ze=be==="smooth",Qe=ze&&typeof Path2D=="function"?new Path2D:null,ie=w>=0?1:-1,[_e,ve,Ne,He,Ue,Ot]=O;let Rt=null,Wt=1,ta=0,$t=0,aa=1,Ut=0,la=0;for(let nt=0;nt<Xr&&!he;nt++){const At=-1+2*(ie>0?nt:Xr-1-nt)/(Xr-1),re=ch(At,f),we=nt/(Xr-1),Be=k*re,ee=$*M*re,pe=F*re,Me=At*$*te-50*Be,me=-At*k*M*te-50*ee-50*pe,ye=Wt*aa-ta*$t,Re=aa/ye,at=-ta/ye,Ve=-$t/ye,$e=Wt/ye,_t=($t*la-aa*Ut)/ye,dt=(ta*Ut-Wt*la)/ye;e.transform(Re*Be+Ve*ee,at*Be+$e*ee,Ve*pe,$e*pe,Re*Me+Ve*me+_t,at*Me+$e*me+dt),Wt=Be,ta=ee,$t=0,aa=pe,Ut=Me,la=me;let Ce;ze?Ce=b.smoothMix[nt]:nt===Xr-1?Ce=ge:we>.6?Ce=qe:Ce=b.crispMix[nt],Ce!==Rt&&(e.fillStyle=Rt=Ce),e.fill(oe),Qe&&Qe.addPath(oe,{a:Be,b:ee,c:0,d:pe,e:Me,f:me})}if(he||e.setTransform(_e,ve,Ne,He,Ue,Ot),Qe&&be==="smooth"){e.save(),e.clip(Qe);const nt=Math.min(1,.34*h),At=e.createRadialGradient(-x*45,-v*45,4*g,-x*45,-v*45,84*g);At.addColorStop(0,`rgba(0,0,0,${nt})`),At.addColorStop(.5,`rgba(0,0,0,${nt*.35})`),At.addColorStop(1,"rgba(0,0,0,0)"),e.globalCompositeOperation="multiply",e.fillStyle=At,e.fillRect(-120,-120,240,240),e.globalCompositeOperation="source-over";const re=Math.min(1,.22*d),we=e.createRadialGradient(x*37,v*37,0,x*37,v*37,62*g);we.addColorStop(0,`rgba(255,255,255,${re})`),we.addColorStop(.6,`rgba(255,255,255,${re*.23})`),we.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=we,e.fillRect(-120,-120,240,240),e.restore()}return he};dh(e,a,o.color,x,v,!1,o.whirl);const P=o.wear,T=!!P&&(P.hat!=="none"||P.glasses!=="none"||P.headphones||P.bowTie),Y={cy:k,sy:$,cp:F,sp:M,facing:w,lx:x,ly:v};T&&Kb(e,o.path,Y,P);const q=o.typeKey??"custom",j=o.parts?Array.isArray(o.parts)?o.parts:[o.parts]:[];for(let oe=0;oe<j.length;oe++)I(j[oe],Array.isArray(o.parts)?`${q}:parts${oe}/${j.length}`:`${q}:parts`,u*(o.partsDepth??.4),!1);const X=I(o.path,q,u),K=w>=0?1:-1,Q=o.roundness??1,W=X,N=W?1:ch(K,f),ae=(oe,ue)=>W?Hg(q,u,oe,ue,Q)??.8*u:u*N,G=W?.55*ae(o.faceX,o.faceY):u,J=k*N,V=$*M*N,U=F*N,fe=K*$*G-50*J,H=-K*k*M*G-50*V-50*U;let de=null;if(T&&typeof Path2D=="function"&&(de=new Path2D,de.addPath(o.path,{a:J,b:V,c:0,d:U,e:fe,f:H})),w>-.2){e.save();{const[Xe,qe,ge,he,be,ze]=O;e.setTransform(Xe*J+ge*V,qe*J+he*V,ge*U,he*U,Xe*fe+ge*H+be,qe*fe+he*H+ze),e.clip(o.path),e.setTransform(Xe,qe,ge,he,be,ze)}e.translate(o.faceX-50,o.faceY-50),e.scale(o.faceScale,o.faceScale),E==="plastic"&&X&&(e.globalAlpha=.93);const oe=ux(e,a,o);e.globalAlpha=1;const ue=P&&P.glasses!=="none"?P.glasses:null,te={yaw:a.yaw,pitch:a.pitch};ue&&lh(e,ue,oe,{lx:x,ly:v},"shadow",te),e.restore(),ue&&(e.save(),e.translate(o.faceX-50,o.faceY-50),e.scale(o.faceScale,o.faceScale),lh(e,ue,oe,{lx:x,ly:v},"frame",te),e.restore())}T&&Qb(e,o.path,Y,P,de,ae,{y:o.faceY,scale:o.faceScale}),dh(e,a,o.color,x,v,!0,o.whirl),e.restore()}const Fn=30;function mh(e,t,a,o){const r=Math.asin(Math.max(-1,Math.min(1,e/Fn)))+a,n=Math.asin(Math.max(-1,Math.min(1,-t/Fn)))+o,s=Math.cos(n);return{x:Fn*Math.sin(r)*s,y:-Fn*Math.sin(n),sx:Math.cos(r),sy:s,z:Math.cos(r)*s}}const gh=8,di=new Map;function cx(e,t,a){const o=Math.round(e*50),r=Math.round(t*50),n=Math.round(a*50),s=o+2e3*r+4e6*n;let i=di.get(s);if(!i){const l=o/50,h=r/50,d=n/50;let u=`M${-l} ${h}`;for(let c=1;c<=gh;c++){const f=c/gh,g=1-f;u+=` L${(g*g*-l+f*f*l).toFixed(3)} ${((g*g+f*f)*h+2*g*f*d).toFixed(3)}`}i=new Path2D(u),di.size>256&&di.clear(),di.set(s,i)}return i}const bh=Math.sin(.684),xh=Math.cos(.684),pi=new Map;function hx(e){const t=z=>Math.round(z*50)/50,a=t(e.hw),o=t(e.t0),r=t(e.a),n=t(e.yt),s=t(e.ab),i=t(e.yb),l=`${a},${o},${r},${n},${s},${i}`;let h=pi.get(l);if(h)return h;const d=z=>z.toFixed(3),u=o*bh,c=o*xh,f=-a+u,g=-c,m=a-u,x=-c,v=-a-u,b=c,y=a+u,$=c,p=4/3*o*xh,M=4/3*o*bh,w=`M${d(f)} ${d(g)}C${d(-a+r*a)} ${d(n-o)} ${d(a-r*a)} ${d(n-o)} ${d(m)} ${d(x)}C${d(m+p)} ${d(x-M)} ${d(y+p)} ${d($-M)} ${d(y)} ${d($)}C${d(a-s*a)} ${d(i+o)} ${d(-a+s*a)} ${d(i+o)} ${d(v)} ${d(b)}C${d(v-p)} ${d(b-M)} ${d(f-p)} ${d(g-M)} ${d(f)} ${d(g)}Z`;return h=new Path2D(w),pi.size>256&&pi.clear(),pi.set(l,h),h}function ux(e,t,a){const[o,r,n]=t.w,s=a.ink,i=ax[a.face],l=ex/2,h=t.lookX,d=t.lookY,{yaw:u,pitch:c}=t,f=(k,F,S,_=1)=>{const A=mh(k,F,u,c);A.z<=.02||_<=.01||(e.save(),e.globalAlpha=_*Math.min(1,A.z*5),e.translate(A.x,A.y),e.scale(Math.max(.02,A.sx),Math.max(.02,A.sy)),S(),e.restore())},g=(k,F)=>Math.abs(k)<=F?0:Math.sign(k)*(Math.abs(k)-F)/(1-F),m=k=>Math.max(-1,Math.min(1,k)),x=g(m(-t.pitch/.26-t.lookY/7),.34),v=Math.abs(g(m(t.lookX/4.5),.4)),b=Math.max(.3,1+.55*x-.1*v),y=1-.05*x+.12*v,$=o+r*(1-t.laugh),p=r*t.laugh,M=Math.max(0,-t.y)/26,w=.5+.5*t.breath;for(const k of[-1,1]){const F=k<0?t.blinkL:t.blinkR,S=Math.max(0,Math.min(1,t.eyeOpen*(1-F))),_=$*S,A=$*(1-S),C=p,R=n,O=_*.01+A*5.4+C*6.2+R*6,E=_*1.1*b+A*.6+C*(2.2-M*1.5)+R*(-1.4+w),I=_*-3.3*b+A*.6+C*(-11.4-4*M)+R*(5.4+2*w),P=_*tx*2*y+A*2.8+C*4.4+R*4,T=h*(_+.5*(A+C)),Y=d*(_+.5*A);f(k*l+T,i+Y,()=>{e.strokeStyle=s,e.lineWidth=P,e.stroke(cx(O,E,I))})}if(a.face==="mouth"){const k=h*.35,F=(.6+.4*o)*(1+.06*t.breath),S=(.6+.4*r)*(1+.25*Math.max(0,-t.y)/26),_=2.7*n*(1+.25*t.breath),A=(R,O,E)=>o*R+r*O+n*E,C={hw:A(6.5*F,9.5*S,_),t0:A(1.9,0,0),a:A(2/3,2/3,0),yt:A(3.53*F,1.6*S,-4*_/3),ab:A(2/3,0,0),yb:A(3.53*F,17.3*S,4*_/3)};f(k,A(12.5,11.6,15.5),()=>{e.fillStyle=s,e.fill(hx(C))})}const z=k=>{const F=mh(k,i,u,c);return{x:F.x,y:F.y,sx:F.sx,sy:F.sy,z:F.z,ox:k,oy:i,fz:Math.sqrt(Math.max(0,Fn*Fn-k*k-i*i))}};return[z(-l),z(l)]}const No={x:NaN,y:NaN},Tn=new Set;let Io=0,Ri=0;function Sf(e){Io=0;const t=Ri?Math.min(.1,(e-Ri)/1e3):0;Ri=e,Tn.forEach(a=>a(t)),Tn.size&&(Io=requestAnimationFrame(Sf))}function zf(){Io||typeof document>"u"||document.hidden||(Ri=0,Io=requestAnimationFrame(Sf))}let vh=!1;function fx(){vh||typeof document>"u"||(vh=!0,document.addEventListener("pointermove",e=>{No.x=e.clientX,No.y=e.clientY},{passive:!0}),document.addEventListener("pointerleave",()=>{No.x=NaN,No.y=NaN}),window.addEventListener("blur",()=>{No.x=NaN,No.y=NaN}),document.addEventListener("visibilitychange",()=>{document.hidden?(Io&&cancelAnimationFrame(Io),Io=0):Tn.size&&zf()}))}function dx(e){return fx(),Tn.add(e),zf(),()=>{Tn.delete(e),!Tn.size&&Io&&(cancelAnimationFrame(Io),Io=0)}}function Mh(e){let t=2166136261;for(let a=0;a<e.length;a++)t=Math.imul(t^e.charCodeAt(a),16777619);return(t>>>0)%1e3/1e3}const Oa=(e,t,a)=>Math.min(a,Math.max(t,Number.isFinite(e)?e:1)),yh=new Map;function px(e){let t=yh.get(e);return t||(t=new Path2D(e),yh.set(e,t)),t}const wh=new Map;function mx(e){let t=wh.get(e);return t||(t=e.split(/(?=M)/).filter(a=>a.trim()).map(a=>new Path2D(a)),wh.set(e,t)),t}const $h=4e3,ws=new Map;function mi(){if(Ci())return;for(const t of ws.values())if(!t.ready())return;const e=[...ws.values()];ws.clear();for(const t of e)t.show()}const X0=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,N0=L.forwardRef(function({type:e="clover",path:t,face:a,state:o="default",size:r=64,color:n,ink:s,brightness:i,saturation:l,speed:h=1,paused:d=!1,seed:u,shading:c="fabric",hat:f="none",glasses:g="none",headphones:m=!1,bowTie:x=!1,accessoryColor:v="#27272b",shadow:b,highlight:y,depth:$=.65,roundness:p=1,furLength:M=1,furDensity:w=1.6,furFuzz:z=.9,furClumps:k=.4,furCurl:F=.7,furGravity:S=.9,light:_,rim:A,spread:C,backLight:R,lightFront:O,shine:E,sheen:I,backSoftness:P,pose:T,interactive:Y=!0,turn:q=1,theme:j="auto",whirl:X=0,whirlSize:K=1,whirlWidth:Q=1,whirlLength:W=1,whirlTilt:N=1,jumpHeight:ae=26,jumpTime:G=.68,jumpStretch:J=1,jumpSpin:V=1,jumpLean:U=6,jumpEvery:fe=8,jumpLand:H=0,jumpSquash:de=1.15,jumpSquashTime:oe=.37,jumpSquashEase:ue="pulse",jumpGroundTime:te=.11,jumpGroundEase:Xe="pulse",jumpRiseTime:qe=.33,jumpRiseEase:ge="pulse",jumpClickSquashTime:he=.24,className:be,style:ze,"aria-label":Qe,...ie},_e){const ve=L.useRef(null);L.useImperativeHandle(_e,()=>ve.current);const Ne=L.useId(),He=Li[e]??Li.clover,Ue=a??He.face,Ot=n??He.color,Rt=i??He.brightness??1,Wt=l??He.saturation??1.5,ta=Oa(Wt,1.5,2.5)-1.5,$t=Mg(Rt===1&&Wt===1?Ot:Pt(Ot,(Math.min(2,Math.max(0,Rt))-1)*.35,(Math.min(1.5,Math.max(0,Wt))-1)*.5),ta),aa=s??dg($t),Ut=Math.min(1,Math.max(0,u??Mh(Ne))),la=o in m1?o:"default",nt=d||!(h>0),At=c===!0?"crisp":c===!1?"flat":c,re=typeof t=="string"&&t.trim()?t.trim():null,we=re?`path:${Mh(re)}:${re.length}`:e,Be=kf[At==="fabric"?"fabric":"other"],ee=(je,it,yt)=>Math.round(Oa(je,it,yt)*20)/20,pe={length:ee(M,.3,2.5),density:ee(w,.3,2),fuzz:ee(z,0,1),clumps:ee(k,0,1),curl:ee(F,0,1),gravity:ee(S,0,1)},Me=`${pe.length},${pe.density},${pe.fuzz},${pe.clumps},${pe.curl},${pe.gravity}`,me=L.useRef(null),ye=L.useRef(null),Re=L.useRef(0),at=L.useRef(h);at.current=h;const Ve=L.useRef(Y);Ve.current=Y&&!T;const $e=L.useRef(T);$e.current=T,ye.current={path:typeof Path2D>"u"?null:px(re??g1[e]??g1.clover),face:Ue,faceX:He.faceX,faceY:He.faceY,faceScale:He.faceScale,color:$t,ink:aa,shading:At,shadow:Oa(b??Be.shadow,0,2),highlight:Oa(y??Be.highlight,0,2),depth:Oa($,.2,2),roundness:Oa(p,0,1),fur:pe,vivid:ta,backLight:R,lightFront:O,shine:E,sheen:I,backSoftness:P,light:_??Be.light,rim:Oa(A??Be.rim,0,2),spread:Oa(C??Be.spread,.4,2.5),typeKey:we,still:nt||X0(),furOnIdle:!0,whirl:{strength:Oa(X,0,2),size:Oa(K,.6,1.6),width:Oa(Q,.4,2),length:Oa(W,.4,1.6),tilt:Oa(N,.5,1.8)},parts:typeof Path2D<"u"&&!re&&b1[e]?mx(b1[e]):void 0,wear:{hat:f,glasses:g,headphones:m,bowTie:x,color:v,fabric:At==="fabric"}};const _t=je=>{if(j!=="auto")return j;const it=je?.closest("[data-theme], .dark, .light");if(it){const yt=it.getAttribute("data-theme");if(yt==="dark"||yt==="light")return yt;if(it.classList.contains("dark"))return"dark";if(it.classList.contains("light"))return"light"}return typeof matchMedia=="function"&&matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"},dt=()=>{const je=ve.current,it=ye.current;if(!je||!it||!it.path)return;const yt=je.clientWidth/Bo||Re.current||(typeof r=="number"?r:64);if(!yt)return;const Et=Math.min(2,typeof devicePixelRatio=="number"&&devicePixelRatio||1),oa=Math.round(yt*Bo*Et);(je.width!==oa||je.height!==oa)&&(je.width=oa,je.height=oa),Re.current=yt;const xa=je.getContext("2d");if(!xa)return;xa.setTransform(Et,0,0,Et,0,0),it.dpr=Et;const ea=$e.current,da=C1(la),Bt=ea?{...da,yaw:ea.yaw??0,pitch:ea.pitch??da.pitch,roll:ea.roll??da.roll}:me.current?me.current.pose:da;ph(xa,yt,Bt,it)},Ce=L.useRef(null),ht=L.useRef(null),vt=()=>{ht.current&&ht.current(),ht.current=null},zt=je=>{ni(),je(),ni()?ht.current||(ht.current=_0(()=>{const it=Ce.current;ve.current&&it?zt(it):vt()})):vt()};L.useEffect(()=>vt,[]);const Ht=At==="plastic"||At==="fabric",[It,st]=L.useState(!Ht),Ze=L.useRef(It);Ze.current=It;const et=L.useRef(null),kt=L.useRef(null),_a=()=>{kt.current&&kt.current(),kt.current=null},ao=L.useRef({}),ja=L.useRef(!1),qa=je=>{if(et.current=je,ni(),je(),ja.current=!ni(),ja.current&&!Ci()){mi();return}kt.current||(kt.current=_0(()=>{const it=et.current;ve.current&&it&&!Ze.current?qa(it):_a(),mi()}))};L.useEffect(()=>{if(It)return;ws.set(ao.current,{ready:()=>ja.current,show:()=>st(!0)}),mi(),ri(!0);const je=setTimeout(()=>st(!0),$h);return()=>{ri(!1),clearTimeout(je),_a(),ws.delete(ao.current),mi()}},[It]);const Ga=()=>{var je;if(!Ht||!((je=ye.current)!=null&&je.path))return;const it=ye.current.path,yt=(typeof r=="number"?r:64)*Math.min(2,typeof devicePixelRatio=="number"&&devicePixelRatio||1),Et=ye.current.light??295,oa=Et*Math.PI/180,xa=(R??0)*Math.PI/180,ea=Es(Math.sin(oa),-Math.cos(oa));R!==void 0&&([ea.bx,ea.by]=[Math.sin(xa),-Math.cos(xa)]),O!==void 0&&(ea.front=Math.min(85,Math.max(0,O))*Math.PI/180),Eg(we,it,yt,$,At==="fabric",pe,Et,ea)},[,Je]=L.useState(0),Ua=`${At}|${we}|${r}`,Ra=L.useRef(null),Fa=L.useRef(null),go=()=>{if(Ga(),!Ci())return;ri(!0);const je=()=>{Fa.current&&(Fa.current(),Je(Et=>Et+1))},it=_0(()=>{Ci()||je()}),yt=setTimeout(je,$h);Fa.current=()=>{it(),clearTimeout(yt),ri(!1),Fa.current=null}};L.useEffect(()=>()=>{var je;return(je=Fa.current)==null?void 0:je.call(Fa)},[]),L.useLayoutEffect(()=>{if(me.current?me.current.setState(la):me.current=new Cg(Ut,la),me.current.setTurn(Oa(q,0,2)),Ze.current&&Ht&&Ra.current!==null&&Ra.current!==Ua&&!Fa.current&&go(),Ra.current=Ua,me.current.setJump({height:ae,time:Math.max(.2,G),stretch:J,spin:Math.max(0,Math.round(V)),lean:U,every:fe,land:H,squash:de,squashTime:Math.max(.05,oe),squashEase:ue,groundTime:Math.max(0,te),groundEase:Xe,riseTime:Math.max(.05,qe),riseEase:ge,clickSquashTime:Math.max(.05,he)}),!Fa.current){if(X0()){const je=()=>{const it=ve.current;if(!it||!ye.current||!ye.current.path)return;const yt=it.clientWidth/Bo||Re.current||(typeof r=="number"?r:64);if(!yt)return;Re.current=yt;const Et=Math.min(2,typeof devicePixelRatio=="number"&&devicePixelRatio||1);it.width=it.height=Math.round(yt*Bo*Et);const oa=it.getContext("2d");oa&&(ye.current.theme=_t(it),ye.current.dpr=Et,oa.setTransform(Et,0,0,Et,0,0),ph(oa,yt,C1(la),ye.current))};Ce.current=je,Ze.current?zt(je):qa(je);return}ye.current&&ve.current&&(ye.current.theme=_t(ve.current)),Ze.current?nt?(Ce.current=dt,zt(dt)):(Ce.current=null,vt(),dt()):(Ce.current=nt?dt:null,qa(dt))}}),L.useEffect(()=>{var je;if(!Ht||!((je=ye.current)!=null&&je.path))return;const it=(typeof requestIdleCallback=="function"?requestIdleCallback:yt=>setTimeout(yt,1))(Ga);return()=>{typeof cancelIdleCallback=="function"?cancelIdleCallback(it):clearTimeout(it)}},[At,we,r,$,Me,_,R,O]),L.useEffect(()=>{if(nt||X0())return;const je=ve.current;if(!je)return;let it=!0,yt=null;const Et=3,oa=Bt=>{const Pa=me.current;if(Pa){if(Ve.current&&!Number.isNaN(No.x)){const ga=je.getBoundingClientRect(),ro=ga.width/Bo||1,xo=(No.x-(ga.left+ga.width/2))/ro,Wa=(No.y-(ga.top+ga.height/2+_i*ro))/ro,Ta=Math.hypot(xo,Wa),vo=Ta<1?1:Ta>Et?0:1-(Ta-1)/(Et-1);Pa.setPointer(xo/Math.max(1,Ta),Wa/Math.max(1,Ta),vo)}else Pa.setPointer(0,0,0);Pa.update(Bt*at.current),Ze.current&&!Fa.current&&dt()}},xa=()=>{yt||(yt=dx(oa))},ea=()=>{yt&&yt(),yt=null};let da=null;return typeof IntersectionObserver=="function"?(da=new IntersectionObserver(Bt=>{var Pa;it=((Pa=Bt[0])==null?void 0:Pa.isIntersecting)??!0,it?xa():ea()}),da.observe(je)):xa(),()=>{ea(),da&&da.disconnect()}},[nt]);const Vo=typeof r=="number"?`${r*Bo}px`:`calc(${r} * ${Bo})`,oo=je=>typeof r=="number"?`${-r*je}px`:`calc(${r} * ${-je})`,bo=(Bo-1)/2,Gn={display:"inline-block",verticalAlign:"middle",width:Vo,height:Vo,marginLeft:oo(bo),marginRight:oo(bo),marginTop:oo(bo+_i),marginBottom:oo(bo-_i),flex:"none",opacity:It?1:0,transition:"opacity 0.3s ease-out",...ze},wr=je=>{var it,yt;Y&&!nt&&!T&&((it=me.current)==null||it.poke()),(yt=ie.onClick)==null||yt.call(ie,je)};return D.jsx("canvas",{ref:ve,className:be?`ba ${be}`:"ba","data-bot-avatar":e,"data-face":Ue,"data-state":la,role:"img","aria-label":Qe??`${He.label} bot, ${m1[la]}`,style:Gn,...ie,onClick:wr})}),gx={name:"pixels-mechanic",modes:{dark:{theme:"dark",effectIndex:11,colors:["#949494","#2d2d2d","#333333","#3a3a3a","#0b0b0b","#060606","#2f2f2f"],alphas:[1,1,1,1,1,1,1],cardBg:"#0f0f0f",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.44,edgeFade:24,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:0,speed:.7,intensity:1,scale:1.4,softness:.76,distortion:.3,flicker:.5,complexity:.2,shape:.52,blur:1,highlight:.32,vignette:.26,vigOpacity:1,shaderOpacity:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"shaderColor4",softness:.5,blur:0,pixDuration:2.65,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Nebula"},light:{theme:"light",effectIndex:11,colors:["#e0e0e0","#fdfdfd","#f2f2f2","#0a0a0a","#dcdcdc","#f5f5f5","#f5f5f5"],alphas:[1,1,1,1,1,1,1],cardBg:"#f5f5f5",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.18,edgeFade:20,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:25,speed:.55,intensity:.85,scale:.9,softness:.76,distortion:.3,flicker:.5,complexity:.2,shape:.52,blur:1,highlight:.92,vignette:0,vigOpacity:0,shaderOpacity:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"shaderColor3",softness:.5,blur:0,pixDuration:2.6,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Nebula"}}},bx={name:"pixels-organic",modes:{dark:{theme:"dark",effectIndex:22,colors:["#0f0f0f","#4a4949","#b9b9b9","#0f0f0f","#d8d8d8","#0f0f0f","#2f2f2f"],alphas:[1,1,1,1,1,1,1],cardBg:"#0f0f0f",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.44,edgeFade:24,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:0,speed:.3,intensity:1,scale:1,softness:.76,distortion:.3,complexity:.2,shape:.52,blur:1,highlight:.2,vignette:.26,vigOpacity:1,shaderOpacity:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"shaderColor4",softness:.5,blur:0,pixDuration:2.65,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Chromium Flow"},light:{theme:"light",effectIndex:22,colors:["#e3e3e3","#ffffff","#f5f5f5","#f5f5f5","#080808","#f5f5f5","#f5f5f5"],alphas:[1,1,1,1,1,1,1],cardBg:"#f5f5f5",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.18,edgeFade:20,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:25,speed:.3,intensity:.85,scale:1,softness:.76,distortion:.3,complexity:.2,shape:.52,blur:1,highlight:.7,vignette:0,vigOpacity:0,shaderOpacity:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"shaderColor4",softness:.5,blur:0,pixDuration:2.55,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Chromium Flow"}}},xx={name:"sweep-gradient",modes:{dark:{theme:"dark",effectIndex:25,colors:["#0f0f0f","#0f0f0f","#282828","#3a3a3a","#525252","#0f0f0f","#0f0f0f"],alphas:[1,1,1,1,1,1,1],cardBg:"#0f0f0f",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.44,edgeFade:24,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:0,speed:2.65,intensity:1,scale:1,softness:.76,distortion:.3,flicker:.5,complexity:.2,shape:.52,blur:1,highlight:.32,vignette:.26,vigOpacity:1,shaderOpacity:1,sweepEase:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"gradientSweep",softness:.5,blur:0,pixDuration:2.65,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Gradient Sweep"},light:{theme:"light",effectIndex:25,colors:["#f5f5f5","#f5f5f5","#ededed","#eaeaea","#d2d2d2","#f5f5f5","#f5f5f5"],alphas:[1,1,1,1,1,1,1],cardBg:"#f5f5f5",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.18,edgeFade:20,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:0,speed:2.65,intensity:.85,scale:1,softness:.76,distortion:.3,flicker:.5,complexity:.2,shape:.52,blur:1,highlight:.92,vignette:0,vigOpacity:0,shaderOpacity:1,sweepEase:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"gradientSweep",softness:.5,blur:0,pixDuration:2.6,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Gradient Sweep"}}},vx={"pixels-organic":bx,"pixels-mechanic":gx,"sweep-gradient":xx},j0=vx;let is;function Mx(){if(is!==void 0)return is;if(typeof document>"u")return is=null,null;const e=document.createElement("canvas");return e.width=1,e.height=1,is=e.getContext("2d"),is}function en(e){if(typeof e!="string"||e.length===0)return[0,0,0];if(e[0]==="#"){let s=e.slice(1);if(s.length===3&&(s=s[0]+s[0]+s[1]+s[1]+s[2]+s[2]),(s.length===6||s.length===8)&&/^[0-9a-fA-F]+$/.test(s))return[parseInt(s.slice(0,2),16)/255,parseInt(s.slice(2,4),16)/255,parseInt(s.slice(4,6),16)/255]}const t=Mx();if(!t)return[0,0,0];t.fillStyle="#000000",t.fillStyle=e;const a=t.fillStyle;t.fillStyle="#ffffff",t.fillStyle=e;const o=t.fillStyle;if(a!==o)return[0,0,0];const r=a;if(r[0]==="#")return[parseInt(r.slice(1,3),16)/255,parseInt(r.slice(3,5),16)/255,parseInt(r.slice(5,7),16)/255];const n=r.match(/^rgba?\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)/);if(n){const s=i=>Math.max(0,Math.min(255,i))/255;return[s(parseFloat(n[1])),s(parseFloat(n[2])),s(parseFloat(n[3]))]}return[0,0,0]}const yx=`
  void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,wx=`
  uniform vec2 u_resolution;
  uniform float u_dpr;
  uniform float u_time;
  uniform vec3 u_color1, u_color2, u_color3, u_color4, u_color5, u_color6, u_color7, u_cardBg;
  uniform float u_alpha1, u_alpha2, u_alpha3, u_alpha4, u_alpha5, u_alpha6, u_alpha7;
  uniform float u_speed, u_intensity, u_scale, u_direction;
  uniform float u_softness, u_distortion, u_complexity, u_shape, u_flicker;
  uniform float u_vignette, u_vigOpacity, u_blur, u_highlight, u_shaderOpacity;
  uniform float u_cellSize, u_gap, u_dotSize, u_dotSoftness, u_dotOpacity, u_hlScale, u_fillOpacity, u_edgeFade, u_fadeStr;
  uniform float u_dotMode;
  uniform int u_effect;
  uniform int u_sweepEase;

  // Reference card edge length (CSS px) at which the original preset cellSize
  // gives the canonical cell count. Cell PIXEL size stays constant across card
  // sizes by scaling gridSize proportionally to (currentCssDim / REF_DIM).
  const float REF_DIM = 320.0;

  /** Anisotropic cell count: returns the number of cells along x and y so that
   *  each cell stays SQUARE in screen space regardless of the card's aspect
   *  ratio. A 600×300 card gets twice as many cells horizontally as vertically;
   *  cells stay the same physical size as on a 300×300 card. */
  vec2 gridCounts(float baseCount) {
    vec2 cssRes = u_resolution / max(u_dpr, 0.0001);
    return max(vec2(2.0), floor(baseCount * cssRes / REF_DIM));
  }

  vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec2 mod289v2(vec2 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289((x * 34.0 + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289v2(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m * m; m = m * m;
    vec3 x_ = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x_) - 0.5;
    vec3 ox = floor(x_ + 0.5);
    vec3 a0 = x_ - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p, float oct) {
    float val = 0.0, amp = 0.5;
    int n = int(oct);
    for (int i = 0; i < 4; i++) {
      if (i >= n) break;
      val += amp * snoise(p);
      p *= 2.0;
      amp *= 0.5;
    }
    return val;
  }

  float nfbm(vec2 p) { return fbm(p, 2.0 + u_complexity * 2.0); }

  vec3 palette(float t) {
    t = clamp(t, 0.0, 1.0);
    t = t * t * (3.0 - 2.0 * t);
    float k = 64.0;
    float w1 = u_alpha1 * exp(-k * t * t);
    float w2 = u_alpha2 * exp(-k * (t - 0.25) * (t - 0.25));
    float w3 = u_alpha3 * exp(-k * (t - 0.5)  * (t - 0.5));
    float w4 = u_alpha4 * exp(-k * (t - 0.75) * (t - 0.75));
    float w5 = u_alpha5 * exp(-k * (t - 1.0)  * (t - 1.0));
    float total = w1 + w2 + w3 + w4 + w5 + 0.0001;
    return (u_color1*w1 + u_color2*w2 + u_color3*w3 + u_color4*w4 + u_color5*w5) / total;
  }

  vec3 softBlend(float a, float b, float c) {
    a = clamp(a, 0.0, 1.0); a *= a;
    b = clamp(b, 0.0, 1.0); b *= b;
    c = clamp(c, 0.0, 1.0); c *= c;
    float d = clamp(a * 0.7 + c * 0.3, 0.0, 1.0); d *= d;
    float e = clamp(b * 0.5 + c * 0.5, 0.0, 1.0); e *= e;
    a *= u_alpha1; b *= u_alpha2; c *= u_alpha3; d *= u_alpha4; e *= u_alpha5;
    float total = a + b + c + d + e;
    float floorW = max(0.001 - total, 0.0);
    vec3 fallback = (u_color1 + u_color2 + u_color3 + u_color4 + u_color5) * 0.2;
    return (u_color1 * a + u_color2 * b + u_color3 * c + u_color4 * d + u_color5 * e + fallback * floorW) / (total + floorW);
  }

  vec2 warp(vec2 p, float t) {
    float str = u_distortion * 2.0;
    return vec2(
      nfbm(p + vec2(t * 0.1, 0.0)),
      nfbm(p + vec2(0.0, t * 0.12) + 5.0)
    ) * str;
  }

  float sweepEase(float x) {
    if (u_sweepEase == 1) return x * x * (3.0 - 2.0 * x);
    if (u_sweepEase == 2) {
      float p = 1.0 - x;
      return 1.0 - p * p * p;
    }
    if (u_sweepEase == 3) {
      return x < 0.5 ? 4.0 * x * x * x : 1.0 - pow(-2.0 * x + 2.0, 3.0) * 0.5;
    }
    if (u_sweepEase == 4) return 1.0 - pow(2.0, -10.0 * x) * (1.0 - x);
    return x;
  }

  float blob(vec2 p, vec2 center, float radius) {
    float r = radius * (0.5 + u_shape * 0.8);
    float soft = 0.05 + u_softness * 0.4;
    return smoothstep(r + soft, r - soft * 0.5, length(p - center));
  }

  vec3 computeEffect(vec2 uv, float aspect, float t, float dist, float soft, float cpx, float shp) {
    vec2 p = (uv - 0.5) * u_scale;
    p.x *= aspect;
    p += vec2(cos(u_direction), sin(u_direction)) * t * 0.15;
    vec3 col = vec3(0.0);

    if (u_effect == 0) {
      float val = sin(p.x * 3.0 + t) * 0.5 + 0.5;
      val += sin(p.y * 2.0 + t * 0.7) * 0.3;
      val += sin((p.x + p.y) * (1.0 + cpx * 3.0) - t * 0.5) * 0.2;
      vec2 w = warp(p, t);
      val += (w.x + w.y) * 0.15;
      col = palette(clamp(val * u_intensity, 0.0, 1.0));

    } else if (u_effect == 1) {
      float freq = 3.0 + cpx * 8.0;
      float val = 0.0;
      val += sin(p.x * freq + t);
      val += sin(p.y * freq + t * 1.3);
      val += sin((p.x + p.y) * freq * 0.7 + t * 0.7);
      val += sin(length(p) * freq * 0.8 - t * 1.5);
      vec2 w = warp(p, t);
      val += (w.x + w.y) * dist;
      val = val * 0.2 * u_intensity + 0.5;
      col = palette(clamp(val, 0.0, 1.0));

    } else if (u_effect == 2) {
      vec2 q = vec2(nfbm(p + t * 0.3), nfbm(p + vec2(5.2, 1.3) + t * 0.2));
      float val = nfbm(p + q * (1.0 + dist * 3.0) + t * 0.1);
      val = val * u_intensity * 0.5 + 0.5;
      col = palette(clamp(val, 0.0, 1.0));

    } else if (u_effect == 3) {
      float d = length(p);
      float val = sin(d * (3.0 + cpx * 6.0) - t * 2.0) * 0.5 + 0.5;
      val *= exp(-d * (0.3 + shp * 1.0));
      val += sin(atan(p.y, p.x) * (1.5 + cpx * 2.0) + t) * 0.15;
      col = palette(clamp(val * u_intensity, 0.0, 1.0));

    } else if (u_effect == 4) {
      vec2 q = vec2(nfbm(p * (0.5 + shp * 0.6) + vec2(t * 0.12, t * 0.08)), nfbm(p * (0.5 + shp * 0.6) + vec2(t * 0.09, -t * 0.11)));
      vec2 r = vec2(nfbm(p + q * (1.0 + dist * 2.0) + vec2(1.7, 9.2) + t * 0.06), nfbm(p + q * (1.0 + dist * 2.0) + vec2(8.3, 2.8) - t * 0.08));
      float val = nfbm(p + r * 2.0);
      float lo = -0.3 - soft * 0.5;
      float hi = 0.5 + soft * 0.5;
      val = smoothstep(lo, hi, val * u_intensity);
      col = palette(val);

    } else if (u_effect == 5) {
      float n1 = nfbm(vec2(p.x * 0.5 + t * 0.15, p.y * (1.0 + cpx * 1.5)));
      float n2 = nfbm(vec2(p.x * 0.3 - t * 0.1, p.y * (0.8 + cpx * 1.0) + 3.0));
      float band = sin(p.y * 3.0 + n1 * (1.0 + dist * 2.0) + t * 0.3) * 0.5 + 0.5;
      float shimmer = sin(p.y * 4.0 + n2 * 1.5 - t * 0.2) * 0.5 + 0.5;
      float w1 = band * (0.5 + 0.5 * sin(p.x * 1.5 + t * 0.2 + n1));
      float w2 = shimmer * (0.5 + 0.5 * cos(p.x * 1.0 - t * 0.15 + n2));
      float w3 = nfbm(p * 0.5 + t * 0.05) * 0.5 + 0.5;
      col = softBlend(w1 * u_intensity, w2 * u_intensity, w3 * 0.6 * u_intensity);

    } else if (u_effect == 6) {
      vec2 wp = warp(p * 1.2, t);
      float blobR = 0.15 + shp * 0.2;
      float b1 = blob(p, vec2(sin(t * 0.3) * 0.3, cos(t * 0.2) * 0.4) + wp * 0.2, blobR);
      float b2 = blob(p, vec2(cos(t * 0.25) * 0.4, sin(t * 0.35) * 0.3 - 0.2) + wp * 0.15, blobR * 1.2);
      float b3 = blob(p, vec2(-sin(t * 0.2) * 0.3, -cos(t * 0.3) * 0.35) + wp * 0.18, blobR);
      float bg = nfbm(p * 0.5 + t * 0.05) * 0.3 + 0.15;
      col = softBlend((b1 + bg * 0.5) * u_intensity, (b2 + bg * 0.3) * u_intensity, (b3 + bg * 0.4) * u_intensity);

    } else if (u_effect == 7) {
      float sz = 0.4 + shp * 0.6;
      float sigma = sz * sz * 2.0;
      vec2 a1 = vec2(-0.45 + sin(t * 0.07) * 0.06, 0.45 + cos(t * 0.09) * 0.05);
      vec2 a2 = vec2(0.45 + cos(t * 0.08) * 0.06, 0.45 + sin(t * 0.06) * 0.05);
      vec2 a3 = vec2(0.0 + sin(t * 0.05) * 0.1, 0.0 + cos(t * 0.07) * 0.1);
      vec2 a4 = vec2(-0.4 + cos(t * 0.06) * 0.07, -0.3 + sin(t * 0.08) * 0.06);
      vec2 a5 = vec2(0.4 + sin(t * 0.07) * 0.06, -0.4 + cos(t * 0.05) * 0.06);
      float g1 = exp(-dot(p - a1, p - a1) / sigma);
      float g2 = exp(-dot(p - a2, p - a2) / sigma);
      float g3 = exp(-dot(p - a3, p - a3) / sigma);
      float g4 = exp(-dot(p - a4, p - a4) / sigma);
      float g5 = exp(-dot(p - a5, p - a5) / sigma);
      float nudge = dist > 0.01 ? snoise(p * (0.5 + cpx) + t * 0.04) * dist * 0.08 : 0.0;
      float w1 = (g1 + g4 + nudge) * u_intensity;
      float w2 = (g2 + g5 + nudge) * u_intensity;
      float w3 = (g3 + nudge) * u_intensity;
      col = softBlend(w1, w2, w3);

    } else if (u_effect == 8) {
      vec2 w1 = vec2(nfbm(p * (0.7 + cpx * 0.5) + t * 0.1), nfbm(p * (0.7 + cpx * 0.5) + vec2(3.3, 7.7) + t * 0.08));
      vec2 w2 = vec2(nfbm(p * 0.6 + w1 * (1.0 + dist) + t * 0.06), nfbm(p * 0.6 + w1 * (1.0 + dist) + vec2(1.7, 4.2) - t * 0.07));
      float f1 = nfbm(p + w2 * 1.5);
      float f2 = nfbm(p + w2 * 1.5 + vec2(4.1, 2.3));
      float f3 = nfbm(p + w2 * 1.5 + vec2(7.5, 6.1));
      col = softBlend((f1 * 0.5 + 0.5) * u_intensity, (f2 * 0.5 + 0.5) * u_intensity, (f3 * 0.5 + 0.5) * u_intensity);

    } else if (u_effect == 9) {
      vec2 sw = vec2(sin(p.y * 2.0 + t * 0.3) * 0.15 + snoise(p * 1.5 + t * 0.15) * dist * 0.3, cos(p.x * 1.8 + t * 0.25) * 0.15 + snoise(p * 1.5 + vec2(5.0, 0.0) + t * 0.12) * dist * 0.3);
      vec2 wp = p + sw;
      float caustic = (snoise(wp * (1.5 + cpx * 2.0) + t * 0.2) * 0.5 + 0.5) + (snoise(wp * (2.0 + cpx * 2.0) - t * 0.15) * 0.5 + 0.5) * 0.5;
      caustic = caustic / 1.5;
      float depth = nfbm(vec2(p.x * 0.3, p.y * 0.8) + t * 0.05) * 0.5 + 0.5;
      col = softBlend(depth * u_intensity, (1.0 - depth) * u_intensity, caustic * u_intensity);

    } else if (u_effect == 10) {
      float angle = 0.6 + shp * 1.2;
      float ca = cos(angle), sa = sin(angle);
      vec2 rp = vec2(p.x * ca - p.y * sa, p.x * sa + p.y * ca);
      float n1 = nfbm(rp * 0.8 + t * 0.12) * (1.0 + dist * 2.0);
      float n2 = nfbm(rp * 0.6 + vec2(3.0, 0.0) + t * 0.1) * (1.0 + dist * 1.5);
      float wave = sin(rp.x * (2.0 + cpx * 2.0) + n1 + t * 0.3);
      float wave2 = sin(rp.x * (1.5 + cpx * 1.5) + n2 - t * 0.2);
      float ribbon1 = exp(-2.0 * (rp.y - wave * 0.35) * (rp.y - wave * 0.35)) * u_intensity;
      float ribbon2 = exp(-2.0 * (rp.y - 0.15 - wave2 * 0.3) * (rp.y - 0.15 - wave2 * 0.3)) * u_intensity;
      float bg = nfbm(p * 0.4 + t * 0.03) * 0.5 + 0.5;
      col = softBlend(ribbon1, ribbon2, bg * 0.5 * u_intensity);

    } else if (u_effect == 11) {
      vec2 q = vec2(nfbm(p * 0.5 + vec2(t * 0.05, 0.0)), nfbm(p * 0.5 + vec2(0.0, t * 0.07)));
      vec2 r = vec2(nfbm(p * 0.6 + q * (1.0 + dist * 1.5) + vec2(1.7, 9.2) + t * 0.03), nfbm(p * 0.6 + q * (1.0 + dist * 1.5) + vec2(8.3, 2.8) + t * 0.04));
      float f = nfbm(p + r * 1.5);
      float f2 = nfbm(p * 0.7 + r + vec2(3.0, 7.0));
      col = softBlend((f * 0.5 + 0.5) * u_intensity, (f2 * 0.5 + 0.5) * u_intensity, (nfbm(p * 0.4 - t * 0.02) * 0.5 + 0.5) * u_intensity);

    } else if (u_effect == 12) {
      vec2 w = warp(p * 0.5, t * 0.7);
      float fold1 = sin(p.x * (1.5 + cpx * 2.0) + w.x * 1.5 + t * 0.2) * 0.5 + 0.5;
      float fold2 = sin(p.y * (1.2 + cpx * 1.5) + w.y * 1.5 - t * 0.15) * 0.5 + 0.5;
      float fold3 = sin((p.x - p.y) * (0.8 + cpx * 0.8) + (w.x + w.y) + t * 0.1) * 0.5 + 0.5;
      col = softBlend(fold1 * u_intensity, fold2 * u_intensity, fold3 * 0.7 * u_intensity);

    } else if (u_effect == 13) {
      float spread = 0.25 + shp * 0.35;
      vec2 w = warp(p, t * 0.5);
      vec2 c1 = vec2(sin(t * 0.08) * spread, cos(t * 0.11) * spread) + w * 0.15;
      vec2 c2 = vec2(cos(t * 0.09) * spread * 1.3, sin(t * 0.07) * spread) + w * 0.12;
      vec2 c3 = vec2(-sin(t * 0.1) * spread, -cos(t * 0.08) * spread * 1.2) + w * 0.1;
      float falloff = 0.3 + soft * 0.7;
      float d1 = 1.0 - smoothstep(0.0, falloff, length(p - c1 + w * dist * 0.3));
      float d2 = 1.0 - smoothstep(0.0, falloff, length(p - c2 + w * dist * 0.25));
      float d3 = 1.0 - smoothstep(0.0, falloff, length(p - c3 + w * dist * 0.2));
      float detail = nfbm(p * 2.0 + t * 0.05) * cpx * 0.3;
      col = softBlend((d1 + detail) * u_intensity, (d2 + detail) * u_intensity, (d3 + detail) * u_intensity);

    } else if (u_effect == 14) {
      vec2 w = warp(p * 0.6, t * 0.6);
      float angle = atan(p.y + w.y * dist, p.x + w.x * dist);
      float radius = length(p);
      float field1 = sin(angle * (2.0 + cpx * 4.0) + radius * (3.0 + cpx * 3.0) + t * 0.4 + nfbm(p + t * 0.1) * dist * 2.0) * 0.5 + 0.5;
      float field2 = sin(angle * (1.5 + cpx * 2.5) - radius * 2.0 - t * 0.3 + nfbm(p * 0.6 + t * 0.08) * dist * 1.5) * 0.5 + 0.5;
      float bg = nfbm(p * 0.3 + t * 0.03) * 0.5 + 0.5;
      col = softBlend(field1 * u_intensity, field2 * u_intensity, bg * 0.5 * u_intensity);

    } else if (u_effect == 15) {
      vec2 drift = vec2(t * 0.06, t * 0.03);
      float c1 = nfbm((p + drift) * (0.4 + cpx * 0.5)) * 0.5 + 0.5;
      float c2 = nfbm((p + drift + vec2(3.7, 1.2)) * (0.35 + cpx * 0.4)) * 0.5 + 0.5;
      float c3 = nfbm((p + drift + vec2(7.1, 4.5)) * (0.3 + cpx * 0.35)) * 0.5 + 0.5;
      vec2 w = warp(p * 0.2, t * 0.4);
      c1 += w.x * dist * 0.3;
      c2 += w.y * dist * 0.25;
      col = softBlend(c1 * u_intensity, c2 * u_intensity, c3 * u_intensity);

    } else if (u_effect == 16) {
      vec2 w = warp(vec2(p.x * 0.3, p.y * 0.6), t * 0.5);
      float c1 = sin(p.x * (1.5 + cpx * 2.0) + w.x * (1.0 + dist * 2.0) + t * 0.15) * 0.5 + 0.5;
      float c2 = sin(p.x * (1.0 + cpx * 1.5) + w.y * (1.0 + dist * 1.5) - t * 0.12 + 2.0) * 0.5 + 0.5;
      float c3 = sin(p.x * (0.8 + cpx * 1.0) + (w.x + w.y) * 0.5 * (1.0 + dist) + t * 0.08 + 4.0) * 0.5 + 0.5;
      float fade = nfbm(vec2(p.x * 0.3, p.y * 0.5) + t * 0.03) * 0.5 + 0.5;
      col = softBlend(c1 * fade * u_intensity, c2 * fade * u_intensity, c3 * (1.0 - fade * 0.4) * u_intensity * 0.7);

    } else if (u_effect == 17) {
      vec2 w = warp(p * 0.8, t * 0.6);
      vec2 w2 = warp(p * 0.5 + w * 0.4, t * 0.4);
      float r1 = (snoise((p + w * dist * 0.5) * (1.5 + cpx * 2.0) + t * 0.1) * 0.5 + 0.5) * u_intensity;
      float r2 = (snoise((p + w2 * dist * 0.4) * (1.2 + cpx * 1.5) + t * 0.08 + 3.0) * 0.5 + 0.5) * u_intensity;
      float r3 = (snoise((p + (w + w2) * dist * 0.3) * (0.8 + cpx * 1.0) - t * 0.06 + 7.0) * 0.5 + 0.5) * u_intensity;
      col = softBlend(r1, r2, r3);

    } else if (u_effect == 18) {
      vec2 w = warp(p * 0.5, t * 0.5);
      float blobSize = 0.2 + shp * 0.3;
      float total1 = 0.0, total2 = 0.0;
      for (int i = 0; i < 5; i++) {
        float fi = float(i);
        vec2 c1 = vec2(sin(t * 0.1 + fi * 2.1) * 0.4, cos(t * 0.13 + fi * 1.7) * 0.35) + w * dist * 0.15;
        vec2 c2 = vec2(cos(t * 0.12 + fi * 1.9) * 0.35, sin(t * 0.09 + fi * 2.3) * 0.4) + w * dist * 0.12;
        total1 += blobSize * blobSize / (dot(p - c1, p - c1) + 0.02);
        total2 += blobSize * blobSize / (dot(p - c2, p - c2) + 0.02);
      }
      total1 = clamp(total1 * 0.25, 0.0, 1.0);
      total2 = clamp(total2 * 0.25, 0.0, 1.0);
      float total3 = nfbm(p + w * dist * 0.3 + t * 0.05) * 0.5 + 0.5;
      col = softBlend(total1 * u_intensity, total2 * u_intensity, total3 * 0.7 * u_intensity);

    } else if (u_effect == 19) {
      vec2 w = warp(p * 0.4, t * 0.4);
      float angle = atan(p.y, p.x);
      float radius = length(p);
      float s1 = sin(angle * (1.5 + cpx * 2.0) + radius * (3.0 + cpx * 3.0) + t * 0.3 + w.x * dist * 1.5) * 0.5 + 0.5;
      float s2 = sin(angle * (1.2 + cpx * 1.5) - radius * (2.5 + cpx * 2.5) - t * 0.25 + w.y * dist * 1.5 + 1.5) * 0.5 + 0.5;
      float s3 = sin((angle + 3.14) * (0.8 + cpx) + radius * (2.0 + cpx * 2.0) + t * 0.15 + (w.x + w.y) * dist) * 0.5 + 0.5;
      float fade = exp(-radius * (0.5 - shp * 0.3));
      col = softBlend(s1 * fade * u_intensity, s2 * fade * u_intensity, s3 * fade * 0.7 * u_intensity);

    } else if (u_effect == 20) {
      vec2 w = warp(p * 0.5, t * 0.4);
      vec2 wp = p + w * (0.4 + dist * 0.6);
      float scale = 0.6 + cpx * 0.8;
      float h  = nfbm(wp * scale + t * 0.08);
      float eps = 0.06;
      float hx = nfbm((wp + vec2(eps, 0.0)) * scale + t * 0.08) - h;
      float hy = nfbm((wp + vec2(0.0, eps)) * scale + t * 0.08) - h;
      vec3 n = normalize(vec3(-hx * 6.0, -hy * 6.0, 1.0));
      vec3 lightDir = normalize(vec3(0.55, 0.65, 0.8));
      float light = max(dot(n, lightDir), 0.0);
      float spec = pow(light, 6.0 + shp * 26.0);
      float diffuse = light * 0.6 + 0.35;
      float fres = pow(1.0 - max(n.z, 0.0), 2.0);
      float w1 = (diffuse + spec * 0.5) * u_intensity;
      float w2 = (h * 0.5 + 0.5 + spec * 0.3 + fres * 0.3) * u_intensity;
      float w3 = (spec * 1.4 + fres * 0.5) * u_intensity;
      col = softBlend(w1, w2, w3);

    } else if (u_effect == 21) {
      vec2 w = warp(p * 0.4, t * 0.3);
      float angle = 0.2 + shp * 1.3;
      float ca = cos(angle), sa = sin(angle);
      vec2 rp = vec2(p.x * ca - p.y * sa, p.x * sa + p.y * ca);
      float band = sin(rp.y * (3.0 + cpx * 5.0) + w.x * (1.0 + dist * 2.5) + t * 0.35);
      float ridge = 1.0 - abs(band);
      ridge = pow(ridge, 5.0 + shp * 10.0);
      float band2 = sin(rp.y * (2.0 + cpx * 3.0) + w.y * (0.8 + dist * 2.0) - t * 0.22 + 1.4);
      float ridge2 = 1.0 - abs(band2);
      ridge2 = pow(ridge2, 3.0 + shp * 8.0);
      float bg = nfbm(p * 0.45 + t * 0.05) * 0.5 + 0.5;
      float w1 = (ridge * 1.4 + bg * 0.25) * u_intensity;
      float w2 = (ridge2 * 1.0 + bg * 0.45) * u_intensity;
      float w3 = (ridge * 0.5 + ridge2 * 0.5) * u_intensity * 0.8;
      col = softBlend(w1, w2, w3);

    } else if (u_effect == 22) {
      vec2 w  = warp(p * 0.7, t * 0.5);
      vec2 w2 = warp(p * 0.4 + w * 0.3, t * 0.3);
      vec2 wp = p + w * (0.4 + dist * 0.6);
      float n1 = snoise(wp * (1.4 + cpx * 1.6) + t * 0.14);
      float n2 = snoise((wp + w2 * dist * 0.4) * (2.0 + cpx * 2.0) + vec2(3.0, 7.0) - t * 0.1);
      float ridge1 = 1.0 - abs(n1);
      ridge1 = pow(ridge1, 5.0 + shp * 12.0);
      float ridge2 = 1.0 - abs(n2);
      ridge2 = pow(ridge2, 4.0 + shp * 10.0);
      float base = (n1 + n2) * 0.25 + 0.5;
      float w1 = (base * 0.6 + ridge1 * 1.2) * u_intensity;
      float w2c = ((1.0 - base) * 0.6 + ridge2 * 1.0) * u_intensity;
      float w3 = (ridge1 * 0.8 + ridge2 * 0.6) * u_intensity;
      col = softBlend(w1, w2c, w3);

    } else if (u_effect == 23) {
      float angle = 0.1 + shp * 1.4;
      float ca = cos(angle), sa = sin(angle);
      vec2 rp = vec2(p.x * ca - p.y * sa, p.x * sa + p.y * ca);
      vec2 stretch = vec2(rp.x * (5.0 + cpx * 4.0), rp.y * (0.35 + cpx * 0.3));
      vec2 sw = warp(stretch * 0.3, t * 0.3) * dist;
      float n1 = snoise(stretch + sw + t * 0.08);
      float n2 = snoise(stretch * 1.4 + vec2(2.0, 5.0) + sw - t * 0.06);
      float streak = 1.0 - abs(n1);
      streak = pow(streak, 6.0 + shp * 12.0);
      float streak2 = 1.0 - abs(n2);
      streak2 = pow(streak2, 4.0 + shp * 8.0);
      float bg = nfbm(p * 0.4 + t * 0.04) * 0.4 + 0.4;
      float w1 = (streak * 1.4 + bg * 0.3) * u_intensity;
      float w2 = (streak2 * 0.9 + bg * 0.5) * u_intensity;
      float w3 = (streak * 0.7 + streak2 * 0.4) * u_intensity * 0.8;
      col = softBlend(w1, w2, w3);

    } else if (u_effect == 24) {
      vec2 w1 = warp(p * 0.55, t * 0.4);
      vec2 w2 = warp(p * 0.7 + w1 * 0.4, t * 0.3);
      vec2 wp = p + (w1 + w2) * (0.4 + dist * 0.7);

      float scale = 0.65 + cpx * 0.7;
      float n1 = nfbm(wp * scale + vec2(0.0, 0.0) + t * 0.10);
      float n2 = nfbm(wp * scale + vec2(3.7, 5.2) - t * 0.07);
      float n3 = nfbm(wp * scale + vec2(7.1, 2.3) + t * 0.06);
      float n4 = nfbm(wp * scale + vec2(1.8, 8.4) - t * 0.08);
      float n5 = nfbm(wp * scale + vec2(4.9, 1.1) + t * 0.05);
      float n6 = nfbm(wp * scale + vec2(6.3, 7.8) - t * 0.09);
      float n7 = nfbm(wp * scale + vec2(2.4, 4.6) + t * 0.04);

      float pw = 2.5 + shp * 5.0;
      n1 = pow(clamp(n1, 0.0, 1.0), pw);
      n2 = pow(clamp(n2, 0.0, 1.0), pw);
      n3 = pow(clamp(n3, 0.0, 1.0), pw);
      n4 = pow(clamp(n4, 0.0, 1.0), pw);
      n5 = pow(clamp(n5, 0.0, 1.0), pw);
      n6 = pow(clamp(n6, 0.0, 1.0), pw);
      n7 = pow(clamp(n7, 0.0, 1.0), pw);

      float intens = 0.5 + u_intensity * 0.9;
      float a1 = n1 * u_alpha1 * intens;
      float a2 = n2 * u_alpha2 * intens;
      float a3 = n3 * u_alpha3 * intens;
      float a4 = n4 * u_alpha4 * intens;
      float a5 = n5 * u_alpha5 * intens;
      float a6 = n6 * u_alpha6 * intens;
      float a7 = n7 * u_alpha7 * intens;
      float total = a1 + a2 + a3 + a4 + a5 + a6 + a7 + 0.001;
      col = (u_color1 * a1 + u_color2 * a2 + u_color3 * a3 + u_color4 * a4
           + u_color5 * a5 + u_color6 * a6 + u_color7 * a7) / total;

    } else if (u_effect == 25) {
      float d = (uv.x + (1.0 - uv.y)) * 0.5;
      float w = 0.9 / max(u_scale, 0.25);
      float cyc = t * 0.08;
      float pA = mix(-w, 1.0 + w, sweepEase(fract(cyc)));
      float pB = mix(-w, 1.0 + w, sweepEase(fract(cyc + 0.5)));
      float band = max(
        clamp(1.0 - abs(d - pA) / w, 0.0, 1.0),
        clamp(1.0 - abs(d - pB) / w, 0.0, 1.0)
      );
      float v = band * u_intensity;

      vec2 ggs = gridCounts(6.0 + u_cellSize * 74.0);
      if (u_dotMode > 1.5) {
        ggs = max(vec2(2.0), floor(ggs * (1.0 - u_gap * 0.8)));
      }
      vec2 cell = floor(uv * ggs);
      float clk = t * 1.6;
      // Wrap the stepped clock to keep sin() arguments small. u_time grows
      // unbounded over a session; on mediump-float GPUs (older Android, some
      // iOS) large hash inputs lose precision and the flicker bands/freezes.
      // mod(x, 1024) keeps the crossfade continuous across the wrap
      // (step 1023 fades into step 0, whose hash is the next s0).
      float step0 = mod(floor(clk), 1024.0);
      float step1 = mod(step0 + 1.0, 1024.0);
      float fz = smoothstep(0.0, 1.0, fract(clk));
      float cellSeed = dot(cell, vec2(127.1, 311.7));
      float r1 = fract(sin(cellSeed + step0 * 17.23) * 43758.5453);
      float r2 = fract(sin(cellSeed + step1 * 17.23) * 43758.5453);
      float rnd = mix(r1, r2, fz);
      v += (rnd - 0.5) * u_flicker * 0.9 * (0.15 + band * 0.85);

      col = palette(clamp(v, 0.0, 1.0));
    }

    return col;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float aspect = u_resolution.x / u_resolution.y;
    float t = u_time * u_speed;
    float dist = u_distortion;
    float soft = u_softness;
    float cpx = u_complexity;
    float shp = u_shape;

    vec2 sampleUV = uv;
    if (u_dotMode > 0.5) {
      vec2 gs = gridCounts(6.0 + u_cellSize * 74.0);
      if (u_dotMode > 1.5) {
        gs = max(vec2(2.0), floor(gs * (1.0 - u_gap * 0.8)));
      }
      sampleUV = (floor(uv * gs) + vec2(0.5)) / gs;
    }

    vec3 col;
    if (u_blur < 0.01) {
      col = computeEffect(sampleUV, aspect, t, dist, soft, cpx, shp);
    } else {
      float r = u_blur * 0.02;
      col  = computeEffect(sampleUV, aspect, t, dist, soft, cpx, shp) * 0.4;
      col += computeEffect(sampleUV + vec2( r,  0.0), aspect, t, dist, soft, cpx, shp) * 0.15;
      col += computeEffect(sampleUV + vec2(-r,  0.0), aspect, t, dist, soft, cpx, shp) * 0.15;
      col += computeEffect(sampleUV + vec2( 0.0,  r), aspect, t, dist, soft, cpx, shp) * 0.15;
      col += computeEffect(sampleUV + vec2( 0.0, -r), aspect, t, dist, soft, cpx, shp) * 0.15;
    }

    vec3 baseCol = col;
    if (u_dotMode < 0.5) {
      col = pow(col, vec3(1.3));
    }

    // CSS-pixel distance to the nearest edge — keeps the vignette / edge-fade
    // bands a consistent physical width on every side of any aspect ratio.
    vec2 cssRes = u_resolution / max(u_dpr, 0.0001);
    vec2 cssCoord = uv * cssRes;
    float edgeDistPx = min(
      min(cssCoord.x, cssRes.x - cssCoord.x),
      min(cssCoord.y, cssRes.y - cssCoord.y)
    );
    float vigRangePx = 40.0 * (1.0 + u_vignette * 3.0);
    float vig = (edgeDistPx * edgeDistPx) / (vigRangePx * vigRangePx);
    vig = smoothstep(0.0, 1.0, vig);
    col *= mix(1.0, vig, u_vignette * u_vigOpacity);

    float colorAlpha = (u_alpha1 + u_alpha2 + u_alpha3 + u_alpha4 + u_alpha5) / 5.0;
    if (colorAlpha < 0.999) {
      vec3 c1d = col - u_color1, c2d = col - u_color2, c3d = col - u_color3, c4d = col - u_color4, c5d = col - u_color5;
      float prox1 = exp(-8.0 * dot(c1d, c1d));
      float prox2 = exp(-8.0 * dot(c2d, c2d));
      float prox3 = exp(-8.0 * dot(c3d, c3d));
      float prox4 = exp(-8.0 * dot(c4d, c4d));
      float prox5 = exp(-8.0 * dot(c5d, c5d));
      float pTotal = prox1 + prox2 + prox3 + prox4 + prox5 + 0.0001;
      colorAlpha = (prox1*u_alpha1 + prox2*u_alpha2 + prox3*u_alpha3 + prox4*u_alpha4 + prox5*u_alpha5) / pTotal;
    }
    float alpha = colorAlpha;

    if (u_dotMode > 0.5) {
      vec2 gridSize = gridCounts(6.0 + u_cellSize * 74.0);
      if (u_dotMode > 1.5) {
        gridSize = max(vec2(2.0), floor(gridSize * (1.0 - u_gap * 0.8)));
      }
      // cellLocal is in [0,1] within each cell. Because gridSize was chosen so
      // that cell PIXEL size is square, distance / mask math here works in
      // screen-square units even though we're operating in normalised cell uv.
      vec2 cellLocal = fract(uv * gridSize);

      float hlFactor = 0.0;
      if (u_highlight > 0.01 || u_hlScale > 0.01) {
        vec2 cellCenter = (floor(uv * gridSize) + vec2(0.5)) / gridSize;
        vec2 cp2 = (cellCenter - 0.5) * u_scale;
        cp2.x *= aspect;
        float lw = sin(cp2.x * 3.0 + t * 1.5) * 0.5 + 0.5;
        lw *= sin(cp2.y * 2.5 - t * 1.1) * 0.5 + 0.5;
        lw += (snoise(cp2 * 2.0 + t * 0.6) * 0.5 + 0.5) * 0.3;
        hlFactor = clamp(lw, 0.0, 1.0);
        hlFactor *= hlFactor;
      }

      float scaleBoost = 1.0 + smoothstep(0.2, 0.8, hlFactor) * u_hlScale * 1.2;

      float mask = 1.0;
      if (u_dotMode < 1.5) {
        float gapW = u_gap * 0.35 / scaleBoost;
        if (gapW > 0.003) {
          mask = step(gapW, cellLocal.x) * step(gapW, 1.0 - cellLocal.x)
               * step(gapW, cellLocal.y) * step(gapW, 1.0 - cellLocal.y);
        }
      } else {
        // Render the circular dot mask in screen-pixel space rather than
        // cell-local UV. We map the cell-local offset to actual pixels
        // (cellPx = u_resolution / gridSize), then apply a 1-pixel AA
        // floor to the smoothstep edge so the dot rim is crisp and
        // properly anti-aliased even at u_dotSoftness near 0. The user
        // softness slider still scales linearly on top of the floor.
        // No fwidth() / GL_OES_standard_derivatives needed - dPx is
        // already in pixel units, so a fixed 1-px edge IS pixel-perfect.
        // gridCounts() already keeps cells square in screen space, so
        // pxOffset traces true circles (not ellipses) on any aspect.
        vec2 cellPx = u_resolution / gridSize;
        vec2 pxOffset = (cellLocal - 0.5) * cellPx;
        float dPx = length(pxOffset);
        float minCellPx = min(cellPx.x, cellPx.y);
        float radiusPx = u_dotSize * 0.5 * minCellPx * scaleBoost;
        // 0.5-px AA floor (1-px total smoothstep ramp) keeps the rim
        // pixel-perfect at u_dotSoftness=0 while letting the user softness
        // value dominate at the bundled preset defaults (e.g. softness=0.1
        // on a ~28-px cell yields softPx=0.56 -> ~1.1-px ramp, matching
        // the original cell-local behaviour). A larger floor (e.g. 1.0)
        // would widen low-softness dots and visually lighten dot presets.
        float aaPx = 0.5;
        float softPx = u_dotSoftness * 0.2 * minCellPx;
        float edgePx = max(aaPx, softPx);
        mask = 1.0 - smoothstep(radiusPx - edgePx, radiusPx + edgePx, dPx);
      }

      if (u_highlight > 0.01) {
        float hl = hlFactor * u_highlight;
        col = col * (1.0 + hl * 2.5) + vec3(hl * hl * 0.3);
      }

      if (u_edgeFade > 0.5 && u_fadeStr > 0.005) {
        float ef = smoothstep(0.0, u_edgeFade, edgeDistPx);
        mask *= mix(1.0, ef, u_fadeStr);
      }

      float baseOpacity = (u_dotMode < 1.5) ? u_fillOpacity : 0.0;
      alpha = colorAlpha * mix(baseOpacity, u_dotOpacity, mask);

      float bgLum  = dot(u_cardBg, vec3(0.299, 0.587, 0.114));
      float colLum = dot(baseCol, vec3(0.299, 0.587, 0.114));
      alpha *= smoothstep(0.0, 0.33, abs(colLum - bgLum));
    }

    gl_FragColor = vec4(col, alpha * u_shaderOpacity);
  }
`;let kh=1e3/10,tc=1.25;const $x=2;function Cf(){return typeof window>"u"?1:Math.min(window.devicePixelRatio||1,$x)}let Ye=null;function kx(){return{u_resolution:{value:new jf(1,1)},u_dpr:{value:1},u_time:{value:0},u_color1:{value:new tr(1710618)},u_color2:{value:new tr(8421504)},u_color3:{value:new tr(14277081)},u_color4:{value:new tr(4210752)},u_color5:{value:new tr(12632256)},u_color6:{value:new tr(6316128)},u_color7:{value:new tr(10526880)},u_cardBg:{value:new tr(986895)},u_alpha1:{value:1},u_alpha2:{value:1},u_alpha3:{value:1},u_alpha4:{value:1},u_alpha5:{value:1},u_alpha6:{value:1},u_alpha7:{value:1},u_speed:{value:1},u_intensity:{value:1},u_scale:{value:1.5},u_direction:{value:0},u_softness:{value:.75},u_distortion:{value:.3},u_complexity:{value:.2},u_shape:{value:.5},u_flicker:{value:0},u_vignette:{value:.25},u_vigOpacity:{value:1},u_blur:{value:0},u_highlight:{value:.4},u_shaderOpacity:{value:1},u_cellSize:{value:.5},u_gap:{value:.3},u_dotSize:{value:.8},u_dotSoftness:{value:.1},u_dotOpacity:{value:1},u_hlScale:{value:0},u_fillOpacity:{value:0},u_edgeFade:{value:16},u_fadeStr:{value:1},u_dotMode:{value:2},u_effect:{value:4},u_sweepEase:{value:0}}}function Sx(){if(Ye)return Ye;const e=document.createElement("canvas");e.width=8,e.height=8;const t=new Df({canvas:e,alpha:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!1,antialias:!1,powerPreference:"high-performance"});t.setPixelRatio(Math.min(typeof window<"u"?window.devicePixelRatio:1,tc)),t.setClearColor(0,0),t.autoClear=!0;const a=t.getContext(),o=new Hf,r=new Bf(-1,1,1,-1,0,1),n=kx(),s=new Lf({vertexShader:yx,fragmentShader:wx,uniforms:n,transparent:!0,depthTest:!1,depthWrite:!1,blending:Yf}),i=new Xf(2,2),l=new Nf(i,s);o.add(l),Ye={glCanvas:e,gl:a,renderer:t,scene:o,camera:r,material:s,geometry:i,mesh:l,uniforms:n,instances:new Set,rafId:0,lastFrameMs:0,lastTickMs:performance.now(),lastInstance:null,onContextLost:null,onContextRestored:null,contextLost:!1};const h=u=>{u.preventDefault(),Ye&&(Ye.contextLost=!0,Ye.rafId!==0&&(cancelAnimationFrame(Ye.rafId),Ye.rafId=0))},d=()=>{if(Ye){Ye.contextLost=!1,Ye.lastInstance=null;for(const u of Ye.instances)u.uniformsDirty=!0;Os()}};return e.addEventListener("webglcontextlost",h,!1),e.addEventListener("webglcontextrestored",d,!1),Ye.onContextLost=h,Ye.onContextRestored=d,Os(),Ye}function zx(){Ye&&(Ye.rafId!==0&&cancelAnimationFrame(Ye.rafId),Ye.onContextLost&&Ye.glCanvas.removeEventListener("webglcontextlost",Ye.onContextLost,!1),Ye.onContextRestored&&Ye.glCanvas.removeEventListener("webglcontextrestored",Ye.onContextRestored,!1),Ye.geometry.dispose(),Ye.material.dispose(),Ye.renderer.dispose(),Ye=null)}function Cx(e,t){var a;const o=t.preset,r=e.uniforms;r.u_effect.value=o.effectIndex,r.u_speed.value=o.speed,r.u_intensity.value=o.intensity,r.u_scale.value=o.scale,r.u_direction.value=o.direction*Math.PI/180,r.u_softness.value=o.softness,r.u_distortion.value=o.distortion,r.u_complexity.value=o.complexity,r.u_shape.value=o.shape,r.u_flicker.value=o.flicker??0,r.u_vignette.value=o.vignette,r.u_vigOpacity.value=o.vigOpacity,r.u_blur.value=o.blur,r.u_highlight.value=o.highlight,r.u_shaderOpacity.value=o.shaderOpacity,r.u_dotMode.value=o.dotMode,r.u_sweepEase.value=o.sweepEase!=null?Math.floor(o.sweepEase):0;const n=o.dotMode===1?o.pixelConfig:o.dotConfig;r.u_cellSize.value=Is(n.cellSize,t.pixelScale),r.u_gap.value=n.gap,r.u_dotSize.value=n.dotSize,r.u_dotSoftness.value=n.dotSoftness,r.u_dotOpacity.value=n.dotOpacity,r.u_hlScale.value=n.hlScale,r.u_fillOpacity.value=n.fillOpacity,r.u_edgeFade.value=n.edgeFade,r.u_fadeStr.value=n.fadeStr;const[s,i,l]=en(t.cardBgOverride??o.cardBg);for(let h=0;h<7;h++){const d=(a=t.colorsOverride)==null?void 0:a[h],[u,c,f]=d!=null?en(d):Fi(t,h);r[`u_color${h+1}`].value.setRGB(u,c,f),r[`u_alpha${h+1}`].value=o.alphas[h]}r.u_cardBg.value.setRGB(s,i,l),t.uniformsDirty=!1}function Ax(e){return e.cardBgOverride??e.preset.cardBg}function Fi(e,t){const a=e.preset,[o,r,n]=en(a.colors[t]);if(e.cardBgOverride==null)return[o,r,n];const[s,i,l]=en(a.cardBg),h=d=>Math.round(d*255);return h(o)===h(s)&&h(r)===h(i)&&h(n)===h(l)?en(e.cardBgOverride):[o,r,n]}function _x(e){return{iw:Math.max(1,Math.floor(e.cssWidth*e.dpr)),ih:Math.max(1,Math.floor(e.cssHeight*e.dpr))}}function Af(e){let t=0,a=0;for(const d of e.instances)!d.visible||d.paused||(d.cssWidth>t&&(t=d.cssWidth),d.cssHeight>a&&(a=d.cssHeight));if(t<=0||a<=0)return;const o=e.renderer.getPixelRatio(),r=Math.max(1,Math.floor(t*o)),n=Math.max(1,Math.floor(a*o)),s=e.glCanvas.width,i=e.glCanvas.height;if(r<=s&&n<=i)return;const l=Math.max(t,s/Math.max(o,1e-4)),h=Math.max(a,i/Math.max(o,1e-4));e.renderer.setSize(l,h,!1)}function _f(e,t,a){var o;if(e.contextLost)return;const{iw:r,ih:n}=_x(t),s=Math.max(1,t.cssWidth),i=Math.max(1,t.cssHeight);e.renderer.setViewport(0,0,s,i),e.renderer.setScissor(0,0,s,i),e.renderer.setScissorTest(!0),e.uniforms.u_resolution.value.set(r,n),e.uniforms.u_dpr.value=t.dpr||1,e.lastInstance===t&&!t.uniformsDirty||(Cx(e,t),e.lastInstance=t),e.uniforms.u_time.value=t.accumulatedTime,e.renderer.render(e.scene,e.camera);const l=Math.max(1,Math.floor(t.cssWidth*t.canvasDpr)),h=Math.max(1,Math.floor(t.cssHeight*t.canvasDpr));(t.canvas.width!==l||t.canvas.height!==h)&&(t.canvas.width=l,t.canvas.height=h),t.ctx.clearRect(0,0,l,h);const d=e.glCanvas.height-n;t.ctx.imageSmoothingEnabled=!1,t.ctx.drawImage(e.glCanvas,0,d,r,n,0,0,l,h),(o=t.reveal)==null||o.afterShaderFrame(e,t,a),t.reveal&&t.reveal.isActive()&&(e.lastInstance=null)}function Rx(e,t,a){!t.visible||t.paused||t.cssWidth<1||t.cssHeight<1||_f(e,t,a)}function gi(e){Ye&&(Ye.contextLost||e.visible&&(e.cssWidth<1||e.cssHeight<1||(Af(Ye),_f(Ye,e,performance.now()))))}function Fx(e){for(const t of e.instances)if(t.visible&&!t.paused)return!0;return!1}const Rf=e=>{if(!Ye)return;if(Ye.contextLost){Ye.rafId=0;return}if(!Fx(Ye)){Ye.rafId=0;return}Ye.rafId=requestAnimationFrame(Rf);const t=e-Ye.lastFrameMs;if(t<kh)return;Ye.lastFrameMs=e-t%kh;const a=(e-Ye.lastTickMs)/1e3;Ye.lastTickMs=e;for(const o of Ye.instances)o.visible&&!o.paused&&(o.accumulatedTime+=a);Af(Ye);for(const o of Ye.instances)Rx(Ye,o,e)};function Os(){Ye&&(Ye.contextLost||Ye.rafId===0&&(Ye.lastTickMs=performance.now(),Ye.lastFrameMs=Ye.lastTickMs,Ye.rafId=requestAnimationFrame(Rf)))}function Is(e,t){return!(t>0)||t===1?e:((6+e*74)/t-6)/74}function Ox(e){const t=Sx(),a=e.canvas.getContext("2d");if(!a)throw new Error("img-fx: 2D context unavailable");const o={canvas:e.canvas,ctx:a,cssWidth:e.cssWidth,cssHeight:e.cssHeight,dpr:Math.min(typeof window<"u"?window.devicePixelRatio:1,tc),canvasDpr:Cf(),preset:e.preset,cardBgOverride:e.cardBg??null,colorsOverride:null,strength:e.strength??1,pixelScale:e.pixelScale!=null&&e.pixelScale>0?e.pixelScale:1,visible:!0,paused:!1,uniformsDirty:!0,reveal:null,accumulatedTime:Math.random()*1e3,startedAtMs:performance.now()};return t.instances.add(o),Os(),o}function Ix(e){var t;Ye&&(Ye.instances.delete(e),Ye.lastInstance===e&&(Ye.lastInstance=null),(t=e.reveal)==null||t.dispose(),e.reveal=null,Ye.instances.size===0&&zx())}function Px(e,t,a){e.cssWidth=t,e.cssHeight=a,typeof window<"u"&&(e.dpr=Math.min(window.devicePixelRatio,tc),e.canvasDpr=Cf())}function Wx(e,t){e.preset=t,e.uniformsDirty=!0}function Tx(e,t){e.cardBgOverride=t,e.uniformsDirty=!0}function Ex(e,t){e.colorsOverride=t&&t.length>0?t.slice(0,7):null,e.uniformsDirty=!0}function Dx(e,t){e.visible=t,t&&Os()}function Hx(e,t){e.paused=t,t||Os()}function Bx(e,t){e.strength=Math.max(0,Math.min(1,t))}function Lx(e,t){e.pixelScale=t>0?t:1,e.uniformsDirty=!0}const Sh={linear:e=>e,smoothstep:e=>e*e*(3-2*e),easeOutCubic:e=>1-Math.pow(1-e,3),easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeOutExpo:e=>e===1?1:1-Math.pow(2,-10*e),easeOutBack:e=>1+(1.70158+1)*Math.pow(e-1,3)+1.70158*Math.pow(e-1,2)};function Hs(e,t){return(Sh[e]??Sh.smoothstep)(Math.max(0,Math.min(1,t)))}const Yx=64,Xx=96,jn=320,Nx=.006;function ac(e,t,a){const o=t/Math.max(1,a),r=e.width/Math.max(1,e.height);let n=0,s=0,i=e.width,l=e.height;r>o?(i=e.height*o,n=(e.width-i)/2):(l=e.width/o,s=(e.height-l)/2);const h=Math.min(i,l)*Nx;return i-2*h>1&&l-2*h>1&&(n+=h,s+=h,i-=2*h,l-=2*h),{sx:n,sy:s,sw:i,sh:l}}const q0=new Map;function jx(e){let t=q0.get(e);return t||(t=new Promise((a,o)=>{const r=new Image,n=()=>a(r);r.onerror=s=>{q0.delete(e),o(s)},typeof r.decode=="function"?(r.src=e,r.decode().then(n,()=>{r.complete&&r.naturalWidth>0?n():r.onload=n})):(r.onload=n,r.src=e)}),q0.set(e,t),t)}function po(e,t,a,o,r){let n=t==="a"?e.coverA:e.coverB;if(!n){const s=document.createElement("canvas"),i=s.getContext("2d");if(!i)throw new Error("img-fx: 2D context unavailable for cover bitmap");n={canvas:s,ctx:i,img:null,w:0,h:0},t==="a"?e.coverA=n:e.coverB=n}if(n.img!==a||n.w!==o||n.h!==r){n.canvas.width=o,n.canvas.height=r,n.w=o,n.h=r,n.img=a;const{sx:s,sy:i,sw:l,sh:h}=ac(a,o,r);n.ctx.clearRect(0,0,o,r),n.ctx.imageSmoothingEnabled=!0,n.ctx.imageSmoothingQuality="high",n.ctx.drawImage(a,s,i,l,h,0,0,o,r)}return n.canvas}function Ff(e){return e.dotMode===2?Xx:Yx}function Of(e){const t=e.revealConfig;return e.dotMode===2?{duration:Math.max(.05,t.dotDuration),easingKey:t.dotEasing}:{duration:Math.max(.05,t.duration),easingKey:t.easing}}function qx(e,t,a,o){const r=a/(o-1),n=t/(o-1),s=r-.5,i=n-.5;switch(e){case"radialCenter":return 1-Math.sqrt(s*s+i*i)*2;case"radialCorner":return 1-Math.sqrt(r*r+n*n)/1.414;case"linearTop":return 1-n;case"linearBottom":return n;case"linearLeft":return 1-r;case"linearRight":return r;case"diagonalTL":return 1-(r+n)/2;case"diagonalBR":return(r+n)/2;case"diamond":return 1-(Math.abs(s)+Math.abs(i));case"blindsH":return 1-n*8%1;case"blindsV":return 1-r*8%1;default:return-1}}function If(e,t,a,o,r){const n=t.uniforms.u_dotMode.value,s=t.uniforms.u_fillOpacity.value,i=a.preset.dotMode,l=i<1.5?0:1;t.uniforms.u_dotMode.value=l,t.uniforms.u_fillOpacity.value=l>.5?i===1?a.preset.pixelConfig.fillOpacity:a.preset.dotConfig.fillOpacity:0,t.renderer.render(t.scene,t.camera);const h=Math.max(1,Math.floor(a.cssWidth*a.dpr)),d=Math.max(1,Math.floor(a.cssHeight*a.dpr)),u=Math.max(0,t.glCanvas.height-d);e.sampleGpuCanvas||(e.sampleGpuCanvas=document.createElement("canvas"),e.sampleGpuCtx=e.sampleGpuCanvas.getContext("2d"));const c=e.sampleGpuCanvas,f=e.sampleGpuCtx;return(c.width!==r||c.height!==r)&&(c.width=r,c.height=r),f.clearRect(0,0,r,r),f.drawImage(t.glCanvas,0,u,h,d,0,0,r,r),o.clearRect(0,0,r,r),o.drawImage(c,0,0),t.uniforms.u_dotMode.value=n,t.uniforms.u_fillOpacity.value=s,e.sampleImgData=o.getImageData(0,0,r,r),e.sampleDataCache=e.sampleImgData.data,e.sampleDataCache}function Pf(e,t){e.sampleCanvas||(e.sampleCanvas=document.createElement("canvas"),e.sampleCtx=e.sampleCanvas.getContext("2d",{willReadFrequently:!0})),(e.sampleCanvas.width!==t||e.sampleCanvas.height!==t)&&(e.sampleCanvas.width=t,e.sampleCanvas.height=t,e.sampleImgData=null,e.sampleDataCache=null,e.sampleFrameCounter=0),e.maskGrad||(e.maskGrad=document.createElement("canvas"),e.maskGradCtx=e.maskGrad.getContext("2d")),(e.maskGrad.width!==t||e.maskGrad.height!==t)&&(e.maskGrad.width=t,e.maskGrad.height=t,e.maskImgData=null),!e.maskImgData&&e.maskGradCtx&&(e.maskImgData=e.maskGradCtx.createImageData(t,t))}function Gx(e,t,a,o){if(!e.image)return;const r=a.preset,n=a.canvas.width,s=a.canvas.height;(o.canvas.width!==n||o.canvas.height!==s)&&(o.canvas.width=n,o.canvas.height=s),o.clearRect(0,0,n,s);const{duration:i,easingKey:l}=Of(r),h=(performance.now()-e.revealStartMs)/1e3,d=Math.min(h/i,1),u=Hs(l,d),c=e.image,{sx:f,sy:g,sw:m,sh:x}=ac(c,n,s),v=r.revealConfig.blur;if(d<1&&v>0){const K=v*(1-u);o.canvas.style.filter=K>.1?`blur(${K.toFixed(1)}px)`:"none"}else o.canvas.style.filter="none";if(d>=1){o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high",o.drawImage(po(e,"a",c,n,s),0,0);return}const b=Ff(r);Pf(e,b);const y=e.sampleCtx,$=e.maskGrad,p=e.maskGradCtx,M=r.revealConfig.maskShape,w=r.revealConfig.softness,z=M.startsWith("shader");let k=null,F=null,S=null;if(z){const K=e.sampleFrameCounter++;e.sampleDataCache==null||(K&1)===0?k=If(e,t,a,y,b):k=e.sampleDataCache;const Q={shaderColor1:0,shaderColor2:1,shaderColor3:2,shaderColor4:3,shaderColor5:4};if(Q[M]!=null&&(F=Fi(a,Q[M])),M==="shaderHighlight"){const W=en(Ax(a));S=[];for(let N=0;N<5;N++){const ae=Fi(a,N),G=ae[0]-W[0],J=ae[1]-W[1],V=ae[2]-W[2];Math.sqrt(G*G+J*J+V*V)>.15&&S.push(ae)}S.length===0&&(S=[Fi(a,0)])}}const _=1-u*(1+w),A=M==="gradientSweep";let C=0,R=0,O=2;const E=r.flicker??0;let I=null,P=null,T=0,Y=0,q=0;if(E>.003){O=Math.max(2,Math.floor(6+Is(r.pixelConfig.cellSize,a.pixelScale)*74));const K=a.accumulatedTime*Math.max(r.speed,2)*1.6,Q=Math.floor(K);T=Q%1024,Y=(T+1)%1024,q=K-Q,q=q*q*(3-2*q);const W=(ae,G)=>{const J=Math.sin(ae*127.1+G*17.23)*43758.5453;return J-Math.floor(J)};P=W;const N=O*O;(!e.gsFlickerTable||e.gsFlickerTable.length!==N)&&(e.gsFlickerTable=new Float32Array(N)),I=e.gsFlickerTable;for(let ae=0;ae<N;ae++){const G=W(ae,T)*(1-q)+W(ae,Y)*q;I[ae]=(G-.5)*E*1.6}}A&&(C=.9/Math.max(r.scale,.25),R=-C+u*(1+2*C));const j=e.maskImgData,X=j.data;for(let K=0;K<b;K++)for(let Q=0;Q<b;Q++){let W;if(z&&k){const G=(K*b+Q)*4,J=k[G]/255,V=k[G+1]/255,U=k[G+2]/255;if(S){let fe=0;for(const H of S){const de=J-H[0],oe=V-H[1],ue=U-H[2],te=Math.exp(-10*(de*de+oe*oe+ue*ue));te>fe&&(fe=te)}W=fe}else if(F){const fe=J-F[0],H=V-F[1],de=U-F[2];W=Math.exp(-8*(fe*fe+H*H+de*de))}else W=(k[G]*.299+k[G+1]*.587+k[G+2]*.114)/255}else A?W=0:W=qx(M,K,Q,b);let N;if(A){const G=Q/(b-1),J=K/(b-1),V=(G+J)*.5;N=(R+C-V)/(2*C)}else N=(W-_)/w;if(I&&N>-.5&&N<1.5){const G=N<0?0:N>1?1:N,J=G*(1-G)*4;if(J>.001){const V=Q/(b-1),U=K/(b-1),fe=Math.floor(U*O)*O+Math.floor(V*O);N+=I[fe]*J}}N<0?N=0:N>1&&(N=1),N=N*N*(3-2*N);const ae=(K*b+Q)*4;X[ae]=255,X[ae+1]=255,X[ae+2]=255,X[ae+3]=N*255+.5|0}if(p.putImageData(j,0,0),r.dotMode===1)Vx(e,o,c,f,g,m,x,r,h,n,s,a,A?0:E,P,T,Y,q);else{r.dotMode===2?Ux(e,o,c,f,g,m,x,Is(r.pixelConfig.cellSize,a.pixelScale),h,r.revealConfig.pixDuration,r.revealConfig.pixEasing,a,n,s):(o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high",o.drawImage(po(e,"a",c,n,s),0,0)),o.globalCompositeOperation="destination-in";const K=r.dotMode===2&&z;K&&(o.imageSmoothingEnabled=!1),o.drawImage($,0,0,n,s),K&&(o.imageSmoothingEnabled=!0),o.globalCompositeOperation="source-over"}}function Ux(e,t,a,o,r,n,s,i,l,h,d,u,c,f){const g=6+i*74,m=Math.max(1,u.cssWidth),x=Math.max(1,u.cssHeight),v=Math.max(2,Math.floor(g*m/jn)),b=Math.max(2,Math.floor(g*x/jn)),y=v*b,$=Math.max(.05,h),p=Math.max(0,Math.min(1,l/$)),M=Hs(d,p);e.pixCanvas||(e.pixCanvas=document.createElement("canvas"),e.pixCtx=e.pixCanvas.getContext("2d"));const w=e.pixCanvas,z=e.pixCtx;(w.width!==v||w.height!==b)&&(w.width=v,w.height=b),e.pixDrop||(e.pixDrop=document.createElement("canvas"),e.pixDropCtx=e.pixDrop.getContext("2d"));const k=e.pixDrop,F=e.pixDropCtx;if(k.width!==v||k.height!==b){k.width=v,k.height=b,e.pixDropImgData=F.createImageData(v,b);const R=e.pixDropImgData.data;for(let O=0;O<R.length;O+=4)R[O]=255,R[O+1]=255,R[O+2]=255}const S=.07,_=1/(2*S);if(!e.pixDropPattern||e.pixDropPatternW!==v||e.pixDropPatternH!==b||e.pixDropRevealStart!==e.revealStartMs){e.pixDropPattern=new Float32Array(y);const R=S,O=1-2*S;for(let E=0;E<e.pixDropPattern.length;E++)e.pixDropPattern[E]=R+Math.random()*O;e.pixDropPatternW=v,e.pixDropPatternH=b,e.pixDropRevealStart=e.revealStartMs}const A=e.pixDropImgData.data,C=e.pixDropPattern;for(let R=0;R<C.length;R++){let O=.5+(C[R]-M)*_;O<0?O=0:O>1&&(O=1),A[R*4+3]=O*255+.5|0}F.putImageData(e.pixDropImgData,0,0),z.globalCompositeOperation="source-over",z.clearRect(0,0,v,b),z.imageSmoothingEnabled=!0,z.imageSmoothingQuality="high",z.drawImage(po(e,"a",a,c,f),0,0,c,f,0,0,v,b),z.globalCompositeOperation="destination-in",z.imageSmoothingEnabled=!1,z.drawImage(k,0,0),z.globalCompositeOperation="source-over",t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="high",t.drawImage(po(e,"a",a,c,f),0,0),t.imageSmoothingEnabled=!1,t.drawImage(w,0,0,v,b,0,0,c,f),t.imageSmoothingEnabled=!0}function Vx(e,t,a,o,r,n,s,i,l,h,d,u,c,f,g,m,x){const v=6+Is(i.pixelConfig.cellSize,u.pixelScale)*74,b=Math.max(1,u.cssWidth),y=Math.max(1,u.cssHeight),$=Math.max(2,Math.floor(v*b/jn)),p=Math.max(2,Math.floor(v*y/jn)),M=$*p,w=Math.max(.05,i.revealConfig.pixDuration),z=Math.max(0,Math.min(1,l/w)),k=Hs(i.revealConfig.pixEasing,z);e.pixCanvas||(e.pixCanvas=document.createElement("canvas"),e.pixCtx=e.pixCanvas.getContext("2d"));const F=e.pixCanvas,S=e.pixCtx;(F.width!==$||F.height!==p)&&(F.width=$,F.height=p),e.pixDrop||(e.pixDrop=document.createElement("canvas"),e.pixDropCtx=e.pixDrop.getContext("2d"));const _=e.pixDrop,A=e.pixDropCtx;if(_.width!==$||_.height!==p){_.width=$,_.height=p,e.pixDropImgData=A.createImageData($,p);const P=e.pixDropImgData.data;for(let T=0;T<P.length;T+=4)P[T]=255,P[T+1]=255,P[T+2]=255}const C=.07,R=1/(2*C);if(!e.pixDropPattern||e.pixDropPatternW!==$||e.pixDropPatternH!==p||e.pixDropRevealStart!==e.revealStartMs){e.pixDropPattern=new Float32Array(M);const P=C,T=1-2*C;for(let Y=0;Y<e.pixDropPattern.length;Y++)e.pixDropPattern[Y]=P+Math.random()*T;e.pixDropPatternW=$,e.pixDropPatternH=p,e.pixDropRevealStart=e.revealStartMs}const O=e.pixDropImgData.data,E=e.pixDropPattern,I=c>.003&&f!=null;for(let P=0;P<E.length;P++){const T=E[P];let Y=.5+(T-k)*R;if(Y<0?Y=0:Y>1&&(Y=1),I){const q=1-Math.abs(k-T)*6.25;if(q>0){const j=f(P,g)*(1-x)+f(P,m)*x;Y+=(j-.5)*c*1.6*q,Y<0?Y=0:Y>1&&(Y=1)}}O[P*4+3]=Y*255+.5|0}A.putImageData(e.pixDropImgData,0,0),S.globalCompositeOperation="source-over",S.clearRect(0,0,$,p),S.imageSmoothingEnabled=!0,S.imageSmoothingQuality="high",S.drawImage(po(e,"a",a,h,d),0,0,h,d,0,0,$,p),S.globalCompositeOperation="destination-in",S.imageSmoothingEnabled=!1,S.drawImage(_,0,0),S.globalCompositeOperation="source-over",t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="high",t.drawImage(po(e,"a",a,h,d),0,0),t.imageSmoothingEnabled=!1,t.drawImage(F,0,0,$,p,0,0,h,d),t.imageSmoothingEnabled=!0,S.globalCompositeOperation="source-over",S.clearRect(0,0,$,p),S.imageSmoothingEnabled=!0,S.imageSmoothingQuality="high",S.drawImage(e.maskGrad,0,0,$,p),t.imageSmoothingEnabled=!1,t.globalCompositeOperation="destination-in",t.drawImage(F,0,0,$,p,0,0,h,d),t.imageSmoothingEnabled=!0,t.globalCompositeOperation="source-over"}const G0=800,U0=300,Kx=1,Qx=.5,Zx=.03,zh=.6,Ch=800,Jx=400,ev=1200;function tv(e,t,a,o,r,n){var s;const i=e.image;if(!i)return;const l=a.preset,h=a.canvas.width,d=a.canvas.height;(o.canvas.width!==h||o.canvas.height!==d)&&(o.canvas.width=h,o.canvas.height=d),o.canvas.style.filter="none";const u=6+Is(l.pixelConfig.cellSize,a.pixelScale)*74,c=Math.max(1,a.cssWidth),f=Math.max(1,a.cssHeight),g=Math.max(2,Math.floor(u*c/jn)),m=Math.max(2,Math.floor(u*f/jn)),x=g*m,v=e.pendingReveal,b=v&&e.boilHandoffStartMs>0?n-e.boilHandoffStartMs:-1,y=he=>he*he*(3-2*he),$=b<0?0:y(Math.min(1,b/Ch)),p=b<0?-1:b-Ch,M=p<=0?0:y(Math.min(1,p/Jx)),w=p<=0?0:Math.min(1,p/ev),z=v!=null&&p>0,k=n-e.boilStartMs,F=Math.min(1,k/G0),S=F*F*(3-2*F),_=F<1,A=Math.min(1,Math.max(0,k-(G0-U0))/U0),C=1-A*A*(3-2*A),R=Math.min(1,Math.max(0,k-(G0-U0))/(Kx*1e3)),O=R*R*(3-2*R),E=O*Qx;r.style.opacity=String(O),e.pixCanvas||(e.pixCanvas=document.createElement("canvas"),e.pixCtx=e.pixCanvas.getContext("2d"));const I=e.pixCanvas,P=e.pixCtx;(I.width!==g||I.height!==m)&&(I.width=g,I.height=m),e.pixDrop||(e.pixDrop=document.createElement("canvas"),e.pixDropCtx=e.pixDrop.getContext("2d"));const T=e.pixDrop,Y=e.pixDropCtx;if(T.width!==g||T.height!==m||!e.pixDropImgData){T.width=g,T.height=m,e.pixDropImgData=Y.createImageData(g,m);const he=e.pixDropImgData.data;for(let be=0;be<he.length;be+=4)he[be]=255,he[be+1]=255,he[be+2]=255}if(!e.boilPattern||e.boilPatternW!==g||e.boilPatternH!==m){e.boilPattern=new Float32Array(x);for(let he=0;he<x;he++)e.boilPattern[he]=Math.random();e.boilPatternW=g,e.boilPatternH=m}const q=Math.max(l.flicker??0,.5),j=a.accumulatedTime*Math.max(l.speed,2)*1.6,X=Math.floor(j),K=X%1024,Q=(K+1)%1024;let W=j-X;W=W*W*(3-2*W);const N=(he,be)=>{const ze=Math.sin(he*127.1+be*17.23)*43758.5453;return ze-Math.floor(ze)},ae=e.pixDropImgData.data,G=e.boilPattern,J=Ff(l);Pf(e,J);const V=e.sampleFrameCounter++,U=e.sampleDataCache==null||V%3===0,fe=!e.boilField||e.boilField.length!==x,H=U?If(e,t,a,e.sampleCtx,J):e.sampleDataCache;if(U||fe){fe&&(e.boilField=new Float32Array(x));const he=e.boilField;let be=1,ze=0;for(let ie=0;ie<m;ie++){const _e=Math.min(J-1,(ie+.5)*J/m|0);for(let ve=0;ve<g;ve++){const Ne=Math.min(J-1,(ve+.5)*J/g|0),He=(_e*J+Ne)*4,Ue=(H[He]*.299+H[He+1]*.587+H[He+2]*.114)/255;he[ie*g+ve]=Ue,Ue<be&&(be=Ue),Ue>ze&&(ze=Ue)}}const Qe=ze-be>.001?1/(ze-be):0;for(let ie=0;ie<x;ie++)he[ie]=Qe>0?(he[ie]-be)*Qe:.5}const de=e.boilField,oe=1/(2*Zx),ue=q*.6*(1-w),te=1-zh,Xe=z?Hs(l.revealConfig.pixEasing,w):0,qe=1/(2*.07),ge=l.flicker??0;for(let he=0;he<x;he++){const be=N(he,K)*(1-W)+N(he,Q)*W;let ze=.5+(de[he]*zh+G[he]*te+(be-.5)*ue-E)*oe;if(ze<0?ze=0:ze>1&&(ze=1),_){const Qe=G[he];let ie=.5+(S-Qe)*qe;ie<0?ie=0:ie>1&&(ie=1);const _e=1-Math.abs(S-Qe)*6.25;_e>0&&(ie+=(be-.5)*q*1.6*_e,ie<0?ie=0:ie>1&&(ie=1)),ie<ze&&(ze=ie)}if(z){const Qe=G[he];let ie=.5+(Qe-Xe)*qe;if(ie<0?ie=0:ie>1&&(ie=1),ge>.003){const _e=1-Math.abs(Xe-Qe)*6.25;_e>0&&(ie+=(be-.5)*ge*1.6*_e,ie<0?ie=0:ie>1&&(ie=1))}ie<ze&&(ze=ie)}ae[he*4+3]=ze*255+.5|0}Y.putImageData(e.pixDropImgData,0,0),ac(i,h,d),P.globalCompositeOperation="source-over",P.clearRect(0,0,g,m),P.imageSmoothingEnabled=!0,P.imageSmoothingQuality="high",$<1&&P.drawImage(po(e,"a",i,h,d),0,0,h,d,0,0,g,m),v&&$>0&&(P.globalAlpha=$,P.drawImage(po(e,"b",v.image,h,d),0,0,h,d,0,0,g,m),P.globalAlpha=1),P.globalCompositeOperation="destination-in",P.imageSmoothingEnabled=!1,P.drawImage(T,0,0),P.globalCompositeOperation="source-over",o.clearRect(0,0,h,d),_&&C>0?(o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high",o.globalAlpha=C,o.drawImage(po(e,"a",i,h,d),0,0),o.globalAlpha=1):z&&v&&M>0&&(o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high",o.globalAlpha=M,o.drawImage(po(e,"b",v.image,h,d),0,0),o.globalAlpha=1),o.imageSmoothingEnabled=!1,o.drawImage(I,0,0,g,m,0,0,h,d),o.imageSmoothingEnabled=!0,z&&v&&w>=1&&M>=1&&(e.image=v.image,e.pendingReveal=null,e.boilHandoffStartMs=0,e.holdPaintedImg=null,e.phase="hold",r.style.opacity="0",(s=e.onRevealComplete)==null||s.call(e))}function av(e){const t=e.canvas.getContext("2d");if(!t)throw new Error("img-fx: 2D context unavailable for reveal canvas");const a={active:!1,phase:"idle",revealStartMs:0,hideStartMs:0,hideDurationMs:300,boilStartMs:0,boilPattern:null,boilPatternW:0,boilPatternH:0,boilField:null,boilHandoffStartMs:0,pendingReveal:null,image:null,cssWidth:e.cssWidth,cssHeight:e.cssHeight,sampleCanvas:null,sampleCtx:null,sampleImgData:null,sampleDataCache:null,sampleFrameCounter:0,maskGrad:null,maskGradCtx:null,maskImgData:null,gsFlickerTable:null,pixCanvas:null,pixCtx:null,pixDrop:null,pixDropCtx:null,pixDropImgData:null,pixDropPattern:null,pixDropPatternW:0,pixDropPatternH:0,pixDropRevealStart:-1,coverA:null,coverB:null,holdPaintedImg:null,holdPaintedW:0,holdPaintedH:0,sampleGpuCanvas:null,sampleGpuCtx:null},o=e.shaderCanvas;function r(n){a.image=n.image,a.cssWidth=n.cssWidth,a.cssHeight=n.cssHeight,a.onRevealComplete=n.onRevealComplete,a.revealStartMs=performance.now(),a.phase="reveal",a.active=!0,a.boilHandoffStartMs=0,a.pendingReveal=null,a.sampleFrameCounter=0,a.sampleDataCache=null,a.holdPaintedImg=null,t.canvas.style.opacity="1"}return{canvas:e.canvas,ctx:t,afterShaderFrame(n,s,i){var l;if(a.cssWidth=s.cssWidth,a.cssHeight=s.cssHeight,!a.active){t.canvas.style.filter="none";return}const{duration:h,easingKey:d}=Of(s.preset);if(a.phase==="reveal"&&a.image){const u=(i-a.revealStartMs)/1e3,c=Math.min(u/h,1),f=Hs(d,c);o.style.opacity=String(1-f),Gx(a,n,s,t),c>=1&&(a.phase="hold",o.style.opacity="0",(l=a.onRevealComplete)==null||l.call(a))}else if(a.phase==="hold"&&a.image){t.canvas.style.filter="none";const u=a.image,c=s.canvas.width,f=s.canvas.height;(t.canvas.width!==c||t.canvas.height!==f)&&(t.canvas.width=c,t.canvas.height=f,a.holdPaintedImg=null),(a.holdPaintedImg!==u||a.holdPaintedW!==c||a.holdPaintedH!==f)&&(t.clearRect(0,0,c,f),t.globalCompositeOperation="source-over",t.globalAlpha=1,t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="high",t.drawImage(po(a,"a",u,c,f),0,0),a.holdPaintedImg=u,a.holdPaintedW=c,a.holdPaintedH=f),o.style.opacity="0"}else if(a.phase==="boil"&&a.image)tv(a,n,s,t,o,i);else if(a.phase==="hide"){const u=i-a.hideStartMs,c=Math.min(u/Math.max(1,a.hideDurationMs),1),f=1-c;t.canvas.style.opacity=String(f),o.style.opacity=String(c),c>=1&&(a.active=!1,a.phase="idle",t.canvas.style.opacity="1",t.clearRect(0,0,t.canvas.width,t.canvas.height),o.style.opacity="1",a.image=null)}},startReveal(n){if(a.phase==="boil"&&a.active){a.pendingReveal=n,a.onRevealComplete=n.onRevealComplete,a.cssWidth=n.cssWidth,a.cssHeight=n.cssHeight,a.boilHandoffStartMs===0&&(a.boilHandoffStartMs=performance.now());return}r(n)},startHide(n=300){!a.active||a.phase==="hide"||(a.phase="hide",a.hideStartMs=performance.now(),a.hideDurationMs=n)},startBoil(){!a.active||!a.image||a.phase!=="hold"&&a.phase!=="reveal"||(a.phase="boil",a.boilStartMs=performance.now(),a.boilHandoffStartMs=0,a.pendingReveal=null,a.boilPattern=null,a.sampleFrameCounter=0,a.sampleDataCache=null,a.holdPaintedImg=null,t.canvas.style.opacity="1")},clear(){const n=a.active;a.active=!1,a.phase="idle",a.image=null,a.boilHandoffStartMs=0,a.pendingReveal=null,a.holdPaintedImg=null,t.clearRect(0,0,t.canvas.width,t.canvas.height),n&&(t.canvas.style.filter="none",t.canvas.style.opacity="1",o.style.opacity="1")},isActive(){return a.active},dispose(){a.image=null,a.sampleCanvas=null,a.sampleCtx=null,a.sampleImgData=null,a.sampleDataCache=null,a.sampleFrameCounter=0,a.maskGrad=null,a.maskGradCtx=null,a.maskImgData=null,a.gsFlickerTable=null,a.pixCanvas=null,a.pixCtx=null,a.pixDrop=null,a.pixDropCtx=null,a.pixDropImgData=null,a.pixDropPattern=null,a.boilPattern=null,a.boilField=null,a.pendingReveal=null,a.coverA=null,a.coverB=null,a.holdPaintedImg=null,a.sampleGpuCanvas=null,a.sampleGpuCtx=null}}}function Ah(e,t){if(e.length===0)return null;if(e.length===1)return{src:e[0],idx:0};let a;do a=Math.floor(Math.random()*e.length);while(a===t);return{src:e[a],idx:a}}function ov(e){let t=e.images.slice(),a=e.delayRange,o=e.holdMs,r=e.fadeOutMs,n=e.onPhase,s=e.excludeSrcs,i="idle",l=null,h=-1,d=!1,u=!1,c=null,f=!1,g="auto";function m(w){i=w,n?.({phase:w,src:c})}function x(){l!=null&&(clearTimeout(l),l=null)}function v(){if(typeof o=="number")return Math.max(0,o);const[w,z]=o,k=Math.max(0,Math.min(w,z)),F=Math.max(0,Math.max(w,z));return k+Math.random()*(F-k)}function b(w){if(!d||u)return;m("idle");const[z,k]=a,F=z+Math.random()*Math.max(0,k-z),S=w??F*1e3;x(),l=setTimeout(()=>{l=null,p(!0,"auto")},S)}function y(){u||(m("hide"),e.reveal.startHide(r),x(),l=setTimeout(()=>{l=null,!u&&(c=null,f?b():(d=!1,m("idle")))},r))}function $(){if(t.length===0)return null;const w=s?.(),z=w==null?null:w instanceof Set?w:new Set(w);if(!z||z.size===0)return Ah(t,h);const k=h>=0&&h<t.length?t[h]:null,F=[];for(let _=0;_<t.length;_++){const A=t[_];z.has(A)||A===k&&t.length>z.size+1||F.push(_)}if(F.length===0)return Ah(t,h);const S=F[Math.floor(Math.random()*F.length)];return{src:t[S],idx:S}}function p(w,z){if(!d||u)return;if(t.length===0){w?b(500):d=!1;return}const k=$();if(!k){w?b(500):d=!1;return}h=k.idx,c=k.src,f=w,g=z,jx(k.src).then(F=>{!d||u||(m("reveal"),e.reveal.startReveal({image:F,cssWidth:e.reveal.canvas.clientWidth||e.reveal.canvas.width,cssHeight:e.reveal.canvas.clientHeight||e.reveal.canvas.height,onRevealComplete:()=>{if(!d||u)return;if(m("visible"),z==="manual"){x();return}x();const S=v();l=setTimeout(()=>{l=null,!(!d||u)&&y()},S)}}))}).catch(()=>{c=null,w?b(500):d=!1})}function M(w){if(u||i==="reveal"||i==="visible"||i==="hide")return;const z=d;x(),z||(d=!0),p(z,w?.hold??"auto")}return{start(){if(d)return;d=!0,u=!1;const w=e.initialDelayMs??Math.random()*1500;b(w)},stop(){d=!1,x(),e.reveal.clear(),c=null,i="idle"},triggerOnce(w){M(w)},triggerHide(){u||i!=="reveal"&&i!=="visible"||y()},triggerBoil(w){if(u||i!=="reveal"&&i!=="visible")return;x(),e.reveal.startBoil(),c=null,d=!1,m("idle");const z=w?.autoRevealAfterMs;z!=null&&Number.isFinite(z)&&(l=setTimeout(()=>{l=null,M({hold:"manual"})},Math.max(0,z)))},getPhase(){return i},setPaused(w){if(u!==w){if(u=w,u)x();else if(d)if(i==="visible"){if(g==="manual")return;x(),l=setTimeout(()=>{l=null,y()},Math.min(v(),500))}else i==="hide"?(x(),l=setTimeout(()=>{l=null,c=null,b()},r)):b()}},setImages(w){t=w.slice(),h=-1},setExcludeSrcs(w){s=w??void 0},setOptions(w){w.delayRange&&(a=w.delayRange),w.holdMs!=null&&(o=w.holdMs),w.fadeOutMs!=null&&(r=w.fadeOutMs),w.onPhase&&(n=w.onPhase)},isRunning(){return d&&!u},dispose(){d=!1,x()}}}const _h=(e,t,a)=>.299*e+.587*t+.114*a,Rh=(e,t,a)=>`#${[e,t,a].map(o=>Math.round(o).toString(16).padStart(2,"0")).join("")}`,nr=24;let bi=null,V0=null;function rv(){return V0||(typeof document>"u"?null:(bi=document.createElement("canvas"),bi.width=nr,bi.height=nr,V0=bi.getContext("2d",{willReadFrequently:!0}),V0))}function nv(e,t){if(e.width===0||e.height===0)return null;const a=rv();if(!a)return null;a.imageSmoothingEnabled=!0,a.clearRect(0,0,nr,nr),a.drawImage(e,0,0,nr,nr);let o;try{o=a.getImageData(0,0,nr,nr).data}catch{return null}const r=[];let n=0,s=0,i=0;for(let u=0;u<o.length;u+=4){if(o[u+3]<8)continue;const c=o[u],f=o[u+1],g=o[u+2];r.push({r:c,g:f,b:g,lum:_h(c,f,g)}),n+=c,s+=f,i+=g}if(r.length===0)return null;r.sort((u,c)=>u.lum-c.lum);const l=Rh(n/r.length,s/r.length,i/r.length),h=t.map((u,c)=>{const[f,g,m]=en(u);return{slot:c,lum:_h(f,g,m)}}).sort((u,c)=>u.lum-c.lum),d=new Array(h.length);for(let u=0;u<h.length;u++){const c=.05+.9*u/Math.max(1,h.length-1),f=r[Math.min(r.length-1,Math.round(c*(r.length-1)))];d[h[u].slot]=Rh(f.r,f.g,f.b)}return{colors:d,cardBg:l}}const Fh="img-fx-styles",sv=`
.image-gen-root {
  position: relative;
  display: inline-block;
  isolation: isolate;
  overflow: hidden;
  vertical-align: top;
  line-height: 0;
  flex: 0 0 auto;
}

.image-gen-root > .image-gen-shader,
.image-gen-root > .image-gen-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: inherit;
  display: block;
}

.image-gen-root > .image-gen-shader {
  z-index: 1;
}

.image-gen-root > .image-gen-overlay {
  z-index: 2;
}

.image-gen-root > .image-gen-child {
  position: relative;
  z-index: 0;
  display: block;
  line-height: normal;
}
`;let K0=!1;function Wf(){if(typeof document>"u"||K0)return;if(document.getElementById(Fh)){K0=!0;return}const e=document.createElement("style");e.id=Fh,e.textContent=sv,document.head.appendChild(e),K0=!0}Wf();function Oh(){if(typeof document>"u")return"dark";const e=document.documentElement,t=e.getAttribute("data-theme");if(t==="dark"||t==="light")return t;if(e.classList.contains("dark"))return"dark";if(e.classList.contains("light"))return"light";const a=e.style.colorScheme||getComputedStyle(e).colorScheme;return a==="dark"?"dark":a==="light"?"light":typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark"}function iv(e){const[t,a]=L.useState(()=>e!=="auto"?e:Oh());return L.useEffect(()=>{if(e!=="auto"){a(e);return}if(typeof window>"u")return;const o=()=>a(Oh());o();const r=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null;r?.addEventListener("change",o);let n=null;return typeof document<"u"&&typeof MutationObserver<"u"&&(n=new MutationObserver(o),n.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]})),()=>{r?.removeEventListener("change",o),n?.disconnect()}},[e]),t}function lv(e){return e?typeof e=="string"?[e]:e.slice():[]}const Ol=["pixels-mechanic","pixels-organic"];function cv(e){return Ol.includes(e)}const Tf=L.forwardRef(function({children:e,preset:t="pixels-organic",theme:a="auto",strength:o=1,pixelScale:r=1,cardBg:n,colors:s,images:i,autoReveal:l=!1,revealDelayRange:h=[2,4],revealInitialDelay:d,revealHoldMs:u=2e3,revealFadeOutMs:c=300,borderRadius:f,paused:g=!1,onCycle:m,excludeSrcs:x,className:v,style:b,...y},$){const p=L.useRef(null),M=L.useRef(null),w=L.useRef(null),z=L.useRef(null),k=L.useRef(null),F=L.useRef(null),S=L.useRef(null),_=L.useRef(m),A=L.useRef(x),[C,R]=L.useState(null),[O,E]=L.useState(null);L.useImperativeHandle($,()=>({get element(){return p.current},triggerReveal(V){var U;(U=S.current)==null||U.triggerOnce(V)},triggerHide(){var V;(V=S.current)==null||V.triggerHide()},triggerRegenerate(V){const U=S.current;if(!U||X.current)return;const fe=U.getPhase();if(fe!=="reveal"&&fe!=="visible")return;const H=q.current,de=cv(H)?null:Ol[Math.floor(Math.random()*Ol.length)];if(V?.tintFromImage??!0){const ue=w.current;if(ue){const te=de?j0[de].modes[j.current].colors:Y.current.colors,Xe=nv(ue,te);Xe&&R(Xe)}}de&&E(de);const oe=V?.autoReveal??!0;U.triggerBoil(oe?{autoRevealAfterMs:V?.durationMs??4e3}:void 0)},isImageActive(){var V;const U=((V=S.current)==null?void 0:V.getPhase())??"idle";return U==="reveal"||U==="visible"||U==="hide"}}),[]),L.useLayoutEffect(()=>{Wf()},[]),L.useEffect(()=>{_.current=m},[m]),L.useEffect(()=>{A.current=x},[x]);const I=iv(a),P=L.useMemo(()=>j0[t].modes[I],[t,I]),T=n??P.cardBg,Y=L.useRef(P);Y.current=P;const q=L.useRef(t);q.current=t;const j=L.useRef(I);j.current=I;const X=L.useRef(g);X.current=g;const K=L.useMemo(()=>lv(i),[i]),Q=L.useRef(K),W=L.useRef(h),N=L.useRef(u),ae=L.useRef(c);Q.current=K,W.current=h,N.current=u,ae.current=c;const G=L.useRef(L.useMemo(()=>{if(d==null)return;if(typeof d=="number")return Math.max(0,d)*1e3;const[V,U]=d,fe=Math.max(0,Math.min(V,U)),H=Math.max(0,Math.max(V,U));return(fe+Math.random()*(H-fe))*1e3},[]));L.useLayoutEffect(()=>{var V;const U=p.current,fe=M.current,H=w.current;if(!U||!fe||!H)return;const de=()=>{var He;const Ue=U.getBoundingClientRect(),Ot=Math.max(1,Math.round(Ue.width)),Rt=Math.max(1,Math.round(Ue.height));let Wt=0;if(typeof f=="number")Wt=f;else{const ta=(He=z.current)==null?void 0:He.firstElementChild;if(ta){const $t=parseFloat(getComputedStyle(ta).borderTopLeftRadius);Number.isFinite($t)&&$t>0&&(Wt=$t)}if(Wt===0){const $t=parseFloat(getComputedStyle(U).borderTopLeftRadius);Number.isFinite($t)&&$t>0&&(Wt=$t)}}return{w:Ot,h:Rt,r:Wt}},oe=de(),ue=Ox({canvas:fe,cssWidth:oe.w,cssHeight:oe.h,preset:P,strength:o,cardBg:n??null,pixelScale:r});k.current=ue,ue.canvas.style.opacity=String(Math.max(0,Math.min(1,o)));const te=av({canvas:H,cssWidth:oe.w,cssHeight:oe.h,shaderCanvas:fe});ue.reveal=te,F.current=te;const Xe=ov({reveal:te,images:Q.current,delayRange:W.current,holdMs:N.current,fadeOutMs:ae.current,initialDelayMs:G.current,onPhase:He=>{var Ue;He.phase==="visible"&&(R(null),E(null)),(Ue=_.current)==null||Ue.call(_,He)},excludeSrcs:()=>{var He;return((He=A.current)==null?void 0:He.call(A))??null}});S.current=Xe,g&&Xe.setPaused(!0),U.style.setProperty("--image-gen-radius",`${oe.r}px`),U.style.borderRadius=`${oe.r}px`;let qe=0,ge=-1,he=-1,be=-1;const ze=()=>{qe=0;const He=k.current;if(!He)return;const Ue=de();(Ue.w!==ge||Ue.h!==he)&&(Px(He,Ue.w,Ue.h),ge=Ue.w,he=Ue.h),Ue.r!==be&&(U.style.setProperty("--image-gen-radius",`${Ue.r}px`),U.style.borderRadius=`${Ue.r}px`,be=Ue.r)},Qe=()=>{qe===0&&(qe=requestAnimationFrame(ze))},ie=new ResizeObserver(Qe);ie.observe(U);const _e=(V=z.current)==null?void 0:V.firstElementChild;_e&&ie.observe(_e);let ve=null;_e&&typeof MutationObserver<"u"&&(ve=new MutationObserver(Qe),ve.observe(_e,{attributes:!0,attributeFilter:["class","style"]})),ge=oe.w,he=oe.h,be=oe.r;let Ne=null;return typeof IntersectionObserver<"u"&&(Ne=new IntersectionObserver(He=>{const Ue=k.current;if(Ue)for(const Ot of He)Dx(Ue,Ot.isIntersecting)},{rootMargin:"64px"}),Ne.observe(U)),()=>{var He;ie.disconnect(),ve?.disconnect(),Ne?.disconnect(),qe!==0&&cancelAnimationFrame(qe),(He=S.current)==null||He.dispose(),S.current=null,te.dispose(),F.current=null;const Ue=k.current;Ue&&Ix(Ue),k.current=null}},[]),L.useEffect(()=>{const V=k.current;if(!V)return;const U=O?j0[O].modes[I]:P;Wx(V,U),gi(V)},[P,O,I]),L.useEffect(()=>{const V=k.current;V&&(Tx(V,C?.cardBg??n??null),gi(V))},[n,C]),L.useEffect(()=>{const V=k.current;V&&(Ex(V,C?.colors??s??null),gi(V))},[s,C]),L.useEffect(()=>{const V=k.current;V&&(Bx(V,o),V.canvas&&(V.canvas.style.opacity=String(Math.max(0,Math.min(1,o)))))},[o]),L.useEffect(()=>{const V=k.current;V&&(Lx(V,r),gi(V))},[r]),L.useEffect(()=>{var V;const U=k.current;U&&Hx(U,g),(V=S.current)==null||V.setPaused(g)},[g]),L.useEffect(()=>{var V;(V=S.current)==null||V.setImages(K)},[K]),L.useEffect(()=>{var V;(V=S.current)==null||V.setOptions({delayRange:h,holdMs:u,fadeOutMs:c})},[h,u,c]),L.useEffect(()=>{const V=S.current;if(V){if(l)return V.start(),()=>V.stop();V.stop()}},[l]);const J=L.useMemo(()=>({background:C?.cardBg??T,...b}),[T,C,b]);return D.jsxs("div",{...y,ref:p,className:["image-gen-root",v].filter(Boolean).join(" "),"data-preset":t,"data-theme":I,"data-paused":g?"true":void 0,style:J,children:[D.jsx("canvas",{ref:M,className:"image-gen-shader","aria-hidden":"true"}),D.jsx("canvas",{ref:w,className:"image-gen-overlay","aria-hidden":"true"}),D.jsx("div",{ref:z,className:"image-gen-child",children:e})]})});Tf.displayName="ImageGeneration";const Ih=["searching","working","solving","listening","connecting","weaving","composing","breathing","shaping"];function hv(){const[e,t]=L.useState(0);L.useEffect(()=>{const o=setInterval(()=>t(r=>(r+1)%Ih.length),2e3);return()=>clearInterval(o)},[]);const a=Ih[e];return D.jsx(Ur,{children:D.jsxs("div",{className:"flex flex-col items-center gap-3",children:[D.jsx(xp,{state:a,size:64,theme:"dark"}),D.jsx("p",{className:"text-xs text-[#8f877c]",children:a})]})})}function uv(){const[e,t]=L.useState(!1);return L.useEffect(()=>{const a=setInterval(()=>t(o=>!o),1800);return()=>clearInterval(a)},[]),D.jsx(Ur,{children:D.jsx("div",{className:"relative h-44 w-44 pointer-events-auto",onClick:()=>t(a=>!a),children:D.jsxs(ei,{blur:8,contrast:20,fill:"#f2eee6",children:[D.jsx(ei.Item,{x:0,y:0,children:D.jsx("div",{className:"grid h-14 w-14 place-items-center rounded-full bg-[#f2eee6] text-[#0c0b09] text-sm font-medium",children:"+"})}),D.jsx(ei.Item,{x:e?-52:0,y:e?-36:0,transition:"bouncy",children:D.jsx("div",{className:"grid h-11 w-11 place-items-center rounded-full bg-[#e07a3d] text-white text-xs",children:"A"})}),D.jsx(ei.Item,{x:e?52:0,y:e?-36:0,transition:"bouncy",delay:40,children:D.jsx("div",{className:"grid h-11 w-11 place-items-center rounded-full bg-[#f0c37a] text-[#0c0b09] text-xs",children:"B"})})]})})})}function fv(){const[e,t]=L.useState(0);L.useEffect(()=>{let o=0;const r=()=>{t(performance.now()),o=requestAnimationFrame(r)};return o=requestAnimationFrame(r),()=>cancelAnimationFrame(o)},[]);const a=()=>(Math.sin(e/220)*.5+.5)*.85;return D.jsx(Ur,{children:D.jsx(lg,{level:a,type:"pill",children:D.jsx("div",{style:{padding:"28px 36px",borderRadius:24,background:"#1d1b16",border:"1px solid #2a2620",minWidth:260,color:"#f2eee6",textAlign:"center"},children:"语音光晕"})})})}function dv(){const[e,t]=L.useState(!0);return L.useEffect(()=>{const a=setInterval(()=>t(o=>!o),2200);return()=>clearInterval(a)},[]),D.jsx(Ur,{children:D.jsxs("div",{className:"flex items-end gap-4",children:[D.jsx(N0,{type:"clover",state:e?"working":"default"}),D.jsx(N0,{type:"droid",state:e?"working":"default"}),D.jsx(N0,{type:"cat",state:e?"working":"default"})]})})}const xv={"libraries-border-beam":()=>D.jsx(Ur,{children:D.jsx(zd,{size:"md",children:D.jsxs("div",{style:{padding:"36px 40px",borderRadius:18,background:"#1d1b16",minWidth:240,textAlign:"center"},children:[D.jsx("p",{className:"text-lg font-medium",children:"Border Beam"}),D.jsx("p",{className:"mt-1 text-sm text-[#8f877c]",children:"光沿边框走一圈"})]})})}),"libraries-thinking-orbs":()=>D.jsx(hv,{}),"libraries-metal-fx":()=>D.jsx(Ur,{children:D.jsx(Ru,{variant:"button",preset:"chromatic",theme:"dark",children:D.jsx("button",{type:"button",className:"pointer-events-auto rounded-full px-6 py-2.5 text-sm font-medium text-white",style:{background:"#161410"},children:"Upgrade"})})}),"libraries-liquid-gooey":()=>D.jsx(uv,{}),"libraries-voice-glow":()=>D.jsx(fv,{}),"libraries-bot-avatars":()=>D.jsx(dv,{}),"libraries-img-fx":()=>D.jsx(Ur,{children:D.jsx(Tf,{preset:"pixels-organic",images:["./previews/fx-a.svg","./previews/fx-b.svg"],children:D.jsx("div",{style:{width:260,height:200,borderRadius:20,background:"#1c1a15"}})})})};export{xv as librariesPreviews};
