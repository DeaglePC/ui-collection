import{r as ie,j as K,b as C2}from"../app.js";import{S as xo}from"./stage-QNNxArYT.js";const R2={sm:{borderRadius:32,borderWidth:1,width:70,height:36},md:{borderRadius:16,borderWidth:1},line:{borderRadius:16,borderWidth:1},"pulse-outside":{borderRadius:16,borderWidth:1},"pulse-inner":{borderRadius:16,borderWidth:1}},P2={sm:{dark:{strokeOpacity:.46,innerOpacity:.24,bloomOpacity:.38,innerShadow:"rgba(255, 255, 255, 0.3)",saturation:1.2},light:{strokeOpacity:.12,innerOpacity:.3,bloomOpacity:.16,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.8}},md:{dark:{strokeOpacity:.26,innerOpacity:.42,bloomOpacity:.24,innerShadow:"rgba(255, 255, 255, 0.27)",saturation:1.2},light:{strokeOpacity:.12,innerOpacity:.26,bloomOpacity:.34,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.5}},line:{dark:{strokeOpacity:1.14,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(255, 255, 255, 0.1)",saturation:1.2},light:{strokeOpacity:.16,innerOpacity:.32,bloomOpacity:.3,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.95}},"pulse-outside":{dark:{strokeOpacity:.94,innerOpacity:.34,bloomOpacity:.3,innerShadow:"transparent",saturation:1.2,brightness:1.9,hairlineOpacity:0},light:{strokeOpacity:1.96,innerOpacity:1.04,bloomOpacity:.42,innerShadow:"transparent",saturation:.6,brightness:1.7,hairlineOpacity:0}},"pulse-inner":{dark:{strokeOpacity:1.54,innerOpacity:.44,bloomOpacity:.66,innerShadow:"transparent",saturation:1.2,brightness:.75},light:{strokeOpacity:.32,innerOpacity:.4,bloomOpacity:.8,innerShadow:"transparent",saturation:.75,brightness:1.3}}},Do={colorful:{border:[{color:"rgb(255, 50, 100)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(40, 140, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(50, 200, 80)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(30, 185, 170)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(100, 70, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(40, 140, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 120, 40)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(240, 50, 180)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(180, 40, 240)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 60, 80)",secondary:"rgba(40, 190, 180, 0.98)"},spikeLt:{primary:"rgb(200, 30, 60)",secondary:"rgb(20, 150, 140)"}},mono:{border:[{color:"rgb(180, 180, 180)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(140, 140, 140)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(160, 160, 160)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(130, 130, 130)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(170, 170, 170)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(150, 150, 150)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(190, 190, 190)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(145, 145, 145)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(165, 165, 165)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(200, 200, 200)",secondary:"rgb(170, 170, 170)"},spikeLt:{primary:"rgb(80, 80, 80)",secondary:"rgb(120, 120, 120)"}},ocean:{border:[{color:"rgb(100, 80, 220)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(60, 120, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(80, 100, 200)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(50, 140, 220)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(120, 80, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(70, 130, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(140, 100, 240)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(90, 110, 230)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(130, 70, 255)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(100, 120, 255)",secondary:"rgba(130, 100, 220, 0.98)"},spikeLt:{primary:"rgb(60, 60, 180)",secondary:"rgb(80, 100, 200)"}},sunset:{border:[{color:"rgb(255, 80, 50)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 160, 40)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(255, 120, 60)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(255, 200, 50)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(255, 100, 80)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(255, 180, 60)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 60, 60)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(255, 140, 50)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(255, 90, 70)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 140, 80)",secondary:"rgba(255, 100, 60, 0.98)"},spikeLt:{primary:"rgb(200, 80, 40)",secondary:"rgb(220, 120, 30)"}},forest:{border:[{color:"rgb(46, 160, 90)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(30, 190, 120)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(70, 180, 70)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(20, 150, 130)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(90, 200, 80)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(40, 170, 110)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(120, 210, 70)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(35, 145, 100)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(60, 195, 140)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(46, 160, 90)",secondary:"rgba(30, 190, 120,, 0.98)"},spikeLt:{primary:"rgb(33, 115, 65)",secondary:"rgb(22, 137, 86)"}},candy:{border:[{color:"rgb(240, 70, 170)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 90, 140)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(215, 60, 200)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(255, 110, 180)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(200, 80, 240)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(250, 60, 150)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(230, 120, 220)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(245, 85, 165)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(210, 70, 230)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(240, 70, 170)",secondary:"rgba(255, 90, 140,, 0.98)"},spikeLt:{primary:"rgb(173, 50, 122)",secondary:"rgb(184, 65, 101)"}},ice:{border:[{color:"rgb(90, 200, 240)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(60, 175, 230)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(130, 220, 250)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(70, 190, 215)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(110, 210, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(50, 165, 220)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(150, 230, 250)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(85, 195, 235)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(65, 180, 245)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(90, 200, 240)",secondary:"rgba(60, 175, 230,, 0.98)"},spikeLt:{primary:"rgb(65, 144, 173)",secondary:"rgb(43, 126, 166)"}},gold:{border:[{color:"rgb(240, 190, 60)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 210, 90)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(225, 165, 40)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(250, 200, 70)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(255, 225, 120)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(230, 175, 50)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(245, 205, 85)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(215, 155, 35)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(255, 215, 100)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(240, 190, 60)",secondary:"rgba(255, 210, 90,, 0.98)"},spikeLt:{primary:"rgb(173, 137, 43)",secondary:"rgb(184, 151, 65)"}}},j1={colorful:{border:[{color:"rgb(50, 200, 80)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(30, 185, 170)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 120, 40)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(100, 70, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(240, 50, 180)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(180, 40, 240)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(40, 140, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 50, 100)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(50, 200, 80, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(30, 185, 170, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 120, 40, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(100, 70, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(240, 50, 180, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(180, 40, 240, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(40, 140, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 50, 100, 0.3)",pos:"100% 27%",size:"11px 12px"}]},mono:{border:[{color:"rgb(160, 160, 160)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(140, 140, 140)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(180, 180, 180)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(150, 150, 150)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(170, 170, 170)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(155, 155, 155)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(145, 145, 145)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(165, 165, 165)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(160, 160, 160, 0.25)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(140, 140, 140, 0.22)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(180, 180, 180, 0.17)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(150, 150, 150, 0.17)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(170, 170, 170, 0.15)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(155, 155, 155, 0.20)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(145, 145, 145, 0.15)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(165, 165, 165, 0.15)",pos:"100% 27%",size:"11px 12px"}]},ocean:{border:[{color:"rgb(60, 140, 200)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(50, 120, 180)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(100, 80, 220)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(80, 100, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(120, 70, 240)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(90, 80, 220)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(70, 110, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(110, 90, 230)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(60, 140, 200, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(50, 120, 180, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(100, 80, 220, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(80, 100, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(120, 70, 240, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(90, 80, 220, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(70, 110, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(110, 90, 230, 0.3)",pos:"100% 27%",size:"11px 12px"}]},sunset:{border:[{color:"rgb(255, 180, 50)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 150, 40)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 80, 60)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(255, 100, 80)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(255, 60, 80)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(255, 120, 60)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(255, 200, 50)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 90, 70)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(255, 180, 50, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(255, 150, 40, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 80, 60, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(255, 100, 80, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(255, 60, 80, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(255, 120, 60, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(255, 200, 50, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 90, 70, 0.3)",pos:"100% 27%",size:"11px 12px"}]},forest:{border:[{color:"rgb(46, 160, 90)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(30, 190, 120)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(70, 180, 70)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(20, 150, 130)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(90, 200, 80)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(40, 170, 110)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(120, 210, 70)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(35, 145, 100)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(60, 195, 140,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(46, 160, 90,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(30, 190, 120,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(70, 180, 70,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(20, 150, 130,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(90, 200, 80,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(40, 170, 110,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(120, 210, 70,, 0.3)",pos:"100% 27%",size:"11px 12px"}]},candy:{border:[{color:"rgb(240, 70, 170)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 90, 140)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(215, 60, 200)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(255, 110, 180)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(200, 80, 240)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(250, 60, 150)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(230, 120, 220)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(245, 85, 165)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(210, 70, 230,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(240, 70, 170,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 90, 140,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(215, 60, 200,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(255, 110, 180,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(200, 80, 240,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(250, 60, 150,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(230, 120, 220,, 0.3)",pos:"100% 27%",size:"11px 12px"}]},ice:{border:[{color:"rgb(90, 200, 240)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(60, 175, 230)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(130, 220, 250)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(70, 190, 215)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(110, 210, 255)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(50, 165, 220)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(150, 230, 250)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(85, 195, 235)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(65, 180, 245,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(90, 200, 240,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(60, 175, 230,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(130, 220, 250,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(70, 190, 215,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(110, 210, 255,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(50, 165, 220,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(150, 230, 250,, 0.3)",pos:"100% 27%",size:"11px 12px"}]},gold:{border:[{color:"rgb(240, 190, 60)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 210, 90)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(225, 165, 40)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(250, 200, 70)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(255, 225, 120)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(230, 175, 50)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(245, 205, 85)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(215, 155, 35)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(255, 215, 100,, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(240, 190, 60,, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 210, 90,, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(225, 165, 40,, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(250, 200, 70,, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(255, 225, 120,, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(230, 175, 50,, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(245, 205, 85,, 0.3)",pos:"100% 27%",size:"11px 12px"}]}};function D2(t){return j1[t].border.map(e=>`radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `)}function I2(t){return j1[t].inner.map(e=>`radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `)}function L2(t){return Do[t].border.map(e=>`radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `)}function F2(t){const e=Do[t],n=t==="mono"?.225:.45;return e.border.map(i=>{const a=i.color.replace("rgb(","rgba(").replace(")",`, ${n})`);return`radial-gradient(ellipse ${i.size.split(" ").map(r=>{const o=parseInt(r);return`${Math.round(o*.9)}px`}).join(" ")} at ${i.pos}, ${a}, transparent)`}).join(`,
    `)}function z2(t,e){const n=Do[t];return e?n.spike:n.spikeLt}const U2={colorful:{dark:[{color:"rgb(255, 50, 100)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 180, 220)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 160, 30)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(240, 50, 180)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(30, 185, 170)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(255, 50, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 140, 255)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(30, 185, 170)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(255, 120, 40)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(240, 50, 180)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},mono:{dark:[{color:"rgb(200, 200, 200)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(170, 170, 170)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(155, 155, 155)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(185, 185, 185)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(165, 165, 165)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(180, 180, 180)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(160, 160, 160)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(175, 175, 175)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(190, 190, 190)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(100, 100, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(80, 80, 80)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(90, 90, 90)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(70, 70, 70)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(85, 85, 85)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(95, 95, 95)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(75, 75, 75)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(105, 105, 105)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(65, 65, 65)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},ocean:{dark:[{color:"rgb(100, 80, 220)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(60, 120, 255)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(80, 100, 200)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(130, 70, 255)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(70, 130, 255)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(120, 80, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(90, 110, 230)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(110, 90, 240)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(140, 100, 255)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(80, 60, 200)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(50, 100, 220)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(70, 90, 190)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(110, 60, 220)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(60, 110, 230)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 240)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(80, 100, 210)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(90, 80, 225)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(120, 90, 245)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},sunset:{dark:[{color:"rgb(255, 100, 60)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 180, 50)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(255, 140, 70)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(255, 80, 80)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 200, 60)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(255, 120, 50)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(255, 160, 80)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(255, 90, 60)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(255, 70, 70)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(220, 80, 40)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(230, 150, 30)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(210, 110, 50)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(200, 60, 60)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(220, 170, 40)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(210, 100, 30)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(230, 130, 60)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(190, 70, 50)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(180, 50, 50)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},forest:{dark:[{color:"rgb(46, 160, 90)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(30, 190, 120)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(70, 180, 70)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(20, 150, 130)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(90, 200, 80)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(40, 170, 110)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(120, 210, 70)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(35, 145, 100)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(60, 195, 140)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(33, 115, 65)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(22, 137, 86)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(50, 130, 50)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(14, 108, 94)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(65, 144, 58)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(29, 122, 79)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(86, 151, 50)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(25, 104, 72)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(43, 140, 101)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},candy:{dark:[{color:"rgb(240, 70, 170)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 90, 140)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(215, 60, 200)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(255, 110, 180)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(200, 80, 240)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(250, 60, 150)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(230, 120, 220)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(245, 85, 165)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(210, 70, 230)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(173, 50, 122)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(184, 65, 101)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(155, 43, 144)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(184, 79, 130)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(144, 58, 173)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(180, 43, 108)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(166, 86, 158)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(176, 61, 119)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(151, 50, 166)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},ice:{dark:[{color:"rgb(90, 200, 240)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(60, 175, 230)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(130, 220, 250)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(70, 190, 215)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(110, 210, 255)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(50, 165, 220)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(150, 230, 250)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(85, 195, 235)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(65, 180, 245)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(65, 144, 173)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(43, 126, 166)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(94, 158, 180)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(50, 137, 155)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(79, 151, 184)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(36, 119, 158)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(108, 166, 180)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(61, 140, 169)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(47, 130, 176)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},gold:{dark:[{color:"rgb(240, 190, 60)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 210, 90)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(225, 165, 40)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(250, 200, 70)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 225, 120)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(230, 175, 50)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(245, 205, 85)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(215, 155, 35)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(255, 215, 100)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(173, 137, 43)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(184, 151, 65)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(162, 119, 29)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(180, 144, 50)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(184, 162, 86)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(166, 126, 36)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(176, 148, 61)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(155, 112, 25)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(184, 155, 72)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]}};function N2(t,e,n){return U2[t][e?"dark":"light"].map(i=>{const a=i.offsetX===0?"":i.offsetX>0?` + ${i.offsetX}px`:` - ${Math.abs(i.offsetX)}px`,r=i.offsetY===0?"":i.offsetY>0?` + ${i.offsetY}px`:` - ${Math.abs(i.offsetY)}px`;return`radial-gradient(ellipse calc(${i.sizeW}px * var(--beam-w-${n})) calc(${i.sizeH}px * var(--beam-h-${n})) at calc(var(--beam-x-${n}) * 100%${a}) calc(100%${r}), ${i.color}, transparent)`}).join(`,
       `)}const O2={colorful:[{color:"rgba(255, 50, 100, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(40, 180, 220, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(50, 200, 80, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(180, 40, 240, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 160, 30, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(100, 70, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(40, 140, 255, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(240, 50, 180, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(30, 185, 170, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],mono:[{color:"rgba(200, 200, 200, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(170, 170, 170, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(155, 155, 155, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(185, 185, 185, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(165, 165, 165, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(180, 180, 180, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(160, 160, 160, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(175, 175, 175, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(190, 190, 190, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],ocean:[{color:"rgba(100, 80, 220, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(60, 120, 255, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(80, 100, 200, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(130, 70, 255, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(70, 130, 255, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(120, 80, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(90, 110, 230, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(110, 90, 240, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(140, 100, 255, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],sunset:[{color:"rgba(255, 100, 60, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 180, 50, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(255, 140, 70, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(255, 80, 80, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 200, 60, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(255, 120, 50, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(255, 160, 80, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(255, 90, 60, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(255, 70, 70, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],forest:[{color:"rgba(46, 160, 90,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(30, 190, 120,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(70, 180, 70,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(20, 150, 130,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(90, 200, 80,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(40, 170, 110,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(120, 210, 70,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(35, 145, 100,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(60, 195, 140,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],candy:[{color:"rgba(240, 70, 170,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 90, 140,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(215, 60, 200,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(255, 110, 180,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(200, 80, 240,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(250, 60, 150,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(230, 120, 220,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(245, 85, 165,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(210, 70, 230,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],ice:[{color:"rgba(90, 200, 240,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(60, 175, 230,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(130, 220, 250,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(70, 190, 215,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(110, 210, 255,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(50, 165, 220,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(150, 230, 250,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(85, 195, 235,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(65, 180, 245,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],gold:[{color:"rgba(240, 190, 60,, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 210, 90,, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(225, 165, 40,, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(250, 200, 70,, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 225, 120,, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(230, 175, 50,, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(245, 205, 85,, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(215, 155, 35,, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(255, 215, 100,, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}]};function $2(t,e){return O2[t].map(n=>{const i=n.offsetX===0?"":n.offsetX>0?` + ${n.offsetX}px`:` - ${Math.abs(n.offsetX)}px`,a=n.offsetY===0?"":` - ${Math.abs(n.offsetY)}px`;return`radial-gradient(ellipse calc(${n.sizeW}px * var(--beam-w-${e})) calc(${n.sizeH}px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%${i}) calc(100%${a}), ${n.color}, transparent)`}).join(`,
    `)}const k2={colorful:{dark:{spikes:[{color1:"rgb(100, 70, 255)",color2:"rgba(100, 70, 255, 1)"},{color1:"rgba(255, 170, 40, 0.59)",color2:"rgba(255, 170, 40, 0.29)"},{color1:"rgb(50, 200, 100)",color2:"rgba(50, 200, 100, 1)"},{color1:"rgba(200, 50, 240, 0.91)",color2:"rgba(200, 50, 240, 0.45)"},{color1:"rgb(40, 140, 255)",color2:"rgba(40, 140, 255, 1)"}]},light:{spikes:[{color1:"rgb(80, 50, 200)",color2:"rgba(80, 50, 200, 0.8)"},{color1:"rgba(210, 130, 0, 0.7)",color2:"rgba(210, 130, 0, 0.46)"},{color1:"rgb(30, 160, 70)",color2:"rgba(30, 160, 70, 0.82)"},{color1:"rgb(160, 30, 190)",color2:"rgba(160, 30, 190, 0.7)"},{color1:"rgb(30, 100, 200)",color2:"rgba(30, 100, 200, 0.78)"}]}},mono:{dark:{spikes:[{color1:"rgb(200, 200, 200)",color2:"rgba(200, 200, 200, 1)"},{color1:"rgba(180, 180, 180, 0.59)",color2:"rgba(180, 180, 180, 0.29)"},{color1:"rgb(190, 190, 190)",color2:"rgba(190, 190, 190, 1)"},{color1:"rgba(170, 170, 170, 0.91)",color2:"rgba(170, 170, 170, 0.45)"},{color1:"rgb(185, 185, 185)",color2:"rgba(185, 185, 185, 1)"}]},light:{spikes:[{color1:"rgb(80, 80, 80)",color2:"rgba(80, 80, 80, 0.8)"},{color1:"rgba(100, 100, 100, 0.7)",color2:"rgba(100, 100, 100, 0.46)"},{color1:"rgb(70, 70, 70)",color2:"rgba(70, 70, 70, 0.82)"},{color1:"rgb(90, 90, 90)",color2:"rgba(90, 90, 90, 0.7)"},{color1:"rgb(85, 85, 85)",color2:"rgba(85, 85, 85, 0.78)"}]}},ocean:{dark:{spikes:[{color1:"rgb(100, 80, 255)",color2:"rgb(100, 80, 255)"},{color1:"rgba(80, 130, 220, 0.59)",color2:"rgba(80, 130, 220, 0.29)"},{color1:"rgb(60, 100, 255)",color2:"rgb(60, 100, 255)"},{color1:"rgba(90, 120, 200, 0.91)",color2:"rgba(90, 120, 200, 0.45)"},{color1:"rgb(120, 90, 255)",color2:"rgb(120, 90, 255)"}]},light:{spikes:[{color1:"rgb(50, 40, 180)",color2:"rgba(50, 40, 180, 0.8)"},{color1:"rgba(40, 80, 200, 0.7)",color2:"rgba(40, 80, 200, 0.46)"},{color1:"rgb(30, 50, 190)",color2:"rgba(30, 50, 190, 0.82)"},{color1:"rgb(60, 90, 180)",color2:"rgba(60, 90, 180, 0.7)"},{color1:"rgb(70, 60, 200)",color2:"rgba(70, 60, 200, 0.78)"}]}},sunset:{dark:{spikes:[{color1:"rgb(255, 100, 80)",color2:"rgb(255, 100, 80)"},{color1:"rgba(255, 150, 80, 0.59)",color2:"rgba(255, 150, 80, 0.29)"},{color1:"rgb(255, 80, 60)",color2:"rgb(255, 80, 60)"},{color1:"rgba(255, 120, 50, 0.91)",color2:"rgba(255, 120, 50, 0.45)"},{color1:"rgb(255, 140, 70)",color2:"rgb(255, 140, 70)"}]},light:{spikes:[{color1:"rgb(200, 60, 30)",color2:"rgba(200, 60, 30, 0.8)"},{color1:"rgba(220, 100, 20, 0.7)",color2:"rgba(220, 100, 20, 0.46)"},{color1:"rgb(180, 40, 20)",color2:"rgba(180, 40, 20, 0.82)"},{color1:"rgb(210, 80, 10)",color2:"rgba(210, 80, 10, 0.7)"},{color1:"rgb(190, 70, 30)",color2:"rgba(190, 70, 30, 0.78)"}]}},forest:{dark:{spikes:[{color1:"rgb(46, 160, 90)",color2:"rgb(30, 190, 120)"},{color1:"rgba(70, 180, 70,, 0.59)",color2:"rgba(20, 150, 130,, 0.29)"},{color1:"rgb(90, 200, 80)",color2:"rgb(40, 170, 110)"},{color1:"rgba(120, 210, 70,, 0.91)",color2:"rgba(35, 145, 100,, 0.45)"},{color1:"rgb(60, 195, 140)",color2:"rgb(46, 160, 90)"}]},light:{spikes:[{color1:"rgb(33, 115, 65)",color2:"rgba(22, 137, 86,, 0.8)"},{color1:"rgba(50, 130, 50,, 0.7)",color2:"rgba(14, 108, 94,, 0.46)"},{color1:"rgb(65, 144, 58)",color2:"rgba(29, 122, 79,, 0.82)"},{color1:"rgb(86, 151, 50)",color2:"rgba(25, 104, 72,, 0.7)"},{color1:"rgb(43, 140, 101)",color2:"rgba(33, 115, 65,, 0.78)"}]}},candy:{dark:{spikes:[{color1:"rgb(240, 70, 170)",color2:"rgb(255, 90, 140)"},{color1:"rgba(215, 60, 200,, 0.59)",color2:"rgba(255, 110, 180,, 0.29)"},{color1:"rgb(200, 80, 240)",color2:"rgb(250, 60, 150)"},{color1:"rgba(230, 120, 220,, 0.91)",color2:"rgba(245, 85, 165,, 0.45)"},{color1:"rgb(210, 70, 230)",color2:"rgb(240, 70, 170)"}]},light:{spikes:[{color1:"rgb(173, 50, 122)",color2:"rgba(184, 65, 101,, 0.8)"},{color1:"rgba(155, 43, 144,, 0.7)",color2:"rgba(184, 79, 130,, 0.46)"},{color1:"rgb(144, 58, 173)",color2:"rgba(180, 43, 108,, 0.82)"},{color1:"rgb(166, 86, 158)",color2:"rgba(176, 61, 119,, 0.7)"},{color1:"rgb(151, 50, 166)",color2:"rgba(173, 50, 122,, 0.78)"}]}},ice:{dark:{spikes:[{color1:"rgb(90, 200, 240)",color2:"rgb(60, 175, 230)"},{color1:"rgba(130, 220, 250,, 0.59)",color2:"rgba(70, 190, 215,, 0.29)"},{color1:"rgb(110, 210, 255)",color2:"rgb(50, 165, 220)"},{color1:"rgba(150, 230, 250,, 0.91)",color2:"rgba(85, 195, 235,, 0.45)"},{color1:"rgb(65, 180, 245)",color2:"rgb(90, 200, 240)"}]},light:{spikes:[{color1:"rgb(65, 144, 173)",color2:"rgba(43, 126, 166,, 0.8)"},{color1:"rgba(94, 158, 180,, 0.7)",color2:"rgba(50, 137, 155,, 0.46)"},{color1:"rgb(79, 151, 184)",color2:"rgba(36, 119, 158,, 0.82)"},{color1:"rgb(108, 166, 180)",color2:"rgba(61, 140, 169,, 0.7)"},{color1:"rgb(47, 130, 176)",color2:"rgba(65, 144, 173,, 0.78)"}]}},gold:{dark:{spikes:[{color1:"rgb(240, 190, 60)",color2:"rgb(255, 210, 90)"},{color1:"rgba(225, 165, 40,, 0.59)",color2:"rgba(250, 200, 70,, 0.29)"},{color1:"rgb(255, 225, 120)",color2:"rgb(230, 175, 50)"},{color1:"rgba(245, 205, 85,, 0.91)",color2:"rgba(215, 155, 35,, 0.45)"},{color1:"rgb(255, 215, 100)",color2:"rgb(240, 190, 60)"}]},light:{spikes:[{color1:"rgb(173, 137, 43)",color2:"rgba(184, 151, 65,, 0.8)"},{color1:"rgba(162, 119, 29,, 0.7)",color2:"rgba(180, 144, 50,, 0.46)"},{color1:"rgb(184, 162, 86)",color2:"rgba(166, 126, 36,, 0.82)"},{color1:"rgb(176, 148, 61)",color2:"rgba(155, 112, 25,, 0.7)"},{color1:"rgb(184, 155, 72)",color2:"rgba(173, 137, 43,, 0.78)"}]}}};function ac(t,e){const n=t.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*[\d.]+\s*\)$/);if(n)return`rgba(${n[1]}, ${n[2]}, ${n[3]}, ${e})`;const i=t.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return i?`rgba(${i[1]}, ${i[2]}, ${i[3]}, ${e})`:t}function Hr(t,e){const n=t.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);if(n)return`rgba(${n[1]}, ${n[2]}, ${n[3]}, ${(parseFloat(n[4])*e).toFixed(2)})`;const i=t.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return i?`rgba(${i[1]}, ${i[2]}, ${i[3]}, ${e.toFixed(2)})`:t}function B2(t,e,n){const i=z2(t,e),a=k2[t][e?"dark":"light"],r=t==="mono",o=r?.14:1,s=r?Hr(i.primary,.14):i.primary,l=r?Hr(i.primary,.09):i.primary,c=r?Hr(i.secondary,.12):i.secondary,f=r?ac(i.secondary,.06):ac(i.secondary,.49),h=a.spikes.map(A=>r?{color1:Hr(A.color1,o),color2:Hr(A.color2,o*.7)}:A),u=r?"12px":"0.8px",d=r?"14px":"2px",g=r?"12px":"1.2px",x=r?"10px":"0.6px",m=r?"42px":"92px",p=r?"38px":"72px",b=r?"40px":"85px",_=r?"32px":"60px",E=r?"12px":"1px",M=r?"rgba(255, 255, 255, 0.5)":"rgba(255, 255, 255, 1)",v=r?"rgba(255, 255, 255, 0.45)":"rgba(255, 255, 255, 0.9)",S=r?"rgba(255, 255, 255, 0.25)":"rgba(255, 255, 255, 0.5)",T=r?"rgba(255, 255, 255, 0.15)":"rgba(255, 255, 255, 0.3)",y=r?"rgba(255, 255, 255, 0.06)":"rgba(255, 255, 255, 0.12)",w=r?"rgba(255, 255, 255, 0.015)":"rgba(255, 255, 255, 0.03)";if(e)return`radial-gradient(ellipse calc(${u} * var(--beam-spike-${n}) * var(--beam-spike-mul, 1)) calc(${m} * var(--beam-h-${n}) * var(--beam-spike-mul, 1)) at 8% calc(100% - 2px), ${s}, ${l} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${n}) * var(--beam-spike-mul, 1)) calc(35px * var(--beam-h-${n}) * var(--beam-spike-mul, 1)) at 22% calc(100% - 4px), ${c}, ${f} 50%, transparent 95%),
       radial-gradient(ellipse calc(${d} * (2 - var(--beam-spike-${n})) * var(--beam-spike-mul, 1)) calc(${p} * var(--beam-h-${n}) * var(--beam-spike-mul, 1)) at 36% calc(100% - 3px), ${h[0].color1}, ${h[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${n}) * var(--beam-spike-mul, 1)) calc(28px * var(--beam-h-${n}) * var(--beam-spike-mul, 1)) at 50% calc(100% - 2px), ${h[1].color1}, ${h[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${g} * (2 - var(--beam-spike2-${n})) * var(--beam-spike-mul, 1)) calc(${b} * var(--beam-h-${n}) * var(--beam-spike-mul, 1)) at 64% calc(100% - 4px), ${h[2].color1}, ${h[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${n}) * var(--beam-spike-mul, 1)) calc(45px * var(--beam-h-${n}) * var(--beam-spike-mul, 1)) at 78% calc(100% - 2px), ${h[3].color1}, ${h[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${x} * (2 - var(--beam-spike-${n})) * var(--beam-spike-mul, 1)) calc(${_} * var(--beam-h-${n}) * var(--beam-spike-mul, 1)) at 92% calc(100% - 3px), ${h[4].color1}, ${h[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(21px * var(--beam-spike-${n})) calc(15px * var(--beam-spike2-${n})) at calc(var(--beam-x-${n}) * 100%) calc(100% + 1px), ${M} 0%, ${v} 20%, ${S} 50%, transparent 100%),
       radial-gradient(ellipse calc(42px * var(--beam-w-${n})) calc(40px * var(--beam-h-${n})) at calc(var(--beam-x-${n}) * 100%) 100%, ${T} 0%, ${y} 25%, ${w} 55%, transparent 80%)`;{const A=r?Hr(i.primary,.11):ac(i.primary,.85),C=r?Hr(i.secondary,.09):ac(i.secondary,.7);return`radial-gradient(ellipse calc(${u} * var(--beam-spike-${n}) * var(--beam-spike-mul, 1)) calc(${m} * var(--beam-h-${n}) * var(--beam-spike-mul, 1)) at 8% calc(100% - 2px), ${s}, ${A} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${n}) * var(--beam-spike-mul, 1)) calc(35px * var(--beam-h-${n}) * var(--beam-spike-mul, 1)) at 22% calc(100% - 4px), ${c}, ${C} 50%, transparent 95%),
       radial-gradient(ellipse calc(${d} * (2 - var(--beam-spike-${n})) * var(--beam-spike-mul, 1)) calc(${p} * var(--beam-h-${n}) * var(--beam-spike-mul, 1)) at 36% calc(100% - 3px), ${h[0].color1}, ${h[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${n}) * var(--beam-spike-mul, 1)) calc(28px * var(--beam-h-${n}) * var(--beam-spike-mul, 1)) at 50% calc(100% - 2px), ${h[1].color1}, ${h[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${g} * (2 - var(--beam-spike2-${n})) * var(--beam-spike-mul, 1)) calc(${b} * var(--beam-h-${n}) * var(--beam-spike-mul, 1)) at 64% calc(100% - 4px), ${h[2].color1}, ${h[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${n}) * var(--beam-spike-mul, 1)) calc(45px * var(--beam-h-${n}) * var(--beam-spike-mul, 1)) at 78% calc(100% - 2px), ${h[3].color1}, ${h[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${E} * (2 - var(--beam-spike-${n})) * var(--beam-spike-mul, 1)) calc(${_} * var(--beam-h-${n}) * var(--beam-spike-mul, 1)) at 92% calc(100% - 3px), ${h[4].color1}, ${h[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(50px * var(--beam-w-${n})) calc(32px * var(--beam-h-${n})) at calc(var(--beam-x-${n}) * 100%) calc(100%), rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.18) 30%, rgba(0, 0, 0, 0.03) 60%, transparent 85%)`}}const K1=[{region:1,quad:"tl"},{region:2,quad:"tl"},{region:3,quad:"bl"},{region:1,quad:"bl"},{region:2,quad:"br"},{region:3,quad:"br"},{region:1,quad:"tr"},{region:2,quad:"tr"},{region:3,quad:"tr"}],H2=[[65,35],[55,30],[35,65],[15,30],[173,28],[80,22],[69,28],[22,38],[47,44]],W2=[{ci:0,region:1,quad:"tl",w:84,h:48},{ci:1,region:2,quad:"tl",w:72,h:42},{ci:2,region:3,quad:"bl",w:48,h:84},{ci:4,region:2,quad:"br",w:216,h:38},{ci:5,region:3,quad:"br",w:102,h:31},{ci:6,region:1,quad:"tr",w:89,h:38},{ci:8,region:3,quad:"tr",w:62,h:58}],Ed=[{ci:0,region:1,quad:"tl",w:80,h:19,x:"27%",y:"0%"},{ci:6,region:2,quad:"tr",w:74,h:11,x:"73%",y:"-1%"},{ci:7,region:3,quad:"tr",w:15,h:44,x:"100%",y:"33%"},{ci:8,region:1,quad:"br",w:19,h:38,x:"101%",y:"72%"},{ci:4,region:2,quad:"br",w:84,h:13,x:"67%",y:"100%"},{ci:1,region:3,quad:"bl",w:60,h:21,x:"24%",y:"101%"},{ci:2,region:1,quad:"bl",w:17,h:40,x:"0%",y:"60%"},{ci:3,region:2,quad:"tl",w:13,h:32,x:"-1%",y:"28%"}],G2=[{ci:0,region:1,quad:"tl",w:110,h:30,x:"27%",y:"3%"},{ci:6,region:2,quad:"tr",w:100,h:20,x:"73%",y:"1%"},{ci:7,region:3,quad:"tr",w:26,h:62,x:"100%",y:"33%"},{ci:8,region:1,quad:"br",w:30,h:56,x:"101%",y:"72%"},{ci:4,region:2,quad:"br",w:120,h:22,x:"67%",y:"99%"},{ci:1,region:3,quad:"bl",w:88,h:32,x:"24%",y:"99%"},{ci:2,region:1,quad:"bl",w:28,h:58,x:"0%",y:"60%"}];function V2(t,e,n){const i=t.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);return`rgba(${i?`${i[1]}, ${i[2]}, ${i[3]}`:"255, 255, 255"}, var(--bop-${e}-${n}))`}function Wf(t,e,n,i,a,r,o,s){return`radial-gradient(ellipse calc(${e}px * var(--bw${i}-${s}) * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${n}px * var(--bh${i}-${s}) * var(--bgh-${s}) * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at calc(${r} + var(--bx${i}-${s})) calc(${o} + var(--by${i}-${s})), ${V2(t,a,s)}, transparent)`}function X2(t,e){return Do[t].border.map((n,i)=>{const{region:a,quad:r}=K1[i],[o,s]=n.pos.split(" "),[l,c]=n.size.split(" ").map(parseFloat);return Wf(n.color,l,c,a,r,o,s,e)}).join(`,
    `)}function Y2(t,e,n){const i=Do[t].border.map((s,l)=>{const{region:c,quad:f}=K1[l],[h,u]=s.pos.split(" "),[d,g]=H2[l];return Wf(s.color,d,g,c,f,h,u,e)}),a=n?"255, 255, 255":"0, 0, 0",r=n?.18:.08,o=[["0%","0%","tl"],["100%","0%","tr"],["0%","100%","bl"],["100%","100%","br"]].map(([s,l,c])=>`radial-gradient(ellipse 60px 60px at ${s} ${l}, rgba(${a}, calc(${r} * var(--bop-${c}-${e}))), transparent 70%)`);return[...i,...o].join(`,
    `)}function Ad(t,e,n){const i=Do[e].border;return t.map(a=>{const r=i[a.ci],[o,s]=r.pos.split(" ");return Wf(r.color,a.w,a.h,a.region,a.quad,a.x??o,a.y??s,n)}).join(`,
    `)}function Z1(t,e,n){const i=Do[e].border,a=+n.toFixed(3);return t.map(r=>{const o=i[r.ci],[s,l]=o.pos.split(" "),c=r.x??s,f=r.y??l,h=o.color.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/),u=h?`${h[1]}, ${h[2]}, ${h[3]}`:"255, 255, 255";return`radial-gradient(ellipse calc(${r.w}px * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${r.h}px * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at ${c} ${f}, rgba(${u}, ${a}), transparent)`}).join(`,
    `)}function kl(t){return`
[data-beam="${t}"][data-paused],
[data-beam="${t}"][data-paused]::after,
[data-beam="${t}"][data-paused]::before,
[data-beam="${t}"][data-paused] [data-beam-bloom] {
  animation-play-state: paused !important;
}`}function J1(t){const e=["bw1","bh1","bw2","bh2","bw3","bh3","bgh","bop-tl","bop-tr","bop-bl","bop-br"],n=["bx1","by1","bx2","by2","bx3","by3"],i=e.map(r=>`@property --${r}-${t} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}`).join(`

`),a=n.map(r=>`@property --${r}-${t} {
  syntax: "<length>";
  initial-value: 0px;
  inherits: true;
}`).join(`

`);return`${i}

${a}

@property --beam-opacity-${t} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-hue-${t} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}`}function Gf(t,e,n){const i=e==="dark",a=n/2.3;return t==="pulse-inner"?{sp:.28,dr:i?33:40,op:i?.48:.45,gh:i?.34:.22,bs:(i?1.9:2.6)*a,ss:(i?2.6:4.6)*a,ghs:(i?2.4:5.5)*a,huePeriod:16}:{sp:i?.28:.36,dr:i?14:19,op:i?.46:0,gh:i?.16:.58,bs:(i?2.3:3.7)*a,ss:(i?6.4:4.6)*a,ghs:(i?2.4:3.8)*a,huePeriod:14}}function q2(t,e){const{sp:n,dr:i,op:a,gh:r,bs:o,ss:s,ghs:l}=e;return[{prop:`--bw1-${t}`,a:1-n,b:1+n*1.1,period:s*.9,delay:0,unit:""},{prop:`--bh1-${t}`,a:1+n*.9,b:1-n*.85,period:s*1.26,delay:0,unit:""},{prop:`--bx1-${t}`,a:-i,b:i*.9,period:o*1.6,delay:0,unit:"px"},{prop:`--by1-${t}`,a:i*.55,b:-i*.7,period:o*1.6,delay:0,unit:"px"},{prop:`--bw2-${t}`,a:1+n,b:1-n*.85,period:s*1.1,delay:0,unit:""},{prop:`--bh2-${t}`,a:1-n*.8,b:1+n*1.05,period:s*.81,delay:0,unit:""},{prop:`--bx2-${t}`,a:i*.8,b:-i*.9,period:o*1.88,delay:0,unit:"px"},{prop:`--by2-${t}`,a:-i,b:i*.65,period:o*1.88,delay:0,unit:"px"},{prop:`--bw3-${t}`,a:1-n*.6,b:1+n*1.15,period:s*.98,delay:0,unit:""},{prop:`--bh3-${t}`,a:1+n*.75,b:1-n,period:s*1.4,delay:0,unit:""},{prop:`--bx3-${t}`,a:-i*.6,b:i,period:o*1.45,delay:0,unit:"px"},{prop:`--by3-${t}`,a:-i*.85,b:i*.45,period:o*1.45,delay:0,unit:"px"},{prop:`--bgh-${t}`,a:1-r,b:1+r,period:l,delay:0,unit:""},{prop:`--bop-tl-${t}`,a:1-a,b:1,period:o,delay:0,unit:""},{prop:`--bop-tr-${t}`,a:1-a,b:1,period:o*1.32,delay:o*.28,unit:""},{prop:`--bop-bl-${t}`,a:1-a,b:1,period:o*.84,delay:o*.55,unit:""},{prop:`--bop-br-${t}`,a:1-a,b:1,period:o*1.58,delay:o*.83,unit:""}]}function j2(t,e,n,i,a,r){if(t!=="pulse-inner"&&t!=="pulse-outside")return null;const o=Gf(t,e,n);return{oscillators:q2(r,o),hue:a?null:{prop:`--beam-hue-${r}`,range:360,period:o.huePeriod,continuous:!0}}}function m0(t,e,n){return`  animation: ${e}-${t} ${n}s ease forwards;`}function wr(t,e=1){return Math.max(.5,Math.round(t*e*100)/100)}function K2(t){const{size:e}=t;return e==="line"?tb(t):e==="sm"?Z2(t):e==="pulse-inner"?Q2(t):e==="pulse-outside"?eb(t):J2(t)}function Z2(t){const{id:e,borderRadius:n,borderWidth:i,duration:a,strokeOpacity:r,innerOpacity:o,bloomOpacity:s,innerShadow:l,colorVariant:c,staticColors:f,brightness:h,saturation:u,hueRange:d,theme:g,glowSize:x=1}=t,m=Math.max(0,n-i),p=c==="mono"?.5:1,b=r*p,_=o*p,E=s*p,M=f?"":`animation: beam-hue-shift-${e} 12s ease-in-out infinite;`,v=f?"":`
@keyframes beam-hue-shift-${e} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${d}deg)) brightness(${h.toFixed(2)}) saturate(${u.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${d}deg)) brightness(${h.toFixed(2)}) saturate(${u.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${d}deg)) brightness(${h.toFixed(2)}) saturate(${u.toFixed(2)}); }
}`,S=g==="dark",T=S?`conic-gradient(
        from var(--beam-angle-${e}),
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
        from var(--beam-angle-${e}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,y=D2(c),w=I2(c),A=S?`conic-gradient(
        from var(--beam-angle-${e}),
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
        from var(--beam-angle-${e}),
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
      )`,C=`conic-gradient(
    from var(--beam-angle-${e}),
    transparent 0%, transparent 22%,
    rgba(255, 255, 255, 0.12) 28%, rgba(255, 255, 255, 0.4) 36%,
    white 46%, white 82%,
    rgba(255, 255, 255, 0.4) 88%, rgba(255, 255, 255, 0.12) 94%,
    transparent 97%, transparent 100%
  )`;return`
@property --beam-angle-${e} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${e}"] {
  position: relative;
  border-radius: ${n}px;
  overflow: hidden;
}

[data-beam="${e}"][data-active] {
  animation:
    beam-spin-${e} ${a}s linear infinite,
    beam-fade-in-${e} 0.6s ease forwards;
}

[data-beam="${e}"][data-fading] {
  animation:
    beam-spin-${e} ${a}s linear infinite,
    beam-fade-out-${e} 0.5s ease forwards;
}

[data-beam="${e}"][data-active]::after,
[data-beam="${e}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${m}px;
  padding: ${i}px;
  clip-path: inset(0 round ${n}px);
  background: ${T},${y};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${e}),
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
      from var(--beam-angle-${e}),
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
  opacity: calc(var(--beam-opacity-${e}) * ${b.toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${M}
}

[data-beam="${e}"][data-active]::before,
[data-beam="${e}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${n}px;
  clip-path: inset(0 round ${n}px);
  background: ${w};
  box-shadow: inset 0 0 5px 1px ${l};
  -webkit-mask-image: ${C};
  -webkit-mask-composite: source-over;
  mask-image: ${C};
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${e}) * ${_.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${M}
}

[data-beam="${e}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${m}px;
  clip-path: inset(0 round ${n}px);
  background: ${A};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${i}px;
  filter: blur(${wr(8,x)}px) brightness(${h.toFixed(2)}) saturate(${u.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${e}"][data-active] [data-beam-bloom],
[data-beam="${e}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${e}) * ${E.toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
}

@keyframes beam-spin-${e} {
  to { --beam-angle-${e}: 360deg; }
}

@keyframes beam-fade-in-${e} {
  to { --beam-opacity-${e}: 1; }
}

@keyframes beam-fade-out-${e} {
  from { --beam-opacity-${e}: 1; }
  to { --beam-opacity-${e}: 0; }
}
${v}
${kl(e)}
`}function J2(t){const{id:e,borderRadius:n,borderWidth:i,duration:a,strokeOpacity:r,innerOpacity:o,bloomOpacity:s,innerShadow:l,colorVariant:c,staticColors:f,brightness:h,saturation:u,hueRange:d,theme:g,glowSize:x=1}=t,m=Math.max(0,n-i),p=c==="mono"?.5:1,b=r*p,_=o*p,E=s*p,M=f?"":`animation: beam-hue-shift-${e} 12s ease-in-out infinite;`,v=f?"":`
@keyframes beam-hue-shift-${e} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${d}deg)) brightness(${h.toFixed(2)}) saturate(${u.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${d}deg)) brightness(${h.toFixed(2)}) saturate(${u.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${d}deg)) brightness(${h.toFixed(2)}) saturate(${u.toFixed(2)}); }
}`,S=g==="dark",T=S?`conic-gradient(
        from var(--beam-angle-${e}),
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
        from var(--beam-angle-${e}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,y=L2(c),w=F2(c),A=S?`conic-gradient(
        from var(--beam-angle-${e}),
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
        from var(--beam-angle-${e}),
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
@property --beam-angle-${e} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${e}"] {
  position: relative;
  border-radius: ${n}px;
  overflow: hidden;
}

[data-beam="${e}"][data-active] {
  animation:
    beam-spin-${e} ${a}s linear infinite,
    beam-fade-in-${e} 0.6s ease forwards;
}

[data-beam="${e}"][data-fading] {
  animation:
    beam-spin-${e} ${a}s linear infinite,
    beam-fade-out-${e} 0.5s ease forwards;
}

[data-beam="${e}"][data-active]::after,
[data-beam="${e}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${m}px;
  padding: ${i}px;
  clip-path: inset(0 round ${n}px);
  background: ${T},${y};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${e}),
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
      from var(--beam-angle-${e}),
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
  opacity: calc(var(--beam-opacity-${e}) * ${b.toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${M}
}

[data-beam="${e}"][data-active]::before,
[data-beam="${e}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${n}px;
  background: ${w};
  box-shadow: inset 0 0 9px 1px ${l};
  -webkit-mask-image:
    conic-gradient(
      from var(--beam-angle-${e}),
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
      from var(--beam-angle-${e}),
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
  opacity: calc(var(--beam-opacity-${e}) * ${_.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  clip-path: inset(0 round ${n}px);
  ${M}
}

[data-beam="${e}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${m}px;
  clip-path: inset(0 round ${n}px);
  background: ${A};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${i}px;
  filter: blur(${wr(8,x)}px) brightness(${h.toFixed(2)}) saturate(${u.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${e}"][data-active] [data-beam-bloom],
[data-beam="${e}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${e}) * ${E.toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
}

@keyframes beam-spin-${e} {
  to { --beam-angle-${e}: 360deg; }
}

@keyframes beam-fade-in-${e} {
  to { --beam-opacity-${e}: 1; }
}

@keyframes beam-fade-out-${e} {
  from { --beam-opacity-${e}: 1; }
  to { --beam-opacity-${e}: 0; }
}
${v}
${kl(e)}
`}function Q2(t){const{id:e,borderRadius:n,borderWidth:i,duration:a,strokeOpacity:r,innerOpacity:o,bloomOpacity:s,colorVariant:l,staticColors:c,brightness:f,saturation:h,hueRange:u,theme:d,glowSize:g=1}=t,x=d==="dark",m=l==="mono"?.5:1,p=(r*m).toFixed(2),b=(o*m).toFixed(2),_=(s*m).toFixed(2),{op:E}=Gf("pulse-inner",d,a),M=wr(8,g),v=f.toFixed(2),S=h.toFixed(2),T=c?`filter: brightness(${v}) saturate(${S});`:`filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${e}))) brightness(${v}) saturate(${S});`,y=c?`filter: blur(${M}px) brightness(${v}) saturate(${S});`:`filter: blur(${M}px) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${e}))) brightness(${v}) saturate(${S});`,w=X2(l,e),A=Y2(l,e,x),C=Z1(W2,l,1-E*.5);return`
${J1(e)}

[data-beam="${e}"] {
  position: relative;
  border-radius: ${n}px;
  overflow: hidden;
  isolation: isolate;
}

[data-beam="${e}"][data-active] {
${m0(e,"beam-fade-in",.6)}
}

[data-beam="${e}"][data-fading] {
${m0(e,"beam-fade-out",.5)}
}

[data-beam="${e}"][data-active]::after,
[data-beam="${e}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${n}px;
  padding: ${i}px;
  clip-path: inset(0 round ${n}px);
  background: ${w};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${e}) * ${p} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${T}
}

[data-beam="${e}"][data-active]::before,
[data-beam="${e}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${n}px;
  clip-path: inset(0 round ${n}px);
  background: ${A};
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
  opacity: calc(var(--beam-opacity-${e}) * ${b} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${T}
}

[data-beam="${e}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${n}px;
  clip-path: inset(0 round ${n}px);
  background: ${C};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${i}px;
  pointer-events: none;
  z-index: 3;
  will-change: opacity;
  opacity: 0;
}

[data-beam="${e}"][data-active] [data-beam-bloom],
[data-beam="${e}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${e}) * ${_} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${y}
}

@keyframes beam-fade-in-${e} { to { --beam-opacity-${e}: 1; } }
@keyframes beam-fade-out-${e} { from { --beam-opacity-${e}: 1; } to { --beam-opacity-${e}: 0; } }
${kl(e)}

@media (prefers-reduced-motion: reduce) {
  [data-beam="${e}"][data-active],
  [data-beam="${e}"][data-fading],
  [data-beam="${e}"][data-active]::after,
  [data-beam="${e}"][data-fading]::after,
  [data-beam="${e}"][data-active]::before,
  [data-beam="${e}"][data-fading]::before,
  [data-beam="${e}"][data-active] [data-beam-bloom],
  [data-beam="${e}"][data-fading] [data-beam-bloom] {
    animation: none !important;
  }
}
`}function eb(t){const{id:e,borderRadius:n,duration:i,strokeOpacity:a,innerOpacity:r,bloomOpacity:o,colorVariant:s,staticColors:l,brightness:c,saturation:f,hueRange:h,theme:u,hairlineOpacity:d=0,glowSize:g=1}=t,x=u==="dark",m=s==="mono"?.5:1,p=(a*m).toFixed(2),b=(r*m).toFixed(2),_=(o*m).toFixed(2),E=x?"70, 70, 70":"0, 0, 0",M=d.toFixed(2),v=`linear-gradient(rgba(${E}, ${M}), rgba(${E}, ${M}))`,{op:S}=Gf("pulse-outside",u,i),T=.95,y=.9,w=wr(x?3:6,g),A=wr(x?22.5:15,g),C=c.toFixed(2),R=f.toFixed(2),P=l?`filter: brightness(${C}) saturate(${R});`:`filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${e}))) brightness(${C}) saturate(${R});`,I=`brightness(var(--beam-glow-brightness, ${C})) saturate(var(--beam-glow-saturate, ${R}))`,z=l?`filter: blur(var(--beam-core-blur, ${w}px)) ${I};`:`filter: blur(var(--beam-core-blur, ${w}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${e}))) ${I};`,B=l?`filter: blur(var(--beam-bloom-blur, ${A}px)) ${I};`:`filter: blur(var(--beam-bloom-blur, ${A}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${e}))) ${I};`,F=Ad(Ed,s,e),O=Ad(Ed,s,e),k=Z1(G2,s,1-S*.5),G=d>0?`${F},
    ${v}`:F;return`
${J1(e)}

[data-beam="${e}"] {
  position: relative;
  border-radius: ${n}px;
  overflow: visible;
  isolation: isolate;
}

[data-beam="${e}"][data-active] {
${m0(e,"beam-fade-in",.6)}
}

[data-beam="${e}"][data-fading] {
${m0(e,"beam-fade-out",.5)}
}
${d>0?`
/* Idle hairline — painted above the (opaque) child in the inner 1px edge ring so
   it overlaps a standard inset component border exactly. */
[data-beam="${e}"]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${n}px;
  padding: 1px;
  clip-path: inset(0 round ${n}px);
  background: ${v};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
}
`:""}
[data-beam="${e}"][data-active]::after,
[data-beam="${e}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${n}px;
  padding: 1px;
  clip-path: inset(0 round ${n}px);
  background: ${G};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${e}) * ${p} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${P}
}

[data-beam="${e}"][data-active]::before,
[data-beam="${e}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: -10px;
  z-index: -1;
  border-radius: ${n+10}px;
  background: ${O};
  transform: scale(${T}, ${y});
  pointer-events: none;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${e}) * ${b} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${z}
}

[data-beam="${e}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: -30px;
  z-index: -1;
  border-radius: ${n+30}px;
  background: ${k};
  transform: scale(${T}, ${y});
  pointer-events: none;
  will-change: transform;
  opacity: 0;
}

[data-beam="${e}"][data-active] [data-beam-bloom],
[data-beam="${e}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${e}) * ${_} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${B}
}

@keyframes beam-fade-in-${e} { to { --beam-opacity-${e}: 1; } }
@keyframes beam-fade-out-${e} { from { --beam-opacity-${e}: 1; } to { --beam-opacity-${e}: 0; } }
${kl(e)}

@media (prefers-reduced-motion: reduce) {
  [data-beam="${e}"][data-active],
  [data-beam="${e}"][data-fading],
  [data-beam="${e}"][data-active]::after,
  [data-beam="${e}"][data-fading]::after,
  [data-beam="${e}"][data-active]::before,
  [data-beam="${e}"][data-fading]::before,
  [data-beam="${e}"][data-active] [data-beam-bloom],
  [data-beam="${e}"][data-fading] [data-beam-bloom] {
    animation: none !important;
  }
}
`}function tb(t){const{id:e,borderRadius:n,borderWidth:i,duration:a,strokeOpacity:r,innerOpacity:o,bloomOpacity:s,innerShadow:l,colorVariant:c,staticColors:f,brightness:h,saturation:u,hueRange:d,theme:g,glowSize:x=1}=t,m=Math.max(0,n-i),p=g==="dark",b=r,_=o,E=s,M=f?"":`animation: beam-hue-shift-${e} 12s ease-in-out infinite;`,v=f?"":`animation: beam-hue-shift-bloom-${e} 8s ease-in-out infinite;`,S=f?"":`
@keyframes beam-hue-shift-${e} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${d}deg)) brightness(${h.toFixed(2)}) saturate(${u.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${d}deg)) brightness(${h.toFixed(2)}) saturate(${u.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${d}deg)) brightness(${h.toFixed(2)}) saturate(${u.toFixed(2)}); }
}

@keyframes beam-hue-shift-bloom-${e} {
  0% { filter: blur(${wr(8,x)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${d+10}deg)) brightness(${h.toFixed(2)}) saturate(${u.toFixed(2)}); }
  50% { filter: blur(${wr(8,x)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) + ${d+10}deg)) brightness(${h.toFixed(2)}) saturate(${u.toFixed(2)}); }
  100% { filter: blur(${wr(8,x)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${d+10}deg)) brightness(${h.toFixed(2)}) saturate(${u.toFixed(2)}); }
}`,T=p?`radial-gradient(
        ellipse calc(24px * var(--beam-w-${e})) calc(28px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) calc(100% + 2px),
        rgba(255, 255, 255, 0.38) 0%,
        rgba(255, 255, 255, 0.12) 30%,
        transparent 65%
      )`:`radial-gradient(
        ellipse calc(35px * var(--beam-w-${e})) calc(28px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) calc(100% + 2px),
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.25) 35%,
        transparent 70%
      )`,y=N2(c,p,e),w=$2(c,e),A=B2(c,p,e),C=c==="mono"?"filter: blur(6px);":"";return`
@property --beam-x-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-w-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-h-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike2-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-edge-${e} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-opacity-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${e}"] {
  position: relative;
  border-radius: ${n}px;
  overflow: hidden;
}

[data-beam="${e}"][data-active] {
  animation:
    beam-travel-${e} ${a}s linear infinite,
    beam-edge-fade-${e} ${a}s linear infinite,
    beam-breathe-${e} ${(a*1.3).toFixed(1)}s ease-in-out infinite,
    beam-spike-${e} ${(a*1.33).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${e} ${(a*1.7).toFixed(1)}s ease-in-out infinite,
    beam-fade-in-${e} 0.6s ease forwards;
}

[data-beam="${e}"][data-fading] {
  animation:
    beam-travel-${e} ${a}s linear infinite,
    beam-edge-fade-${e} ${a}s linear infinite,
    beam-breathe-${e} ${(a*1.3).toFixed(1)}s ease-in-out infinite,
    beam-spike-${e} ${(a*1.33).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${e} ${(a*1.7).toFixed(1)}s ease-in-out infinite,
    beam-fade-out-${e} 0.5s ease forwards;
}

[data-beam="${e}"][data-active]::after,
[data-beam="${e}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${m}px;
  padding: ${i}px;
  clip-path: inset(0 round ${n}px);
  background: ${T}, ${y};
  -webkit-mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${e})) calc(60px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${e})) calc(60px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${e}) * var(--beam-edge-${e}) * ${b.toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${M}
}

[data-beam="${e}"][data-active]::before,
[data-beam="${e}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${n}px;
  background: ${w};
  box-shadow: inset 0 0 9px 1px ${l};
  -webkit-mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${e})) calc(60px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${e})) calc(60px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${e}) * var(--beam-edge-${e}) * ${_.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  clip-path: inset(0 round ${n}px);
  ${M}
}

[data-beam="${e}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${m}px;
  clip-path: inset(0 round ${n}px);
  padding: 0;
  -webkit-mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${e})) calc(110px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  -webkit-mask-composite: source-over;
  mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${e})) calc(110px * var(--beam-h-${e})) at calc(var(--beam-x-${e}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  mask-composite: add;
  background: ${A};
  ${C}
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${e}"][data-active] [data-beam-bloom],
[data-beam="${e}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${e}) * var(--beam-edge-${e}) * ${E.toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${v}
}

@keyframes beam-travel-${e} {
  0%   { --beam-x-${e}: 0.06;  --beam-w-${e}: 0.5; }
  10%  { --beam-x-${e}: 0.15;  --beam-w-${e}: 0.8; }
  20%  { --beam-x-${e}: 0.25;  --beam-w-${e}: 1.1; }
  30%  { --beam-x-${e}: 0.35;  --beam-w-${e}: 1.3; }
  40%  { --beam-x-${e}: 0.44;  --beam-w-${e}: 1.45; }
  50%  { --beam-x-${e}: 0.5;   --beam-w-${e}: 1.5; }
  60%  { --beam-x-${e}: 0.56;  --beam-w-${e}: 1.45; }
  70%  { --beam-x-${e}: 0.65;  --beam-w-${e}: 1.3; }
  80%  { --beam-x-${e}: 0.75;  --beam-w-${e}: 1.1; }
  90%  { --beam-x-${e}: 0.85;  --beam-w-${e}: 0.8; }
  100% { --beam-x-${e}: 0.94;  --beam-w-${e}: 0.5; }
}

@keyframes beam-edge-fade-${e} {
  0%    { --beam-edge-${e}: 0; }
  12.5% { --beam-edge-${e}: 0; }
  32.5% { --beam-edge-${e}: 1; }
  67.5% { --beam-edge-${e}: 1; }
  87.5% { --beam-edge-${e}: 0; }
  100%  { --beam-edge-${e}: 0; }
}

@keyframes beam-breathe-${e} {
  0%, 100% { --beam-h-${e}: 0.8; }
  25%      { --beam-h-${e}: 1.25; }
  55%      { --beam-h-${e}: 0.85; }
  80%      { --beam-h-${e}: 1.3; }
}

@keyframes beam-spike-${e} {
  0%   { --beam-spike-${e}: 0.8; }
  25%  { --beam-spike-${e}: 1.3; }
  50%  { --beam-spike-${e}: 0.9; }
  75%  { --beam-spike-${e}: 1.4; }
  100% { --beam-spike-${e}: 0.8; }
}

@keyframes beam-spike2-${e} {
  0%   { --beam-spike2-${e}: 1.2; }
  25%  { --beam-spike2-${e}: 0.7; }
  50%  { --beam-spike2-${e}: 1.4; }
  75%  { --beam-spike2-${e}: 0.8; }
  100% { --beam-spike2-${e}: 1.2; }
}

@keyframes beam-fade-in-${e} {
  to { --beam-opacity-${e}: 1; }
}

@keyframes beam-fade-out-${e} {
  from { --beam-opacity-${e}: 1; }
  to { --beam-opacity-${e}: 0; }
}
${S}
${kl(e)}
`}const g0=new Set;let bs=null,xh=0;const nb=1e3/30-2,ib=Math.PI*2;function Td(t){return(1-Math.cos(ib*t))/2}function Q1(t){if(bs=requestAnimationFrame(Q1),t-xh<nb)return;xh=t;const e=t/1e3;g0.forEach(({el:n,config:i})=>{for(const a of i.oscillators){const r=(e-a.delay)/a.period,o=a.a+(a.b-a.a)*Td(r);n.style.setProperty(a.prop,a.unit==="px"?`${o.toFixed(2)}px`:o.toFixed(4))}if(i.hue){const{prop:a,range:r,period:o,continuous:s}=i.hue,l=s?e/o%1*r:-r+2*r*Td(e/o);n.style.setProperty(a,`${l.toFixed(2)}deg`)}})}function ab(){bs==null&&(xh=0,bs=requestAnimationFrame(Q1))}function rb(){g0.size===0&&bs!=null&&(cancelAnimationFrame(bs),bs=null)}function ob(t,e){const n={el:t,config:e};return g0.add(n),ab(),()=>{g0.delete(n),rb()}}function sb(){const[t,e]=ie.useState(()=>typeof window>"u"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return ie.useEffect(()=>{if(typeof window>"u")return;const n=window.matchMedia("(prefers-color-scheme: dark)"),i=a=>{e(a.matches?"dark":"light")};return n.addEventListener("change",i),()=>n.removeEventListener("change",i)},[]),t}function lb(t,e){return t==="auto"?e:t}const cb=ie.forwardRef(function({children:t,size:e="md",colorVariant:n="colorful",theme:i="dark",staticColors:a=!1,duration:r,active:o=!0,borderRadius:s,brightness:l,saturation:c,hueRange:f=30,glowSize:h=1,strength:u=1,className:d,style:g,css:x,onActivate:m,onDeactivate:p,onAnimationEnd:b,..._},E){const M=ie.useId().replace(/:/g,"-"),v=sb(),S=ie.useRef(null),[T,y]=ie.useState(o),[w,A]=ie.useState(!1),[C,R]=ie.useState(!0),[P,I]=ie.useState(null),[z,B]=ie.useState({x:1,y:1});ie.useEffect(()=>{if(s!=null)return;const ae=S.current;if(!ae)return;const Ee=()=>{const ve=ae.firstElementChild;if(!ve)return;const me=getComputedStyle(ve),we=parseFloat(me.borderTopLeftRadius);!isNaN(we)&&we>0&&I(we)};Ee();const L=new MutationObserver(Ee);return L.observe(ae,{childList:!0,subtree:!1}),()=>L.disconnect()},[s,t]),ie.useEffect(()=>{o&&!T&&!w?y(!0):!o&&T&&!w&&A(!0)},[o,T,w]),ie.useEffect(()=>{const ae=S.current;if(!ae||typeof IntersectionObserver>"u")return;const Ee=new IntersectionObserver(L=>{for(const ve of L)R(ve.isIntersecting)},{rootMargin:"256px"});return Ee.observe(ae),()=>Ee.disconnect()},[]),ie.useEffect(()=>{if(e!=="pulse-outside"){B({x:1,y:1});return}const ae=S.current;if(!ae)return;const Ee=350,L=140,ve=.35,me=4,we=_e=>Math.max(ve,Math.min(me,_e)),te=()=>{const _e=ae.firstElementChild;if(!_e)return;const U=_e.getBoundingClientRect();if(!U.width||!U.height)return;const D=+we(U.width/Ee).toFixed(3),V=+we(U.height/L).toFixed(3);B(pe=>pe.x===D&&pe.y===V?pe:{x:D,y:V})};if(te(),typeof ResizeObserver>"u")return;const qe=ae.firstElementChild;if(!qe)return;const Ue=new ResizeObserver(te);return Ue.observe(qe),()=>Ue.disconnect()},[e,t]);const F=ie.useCallback(ae=>{const Ee=ae.animationName;Ee.includes("fade-out")?(y(!1),A(!1),p?.()):Ee.includes("fade-in")&&m?.(),b?.(ae)},[m,p,b]),O=lb(i,v),k=P2[e][O],G=R2[e],ee=e==="pulse-inner"||e==="pulse-outside",ne=s??P??G.borderRadius,J=r??(e==="line"?3.1:ee?2.3:1.96),he=c??k.saturation,H=l??k.brightness??1.3,N=e==="line"?Math.min(f,13):f,W=n==="mono"?!0:a,fe=ie.useMemo(()=>K2({id:M,borderRadius:ne,borderWidth:G.borderWidth,duration:J,strokeOpacity:k.strokeOpacity,innerOpacity:k.innerOpacity,bloomOpacity:k.bloomOpacity,innerShadow:k.innerShadow,size:e,colorVariant:n,staticColors:W,brightness:H,saturation:he,hueRange:N,theme:O,hairlineOpacity:k.hairlineOpacity,glowSize:h}),[M,ne,G.borderWidth,J,k.strokeOpacity,k.innerOpacity,k.bloomOpacity,k.innerShadow,k.hairlineOpacity,e,n,W,H,he,N,h,O]),j=ie.useMemo(()=>ee?j2(e,O,J,N,W,M):null,[ee,e,O,J,N,W,M]);ie.useEffect(()=>{var ae;if(!j||!(T||w)||!C)return;const Ee=S.current;if(Ee&&!(typeof window<"u"&&(ae=window.matchMedia)!=null&&ae.call(window,"(prefers-reduced-motion: reduce)").matches))return ob(Ee,j)},[j,T,w,C]);const ue=ie.useCallback(ae=>{S.current=ae,typeof E=="function"?E(ae):E&&(E.current=ae)},[E]),de={...g??{},"--beam-strength":Math.max(0,Math.min(1,u)),...e==="pulse-outside"?{"--pulse-glow-sx":z.x,"--pulse-glow-sy":z.y}:{}};return K.jsxs(K.Fragment,{children:[K.jsx("style",{children:x?`${fe}
${x.split("{id}").join(M)}`:fe}),K.jsxs("div",{..._,ref:ue,"data-beam":M,"data-active":T&&!w?"":void 0,"data-fading":w?"":void 0,"data-paused":T&&!w&&!C?"":void 0,className:d,style:de,onAnimationEnd:F,children:[t,K.jsx("div",{"data-beam-bloom":!0})]})]})});function V0(t,e,n){return t+(e-t)*n}function eg(t){return t-Math.floor(t)}function X0(t,e){const n=Math.floor(t),i=Math.floor(e);let a=t-n,r=e-i;a=a*a*(3-2*a),r=r*r*(3-2*r);const o=Hi(n,i),s=Hi(n+1,i),l=Hi(n,i+1),c=Hi(n+1,i+1);return o+(s-o)*a+(l-o)*r+(o-s-l+c)*a*r}function Hi(t,e){const n=Math.sin(t*12.9898+e*78.233)*43758.5453;return n-Math.floor(n)}function Vf(t,e){const n=Math.PI*(3-Math.sqrt(5)),i=1-2*(t+.5)/e,a=Math.sqrt(1-i*i),r=t*n;return[a*Math.cos(r),i,a*Math.sin(r)]}function ub(t,e){return Math.atan2(Math.sin(t-e),Math.cos(t-e))}function Io(t,e,n,i,a){const r=Math.sin(e),o=Math.cos(e),s=Math.sin(t),l=Math.cos(t);return(c,f,h)=>{const u=c*l+h*s,d=-c*s+h*l,g=f*o-d*r,x=f*r+d*o;return[n+u*a,i-g*a,x]}}function tg(t,e,n,i){if(!i){const r=Math.round((n?1-t:t)*255);return`rgba(${r},${r},${r},${e})`}const a=r=>Math.round(n?r*(1-t):r+(255-r)*t);return`rgba(${a(i.r)},${a(i.g)},${a(i.b)},${e})`}function hb(t,e,n,i=.3,a){for(const r of e){const o=r.a??1,s=Math.min(1,Math.max(0,r.white));t.fillStyle=tg(s,o,n,a),t.beginPath(),t.arc(r.x,r.y,r.r,0,Math.PI*2),t.fill()}}function fb(t,e,n,i){for(const a of e){const r=a.a??1,o=Math.min(1,Math.max(0,a.white));t.strokeStyle=tg(o,r,n,i),t.lineWidth=a.w,t.beginPath(),t.moveTo(a.x1,a.y1),t.lineTo(a.x2,a.y2),t.stroke()}}function Fr(t,e,n=.3){const i=[];for(const a of t)(a.a??1)<.02||(a.r=Math.max(n,a.r),i.push(a));return i.sort((a,r)=>a.z-r.z),{dots:i,lines:e.filter(a=>(a.a??1)>=.02)}}function ng(t,e,n,i){e.lines.length&&fb(t,e.lines,n,i),hb(t,e.dots,n,.3,i)}function Lo(t,e){return(t/300)**e}const db=[["latRings","lonDensity"],["rings","lonDensity"],["lanes","segs"]],pb=["orbitN","ghostN","nodeN","strandN","signals"],mb=["iconD"],gb=["rBase","rDepth","rActive","rDot","ghostR","partR","partRDepth","nodeR","nodeRDepth"];function ig(t,e){const n={...t},i=new Set,a=Math.sqrt(e);for(const[r,o]of db){const s=n[r],l=n[o];s!=null&&l!=null&&!i.has(r)&&!i.has(o)&&(n[r]=Math.max(2,Math.round(s*a)),n[o]=Math.max(2,Math.round(l*a)),i.add(r),i.add(o))}for(const r of pb){const o=n[r];o!=null&&o!==0&&!i.has(r)&&(n[r]=Math.max(1,Math.round(o*e)))}for(const r of mb){const o=n[r];o!=null&&(n[r]=Math.max(.02,o*e))}return n}function ag(t,e){const n={...t};for(const i of gb){const a=n[i];a!=null&&(n[i]=a*e)}return n.rSizeMul=(n.rSizeMul??1)*e,n}const xb={globe:{latRings:17,lonDensity:44,rBase:.6,rDepth:1.7,rBoost:1,inkFar:.62,inkSpan:.54,rsPow:.6,rMin:.3},orbits:{orbitN:12,ghostN:40,ghostR:.9,ghostA:.5,particles:3,partR:1.2,partRDepth:1.6,rsPow:.6,rMin:.3},rubik:{latRings:15,lonDensity:40,moveCount:14,rBase:.6,rDepth:1.7,rActive:.3,inkFar:.62,inkSpan:.54,rsPow:.6,rMin:.3},wave:{rings:15,lonDensity:40,rBase:.6,rDepth:1.7,rsPow:.6,rMin:.3},web:{nodeN:30,thr:.72,signals:5,nodeR:1.4,nodeRDepth:1.8,lineW:.8,rsPow:.6,rMin:.3},braid:{strandN:52,turns:3,ghostN:150,rBase:1.2,rDepth:1.8,rsPow:.6,rMin:.3},ribbon:{lanes:5,segs:88,ghostN:150,rBase:1.1,rDepth:1.7,rsPow:.6,rMin:.3},ring:{lanes:5,segs:88,ghostN:0,faceOn:1,rBase:1.1,rDepth:1.7,rsPow:.6,rMin:.3},morph:{rDot:.021,iconD:1,rMin:.25}},bb=(t,e,n)=>{const i=t/2,a=t/2,r=t/2*.76,o=Io(e*.4,.3,i,a,1),s=Lo(t,n.rsPow??.6),l=[],c=n.ghostN??150;for(let u=0;u<c;u++){const d=Vf(u,c),[g,x,m]=o(d[0]*r,d[1]*r,d[2]*r),p=(m/r+1)/2;l.push({x:g,y:x,z:m,r:.8*s,white:.78,a:.1+.22*p})}const f=n.strandN??52,h=n.turns??3;for(let u=0;u<3;u++){const d=u/3*2*Math.PI;for(let g=0;g<f;g++){const x=(eg(g/f+e*.045)*2-1)*.96,m=Math.sqrt(Math.max(0,1-x*x)),p=Math.min(1,(1-Math.abs(x))/.1),b=x*Math.PI*h+d,_=1+.075*Math.sin(x*Math.PI*h*2+d*2+e*.8),E=m*r*_,[M,v,S]=o(Math.cos(b)*E,x*r*_,Math.sin(b)*E),T=(S/r+1)/2;l.push({x:M,y:v,z:S,r:((n.rBase??1.2)+(n.rDepth??1.8)*T)*s,white:.55-.45*T,a:p*(.45+.55*T)})}}return Fr(l,[],n.rMin)};function vb(t,e,n,i){const a=2*e*n+i,r=t%a,o=new Array(e).fill(0);let s=-1;if(r<2*e*n){const l=Math.floor(r/n),c=(r-l*n)/n,h=1-(1-Math.min(1,c/.7))**3;if(l<e){for(let u=0;u<l;u++)o[u]=1;o[l]=h,s=l}else{const u=2*e-1-l;for(let d=0;d<u;d++)o[d]=1;o[u]=1-h,s=u}}return{amount:o,active:s}}function Mb(t,e,n){let[i,a,r]=t,o=!1;for(let s=0;s<e.length;s++){if(n.amount[s]<=0)continue;const l=e[s],c=l.axis===0?i:l.axis===1?a:r;if(c<l.lo||c>=l.hi)continue;s===n.active&&(o=!0);const f=l.ang*n.amount[s],h=Math.cos(f),u=Math.sin(f);if(l.axis===0){const d=a*h-r*u;r=a*u+r*h,a=d}else if(l.axis===1){const d=i*h+r*u;r=-i*u+r*h,i=d}else{const d=i*h-a*u;a=i*u+a*h,i=d}}return[i,a,r,o]}function _b(t){const e=[];for(let n=0;n<t;n++){const i=Math.min(2,Math.floor(Hi(n,2.3)*3)),a=-1+.5*Math.min(3,Math.floor(Hi(n,5.9)*4)),r=Hi(n,7.7)<.5?1:-1;e.push({axis:i,lo:a,hi:a+.5,ang:r*Math.PI/2})}return e}const yb=(t,e,n)=>{const a=t/2,r=t/2,o=t/2*.82,s=.4+.06*Math.sin(e*.35),l=Io(e*.5,s,a,r,o),c=e*(.5+(1.7-.5)*(n.scanMul??1)),f=Lo(t,n.rsPow??.6),h=n.dimBase??1,u=[],d=n.latRings??17,g=n.lonDensity??44;for(let x=0;x<=d;x++){const m=-Math.PI/2+x/d*Math.PI,p=Math.cos(m),b=Math.sin(m),_=Math.max(1,Math.round(Math.abs(p)*g));for(let E=0;E<_;E++){const M=E/_*2*Math.PI,[v,S,T]=l(p*Math.cos(M),b,p*Math.sin(M)),y=(T+1)/2,w=ub(M+e*.5,c),A=Math.exp(-(w*w)/.18)*Math.max(0,T);u.push({x:v,y:S,z:T,r:((n.rBase??.6)+(n.rDepth??1.7)*y+(n.rBoost??1)*A)*f,white:(n.inkFar??.62)-(n.inkSpan??.54)*y,a:h+(1-h)*Math.min(1,A)})}}return Fr(u,[],n.rMin)},wb=(t,e,n)=>{const i=t/2,a=t/2,r=t/2*.82,o=Io(e*.55,.35+.1*Math.sin(e*.9),i,a,r),s=Lo(t,n.rsPow??.6),l=n.moveCount??14,c=_b(l),f=vb(e,l,.42,1.2),h=[],u=n.latRings??15,d=n.lonDensity??40;for(let g=0;g<=u;g++){const x=-Math.PI/2+g/u*Math.PI,m=Math.cos(x),p=Math.sin(x),b=Math.max(1,Math.round(Math.abs(m)*d));for(let _=0;_<b;_++){const E=_/b*2*Math.PI,[M,v,S,T]=Mb([m*Math.cos(E),p,m*Math.sin(E)],c,f),[y,w,A]=o(M,v,S),C=(A+1)/2;h.push({x:y,y:w,z:A,r:((n.rBase??.6)+(n.rDepth??1.7)*C+(T?n.rActive??.3:0))*s,white:(n.inkFar??.62)-(n.inkSpan??.54)*C-(T?.14:0)})}}return Fr(h,[],n.rMin)},Sb=(t,e,n)=>{const i=t/2,a=t/2,r=t/2*.874,o=Io(e*.18,.38,i,a,1),s=Lo(t,n.rsPow??.6),l=[],c=n.rings??15,f=n.lonDensity??40;for(let h=0;h<=c;h++){const u=-Math.PI/2+h/c*Math.PI,d=Math.cos(u),g=Math.sin(u),x=.62*Math.sin(e*2.1-h*.52)+.38*Math.sin(e*1.27+h*.83),m=r*(.88+.105*x),p=Math.max(1,Math.round(Math.abs(d)*f));for(let b=0;b<p;b++){const _=b/p*2*Math.PI,[E,M,v]=o(d*Math.cos(_)*m,g*m,d*Math.sin(_)*m),S=(v/r+1)/2,T=Math.max(0,x);l.push({x:E,y:M,z:v,r:((n.rBase??.6)+(n.rDepth??1.7)*S)*(1+.4*T)*s,white:.66-.56*S-.1*T})}}return Fr(l,[],n.rMin)};function Eb(t){return t*t*(3-2*t)}function rg(t){const e=t.length,n=[];let i=0;for(let a=0;a<e;a++){const r=t[a],o=t[(a+1)%e],s=Math.hypot(o[0]-r[0],o[1]-r[1]);n.push(s),i+=s}return a=>{let r=a*i,o=0;for(;r>n[o]&&o<e-1;)r-=n[o],o++;const s=t[o],l=t[(o+1)%e],c=n[o]?Math.min(1,r/n[o]):0;return[s[0]+(l[0]-s[0])*c,s[1]+(l[1]-s[1])*c]}}const Ab=t=>{const e=-Math.PI/2+t*2*Math.PI;return[Math.cos(e)*.24,Math.sin(e)*.24]},Tb=rg([[0,-.26],[.24,.16],[-.24,.16]]),Cb=rg([[0,-.2],[.2,-.2],[.2,.2],[-.2,.2],[-.2,-.2]]),Y0=[Ab,Tb,Cb];function Rb(t){return Math.max(6,Math.round(34*t))}const bh=1.4,og=.9,rc=bh+og,Pb=(t,e,n)=>{const i=Y0.length,a=e%(rc*i),r=n.shape!=null&&n.shape>=0&&n.shape<i?Math.floor(n.shape):-1,o=r>=0?r:Math.floor(a/rc),s=r>=0?e%rc:a-o*rc,l=r>=0?0:s>bh?Eb((s-bh)/og):0,c=n.spread??1,f=Y0[o],h=r>=0?f:Y0[(o+1)%i],u=160,d=[];for(let S=0;S<u;S++){const T=S/u,y=f(T),w=h(T);d.push([(y[0]+(w[0]-y[0])*l)*c,(y[1]+(w[1]-y[1])*l)*c])}const g=[];let x=0;for(let S=0;S<u;S++){const T=d[S],y=d[(S+1)%u],w=Math.hypot(y[0]-T[0],y[1]-T[1]);g.push(w),x+=w}const m=Rb(n.iconD??1),p=(n.rDot??.021)*1.35*c,b=1+.02*Math.sin(s*3.1),_=[],E=t/2;let M=0,v=0;for(let S=0;S<m;S++){const T=S/m*x;for(;v+g[M]<T&&M<u-1;)v+=g[M],M++;const y=d[M],w=d[(M+1)%u],A=g[M]?Math.min(1,(T-v)/g[M]):0,C=(y[0]+(w[0]-y[0])*A)*b,R=(y[1]+(w[1]-y[1])*A)*b;_.push({x:E+C*t,y:E+R*t,z:0,r:Math.max(.35,p*t),white:.1})}return Fr(_,[],n.rMin)},Db=(t,e,n)=>{const i=t/2,a=t/2,r=t/2*.82,o=Io(e*.12,.3,i,a,1),s=Lo(t,n.rsPow??.6),l=[],c=n.orbitN??12,f=n.ghostN??40,h=n.particles??3;for(let u=0;u<c;u++){const d=Hi(u,1.7),g=Hi(u,5.2),x=Hi(u,8.9),m=r*(.45+.52*d),p=d*2*Math.PI,b=Math.acos(2*g-1),_=Math.sin(b)*Math.cos(p),E=Math.cos(b),M=Math.sin(b)*Math.sin(p);let v=-E,S=_;const T=0,y=Math.max(1e-6,Math.sqrt(v*v+S*S));v/=y,S/=y;const w=E*T-M*S,A=M*v-_*T,C=_*S-E*v,R=(.25+.55*x)*(x>.5?1:-1);for(let P=0;P<f;P++){const I=P/f*2*Math.PI,[z,B,F]=o((v*Math.cos(I)+w*Math.sin(I))*m,(S*Math.cos(I)+A*Math.sin(I))*m,(T*Math.cos(I)+C*Math.sin(I))*m),O=(F/m+1)/2;l.push({x:z,y:B,z:F,r:(n.ghostR??.9)*s,white:.72,a:(n.ghostA??.5)*(.4+.6*O)})}for(let P=0;P<h;P++){const I=e*R+P/h*2*Math.PI+g*6,[z,B,F]=o((v*Math.cos(I)+w*Math.sin(I))*m,(S*Math.cos(I)+A*Math.sin(I))*m,(T*Math.cos(I)+C*Math.sin(I))*m),O=(F/m+1)/2;l.push({x:z,y:B,z:F,r:((n.partR??1.2)+(n.partRDepth??1.6)*O)*s,white:.3-.22*O})}}return Fr(l,[],n.rMin)},Cd=(t,e,n)=>{const i=t/2,a=t/2,r=t/2*.78,o=n.spin??1,s=.3,l=Io(e*.1*o,s,i,a,1),c=Lo(t,n.rsPow??.6),f=[],h=n.ghostN??150;for(let C=0;C<h;C++){const R=Vf(C,h),[P,I,z]=l(R[0]*r,R[1]*r,R[2]*r),B=(z/r+1)/2;f.push({x:P,y:I,z,r:.8*c,white:.78,a:.1+.22*B})}const u=e*.24*o,d=n.faceOn?-s:.55+.3*Math.sin(e*.18)*o,g=Math.cos(u),x=0,m=Math.sin(u),p=-m*Math.sin(d),b=Math.cos(d),_=g*Math.sin(d),E=x*_-m*b,M=m*p-g*_,v=g*b-x*p,S=.23*(n.wobMul??1),T=n.faceOn?r/(1+.85*S):r,y=n.lanes??5,w=n.segs??88,A=Math.max(1,Math.round(y*(n.bandMul??1)));for(let C=0;C<A;C++){const R=(C-(A-1)/2)*.075,P=Math.abs(C-(A-1)/2)/Math.max(1,(A-1)/2);for(let I=0;I<w;I++){const z=I/w*2*Math.PI,B=(.16*Math.sin(z*3-e*1.7+C*.22)+.07*Math.sin(z*5+e*1.1))*(n.wobMul??1),F=n.faceOn?1+B:1,O=n.faceOn?R:R+B,k=g*Math.cos(z)+p*Math.sin(z)+E*O,G=x*Math.cos(z)+b*Math.sin(z)+M*O,ee=m*Math.cos(z)+_*Math.sin(z)+v*O,ne=Math.sqrt(k*k+G*G+ee*ee),J=T*F,[he,H,N]=l(k/ne*J,G/ne*J,ee/ne*J),W=(N/r+1)/2;f.push({x:he,y:H,z:N,r:((n.rBase??1.1)+(n.rDepth??1.7)*W)*(1-.25*P)*c,white:.52-.44*W+.18*P,a:.4+.6*W})}}return Fr(f,[],n.rMin)},Ib=(t,e,n)=>{const i=t/2,a=t/2,r=t/2*.8*(n.spread??1),o=Io(e*.12,.32,i,a,r),s=Lo(t,n.rsPow??.6),l=n.nodeN??30,c=n.thr??.72,f=n.nodeR??1.4,h=n.nodeRDepth??1.8,u=[];for(let m=0;m<l;m++){const p=Vf(m,l),b=p[0]+.3*(X0(m*.31+9,e*.24)-.5)*2,_=p[1]+.3*(X0(m*.53+27,e*.21)-.5)*2,E=p[2]+.3*(X0(m*.77+55,e*.27)-.5)*2,M=Math.sqrt(b*b+_*_+E*E);u.push([b/M,_/M,E/M])}const d=[],g=[];for(let m=0;m<l;m++)for(let p=m+1;p<l;p++){const b=u[m][0]-u[p][0],_=u[m][1]-u[p][1],E=u[m][2]-u[p][2],M=Math.sqrt(b*b+_*_+E*E);if(M>=c)continue;const[v,S,T]=o(u[m][0],u[m][1],u[m][2]),[y,w,A]=o(u[p][0],u[p][1],u[p][2]),C=((T+A)/2+1)/2;d.push({x1:v,y1:S,x2:y,y2:w,white:.42,a:(1-M/c)*(.3+.55*C),w:Math.max(.6,(n.lineW??.8)*s)})}for(let m=0;m<l;m++){const[p,b,_]=o(u[m][0],u[m][1],u[m][2]),E=(_+1)/2,M=1+.25*Math.sin(e*1.4+m*2.7);g.push({x:p,y:b,z:_,r:(f+h*E)*M*s,white:.55-.45*E})}const x=n.signals??5;for(let m=0;m<x;m++){const p=Math.floor(e*.55+m*7.31),b=Math.floor(Hi(p,m*3.1+1.7)*l),_=Math.floor(Hi(p,m*5.7+4.2)*l);if(b===_)continue;const E=eg(e*.55+m*7.31),M=V0(u[b][0],u[_][0],E),v=V0(u[b][1],u[_][1],E),S=V0(u[b][2],u[_][2],E),T=Math.max(1e-6,Math.sqrt(M*M+v*v+S*S)),[y,w,A]=o(M/T,v/T,S/T),C=(A+1)/2;g.push({x:y,y:w,z:A,r:(f*1.5+h*C)*s,white:.05,a:.5+.5*C})}return Fr(g,d,n.rMin)},sg={orbits:Db,globe:yb,rubik:wb,wave:Sb,web:Ib,braid:bb,ribbon:Cd,ring:Cd,morph:Pb};Object.fromEntries(Object.entries(sg).map(([t,e])=>[t,(n,i,a,r,o)=>ng(n,e(i,a,o),r)]));const Lb={working:"orbits",searching:"globe",solving:"rubik",listening:"wave",connecting:"web",weaving:"braid",composing:"ribbon",breathing:"ring",shaping:"morph"},Fb={orbits:{64:{speed:1.885,count:1,size:1},32:{speed:2.9072,count:.4251,size:1.6849},20:{speed:3.9,count:.238,size:2.4}},globe:{64:{speed:2.015,count:.42,size:1.15,extra:{scanMul:4.08,dimBase:.45}},32:{speed:2.3803,count:.1839,size:1.4769,extra:{scanMul:4.2301,dimBase:.45}},20:{speed:2.665,count:.105,size:1.75,extra:{scanMul:4.335,dimBase:.45}}},rubik:{64:{speed:1.82,count:.35,size:1.05},32:{speed:1.8964,count:.1537,size:1.4951},20:{speed:1.95,count:.088,size:1.9}},wave:{64:{speed:4.388,count:.341,size:1},32:{speed:4.1512,count:.169,size:1.3232},20:{speed:3.998,count:.105,size:1.6}},web:{64:{speed:3.315,count:1.35,size:.95},32:{speed:5.0104,count:.4942,size:1.2571},20:{speed:6.63,count:.25,size:1.52}},braid:{64:{speed:1.625,count:.5,size:1},32:{speed:2.2234,count:.2056,size:1.2011},20:{speed:2.75,count:.1125,size:1.36}},ribbon:{64:{speed:2.34,count:.25,size:.85,extra:{spin:0,bandMul:3.9,wobMul:1}},32:{speed:2.7776,count:.0969,size:.9766,extra:{spin:0,bandMul:4.49,wobMul:1}},20:{speed:3.12,count:.051,size:1.073,extra:{spin:0,bandMul:4.94,wobMul:1}}},ring:{64:{speed:3.24,count:.25,size:.956,extra:{spin:0,bandMul:3.627,wobMul:.368}},32:{speed:3.5517,count:.0678,size:1.31,extra:{spin:0,bandMul:3.8265,wobMul:.4751}},20:{speed:3.78,count:.028,size:1.622,extra:{spin:0,bandMul:3.968,wobMul:.565}}},morph:{64:{speed:2.405,count:.702,size:.395,extra:{spread:1.45}},32:{speed:2.2057,count:.5937,size:.6916,extra:{spread:1.45}},20:{speed:2.08,count:.53,size:1.011,extra:{spread:1.45}}}},Rd=new Map;function zb(t,e){const n=`${t}-${e}`,i=Rd.get(n);if(i)return i;const a=Lb[t],r=Fb[a][e];let o={...xb[a]};r.count!==1&&(o=ig(o,r.count)),r.size!==1&&(o=ag(o,r.size)),r.extra&&(o={...o,...r.extra});const s={mode:a,speed:r.speed,opts:o};return Rd.set(n,s),s}function Ub(t){let e=t;for(;e;){const n=e.getAttribute("data-theme");if(n==="dark")return!0;if(n==="light")return!1;if(e.classList.contains("dark"))return!0;if(e.classList.contains("light"))return!1;e=e.parentElement}return null}function Nb(){return typeof matchMedia>"u"||matchMedia("(prefers-color-scheme: dark)").matches}function Ob(t,e){const[n,i]=ie.useState(!0);return ie.useEffect(()=>{if(t==="dark"){i(!0);return}if(t==="light"){i(!1);return}const a=()=>{const l=Ub(e.current);i(l??Nb())};a();const r=typeof matchMedia<"u"?matchMedia("(prefers-color-scheme: dark)"):null,o=()=>a();r?.addEventListener("change",o);let s=null;return typeof MutationObserver<"u"&&e.current&&(s=new MutationObserver(a),s.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"],subtree:!0})),()=>{r?.removeEventListener("change",o),s?.disconnect()}},[t,e]),n}function $b(){const[t,e]=ie.useState(!1);return ie.useEffect(()=>{if(typeof matchMedia>"u")return;const n=matchMedia("(prefers-reduced-motion: reduce)");e(n.matches);const i=a=>e(a.matches);return n.addEventListener("change",i),()=>n.removeEventListener("change",i)},[]),t}const $i=Object.freeze({reach:160,strength:11,deform:19,taper:1.95,curve:2.8,falloff:24,smoothing:.3,handover:.6,squash:1.2,blur:1,fadeMs:180});let ta=null,Ao=null,vs=null,Pd=0,lg=0,dl=!1,vh="",Mh=0;function kb(t){if(t===ta||(ta=t,Ao=null,vs=null,dl=!1,Mh=0,lg=typeof window<"u"&&window.devicePixelRatio||1,To(),!t||typeof Image>"u"))return;const e=new Image;e.decoding="async",e.onload=()=>{ta===t&&(Ao=e,F0())},e.src=t.src}const fs=new Set;let Ss=!1,Sr=0,_h=0,Ji=Number.NaN,ao=Number.NaN,yh=0,wh=0,fr=0,Pi=null,Kc=!0,pl=!1;function Bb(t,e=!0){const n=e===!0?{}:e;n.sprite&&kb(n.sprite);const i={el:t,opts:{reach:Math.max(1,n.reach??$i.reach),strength:Math.max(0,Math.min(64,n.strength??$i.strength)),deform:Math.max(0,Math.min(32,n.deform??$i.deform)),taper:Math.max(1,Math.min(4,n.taper??$i.taper)),curve:Math.max(1,Math.min(4,n.curve??$i.curve)),falloff:Math.max(2,Math.min(200,n.falloff??$i.falloff)),smoothing:Dd(n.smoothing??$i.smoothing),handover:Dd(n.handover??$i.handover),squash:Math.max(0,Math.min(3,n.squash??$i.squash)),blur:Math.max(0,Math.min(24,n.blur??$i.blur)),fadeMs:Math.max(1,n.fadeMs??$i.fadeMs)}};return fs.add(i),Gb(),F0(),()=>{fs.delete(i),Pi===i&&(Pi=null),fs.size===0&&queueMicrotask(()=>{fs.size===0&&Vb()})}}const Dd=t=>Math.max(0,Math.min(1,t)),Zc=t=>t.opts,ll=t=>typeof window.matchMedia=="function"&&window.matchMedia(t).matches;function Hb(){if(dl)return vh||"disabled by a fail-safe";if(!ta)return"no pointer sprite set";if(!Ao)return"pointer sprite still loading";if(ll("(prefers-reduced-motion: reduce)"))return"prefers-reduced-motion is on";if(ll("(forced-colors: active)"))return"forced colours are active";if(!ll("(pointer: fine)")||!ll("(hover: hover)"))return"no fine pointer";if((window.devicePixelRatio||1)!==lg)return"display scale changed since the sprite was set — reload";const t=window.visualViewport;return t&&Math.abs(t.scale-1)>.001?"page is zoomed":null}function Wb(){return Hb()===null}function Gb(){Ss||fs.size===0||typeof document>"u"||ll("(pointer: fine)")&&(Ss=!0,document.addEventListener("pointermove",cg,{passive:!0}),document.addEventListener("pointerleave",br),document.addEventListener("pointercancel",br),document.addEventListener("keydown",ug,{passive:!0}),document.addEventListener("visibilitychange",br),window.addEventListener("blur",br))}function Vb(){Ss&&(Ss=!1,document.removeEventListener("pointermove",cg),document.removeEventListener("pointerleave",br),document.removeEventListener("pointercancel",br),document.removeEventListener("keydown",ug),document.removeEventListener("visibilitychange",br),window.removeEventListener("blur",br),Sr!==0&&(cancelAnimationFrame(Sr),Sr=0),Pi=null,fr=0,To(),Ma&&(Ma.remove(),Ma=null,Oa=null,x0=null),ho&&(ho.remove(),ho=null))}function cg(t){Kc=t.pointerType==="mouse"||t.pointerType==="",pl=!1,Xf++,Ji=yh=t.clientX,ao=wh=t.clientY,El&&(El=!1,ml(),gl=0,xl=0,ro=ds=Number.NaN),F0()}function ug(){pl=!0,To()}function br(){Ji=ao=Number.NaN,F0()}function F0(){!Ss||Sr!==0||(_h=performance.now(),Sr=requestAnimationFrame(Ah))}let Ma=null,Oa=null,x0=null,Es=!1;const bo="thinking-orb-gravity-hide";let ho=null,Sl=!1;const Id=new WeakMap;let Xf=0,Yf=-1,Sh=0,hg=-1;function Xb(){if(Ma)return!0;const t=document.createElement("div");t.className="thinking-orb-gravity-cursor",t.setAttribute("aria-hidden","true"),t.style.cssText="position:fixed;left:0;top:0;pointer-events:none;z-index:2147483001;will-change:transform;display:none";const e=document.createElement("canvas");e.style.display="block",t.appendChild(e),document.body.appendChild(t);const n=e.getContext("2d");return n?(Ma=t,Oa=e,x0=n,Eh=0,!0):(t.remove(),!1)}function Yb(){ho||(ho=document.createElement("style"),ho.textContent=`html.${bo}, html.${bo} * { cursor: none !important; }`,document.head.appendChild(ho))}function qb(t){const e=Id.get(t);if(e)return e;const n=document.documentElement,i=n.classList.contains(bo);i&&n.classList.remove(bo);const a=getComputedStyle(t).cursor;return i&&n.classList.add(bo),Id.set(t,a),a}function Ld(t,e){const n=document.elementFromPoint(t,e);if(!n)return!1;const i=qb(n);return i!=="auto"&&i!=="default"?(qf(),!1):(Sl||(Yb(),document.documentElement.classList.add(bo),Sl=!0,Yf=Xf,hg=Sh),!0)}function qf(){Sl&&(document.documentElement.classList.remove(bo),Sl=!1,Yf=-1)}function ml(){Ma&&Es&&(Ma.style.display="none",Es=!1)}const jb=500;let Fd=Number.NEGATIVE_INFINITY,El=!1;function To(){El=!1,qf(),ml(),gl=0,xl=0,ro=ds=Number.NaN}const fo={cx:0,cy:0,r:0};let gl=0,xl=0,ro=Number.NaN,ds=Number.NaN;const Wr=48,zd=10;let Oo=null,q0=null,Gr=null,Vr=null,ps=null,Eh=0,Ud=0,Nd=0;function Kb(t){if(!Ao||!ta)return null;const e=document.createElement("canvas");e.width=Math.ceil(ta.width*t),e.height=Math.ceil(ta.height*t);const n=e.getContext("2d",{willReadFrequently:!0});return n?(n.scale(t,t),n.drawImage(Ao,0,0,ta.width,ta.height),n.getImageData(0,0,e.width,e.height)):null}function Zb(t,e,n,i,a,r,o){if(!vs||!ps)return;const s=ps.width,l=ps.height,c=vs,f=c.width,h=c.height,u=c.data,d=ps.data;d.fill(0);const g=Math.max(1,Math.hypot(f,h)),x=r-i,m=o-a,p=Math.hypot(x,m)||1,b=x/p,_=m/p,E=Math.max(0,Math.floor(n+Math.min(0,t*b)-3)),M=Math.min(s,Math.ceil(n+f+Math.max(0,t*b)+3)),v=Math.max(0,Math.floor(n+Math.min(0,t*_)-3)),S=Math.min(l,Math.ceil(n+h+Math.max(0,t*_)+3));for(let T=v;T<S;T++)for(let y=E;y<M;y++){const w=(T*s+y)*4;let A=y-n,C=T-n;if(t>.01){let G=y,ee=T,ne=0,J=0,he=0,H=1;for(let fe=0;fe<7;fe++){const j=Math.hypot(G-i,ee-a)/g;ne=t*Math.pow(Math.min(1,j),e),J=r-G,he=o-ee,H=Math.hypot(J,he)||1,G+=(y-ne*J/H-G)*.5,ee+=(T-ne*he/H-ee)*.5}const N=G+ne*J/H-y,W=ee+ne*he/H-T;if(N*N+W*W>2.25){d[w]=d[w+1]=d[w+2]=d[w+3]=0;continue}A=G-n,C=ee-n}const R=Math.floor(A),P=Math.floor(C);if(R<-1||P<-1||R>=f||P>=h){d[w]=d[w+1]=d[w+2]=d[w+3]=0;continue}const I=A-R,z=C-P;let B=0,F=0,O=0,k=0;for(let G=0;G<4;G++){const ee=R+(G&1),ne=P+(G>>1);if(ee<0||ne<0||ee>=f||ne>=h)continue;const J=(G&1?I:1-I)*(G>>1?z:1-z),he=(ne*f+ee)*4,H=J*u[he+3];B+=u[he]*H,F+=u[he+1]*H,O+=u[he+2]*H,k+=H}k>0?(d[w]=B/k,d[w+1]=F/k,d[w+2]=O/k,d[w+3]=k):d[w]=d[w+1]=d[w+2]=d[w+3]=0}}function Od(t,e,n){if(!x0||!Oa||!Ma||!ta||!Ao)return;const i=ta,a=Zc(t),r=Math.min(3,window.devicePixelRatio||1);if(Oo||(Oo=document.createElement("canvas"),q0=Oo.getContext("2d")),Gr||(Gr=document.createElement("canvas"),Vr=Gr.getContext("2d")),!q0||!Vr||((!vs||Pd!==r)&&(vs=Kb(r),Pd=r),!vs))return;if(r!==Eh||i.width!==Ud||i.height!==Nd){Eh=r,Ud=i.width,Nd=i.height;const z=Math.ceil((i.width+2*Wr)*r),B=Math.ceil((i.height+2*Wr)*r);Oa.width=Oo.width=Gr.width=z,Oa.height=Oo.height=Gr.height=B,Oa.style.width=`${i.width+2*Wr}px`,Oa.style.height=`${i.height+2*Wr}px`,ps=Vr.createImageData(z,B)}const o=Oa.width,s=Oa.height,l=Math.pow(e,a.curve),c=1-Math.exp(-n/(.012+a.smoothing*.14));gl+=(a.strength*l-gl)*c,xl+=(a.deform*l-xl)*c;let f=gl*r,h=xl*r;if(Number.isNaN(ro))ro=fo.cx,ds=fo.cy;else{const z=1-Math.exp(-n/(.05+a.handover*.6));ro+=(fo.cx-ro)*z,ds+=(fo.cy-ds)*z}const u=Wr*r,d=u+i.hotX*r,g=u+i.hotY*r,x=d+(ro-yh)*r,m=g+(ds-wh)*r,p=Math.hypot(x-d,m-g)||1,b=(x-d)/p,_=(m-g)/p,E=a.falloff*r;if(a.squash>0){const z=Math.hypot(i.width*.5-i.hotX,i.height-i.hotY)||1,B=(i.width*.5-i.hotX)/z,F=(i.height-i.hotY)/z,O=Math.max(0,-(b*B+_*F)),k=1+a.squash*O;f*=k,h*=k}const M=Math.ceil(Math.max(h,1))+4,v=Math.floor(Math.min(u,u+b*f)-M),S=Math.floor(Math.min(u,u+_*f)-M),T=Math.ceil(Math.max(u,u+b*f)+i.width*r+M),y=Math.ceil(Math.max(u,u+_*f)+i.height*r+M),w=Math.max(0,v),A=Math.max(0,S),C=Math.min(o,T)-w,R=Math.min(s,y)-A;h>.01?(Zb(h,a.taper,u,d,g,x,m),Vr.putImageData(ps,0,0,w,A,C,R)):(Vr.setTransform(1,0,0,1,0,0),Vr.clearRect(0,0,o,s),Vr.drawImage(Ao,u,u,i.width*r,i.height*r));const P=x0,I=q0;if(P.setTransform(1,0,0,1,0,0),P.clearRect(0,0,o,s),P.globalAlpha=1,P.globalCompositeOperation="source-over",P.drawImage(Gr,0,0),f>.5){const z=u+i.width*r*.42,B=u+i.height*r*.5,F=E/2,O=I.createLinearGradient(z-b*F,B-_*F,z+b*F,B+_*F);O.addColorStop(0,"rgba(0,0,0,0)"),O.addColorStop(1,"rgba(0,0,0,1)");for(let k=zd;k>=1;k--){const G=k/zd;I.setTransform(1,0,0,1,0,0),I.globalCompositeOperation="source-over",I.globalAlpha=1,I.clearRect(w,A,C,R),I.drawImage(Gr,w,A,C,R,w+b*f*G,A+_*f*G,C,R),I.globalCompositeOperation="destination-in",I.fillStyle=O,I.fillRect(w,A,C,R),P.globalCompositeOperation="destination-over",P.globalAlpha=Math.pow(1-G,1.6)*.9,a.blur>0&&(P.filter=`blur(${(a.blur*Math.sqrt(G)*r).toFixed(2)}px)`),P.drawImage(Oo,w,A,C,R,w,A,C,R)}P.filter="none",P.globalAlpha=1,P.globalCompositeOperation="source-over"}Ma.style.transform=`translate3d(${(yh-i.hotX-Wr).toFixed(2)}px,${(wh-i.hotY-Wr).toFixed(2)}px,0)`,Es||(Ma.style.display="",Es=!0)}function Ah(t){if(Sr=0,!Ss)return;const e=performance.now();try{Jb(t)}catch(i){dl=!0,vh=`disabled after an error (${i instanceof Error?i.message:String(i)})`,To(),Pi=null,typeof console<"u"&&console.warn("thinking-orbs: gravity disabled after error",i);return}const n=performance.now()-e;n>12?++Mh>=30&&!dl&&(dl=!0,vh=`disabled after slow frames (~${Math.round(n)}ms each)`,To()):Mh=0}function Jb(t){const e=Math.min(.05,Math.max(.001,(t-_h)/1e3));_h=t,Sh++;let n=null,i=0;if(!Number.isNaN(Ji)&&Wb()){let s=Number.POSITIVE_INFINITY;for(const l of fs){if(!l.el.isConnected)continue;const c=l.el.getBoundingClientRect();if(c.width<=0)continue;const f=c.left+c.width/2,h=c.top+c.height/2,u=Math.min(c.width,c.height)/2,d=Zc(l).reach;if(Ji<f-u-d||Ji>f+u+d||ao<h-u-d||ao>h+u+d)continue;const g=Math.hypot(Ji-f,ao-h)-u;g<=d&&g<s&&(s=g,n=l,fo.cx=f,fo.cy=h,fo.r=u)}if(n){const l=1-Math.max(0,s)/Zc(n).reach;i=l*l*(3-2*l),Fd=t}}const a=Pi??n,r=a?Zc(a).fadeMs:$i.fadeMs,o=1-Math.exp(-(e*1e3)/(r/3));if(fr+=(i-fr)*o,n&&n!==Pi&&(Pi=n),!n&&fr<.002){if(fr=0,Pi&&Sl&&!El&&Kc&&!pl&&!Number.isNaN(Ji)){if(t-Fd<jb){Ld(Ji,ao)?Od(Pi,0,e):ml(),Sr=requestAnimationFrame(Ah);return}if(Es){qf(),El=!0,Pi=null;return}}Pi=null,To();return}Pi&&(fr>.002&&Kc&&!pl&&!Number.isNaN(Ji)&&Xb()&&Ld(Ji,ao)?Yf===Xf&&Sh-hg<2&&!Es?ml():Od(Pi,fr,e):fr>.002&&!Number.isNaN(Ji)&&Kc&&!pl?ml():To(),Sr=requestAnimationFrame(Ah))}function Qb(t){if(!t)return;const e=t.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(e){let i=e[1];i.length===3&&(i=i.replace(/./g,r=>r+r));const a=parseInt(i,16);return{r:a>>16&255,g:a>>8&255,b:a&255}}const n=t.trim().match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);if(n)return{r:Number(n[1]),g:Number(n[2]),b:Number(n[3])}}const ev={working:"Working…",searching:"Searching…",solving:"Solving…",listening:"Listening…",connecting:"Connecting…",weaving:"Weaving…",composing:"Composing…",breathing:"Thinking…",shaping:"Shaping…"};function tv({state:t="working",size:e=64,theme:n="auto",speed:i=1,paused:a=!1,color:r,dots:o=1,dotSize:s=1,opts:l,frame:c,gravity:f,style:h,"aria-label":u,...d}){const g=ie.useRef(null),x=l?JSON.stringify(l):"",m=Ob(n,g),p=f?JSON.stringify(f):"";ie.useEffect(()=>{const _=g.current;if(!(!_||!f))return Bb(_,f===!0?!0:f)},[p]);const b=$b();return ie.useEffect(()=>{const _=g.current;if(!_)return;const E=Math.min(2,typeof devicePixelRatio<"u"&&devicePixelRatio||1);_.width=Math.round(e*E),_.height=Math.round(e*E);const M=_.getContext("2d");if(!M)return;const{mode:v,speed:S,opts:T}=zb(t,e);let y=o!==1?ig(T,Math.max(.1,o)):T;s!==1&&(y=ag(y,Math.max(.1,s))),l&&(y={...y,...l});const w=c??sg[v],A=Qb(r),C=S*i,R=ee=>{M.setTransform(E,0,0,E,0,0),M.clearRect(0,0,e,e),ng(M,w(e,ee,y),m,A)};if(b){R(.6);return}let P=0,I=!1;const z=()=>{R(performance.now()/1e3*C),I&&(P=requestAnimationFrame(z))},B=()=>{I||a||(I=!0,P=requestAnimationFrame(z))},F=()=>{I=!1,cancelAnimationFrame(P)};R(performance.now()/1e3*C);let O=!0;const k=typeof IntersectionObserver<"u"?new IntersectionObserver(([ee])=>{O=ee.isIntersecting,O&&document.visibilityState!=="hidden"?B():F()}):null;k?.observe(_);const G=()=>{document.visibilityState==="hidden"?F():O&&B()};return document.addEventListener("visibilitychange",G),k||B(),()=>{F(),k?.disconnect(),document.removeEventListener("visibilitychange",G)}},[t,e,m,i,a,b,r,o,s,x,c]),K.jsx("canvas",{ref:g,role:"img","aria-label":u??ev[t],style:{width:e,height:e,display:"block",...h},...d})}function $d(t){let e=t.replace("#","");(e.length===3||e.length===4)&&(e=e.split("").map(i=>i+i).join(""));const n=e.length>=8?parseInt(e.slice(6,8),16)/255:1;return[parseInt(e.slice(0,2),16)/255,parseInt(e.slice(2,4),16)/255,parseInt(e.slice(4,6),16)/255,n]}function fg(t,e,n){t/=255,e/=255,n/=255;const i=Math.max(t,e,n),a=Math.min(t,e,n),r=i-a;let o=0;const s=i===0?0:r/i;return r!==0&&(i===t?o=((e-n)/r+6)%6:i===e?o=(n-t)/r+2:o=(t-e)/r+4,o/=6),[o,s,i]}function dg(t,e,n){const i=Math.floor(t*6),a=t*6-i,r=n*(1-e),o=n*(1-a*e),s=n*(1-(1-a)*e);let l=0,c=0,f=0;switch(i%6){case 0:l=n,c=s,f=r;break;case 1:l=o,c=n,f=r;break;case 2:l=r,c=n,f=s;break;case 3:l=r,c=o,f=n;break;case 4:l=s,c=r,f=n;break;case 5:l=n,c=r,f=o;break}return[Math.round(l*255),Math.round(c*255),Math.round(f*255)]}const nv=66,iv=66,av=1500,rv=1,kd=16,ov=96,sv=2,lv=0,cv=1,As={colorBack:"#00000000",speed:1,repetition:1.5,softness:.05,shiftRed:.3,shiftBlue:.3,distortion:.1,contour:.4,angle:90,shape:lv,scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0,fit:cv},uv={name:"chromatic",modes:{dark:{...As,colorTint:"#88ccff2e",shiftRed:.75,shiftBlue:.75,repetition:2,softness:.09,shaderOpacity:1},light:{...As,colorTint:"#66b0ff99",shiftRed:.6,shiftBlue:.6,shaderOpacity:1}}},hv={name:"silver",modes:{dark:{...As,colorTint:"#ffffff66",shaderOpacity:.88},light:{...As,colorTint:"#ffffff40",shaderOpacity:1}}},fv={name:"gold",modes:{dark:{...As,colorTint:"#ffcc55cc",speed:.85,shaderOpacity:.92},light:{...As,colorTint:"#f7d488aa",shaderOpacity:1}}},pg={chromatic:uv,silver:hv,gold:fv},dv=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,pv=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,mv=`
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`,gv=`
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
`,xv=`#version 300 es
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

${dv}
${pv}
${gv}

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

  ${mv}

  fragColor = vec4(color, opacity);
}
`,bv=`#version 300 es
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
}`,vv=xv;function Bd(t,e,n){const i=t.createShader(e);if(!i)throw new Error("metal-fx: gl.createShader returned null");if(t.shaderSource(i,n),t.compileShader(i),!t.getShaderParameter(i,t.COMPILE_STATUS)){const a=t.getShaderInfoLog(i);throw t.deleteShader(i),new Error(`metal-fx: shader compile failed: ${a??"(no info log)"}`)}return i}function Mv(t,e,n){const i=t.createProgram();if(!i)throw new Error("metal-fx: gl.createProgram returned null");if(t.attachShader(i,e),t.attachShader(i,n),t.linkProgram(i),!t.getProgramParameter(i,t.LINK_STATUS)){const a=t.getProgramInfoLog(i);throw t.deleteProgram(i),new Error(`metal-fx: program link failed: ${a??"(no info log)"}`)}return i}const mg=140,gg=40,xg=1.6,bg=1.3;let Oe=null,$o=null;function _v(){var t;if($o!==null)return $o;if(typeof document>"u")return $o=!1;try{const e=document.createElement("canvas").getContext("webgl2");$o=!!e,(t=e?.getExtension("WEBGL_lose_context"))==null||t.loseContext()}catch{$o=!1}return $o}let Th=null;function yv(t){Th=t}const wv=["u_resolution","u_time","u_pixelRatio","u_colorBack","u_colorTint","u_repetition","u_softness","u_shiftRed","u_shiftBlue","u_distortion","u_contour","u_angle","u_shape","u_isImage","u_image","u_originX","u_originY","u_worldWidth","u_worldHeight","u_fit","u_scale","u_rotation","u_offsetX","u_offsetY","u_imageAspectRatio"];function Hd(t){t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA);const e=Bd(t,t.VERTEX_SHADER,bv),n=Bd(t,t.FRAGMENT_SHADER,vv),i=Mv(t,e,n);t.useProgram(i);const a=t.createBuffer();if(!a)throw new Error("metal-fx: gl.createBuffer returned null");t.bindBuffer(t.ARRAY_BUFFER,a),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW);const r=t.getAttribLocation(i,"a_position");t.enableVertexAttribArray(r),t.vertexAttribPointer(r,2,t.FLOAT,!1,0,0);const o={};for(const l of wv)o[l]=t.getUniformLocation(i,l);const s=t.createTexture();return s&&(t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,s),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),o.u_image&&t.uniform1i(o.u_image,0)),{program:i,buffer:a,uniforms:o,dummyTexture:s}}function vg(){if(Oe)return Oe;const t=Math.min(sv,typeof window<"u"&&window.devicePixelRatio||1),e=Math.round(ov*t),n=typeof OffscreenCanvas<"u";let i,a;if(n)i=new OffscreenCanvas(e,e),a=i.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1});else{const h=document.createElement("canvas");h.width=e,h.height=e,a=h.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,preserveDrawingBuffer:!0}),i=h}if(!a)throw new Error("metal-fx: WebGL2 not supported");const{program:r,buffer:o,uniforms:s,dummyTexture:l}=Hd(a),c=h=>{h.preventDefault(),Oe&&(Oe.contextLost=!0)},f=()=>{if(!Oe)return;const h=Hd(Oe.gl);Oe.program=h.program,Oe.buffer=h.buffer,Oe.uniforms=h.uniforms,Oe.dummyTexture=h.dummyTexture,Oe.presetDirty=!0,Oe.contextLost=!1,Th?.()};return i.addEventListener("webglcontextlost",c,!1),i.addEventListener("webglcontextrestored",f,!1),Oe={glCanvas:i,gl:a,program:r,buffer:o,uniforms:s,dummyTexture:l,preset:pg.chromatic.modes.dark,presetDirty:!0,contextLost:!1,useOffscreen:n,frameBitmap:null,startMs:performance.now(),pausedMs:0,pausedAtMs:null,rafId:0,dpr:t,instances:new Set,frameCount:0,glowQueue:[],glowIdx:0,glowSkip:0,glowPixels:new Uint8Array(e*e*4),glowPixelsW:e,glowPixelsH:e},Oe}function Sv(){var t;if(!Oe)return;const{gl:e,program:n,buffer:i,frameBitmap:a,dummyTexture:r}=Oe;try{a?.close(),e.deleteBuffer(i),e.deleteProgram(n),r&&e.deleteTexture(r),(t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext()}catch{}Oe=null}let Wd=0;function Ev(){if(!Oe)return;const t=performance.now();if(t-Wd<av)return;Wd=t;const{gl:e,glCanvas:n}=Oe,i=n.width,a=n.height;(Oe.glowPixelsW!==i||Oe.glowPixelsH!==a)&&(Oe.glowPixelsW=i,Oe.glowPixelsH=a,Oe.glowPixels=new Uint8Array(i*a*4)),e.readPixels(0,0,i,a,e.RGBA,e.UNSIGNED_BYTE,Oe.glowPixels)}const ko={bx:0,by:0};function jf(t,e,n){if(!Oe)return ko.bx=0,ko.by=0,ko;const{glCanvas:i}=Oe,a=i.width,r=i.height,o=t.dpr,s=t.cssWidth*o,l=t.cssHeight*o,c=mg*o,f=gg*o;let h=s*(a/c)/t.shaderScale,u=l*(r/f)/t.shaderScale;h>a&&(h=a),u>r&&(u=r);const d=(a-h)/2,g=(r-u)/2,x=d+e/t.cssWidth*h,m=g+n/t.cssHeight*u;return ko.bx=Math.round(x),ko.by=Math.round(r-1-m),ko}const qi={r:0,g:0,b:0,lum:0,count:0};function Mg(t,e,n,i,a,r){const o=Math.max(1,r|0),s=Math.max(0,i-o),l=Math.min(e,i+o+1),c=Math.max(0,a-o),f=Math.min(n,a+o+1);qi.r=0,qi.g=0,qi.b=0,qi.lum=0,qi.count=0;for(let h=c;h<f;h++){const u=h*e;for(let d=s;d<l;d++){const g=(u+d)*4;qi.r+=t[g],qi.g+=t[g+1],qi.b+=t[g+2],qi.lum+=(.2126*t[g]+.7152*t[g+1]+.0722*t[g+2])/255,qi.count++}}return qi}const Pn={r:255,g:255,b:255};function Ch(t,e,n,i){if(!Oe)return 0;const a=jf(t,e,n),r=Mg(Oe.glowPixels,Oe.glowPixelsW,Oe.glowPixelsH,a.bx,a.by,i);return r.count>0?r.lum/r.count:0}function _g(t,e,n,i){if(!Oe)return Pn.r=255,Pn.g=255,Pn.b=255,Pn;const a=jf(t,e,n),r=Mg(Oe.glowPixels,Oe.glowPixelsW,Oe.glowPixelsH,a.bx,a.by,i);return r.count===0?(Pn.r=255,Pn.g=255,Pn.b=255,Pn):(Pn.r=r.r/r.count,Pn.g=r.g/r.count,Pn.b=r.b/r.count,Pn)}function Av(t,e,n,i){if(!Oe)return Pn.r=255,Pn.g=255,Pn.b=255,Pn;const a=jf(t,e,n),{glowPixels:r,glowPixelsW:o,glowPixelsH:s}=Oe,l=Math.max(1,i|0),c=Math.max(0,a.bx-l),f=Math.min(o,a.bx+l+1),h=Math.max(0,a.by-l),u=Math.min(s,a.by+l+1);let d=-1;Pn.r=255,Pn.g=255,Pn.b=255;for(let g=h;g<u;g++){const x=g*o;for(let m=c;m<f;m++){const p=(x+m)*4,b=r[p],_=r[p+1],E=r[p+2],M=Math.max(b,_,E),v=Math.min(b,_,E),S=(M>0?(M-v)/M:0)*(.35+.65*(M/255));S>d&&(d=S,Pn.r=b,Pn.g=_,Pn.b=E)}}return Pn}const j0=14,Gd=1.5,K0={x:0,y:0};function Ts(t=512){return{xy:new Float32Array(t*2),n:0}}function Cs(t,e,n,i,a,r,o=Ts()){a=Math.max(0,Math.min(a,Math.min(n,i)/2));const s=4*(j0+1)+Math.ceil(2*(n+i)/Gd)+8;o.xy.length<s*2&&(o.xy=new Float32Array(s*2));const l=o.xy;let c=0;const f=(d,g)=>{r?(r(d,g,K0),l[c*2]=K0.x,l[c*2+1]=K0.y):(l[c*2]=d,l[c*2+1]=g),c++},h=(d,g,x,m)=>{const p=Math.hypot(x-d,m-g),b=Math.max(1,Math.ceil(p/Gd));for(let _=0;_<b;_++){const E=_/b;f(d+(x-d)*E,g+(m-g)*E)}},u=(d,g,x,m)=>{for(let p=0;p<=j0;p++){const b=x+(m-x)*(p/j0);f(d+a*Math.cos(b),g+a*Math.sin(b))}};return h(t+a,e,t+n-a,e),u(t+n-a,e+a,-Math.PI/2,0),h(t+n,e+a,t+n,e+i-a),u(t+n-a,e+i-a,0,Math.PI/2),h(t+n-a,e+i,t+a,e+i),u(t+a,e+i-a,Math.PI/2,Math.PI),h(t,e+i-a,t,e+a),u(t+a,e+a,Math.PI,1.5*Math.PI),o.n=c,o}yv(()=>{Oe&&Oe.instances.size>0&&Oe.pausedAtMs===null&&Bl()});typeof document<"u"&&document.addEventListener("visibilitychange",()=>{!Oe||Oe.pausedAtMs!==null||Oe.contextLost||(document.hidden?Eg():Oe.instances.size>0&&Bl())});function Tv(t){const e=vg(),n=t.hostCanvas.getContext("2d",{alpha:!0});if(!n)throw new Error("metal-fx: canvas 2D context unavailable");const i=t.scale??1,a={canvas:t.hostCanvas,ctx:n,cssWidth:t.cssWidth,cssHeight:t.cssHeight,cornerRadius:t.cornerRadius,kind:t.kind,ringCssPx:t.ringCssPx??(t.kind==="circle"?2:1)*i,shaderScale:t.shaderScale??(t.kind==="circle"?bg:xg)*i,opacityMul:t.opacityMul??1,glowGain:t.glowGain??1,visible:!0,paused:t.paused??!1,everCopied:!1,frozen:null,dpr:typeof window<"u"&&window.devicePixelRatio||1,scale:i,onAfterFrame:t.onAfterFrame,onComposite:t.onComposite,onFirstCopy:t.onFirstCopy,mask:t.mask??null,deform:null,deformLayers:null,overscan:0,cursorLight:null,glowFast:!1,rawCanvas:null,wantRaw:!1,ringCanvas:null,wantRing:!1};return Kf(a),e.instances.add(a),e.rafId===0&&e.pausedAtMs===null&&Bl(),a}function Cv(t){if(!Oe)return;Oe.instances.delete(t);const e=Oe.glowQueue.indexOf(t);e!==-1&&Oe.glowQueue.splice(e,1),Oe.instances.size===0&&(Eg(),Sv())}function Rv(t){Oe&&(Oe.glowQueue.includes(t)||Oe.glowQueue.push(t))}function Pv(t){if(!Oe)return;const e=Oe.glowQueue.indexOf(t);e!==-1&&Oe.glowQueue.splice(e,1)}function Bo(t,e){let n=!1;e.mask!==void 0&&(t.mask=e.mask),e.cssWidth!==void 0&&e.cssWidth!==t.cssWidth&&(t.cssWidth=e.cssWidth,n=!0),e.cssHeight!==void 0&&e.cssHeight!==t.cssHeight&&(t.cssHeight=e.cssHeight,n=!0),e.cornerRadius!==void 0&&(t.cornerRadius=e.cornerRadius),e.scale!==void 0&&(t.scale=e.scale),e.kind!==void 0&&e.kind!==t.kind&&(t.kind=e.kind,e.shaderScale===void 0&&(t.shaderScale=(e.kind==="circle"?bg:xg)*t.scale),e.ringCssPx===void 0&&(t.ringCssPx=(e.kind==="circle"?2:1)*t.scale)),e.shaderScale!==void 0&&(t.shaderScale=e.shaderScale),e.ringCssPx!==void 0&&(t.ringCssPx=e.ringCssPx),e.opacityMul!==void 0&&(t.opacityMul=e.opacityMul),e.glowGain!==void 0&&(t.glowGain=e.glowGain),e.paused!==void 0&&e.paused!==t.paused&&(t.paused=e.paused,e.paused?yg(t):t.frozen=null,!e.paused&&Oe&&Oe.rafId===0&&Oe.pausedAtMs===null&&!Oe.contextLost&&Bl()),n&&Kf(t)}function Dv(t,e){t.visible=e,e&&Oe&&Oe.rafId===0&&Oe.pausedAtMs===null&&!Oe.contextLost&&Bl()}function Iv(t){return(typeof window<"u"&&window.devicePixelRatio||1)===t.dpr?!1:(Kf(t),wg(t),!0)}function Lv(t,e){const n=vg();n.preset=pg[t].modes[e],n.presetDirty=!0}let po=null;function Fv(t){po=t}function Z0(t,e){!po||!Oe||!t.visible||t.paused||Oe.glowQueue.includes(t)&&(t.glowFast=!!po(t,e))}function Kf(t){t.dpr=typeof window<"u"&&window.devicePixelRatio||1;const e=t.overscan,n=Math.max(1,Math.round((t.cssWidth+2*e)*t.dpr)),i=Math.max(1,Math.round((t.cssHeight+2*e)*t.dpr));t.canvas.width!==n&&(t.canvas.width=n),t.canvas.height!==i&&(t.canvas.height=i);const a=t.canvas.style;e>0?(a.left=`${-e}px`,a.top=`${-e}px`,a.width=`calc(100% + ${2*e}px)`,a.height=`calc(100% + ${2*e}px)`,a.borderRadius="0"):a.left!==""&&(a.left="",a.top="",a.width="100%",a.height="100%",a.borderRadius="")}function zv(t){const{ctx:e,dpr:n,canvas:i}=t,a=t.ringCssPx*n,r=i.width,o=i.height,s=Math.max(0,(t.cornerRadius-t.ringCssPx)*n);e.save(),e.globalCompositeOperation="destination-out",e.fillStyle="#000",e.beginPath(),e.roundRect(a,a,r-2*a,o-2*a,s),e.fill(),e.restore()}const Uv=Ts();function Xr(t,e,n,i,a,r,o,s){const{xy:l,n:c}=Cs(e,n,i,a,r,o,Uv);t.beginPath();for(let f=0;f<c;f++)f===0?t.moveTo(l[0]*s,l[1]*s):t.lineTo(l[f*2]*s,l[f*2+1]*s);t.closePath()}function yg(t){if(!Oe)return null;const e=Oe.frameBitmap??Oe.glCanvas,n=Oe.glCanvas.width,i=Oe.glCanvas.height;if(n<1||i<1)return null;let a=t.frozen;a||(a=document.createElement("canvas"),t.frozen=a),(a.width!==n||a.height!==i)&&(a.width=n,a.height=i);const r=a.getContext("2d");return r?(r.clearRect(0,0,n,i),r.drawImage(e,0,0),a):(t.frozen=null,null)}function wg(t){var e,n;if(!Oe)return;const i=(t.paused?t.frozen??yg(t):null)??Oe.frameBitmap??Oe.glCanvas,a=t.dpr,r=t.canvas.width,o=t.canvas.height;if(r<1||o<1)return;const s=Math.max(1,Math.round(t.cssWidth*a)),l=Math.max(1,Math.round(t.cssHeight*a)),c=t.overscan*a,f=i.width,h=i.height,u=mg*a,d=gg*a;let g=s*(f/u)/t.shaderScale,x=l*(h/d)/t.shaderScale;g>f&&(g=f),x>h&&(x=h);const m=Math.max(0,(f-g)/2),p=Math.max(0,(h-x)/2),b=t.opacityMul*Oe.preset.shaderOpacity,_=t.ctx;_.clearRect(0,0,r,o);const E=t.deform;if(t.mask){if(b<1&&(_.globalAlpha=b),_.drawImage(i,m,p,g,x,0,0,r,o),b<1&&(_.globalAlpha=1),t.wantRaw){let M=t.rawCanvas;M||(M=document.createElement("canvas"),t.rawCanvas=M),(M.width!==r||M.height!==o)&&(M.width=r,M.height=o);const v=M.getContext("2d");v&&(v.clearRect(0,0,r,o),v.drawImage(t.canvas,0,0))}_.save(),_.globalCompositeOperation="destination-in",_.fillStyle="#000",t.mask(_,r,o,a),_.restore(),_.globalCompositeOperation="source-over"}else if(!E)b<1&&(_.globalAlpha=b),_.drawImage(i,m,p,g,x,0,0,r,o),b<1&&(_.globalAlpha=1),zv(t);else{const M=t.cssWidth,v=t.cssHeight,S=t.cornerRadius,T=t.ringCssPx,y=t.deformLayers;_.save(),_.translate(c,c);const w=s/g,A=l/x,C=Math.min(f,g*(s+2*c)/s),R=Math.min(h,x*(l+2*c)/l),P=Math.max(0,(f-C)/2),I=Math.max(0,(h-R)/2),z=C*w,B=R*A;if(b<1&&(_.globalAlpha=b),_.drawImage(i,P,I,C,R,s/2-z/2,l/2-B/2,z,B),b<1&&(_.globalAlpha=1),_.globalCompositeOperation="destination-in",Xr(_,0,0,M,v,S,E,a),_.fillStyle="#000",_.fill(),_.globalCompositeOperation="destination-out",Xr(_,T,T,M-2*T,v-2*T,Math.max(0,S-T),E,a),_.fill(),t.wantRing){let F=t.ringCanvas;F||(F=document.createElement("canvas"),t.ringCanvas=F),(F.width!==r||F.height!==o)&&(F.width=r,F.height=o);const O=F.getContext("2d");O&&(O.setTransform(1,0,0,1,0,0),O.globalCompositeOperation="source-over",O.clearRect(0,0,r,o),O.translate(c,c),b<1&&(O.globalAlpha=b),O.drawImage(i,P,I,C,R,s/2-z/2,l/2-B/2,z,B),O.globalAlpha=1,O.globalCompositeOperation="destination-out",Xr(O,T,T,M-2*T,v-2*T,Math.max(0,S-T),E,a),O.fillStyle="#000",O.fill(),O.globalCompositeOperation="source-over",O.setTransform(1,0,0,1,0,0))}if(y!=null&&y.hairline){const F=y.hairline;_.globalCompositeOperation="destination-over",Xr(_,F.inset,F.inset,M-2*F.inset,v-2*F.inset,Math.max(0,S-F.inset),E,a),_.lineWidth=F.width*a,_.strokeStyle=F.color,_.stroke()}if(y!=null&&y.fill&&(_.globalCompositeOperation="destination-over",Xr(_,0,0,M,v,S,E,a),_.fillStyle=y.fill,_.fill()),y!=null&&y.rim){const F=y.rim;_.globalCompositeOperation="source-over",_.save(),Xr(_,0,0,M,v,S,E,a),_.clip();const O=F.inset+F.width/2;Xr(_,O,O,M-2*O,v-2*O,Math.max(0,S-O),E,a),_.lineWidth=F.width*a,_.strokeStyle=F.color,_.stroke(),_.restore()}_.restore(),_.globalCompositeOperation="source-over"}if((e=t.onComposite)==null||e.call(t),t.onFirstCopy){const M=t.onFirstCopy;t.onFirstCopy=void 0,M()}(n=t.onAfterFrame)==null||n.call(t)}function Nv(){if(!Oe)return;const{gl:t,uniforms:e,preset:n,glCanvas:i,dpr:a}=Oe;e.u_resolution&&t.uniform2f(e.u_resolution,i.width,i.height),e.u_pixelRatio&&t.uniform1f(e.u_pixelRatio,a),e.u_colorBack&&t.uniform4fv(e.u_colorBack,$d(n.colorBack)),e.u_colorTint&&t.uniform4fv(e.u_colorTint,$d(n.colorTint)),e.u_repetition&&t.uniform1f(e.u_repetition,n.repetition),e.u_softness&&t.uniform1f(e.u_softness,n.softness),e.u_shiftRed&&t.uniform1f(e.u_shiftRed,n.shiftRed),e.u_shiftBlue&&t.uniform1f(e.u_shiftBlue,n.shiftBlue),e.u_distortion&&t.uniform1f(e.u_distortion,n.distortion),e.u_contour&&t.uniform1f(e.u_contour,n.contour),e.u_angle&&t.uniform1f(e.u_angle,n.angle),e.u_shape&&t.uniform1f(e.u_shape,n.shape),e.u_isImage&&t.uniform1i(e.u_isImage,0),e.u_imageAspectRatio&&t.uniform1f(e.u_imageAspectRatio,1),e.u_originX&&t.uniform1f(e.u_originX,n.originX),e.u_originY&&t.uniform1f(e.u_originY,n.originY),e.u_worldWidth&&t.uniform1f(e.u_worldWidth,n.worldWidth),e.u_worldHeight&&t.uniform1f(e.u_worldHeight,n.worldHeight),e.u_fit&&t.uniform1f(e.u_fit,n.fit),e.u_scale&&t.uniform1f(e.u_scale,n.scale),e.u_rotation&&t.uniform1f(e.u_rotation,n.rotation),e.u_offsetX&&t.uniform1f(e.u_offsetX,n.offsetX),e.u_offsetY&&t.uniform1f(e.u_offsetY,n.offsetY),Oe.presetDirty=!1}function Ov(t){if(!Oe)return;const{gl:e,uniforms:n,preset:i,glCanvas:a}=Oe,r=(t-Oe.startMs-Oe.pausedMs)/1e3*i.speed;e.viewport(0,0,a.width,a.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),Oe.presetDirty&&Nv(),n.u_time&&e.uniform1f(n.u_time,r),e.drawArrays(e.TRIANGLES,0,6),Oe.frameCount++}let Vd=0;function Sg(t){var e;if(!Oe)return;if(Oe.contextLost){Oe.rafId=0;return}let n=!1;for(const i of Oe.instances)if(i.visible&&(!i.paused||!i.everCopied)){n=!0;break}if(!n){Oe.rafId=0;return}if(Oe.rafId=requestAnimationFrame(Sg),t-Vd<nv){if(po)for(const i of Oe.glowQueue)i.glowFast&&i.visible&&!i.paused&&(i.glowFast=!!po(i,t));return}Vd=t,Ov(t),Ev(),Oe.useOffscreen&&((e=Oe.frameBitmap)==null||e.close(),Oe.frameBitmap=Oe.glCanvas.transferToImageBitmap());for(const i of Oe.instances)i.visible&&(i.paused&&i.everCopied||(wg(i),i.everCopied=!0));if(po&&Oe.glowQueue.length>0&&++Oe.glowSkip%rv===0)for(const i of Oe.glowQueue)i.visible&&!i.paused&&(i.glowFast=!!po(i,t))}function Bl(){!Oe||Oe.rafId!==0||(Oe.rafId=requestAnimationFrame(Sg))}function Eg(){Oe&&(Oe.rafId!==0&&cancelAnimationFrame(Oe.rafId),Oe.rafId=0)}const Rh={linear:t=>t,smoothstep:t=>t*t*(3-2*t)};function Vs(t,e,n,i=Rh.linear){return{from:t,to:e,dur:n,ease:i,startMs:-1,val:t,done:!1}}function Xs(t,e){t.startMs=e,t.val=t.from,t.done=!1}function Xd(t,e){if(t.done||t.startMs<0)return t.val;const n=Math.min(1,(e-t.startMs)/t.dur);return t.val=t.from+(t.to-t.from)*t.ease(n),n>=1&&(t.done=!0),t.val}const $v=Object.freeze({haloOpMul:2,extraIntensity:3.51,peakOp:.85,baseOp:.34,inset:1.5,extraOutward:1,wanderRange:15,wanderLerp:.0075,fadeRate:.00875,lumLo:.08,lumHi:.32,minDwellMs:1500,relocFadeMs:300,relocFadeOutMs:450,pointGain:2.5,haloHalfLen:7.8,extraHalfLen:9.13952/3,haloStrokeXl:26.4,haloStrokeLg:15.6,haloStrokeMd:7.2,haloStrokeSm:3,haloBlurXl:8.4,haloBlurLg:4.8,haloBlurMd:2.1,haloBlurSm:.9,haloOpXl:.385,haloOpLg:.595,haloOpMd:.7,haloOpSm:.7,extraStrokeOuter:4/3,extraStrokeCore:2/3,extraBlurOuter:2/3,extraBlurCore:1.35/3,extraFadeR:13/3,extraOpOuter:.85}),ht={...$v},Yd=new Set;function kv(t){return Yd.add(t),()=>{Yd.delete(t)}}const Bv=Object.freeze({enabled:!0,reach:56,fadeMs:200,cursor:!0,cursorDistance:186,cursorStrength:3.35,cursorDiffuse:1.4,cursorFalloff:37,cursorDepth:.4,cursorEdge:0,cursorReach:11.5,cursorBlur:.5,cursorZoom:3,spill:!1,spillRadius:48,spillStrength:.55,spillOffset:.35,spillLumGain:.7,spillSaturation:1.3,spillInside:.5,spillBlur:0,catchLight:!1,catchFollow:.25,catchGain:1}),cl={...Bv};let Ag=!1,Tg=0,oc=0,bl=0,Rs=!1,vo=0,Ph=0,$a=Number.NaN,mo=Number.NaN,Dh=0,Ih=0,eo=0,rs=0,Rn=null;const Fn={d:0,nx:0,ny:0,k:1,left:0,top:0},J0={x:0,y:0},Aa={r:255,g:255,b:255};let Ya=null,Lh="",Fh=-1,zh=-1,Al=!1;function Hv(){bl++,Vv()}function Wv(){bl=Math.max(0,bl-1),bl===0&&Xv()}const Gv=t=>typeof window.matchMedia=="function"&&window.matchMedia(t).matches;function qd(){return Ag||performance.now()<Tg,!1}function Vv(){Rs||bl===0||typeof document>"u"||Gv("(pointer: fine)")&&(Rs=!0,document.addEventListener("pointermove",Cg,{passive:!0}),document.addEventListener("pointerleave",vr),document.addEventListener("pointercancel",vr),document.addEventListener("keydown",Rg,{passive:!0}),document.addEventListener("visibilitychange",vr),window.addEventListener("blur",vr))}function Xv(){Rs&&(Rs=!1,document.removeEventListener("pointermove",Cg),document.removeEventListener("pointerleave",vr),document.removeEventListener("pointercancel",vr),document.removeEventListener("keydown",Rg),document.removeEventListener("visibilitychange",vr),window.removeEventListener("blur",vr),vo!==0&&(cancelAnimationFrame(vo),vo=0),Rn&&(Rn.cursorLight=null,Rn=null),eo=0,rs=0,Ya&&(Ya.remove(),Ya=null,Lh="",Fh=-1,zh=-1,Al=!1),Co(),Er&&(Er.remove(),Er=null))}let Uh=!0,Zf=!1;function Cg(t){Uh=t.pointerType==="mouse"||t.pointerType==="",Zf=!1,$a=Dh=t.clientX,mo=Ih=t.clientY,Nh&&Er&&(Uh&&Dg($a,mo)?void 0:Co()),Pg()}function Rg(){Zf=!0,Co()}function vr(){$a=mo=Number.NaN,Pg()}function Pg(){!Rs||vo!==0||(Ph=performance.now(),vo=requestAnimationFrame(Ig))}function Yv(t,e,n,i,a,r,o){const s=r==="circle"?Math.min(n,i)/2:Math.max(0,Math.min(a,Math.min(n,i)/2)),l=n/2,c=i/2,f=Math.max(0,n/2-s),h=Math.max(0,i/2-s),u=Math.max(-f,Math.min(f,t-l)),d=Math.max(-h,Math.min(h,e-c)),g=t-l-u,x=e-c-d,m=Math.hypot(g,x);if(m>1e-6)return o.x=l+u+g/m*s,o.y=c+d+x/m*s,m-s;const p=t,b=n-t,_=e,E=i-e,M=Math.min(p,b,_,E);return M===p?(o.x=0,o.y=e):M===b?(o.x=n,o.y=e):M===_?(o.x=t,o.y=0):(o.x=t,o.y=i),-M}let Er=null,Nh=!1,ms=!1,Oh="",Ha=null,vl="";const qv=/^(INPUT|TEXTAREA|SELECT)$/;let $h=new WeakMap,jd=0,kh=null;function jv(t){let e=t;for(;e&&e!==document.body;){if(qv.test(e.tagName)||e.isContentEditable)return!0;e=e.parentElement}return!1}function Kv(){if(Er)return!0;const t=document.createElement("div");t.className="metal-fx-cursor",t.setAttribute("aria-hidden","true"),t.style.cssText="position:fixed;left:0;top:0;pointer-events:none;z-index:2147483001;will-change:transform;transform-origin:0 0;display:none";const e=document.createElement("canvas");e.style.display="block",t.appendChild(e),document.body.appendChild(t);const n=e.getContext("2d"),i=document.createElement("canvas"),a=i.getContext("2d");return!n||!a?(t.remove(),!1):(Er=t,!0)}function Dg(t,e,n=!1){const i=performance.now();if(!n&&ms&&i-jd<12)return!0;jd=i;const a=document.elementFromPoint(t,e);if(!a)return Bh(),!1;if(a===kh&&ms)return!0;kh=a;let r=$h.get(a);if(r===void 0){if(r=!jv(a),r){const o=getComputedStyle(a).cursor;r=o==="auto"||o==="default"||o==="none"}$h.set(a,r)}if(!r)return Bh(),!1;if(!ms){const o=document.documentElement;Oh=o.style.cursor,o.style.cursor="none",ms=!0}return a!==Ha&&(Ha&&(Ha.style.cursor=vl,Ha=null,vl=""),getComputedStyle(a).cursor!=="none"&&(Ha=a,vl=a.style.cursor,a.style.cursor="none")),!0}function Bh(){Ha&&(Ha.isConnected&&(Ha.style.cursor=vl),Ha=null,vl=""),ms&&(document.documentElement.style.cursor=Oh,ms=!1,Oh=""),kh=null,$h=new WeakMap}function Co(){Bh(),Er&&Nh&&(Er.style.display="none",Nh=!1)}function Zv(){if(Ya)return Ya;const t=document.createElement("div");return t.className="metal-fx-cursor-spill",t.setAttribute("aria-hidden","true"),t.style.cssText="position:fixed;left:0;top:0;pointer-events:none;z-index:2147483000;border-radius:50%;mix-blend-mode:plus-lighter;will-change:transform,opacity;opacity:0;display:none",document.body.appendChild(t),Ya=t,t}function Hh(){!Ya||!Al||(Ya.style.display="none",Ya.style.opacity="0",Al=!1)}function Ig(t){if(vo=0,!Rs)return;const e=performance.now();try{Jv(t)}catch(n){Ag=!0,Co(),Hh(),Rn&&(Rn.cursorLight=null,Rn=null),typeof console<"u"&&console.warn("metal-fx: cursor light disabled after error",n);return}performance.now()-e>6?++oc>=20&&(oc=0,Tg=performance.now()+5e3,Co()):oc>0&&oc--}function Jv(t){const e=cl,n=Math.min(.05,Math.max(.001,(t-Ph)/1e3));Ph=t;let i=null,a=0,r=0;if(e.enabled&&Oe&&!Number.isNaN($a)){let s=Number.POSITIVE_INFINITY;const l=Math.max(1,e.reach),c=e.cursor&&qd()?Math.max(1,e.cursorDistance):0,f=Math.max(l,c);for(const h of Oe.instances){if(!h.visible||!h.canvas.isConnected)continue;const u=h.canvas.getBoundingClientRect();if(u.width<=0)continue;const d=h.overscan,g=u.width/(h.cssWidth+2*d),x=u.left+d*g,m=u.top+d*g,p=f*g;if($a<x-p||$a>x+h.cssWidth*g+p||mo<m-p||mo>m+h.cssHeight*g+p)continue;const b=($a-x)/g,_=(mo-m)/g,E=Yv(b,_,h.cssWidth,h.cssHeight,h.cornerRadius,h.kind,J0),M=Math.abs(E);M<=f&&M<s&&(s=M,i=h,Fn.d=E,Fn.nx=J0.x,Fn.ny=J0.y,Fn.k=g,Fn.left=x,Fn.top=m)}if(i){if(s<=l){const h=1-s/l;a=h*h*(3-2*h)}s<=c&&(r=Math.min(1,(1-s/c)*3)),i.mask&&(Fn.nx=i.cssWidth/2,Fn.ny=i.cssHeight/2,i.wantRaw=!0)}}const o=1-Math.exp(-(n*1e3)/(Math.max(1,e.fadeMs)/3));if(eo+=(a-eo)*o,rs+=(r-rs)*o,i&&i!==Rn&&(Rn&&(Rn.cursorLight=null,Z0(Rn,t)),Rn=i),!i&&eo<.002&&rs<.002){eo=0,rs=0,Rn&&(Rn.cursorLight=null,Z0(Rn,t),Rn=null),Hh(),Co();return}if(Rn){if(e.catchLight){const s=Rn.cursorLight??(Rn.cursorLight={x:0,y:0,w:0});s.x=Fn.nx,s.y=Fn.ny,s.w=eo}else Rn.cursorLight&&(Rn.cursorLight=null);if(Z0(Rn,t),e.cursor&&rs>.002&&Uh&&!Zf&&!Number.isNaN($a)&&qd()&&Kv()&&Dg($a,mo)?void 0:Co(),e.spill){const s=Zv(),l=_g(Rn,Fn.nx,Fn.ny,2),c=Ch(Rn,Fn.nx,Fn.ny,3),f=Math.max(l.r,l.g,l.b)||1,h=fg(l.r*255/f,l.g*255/f,l.b*255/f),[u,d,g]=dg(h[0],Math.min(1,h[1]*e.spillSaturation),1);Aa.r+=(u-Aa.r)*.15,Aa.g+=(d-Aa.g)*.15,Aa.b+=(g-Aa.b)*.15;const x=Math.round(Aa.r/6)*6,m=Math.round(Aa.g/6)*6,p=Math.round(Aa.b/6)*6,b=`radial-gradient(closest-side, rgba(${x},${m},${p},1) 0%, rgba(${x},${m},${p},0.35) 45%, rgba(${x},${m},${p},0) 100%)`;b!==Lh&&(Lh=b,s.style.background=b);const _=Math.max(1,e.spillRadius*Fn.k);_!==Fh&&(Fh=_,s.style.width=`${(2*_).toFixed(1)}px`,s.style.height=`${(2*_).toFixed(1)}px`),e.spillBlur!==zh&&(zh=e.spillBlur,s.style.filter=e.spillBlur>0?`blur(${e.spillBlur}px)`:"");const E=Fn.left+Fn.nx*Fn.k,M=Fn.top+Fn.ny*Fn.k,v=Dh+(E-Dh)*e.spillOffset,S=Ih+(M-Ih)*e.spillOffset;s.style.transform=`translate3d(${(v-_).toFixed(2)}px,${(S-_).toFixed(2)}px,0)`;const T=Math.min(1,Math.max(0,c/.3)),y=1-e.spillLumGain+e.spillLumGain*T,w=Fn.d<0?e.spillInside:1,A=Math.max(0,Math.min(1,e.spillStrength*eo*y*w));Al||(s.style.display="",Al=!0),s.style.opacity=A.toFixed(3)}else Hh();vo=requestAnimationFrame(Ig)}}const b0=new Map;function Qv(t,e){const n=Math.sqrt(12*t*t/e+1);let i=Math.floor(n);i%2===0&&i--;const a=i+2,r=(12*t*t-e*i*i-4*e*i-3*e)/(-4*i-4),o=Math.round(r),s=[];for(let l=0;l<e;l++)s.push(l<o?i:a);return s}function eM(t,e,n,i,a){const r=1/(a+a+1);for(let o=0;o<i;o++){const s=o*n;let l=0;for(let c=-a;c<=a;c++)l+=t[s+Math.min(n-1,Math.max(0,c))];for(let c=0;c<n;c++){e[s+c]=l*r;const f=s+Math.max(0,c-a),h=s+Math.min(n-1,c+a+1);l+=t[h]-t[f]}}}function tM(t,e,n,i,a){const r=1/(a+a+1);for(let o=0;o<n;o++){let s=0;for(let l=-a;l<=a;l++)s+=t[Math.min(i-1,Math.max(0,l))*n+o];for(let l=0;l<i;l++){e[l*n+o]=s*r;const c=Math.max(0,l-a)*n+o,f=Math.min(i-1,l+a+1)*n+o;s+=t[f]-t[c]}}}function Jf(t,e,n,i){if(i<=.05)return t;const a=new Float32Array(t.length);let r=t;for(const o of Qv(i,3)){const s=(o-1)/2;eM(r,a,e,n,s),tM(a,r,e,n,s)}return r}function nM(t,e,n,i,a,r,o){const s=document.createElement("canvas");s.width=n,s.height=i;const l=s.getContext("2d",{willReadFrequently:!0}),c=new Float32Array(n*i);if(!l)return c;l.scale(a,a),l.strokeStyle="#fff",l.lineCap="round",l.lineJoin="round",l.lineWidth=e,l.beginPath(),l.moveTo(r-t,o),l.lineTo(r+t,o),l.stroke();const f=l.getImageData(0,0,n,i).data;for(let h=0,u=3;h<c.length;h++,u+=4)c[h]=f[u]/255;return c}function Lg(t,e,n,i,a){let r=0;for(const x of t)r=Math.max(r,(x.stroke/2+3*x.blur)*n);const o=Math.ceil(r)+1,s=2*e+2*o,l=2*o,c=Math.ceil(s*i),f=Math.ceil(l*i),h=new Float32Array(c*f);for(const x of t){let m=nM(e,x.stroke*n,c,f,i,o,o);m=Jf(m,c,f,x.blur*n*i);const p=x.opacity;for(let b=0;b<h.length;b++){const _=m[b]*p;h[b]=h[b]+_*(1-h[b])}}if(a>0){const x=o*i,m=o*i,p=a*n*i;for(let b=0;b<f;b++)for(let _=0;_<c;_++){const E=Math.hypot(_+.5-x,b+.5-m)/p;let M;E<=.3?M=1:E<=.65?M=1-(E-.3)/.35*.75:E<1?M=.25*(1-(E-.65)/.35):M=0,h[b*c+_]*=M}}const u=document.createElement("canvas");u.width=c,u.height=f;const d=u.getContext("2d"),g=new Uint8ClampedArray(c*f);for(let x=0;x<h.length;x++)g[x]=Math.round(Math.min(1,h[x])*255);if(d){const x=d.createImageData(c,f),m=x.data;for(let p=0,b=0;p<h.length;p++,b+=4)m[b]=255,m[b+1]=255,m[b+2]=255,m[b+3]=g[p];d.putImageData(x,0,0)}return{canvas:u,alpha:g,w:s,h:l,ax:o,ay:o}}function Fg(){return[ht.haloStrokeXl,ht.haloStrokeLg,ht.haloStrokeMd,ht.haloStrokeSm,ht.haloBlurXl,ht.haloBlurLg,ht.haloBlurMd,ht.haloBlurSm,ht.haloOpXl,ht.haloOpLg,ht.haloOpMd,ht.haloOpSm,ht.extraStrokeOuter,ht.extraStrokeCore,ht.extraBlurOuter,ht.extraBlurCore,ht.extraFadeR,ht.extraOpOuter].join(",")}function iM(t,e,n){const i=`h|${t.toFixed(2)}|${e}|${n}|${Fg()}`;let a=b0.get(i);return a||(a=Lg([{stroke:ht.haloStrokeXl,blur:ht.haloBlurXl,opacity:ht.haloOpXl},{stroke:ht.haloStrokeLg,blur:ht.haloBlurLg,opacity:ht.haloOpLg},{stroke:ht.haloStrokeMd,blur:ht.haloBlurMd,opacity:ht.haloOpMd},{stroke:ht.haloStrokeSm,blur:ht.haloBlurSm,opacity:ht.haloOpSm}],t,e,n,0),b0.set(i,a)),a}function aM(t,e,n){const i=`e|${t.toFixed(2)}|${e}|${n}|${Fg()}`;let a=b0.get(i);return a||(a=Lg([{stroke:ht.extraStrokeOuter,blur:ht.extraBlurOuter,opacity:ht.extraOpOuter},{stroke:ht.extraStrokeCore,blur:ht.extraBlurCore,opacity:1}],t,e,n,ht.extraFadeR),b0.set(i,a)),a}function Kd(t,e,n,i,a){var r;const o=e<<16|n<<8|i;if(a.canvas&&a.tint===o&&a.src===t)return a.canvas;let s=a.canvas,l=a.img;(!s||!l||a.src!==t)&&(s=document.createElement("canvas"),s.width=t.canvas.width,s.height=t.canvas.height,l=((r=s.getContext("2d"))==null?void 0:r.createImageData(s.width,s.height))??null);const c=s.getContext("2d");if(c&&l){const f=l.data,h=t.alpha;for(let u=0,d=0;u<h.length;u++,d+=4)f[d]=e,f[d+1]=n,f[d+2]=i,f[d+3]=h[u];c.putImageData(l,0,0)}return a.canvas=s,a.img=l,a.tint=o,a.src=t,s}function Qf(t,e,n){const i=Math.max(0,Math.min(n,Math.min(t,e)/2));return 2*Math.max(0,t-2*i)+2*Math.max(0,e-2*i)+2*Math.PI*i}function v0(t,e,n,i){return i==="circle"?2*Math.PI*Math.max(0,Math.min(n,Math.min(t,e)/2)):Qf(t,e,n)}function Tl(t,e,n,i,a,r,o,s){const l=s||{x:0,y:0},c=Math.max(0,Math.min(i,Math.min(e,n)/2));if(o==="circle"){const p=2*Math.PI*c;if(p<=1e-4)return l.x=e*.5,l.y=n*.5,l;t=(t%p+p)%p;const b=-Math.PI/2+t/p*Math.PI*2,_=Math.max(0,c-a+r);return l.x=e*.5+_*Math.cos(b),l.y=n*.5+_*Math.sin(b),l}const f=Math.max(0,e-2*c),h=Math.max(0,n-2*c),u=Math.PI*c/2,d=2*(f+h)+4*u;t=(t%d+d)%d;const g=Math.max(0,c-a+r);let x=t;if(x<f)return l.x=c+x,l.y=a-r,l;if(x-=f,x<u){const p=-Math.PI/2+(u>0?x/u:0)*(Math.PI/2);return l.x=e-c+g*Math.cos(p),l.y=c+g*Math.sin(p),l}if(x-=u,x<h)return l.x=e-a+r,l.y=c+x,l;if(x-=h,x<u){const p=(u>0?x/u:0)*(Math.PI/2);return l.x=e-c+g*Math.cos(p),l.y=n-c+g*Math.sin(p),l}if(x-=u,x<f)return l.x=e-c-x,l.y=n-a+r,l;if(x-=f,x<u){const p=Math.PI/2+(u>0?x/u:0)*(Math.PI/2);return l.x=c+g*Math.cos(p),l.y=n-c+g*Math.sin(p),l}if(x-=u,x<h)return l.x=a-r,l.y=n-c-x,l;x-=h;const m=Math.PI+(u>0?x/u:0)*(Math.PI/2);return l.x=c+g*Math.cos(m),l.y=c+g*Math.sin(m),l}function rM(t,e,n,i,a,r){const o=Math.max(0,Math.min(a,Math.min(n,i)/2));if(r==="circle"){const M=2*Math.PI*o;return M<=1e-4?0:((Math.atan2(e-i/2,t-n/2)+Math.PI/2)/(2*Math.PI)*M%M+M)%M}const s=Math.max(0,n-2*o),l=Math.max(0,i-2*o),c=Math.PI*o/2,f=Math.PI/2,h=s,u=h+c,d=u+l,g=d+c,x=g+s,m=x+c,p=m+l,b=t>=o&&t<=n-o,_=e>=o&&e<=i-o;if(b&&_){const M=t,v=n-t,S=e,T=i-e,y=Math.min(M,v,S,T);return y===S?t-o:y===v?u+(e-o):y===T?g+(n-o-t):m+(i-o-e)}if(b)return e<i/2?t-o:g+(n-o-t);if(_)return t>n/2?u+(e-o):m+(i-o-e);if(t>n/2&&e<i/2){const M=Math.atan2(e-o,t-(n-o));return h+(M+f)/f*c}if(t>n/2){const M=Math.atan2(e-(i-o),t-(n-o));return d+M/f*c}if(e>i/2){const M=Math.atan2(e-(i-o),t-o);return x+(M-f)/f*c}const E=Math.atan2(e-o,t-o);return p+(E+Math.PI)/f*c}const Q0={x:0,y:0},eu={x:0,y:0};function oM(t,e,n,i,a,r){return Tl(t-.1,e,n,i,a,0,r,Q0),Tl(t+.1,e,n,i,a,0,r,eu),Math.atan2(eu.y-Q0.y,eu.x-Q0.x)}function Zd(t,e,n){if(t===e)return n<t?0:1;const i=Math.max(0,Math.min(1,(n-t)/(e-t)));return i*i*(3-2*i)}function sM(t){if(t.samplePoints&&t.samplePoints.length>0)return t.samplePoints.map((a,r)=>({x:a.x,y:a.y,arc:r}));const e=v0(t.width,t.height,t.cornerRadius,t.kind),n=ht.inset*(t.scale??1),i=[];for(let a=0;a<kd;a++){const r=a/kd*e,o=Tl(r,t.width,t.height,t.cornerRadius,n,0,t.kind);i.push({x:o.x,y:o.y,arc:r})}return i}const lM=.05,cM=120*(1e3/15),Jd=1e3/15,Qd=2e3,tu=400,uM=2.625,hM=1.008,fM=.31,zg=140,Ug=40,Ng=20,dM=34,sc=.25,pM=.01,ep=.004,mM=.5,gM=3.5,Ni={x:0,y:0};function tp(t,e){const{width:n,height:i}=e,a=e.scale??1,r=Math.min(3,typeof window<"u"&&window.devicePixelRatio||1),o=v0(n,i,e.cornerRadius,e.kind)/Qf(zg,Ug,Ng),s=Math.max(1,ht.haloHalfLen*o),l=Math.max(.6,ht.extraHalfLen*o),c=iM(s,a,r),f=aM(l,a,r),h=Math.ceil(Math.max(c.ay,f.ay)+ht.extraOutward*o*a+2),u=document.createElement("div");u.className="metal-fx-glow-svg",u.setAttribute("aria-hidden","true");const d=document.createElement("div");d.className="metal-fx-glow-env",d.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0";const g=document.createElement("canvas");g.className="metal-fx-glow-canvas";const x=n+2*h,m=i+2*h;g.width=Math.ceil(x*r),g.height=Math.ceil(m*r),g.style.cssText=`position:absolute;left:${-h}px;top:${-h}px;width:${x}px;height:${m}px;pointer-events:none`,d.appendChild(g),u.appendChild(d),t.appendChild(u);const p=g.getContext("2d",{willReadFrequently:!!e.maskDataUrl});if(!p)throw new Error("metal-fx: glow canvas 2D context unavailable");const b={wrap:u,env:d,canvas:g,ctx:p,surroundPath:null,bandPath:null,maskAlpha:null,maskReady:!1,margin:h,dpr:r,halo:c,extra:f,haloTint:{canvas:null,img:null,tint:-1,src:null},extraTint:{canvas:null,img:null,tint:-1,src:null},mO:Ts(),mI:Ts(),maskSum:Number.NaN,maskDeformed:!1,deform:null,width:n,height:i,cornerRadius:e.cornerRadius,kind:e.kind,scale:a,perim:sM(e),pointMode:!!(e.samplePoints&&e.samplePoints.length>0),currentIdx:0,appearedAt:0,glowOpacity:0,relocTween:null,relocNextIdx:-1,relocMul:0,envClock:0,cursorMode:!1,cursorArc:0,cursorTargetArc:0,lastTickMs:0,wanderS:0,wanderTargetS:0,wanderFrames:0,tintFrom:{r:255,g:255,b:255},tintTarget:{r:255,g:255,b:255},tintTween:null,tintHoldUntil:0,dX:Number.NaN,dY:Number.NaN,dAng:Number.NaN,dEX:Number.NaN,dEY:Number.NaN,dHOp:Number.NaN,dEOp:Number.NaN,dHaloTint:"",dExtraTint:"",dirty:!0,dEnv:-1};if(e.maskDataUrl){const _=new Image;_.onload=()=>{const E=document.createElement("canvas");E.width=g.width,E.height=g.height;const M=E.getContext("2d",{willReadFrequently:!0});if(!M)return;M.scale(r,r),M.drawImage(_,h,h,n,i);const v=M.getImageData(0,0,E.width,E.height).data,S=E.width*E.height,T=new Float32Array(S);for(let R=0,P=3;R<S;R++,P+=4)T[R]=v[P]/255;const y=Jf(Float32Array.from(T),E.width,E.height,gM*r);let w=0;for(let R=0;R<S;R++)y[R]>w&&(w=y[R]);const A=w>0?mM/w:0,C=new Uint8ClampedArray(S);for(let R=0;R<S;R++)C[R]=Math.round(Math.max(T[R],y[R]*A)*255);b.maskAlpha=C,b.maskReady=!0,b.dirty=!0},_.src=e.maskDataUrl}else Wh(b,null);return b}function Wh(t,e){if(t.pointMode)return;const{margin:n,width:i,height:a,cornerRadius:r}=t,o=t.kind==="circle"?2:1;Cs(0,0,i,a,r,e,t.mO),Cs(o,o,i-2*o,a-2*o,Math.max(0,r-o),e,t.mI);const s=new Path2D;nu(s,t.mO,n);const l=new Path2D;nu(l,t.mO,n),nu(l,t.mI,n);const c=new Path2D;c.rect(0,0,i+2*n,a+2*n),c.addPath(s),t.surroundPath=c,t.bandPath=l,t.maskReady=!0}function nu(t,e,n){const i=e.xy;for(let a=0;a<e.n;a++){const r=i[a*2]+n,o=i[a*2+1]+n;a===0?t.moveTo(r,o):t.lineTo(r,o)}t.closePath()}function xM(t,e){if(!t)return 0;Cs(0,0,e.width,e.height,e.cornerRadius,t,e.mO);let n=0;const i=e.mO.xy;for(let a=0;a<e.mO.n;a+=4)n+=i[a*2]*1.37+i[a*2+1];return n}function bM(t,e){if(t.deform=e,!t.pointMode)if(e){const n=xM(e,t);n!==t.maskSum&&(t.maskSum=n,Wh(t,e),t.maskDeformed=!0,t.dirty=!0)}else t.maskDeformed&&(t.maskSum=Number.NaN,Wh(t,null),t.maskDeformed=!1,t.dirty=!0)}function vM(t,e,n,i,a="dark"){var r;const{width:o,height:s,cornerRadius:l,perim:c}=t;if(c.length===0)return!1;const f=2;let h=-1,u=t.currentIdx,d=0;for(let L=0;L<c.length;L++){const ve=c[L],me=Ch(e,ve.x,ve.y,f);me>h&&(h=me,u=L),L===t.currentIdx&&(d=me)}const g=t.appearedAt>0&&n-t.appearedAt<ht.minDwellMs,x=ht.baseOp+(ht.peakOp-ht.baseOp)*Zd(ht.lumLo,ht.lumHi,d),m=!g&&h-d>lM,p=e.cursorLight,b=cl.enabled&&cl.catchLight&&!t.pointMode&&!!p&&p.w>.02,_=v0(o,s,l,t.kind);b&&(t.cursorTargetArc=rM(p.x,p.y,o,s,l,t.kind));const E=b?Math.min(1,ht.peakOp*cl.catchGain*p.w):0,M=t.lastTickMs>0?Math.min(200,Math.max(.5,n-t.lastTickMs)):Jd;t.lastTickMs=n,t.envClock+=Math.min(M,dM);const v=L=>1-Math.pow(1-L,M/Jd),S=Math.max(1,ht.relocFadeMs),T=Math.max(1,ht.relocFadeOutMs),y=-2,w=-3,A=()=>{t.appearedAt=n,t.wanderS=0,t.wanderTargetS=0,t.wanderFrames=0,t.relocTween=Vs(0,1,S,Rh.smoothstep),Xs(t.relocTween,t.envClock)},C=L=>{t.relocNextIdx=L,t.relocTween=Vs(1,0,T,Rh.smoothstep),Xs(t.relocTween,t.envClock)};if((r=t.relocTween)!=null&&r.done&&t.relocTween.to===0){let L=t.relocNextIdx;if(L===y&&!b&&(L=w),L===w)t.cursorMode=!1,t.appearedAt=0,t.relocTween=null;else if(L===y)t.cursorMode=!0,t.cursorArc=t.cursorTargetArc,t.glowOpacity=E,A();else{t.currentIdx=L;const ve=c[t.currentIdx],me=Ch(e,ve.x,ve.y,f);t.glowOpacity=ht.baseOp+(ht.peakOp-ht.baseOp)*Zd(ht.lumLo,ht.lumHi,me),A()}}if((!t.relocTween||t.relocTween.done)&&(t.appearedAt===0?(b?(t.cursorMode=!0,t.cursorArc=t.cursorTargetArc,t.glowOpacity=E):(t.cursorMode=!1,t.currentIdx=u,t.glowOpacity=x),A()):b!==t.cursorMode?C(b?y:w):!t.cursorMode&&m&&C(u)),t.cursorMode){b&&(t.glowOpacity=E);const L=Math.max(.01,Math.min(1,cl.catchFollow)),ve=1-Math.pow(1-L,M/(1e3/60));let me=t.cursorTargetArc-t.cursorArc;me=(me%_+_*1.5)%_-_/2,t.cursorArc+=me*ve}else t.glowOpacity+=(x-t.glowOpacity)*v(ht.fadeRate);t.glowOpacity=Math.max(0,Math.min(1,t.glowOpacity)),t.relocMul=t.relocTween?Xd(t.relocTween,t.envClock):1;const R=v0(o,s,l,t.kind)/Qf(zg,Ug,Ng),P=ht.wanderRange*R;t.wanderFrames+=M,t.wanderFrames>=cM&&(t.wanderTargetS=(Math.random()*2-1)*P,t.wanderFrames=0),t.wanderS+=(t.wanderTargetS-t.wanderS)*v(ht.wanderLerp);let I,z,B,F,O;if(t.pointMode){const L=c[t.currentIdx];I=L.x+t.wanderS,z=L.y,B=0,F=I,O=z}else{const L=t.cursorMode?t.cursorArc:c[t.currentIdx].arc+t.wanderS,ve=ht.inset*t.scale;Tl(L,o,s,l,ve,0,t.kind,Ni),I=Ni.x,z=Ni.y,B=oM(L,o,s,l,ve,t.kind);const me=ht.extraOutward*R*t.scale;Tl(L,o,s,l,ve,me,t.kind,Ni),F=Ni.x,O=Ni.y}t.deform&&(t.deform(I,z,Ni),I=Ni.x,z=Ni.y,t.deform(F,O,Ni),F=Ni.x,O=Ni.y);const k=a==="light",G=k?Av(e,I,z,f):_g(e,I,z,f);t.tintTween?t.tintTween.done&&(k?(t.tintFrom={r:t.tintFrom.r+(t.tintTarget.r-t.tintFrom.r)*t.tintTween.val,g:t.tintFrom.g+(t.tintTarget.g-t.tintFrom.g)*t.tintTween.val,b:t.tintFrom.b+(t.tintTarget.b-t.tintFrom.b)*t.tintTween.val},t.tintTarget={...G},t.tintTween=Vs(0,1,tu),Xs(t.tintTween,n)):n>=t.tintHoldUntil&&(t.tintFrom={...t.tintTarget},t.tintTarget={...G},t.tintTween=Vs(0,1,tu),Xs(t.tintTween,n),t.tintHoldUntil=n+Qd)):(t.tintFrom={...G},t.tintTarget={...G},t.tintTween=Vs(0,1,tu),Xs(t.tintTween,n),t.tintHoldUntil=k?0:n+Qd),Xd(t.tintTween,n);const ee=t.tintTween.val;let ne,J,he;if(k)ne=Math.round(t.tintFrom.r+(t.tintTarget.r-t.tintFrom.r)*ee),J=Math.round(t.tintFrom.g+(t.tintTarget.g-t.tintFrom.g)*ee),he=Math.round(t.tintFrom.b+(t.tintTarget.b-t.tintFrom.b)*ee);else{const L=t.tintFrom.r+(t.tintTarget.r-t.tintFrom.r)*ee,ve=t.tintFrom.g+(t.tintTarget.g-t.tintFrom.g)*ee,me=t.tintFrom.b+(t.tintTarget.b-t.tintFrom.b)*ee,we=Math.max(L,ve,me)||1;ne=Math.round(255*(L/we)),J=Math.round(255*(ve/we)),he=Math.round(255*(me/we))}const H=`rgb(${ne},${J},${he})`;let N="#ffffff";if(k){const L=fg(ne,J,he),[ve,me,we]=dg(L[0],Math.min(1,L[1]*uM),Math.max(fM,L[2]*hM));N=`rgb(${ve},${me},${we})`}const W=Math.max(0,Math.min(1,i))*(t.pointMode?ht.pointGain:1),fe=Math.min(1,t.glowOpacity*ht.haloOpMul*W),j=Math.min(1,t.glowOpacity*ht.extraIntensity*W);if(Math.abs(t.relocMul-t.dEnv)>.002){const L=t.relocMul>=.998&&t.dEnv<.998;t.dEnv=t.relocMul,t.env.style.opacity=t.relocMul.toFixed(3),L&&(t.dirty=!0)}const ue=!!(t.relocTween&&!t.relocTween.done)||t.cursorMode,de=!(Math.abs(I-t.dX)<sc&&Math.abs(z-t.dY)<sc&&Math.abs(B-t.dAng)<pM&&Math.abs(F-t.dEX)<sc&&Math.abs(O-t.dEY)<sc),ae=!(Math.abs(fe-t.dHOp)<ep&&Math.abs(j-t.dEOp)<ep),Ee=H!==t.dHaloTint||N!==t.dExtraTint;return(t.dirty||de||ae||Ee)&&(t.dX=I,t.dY=z,t.dAng=B,t.dEX=F,t.dEY=O,t.dHOp=fe,t.dEOp=j,t.dHaloTint=H,t.dExtraTint=N,t.dirty=!1,MM(t,I,z,B,F,O,fe,j,H,N)),ue}function MM(t,e,n,i,a,r,o,s,l,c){const{ctx:f,canvas:h,dpr:u,margin:d}=t;if(f.setTransform(1,0,0,1,0,0),f.globalCompositeOperation="source-over",f.globalAlpha=1,f.clearRect(0,0,h.width,h.height),o<=.002&&s<=.002||!t.maskReady)return;const g=o>.002?Kd(t.halo,...np(l),t.haloTint):null,x=s>.002?c==="#ffffff"?t.extra.canvas:Kd(t.extra,...np(c),t.extraTint):null,m=E=>{g&&(f.save(),f.translate(e+d,n+d),f.rotate(i),f.globalAlpha=o*E,f.drawImage(g,-t.halo.ax,-t.halo.ay,t.halo.w,t.halo.h),f.restore()),x&&(f.save(),f.translate(a+d,r+d),f.rotate(i),f.globalAlpha=s*E,f.drawImage(x,-t.extra.ax,-t.extra.ay,t.extra.w,t.extra.h),f.restore())};if(!t.pointMode&&t.surroundPath&&t.bandPath){f.save(),f.scale(u,u),f.clip(t.surroundPath,"evenodd"),m(.5),f.restore(),f.save(),f.scale(u,u),f.clip(t.bandPath,"evenodd"),m(1),f.restore();return}f.save(),f.scale(u,u),m(1),f.restore();const p=t.maskAlpha;if(!p)return;const b=f.getImageData(0,0,h.width,h.height),_=b.data;for(let E=0,M=3;E<p.length;E++,M+=4){const v=p[E];if(v!==255){if(v===0){_[M]=0;continue}_[M]=(_[M]*v+127)/255}}f.putImageData(b,0,0)}const Ho=[255,255,255];function np(t){if(t[0]==="#")return Ho[0]=parseInt(t.slice(1,3),16),Ho[1]=parseInt(t.slice(3,5),16),Ho[2]=parseInt(t.slice(5,7),16),Ho;let e=4,n=0,i=0;for(;e<t.length&&i<3;){const a=t.charCodeAt(e++);a>=48&&a<=57?n=n*10+(a-48):(a===44||a===41)&&(Ho[i++]=n,n=0)}return Ho}function _M(t,e){t.pointMode===e.pointMode&&(e.currentIdx=Math.min(t.currentIdx,Math.max(0,e.perim.length-1)),e.appearedAt=t.appearedAt,e.glowOpacity=t.glowOpacity,e.relocTween=t.relocTween,e.relocNextIdx=t.relocNextIdx,e.relocMul=t.relocMul,e.envClock=t.envClock,e.cursorMode=t.cursorMode,e.cursorArc=t.cursorArc,e.cursorTargetArc=t.cursorTargetArc,e.lastTickMs=t.lastTickMs,e.wanderS=t.wanderS,e.wanderTargetS=t.wanderTargetS,e.wanderFrames=t.wanderFrames,e.tintFrom=t.tintFrom,e.tintTarget=t.tintTarget,e.tintTween=t.tintTween,e.tintHoldUntil=t.tintHoldUntil,e.dEnv=t.relocMul,e.env.style.opacity=t.relocMul.toFixed(3))}const ip=Object.freeze({offsetY:1,blur:.5,alpha:.9,color:"#ffffff"});function yM(t,e,n){const i=Math.min(3,typeof window<"u"&&window.devicePixelRatio||1),a=Math.ceil(3*n.blur+Math.abs(n.offsetY)+1),r=e.width+2*a,o=e.height+2*a,s=document.createElement("canvas");s.className="metal-fx-rim-canvas",s.setAttribute("aria-hidden","true"),s.width=Math.ceil(r*i),s.height=Math.ceil(o*i),s.style.cssText=`position:absolute;left:${-a}px;top:${-a}px;width:${r}px;height:${o}px;pointer-events:none`;const l=s.getContext("2d"),c=document.createElement("canvas");c.width=s.width,c.height=s.height;const f=c.getContext("2d",{willReadFrequently:!0});if(!l||!f)return null;t.appendChild(s);const h={canvas:s,ctx:l,scratch:c,sctx:f,width:e.width,height:e.height,cornerRadius:e.cornerRadius,kind:e.kind,ring:e.ring,margin:a,dpr:i,opts:n,mO:Ts(),mI:Ts(),sum:Number.NaN};return Og(h,null,!0),h}function ap(t,e,n){const i=e.xy;for(let a=0;a<e.n;a++){const r=i[a*2]+n,o=i[a*2+1]+n;a===0?t.moveTo(r,o):t.lineTo(r,o)}t.closePath()}function Og(t,e,n=!1){const{width:i,height:a,cornerRadius:r,ring:o,margin:s,dpr:l}=t;Cs(0,0,i,a,r,e,t.mO),Cs(o,o,i-2*o,a-2*o,Math.max(0,r-o),e,t.mI);let c=0;const f=t.mO.xy;for(let R=0;R<t.mO.n;R+=4)c+=f[R*2]*1.37+f[R*2+1];if(!n&&c===t.sum)return;t.sum=c;const{sctx:h,scratch:u,ctx:d,canvas:g,opts:x}=t,m=u.width,p=u.height;h.setTransform(1,0,0,1,0,0),h.clearRect(0,0,m,p),h.scale(l,l),h.fillStyle="#fff",h.beginPath(),ap(h,t.mO,s),ap(h,t.mI,s),h.fill("evenodd");const b=h.getImageData(0,0,m,p).data,_=m*p,E=new Float32Array(_);for(let R=0,P=3;R<_;R++,P+=4)E[R]=b[P]/255;const M=Math.round(x.offsetY*l)*m,v=new Float32Array(_);if(M>=0)for(let R=0;R<_;R++)v[R]=Math.max(0,E[R]-(R>=M?E[R-M]:0));else for(let R=0;R<_;R++)v[R]=Math.max(0,E[R]-(R-M<_?E[R-M]:0));const S=Jf(v,m,p,x.blur*l),T=parseInt(x.color.slice(1,3),16),y=parseInt(x.color.slice(3,5),16),w=parseInt(x.color.slice(5,7),16),A=d.createImageData(m,p),C=A.data;for(let R=0,P=0;R<_;R++,P+=4)C[P]=T,C[P+1]=y,C[P+2]=w,C[P+3]=Math.round(Math.min(1,S[R]*E[R]*x.alpha)*255);d.setTransform(1,0,0,1,0,0),d.putImageData(A,0,0)}function rp(t){t&&t.canvas.remove()}const Jc=12,op=32,sp=1,lp=.55,wM=1,SM=1,EM=.85,AM=0,TM=1.3,cp=3.6,CM=.7,RM=1,PM=.52,DM=1,IM=.044,LM=235,FM=2.535,up=.7,zM=.5,UM=new Set(["INPUT","TEXTAREA","SELECT","OPTION"]);function NM(t,e){const n=Math.max(t.left-e.right,e.left-t.right,0),i=Math.max(t.top-e.bottom,e.top-t.bottom,0);return Math.sqrt(n*n+i*i)}function OM(t,e,n,i){return!(Math.min(t.bottom,e.bottom)-Math.max(t.top,e.top)<n||Math.max(t.left-e.right,e.left-t.right,0)>i)}function $M(t,e,n,i){return Math.min(t.right,e.right)-Math.max(t.left,e.left)<n?!1:Math.max(t.top-e.bottom,e.top-t.bottom,0)<=i}function Mo(t,e,n,i,a,r){const o=Math.max(0,Math.min(r,i*.5,a*.5)),s=t.roundRect;if(typeof s=="function"){s.call(t,e,n,i,a,o);return}t.moveTo(e+o,n),t.lineTo(e+i-o,n),t.quadraticCurveTo(e+i,n,e+i,n+o),t.lineTo(e+i,n+a-o),t.quadraticCurveTo(e+i,n+a,e+i-o,n+a),t.lineTo(e+o,n+a),t.quadraticCurveTo(e,n+a,e,n+a-o),t.lineTo(e,n+o),t.quadraticCurveTo(e,n,e+o,n)}function $g(t,e,n,i,a){if(!a.flipX&&!a.flipY){t.drawImage(e,a.sx??0,a.sy??0,n,i,a.x,a.y,a.w,a.h);return}t.save(),a.flipX&&(t.translate(a.x+a.w,0),t.scale(-1,1)),a.flipY&&(t.translate(0,a.y+a.h),t.scale(1,-1)),t.drawImage(e,a.sx??0,a.sy??0,n,i,a.flipX?0:a.x,a.flipY?0:a.y,a.w,a.h),t.restore()}const kM=4;function BM(t,e,n,i,a,r,o){if(i<=2*o||a<=2*o){t.beginPath(),Mo(t,e,n,i,a,r),t.clip();return}t.beginPath(),Mo(t,e,n,i,a,r),Mo(t,e+o,n+o,i-2*o,a-2*o,Math.max(0,r-o)),t.clip("evenodd")}function HM(t,e,n,i,a,r,o,s,l,c,f,h){const u=h??Math.max(1,Math.round((Jc+kM*3)*f));let d=Math.max(0,o),g=!0;for(let x=0;x<3&&d>1e-4;x++){const m=Math.min(1,d);t.save(),BM(t,c.x,c.y,c.w,c.h,c.r,u),t.globalCompositeOperation=g?"source-over":"lighter",g=!1,t.globalAlpha=m,$g(t,e,n,i,l),t.globalAlpha=1,t.globalCompositeOperation="destination-in",t.fillStyle=s,t.fillRect(0,0,a,r),t.restore(),d-=m}}function kg(t,e,n,i,a,r,o){const s=o|0;if(s<1||i<=2*s||a<=2*s){t.beginPath(),Mo(t,e,n,i,a,r),t.clip();return}t.beginPath(),Mo(t,e,n,i,a,r),Mo(t,e+s,n+s,i-2*s,a-2*s,Math.max(0,r-s)),t.clip("evenodd")}function WM(t,e,n,i,a,r,o,s,l,c,f,h){let u=s*f,d=!0;for(let g=0;g<3&&u>1e-4;g++){const x=Math.min(1,u);t.save(),kg(t,o.x,o.y,o.w,o.h,o.r,l),t.globalCompositeOperation=d?"source-over":"lighter",d=!1,t.globalAlpha=x,$g(t,e,n,i,h),t.globalAlpha=1,t.globalCompositeOperation="destination-in",t.fillStyle=c,t.fillRect(0,0,a,r),t.restore(),u-=x}}function GM(t,e,n,i,a,r,o,s){const l=t.createLinearGradient(i,a,r,o);l.addColorStop(0,`rgba(255,255,255,${s.toFixed(3)})`),l.addColorStop(.5,`rgba(255,255,255,${(s*.45).toFixed(3)})`),l.addColorStop(1,"rgba(255,255,255,0)"),t.save(),kg(t,e.x,e.y,e.w,e.h,e.r,n),t.globalCompositeOperation="lighter",t.lineWidth=n*2,t.strokeStyle=l,t.beginPath(),Mo(t,e.x,e.y,e.w,e.h,e.r),t.stroke(),t.restore()}function Bg(t){const e=getComputedStyle(t),n=[parseFloat(e.borderTopLeftRadius)||0,parseFloat(e.borderTopRightRadius)||0,parseFloat(e.borderBottomRightRadius)||0,parseFloat(e.borderBottomLeftRadius)||0].filter(i=>i>0);return n.length?Math.min.apply(null,n):0}function Hg(t){const e=getComputedStyle(t),n=Math.max(parseFloat(e.borderTopWidth)||0,parseFloat(e.borderRightWidth)||0,parseFloat(e.borderBottomWidth)||0,parseFloat(e.borderLeftWidth)||0);let i=0,a=0;const r=e.boxShadow;if(r&&r!=="none"){const s=r.replace(/rgba?\([^)]*\)/g,f=>f.replace(/,/g,"\0")).split(/,\s*/);let l=1/0,c=1/0;for(const f of s){const h=f.match(/-?\d+(?:\.\d+)?px/g);if(!h||h.length<4)continue;const u=parseFloat(h[3]);u>0&&(/\binset\b/.test(f)?u<l&&(l=u):u<c&&(c=u))}Number.isFinite(l)&&(i=l),Number.isFinite(c)&&(a=c)}const o=Math.max(n,a);return{width:Math.max(n,i,a)||1,outerCssPx:o}}function hp(t){t.cornerRadius=Bg(t.el);const e=Hg(t.el);t.hairlineWidth=e.width,t.hairlineOuterCssPx=e.outerCssPx}function VM(t){typeof ResizeObserver<"u"&&(t.resizeObserver=new ResizeObserver(()=>hp(t)),t.resizeObserver.observe(t.el)),typeof MutationObserver<"u"&&(t.mutationObserver=new MutationObserver(()=>hp(t)),t.mutationObserver.observe(t.el,{attributes:!0,attributeFilter:["style","class"]}))}function XM(t){var e,n;(e=t.resizeObserver)==null||e.disconnect(),t.resizeObserver=null,(n=t.mutationObserver)==null||n.disconnect(),t.mutationObserver=null}const Ar=new Set,YM=Object.freeze({enabled:!0,radius:11.5,strength:.57,penumbra:.55,falloff:.21,edgeFade:.7,softness:.24,repaintMs:36}),z0={...YM};let mr=null,iu=0,fp=0,dp=!1;function ed(){iu!==0||typeof requestAnimationFrame>"u"||(iu=requestAnimationFrame(t=>{if(iu=0,t-fp<z0.repaintMs){ed();return}fp=t,Gg()}))}let M0=!1;function qM(t,e){const n=z0.radius;for(const i of Ar){const a=i.anchorEl.getBoundingClientRect(),r=i.el.getBoundingClientRect(),o=Math.min(a.left,r.left)-n,s=Math.max(a.right,r.right)+n,l=Math.min(a.top,r.top)-n,c=Math.max(a.bottom,r.bottom)+n;if(t>=o&&t<=s&&e>=l&&e<=c)return!0}return!1}function pp(t){if(mr={x:t.clientX,y:t.clientY},!z0.enabled)return;const e=qM(t.clientX,t.clientY);(e||M0)&&ed(),M0=e}function lc(){mr=null,M0&&ed(),M0=!1}function Wg(t){typeof document>"u"||t===dp||(dp=t,t?(document.addEventListener("pointermove",pp,{passive:!0}),document.addEventListener("pointerleave",lc),window.addEventListener("blur",lc)):(document.removeEventListener("pointermove",pp),document.removeEventListener("pointerleave",lc),window.removeEventListener("blur",lc),mr=null))}function jM(t,e,n,i,a,r,o,s,l){if(!mr)return;const c=z0;if(!c.enabled||c.strength<=0)return;const f=c.radius;let h,u,d,g,x,m;if(a){const B=n.left>=i.right;h=B?i.right:n.right,u=B?n.left:i.left,d=mr.x,g=mr.y,x=Math.max(n.top,i.top),m=Math.min(n.bottom,i.bottom)}else{const B=n.top>=i.bottom;h=B?i.bottom:n.bottom,u=B?n.top:i.top,d=mr.y,g=mr.x,x=Math.max(n.left,i.left),m=Math.min(n.right,i.right)}const p=Math.min(h,u),b=Math.max(h,u),_=Math.max(1,b-p);if(d<p-f||d>b+f||g<x-f||g>m+f)return;const E=Math.max(0,Math.min(1,Math.abs(d-h)/_)),M=Math.max(.5,f*c.edgeFade),v=Math.min(1,Math.min(d-(p-f),b+f-d)/M),S=Math.min(1,Math.min(g-(x-f),m+f-g)/M),T=c.strength*(1-c.falloff*E)*v*S;if(T<=.001)return;const y=f*l*(1+c.penumbra*E),w=a?(g-i.top+s)*l:(g-i.left+s)*l,A=Math.max(0,Math.min(.5,(1-c.softness)*.5)),C=Math.max(.001,.5-A),R=a?o:r,P=Math.max(0,Math.floor(w-y)),I=Math.min(R,Math.ceil(w+y));if(I<=P)return;const z=new Float32Array(I-P);for(let B=P;B<I;B++){const F=(B+.5-(w-y))/(2*y),O=F<C?F/C:F>1-C?(1-F)/C:1;z[B-P]=1-T*Math.max(0,Math.min(1,O))}for(const B of[t,e]){const F=a?0:P,O=a?P:0,k=a?r:I-P,G=a?I-P:o,ee=B.getImageData(F,O,k,G),ne=ee.data;if(a)for(let J=0;J<G;J++){const he=z[J];if(!(he>=.999))for(let H=J*k*4+3,N=(J+1)*k*4;H<N;H+=4)ne[H]=ne[H]*he}else for(let J=0;J<G;J++)for(let he=0;he<k;he++){const H=z[he];if(H>=.999)continue;const N=(J*k+he)*4+3;ne[N]=ne[N]*H}B.putImageData(ee,F,O)}}let za=null,os=null,ss=null,ls=null;function KM(t,e){return za||(za=document.createElement("canvas"),os=document.createElement("canvas"),ss=za.getContext("2d",{alpha:!0}),ls=os.getContext("2d",{alpha:!0})),!ss||!ls||!za||!os?!1:(za.width!==t&&(za.width=t,os.width=t),za.height!==e&&(za.height=e,os.height=e),ss.setTransform(1,0,0,1,0,0),ls.setTransform(1,0,0,1,0,0),ss.globalCompositeOperation="source-over",ls.globalCompositeOperation="source-over",ss.clearRect(0,0,t,e),ls.clearRect(0,0,t,e),!0)}function ZM(t,e,n,i=1){if(typeof document>"u"||UM.has(t.tagName))return null;for(const g of Ar)if(g.el===t)return g.strength=i,g;const a=document.createElement("div");a.setAttribute("data-metal-fx-reflection",""),a.setAttribute("aria-hidden","true");const r=document.createElement("canvas");r.className="metal-fx-reflection-canvas";const o=r.getContext("2d",{alpha:!0,willReadFrequently:!0});if(!o)return null;const s=document.createElement("canvas");s.className="metal-fx-reflection-stroke-canvas";const l=s.getContext("2d",{alpha:!0,willReadFrequently:!0});if(!l)return null;a.appendChild(r),a.appendChild(s);const c=getComputedStyle(t);let f=!1;c.position==="static"&&(t.style.position="relative",f=!0);let h=!1;c.isolation!=="isolate"&&(t.style.isolation="isolate",h=!0),t.setAttribute("data-metal-fx-reflect-host",""),t.insertBefore(a,t.firstChild);const u=Hg(t),d={el:t,anchor:e,anchorEl:n,strength:i,wrap:a,canvas:r,ctx:o,strokeCanvas:s,strokeCtx:l,cornerRadius:Bg(t),hairlineWidth:u.width,hairlineOuterCssPx:u.outerCssPx,appliedPositionRelative:f,appliedIsolation:h,resizeObserver:null,mutationObserver:null};return VM(d),Ar.add(d),Wg(!0),d}function JM(t){for(const e of Ar)if(e.el===t){XM(e),e.canvas.width=0,e.canvas.height=0,e.strokeCanvas.width=0,e.strokeCanvas.height=0,e.wrap.parentNode===e.el&&e.el.removeChild(e.wrap),e.el.removeAttribute("data-metal-fx-reflect-host"),e.appliedPositionRelative&&(e.el.style.position=""),e.appliedIsolation&&(e.el.style.isolation=""),Ar.delete(e),Ar.size===0&&Wg(!1);return}}function QM(t,e,n,i,a){if(i<1||a<1)return null;const r=t.getContext("2d");if(!r)return null;const o=r.getImageData(e,n,i,a).data;let s=i,l=a,c=-1,f=-1;for(let h=0;h<a;h++){const u=h*i;for(let d=0;d<i;d++)o[(u+d)*4+3]>8&&(d<s&&(s=d),d>c&&(c=d),h<l&&(l=h),h>f&&(f=h))}return c<0?null:{x:e+s,y:n+l,w:c-s+1,h:f-l+1}}function Gg(){if(Ar.size===0)return;const t=typeof window<"u"&&window.devicePixelRatio||1,e=new Map;for(const n of Ar){const i=n.el.getBoundingClientRect();let a=e.get(n.anchorEl);if(a||(a=n.anchorEl.getBoundingClientRect(),e.set(n.anchorEl,a)),i.width<1||i.height<1||a.width<1||a.height<1)continue;const r=n.el.hasAttribute("data-metal-fx-text");if(r&&!n.glyphStyled&&(n.canvas.style.filter="blur(0.4px) saturate(1.35) brightness(1.2)",n.glyphStyled=!0),!OM(a,i,sp,op)&&!$M(a,i,sp,op)){n.canvas.width!==1&&(n.canvas.width=1,n.canvas.height=1),n.strokeCanvas.width!==1&&(n.strokeCanvas.width=1,n.strokeCanvas.height=1);continue}const o=r&&!!n.anchor.mask;o&&!n.anchor.wantRaw&&(n.anchor.wantRaw=!0),n.anchor.wantRing||(n.anchor.wantRing=!0);const s=!!n.anchor.deform&&!!n.anchor.ringCanvas,l=o&&n.anchor.rawCanvas?n.anchor.rawCanvas:s?n.anchor.ringCanvas:n.anchor.canvas,c=Math.round(n.anchor.overscan*t);let f=c,h=c,u=(l.width|0)-2*c,d=(l.height|0)-2*c;if(n.anchor.mask&&!o){const G=QM(l,f,h,u,d);G&&(f=G.x,h=G.y,u=G.w,d=G.h)}if(u<4||d<4)continue;const g=(a.left+a.right)*.5,x=(a.top+a.bottom)*.5,m=(i.left+i.right)*.5,p=(i.top+i.bottom)*.5,b=g-m,_=x-p,E=Math.max(a.left-i.right,i.left-a.right,0),M=Math.max(a.top-i.bottom,i.top-a.bottom,0),v=E>=M,S=NM(a,i);let T=1-Math.min(1,S/Jc);T=T*T*(3-2*T);const y=lp+(wM-lp)*T,w=Math.min(cp,y*TM*CM)*n.strength,A=a.left>=i.left&&a.right<=i.right&&a.top>=i.top&&a.bottom<=i.bottom?[!0,!1]:[v],C=n.anchor.scale??1,R=Math.max(RM*C,n.hairlineWidth),P=Math.max(1,Math.round(R*t)),I=Math.max(1,Math.round(Math.max(DM*C,n.hairlineWidth)*t)),z=n.hairlineOuterCssPx;n.wrap.style.inset=`${-z}px`,n.wrap.style.borderRadius=`${Math.max(0,n.cornerRadius)}px`;const B=Math.max(1,Math.round((i.width+z*2)*t)),F=Math.max(1,Math.round((i.height+z*2)*t));n.canvas.width!==B&&(n.canvas.width=B),n.canvas.height!==F&&(n.canvas.height=F),n.strokeCanvas.width!==B&&(n.strokeCanvas.width=B),n.strokeCanvas.height!==F&&(n.strokeCanvas.height=F);const O=n.ctx;O.setTransform(1,0,0,1,0,0),O.clearRect(0,0,B,F);const k=n.strokeCtx;k.setTransform(1,0,0,1,0,0),k.clearRect(0,0,B,F);for(const[G,ee]of A.entries()){const ne=G>0&&KM(B,F),J=ne?ss:O,he=ne?ls:k,H=Math.min((r?Jc*1.5:Jc)*t,Math.max(B,F));let N,W,fe,j;ee?(N=b>0?B:0,fe=b>0?B-H:H,W=F*.5,j=F*.5):(W=_>0?F:0,j=_>0?F-H:H,N=B*.5,fe=B*.5);const ue=O.createLinearGradient(N,W,fe,j);ue.addColorStop(0,`rgba(0,0,0,${SM})`),ue.addColorStop(.5,`rgba(0,0,0,${EM})`),ue.addColorStop(1,`rgba(0,0,0,${AM})`);const de=u/t,ae=r?Math.max(1,Math.min(ee?B:F,Math.round(ee?u:d))):Math.max(1,Math.round(LM*Math.max(.1,de/140)*t));let Ee,L,ve,me,we=!1,te=!1;if(ee){const U=Math.max(a.top,i.top),D=Math.min(a.bottom,i.bottom);we=!0,Ee=b>0?B-ae:0,L=Math.round((U-i.top+z)*t),ve=ae,me=Math.max(1,Math.round((D-U)*t))}else{const U=Math.max(a.left,i.left),D=Math.min(a.right,i.right);te=!0,Ee=Math.round((U-i.left+z)*t),L=_>0?F-ae:0,ve=Math.max(1,Math.round((D-U)*t)),me=ae}const qe={x:Ee,y:L,w:ve,h:me,flipX:we,flipY:te,sx:f,sy:h},Ue={x:0,y:0,w:B,h:F,r:Math.max(0,n.cornerRadius*t)},_e=r?Math.min(1,w*up):Math.min(cp,w*FM*up*zM);HM(J,l,u,d,B,F,_e,ue,qe,Ue,t,r?Math.max(B,F):void 0),r||(WM(he,l,u,d,B,F,Ue,w,P,ue,PM,qe),GM(he,Ue,I,N,W,fe,j,Math.min(.85,IM*w))),ne&&(O.globalCompositeOperation="lighter",O.drawImage(za,0,0),k.globalCompositeOperation="lighter",k.drawImage(os,0,0))}for(const G of A)jM(O,k,a,i,G,B,F,z,t);O.globalCompositeOperation="source-over",k.globalCompositeOperation="source-over"}}let au=!1,mp=0;function e3(){au||(au=!0,!(typeof requestAnimationFrame>"u")&&requestAnimationFrame(t=>{au=!1,!(t-mp<iv)&&(mp=t,Gg())}))}const gp="metal-fx-styles",t3=`
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
`;let ru=!1;function n3(){if(ru||typeof document>"u")return;if(document.getElementById(gp)){ru=!0;return}const t=document.createElement("style");t.id=gp,t.textContent=t3,document.head.appendChild(t),ru=!0}n3();const i3={position:"absolute",inset:0,width:"100%",height:"100%"},a3={position:"absolute",inset:3},r3={position:"absolute",inset:0,pointerEvents:"none",zIndex:3,borderRadius:"inherit"},o3={position:"absolute",inset:0,pointerEvents:"none",zIndex:4},Ml=new Map;function s3(){const t=globalThis;t.__MFX_DEBUG__&&(t.__mfxGlow=Ml)}Fv((t,e)=>{const n=Ml.get(t);return n?vM(n.handles,t,e,t.opacityMul*t.glowGain,n.themeRef.current):!1});function l3(t){const[e,n]=ie.useState(()=>t!=="auto"?t:typeof window>"u"||!window.matchMedia||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return ie.useEffect(()=>{if(t!=="auto"){n(t);return}if(typeof window>"u"||!window.matchMedia)return;const i=window.matchMedia("(prefers-color-scheme: dark)"),a=()=>n(i.matches?"dark":"light");return a(),i.addEventListener("change",a),()=>i.removeEventListener("change",a)},[t]),e}const Vg=ie.forwardRef(function({children:t,variant:e="button",preset:n="chromatic",theme:i="auto",strength:a=1,glowGain:r=1,paused:o=!1,borderRadius:s,normalizeHostStyles:l=!0,reflectionTargets:c,disableGlow:f=!1,innerShadow:h,shaderScale:u,ringCssPx:d,scale:g=1,mask:x,glowMode:m="mask",className:p,style:b,..._},E){const M=ie.useRef(null),v=ie.useRef(null),S=ie.useRef(null),T=ie.useRef(null),y=ie.useRef(null),w=ie.useRef(null),A=ie.useRef(null),C=ie.useRef(null),R=ie.useRef("dark"),P=ie.useRef(0),[I,z]=ie.useState(!1),B=l3(i),F=ie.useMemo(()=>_v(),[]);R.current=B;const O=e==="circle"?"circle":"pill",k=!f;ie.useImperativeHandle(E,()=>M.current,[]);const G=(ne,J)=>{if(O==="circle")return Math.min(ne,J)/2;const he=typeof s=="number"?s:(()=>{var H;const N=(H=w.current)==null?void 0:H.firstElementChild;if(N){const W=parseFloat(getComputedStyle(N).borderTopLeftRadius);if(Number.isFinite(W)&&W>0)return W}return P.current})();return Math.min(he,Math.min(ne,J)/2)};ie.useEffect(()=>{F&&Lv(n,B)},[n,B,F]),ie.useEffect(()=>{const ne=A.current;ne&&Bo(ne,{mask:x??null})},[x]),ie.useEffect(()=>{const ne=A.current;ne&&Bo(ne,{paused:o})},[o]),ie.useEffect(()=>{const ne=A.current;if(!ne)return;const J={};u!==void 0&&(J.shaderScale=u),d!==void 0&&(J.ringCssPx=d),g!==void 0&&(J.scale=g),Object.keys(J).length>0&&Bo(ne,J)},[u,d,g]),ie.useLayoutEffect(()=>{const ne=v.current,J=M.current,he=S.current;if(!ne||!J||!F)return;{const _e=getComputedStyle(J),U=parseFloat(_e.borderTopLeftRadius);P.current=Number.isFinite(U)?U:0}const H=()=>{const _e=J.getBoundingClientRect(),U=Math.max(1,Math.round(_e.width)),D=Math.max(1,Math.round(_e.height));return{cssWidth:U,cssHeight:D,cornerRadius:G(U,D)}},N=H();A.current=Tv({onComposite:()=>{const _e=A.current,U=C.current;_e&&U&&bM(U,_e.deform);const D=y.current;_e&&D&&Og(D,_e.deform)},hostCanvas:ne,cssWidth:N.cssWidth,cssHeight:N.cssHeight,cornerRadius:N.cornerRadius,kind:O,paused:o,shaderScale:u,ringCssPx:d,scale:g,mask:x??null,onFirstCopy:()=>z(!0)}),J.style.setProperty("--mfx-radius",`${N.cornerRadius}px`),J.style.borderRadius=`${N.cornerRadius}px`;const W=(_e,U)=>{if(!x||m==="ring")return{};const D=window.devicePixelRatio||1,V=document.createElement("canvas");V.width=Math.max(1,Math.round(_e*D)),V.height=Math.max(1,Math.round(U*D));const pe=V.getContext("2d");if(!pe)return{};pe.fillStyle="#fff",x(pe,V.width,V.height,D);const q=pe.getImageData(0,0,V.width,V.height).data,Z=[],be=Math.max(1,Math.round(2*D));for(let Me=be>>1;Me<V.height;Me+=be)for(let Fe=be>>1;Fe<V.width;Fe+=be)q[(Me*V.width+Fe)*4+3]>128&&Z.push({x:Fe/D,y:Me/D});return{samplePoints:Z,maskDataUrl:V.toDataURL("image/png")}};he&&(C.current=tp(he,{width:N.cssWidth,height:N.cssHeight,cornerRadius:N.cornerRadius,kind:O,scale:g,...W(N.cssWidth,N.cssHeight)}));const fe=_e=>{if(!he)return;const U=C.current;he.innerHTML="",C.current=tp(he,{width:_e.cssWidth,height:_e.cssHeight,cornerRadius:_e.cornerRadius,kind:O,scale:g,...W(_e.cssWidth,_e.cssHeight)}),U&&_M(U,C.current);const D=A.current;D&&C.current&&Ml.set(D,{handles:C.current,themeRef:R})},j=()=>h?h===!0?ip:{...ip,...h}:null,ue=_e=>{const U=T.current,D=A.current;rp(y.current),y.current=null;const V=j();!U||!D||!V||(y.current=yM(U,{width:_e.cssWidth,height:_e.cssHeight,cornerRadius:_e.cornerRadius,kind:O,ring:D.ringCssPx},V))};ue(N);let de=0,ae=N.cssWidth,Ee=N.cssHeight,L=N.cornerRadius;const ve=new ResizeObserver(()=>{de===0&&(de=requestAnimationFrame(()=>{de=0;const _e=H(),U=A.current;!U||Math.abs(_e.cssWidth-ae)<.5&&Math.abs(_e.cssHeight-Ee)<.5&&Math.abs(_e.cornerRadius-L)<.5||(ae=_e.cssWidth,Ee=_e.cssHeight,L=_e.cornerRadius,Bo(U,{cssWidth:_e.cssWidth,cssHeight:_e.cssHeight,cornerRadius:_e.cornerRadius}),J.style.setProperty("--mfx-radius",`${_e.cornerRadius}px`),J.style.borderRadius=`${_e.cornerRadius}px`,fe(_e),ue(_e))}))});ve.observe(J);let me=null;const we=()=>{const _e=A.current;if(_e&&Iv(_e)){const U=H();fe(U),ue(U)}te()},te=()=>{me?.removeEventListener("change",we),me=typeof window.matchMedia=="function"?window.matchMedia(`(resolution: ${window.devicePixelRatio||1}dppx)`):null,me?.addEventListener("change",we)};te();const qe=kv(_e=>{_e&&A.current&&fe(H())});let Ue=null;return typeof IntersectionObserver<"u"&&(Ue=new IntersectionObserver(_e=>{const U=A.current;if(U)for(const D of _e)Dv(U,D.isIntersecting)},{rootMargin:"64px"}),Ue.observe(J)),A.current&&C.current&&(Ml.set(A.current,{handles:C.current,themeRef:R}),Rv(A.current)),Hv(),s3(),()=>{Wv(),rp(y.current),y.current=null,ve.disconnect(),me?.removeEventListener("change",we),Ue?.disconnect(),qe(),de!==0&&cancelAnimationFrame(de);const _e=A.current;_e&&(Ml.delete(_e),Pv(_e),Cv(_e)),A.current=null,C.current=null,he&&(he.innerHTML="")}},[O]),ie.useEffect(()=>{const ne=A.current;ne&&Bo(ne,{opacityMul:Math.max(0,Math.min(1,a)),glowGain:Math.max(0,r)})},[a,r,e]),ie.useEffect(()=>{const ne=A.current,J=M.current;if(!ne||!J||!c||B!=="dark")return;ne.onAfterFrame=e3;const he=c.flatMap(H=>{const N="current"in H?H:H.ref,W="current"in H?1:H.strength??1;return N.current?[{el:N.current,strength:W}]:[]});for(const{el:H,strength:N}of he)ZM(H,ne,J,N);return()=>{ne.onAfterFrame=void 0;for(const{el:H}of he)JM(H)}},[c,B]),ie.useEffect(()=>{const ne=M.current,J=A.current;if(!ne||!J)return;const he=G(J.cssWidth,J.cssHeight);Bo(J,{cornerRadius:he}),ne.style.setProperty("--mfx-radius",`${he}px`),ne.style.borderRadius=`${he}px`},[s,B,e,O]);const ee=ie.useMemo(()=>({...b,"--mfx-strength":String(Math.min(1,Math.max(0,a))),opacity:I?1:0,visibility:I?"visible":"hidden",transition:I?"opacity 0.15s ease-out":"none"}),[b,a,I]);return F?K.jsxs("div",{..._,ref:M,className:p?`metal-fx-root ${p}`:"metal-fx-root","data-variant":e,"data-shape":O,"data-theme":B,"data-paused":o?"true":void 0,"data-normalize":l?"true":"false",style:ee,children:[K.jsx("canvas",{ref:v,className:"metal-fx-canvas",style:i3}),K.jsx("div",{className:"metal-fx-inner","aria-hidden":"true",style:a3}),K.jsx("div",{ref:S,"aria-hidden":"true",style:{...r3,display:k?void 0:"none"}}),h?K.jsx("div",{ref:T,"aria-hidden":"true",style:o3}):null,K.jsx("div",{ref:w,className:"metal-fx-content",children:t})]}):K.jsx("div",{..._,ref:M,className:p?`metal-fx-fallback ${p}`:"metal-fx-fallback","data-metal-fx-unsupported":"",style:{display:"inline-flex",...b},children:t})});Vg.displayName="MetalFx";const c3=Object.freeze({enabled:!0,applyTo:"ring",strength:.74,fadeInMs:200,fadeOutMs:350,smoothMs:140,reach:36,blob:13,liquidBlob:10,maxDisp:9,gain:.6,pressGain:.55,pullGain:.49,press:5,liquid:7.5,liquidReach:8,liquidStiffness:53,liquidDamping:9,stiffness:260,damping:13,mass:1,follow:.32,mapRes:2,smooth:.25});({...c3});var Gh=C2(),Xg=ie.createContext(null);function td(){const t=ie.useContext(Xg);if(!t)throw new Error("<Gooey.Item> must be rendered inside a <Gooey> group.");return t}var u3="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -29.5";function h3({i:t,s:e}){const n=[];let i="bin";return e.spread!==0&&(n.push(K.jsx("feMorphology",{in:i,operator:e.spread>0?"erode":"dilate",radius:Math.abs(e.spread),result:`s${t}-er`},"er")),i=`s${t}-er`),(e.x!==0||e.y!==0)&&(n.push(K.jsx("feOffset",{in:i,dx:e.x,dy:e.y,result:`s${t}-o`},"o")),i=`s${t}-o`),e.blur>0&&(n.push(K.jsx("feGaussianBlur",{in:i,stdDeviation:e.blur/2,result:`s${t}-b`},"b")),i=`s${t}-b`),n.push(K.jsx("feComposite",{in:"bin",in2:i,operator:"out",result:`s${t}-band`},"band"),K.jsx("feFlood",{floodColor:e.color,result:`s${t}-c`},"c"),K.jsx("feComposite",{in:`s${t}-c`,in2:`s${t}-band`,operator:"in",result:`s${t}`},"f")),K.jsx(K.Fragment,{children:n})}function f3({i:t,s:e}){const n=[];let i="shape";return e.spread!==0&&(n.push(K.jsx("feMorphology",{in:"bin",operator:e.spread>0?"dilate":"erode",radius:Math.abs(e.spread),result:`s${t}-sp`},"sp")),i=`s${t}-sp`),e.blur>0&&(n.push(K.jsx("feGaussianBlur",{in:i,stdDeviation:e.blur/2,result:`s${t}-b`},"b")),i=`s${t}-b`),(e.x!==0||e.y!==0)&&(n.push(K.jsx("feOffset",{in:i,dx:e.x,dy:e.y,result:`s${t}-o`},"o")),i=`s${t}-o`),n.push(K.jsx("feFlood",{floodColor:e.color,result:`s${t}-c`},"c"),K.jsx("feComposite",{in:`s${t}-c`,in2:i,operator:"in",result:`s${t}`},"f")),K.jsx(K.Fragment,{children:n})}function d3({blur:t,contrast:e,shadows:n,waviness:i=0,wavinessFreq:a=.018}){const r=i>0,o=Math.round((.5-e*(5/12))*100)/100;return K.jsxs(K.Fragment,{children:[K.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:t,result:"blur"}),K.jsx("feColorMatrix",{in:"blur",type:"matrix",values:`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${e} ${o}`,result:"goo"}),K.jsx("feComposite",{in:"SourceGraphic",in2:"goo",operator:"atop",result:r?"shape-raw":"shape"}),r&&K.jsxs(K.Fragment,{children:[K.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:a,numOctaves:2,seed:"7",result:"wave-noise"}),K.jsx("feDisplacementMap",{in:"shape-raw",in2:"wave-noise",scale:i*2,xChannelSelector:"R",yChannelSelector:"G",result:"shape"})]}),n.some(s=>s.inset||s.spread!==0)&&K.jsx("feColorMatrix",{in:"shape",type:"matrix",values:u3,result:"bin"}),n.map((s,l)=>s.inset?K.jsx(h3,{i:l,s},l):K.jsx(f3,{i:l,s},l)),n.length>0&&K.jsxs("feMerge",{children:[n.map((s,l)=>s.inset?-1:l).filter(s=>s>=0).reverse().map(s=>K.jsx("feMergeNode",{in:`s${s}`},s)),K.jsx("feMergeNode",{in:"shape"}),n.map((s,l)=>s.inset?K.jsx("feMergeNode",{in:`s${l}`},l):null)]})]})}var p3={blur:7,contrast:40,reach:.8,fade:17,warp:0,mix:1,mixBlur:8,gravity:1.9,waviness:12};function m3(){const t=new Set,e=new Set,n=()=>e.forEach(i=>i());return{register(i){return t.add(i),n(),()=>{t.delete(i),n()}},subscribe(i){return e.add(i),()=>e.delete(i)},entries:()=>[...t]}}function xp(t,e){const n=t.getBoundingClientRect(),i=e.getBoundingClientRect(),a=getComputedStyle(e),r=parseFloat(a.borderTopLeftRadius)||0;return{x:i.left-n.left,y:i.top-n.top,w:i.width,h:i.height,r:Math.min(r,i.width/2,i.height/2)}}var bp=t=>`${Math.round(t.x*2)},${Math.round(t.y*2)},${Math.round(t.w)},${Math.round(t.h)},${Math.round(t.r)}`;function g3(t,e=14){const[n,i]=ie.useState(t),a=ie.useRef({value:t,target:t,raf:0,last:0});return ie.useEffect(()=>{const r=a.current;if(r.target=t,r.raf)return;r.last=performance.now();const o=s=>{const l=Math.min(.05,(s-r.last)/1e3);r.last=s;const c=1-Math.exp(-e*l);r.value+=(r.target-r.value)*c,Math.abs(r.value-r.target)<.004&&(r.value=r.target),i(r.value),r.raf=r.value===r.target?0:requestAnimationFrame(o)};return r.raf=requestAnimationFrame(o),()=>{r.raf&&cancelAnimationFrame(r.raf),r.raf=0}},[t,e]),n}function x3({a:t,b:e,srcA:n,srcB:i,opts:a,width:r,height:o}){const s=`lgm-${ie.useId().replace(/[^a-zA-Z0-9_-]/g,"")}`,{blur:l,contrast:c,reach:f,fade:h,warp:u,mix:d,mixBlur:g,gravity:x,waviness:m}=a,p={x:t.x+t.w/2,y:t.y+t.h/2},b={x:e.x+e.w/2,y:e.y+e.h/2},_=Math.max(0,Math.hypot(Math.max(Math.abs(p.x-b.x)-(t.w+e.w)/2,0),Math.max(Math.abs(p.y-b.y)-(t.h+e.h)/2,0))),E=Math.max(0,Math.min(1,1-_/Math.max(8,l*2.6))),M=E*E*(3-2*E),v=g3(M),S=Math.round((.5-c*(5/12))*100)/100,T=Math.hypot(t.w,t.h)/2*f*v,y=Math.hypot(e.w,e.h)/2*f*v,w={x:(p.x+b.x)/2,y:(p.y+b.y)/2},A=b.x-p.x,C=b.y-p.y,R=Math.max(.001,Math.hypot(A,C)),P=-C/R,I=A/R,z=Math.max(0,(t.w+e.w)/2-Math.abs(A)),B=Math.max(0,(t.h+e.h)/2-Math.abs(C)),F=.5*(z*Math.abs(P)+B*Math.abs(I))*v,O=Math.round(Math.atan2(I,P)*180/Math.PI),k=Math.round(d*v*100)/100,G=Math.round((2+(l-2)*v)*10)/10,ee=Math.round(u*v*10)/10,ne=Math.round(G*2.5*10)/10,J=Math.round((.4+(2+l*.8)*v)*10)/10,he=`translate(${t.x}, ${t.y})`,H=`translate(${e.x}, ${e.y})`;return K.jsxs("svg",{"aria-hidden":"true",focusable:"false","data-gooey-imagemelt":"",width:r,height:o,viewBox:`0 0 ${r} ${o}`,style:{position:"absolute",inset:0,overflow:"visible",pointerEvents:"none"},children:[K.jsxs("defs",{children:[K.jsx("pattern",{id:`${s}-pa`,patternUnits:"userSpaceOnUse",width:t.w,height:t.h,children:K.jsx("image",{href:n,width:t.w,height:t.h,preserveAspectRatio:"xMidYMid slice"})}),K.jsx("pattern",{id:`${s}-pb`,patternUnits:"userSpaceOnUse",width:e.w,height:e.h,children:K.jsx("image",{href:i,width:e.w,height:e.h,preserveAspectRatio:"xMidYMid slice"})}),K.jsxs("filter",{id:`${s}-goo`,x:"-15%",y:"-15%",width:"130%",height:"130%",colorInterpolationFilters:"sRGB",children:[K.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:G,result:"b"}),K.jsx("feColorMatrix",{in:"b",type:"matrix",values:`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${c} ${S}`,result:"goo"}),K.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:ne,result:"bc"}),K.jsx("feComposite",{in:"bc",in2:"goo",operator:"in",result:"mix"}),K.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:(2+m*1.2)/1e3,numOctaves:"2",seed:"4",result:"wn"}),K.jsx("feDisplacementMap",{in:"mix",in2:"wn",scale:ee,xChannelSelector:"R",yChannelSelector:"G",result:"warped"}),K.jsx("feComposite",{in:"warped",in2:"warped",operator:"over",result:"s1"}),K.jsx("feComposite",{in:"s1",in2:"s1",operator:"over",result:"s2"}),K.jsx("feComposite",{in:"s2",in2:"s2",operator:"over",result:"solid"}),K.jsx("feGaussianBlur",{in:"solid",stdDeviation:"0.6"})]}),K.jsx("filter",{id:`${s}-soft`,x:"-60%",y:"-60%",width:"220%",height:"220%",children:K.jsx("feGaussianBlur",{stdDeviation:h})}),k>.01&&K.jsxs("filter",{id:`${s}-marble`,x:"-25%",y:"-25%",width:"150%",height:"150%",colorInterpolationFilters:"sRGB",children:[K.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:g,result:"c"}),K.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.011",numOctaves:"2",seed:"5",result:"n1"}),K.jsx("feDisplacementMap",{in:"c",in2:"n1",scale:k*90,xChannelSelector:"R",yChannelSelector:"G",result:"d1"}),K.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.019",numOctaves:"2",seed:"11",result:"n2"}),K.jsx("feDisplacementMap",{in:"d1",in2:"n2",scale:k*50,xChannelSelector:"R",yChannelSelector:"G",result:"d2"}),K.jsx("feComposite",{in:"d2",in2:"d2",operator:"over",result:"m1"}),K.jsx("feComposite",{in:"m1",in2:"m1",operator:"over",result:"m2"}),K.jsx("feGaussianBlur",{in:"m2",stdDeviation:"0.6",result:"marble"}),K.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:G,result:"mb"}),K.jsx("feColorMatrix",{in:"mb",type:"matrix",values:`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${c} ${S}`,result:"mg"}),K.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:(2+m*1.2)/1e3,numOctaves:"2",seed:"4",result:"mwn"}),K.jsx("feDisplacementMap",{in:"mg",in2:"mwn",scale:ee,xChannelSelector:"R",yChannelSelector:"G",result:"mshape"}),K.jsx("feComposite",{in:"marble",in2:"mshape",operator:"in"})]}),k>.01&&K.jsx("mask",{id:`${s}-marblemask`,maskUnits:"userSpaceOnUse",x:"0",y:"0",width:r,height:o,children:K.jsx("g",{filter:`url(#${s}-soft)`,children:K.jsx("ellipse",{cx:w.x,cy:w.y,rx:(T+y)/2+F,ry:(T+y)/2*x,transform:`rotate(${O}, ${w.x}, ${w.y})`,fill:"#fff"})})}),K.jsx("filter",{id:`${s}-edge`,x:"-40%",y:"-40%",width:"180%",height:"180%",children:K.jsx("feGaussianBlur",{stdDeviation:J})}),K.jsxs("mask",{id:`${s}-ma`,maskUnits:"userSpaceOnUse",x:"0",y:"0",width:r,height:o,children:[K.jsx("g",{filter:`url(#${s}-edge)`,children:K.jsx("g",{transform:he,children:K.jsx("rect",{width:t.w,height:t.h,rx:t.r,fill:"#fff"})})}),K.jsx("g",{filter:`url(#${s}-soft)`,children:K.jsx("ellipse",{cx:w.x,cy:w.y,rx:y+F,ry:y,transform:`rotate(${O}, ${w.x}, ${w.y})`,fill:"#000"})})]}),K.jsxs("mask",{id:`${s}-mb`,maskUnits:"userSpaceOnUse",x:"0",y:"0",width:r,height:o,children:[K.jsx("g",{filter:`url(#${s}-edge)`,children:K.jsx("g",{transform:H,children:K.jsx("rect",{width:e.w,height:e.h,rx:e.r,fill:"#fff"})})}),K.jsx("g",{filter:`url(#${s}-soft)`,children:K.jsx("ellipse",{cx:w.x,cy:w.y,rx:T+F,ry:T,transform:`rotate(${O}, ${w.x}, ${w.y})`,fill:"#000"})})]})]}),K.jsxs("g",{filter:`url(#${s}-goo)`,children:[K.jsx("g",{transform:he,children:K.jsx("rect",{width:t.w,height:t.h,rx:t.r,fill:`url(#${s}-pa)`})}),K.jsx("g",{transform:H,children:K.jsx("rect",{width:e.w,height:e.h,rx:e.r,fill:`url(#${s}-pb)`})})]}),k>.01&&K.jsx("g",{mask:`url(#${s}-marblemask)`,children:K.jsxs("g",{filter:`url(#${s}-marble)`,children:[K.jsx("g",{transform:he,children:K.jsx("rect",{width:t.w,height:t.h,rx:t.r,fill:`url(#${s}-pa)`})}),K.jsx("g",{transform:H,children:K.jsx("rect",{width:e.w,height:e.h,rx:e.r,fill:`url(#${s}-pb)`})})]})}),K.jsx("g",{mask:`url(#${s}-ma)`,children:K.jsx("g",{transform:he,children:K.jsx("rect",{width:t.w,height:t.h,rx:t.r,fill:`url(#${s}-pa)`})})}),K.jsx("g",{mask:`url(#${s}-mb)`,children:K.jsx("g",{transform:H,children:K.jsx("rect",{width:e.w,height:e.h,rx:e.r,fill:`url(#${s}-pb)`})})})]})}function b3({registry:t}){const{getGroup:e}=td(),[,n]=ie.useState(0),[i,a]=ie.useState(null),r=ie.useRef("");ie.useEffect(()=>t.subscribe(()=>n(h=>h+1)),[t]);const o=t.entries().slice(0,2),s=o.length===2;if(ie.useEffect(()=>{if(!s){a(null),r.current="";return}let h=0;const u=()=>{const d=e();if(d){const g=xp(d,o[0].el),x=xp(d,o[1].el),m=bp(g)+"|"+bp(x);m!==r.current&&(r.current=m,a({a:g,b:x}))}h=requestAnimationFrame(u)};return h=requestAnimationFrame(u),()=>cancelAnimationFrame(h)},[s,o[0]?.el,o[1]?.el,e]),!s||!i)return null;const l=e(),c=l?.offsetWidth??0,f=l?.offsetHeight??0;return K.jsx(x3,{a:i.a,b:i.b,srcA:o[0].src,srcB:o[1].src,opts:o[0].opts,width:c,height:f})}function v3({src:t,opts:e,registry:n,children:i}){const a=ie.useRef(null);return ie.useEffect(()=>{const o=a.current?.firstElementChild;if(!o)return;const s=t??o.querySelector("img")?.src??o.src;if(!s)return;const l=o.style.opacity;o.style.opacity="0";const c=n.register({el:o,src:s,opts:e});return()=>{o.style.opacity=l,c()}},[t,e,n]),K.jsx("span",{ref:a,style:{display:"contents"},children:i})}var _0=typeof window<"u"?ie.useLayoutEffect:ie.useEffect;function M3(){const[t,e]=ie.useState(!1);return ie.useEffect(()=>{const n=window.matchMedia("(prefers-reduced-motion: reduce)");e(n.matches);const i=a=>e(a.matches);return n.addEventListener("change",i),()=>n.removeEventListener("change",i)},[]),t}function _3(t,e){let n=0,i=0,a=t;for(;a&&a!==e&&e.contains(a);)n+=a.offsetLeft,i+=a.offsetTop,a=a.offsetParent;return{x:n,y:i}}function ul(t,e,n){const i=getComputedStyle(t),a=r=>{const o=r.split(" ")[0];return o.endsWith("%")?(parseFloat(o)||0)/100*Math.min(e,n):parseFloat(o)||0};return[a(i.borderTopLeftRadius),a(i.borderTopRightRadius),a(i.borderBottomRightRadius),a(i.borderBottomLeftRadius)]}function Yg(t){return typeof t=="number"?[t,t,t,t]:t}function y3(t,e,n,i,a){let[r,o,s,l]=a.map(f=>Math.max(0,f));const c=Math.min(1,n/Math.max(1e-6,r+o),n/Math.max(1e-6,l+s),i/Math.max(1e-6,r+l),i/Math.max(1e-6,o+s));return r*=c,o*=c,s*=c,l*=c,`M ${t+r} ${e} H ${t+n-o} A ${o} ${o} 0 0 1 ${t+n} ${e+o} V ${e+i-s} A ${s} ${s} 0 0 1 ${t+n-s} ${e+i} H ${t+l} A ${l} ${l} 0 0 1 ${t} ${e+i-l} V ${e+r} A ${r} ${r} 0 0 1 ${t+r} ${e} Z`}var ki={massStiffness:320,massDamping:17,sizeStiffness:170,sizeDamping:11.5,radiusStiffness:900,radiusDamping:60,contentBlur:7,roundness:1,cornerDuration:460,cornerDelay:0,cornerEase:"cubic-bezier(0.3, 1.05, 0.4, 1)",anticipation:90,travel:32},vp=new Map;function qg(t){let e=vp.get(t);if(e)return e;const n=/cubic-bezier\(([^)]+)\)/.exec(t);if(n){const[i,a,r,o]=n[1].split(",").map(Number);e=s=>{if(s<=0)return 0;if(s>=1)return 1;let l=0,c=1;for(let h=0;h<24;h++){const u=(l+c)/2;3*u*(1-u)*(1-u)*i+3*u*u*(1-u)*r+u**3<s?l=u:c=u}const f=(l+c)/2;return 3*f*(1-f)*(1-f)*a+3*f*f*(1-f)*o+f**3}}else t==="ease-in-out"?e=qg("cubic-bezier(0.42, 0, 0.58, 1)"):e=i=>Math.min(1,Math.max(0,i));return vp.set(t,e),e}var Mr={stiffness:380,damping:18,stretch:.18,tail:.46,force:.5,bend:0,bendX:0},w3=3;function Mp(t){return Math.max(0,t.cornerDelay)+Math.max(1,t.cornerDuration)}function cc(t,e,n){return Math.max(0,Math.min(t,Math.min(e,n)/2))}function S3(t,e,n,i,a,r){const o=i*(n-t)-a*e,s=e+o*r;return[t+s*r,s]}function Ta(t,e,n,i,a,r){let o=Math.max(1,Math.ceil(r*60));const s=r/o;let l=t,c=e;for(;o-- >0;){const f=S3(l,c,n,i,a,s);l=f[0],c=f[1]}return[l,c]}function Cn(t,e){return Math.round(t/e)*e}var E3="http://www.w3.org/2000/svg",_p=0;function Ys(t){const e=Math.min(1,Math.max(0,t));return e*e*(3-2*e)}function an(t,e){const n=document.createElementNS(E3,t);for(const[i,a]of Object.entries(e))n.setAttribute(i,a);return n}function A3(t){try{if(!t.complete||!t.naturalWidth)return null;const e=Math.max(2,Math.min(t.naturalWidth,Math.round((t.offsetWidth||40)*3))),n=Math.max(2,Math.min(t.naturalHeight,Math.round((t.offsetHeight||40)*3)));if(t.naturalWidth<=e*1.5)return null;const i=document.createElement("canvas");i.width=e,i.height=n;const a=i.getContext("2d");if(!a)return null;const r=Math.max(e/t.naturalWidth,n/t.naturalHeight),o=e/r,s=n/r;return a.drawImage(t,(t.naturalWidth-o)/2,(t.naturalHeight-s)/2,o,s,0,0,e,n),i.toDataURL()}catch{return null}}var T3=class{constructor(t){this.getGroup=t,this.gooBlur=6,this.items=new Set,this.awake=!1,this.clean=0,this.raf=0,this.sourcesReady=!1,this.mo=null,this.interval=null,this.removeListeners=[],this.wake=()=>{this.clean=0,!(this.awake||this.items.size===0)&&(this.awake=!0,this.raf=requestAnimationFrame(this.loop))},this.lastNow=0,this.frameEma=17,this.loop=e=>{if(this.items.size===0){this.awake=!1,this.lastNow=0;return}const n=this.lastNow?Math.min(.25,Math.max(1/240,(e-this.lastNow)/1e3)):1/60;if(this.lastNow&&(this.frameEma+=(Math.min(e-this.lastNow,80)-this.frameEma)*.12),this.lastNow=e,this.measureAll(n)?this.clean=0:this.clean++,this.clean>30){this.awake=!1,this.lastNow=0;return}this.raf=requestAnimationFrame(this.loop)}}add(t){const e={...t,baseW:t.target.offsetWidth||1,baseH:t.target.offsetHeight||1,radiusPx:this.resolveRadius(t),last:null,frame:null,lastBlend:null,melt:null,sim:null,motionEnv:0,tPrev:null,tvx:0,tvy:0,lead01:0,cornerT0:0,lastTargetMoveT:0,lastTargetSize:null,morphActive:!1,round01:0,tailEl:null,tailMidA:null,tailMidB:null,tailPhase:0,bendCur:0,bendCurX:0,bendPathEl:null,lastBendD:null,lastBendVars:null,tailX:0,tailY:0,tailVx:0,tailVy:0,tailR:0,contentBlurred:!1,lastPaint:null,lastTail:null,lastBi:t.blobInset??0,biSmooth:null,meltFade:0,meltRel:null,meltOp:1,meltPhase:0,meltPrev:null,meltGeom:null,meltWroteAt:0,meltAxis:null,meltHostLast:null,ro:new ResizeObserver(()=>{e.baseW=t.target.offsetWidth||1,e.baseH=t.target.offsetHeight||1,e.radiusPx=this.resolveRadius(t),this.syncMelt(e),this.wake()})};if(e.ro.observe(t.target),this.items.add(e),this.refreshMelt(e),t.dynamics?.move){const n=an("circle",{cx:"0",cy:"0",r:"0"}),i=an("circle",{cx:"0",cy:"0",r:"0"}),a=an("circle",{cx:"0",cy:"0",r:"0"});t.blob.parentNode?.insertBefore(n,t.blob),t.blob.parentNode?.insertBefore(i,t.blob),t.blob.parentNode?.insertBefore(a,t.blob),e.tailEl=n,e.tailMidA=i,e.tailMidB=a;const r=an("path",{d:""});t.blob.parentNode?.insertBefore(r,t.blob),e.bendPathEl=r}return this.ensureSources(),this.measureAll(),this.wake(),()=>{e.ro.disconnect(),this.items.delete(e),this.clearBlend(e),e.contentBlurred&&e.target.style.removeProperty("filter"),e.tailEl?.remove(),e.tailMidA?.remove(),e.tailMidB?.remove(),e.bendPathEl?.remove()}}dispose(){cancelAnimationFrame(this.raf),this.mo?.disconnect(),this.removeListeners.forEach(t=>t()),this.removeListeners=[],this.interval&&clearInterval(this.interval),this.items.forEach(t=>t.ro.disconnect()),this.items.clear(),this.awake=!1,this.sourcesReady=!1}resolveRadius(t){return t.radius!=null?t.radius:ul(t.target,t.target.offsetWidth,t.target.offsetHeight)[0]}syncMelt(t){if(!t.blend)return;const e=t.melt,n=t.target,i=n instanceof HTMLImageElement?[n]:Array.from(n.querySelectorAll("img"));if(!(!!e&&e.entries.length===i.length&&e.entries.every((r,o)=>r.el===i[o]))){this.refreshMelt(t);return}for(const r of e.entries)r.radiusPx=ul(r.el,r.el.offsetWidth,r.el.offsetHeight)[0],r.lastGeom=null}refreshMelt(t){const e=t.blend;if(!e)return;const n=e.host;for(;n.firstChild;)n.removeChild(n.firstChild);const i=t.target,a=i instanceof HTMLImageElement?[i]:Array.from(i.querySelectorAll("img")),r=`gooey-melt-${++_p}`,o=String(_p*7%100),s=e.zone??this.gooBlur*2.2+4,l=Math.max(.2,e.warpFreq??1),c=Math.min(.3,Math.max(.01,l/(s*1.1))).toFixed(4),f=String(Math.max(1,Math.round(e.detail??2))),h=e.warpStyle??"fractalNoise",u=an("defs",{}),d=an("radialGradient",{id:`${r}-g`});d.append(an("stop",{offset:"0%","stop-color":"#fff"}),an("stop",{offset:"55%","stop-color":"#fff"}),an("stop",{offset:"78%","stop-color":"#fff","stop-opacity":"0.55"}),an("stop",{offset:"100%","stop-color":"#fff","stop-opacity":"0"})),u.append(d);const g=b=>{const _=an("filter",{id:`${r}-f${b}`,filterUnits:"userSpaceOnUse",x:"0",y:"0",width:"0",height:"0","color-interpolation-filters":"sRGB"}),E=an("feTurbulence",{type:h,baseFrequency:c,numOctaves:f,seed:o,result:"noise0"});_.append(E);const M=an("feOffset",{in:"noise0",dx:"0",dy:"0",result:"noise"}),v=an("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"0",xChannelSelector:"R",yChannelSelector:"G",result:"disp"});_.append(M);const S=an("feGaussianBlur",{in:"disp",stdDeviation:"0",result:"soft"}),T=an("feColorMatrix",{in:"soft",type:"saturate",values:"1.2",result:"col"}),y=an("feColorMatrix",{in:"noise",type:"matrix",values:"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1",result:"erode"}),w=an("feComposite",{in:"col",in2:"erode",operator:"in"});_.append(v,S,T,y,w);const A=an("mask",{id:`${r}-m${b}`,maskUnits:"userSpaceOnUse",x:"-10000",y:"-10000",width:"20000",height:"20000"}),C=an("circle",{cx:"0",cy:"0",r:"0",fill:`url(#${r}-g)`});A.append(C),u.append(_,A);const R=an("g",{});R.setAttribute("mask",`url(#${r}-m${b})`),R.setAttribute("opacity","0");const P=an("g",{});P.setAttribute("filter",`url(#${r}-f${b})`);const I=an("g",{});return P.append(I),R.append(P),{filter:_,disp:v,blurEl:S,erode:y,turb:E,noiseOffset:M,circle:C,gl:R,shift:I}},x=Array.from({length:w3},(b,_)=>g(`l${_}`));n.append(u,...x.map(b=>b.gl));let m=null;if((e.seamBlur??1)>0){const b=an("filter",{id:`${r}-fs`,filterUnits:"userSpaceOnUse",x:"0",y:"0",width:"0",height:"0","color-interpolation-filters":"sRGB"}),_=an("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0"});b.append(_);const E=an("mask",{id:`${r}-ms`,maskUnits:"userSpaceOnUse",x:"-10000",y:"-10000",width:"20000",height:"20000"}),M=an("circle",{cx:"0",cy:"0",r:"0",fill:`url(#${r}-g)`});E.append(M),u.append(b,E);const v=an("g",{});v.setAttribute("mask",`url(#${r}-ms)`),v.setAttribute("opacity","0");const S=an("g",{});S.setAttribute("filter",`url(#${r}-fs)`),v.append(S),n.insertBefore(v,u.nextSibling),m={gl:v,filter:b,blurEl:_,circle:M}}const p=a.map((b,_)=>{const E=an("pattern",{id:`${r}-p${_}`,patternUnits:"userSpaceOnUse",x:"0",y:"0",width:"1",height:"1"}),M=an("image",{width:"1",height:"1",preserveAspectRatio:"xMidYMid slice"});M.setAttribute("href",b.currentSrc||b.src),E.append(M),u.append(E);const v=x.map(T=>{const y=an("rect",{x:"0",y:"0",width:"0",height:"0",fill:`url(#${r}-p${_})`});return T.shift.append(y),y});if(m){const T=an("rect",{x:"0",y:"0",width:"0",height:"0",fill:`url(#${r}-p${_})`});m.gl.firstElementChild.append(T),v.push(T)}const S=ul(b,b.offsetWidth,b.offsetHeight)[0];return{el:b,rects:v,pattern:E,image:M,radiusPx:S,lowRes:!1,measured:null,lastGeom:null,lastHole:null}});if(n.setAttribute("opacity","0"),t.melt={layers:x,entries:p,seam:m},e.surface==="image"&&a[0]){const b=an("pattern",{id:`${r}-bp`,patternUnits:"objectBoundingBox",patternContentUnits:"objectBoundingBox",width:"1",height:"1"}),_=an("image",{width:"1",height:"1",preserveAspectRatio:"xMidYMid slice"});_.setAttribute("href",a[0].currentSrc||a[0].src),b.append(_),u.append(b),t.blob.setAttribute("fill",`url(#${r}-bp)`)}else t.blob.removeAttribute("fill")}clearBlend(t){t.blend?.host.setAttribute("opacity","0"),t.meltHostLast=null,t.meltWroteAt=0,t.meltAxis=null;for(const e of t.melt?.layers??[])e.last=void 0;t.melt?.seam&&(t.melt.seam.last=void 0,t.melt.seam.gl.setAttribute("opacity","0"));for(const e of t.melt?.entries??[])e.el.style.removeProperty("mask-image"),e.el.style.removeProperty("-webkit-mask-image"),e.el.style.removeProperty("mask-composite"),e.el.style.removeProperty("-webkit-mask-composite"),e.lastHole=null,e.lastGeom=null}measureAll(t=1/60){const e=this.getGroup();if(!e||this.items.size===0)return!1;const n=e.getBoundingClientRect();let i=!1;for(const a of this.items){const r=a.target.getBoundingClientRect();a.frame={x:r.left-n.left,y:r.top-n.top,w:r.width,h:r.height}}for(const a of this.items)if(!(!a.blend||!a.melt))for(const r of a.melt.entries){const o=r.el.getBoundingClientRect();r.measured={x:o.left-n.left,y:o.top-n.top,w:o.width,h:o.height,ow:r.el.offsetWidth,oh:r.el.offsetHeight}}for(const a of this.items)this.writeBlob(a,t)&&(i=!0);for(const a of this.items)a.blend&&this.writeBlend(a,t)&&(i=!0);return i}effectiveInset(t,e){let n=t.blobInset??0;const i=t.bridgeGrow??0;if(i>0&&t.frame){const a=t.frame,r=Math.max(14,this.gooBlur*3);let o=1/0;for(const s of this.items){if(s===t||!s.frame)continue;const l=s.frame,c=Math.max(l.x-(a.x+a.w),a.x-(l.x+l.w),0),f=Math.max(l.y-(a.y+a.h),a.y-(l.y+l.h),0),h=Math.hypot(c,f);h<o&&(o=h)}o<r&&(n-=i*Ys(1-o/r))}return i<=0?(t.biSmooth=n,n):(t.biSmooth===null?t.biSmooth=n:t.biSmooth+=(n-t.biSmooth)*Math.min(1,e*18),t.biSmooth)}writeBlob(t,e){const n=t.frame,i=t.dynamics;if(!i||!i.evolve&&!i.move){const M=this.effectiveInset(t,e),v=t.last,S=!v||Math.abs(v.x-n.x)>=.05||Math.abs(v.y-n.y)>=.05||Math.abs(v.w-n.w)>=.05||Math.abs(v.h-n.h)>=.05,T=Math.abs(M-t.lastBi)>=.05;if(!S&&!T)return!1;if(t.blob.style.transform=`translate(${n.x+M}px, ${n.y+M}px)`,S||T){const y=Math.max(0,n.w-M*2),w=Math.max(0,n.h-M*2);t.blob.setAttribute("width",String(y)),t.blob.setAttribute("height",String(w));const A=t.baseW>0?n.w/t.baseW:1;t.blob.setAttribute("rx",String(cc(t.radiusPx*A-M,y,w)))}return t.lastPaint=null,t.last=n,t.lastBi=M,!0}const a=n.x+n.w/2,r=n.y+n.h/2;let o;if(i.evolve){const M=t.target.offsetWidth,v=t.target.offsetHeight;o=ul(t.target,M,v)[0]}else o=t.radiusPx*(t.baseW>0?n.w/t.baseW:1);t.sim||(t.sim={cx:a,cy:r,w:n.w,h:n.h,r:o,vcx:0,vcy:0,vw:0,vh:0,vr:0});const s=t.sim;if(i.move){const M=i.moveOpts??Mr;[s.cx,s.vcx]=Ta(s.cx,s.vcx,a,M.stiffness,M.damping,e),[s.cy,s.vcy]=Ta(s.cy,s.vcy,r,M.stiffness,M.damping,e)}else if(i.evolve){const M=i.evolveOpts??ki,v=t.tPrev?(a-t.tPrev.cx)/e:0,S=t.tPrev?(r-t.tPrev.cy)/e:0;t.tvx=t.tvx*.7+v*.3,t.tvy=t.tvy*.7+S*.3,t.tPrev={cx:a,cy:r};const T=a-s.cx,y=r-s.cy,w=Math.hypot(T,y),A=Math.hypot(t.tvx,t.tvy);let C=0,R=0;A>.001?(C=t.tvx/A,R=t.tvy/A):w>.001&&(C=T/w,R=y/w);const P=Math.max(0,M.anticipation)/1e3,I=P>0?1-Math.exp(-e/P):1;t.lead01+=((w>.5?1:0)-t.lead01)*I;const z=Math.min(Math.max(0,M.travel)*t.lead01,w),B=C*z,F=R*z;[s.cx,s.vcx]=Ta(s.cx,s.vcx,a+B,M.massStiffness,M.massDamping,e),[s.cy,s.vcy]=Ta(s.cy,s.vcy,r+F,M.massStiffness,M.massDamping,e)}else s.cx=a,s.cy=r,s.vcx=0,s.vcy=0;if(i.evolve){const M=i.evolveOpts??ki;[s.w,s.vw]=Ta(s.w,s.vw,n.w,M.sizeStiffness,M.sizeDamping,e),[s.h,s.vh]=Ta(s.h,s.vh,n.h,M.sizeStiffness,M.sizeDamping,e),[s.r,s.vr]=Ta(s.r,s.vr,o,M.radiusStiffness,M.radiusDamping,e)}else s.w=n.w,s.h=n.h,s.r=o,s.vw=0,s.vh=0,s.vr=0;let l="";const c=Math.hypot(s.vcx,s.vcy);if(i.move&&c>2){const M=Math.min((i.moveOpts??Mr).stretch,c*6e-4),v=Math.round(Math.atan2(s.vcy,s.vcx)*100)/100;l+=` rotate(${v}rad) scale(${(1+M).toFixed(3)}, ${(1/(1+M*.65)).toFixed(3)}) rotate(${-v}rad)`}if(i.move&&t.tailEl){const M=k=>Math.round(k*10)/10;t.tailR===0&&Math.abs(t.tailX)<.001&&Math.abs(t.tailY)<.001&&(t.tailX=s.cx,t.tailY=s.cy),[t.tailX,t.tailVx]=Ta(t.tailX,t.tailVx,s.cx,170,22,e),[t.tailY,t.tailVy]=Ta(t.tailY,t.tailVy,s.cy,170,22,e);const v=t.blobInset??0,S=c>.001?s.vcx/c:1,T=c>.001?s.vcy/c:0,y=Math.max(4,Math.abs(S)*s.h+Math.abs(T)*s.w-v*2),w=(Math.abs(S)*s.w+Math.abs(T)*s.h)/2,A=y/2,C=t.tailX-s.cx,R=t.tailY-s.cy,P=Math.hypot(C,R),I=i.moveOpts??Mr,z=w+A*(.2+I.force*1.6);P>z&&(t.tailX=s.cx+C/P*z,t.tailY=s.cy+R/P*z);const B=I.tail,F=Math.max(0,Math.min(1,(c-20)/120)),O=A*B*F;if(t.tailR+=(O-t.tailR)*Math.min(1,e*10),t.tailR<.3)t.lastTail!=="hidden"&&(t.tailEl.setAttribute("r","0"),t.tailMidA?.setAttribute("r","0"),t.tailMidB?.setAttribute("r","0"),t.lastTail="hidden");else{t.tailPhase+=c*e*.045;const k=t.tailR*.16,G=-T,ee=S,ne=Math.sin(t.tailPhase)*k,J=Math.sin(t.tailPhase+2.4)*-k,he=s.cx+C*.45+G*ne,H=s.cy+R*.45+ee*ne,N=s.cx+C*.75+G*J,W=s.cy+R*.75+ee*J,fe=`${M(t.tailX)},${M(t.tailY)},${M(t.tailR)},${M(he)},${M(H)},${M(N)},${M(W)}`;fe!==t.lastTail&&(t.tailEl.setAttribute("cx",String(M(t.tailX))),t.tailEl.setAttribute("cy",String(M(t.tailY))),t.tailEl.setAttribute("r",String(M(t.tailR))),t.tailMidA&&(t.tailMidA.setAttribute("cx",String(M(he))),t.tailMidA.setAttribute("cy",String(M(H))),t.tailMidA.setAttribute("r",String(M(t.tailR*.62)))),t.tailMidB&&(t.tailMidB.setAttribute("cx",String(M(N))),t.tailMidB.setAttribute("cy",String(M(W))),t.tailMidB.setAttribute("r",String(M(t.tailR*.4)))),t.lastTail=fe)}}let f=Math.max(0,s.r),h=!1;if(i.evolve){const M=i.evolveOpts??ki,v=performance.now(),S=t.lastTargetSize;(S?Math.abs(n.w-S.w)+Math.abs(n.h-S.h):0)>.5?(t.morphActive||(t.cornerT0=v,t.morphActive=!0),t.lastTargetMoveT=v):t.morphActive&&v-t.lastTargetMoveT>150&&v-t.cornerT0>Mp(M)&&(t.morphActive=!1),t.lastTargetSize={w:n.w,h:n.h};const y=Mp(M);let w=0;if(t.cornerT0>0&&M.roundness>0&&v-t.cornerT0<y){const I=Math.min(1,Math.max(0,(v-t.cornerT0-Math.max(0,M.cornerDelay))/Math.max(1,M.cornerDuration))),z=qg(M.cornerEase)(I);w=Math.min(1,Math.max(0,(1-z)*M.roundness))}const A=e*8;if(t.round01+=Math.max(-A,Math.min(A,w-t.round01)),h=t.cornerT0>0&&v-t.cornerT0<y+80||Math.abs(w-t.round01)>.004||t.round01>.004,t.round01>.001){const I=Math.max(Math.min(s.w,s.h)/2,f);f=f+(I-f)*t.round01,f=Math.max(f,o)}const C=Math.min(1,(Math.hypot(s.vcx,s.vcy)+Math.abs(s.vw)+Math.abs(s.vh))/420);t.motionEnv=Math.max(C,t.motionEnv-e*1.9);const R=t.motionEnv,P=R*R*Math.max(0,M.contentBlur);P>.3?(t.target.style.filter=`blur(${P.toFixed(1)}px)`,t.contentBlurred=!0):t.contentBlurred&&(t.target.style.removeProperty("filter"),t.contentBlurred=!1)}const u=t.blobInset??0,d=Math.max(0,s.w-u*2),g=Math.max(0,s.h-u*2),x=cc(f-u,d,g);let m="";if(i.move&&t.bendPathEl){const M=i.moveOpts??Mr,v=Math.min(d,g)*.5,S=Math.max(-v,Math.min(v,s.vcy*.05))*M.bend,T=Math.min(d,g)*.9,y=Math.max(-T,Math.min(T,s.vcx*.09))*M.bendX;t.bendCur+=(S-t.bendCur)*Math.min(1,e*9),t.bendCurX+=(y-t.bendCurX)*Math.min(1,e*9);const w=Math.round(t.bendCurX*10)/10,A=Math.round(t.bendCur*10)/10,C=`${w},${A}`;if(C!==t.lastBendVars&&(t.target.style.setProperty("--lg-bend-x",`${w}px`),t.target.style.setProperty("--lg-bend-y",`${A}px`),t.target.style.setProperty("--lg-bend-xn",String(w)),t.target.style.setProperty("--lg-bend-yn",String(A)),t.lastBendVars=C),(Math.abs(t.bendCur)>.5||Math.abs(t.bendCurX)>.5)&&d>1&&g>1){const P=Math.min(x,d/2,g/2),I=Math.round(t.bendCur*2*10)/10,z=t.bendCurX,B=Math.max(P*.2,Math.min(P*3,z>0?P-.8*z:P+1.6*-z)),F=Math.max(P*.2,Math.min(P*3,z>0?P+1.6*z:P-.8*-z)),O=.5523,k=G=>Math.round(G*10)/10;m=`M ${k(F)} 0 Q ${k(d/2)} ${I} ${k(d-B)} 0 C ${k(d-B+O*B)} 0 ${k(d)} ${k(P-O*P)} ${k(d)} ${k(P)} L ${k(d)} ${k(g-P)} C ${k(d)} ${k(g-P+O*P)} ${k(d-B+O*B)} ${k(g)} ${k(d-B)} ${k(g)} Q ${k(d/2)} ${k(g+t.bendCur*2)} ${k(F)} ${k(g)} C ${k(F-O*F)} ${k(g)} 0 ${k(g-P+O*P)} 0 ${k(g-P)} L 0 ${k(P)} C 0 ${k(P-O*P)} ${k(F-O*F)} 0 ${k(F)} 0 Z`}}const p=m!=="",b={t:`translate(${s.cx-s.w/2+u}px, ${s.cy-s.h/2+u}px)`+l,w:p?"0":String(d),h:String(g),rx:String(x)},_=t.lastPaint;return(!_||_.t!==b.t)&&(t.blob.style.transform=b.t),(!_||_.w!==b.w)&&t.blob.setAttribute("width",b.w),(!_||_.h!==b.h)&&t.blob.setAttribute("height",b.h),(!_||_.rx!==b.rx)&&t.blob.setAttribute("rx",b.rx),t.lastPaint=b,t.bendPathEl&&(m!==(t.lastBendD??"")&&(t.bendPathEl.setAttribute("d",m),t.lastBendD=m),p&&(t.bendPathEl.style.transform=b.t)),t.last=n,!(Math.abs(s.cx-a)<.05&&Math.abs(s.cy-r)<.05&&Math.abs(s.w-n.w)<.05&&Math.abs(s.h-n.h)<.05&&Math.abs(s.r-o)<.05&&c<1&&Math.abs(s.vw)+Math.abs(s.vh)+Math.abs(s.vr)<1&&t.motionEnv<.01&&t.tailR<.3&&!h)}writeBlend(t,e){const n=t.frame,i=t.blend,a=t.melt;if(!a)return!1;const r=i.range??Math.max(10,this.gooBlur*2.5);let o=1/0,s=null;for(const Y of this.items){if(Y===t||!Y.frame)continue;const oe=Y.frame,Ce=Math.max(oe.x-(n.x+n.w),n.x-(oe.x+oe.w),0),ce=Math.max(oe.y-(n.y+n.h),n.y-(oe.y+oe.h),0),Te=Math.hypot(Ce,ce);Te<o&&(o=Te,s=oe)}let l=0,c=0;if(s&&o===0){const Y=s,oe=Math.min(n.x+n.w,Y.x+Y.w)-Math.max(n.x,Y.x),Ce=Math.min(n.y+n.h,Y.y+Y.h)-Math.max(n.y,Y.y),ce=Math.max(1,Math.min(n.w,n.h,Y.w,Y.h));l=Math.max(0,Math.min(oe,Ce))/ce,c=Math.max(0,Math.max(oe,Ce))}let f=0;if(s&&o<r&&i.active!==!1){const Y=Ys(Math.min(1,(1-o/r)/.65)),oe=Math.max(0,Math.min(1,i.strength??1)),Ce=Math.max(.01,i.sink??.45),ce=Ys(Math.max(0,Math.min(1,(l-Ce*.2)/Math.max(.01,Ce*.8))));f=Math.pow(Y,1.25)*oe*(1-ce)}if(f>=t.meltFade)t.meltFade+=(f-t.meltFade)*Math.min(1,e*16),t.meltRel=null;else if(f>.02)t.meltFade+=(f-t.meltFade)*Math.min(1,e*6),t.meltRel=null;else{const Y=Math.max(40,Math.max(i.releaseMs??240,i.fadeMs??i.releaseMs??240));t.meltRel||(t.meltRel={from:t.meltFade,t:0});const oe=t.meltRel;oe.t+=e*1e3;const Ce=Math.min(1,oe.t/Y);t.meltFade=f+(oe.from-f)*(1-Ce)*(1-Ce)}f===0&&t.meltFade<.001&&(t.meltFade=0);const h=t.meltFade;if(h<=.001)return t.lastBlend&&t.lastBlend.s!==0?(this.clearBlend(t),t.lastBlend={cx:0,cy:0,s:0,d:0,pk:""},!0):!1;let u=s;if((!u||o>=r)&&t.meltGeom&&(u=t.meltGeom.o),!u)return!1;const d=n.x+n.w<u.x?(n.x+n.w+u.x)/2:u.x+u.w<n.x?(u.x+u.w+n.x)/2:(Math.max(n.x,u.x)+Math.min(n.x+n.w,u.x+u.w))/2,g=n.y+n.h<u.y?(n.y+n.h+u.y)/2:u.y+u.h<n.y?(u.y+u.h+n.y)/2:(Math.max(n.y,u.y)+Math.min(n.y+n.h,u.y+u.h))/2;t.meltGeom={o:{...u}};const x=t.meltRel,m=Math.max(40,i.fadeMs??i.releaseMs??240),p=x?Math.min(1,x.t/m):0,b=x?(1-p)*(1-p):1,_=x?Math.min(1,x.from*(.55+.45*(1-p))):h,E=_*_*(3-2*_);t.meltOp=b<t.meltOp?b:t.meltOp+(b-t.meltOp)*Math.min(1,e*16);const M=i.zone??this.gooBlur*2.2+4,v=Math.min(Math.min(n.w,n.h)*.9,M*(.7+.6*_)),S=Math.max(0,i.flowSpeed??26),T=t.meltPrev,y=T?Math.hypot(n.x-T.x,n.y-T.y)/Math.max(.001,e):0;t.meltPrev={x:n.x,y:n.y};const w=Math.min(e,1/24)*S*.12*Math.min(1,y/40);t.meltPhase+=w;const A=t.lastBlend,C=`${i.seamBlur??""}/${i.strength??""}/${i.warp}/${i.blur}/${i.mix??""}/${i.gravity??""}`;if(w<1e-4&&A&&A.pk===C&&Math.abs(A.cx-d)<.05&&Math.abs(A.cy-g)<.05&&Math.abs(A.s-h)<.005&&Math.abs(A.d-v)<.05)return!1;const R=performance.now();if(this.frameEma>20&&R-t.meltWroteAt<35)return!0;t.meltWroteAt=R;const P=Y=>Math.round(Y*10)/10,I=i.host,z=a.layers.length,B=u.x+u.w/2,F=u.y+u.h/2,O=B-d,k=F-g,G=Math.hypot(O,k)||1,ee=O/G,ne=k/G,J=Math.max(0,i.gravity??25)*E,he=P(Math.atan2(ne,ee)*180/Math.PI),H=Y=>Math.round(Y*1e3)/1e3,N=Math.max(0,Math.min(1,i.taper??.65)),W=Math.max(.2,i.warpFreq??1),fe=i.zone??this.gooBlur*2.2+4,j=Math.min(.3,Math.max(.01,W/(fe*1.1))),ue=(j*.35).toFixed(4),de=(j*1.6).toFixed(4),ae=Math.abs(ee),Ee=Math.abs(ne),L=t.meltAxis==="x"?Ee>ae*1.25?"y":"x":t.meltAxis==="y"?ae>Ee*1.25?"x":"y":ae>=Ee?"x":"y";t.meltAxis=L;const ve=L==="x"?`${ue} ${de}`:`${de} ${ue}`,me=d+ee*v*.05,we=g+ne*v*.05,te=a.layers.map((Y,oe)=>{const Ce=z>1?oe/(z-1):1,ce=.15+.85*Math.pow(Ce,1.4),Te=.45+.55*Ce,Le=.7+.45*Ce,$e=6*Math.sin(t.meltPhase*Le),We=2*Math.sin(t.meltPhase*Le*1.31+1.7);return[String(Cn(i.warp*Te*E,.25)),String(Cn(i.blur*ce*E,.25)),String(Cn(ee*$e-ne*We,.5)),String(Cn(ne*$e+ee*We,.5)),String(Cn(me,.5)),String(Cn(we,.5)),String(Cn(v*(.95-.55*Ce),.5)),String(Cn(Math.min(1,E*(.75+.25*Ce)),.02))]}),qe=d-ee*v,Ue=g-ne*v,_e=1-.45*Ys(Math.min(1,l*2.2)),U=Math.min(2.2,(J+o)/Math.max(8,2*v))*(.5+N)*_e,D=Y=>{const oe=H(1+U*Y),Ce=H(1/(1+U*.35*Y));return`translate(${P(qe)}, ${P(Ue)}) rotate(${he}) scale(${oe}, ${Ce}) rotate(${-he}) translate(${P(-qe)}, ${P(-Ue)})`},V=Math.max(0,Math.min(1,i.mix??0))*E,pe=Y=>{if(Y<.002)return"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 1";const oe=H(1+4*Y),Ce=H(1-oe*(.38+.12*Y));return`0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  ${oe} 0 0 0 ${Ce}`},q=Cn(1+Math.min(1.8,o/Math.max(8,2*v)),.05),Z=q>1.001?`translate(${P(me)}, ${P(we)}) rotate(${he}) scale(${H(q)}, 1) rotate(${-he}) translate(${P(-me)}, ${P(-we)})`:"",be=i.blur*2.5+i.warp+J*.5+U*v+8,Me=Cn(v*1.15*q+be,8),Fe=String(Cn(me-Me,8)),Pe=String(Cn(we-Me,8)),Ae=String(Cn(Me*2,8));if(a.layers.forEach((Y,oe)=>{const Ce=z>1?oe/(z-1):1,ce=te[oe],Te=D(.4+.6*Ce),Le=pe(Cn(V*(.15+.85*Ce),.01)),$e=ce.join(",")+"|"+ve+"|"+Te+"|"+Le+"|"+Z+"|"+Fe+","+Pe+","+Ae;Y.last!==$e&&(Y.last=$e,Y.filter.setAttribute("x",Fe),Y.filter.setAttribute("y",Pe),Y.filter.setAttribute("width",Ae),Y.filter.setAttribute("height",Ae),Y.disp.setAttribute("scale",ce[0]),Y.blurEl.setAttribute("stdDeviation",ce[1]),Y.turb.getAttribute("baseFrequency")!==ve&&Y.turb.setAttribute("baseFrequency",ve),Y.noiseOffset.setAttribute("dx",ce[2]),Y.noiseOffset.setAttribute("dy",ce[3]),Y.circle.setAttribute("cx",ce[4]),Y.circle.setAttribute("cy",ce[5]),Y.circle.setAttribute("r",ce[6]),Z?Y.circle.setAttribute("transform",Z):Y.circle.removeAttribute("transform"),Y.gl.setAttribute("opacity",ce[7]),Y.shift.setAttribute("transform",Te),Y.erode.setAttribute("values",Le))}),a.seam){const Y=a.seam,oe=Cn((i.seamBlur??i.blur*1.6)*E,.25),Ce=Cn(Math.min(1,E*1.2)*.55,.02),ce=Cn(v*1.25,.5),Te=`${oe}|${Ce}|${Cn(me,.5)},${Cn(we,.5)},${ce}|${Z}|${Fe},${Pe},${Ae}`;Y.last!==Te&&(Y.last=Te,Y.filter.setAttribute("x",Fe),Y.filter.setAttribute("y",Pe),Y.filter.setAttribute("width",Ae),Y.filter.setAttribute("height",Ae),Y.blurEl.setAttribute("stdDeviation",String(oe)),Y.circle.setAttribute("cx",String(Cn(me,.5))),Y.circle.setAttribute("cy",String(Cn(we,.5))),Y.circle.setAttribute("r",String(ce)),Z?Y.circle.setAttribute("transform",Z):Y.circle.removeAttribute("transform"),Y.gl.setAttribute("opacity",String(Ce)))}const De=n.x+n.w/2,Qe=n.y+n.h/2,ot=Math.atan2(g-Qe,d-De),ke=i.pull*_,ct=H(t.meltOp).toString()+`|translate(${P(Math.cos(ot)*ke)}px, ${P(Math.sin(ot)*ke)}px)`;if(ct!==t.meltHostLast){t.meltHostLast=ct;const Y=ct.split("|");I.setAttribute("opacity",Y[0]),I.style.transform=Y[1]}const X=Math.max(10,this.gooBlur*2.5),He=s?o<X?Ys(1-o/X):0:h,Se=Cn(Math.max(0,1-Math.min(h,He)*2.2),.05).toFixed(2),Ie=(Math.round((1+2*Number(Se))/3*20)/20).toFixed(2);for(const Y of a.entries){if(!Y.lowRes){const wt=A3(Y.el);wt?(Y.image.setAttribute("href",wt),Y.lowRes=!0):Y.el.complete&&Y.el.naturalWidth&&(Y.lowRes=!0)}const oe=Y.measured;if(!oe||oe.w<1||oe.h<1)continue;const Ce=oe.x,ce=oe.y,Te=(oe.ow||oe.w)/oe.w,Le=`${P(Ce)},${P(ce)},${P(oe.w)},${P(oe.h)},${P(cc(Y.radiusPx/(Te||1),oe.w,oe.h))}`;if(Le!==Y.lastGeom){Y.lastGeom=Le;for(const wt of Y.rects)wt.setAttribute("x",String(P(Ce))),wt.setAttribute("y",String(P(ce))),wt.setAttribute("width",String(P(oe.w))),wt.setAttribute("height",String(P(oe.h))),wt.setAttribute("rx",String(P(cc(Y.radiusPx/(Te||1),oe.w,oe.h))));Y.pattern.setAttribute("x",String(P(Ce))),Y.pattern.setAttribute("y",String(P(ce))),Y.pattern.setAttribute("width",String(P(oe.w))),Y.pattern.setAttribute("height",String(P(oe.h))),Y.image.setAttribute("width",String(P(oe.w))),Y.image.setAttribute("height",String(P(oe.h)))}const $e=(oe.oh||oe.h)/oe.h;if(Math.hypot(Math.max(Ce-d,d-(Ce+oe.w),0),Math.max(ce-g,g-(ce+oe.h),0))>v){Y.lastHole!==null&&(Y.lastHole=null,Y.el.style.removeProperty("mask-image"),Y.el.style.removeProperty("-webkit-mask-image"),Y.el.style.removeProperty("mask-composite"),Y.el.style.removeProperty("-webkit-mask-composite"));continue}const et=oe.ow||oe.w,Ct=oe.oh||oe.h,yt=Math.min(et,Ct)/2;let Ge=(d-Ce)*Te,on=(g-ce)*$e,Ot=Ge-et/2,je=on-Ct/2;const Pt=Math.hypot(Ot,je);Pt<yt&&(Pt<.001?(Ot=ee,je=ne):(Ot/=Pt,je/=Pt),Ge=et/2+Ot*yt,on=Ct/2+je*yt);const Ht=Math.round(Ge),Zt=Math.round(on),gn=Cn(Math.min(Math.max(v,c*.75)*Math.min(Te,$e),yt),1),un=P(Math.max(Math.hypot(Ht,Zt),Math.hypot(Ht-et,Zt),Math.hypot(Ht,Zt-Ct),Math.hypot(Ht-et,Zt-Ct)))+2;let It;if(o===0&&c>4&&s){const wt=s,Rt=(wt.x+wt.w/2-Ce)*Te,Qt=(wt.y+wt.h/2-ce)*$e,ni=(Math.max(n.x,wt.x)-Ce)*Te,_i=(Math.max(n.y,wt.y)-ce)*$e,$=(Math.min(n.x+n.w,wt.x+wt.w)-Ce)*Te,se=(Math.min(n.y+n.h,wt.y+wt.h)-ce)*$e,ge=Math.round(Math.max(Math.hypot(ni-Rt,_i-Qt),Math.hypot($-Rt,_i-Qt),Math.hypot(ni-Rt,se-Qt),Math.hypot($-Rt,se-Qt))+3),re=Math.round(Math.min(yt*2.6,Math.max(gn,(i.seamBlur??i.blur*1.6)*3.2))),le=Math.max(0,ge-re),Be=Math.round(Math.max(Math.hypot(Rt,Qt),Math.hypot(Rt-et,Qt),Math.hypot(Rt,Qt-Ct),Math.hypot(Rt-et,Qt-Ct)))+2;It=`radial-gradient(circle at ${Math.round(Rt)}px ${Math.round(Qt)}px, rgba(255,255,255,${Se}) ${le}px, #fff ${ge}px, #fff ${Be}px)`}else It=`radial-gradient(circle at ${Ht}px ${Zt}px, rgba(255,255,255,${Se}) ${P(gn*.2)}px, rgba(255,255,255,${Ie}) ${P(gn*.45)}px, #fff ${P(gn*.78)}px, #fff ${un}px)`;It!==Y.lastHole&&(Y.lastHole=It,Y.el.style.setProperty("mask-image",It),Y.el.style.setProperty("-webkit-mask-image",It),Y.el.style.removeProperty("mask-composite"),Y.el.style.removeProperty("-webkit-mask-composite"))}return t.lastBlend={cx:d,cy:g,s:h,d:v,pk:C},!0}ensureSources(){if(this.sourcesReady)return;const t=this.getGroup();if(!t)return;this.sourcesReady=!0,this.mo=new MutationObserver(n=>{for(const i of n){const a=i.target;if(!(a instanceof Element)||!a.closest("[data-gooey-svg], [data-gooey-overlay]")){this.wake();return}}}),this.mo.observe(t,{attributes:!0,childList:!0,subtree:!0,attributeFilter:["style","class"]});const e=()=>this.wake();for(const n of["transitionrun","animationstart","pointerdown"])t.addEventListener(n,e,!0),this.removeListeners.push(()=>t.removeEventListener(n,e,!0));window.addEventListener("scroll",e,{capture:!0,passive:!0}),this.removeListeners.push(()=>window.removeEventListener("scroll",e,!0)),this.interval=setInterval(()=>{!this.awake&&this.measureAll()&&this.wake()},300)}};function yp(t,e){const n=[];let i=0,a="";for(const r of t)r==="("?i++:r===")"&&i--,i===0&&(e===","?r===",":/\s/.test(r))?(a.trim()&&n.push(a.trim()),a=""):a+=r;return a.trim()&&n.push(a.trim()),n}var C3=/^[+-]?(\d+\.?\d*|\.\d+)(px)?$/;function R3(t){if(!t||t.trim()===""||t.trim()==="none")return[];const e=[];for(const n of yp(t,",")){const i=yp(n," ");if(i.length===0)continue;const a=i.includes("inset"),r=[],o=[];for(const h of i)h!=="inset"&&(r.length<4&&C3.test(h)?r.push(parseFloat(h)):o.push(h));const[s=0,l=0,c=0,f=0]=r;e.push({x:s,y:l,blur:c,spread:f,color:o.join(" ")||"rgba(0, 0, 0, 0.35)",inset:a})}return e}var P3=ie.forwardRef(function({blur:e=6,contrast:n=18,fill:i="#fff",shadow:a,filterPadding:r=24,waviness:o=0,wavinessFreq:s=.018,filter:l,className:c,style:f,children:h,...u},d){const g=ie.useRef(null),[x,m]=ie.useState(null),[p,b]=ie.useState(null),[_,E]=ie.useState({w:0,h:0}),M=ie.useCallback(I=>{g.current=I,typeof d=="function"?d(I):d&&(d.current=I)},[d]),v=`gooey-${ie.useId().replace(/[^a-zA-Z0-9_-]/g,"")}`,S=ie.useMemo(()=>R3(a),[a]);_0(()=>{const I=g.current;if(!I)return;const z=()=>E(F=>F.w===I.offsetWidth&&F.h===I.offsetHeight?F:{w:I.offsetWidth,h:I.offsetHeight});z();const B=new ResizeObserver(z);return B.observe(I),()=>B.disconnect()},[]);const T=ie.useMemo(()=>new T3(()=>g.current),[]),y=ie.useMemo(()=>m3(),[]);ie.useEffect(()=>()=>T.dispose(),[T]),ie.useEffect(()=>{T.gooBlur=e},[T,e]);const w=ie.useMemo(()=>({portal:x,meltPortal:p,fill:i,getGroup:()=>g.current,engine:T,imageMelt:y}),[x,p,i,T,y]),A=S.filter(I=>I.inset||I.spread!==0),C=S.filter(I=>!I.inset&&I.spread===0).map(I=>`drop-shadow(${I.x}px ${I.y}px ${I.blur}px ${I.color})`).join(" "),R=A.reduce((I,z)=>Math.max(I,Math.max(Math.abs(z.x),Math.abs(z.y))+z.blur*1.5+Math.max(0,z.spread)),0),P=Math.ceil(e*3+R+r);return K.jsxs("div",{...u,ref:M,className:c,style:{position:"relative",isolation:"isolate",...f},children:[K.jsxs("svg",{"aria-hidden":"true",focusable:"false","data-gooey-svg":"",style:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible",pointerEvents:"none",zIndex:-1,filter:C||void 0,willChange:"filter, transform"},children:[K.jsx("defs",{children:l?K.jsx("filter",{id:v,filterUnits:"userSpaceOnUse",x:-P,y:-P,width:_.w+P*2,height:_.h+P*2,colorInterpolationFilters:"sRGB",dangerouslySetInnerHTML:{__html:l}}):K.jsx("filter",{id:v,filterUnits:"userSpaceOnUse",x:-P,y:-P,width:_.w+P*2,height:_.h+P*2,colorInterpolationFilters:"sRGB",children:K.jsx(d3,{blur:e,contrast:n,shadows:A,waviness:o,wavinessFreq:s})})}),K.jsx("g",{id:`${v}-sil`,ref:m,filter:`url(#${v})`,style:{fill:i}})]}),K.jsxs("svg",{"aria-hidden":"true",focusable:"false","data-gooey-overlay":"",style:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible",pointerEvents:"none",zIndex:9999},children:[K.jsx("defs",{children:K.jsx("mask",{id:`${v}-meltmask`,maskUnits:"userSpaceOnUse",x:-P,y:-P,width:_.w+P*2,height:_.h+P*2,children:K.jsx("use",{href:`#${v}-sil`})})}),K.jsx("g",{mask:`url(#${v}-meltmask)`,children:K.jsx("g",{ref:b})})]}),K.jsxs(Xg.Provider,{value:w,children:[h,K.jsx(b3,{registry:y})]})]})}),D3={snappy:{stiffness:480,damping:34,mass:1},smooth:{stiffness:190,damping:26,mass:1},bouncy:{stiffness:320,damping:17,mass:1}},uc=1/240;function I3(t){let e=0,n=0,i=0,a=-1,r=0;const o=[0];for(;i<10;){const h=(-t.stiffness*(e-1)-t.damping*n)/t.mass;if(n+=h*uc,e+=n*uc,i+=uc,o.push(e),e>r&&(r=e),Math.abs(e-1)<.001&&Math.abs(n)<.02){if(a<0&&(a=i),i-a>=.064)break}else a=-1}const s=a>0?a:i,l=Math.round(Math.min(120,Math.max(24,s*90))),c=Math.min(o.length-1,s/uc),f=[];for(let h=0;h<=l;h++){const u=Math.min(o.length-1,Math.round(h/l*c));f.push(Math.round(o[u]*1e4)/1e4)}return f[f.length-1]=1,{duration:s,values:f,overshoots:r>1.001}}var ou=null;function wp(){return ou==null&&(ou=typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("transition-timing-function","linear(0, 1)")),ou}var Sp=new Map,Ep=new Map;function hl(t){let e=Ep.get(t);if(e)return e;const n=/^linear\(([^)]+)\)$/.exec(t.trim()),i=/^cubic-bezier\(([^)]+)\)$/.exec(t.trim());if(n){const a=n[1].split(",").map(Number);e=r=>{if(r<=0)return a[0];if(r>=1)return a[a.length-1];const o=r*(a.length-1),s=Math.floor(o);return a[s]+(a[s+1]-a[s])*(o-s)}}else if(i){const[a,r,o,s]=i[1].split(",").map(Number);e=l=>{if(l<=0)return 0;if(l>=1)return 1;let c=0,f=1;for(let u=0;u<24;u++){const d=(c+f)/2;3*d*(1-d)*(1-d)*a+3*d*d*(1-d)*o+d**3<l?c=d:f=d}const h=(c+f)/2;return 3*h*(1-h)*(1-h)*r+3*h*h*(1-h)*s+h**3}}else t==="ease"?e=hl("cubic-bezier(0.25, 0.1, 0.25, 1)"):t==="ease-in"?e=hl("cubic-bezier(0.42, 0, 1, 1)"):t==="ease-out"?e=hl("cubic-bezier(0, 0, 0.58, 1)"):t==="ease-in-out"?e=hl("cubic-bezier(0.42, 0, 0.58, 1)"):e=a=>Math.min(1,Math.max(0,a));return Ep.set(t,e),e}function L3(t,e=!1){if(e)return{duration:0,easing:"linear"};const n=t??"smooth";if(typeof n=="object"&&"duration"in n)return{duration:n.duration,easing:n.ease??"cubic-bezier(0.22, 1, 0.36, 1)"};const i=typeof n=="string"?D3[n]:{stiffness:300,damping:24,mass:1,...n},a=`${i.stiffness}/${i.damping}/${i.mass}/${wp()}`;let r=Sp.get(a);if(!r){const o=I3(i);r={duration:Math.round(o.duration*1e3),easing:wp()?`linear(${o.values.join(", ")})`:o.overshoots?"cubic-bezier(0.34, 1.56, 0.64, 1)":"cubic-bezier(0.22, 1, 0.36, 1)"},Sp.set(a,r)}return r}function jg(t){return Array.isArray(t)?t:t?[t]:[]}function su(t){const e=td();return t.observe||jg(t.effect).some(i=>i!=="morph")?K.jsx(O3,{...t,ctx:e}):K.jsx(U3,{...t,ctx:e})}function F3(t){return typeof t=="string"?t:JSON.stringify(t??null)}function z3(t,e){return!!t&&t.x===e.x&&t.y===e.y&&t.w===e.w&&t.h===e.h&&t.r.every((n,i)=>n===e.r[i])}function U3({x:t=0,y:e=0,scale:n=1,transition:i="smooth",delay:a=0,radius:r,className:o,style:s,children:l,ctx:c}){const f=ie.useRef(null),h=ie.useRef(null),[u,d]=ie.useState(null),g=M3(),x=F3(i),{duration:m,easing:p}=ie.useMemo(()=>L3(i,g),[x,g]),b=r==null?"":JSON.stringify(r);_0(()=>{const M=f.current,v=c.getGroup();if(!M||!v)return;const S=()=>{const y=_3(M,v),w=M.offsetWidth,A=M.offsetHeight,C=M.firstElementChild??M,R=r!=null?Yg(r):ul(C,w,A),P={x:y.x,y:y.y,w,h:A,r:R};d(I=>z3(I,P)?I:P)};S();const T=new ResizeObserver(S);return T.observe(M),T.observe(v),()=>T.disconnect()},[c,b]);const _=ie.useRef(null),E=(M,v,S)=>{const T=`translate(${M}px, ${v}px)`+(S!==1?` scale(${S})`:"");f.current&&(f.current.style.transform=T),h.current&&(h.current.style.transform=T)};return _0(()=>{const M=_.current;if(!M||m<=0||M.x===t&&M.y===e&&M.s===n){_.current={x:t,y:e,s:n},E(t,e,n);return}const v={...M},S=hl(p),T=performance.now()+a;let y=0;const w=A=>{const C=Math.min(1,Math.max(0,(A-T)/m)),R=S(C),P=v.x+(t-v.x)*R,I=v.y+(e-v.y)*R,z=v.s+(n-v.s)*R;_.current={x:P,y:I,s:z},E(P,I,z),C<1&&(y=requestAnimationFrame(w))};return y=requestAnimationFrame(w),()=>cancelAnimationFrame(y)},[t,e,n,m,p,a]),K.jsxs(K.Fragment,{children:[K.jsx("div",{ref:f,className:o,style:{display:"inline-block",...s,willChange:"transform"},children:l}),c.portal&&u&&Gh.createPortal(N3(u,{transformBox:"fill-box",transformOrigin:"center",willChange:"transform"},M=>{if(h.current=M,M){const v=_.current??{x:t,y:e,s:n};M.style.transform=`translate(${v.x}px, ${v.y}px)`+(v.s!==1?` scale(${v.s})`:"")}}),c.portal)]})}function N3(t,e,n){const[i,a,r,o]=t.r;if(i===a&&a===r&&r===o){const l=Math.max(0,Math.min(i,Math.min(t.w,t.h)/2));return K.jsx("rect",{ref:n,x:t.x,y:t.y,width:t.w,height:t.h,rx:l,style:e})}return K.jsx("path",{ref:n,d:y3(t.x,t.y,t.w,t.h,t.r),style:e})}function O3({radius:t,blobInset:e,bridgeGrow:n,contactBlur:i,effect:a,evolve:r,move:o,className:s,style:l,children:c,ctx:f}){const h=ie.useRef(null),u=ie.useRef(null),d=ie.useRef(null),g=ie.useRef(null),x=typeof i=="object"?i:{},m=x.blur??8,p=x.warp??26,b=x.pull??4,_=x.range,E=x.zone,M=x.mix??0,v=x.gravity??60,S=x.taper??1,T=x.warpFreq??1.7,y=x.flowSpeed??22,w=x.warpStyle??"fractalNoise",A=x.detail??2,C=x.active!==!1,R=x.releaseMs??240,P=x.fadeMs,I=x.strength??1,z=x.sink,B=x.surface,F=x.seamBlur,O=jg(a),k={evolve:O.includes("evolve"),move:O.includes("move"),evolveOpts:{...ki,...r},moveOpts:{...Mr,...o}},G=k.evolve||k.move,ee=t==null?"":JSON.stringify(t),ne=i?`${m}/${p}/${b}/${_??"auto"}/${E??"auto"}/${M}/${v}/${S}/${T}/${y}/${w}/${A}/${B??"liquid"}/${(F??1)>0?"seam":"noseam"}`:"",J=O.join(",")+(k.evolve?JSON.stringify(k.evolveOpts):"")+(k.move?JSON.stringify(k.moveOpts):"");return _0(()=>{const he=h.current,H=u.current,N=he?.firstElementChild??null;if(!N||!H)return;const W=i&&d.current?{host:d.current,blur:m,warp:p,pull:b,range:_,zone:E,mix:M,gravity:v,taper:S,warpFreq:T,flowSpeed:y,warpStyle:w,detail:A,active:C,releaseMs:R,fadeMs:P,strength:I,sink:z,surface:B,seamBlur:F}:void 0;return g.current=W??null,f.engine.add({target:N,blob:H,radius:t==null?void 0:Yg(t)[0],blobInset:e,bridgeGrow:n,blend:W,dynamics:G?k:void 0})},[f,ee,ne,J,e,n]),ie.useEffect(()=>{g.current&&(g.current.active=C,g.current.releaseMs=R,g.current.fadeMs=P,g.current.strength=I,g.current.sink=z,g.current.seamBlur=F,f.engine.wake())},[f,C,R,P,I,z,F]),K.jsxs(K.Fragment,{children:[K.jsx("span",{ref:h,className:s,style:{display:"contents",...l},children:c}),f.portal&&Gh.createPortal(K.jsx("rect",{ref:u,x:0,y:0,width:0,height:0,style:{willChange:"transform",transformBox:"fill-box",transformOrigin:"center"}}),f.portal),i!==void 0&&i!==!1&&f.meltPortal&&Gh.createPortal(K.jsx("g",{ref:d,opacity:0}),f.meltPortal)]})}function y0(t){return Math.max(.12,1-1.1*Math.min(1,Math.max(0,t)))}function $3(t){const e=Math.max(.25,t?.speed??1),n=y0(t?.bounce??.5)/y0(.5);return{massStiffness:ki.massStiffness*e*e,massDamping:ki.massDamping*e*n,sizeStiffness:ki.sizeStiffness*e*e,sizeDamping:ki.sizeDamping*e*n,radiusStiffness:ki.radiusStiffness*e*e,radiusDamping:ki.radiusDamping*e,cornerDuration:ki.cornerDuration/e,contentBlur:t?.contentBlur??ki.contentBlur}}function Ap(t){return{warp:26,blur:8,mix:.7,gravity:60,taper:1,warpFreq:1.7,flowSpeed:22,detail:2,zone:18,range:49,releaseMs:110,strength:typeof t=="number"?Math.min(1,Math.max(0,t)):1}}function Kg(t){const e=Math.min(1,Math.max(0,t?.springiness??.5)),n=Mr.stiffness*Math.pow(10,e-.5),i=Mr.damping*Math.sqrt(n/Mr.stiffness)*(y0(t?.wobble??.5)/y0(.5));return{stiffness:n,damping:i,stretch:.5*Math.min(1,Math.max(0,t?.stretch??.36)),tail:.8*Math.min(1,Math.max(0,t?.trail??.575)),...t?.advanced}}function k3(t){return{...Kg({springiness:1,stretch:0,trail:0}),bend:Math.min(1,Math.max(0,t?.vertical??.6)),bendX:Math.min(1,Math.max(0,t?.horizontal??.35)),...t?.advanced}}function B3({melt:t,children:e}){const{imageMelt:n}=td(),{src:i,...a}=t??{};return K.jsx(v3,{src:i,opts:{...p3,...a},registry:n,children:e})}function H3(t){const{effect:e="morph",morph:n,move:i,bend:a,melt:r,dissolve:o,observe:s,...l}=t;if(e==="melt")return K.jsx(B3,{melt:r,children:l.children});if(e==="bend")return K.jsx(su,{...l,observe:!0,effect:"move",move:k3(a)});if(e==="move")return K.jsx(su,{...l,observe:!0,effect:"move",move:Kg(i)});const c=n?.advanced,f=!!n?.shape,u=o!==void 0&&o!==!1?typeof o=="object"?{...Ap(!0),...o}:Ap(o):void 0,d=f?{...$3(n),...c?.evolve}:void 0;return K.jsx(su,{...l,observe:s||f||!!u||void 0,effect:f?"evolve":void 0,evolve:d,contactBlur:u,blobInset:c?.blobInset,bridgeGrow:c?.bridgeGrow})}var hc=Object.assign(P3,{Item:H3});function Zg(t){const e=t.trim(),n=e.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(n){const a=n[1].length===3?n[1].split("").map(r=>r+r).join(""):n[1];return[parseInt(a.slice(0,2),16),parseInt(a.slice(2,4),16),parseInt(a.slice(4,6),16)]}const i=e.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);return i?[Math.round(+i[1]),Math.round(+i[2]),Math.round(+i[3])]:null}function W3(t){const e=Zg(t);return e?`rgb(${e[0]}, ${e[1]}, ${e[2]})`:null}function fc(t){const e=Zg(t);return e?`${e[0]}, ${e[1]}, ${e[2]}`:null}const G3={dark:{strokeOpacity:1.16,innerOpacity:.47,bloomOpacity:.89,innerShadow:"rgba(255, 255, 255, 0.1)",saturation:1.2,brightness:1.1},light:{strokeOpacity:1.2,innerOpacity:.85,bloomOpacity:.5,innerShadow:"rgba(0, 0, 0, 0.08)",saturation:1.6,brightness:.95,hueRange:40,hueDuration:8.5,hueBase:5,strength:.8,bandStrength:1.7}},Pr=[{x:0,w:74,h:46,band:0},{x:-36,w:54,h:40,band:1},{x:36,w:54,h:40,band:1},{x:-72,w:48,h:32,band:2},{x:72,w:48,h:32,band:2},{x:-108,w:42,h:26,band:1},{x:108,w:42,h:26,band:1}],V3=36,X3=V3*Pr.length,Y3={colorful:{dark:["rgb(255, 70, 120)","rgb(60, 190, 255)","rgb(175, 70, 255)","rgb(60, 220, 130)","rgb(255, 150, 40)","rgb(90, 100, 255)","rgb(40, 200, 190)"],light:["rgb(255, 201, 21)","rgb(126, 196, 255)","rgb(180, 40, 230)","rgb(235, 100, 160)","rgb(255, 176, 122)","rgb(154, 160, 255)","rgb(127, 217, 238)"]},mono:{dark:["rgb(215, 215, 215)","rgb(180, 180, 180)","rgb(190, 190, 190)","rgb(160, 160, 160)","rgb(170, 170, 170)","rgb(150, 150, 150)","rgb(155, 155, 155)"],light:["rgb(60, 60, 60)","rgb(90, 90, 90)","rgb(85, 85, 85)","rgb(110, 110, 110)","rgb(105, 105, 105)","rgb(125, 125, 125)","rgb(120, 120, 120)"]},ocean:{dark:["rgb(80, 140, 255)","rgb(40, 200, 230)","rgb(120, 90, 255)","rgb(30, 170, 210)","rgb(160, 80, 240)","rgb(60, 110, 255)","rgb(40, 190, 180)"],light:["rgb(40, 100, 240)","rgb(20, 160, 200)","rgb(90, 60, 230)","rgb(20, 130, 180)","rgb(130, 50, 220)","rgb(40, 80, 230)","rgb(20, 150, 150)"]},sunset:{dark:["rgb(255, 110, 60)","rgb(255, 180, 40)","rgb(255, 60, 90)","rgb(255, 210, 80)","rgb(240, 70, 140)","rgb(255, 140, 50)","rgb(230, 50, 110)"],light:["rgb(235, 80, 30)","rgb(230, 150, 10)","rgb(230, 30, 70)","rgb(225, 175, 30)","rgb(215, 40, 110)","rgb(235, 110, 20)","rgb(205, 30, 90)"]},forest:{dark:["rgb(70, 220, 120)","rgb(40, 200, 180)","rgb(140, 230, 80)","rgb(30, 170, 140)","rgb(190, 235, 70)","rgb(50, 190, 110)","rgb(30, 150, 120)"],light:["rgb(30, 170, 80)","rgb(20, 150, 130)","rgb(90, 180, 30)","rgb(20, 130, 100)","rgb(130, 180, 20)","rgb(30, 150, 80)","rgb(20, 120, 90)"]},candy:{dark:["rgb(255, 90, 170)","rgb(255, 120, 220)","rgb(210, 80, 255)","rgb(255, 150, 190)","rgb(180, 110, 255)","rgb(255, 70, 140)","rgb(230, 100, 240)"],light:["rgb(235, 40, 140)","rgb(230, 70, 190)","rgb(180, 40, 230)","rgb(235, 100, 160)","rgb(150, 70, 230)","rgb(230, 30, 110)","rgb(200, 60, 210)"]},ice:{dark:["rgb(150, 230, 255)","rgb(90, 200, 255)","rgb(190, 240, 255)","rgb(120, 190, 255)","rgb(160, 220, 250)","rgb(80, 170, 255)","rgb(200, 235, 255)"],light:["rgb(30, 160, 220)","rgb(20, 130, 210)","rgb(60, 180, 230)","rgb(40, 120, 220)","rgb(50, 160, 220)","rgb(20, 110, 220)","rgb(70, 170, 230)"]},gold:{dark:["rgb(255, 200, 70)","rgb(255, 170, 40)","rgb(255, 220, 110)","rgb(240, 150, 30)","rgb(255, 235, 140)","rgb(230, 160, 40)","rgb(250, 210, 90)"],light:["rgb(200, 140, 10)","rgb(190, 120, 0)","rgb(210, 160, 30)","rgb(180, 110, 0)","rgb(205, 170, 40)","rgb(175, 115, 5)","rgb(195, 150, 20)"]}};function q3(t,e){const n=t.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return n?`rgba(${n[1]}, ${n[2]}, ${n[3]}, ${e.toFixed(2)})`:t}function lu(t,e=1){return Math.max(.5,Math.round(t*e*100)/100)}function j3(t,e){return`calc(50% + (var(--vb-cx-${e}) + var(--vb-x${t}-${e})) * var(--vb-w-${e}) * var(--vb-z-${e}, 1))`}function cu({id:t,colors:e,alpha:n,sw:i,sh:a,y:r,fade:o,count:s}){return(s?Pr.slice(0,s):Pr).map((l,c)=>{const f=n>=1?e[c%e.length]:q3(e[c%e.length],n),h=`calc(${Math.round(l.w*i)}px * var(--vb-w-${t}) * var(--vb-z-${t}, 1))`,u=`calc(${Math.round(l.h*a)}px * var(--vb-h-${t}) * var(--vb-l${c}-${t}) * var(--vb-z-${t}, 1))`,d=`calc(100% + (${r}px + var(--vb-y${c}-${t})) * var(--vb-z-${t}, 1))`;return`radial-gradient(ellipse ${h} ${u} at ${j3(c,t)} ${d}, ${f} 0%, transparent ${o}%)`}).join(`,
    `)}function K3(t){const{id:e,borderRadius:n,borderWidth:i,strokeOpacity:a,innerOpacity:r,bloomOpacity:o,innerShadow:s,colorVariant:l,colors:c,brightness:f,saturation:h,theme:u,hueBase:d=0,glowSize:g=1,glowWidth:x=1,glowHeight:m=1,strokeScale:p=1,innerScale:b=1,innerHeight:_=1,bloomScale:E=1,bloomHeight:M=1,coreSize:v=1,coreLight:S=0,coreLightWidth:T=1,coreLightHeight:y=1,rangeWidth:w=1,rangeHeight:A=1,softness:C=1,distortion:R=!1,scale:P=1}=t,I=Math.round(28*P*10)/10,z=Math.round(9*P*10)/10,B=Math.max(0,n-i),F=Math.round(Math.max(40,Math.min(95,70*C))),O=q=>x*q,k=q=>m*q,G=q=>Math.round(q*10)/10,ee=`var(--vb-z-${e}, 1)`,ne=q=>`calc(${G(q)}px * ${ee})`,J=u==="dark",he=Y3[l][J?"dark":"light"].map((q,Z)=>{const be=c?.[Z];return be&&W3(be)||q}),H=l==="mono"?.6:1,N=(a*H).toFixed(2),W=(r*H).toFixed(2),fe=(o*H).toFixed(2),j=f.toFixed(2),ue=h.toFixed(2),de=`hue-rotate(calc(var(--voice-hue-base, ${d}deg) + var(--vb-hue-${e})))`,ae=R?` url(#vb-distort-${e})`:"",Ee=`filter: ${de} brightness(${j}) saturate(${ue});`,L=`filter: ${de} brightness(${j}) saturate(${ue})${ae};`,ve=`filter: blur(${ne(lu(10,g))}) ${de} brightness(${j}) saturate(${ue});`,me=`filter: blur(${ne(lu(10,g))}) ${de} brightness(${j}) saturate(${ue})${ae};`,we=`calc(50% + var(--vb-cx-${e}) * var(--vb-w-${e}) * ${ee})`,te=`calc(100% + (2px + var(--vb-cy-${e})) * ${ee})`,qe=J?`radial-gradient(ellipse calc(${G(30*v)}px * var(--vb-w-${e}) * ${ee}) calc(${G(30*v)}px * var(--vb-h-${e}) * ${ee}) at ${we} ${te}, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.14) 30%, transparent 65%)`:`radial-gradient(ellipse calc(${G(40*v)}px * var(--vb-w-${e}) * ${ee}) calc(${G(30*v)}px * var(--vb-h-${e}) * ${ee}) at ${we} ${te}, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.22) 35%, transparent 70%)`,Ue=cu({id:e,colors:he,alpha:1,sw:O(p),sh:k(p),y:2,fade:F}),_e=cu({id:e,colors:he,alpha:.46,sw:O(.9*b),sh:k(.9*b*_),y:0,fade:F}),U=cu({id:e,colors:he,alpha:J?.9:.7,sw:O(1.15*E),sh:k(1.5*E*M),y:0,fade:Math.min(95,F+2)}),D=(q,Z,be,Me=0)=>`radial-gradient(ellipse calc(${G(q*w)}px * var(--vb-w-${e}) * var(--vb-mw-${e}) * ${ee}) calc((${G(Z*A)}px * var(--vb-h-${e}) + var(--vb-bh-${e})) * ${ee}) at ${we} calc(100% + var(--vb-cy-${e}) * ${ee}), white 0%, rgba(255, 255, 255, 0.5) ${be}%${Me>0?`, rgba(255, 255, 255, ${Me}) 85%`:""}, transparent 100%)`,V=(q,Z)=>`opacity: calc(var(--vb-opacity-${e}, 1) * var(--vb-glow-${e}) * ${Z} * var(--voice-${q}-opacity, 1) * var(--voice-strength, 1));`,pe=(q,Z,be,Me)=>`${q} {
  ${Z}
  position: absolute;
  inset: 0;
  border-radius: ${ne(n)};
  background: ${_e};
  box-shadow: inset 0 0 ${ne(z)} 1px ${s};
  -webkit-mask-image:
    ${D(170,64,45,.3)},
    linear-gradient(white, transparent ${ne(I)}, transparent calc(100% - ${I}px * ${ee}), white),
    linear-gradient(to right, white, transparent ${ne(I)}, transparent calc(100% - ${I}px * ${ee}), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    ${D(170,64,45,.3)},
    linear-gradient(white, transparent ${ne(I)}, transparent calc(100% - ${I}px * ${ee}), white),
    linear-gradient(to right, white, transparent ${ne(I)}, transparent calc(100% - ${I}px * ${ee}), white);
  mask-composite: intersect, add;
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  z-index: 1;
  ${be}
  ${V("inner",W)}
  ${Me}
}`;return`
@property --vb-opacity-${e} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-voice-beam="${e}"] {
  position: relative;
  border-radius: ${n}px;
  overflow: hidden;
  --vb-h-${e}: 0.8;
  --vb-w-${e}: 1;
${Pr.map((q,Z)=>`  --vb-x${Z}-${e}: ${q.x}px;
  --vb-l${Z}-${e}: 1;
  --vb-y${Z}-${e}: 0px;`).join(`
`)}
  --vb-glow-${e}: 0.4;
  --vb-z-${e}: 1;
  --vb-cx-${e}: 0px;
  --vb-cy-${e}: 0px;
  --vb-bh-${e}: 0px;
  --vb-bendA-${e}: 0;
  --vb-mw-${e}: 1;
  --vb-hue-${e}: 0deg;
  --vb-level-${e}: 0;
}

[data-voice-beam="${e}"][data-active] {
  animation: vb-fade-in-${e} 0.6s ease forwards;
}

[data-voice-beam="${e}"][data-fading] {
  animation: vb-fade-out-${e} 0.5s ease forwards;
}

/* Stroke — the colours painted into the 1px edge ring, masked to the centred ellipse. */
[data-voice-beam="${e}"][data-active]::after,
[data-voice-beam="${e}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${ne(B)};
  padding: ${ne(i)};
  clip-path: inset(0 round ${ne(n)});
  background:
    ${qe},
    ${Ue};
  -webkit-mask:
    ${D(170,64,45)},
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    ${D(170,64,45)},
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  z-index: 2;
  ${V("stroke",N)}
  ${Ee}
}

/* Inner glow — soft light inside the element, faded off at the corners.
   With distortion on, this copy is clipped to ABOVE the band line (the
   polygon the driver writes each frame) and a mirror layer below carries
   the displacement filter, so only the glow under the line warps. */
${pe(`[data-voice-beam="${e}"][data-active]::before,
[data-voice-beam="${e}"][data-fading]::before`,'content: "";',R?`clip-path: var(--vb-clip-above-${e}, inset(0 round ${n}px));`:`clip-path: inset(0 round ${n}px);`,Ee)}
${R?pe(`[data-voice-beam="${e}"][data-active] [data-voice-beam-warp="inner"],
[data-voice-beam="${e}"][data-fading] [data-voice-beam-warp="inner"]`,"display: block;",`clip-path: var(--vb-clip-below-${e}, inset(0 round ${n}px));`,L):""}

/* Bloom — the blurred halo, tallest of the three, above the content. */
[data-voice-beam="${e}"] [data-voice-beam-bloom],
[data-voice-beam="${e}"] [data-voice-beam-warp] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${ne(B)};
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  opacity: 0;
}

[data-voice-beam="${e}"] [data-voice-beam-bloom],
[data-voice-beam="${e}"] [data-voice-beam-warp="bloom"] {
  -webkit-mask: ${D(200,130,35)};
  mask: ${D(200,130,35)};
  background: ${U};
  z-index: 3;
}

[data-voice-beam="${e}"][data-active] [data-voice-beam-bloom],
[data-voice-beam="${e}"][data-fading] [data-voice-beam-bloom] {
  display: block;
  clip-path: ${R?`var(--vb-clip-above-${e}, inset(0 round ${n}px))`:`inset(0 round ${n}px)`};
  ${V("bloom",fe)}
  ${ve}
}
${R?`
[data-voice-beam="${e}"][data-active] [data-voice-beam-warp="bloom"],
[data-voice-beam="${e}"][data-fading] [data-voice-beam-warp="bloom"] {
  display: block;
  clip-path: var(--vb-clip-below-${e}, inset(0 round ${n}px));
  ${V("bloom",fe)}
  ${me}
}

/* Processing drops the distortion: the driver marks the wrapper once the
   warp has faded out, the warp layers leave the paint and the base layers
   give up their split at the band line. */
[data-voice-beam="${e}"][data-voice-warp="off"]::before,
[data-voice-beam="${e}"][data-voice-warp="off"] [data-voice-beam-bloom] {
  clip-path: inset(0 round ${n}px);
}

[data-voice-beam="${e}"][data-voice-warp="off"] [data-voice-beam-warp] {
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
${S>0?(()=>{const q=Math.max(0,Math.min(2,S-1)),Z=Math.min(1,q),be=Math.max(0,q-1),Me=1+.3*q,Fe=G(45*Z+27*be),Pe=G(40+25*Z+15*be),Ae=Math.min(1,.55+.35*Z+.1*be).toFixed(2),De=G(72+14*Z+8*be);return`[data-voice-beam="${e}"] [data-voice-beam-core] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${ne(B)};
  overflow: hidden;
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  /* The blur sits on this wrapper and the band-line clip on the child,
     so the cut edge is blurred too rather than left hard. */
  filter: blur(${ne(lu(8,g))});
  z-index: 4;
}

[data-voice-beam="${e}"] [data-voice-beam-core] > div {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse calc(${G(120*T*Me*P)}px * var(--vb-w-${e}) * ${ee}) calc((${G(70*y*Me*P)}px * var(--vb-h-${e}) + var(--vb-bh-${e})) * ${ee}) at ${we} calc(100% + var(--vb-cy-${e}) * ${ee}), white 0%, white ${Fe}%, rgba(255, 255, 255, ${Ae}) ${Pe}%, transparent ${De}%);
  clip-path: var(--vb-clip-below-${e}, none);
}

[data-voice-beam="${e}"][data-active] [data-voice-beam-core],
[data-voice-beam="${e}"][data-fading] [data-voice-beam-core] {
  display: block;
  opacity: calc(var(--vb-opacity-${e}, 1) * min(1, var(--vb-glow-${e}) * ${Math.min(1,S).toFixed(2)} * ${(1.6+1.4*q).toFixed(2)}) * var(--voice-core-light-opacity, 1));
}
`})():""}
/* Band — the canvas the driver draws the bend's contour on: an organic
   bell with chromatic fringes. Fades with the root, follows the strength
   and turns with the hue drift like the other layers. */
[data-voice-beam="${e}"] [data-voice-beam-band],
[data-voice-beam="${e}"] [data-voice-beam-band-halo] {
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

[data-voice-beam="${e}"][data-active] [data-voice-beam-band],
[data-voice-beam="${e}"][data-fading] [data-voice-beam-band],
[data-voice-beam="${e}"][data-active] [data-voice-beam-band-halo],
[data-voice-beam="${e}"][data-fading] [data-voice-beam-band-halo] {
  display: block;
  opacity: calc(var(--vb-opacity-${e}, 1) * var(--voice-band-opacity, 1) * var(--voice-strength, 1));
  /* The blur vars are 0 where the canvas blurs its own strokes; where the
     2D context has no filter (WebKit) the driver sets them and the layers
     are blurred here instead — the ridge on the band canvas, its wider
     halo on the canvas beneath. */
  filter: blur(var(--vb-band-blur-${e}, 0px)) ${de} brightness(${j}) saturate(${ue});
}

[data-voice-beam="${e}"][data-active] [data-voice-beam-band-halo],
[data-voice-beam="${e}"][data-fading] [data-voice-beam-band-halo] {
  filter: blur(var(--vb-band-halo-blur-${e}, 0px)) ${de} brightness(${j}) saturate(${ue});
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
[data-voice-beam="${e}"][data-voice-halfres]::before,
[data-voice-beam="${e}"][data-voice-halfres] [data-voice-beam-warp],
[data-voice-beam="${e}"][data-voice-halfres] [data-voice-beam-bloom],
[data-voice-beam="${e}"][data-voice-halfres] [data-voice-beam-core] {
  --vb-z-${e}: 0.5;
  inset: auto;
  left: 0;
  top: 0;
  width: 50%;
  height: 50%;
  transform: translateZ(0) scale(2);
  transform-origin: 0 0;
}
${R?`[data-voice-beam="${e}"][data-voice-halfres][data-active]::before,
[data-voice-beam="${e}"][data-voice-halfres][data-fading]::before,
[data-voice-beam="${e}"][data-voice-halfres][data-active] [data-voice-beam-bloom],
[data-voice-beam="${e}"][data-voice-halfres][data-fading] [data-voice-beam-bloom] {
  clip-path: var(--vb-clip-above-z-${e}, inset(0 round ${ne(n)}));
}
[data-voice-beam="${e}"][data-voice-halfres][data-active] [data-voice-beam-warp],
[data-voice-beam="${e}"][data-voice-halfres][data-fading] [data-voice-beam-warp] {
  clip-path: var(--vb-clip-below-z-${e}, inset(0 round ${ne(n)}));
}
/* Processing (warp off): the mirrors are gone, so the base layers paint
   the whole box again — this must outweigh the split above. */
[data-voice-beam="${e}"][data-voice-halfres][data-voice-warp="off"]::before,
[data-voice-beam="${e}"][data-voice-halfres][data-voice-warp="off"] [data-voice-beam-bloom] {
  clip-path: inset(0 round ${ne(n)});
}`:`[data-voice-beam="${e}"][data-voice-halfres][data-active]::before,
[data-voice-beam="${e}"][data-voice-halfres][data-fading]::before,
[data-voice-beam="${e}"][data-voice-halfres][data-active] [data-voice-beam-bloom],
[data-voice-beam="${e}"][data-voice-halfres][data-fading] [data-voice-beam-bloom] {
  clip-path: inset(0 round ${ne(n)});
}`}
[data-voice-beam="${e}"][data-voice-halfres] [data-voice-beam-core] > div {
  clip-path: var(--vb-clip-below-z-${e}, none);
}
@keyframes vb-fade-in-${e} {
  to { --vb-opacity-${e}: 1; }
}

@keyframes vb-fade-out-${e} {
  from { --vb-opacity-${e}: 1; }
  to { --vb-opacity-${e}: 0; }
}

[data-voice-beam="${e}"][data-paused],
[data-voice-beam="${e}"][data-paused]::after,
[data-voice-beam="${e}"][data-paused]::before,
[data-voice-beam="${e}"][data-paused] [data-voice-beam-bloom] {
  animation-play-state: paused !important;
}
`}let qs=null;function Z3(){if(typeof window>"u")return null;const t=window;return t.AudioContext??t.webkitAudioContext??null}function J3(){const t=Z3();return t?(qs||(qs=new t),qs.state==="suspended"&&qs.resume().catch(()=>{}),qs):null}const uu=new WeakMap;function Q3(t){const e=J3();if(!e||t.getAudioTracks().length===0)return null;let n=uu.get(t);n||(n={node:e.createMediaStreamSource(t),refs:0},uu.set(t,n)),n.refs+=1;const i=e.createAnalyser();i.fftSize=1024,i.smoothingTimeConstant=.5,n.node.connect(i);let a=!1;return{analyser:i,release:()=>{if(!a){a=!0;try{n.node.disconnect(i)}catch{}if(n.refs-=1,n.refs<=0){try{n.node.disconnect()}catch{}uu.delete(t)}}}}}const Jg={gather:0,offset:0,stretch:0,heldLevel:0,cornerFollow:0},Tp=new WeakMap;function e5(t){let e=Tp.get(t);return e||(e={level:0,bands:[0,0,0],phase:0,motion:{...Jg},t:0,lastTs:0,warp:1,drift:0,fast:0,fastBands:[0,0,0]},Tp.set(t,e)),e}const w0=new Set;new Float32Array(Pr.length);new Float32Array(Pr.length);let Ms=null,Vh=0;const t5=1e3/60-2,n5=22,i5=500,a5=4e3;let Qc=0,hu=!1,dc=!1,cs=0,Cp=0;const Qg=Math.PI*2,r5=5,o5=1.7,s5=[[80,300],[300,2e3],[2e3,6e3]];function us(t){return t<0?0:t>1?1:t}function l5(t,e){const n=e/2;return((t+n)%e+e)%e-n}function c5(t,e){const n=t/(e/2+4);return Math.max(0,1-n*n)}function Rp(t,e){if(t<=e)return 0;const n=(t-e)/Math.max(.001,1-e);return us((1-Math.exp(-3*n))/(1-Math.exp(-3)))}function js(t,e,n,i,a){const r=e>t?i:a,o=1-Math.exp(-n/Math.max(.001,r));return t+(e-t)*o}const u5=2,h5=.06,f5=.35,d5=.03,Pp=.03,p5=!(typeof navigator<"u"&&/AppleWebKit/.test(navigator.userAgent)&&!/Chrome\/|Chromium\/|Edg\/|OPR\//.test(navigator.userAgent)),Dp=.05,m5=6,g5=12,x5=.1,Ip=.1,b5=170,v5=64,Lp=56;function M5(t,e,n,i){const a=t<0?1-i:1+i,r=Math.max(.05,n*a),o=Math.exp(-Math.pow(Math.abs(t)/r,e)),s=Math.exp(-Math.pow(1/r,e));return Math.max(0,(o-s)/(1-s))}function _5(t,e,n,i,a){if(n<=0||e<=0)return 0;const r=e*Math.max(0,Math.min(.98,i));if(t<=r)return 0;const o=Math.min(1,(t-r)/Math.max(1,e-r));return n*Math.pow(o,Math.max(.5,a))}function ex(t,e,n){return Math.max(0,Math.min(t,e/2,n/2))}function Xh(t,e,n,i=0){if(n<=0)return 0;const a=Math.min(t,e-t)-i;if(a>=n)return 0;if(a<=0)return n;const r=n-a;return n-Math.sqrt(Math.max(0,n*n-r*r))}function y5(t,e,n,i){const a=n/2+e.cx*e.w,r=b5*t.rangeWidth*e.w*e.mw,o=i*.82*Math.min(1,t.scale),s=Math.min(o,(v5*t.rangeHeight*e.h+e.lift)*t.bandPosition),l=i-t.bandOffset,c=Math.min(1,e.corner*4),f=t.bandTail*(1-c*c*(3-2*c)),h=f>.001,u=h?t.bandTailOverflow:0,d=h?-u:a-r,g=h?n+u:a+r,x=[];for(let m=0;m<=Lp;m++){const p=d+(g-d)*m/Lp,b=Math.max(-1,Math.min(1,(p-a)/Math.max(1,r))),_=(p<a?a:n-a)+u,E=M5(b,t.bandCurve,t.bandSpread,t.bandSkew)+_5(Math.abs(p-a),_,f,t.bandTailPosition,t.bandTailCurve),M=e.corner>0?Xh(p,n,ex(t.radius,n,i))*e.corner:0;x.push([p,l-s*E-M])}return x}function w5(t,e,n,i,a){for(const[r,o]of[["",1],["-z",.5]]){const s=h=>(h*o).toFixed(1)+"px",l=n.map(([h,u])=>`${s(h)} ${s(u)}`),c=`polygon(0 ${s(a)}, ${l.join(", ")}, ${s(i)} ${s(a)})`,f=`polygon(0 0, ${s(i)} 0, ${s(i)} ${s(a)}, ${l.slice().reverse().join(", ")}, 0 ${s(a)})`;t.style.setProperty(`--vb-clip-below${r}-${e}`,c),t.style.setProperty(`--vb-clip-above${r}-${e}`,f)}}function S5(t,e,n){let i=n;for(let s=0;s<e.length;s++)e[s][1]<i&&(i=e[s][1]);const a=Math.max(0,Math.min(.9,Math.floor((i-m5)/n/Dp)*Dp));if(a===t.filterTop)return;t.filterTop=a;const r=1+Math.max(x5,g5/n),o=t.filter;o.setAttribute("x",`${-Ip*100}%`),o.setAttribute("width",`${(1+2*Ip)*100}%`),o.setAttribute("y",`${(a*100).toFixed(0)}%`),o.setAttribute("height",`${((r-a)*100).toFixed(1)}%`)}function E5(t,e,n){const{canvas:i,ctx:a,el:r,config:o}=t;if(!i||!a)return;const s=r.clientWidth,l=r.clientHeight;if(!s||!l)return;const c=Math.min(u5,typeof window<"u"&&window.devicePixelRatio||1),f=Math.round(s*c),h=Math.round(l*c);(i.width!==f||i.height!==h)&&(i.width=f,i.height=h),a.setTransform(c,0,0,c,0,0),a.clearRect(0,0,s,l);const u=t.haloCanvas,d=t.haloCtx;u&&d&&((u.width!==f||u.height!==h)&&(u.width=f,u.height=h),d.setTransform(c,0,0,c,0,0),d.clearRect(0,0,s,l));const g=Math.min(1,.6*o.bandStrength*e.strength);if(g<.005||o.bandWidth<=0)return;const x=o.theme==="dark",m=o.bandWidth*(1+.35*e.level),p=o.bandAberration*(.35+.65*e.level),b=(4+12*p)*o.scale,_=4*p*o.scale,E=(F,O)=>{a.beginPath(),a.moveTo(n[0][0]+F,n[0][1]+O);for(let k=1;k<n.length;k++)a.lineTo(n[k][0]+F,n[k][1]+O)},M={r:o.bandColors.above,g:o.bandColors.mid,c:o.bandColors.core,b:o.bandColors.below},v=(x?.42:.4)*g,S=14*m,T=3.5*o.bandWidth/2,y=T*c,w=typeof a.filter=="string",A=w?"0px":`${T.toFixed(2)}px`;t.cssBlur!==A&&(r.style.setProperty(`--vb-band-blur-${o.id}`,A),r.style.setProperty(`--vb-band-halo-blur-${o.id}`,w?"0px":`${(T*3).toFixed(2)}px`),t.cssBlur=A);const C=[[1,.16],[.72,.2],[.46,.26],[.22,.34]],R=[{rgb:M.r,a:1,ox:_,oy:-b},{rgb:M.g,a:.55,ox:_*.35,oy:-b*.35},{rgb:M.b,a:1,ox:-_,oy:b},{rgb:M.c,a:.9,ox:0,oy:0}];a.lineCap="round",a.lineJoin="round",a.globalCompositeOperation="source-over";const P=n[0][0],I=n[n.length-1][0],z=(F,O)=>{const k=a.createLinearGradient(P,0,I,0),G=o.bandTail>0?.015:.18;return k.addColorStop(0,`rgba(${F}, 0)`),k.addColorStop(G,`rgba(${F}, ${O.toFixed(3)})`),k.addColorStop(1-G,`rgba(${F}, ${O.toFixed(3)})`),k.addColorStop(1,`rgba(${F}, 0)`),k},B=!w&&d?d:a;w&&(a.filter=`blur(${(y*3).toFixed(1)}px)`),B.lineCap="round",B.lineJoin="round",B.strokeStyle=z(M.c,v*.3),B.lineWidth=S*2.2,B.beginPath(),B.moveTo(n[0][0],n[0][1]);for(let F=1;F<n.length;F++)B.lineTo(n[F][0],n[F][1]);B.stroke(),w&&(a.filter=`blur(${y.toFixed(1)}px)`);for(const F of R)for(const[O,k]of C)a.strokeStyle=z(F.rgb,v*F.a*k),a.lineWidth=Math.max(.6,S*O),E(F.ox,F.oy),a.stroke();w&&(a.filter="none"),a.globalCompositeOperation="source-over"}function A5(t){return(1-Math.cos(Qg*t))/2}function T5(t,e){const n=t.analyser,i=t.time,a=t.freq;n.getFloatTimeDomainData(i);let r=0;for(let s=0;s<i.length;s++)r+=i[s]*i[s];e.level=Math.sqrt(r/i.length)*r5*t.config.sensitivity,n.getByteFrequencyData(a);const o=n.context.sampleRate/n.fftSize;for(let s=0;s<3;s++){const[l,c]=s5[s],f=Math.max(0,Math.floor(l/o)),h=Math.min(a.length-1,Math.ceil(c/o));let u=0;for(let g=f;g<=h;g++)u+=a[g];const d=h>=f?u/(h-f+1)/255:0;e.bands[s]=d*o5*t.config.sensitivity}}const Yr={level:0,bands:[0,0,0]};function tx(t){Ms=requestAnimationFrame(tx);const e=Qc?t-Qc:0;if(Qc=t,hu){if(dc=!dc,dc)return;t>=Cp&&(hu=!1,cs=0)}else e>n5?cs?t-cs>i5&&(hu=!0,dc=!1,Cp=t+a5):cs=t:cs=0;t-Vh<t5||(Vh=t,w0.forEach(n=>{var i,a;const{el:r,config:o,source:s,s:l}=n,c=o.paused;if(c&&n.paintedConfig===o)return;const f=c?0:l.lastTs?Math.min(.05,(t-l.lastTs)/1e3):1/60;l.lastTs=t,l.t+=f;const h=l.t;if(!c)if(n.analyser)T5(n,Yr);else{const J=s.getLevel?us(s.getLevel()):0;Yr.level=J,Yr.bands[0]=J,Yr.bands[1]=J*(.72+.28*Math.sin(h*9.1)),Yr.bands[2]=J*(.6+.4*Math.sin(h*13.7+2))}const u=Rp(Yr.level,o.threshold);l.level=js(l.level,u,f,o.attack,o.release);for(let J=0;J<3;J++){const he=Rp(Yr.bands[J],o.threshold*.6);l.bands[J]=js(l.bands[J],he,f,o.attack,o.release*1.15),n.surface&&(l.fastBands[J]=js(l.fastBands[J],he,f,o.attack*.6,Pp))}n.surface&&(l.fast=js(l.fast,u,f,o.attack*.6,Pp));const d=X3*o.lobeSpacing;if(!c){const J=(i=s.getMotion)==null?void 0:i.call(s);l.motion=J?{gather:us(J.gather),offset:J.offset??0,stretch:us(J.stretch??0),heldLevel:us(J.heldLevel??0),cornerFollow:us(J.cornerFollow??0)}:Jg}const g=l.motion,x=g.gather,m=r.clientWidth,p=r.clientHeight,b=o.reducedMotion?0:g.offset*d/2,_=1-x*.6,E=1-x*.45,M=1+x*.3*g.stretch,v=o.reducedMotion?.5:.5+.5*Math.sin(Qg*h/o.breatheDuration),S=l.level+(1-l.level)*o.idle*v,T=Math.max(0,Math.min(1,(x-.25)/.75)),y=T*T*(3-2*T),w=Math.max(S,g.heldLevel*y),A=.15+.85*w,C=.5+o.reach*w,R=(.85+o.spread*w)*M;o.flow!==0&&!o.reducedMotion&&(l.phase=((l.phase+o.flow*w*f)%d+d)%d,l.drift+=o.flow*w*f),r.style.setProperty(`--vb-level-${o.id}`,l.level.toFixed(3)),r.style.setProperty(`--vb-cx-${o.id}`,`${b.toFixed(1)}px`),r.style.setProperty(`--vb-mw-${o.id}`,E.toFixed(3));const P=o.bend*w;r.style.setProperty(`--vb-bh-${o.id}`,`${Math.max(0,P).toFixed(1)}px`);const I=o.bend>0?Math.min(1,P/o.bend):0;r.style.setProperty(`--vb-bendA-${o.id}`,I.toFixed(3));const z={cx:b,w:R,h:C,mw:E,lift:P,strength:I,level:l.level,corner:x},B=m/2+b*R,F=30*o.scale*R,O=ex(o.radius,m,p),k=x*g.cornerFollow;r.style.setProperty(`--vb-cy-${o.id}`,`${(-Xh(B,m,O,F*1.4)*k).toFixed(1)}px`),l.warp=js(l.warp,x>.02?0:1,f,f5,h5);const G=l.warp,ee=n.displace!=null&&G<d5;if(ee!==n.warpOff&&(n.warpOff=ee,ee?r.setAttribute("data-voice-warp","off"):r.removeAttribute("data-voice-warp")),m&&p&&(n.ctx||n.displace)){const J=y5(o,z,m,p);(n.displace&&!ee||o.coreLight>0)&&w5(r,o.id,J,m,p),n.filter&&!ee&&p5&&S5(n,J,p),n.ctx&&E5(n,z,J)}if(n.displace&&!ee){const J=o.reducedMotion?0:o.distortion*120*o.scale*(.15+.85*w)*G;n.displace.scale.baseVal=J,n.noiseShift&&(n.noiseShift.dx.baseVal=8*o.scale*Math.sin(h*.9),n.noiseShift.dy.baseVal=4*o.scale*Math.sin(h*.6+1.3))}r.style.setProperty(`--vb-glow-${o.id}`,A.toFixed(3)),r.style.setProperty(`--vb-h-${o.id}`,C.toFixed(3)),r.style.setProperty(`--vb-w-${o.id}`,R.toFixed(3));for(let J=0;J<Pr.length;J++){const he=Pr[J],H=l5(he.x*o.lobeSpacing+l.phase,d),N=o.bands?.6+.7*l.bands[he.band]:1;r.style.setProperty(`--vb-x${J}-${o.id}`,`${(H*_).toFixed(1)}px`),r.style.setProperty(`--vb-l${J}-${o.id}`,(N*c5(H,d)).toFixed(3));const W=m/2+(b+H*_)*R;r.style.setProperty(`--vb-y${J}-${o.id}`,`${(-Xh(W,m,O,F)*k).toFixed(1)}px`)}const ne=o.staticColors||o.reducedMotion||o.hueRange===0?0:-o.hueRange+2*o.hueRange*A5(h/o.hueDuration);r.style.setProperty(`--vb-hue-${o.id}`,`${ne.toFixed(2)}deg`),(a=n.onLevel)==null||a.call(n,l.level),n.paintedConfig=o}))}function C5(){Ms==null&&(Vh=0,Qc=0,cs=0,Ms=requestAnimationFrame(tx))}function R5(){w0.size===0&&Ms!=null&&(cancelAnimationFrame(Ms),Ms=null)}function P5(t,e,n,i){const a={el:t,config:e,source:n,onLevel:i,analyser:null,releaseAnalyser:null,time:null,freq:null,canvas:null,ctx:null,haloCanvas:null,haloCtx:null,displace:null,noiseShift:null,filter:null,filterTop:-1,s:e5(t),paintedConfig:null,cssBlur:null,warpOff:t.hasAttribute("data-voice-warp"),surface:null};e.distortion>0&&(a.displace=t.querySelector(":scope > svg feDisplacementMap"),a.noiseShift=t.querySelector(":scope > svg feOffset"),a.filter=t.querySelector(":scope > svg filter"));const r=t.querySelector(":scope > [data-voice-beam-band]");if(r){a.canvas=r,a.ctx=r.getContext("2d");const o=t.querySelector(":scope > [data-voice-beam-band-halo]");o&&(a.haloCanvas=o,a.haloCtx=o.getContext("2d"))}if(a.s.lastTs=0,n.stream){const o=Q3(n.stream);o&&(a.analyser=o.analyser,a.releaseAnalyser=o.release,a.time=new Float32Array(o.analyser.fftSize),a.freq=new Uint8Array(o.analyser.frequencyBinCount))}return w0.add(a),C5(),()=>{var o;w0.delete(a),(o=a.releaseAnalyser)==null||o.call(a),R5()}}const D5={scale:1,glowSize:1,strokeOpacity:1,innerOpacity:1,bloomOpacity:1,idle:.18,reach:1.2,spread:1.05,flow:48,bend:60,bandStrength:1.55,bandWidth:2.15,bandPosition:.35,bandCurve:1.75,bandSpread:.87,bandSkew:.12,bandOffset:-27,bandTail:.59,bandTailPosition:.67,bandTailCurve:2.4,bandTailOverflow:15,bandAberration:.89,distortion:.62,distortionDetail:2.3,glowWidth:.65,glowHeight:1.25,lobeSpacing:.85,rangeWidth:.75,rangeHeight:1,softness:1.07,coreSize:1,coreLight:0,coreLightWidth:1,coreLightHeight:1,strokeScale:1,innerScale:1,innerHeight:1,bloomScale:1,bloomHeight:1},I5={default:{},pill:{scale:.45,glowSize:.95,strokeOpacity:1.2,innerOpacity:.85,reach:1.35,spread:1.1,flow:0,bend:23,bandStrength:1.55,bandWidth:1.85,bandCurve:1.95,bandSpread:.38,bandOffset:-16,bandTail:0,distortion:.45,distortionDetail:3,glowWidth:.65,glowHeight:.95,lobeSpacing:.45,rangeWidth:.8,rangeHeight:.7,softness:.88,coreSize:.25,strokeScale:1.25,innerScale:.95,bloomScale:1.05,bloomHeight:2.25},mobile:{scale:1.25,spread:.45,reach:3,flow:60,bend:70,bandWidth:2.4,bandCurve:1.55,bandSpread:.9,bandOffset:-50,bandTail:.62,bandTailPosition:.42,bandTailCurve:2.7,bandTailOverflow:22,bandStrength:1.8,distortionDetail:2,glowWidth:1.15,glowHeight:2.1,lobeSpacing:1.35,rangeWidth:1.25,rangeHeight:1.2,softness:1.1}},L5={default:{brightness:1.15},pill:{brightness:1.35,saturation:1.5},mobile:{strength:1,brightness:1.2,saturation:1.5}},F5={default:{},pill:{},mobile:{strength:1}};function z5(t="default",e="dark"){return(e==="light"?F5[t]:void 0)??L5[t]}const U5={default:{bandStrength:1.7},pill:{bandStrength:2},mobile:{bandStrength:1.7}};function N5(t="default",e="dark"){const n=I5[t],i={};return e==="light"&&(n.reach===void 0&&(i.reach=1.8),n.spread===void 0&&(i.spread=.8),n.coreLight===void 0&&(i.coreLight=1.8)),{...D5,...i,...n,...e==="light"?U5[t]:void 0}}const pc={dark:{core:"255, 255, 255",above:"255, 70, 80",mid:"90, 255, 150",below:"80, 140, 255"},light:{core:"197, 139, 255",above:"255, 122, 182",mid:"126, 196, 255",below:"45, 255, 171"}},O5=1,$5=16,k5=6e4,Fp=typeof navigator<"u"&&/AppleWebKit/.test(navigator.userAgent)&&!/Chrome\/|Chromium\/|Edg\/|OPR\//.test(navigator.userAgent),B5=(()=>{if(typeof document>"u")return!0;const t=document.createElement("canvas").getContext("2d");return!!t&&typeof t.filter=="string"})();function H5(){const[t,e]=ie.useState(()=>typeof window>"u"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return ie.useEffect(()=>{if(typeof window>"u")return;const n=window.matchMedia("(prefers-color-scheme: dark)"),i=a=>e(a.matches?"dark":"light");return n.addEventListener("change",i),()=>n.removeEventListener("change",i)},[]),t}function W5(){const[t,e]=ie.useState(()=>typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches);return ie.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const n=window.matchMedia("(prefers-reduced-motion: reduce)"),i=a=>e(a.matches);return n.addEventListener("change",i),()=>n.removeEventListener("change",i)},[]),t}function G5(t,e){return t==="auto"?e:t}const V5=ie.forwardRef(function({children:t,type:e="default",look:n="glow",dotSize:i=1,dotGap:a=1,dotShape:r="round",lineWidth:o=1,lineGap:s=1,linePattern:l="rows",seeThrough:c=!1,texture:f=.6,gravity:h=1,surfaceHeight:u=1,surfaceCurve:d=1,surfaceTail:g=0,surfaceTailPosition:x=.6,surfaceTailCurve:m=2.4,surfaceFade:p=.2,scale:b,stream:_=null,level:E=0,sensitivity:M=3.1,threshold:v=.015,attack:S=.325,release:T=.86,idle:y,breatheDuration:w=5.2,reach:A,spread:C,bands:R=!0,flow:P,motion:I=null,colorVariant:z="colorful",colors:B,bandColors:F,theme:O="dark",staticColors:k=!1,hueRange:G,hueDuration:ee,active:ne=!0,paused:J=!1,borderRadius:he,brightness:H,saturation:N,glowSize:W,strokeOpacity:fe,innerOpacity:j,bloomOpacity:ue,bend:de,bandStrength:ae,bandWidth:Ee,bandPosition:L,bandCurve:ve,bandSpread:me,bandSkew:we,bandOffset:te,bandTail:qe,bandTailPosition:Ue,bandTailCurve:_e,bandTailOverflow:U,bandAberration:D,distortion:V,distortionDetail:pe,glowWidth:q,glowHeight:Z,lobeSpacing:be,rangeWidth:Me,rangeHeight:Fe,softness:Pe,coreSize:Ae,coreLight:De,coreLightWidth:Qe,coreLightHeight:ot,strokeScale:ke,innerScale:ct,innerHeight:X,bloomScale:He,bloomHeight:Se,strength:Ie,className:Y,style:oe,css:Ce,onLevel:ce,onActivate:Te,onDeactivate:Le,onAnimationEnd:$e,...We},et){const Ct=ie.useId().replace(/:/g,"-"),yt=H5(),Ge=G5(O,yt),on=B?B.join("|"):"",Ot=F?[F.core,F.above,F.mid,F.below].join("|"):"",je=N5(e,Ge),Pt=Math.max(.05,b??je.scale),Ht=W??je.glowSize,Zt=fe??je.strokeOpacity,gn=j??je.innerOpacity,un=ue??je.bloomOpacity,It=y??je.idle,wt=A??je.reach,Rt=C??je.spread,Qt=(P??je.flow)*Pt,ni=(de??je.bend)*Pt,_i=ae??je.bandStrength,$=(Ee??je.bandWidth)*Pt,se=L??je.bandPosition,ge=ve??je.bandCurve,re=me??je.bandSpread,le=we??je.bandSkew,Be=(te??je.bandOffset)*Pt,Ve=qe??je.bandTail,at=Ue??je.bandTailPosition,nt=_e??je.bandTailCurve,ft=(U??je.bandTailOverflow)*Pt,vt=D??je.bandAberration,mt=V??je.distortion,$t=(pe??je.distortionDetail)/Pt,Xe=(q??je.glowWidth)*Pt,lt=(Z??je.glowHeight)*Pt,dt=(be??je.lobeSpacing)*Pt,At=(Me??je.rangeWidth)*Pt,rt=(Fe??je.rangeHeight)*Pt,Vt=Pe??je.softness,St=(Ae??je.coreSize)*Pt,sn=Math.max(0,Math.min(3,De??je.coreLight)),hn=Qe??je.coreLightWidth,xn=ot??je.coreLightHeight,Sn=ke??je.strokeScale,nn=ct??je.innerScale,_n=X??je.innerHeight,vn=He??je.bloomScale,fn=Se??je.bloomHeight,yn=W5(),Gi=ie.useRef(null),[ei,oi]=ie.useState(ne),[yi,Fo]=ie.useState(!1),[si,wi]=ie.useState(!0),[Ur,Hs]=ie.useState(null),[Ea,sa]=ie.useState(0);ie.useEffect(()=>{if(!Fp)return;const xe=Gi.current;if(!xe)return;const Re=()=>sa(xe.clientWidth*xe.clientHeight);if(Re(),typeof ResizeObserver>"u")return;const Ye=new ResizeObserver(Re);return Ye.observe(xe),()=>Ye.disconnect()},[]);const er="glow",Ws=!1,la=Fp&&Ea>k5?0:mt;ie.useEffect(()=>{if(he!=null)return;const xe=Gi.current;if(!xe)return;const Re=()=>{const Je=xe.firstElementChild;if(!Je)return;const Ke=getComputedStyle(Je),Et=parseFloat(Ke.borderTopLeftRadius);!isNaN(Et)&&Et>0&&Hs(Et)};Re();const Ye=new MutationObserver(Re);return Ye.observe(xe,{childList:!0,subtree:!1}),()=>Ye.disconnect()},[he,t]),ie.useEffect(()=>{ne&&!ei&&!yi?oi(!0):!ne&&ei&&!yi&&Fo(!0)},[ne,ei,yi]),ie.useEffect(()=>{const xe=Gi.current;if(!xe||typeof IntersectionObserver>"u")return;const Re=new IntersectionObserver(Ye=>{for(const Je of Ye)wi(Je.isIntersecting)},{rootMargin:"256px"});return Re.observe(xe),()=>Re.disconnect()},[]);const Gs=ie.useCallback(xe=>{const Re=xe.animationName;Re.includes("fade-out")?(oi(!1),Fo(!1),Le?.()):Re.includes("fade-in")&&Te?.(),$e?.(xe)},[Te,Le,$e]),li=G3[Ge],Nr=he??Ur??$5,zo=z5(e,Ge),Zl=Ie??zo.strength??li.strength??1,Or=G??li.hueRange??24,Jl=ee??li.hueDuration??12,Uo=H??zo.brightness??li.brightness,Ql=N??zo.saturation??li.saturation,tr=ie.useMemo(()=>K3({id:Ct,borderRadius:Nr,borderWidth:O5,strokeOpacity:li.strokeOpacity*Zt,innerOpacity:li.innerOpacity*gn,bloomOpacity:li.bloomOpacity*un,innerShadow:li.innerShadow,colorVariant:z,colors:B,brightness:Uo,saturation:Ql,theme:Ge,hueBase:li.hueBase??0,glowSize:Ht*Pt,glowWidth:Xe,glowHeight:lt,strokeScale:Sn,innerScale:nn,innerHeight:_n,bloomScale:vn,bloomHeight:fn,coreSize:St,coreLight:sn,coreLightWidth:hn,coreLightHeight:xn,rangeWidth:At,rangeHeight:rt,softness:Vt,distortion:la>0,scale:Pt}),[Ct,Nr,li,z,on,Uo,Ql,Ge,je,Ht,Zt,gn,un,Pt,Xe,lt,Sn,nn,_n,vn,fn,St,sn,hn,xn,At,rt,Vt,la>0,er]),$r=ie.useMemo(()=>({id:Ct,sensitivity:Math.max(0,M),threshold:Math.max(0,Math.min(.95,v)),attack:Math.max(0,S),release:Math.max(0,T),idle:Math.max(0,Math.min(1,It)),breatheDuration:Math.max(.2,w),reach:Math.max(0,wt),spread:Math.max(0,Rt),bands:R,flow:Qt,lobeSpacing:Math.max(.1,dt),bend:Math.max(0,ni),bandStrength:Math.max(0,_i),bandWidth:Math.max(0,$),bandPosition:Math.max(0,se),bandCurve:Math.max(.3,ge),bandSpread:Math.max(.05,re),bandSkew:Math.max(-.9,Math.min(.9,le)),bandOffset:Be,bandTail:Math.max(0,Math.min(1.5,Ve)),bandTailPosition:Math.max(0,Math.min(.98,at)),bandTailCurve:Math.max(.5,nt),bandTailOverflow:Math.max(0,ft),bandAberration:Math.max(0,Math.min(1,vt)),rangeWidth:At,rangeHeight:rt,theme:Ge,bandColors:{core:F?.core&&fc(F.core)||pc[Ge].core,above:F?.above&&fc(F.above)||pc[Ge].above,mid:F?.mid&&fc(F.mid)||pc[Ge].mid,below:F?.below&&fc(F.below)||pc[Ge].below},distortion:Math.max(0,Math.min(1,la)),coreLight:sn,scale:Pt,radius:Nr,hueRange:Math.max(0,Or),hueDuration:Math.max(.5,Jl),staticColors:z==="mono"?!0:k,reducedMotion:yn,paused:J,look:er,dotSize:Math.max(.1,i),dotGap:Math.max(.3,a),dotShape:r==="square"?"square":"round",lineWidth:Math.max(.05,o),lineGap:Math.max(.3,s),linePattern:l==="columns"||l==="grid"?l:"rows",seeThrough:c,texture:Math.max(0,Math.min(1,f)),gravity:Math.max(.05,h),surfaceHeight:Math.max(.1,u),surfaceCurve:Math.max(-3,Math.min(5,d)),surfaceTail:Math.max(-2,Math.min(3,g)),surfaceTailPosition:Math.max(0,Math.min(.98,x)),surfaceTailCurve:Math.max(.5,m),surfaceFade:Math.max(0,Math.min(1,p)),layers:{glowWidth:Xe,glowHeight:lt,innerScale:nn,innerHeight:_n,bloomScale:vn,bloomHeight:fn,strokeScale:Sn,softness:Vt,coreSize:St,innerOpacity:gn,bloomOpacity:un,strokeOpacity:Zt,brightness:Uo}}),[Ct,M,v,S,T,It,w,wt,Rt,R,Qt,dt,ni,_i,$,se,ge,re,le,Be,Ve,at,nt,ft,vt,At,rt,Ge,Ot,la,sn,Pt,Nr,Or,Jl,k,z,yn,J,er,i,a,r,o,s,l,c,f,h,u,d,g,x,m,p,Xe,lt,nn,_n,vn,fn,Sn,Vt,St,gn,un,Zt,Uo]),ec=ie.useRef(E);ec.current=E;const No=ie.useRef(ce);No.current=ce;const Q=ie.useRef(I);Q.current=I,ie.useEffect(()=>{if(!(ei||yi)||!si)return;const xe=Gi.current;return xe?P5(xe,$r,{stream:_,getLevel:()=>{const Re=ec.current;return typeof Re=="function"?Re():Re},getMotion:()=>{const Re=Q.current;return typeof Re=="function"?Re():Re}},Re=>{var Ye;return(Ye=No.current)==null?void 0:Ye.call(No,Re)}):void 0},[$r,_,ei,yi,si]);const ze=ie.useCallback(xe=>{Gi.current=xe,typeof et=="function"?et(xe):et&&(et.current=xe)},[et]),Ne={...oe??{},"--voice-strength":Math.max(0,Math.min(1,Zl))};return K.jsxs(K.Fragment,{children:[K.jsx("style",{children:Ce?`${tr}
${Ce.split("{id}").join(Ct)}`:tr}),K.jsxs("div",{...We,ref:ze,"data-voice-beam":Ct,"data-voice-type":e,"data-voice-look":er,"data-voice-halfres":"","data-active":ei&&!yi?"":void 0,"data-fading":yi?"":void 0,"data-paused":ei&&!yi&&(!si||J)?"":void 0,"data-listening":_?"":void 0,className:Y,style:Ne,onAnimationEnd:Gs,children:[t,Ws,K.jsx("div",{"data-voice-beam-bloom":!0}),la>0&&K.jsxs(K.Fragment,{children:[K.jsx("div",{"data-voice-beam-warp":"inner"}),K.jsx("div",{"data-voice-beam-warp":"bloom"})]}),!B5&&K.jsx("canvas",{"data-voice-beam-band-halo":!0,"aria-hidden":"true"}),K.jsx("canvas",{"data-voice-beam-band":!0,"aria-hidden":"true"}),sn>0&&K.jsx("div",{"data-voice-beam-core":!0,children:K.jsx("div",{})}),la>0&&K.jsx("svg",{"aria-hidden":"true",width:"0",height:"0",style:{position:"absolute",pointerEvents:"none"},children:K.jsxs("filter",{id:`vb-distort-${Ct}`,x:"-20%",y:"-20%",width:"140%",height:"140%",colorInterpolationFilters:"sRGB",children:[K.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:`${(.012*$t).toFixed(4)} ${(.05*$t).toFixed(4)}`,numOctaves:2,seed:7,result:"noise"}),K.jsx("feOffset",{in:"noise",dx:"0",dy:"0",result:"moved"}),K.jsx("feColorMatrix",{in:"moved",type:"matrix",values:"1 0 0 0 0  0 0 0 0 0.5  0 0 0 0 0  0 0 0 0 1",result:"map"}),K.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"map",scale:0,xChannelSelector:"R",yChannelSelector:"G"})]})})]})]})}),S0={clover:{label:"Clover",color:"#41C4FF",face:"eyes",faceX:50,faceY:50,faceScale:1,brightness:1.2,saturation:1.59},flower:{label:"Flower",color:"#2FCB7A",face:"eyes",faceX:50,faceY:51,faceScale:.95},triangle:{label:"Triangle",color:"#DC48FF",face:"eyes",faceX:50,faceY:61,faceScale:.9},square:{label:"Square",color:"#35B8FF",face:"eyes",faceX:50,faceY:50,faceScale:1},blob:{label:"Blob",color:"#2FCB7A",face:"eyes",faceX:49.5,faceY:50,faceScale:1},ghost:{label:"Ghost",color:"#F4F2FA",face:"eyes",faceX:50,faceY:48,faceScale:.95},circle:{label:"Circle",color:"#9A62FF",face:"eyes",faceX:50,faceY:50,faceScale:1},drop:{label:"Drop",color:"#1ED3C6",face:"eyes",faceX:50,faceY:62,faceScale:.9},star:{label:"Star",color:"#EFDB8E",face:"eyes",faceX:50,faceY:52,faceScale:.82,brightness:1.1,saturation:1.84},droid:{label:"Droid",color:"#D5DBEA",face:"eyes",faceX:50,faceY:60,faceScale:.95},mech:{label:"Mech",color:"#95A6C4",face:"eyes",faceX:50,faceY:59,faceScale:1},alien:{label:"Alien",color:"#9CD66A",face:"eyes",faceX:50,faceY:45,faceScale:1.05},hexagon:{label:"Hexagon",color:"#EB7575",face:"eyes",faceX:50,faceY:50,faceScale:.95},cat:{label:"Cat",color:"#EAA06F",face:"eyes",faceX:50,faceY:58,faceScale:1,brightness:1.22,saturation:1.88},cloud:{label:"Cloud",color:"#CFD5E4",face:"eyes",faceX:50,faceY:58,faceScale:.95},pill:{label:"Pill",color:"#ACAAF3",face:"eyes",faceX:50,faceY:50,faceScale:.9},pebble:{label:"Pebble",color:"#ABC793",face:"eyes",faceX:50,faceY:50,faceScale:.95},puddle:{label:"Puddle",color:"#EE8BDB",face:"eyes",faceX:50,faceY:50,faceScale:.95}},X5=Object.keys(S0);Object.fromEntries(X5.map(t=>[t,S0[t].color]));const zp={default:"idle",working:"working",sleeping:"sleeping"},Up={clover:"M26.53 22.38A25 25 0 0 1 73.47 22.38A7 7 0 0 0 77.62 26.53A25 25 0 0 1 77.62 73.47A7 7 0 0 0 73.47 77.62A25 25 0 0 1 26.53 77.62A7 7 0 0 0 22.38 73.47A25 25 0 0 1 22.38 26.53A7 7 0 0 0 26.53 22.38Z",flower:"M31.2 19.82A20.5 20.5 0 0 1 68.8 19.82A5 5 0 0 0 72.9 22.8A20.5 20.5 0 0 1 84.51 58.55A5 5 0 0 0 82.95 63.37A20.5 20.5 0 0 1 52.54 85.47A5 5 0 0 0 47.46 85.47A20.5 20.5 0 0 1 17.05 63.37A5 5 0 0 0 15.49 58.55A20.5 20.5 0 0 1 27.1 22.8A5 5 0 0 0 31.2 19.82Z",triangle:"M38.75 27.43A13 13 0 0 1 61.25 27.43L82.7 64.49A13 13 0 0 1 71.45 84L28.55 84A13 13 0 0 1 17.3 64.49L38.75 27.43Z",square:"M93 50C93 53.66 92.96 58.23 92.88 60.97C92.8 63.71 92.67 64.81 92.51 66.44C92.35 68.08 92.15 69.44 91.9 70.77C91.66 72.1 91.37 73.3 91.04 74.44C90.72 75.58 90.35 76.63 89.94 77.63C89.53 78.63 89.07 79.55 88.58 80.43C88.08 81.31 87.54 82.13 86.96 82.9C86.37 83.67 85.75 84.39 85.07 85.07C84.39 85.75 83.67 86.37 82.9 86.96C82.13 87.54 81.31 88.08 80.43 88.58C79.55 89.07 78.63 89.53 77.63 89.94C76.63 90.35 75.58 90.72 74.44 91.04C73.3 91.37 72.1 91.66 70.77 91.9C69.44 92.15 68.08 92.35 66.44 92.51C64.81 92.67 63.71 92.8 60.97 92.88C58.23 92.96 53.66 93 50 93C46.34 93 41.77 92.96 39.03 92.88C36.29 92.8 35.19 92.67 33.56 92.51C31.92 92.35 30.56 92.15 29.23 91.9C27.9 91.66 26.7 91.37 25.56 91.04C24.42 90.72 23.37 90.35 22.37 89.94C21.37 89.53 20.45 89.07 19.57 88.58C18.69 88.08 17.87 87.54 17.1 86.96C16.33 86.37 15.61 85.75 14.93 85.07C14.25 84.39 13.63 83.67 13.04 82.9C12.46 82.13 11.92 81.31 11.42 80.43C10.93 79.55 10.47 78.63 10.06 77.63C9.65 76.63 9.28 75.58 8.96 74.44C8.63 73.3 8.34 72.1 8.1 70.77C7.85 69.44 7.65 68.08 7.49 66.44C7.33 64.81 7.2 63.71 7.12 60.97C7.04 58.23 7 53.66 7 50C7 46.34 7.04 41.77 7.12 39.03C7.2 36.29 7.33 35.19 7.49 33.56C7.65 31.92 7.85 30.56 8.1 29.23C8.34 27.9 8.63 26.7 8.96 25.56C9.28 24.42 9.65 23.37 10.06 22.37C10.47 21.37 10.93 20.45 11.42 19.57C11.92 18.69 12.46 17.87 13.04 17.1C13.63 16.33 14.25 15.61 14.93 14.93C15.61 14.25 16.33 13.63 17.1 13.04C17.87 12.46 18.69 11.92 19.57 11.42C20.45 10.93 21.37 10.47 22.37 10.06C23.37 9.65 24.42 9.28 25.56 8.96C26.7 8.63 27.9 8.34 29.23 8.1C30.56 7.85 31.92 7.65 33.56 7.49C35.19 7.33 36.29 7.2 39.03 7.12C41.77 7.04 46.34 7 50 7C53.66 7 58.23 7.04 60.97 7.12C63.71 7.2 64.81 7.33 66.44 7.49C68.08 7.65 69.44 7.85 70.77 8.1C72.1 8.34 73.3 8.63 74.44 8.96C75.58 9.28 76.63 9.65 77.63 10.06C78.63 10.47 79.55 10.93 80.43 11.42C81.31 11.92 82.13 12.46 82.9 13.04C83.67 13.63 84.39 14.25 85.07 14.93C85.75 15.61 86.37 16.33 86.96 17.1C87.54 17.87 88.08 18.69 88.58 19.57C89.07 20.45 89.53 21.37 89.94 22.37C90.35 23.37 90.72 24.42 91.04 25.56C91.37 26.7 91.66 27.9 91.9 29.23C92.15 30.56 92.35 31.92 92.51 33.56C92.67 35.19 92.8 36.29 92.88 39.03C92.96 41.77 93 46.34 93 50Z",blob:"M93.92 50C94.18 51.9 94.24 53.9 93.99 55.79C93.73 57.68 93.18 59.61 92.39 61.36C91.6 63.1 90.48 64.78 89.27 66.27C88.07 67.76 86.58 69.08 85.14 70.29C83.7 71.49 82.1 72.5 80.62 73.5C79.14 74.49 77.64 75.34 76.24 76.24C74.84 77.15 73.51 78 72.2 78.93C70.88 79.86 69.66 80.83 68.36 81.8C67.06 82.76 65.78 83.82 64.39 84.74C63 85.67 61.55 86.63 60.01 87.35C58.47 88.08 56.82 88.73 55.15 89.1C53.48 89.47 51.71 89.64 50 89.57C48.29 89.5 46.55 89.16 44.91 88.68C43.27 88.21 41.67 87.47 40.16 86.72C38.65 85.96 37.24 85.02 35.86 84.13C34.48 83.24 33.19 82.29 31.89 81.37C30.58 80.46 29.32 79.56 28.03 78.63C26.74 77.71 25.44 76.82 24.16 75.84C22.88 74.86 21.57 73.87 20.36 72.74C19.15 71.62 17.95 70.42 16.91 69.1C15.88 67.79 14.92 66.35 14.15 64.85C13.38 63.35 12.76 61.73 12.29 60.1C11.81 58.48 11.52 56.78 11.29 55.1C11.06 53.41 10.98 51.71 10.91 50C10.83 48.29 10.83 46.59 10.83 44.84C10.84 43.1 10.85 41.34 10.93 39.53C11.02 37.72 11.09 35.86 11.34 33.99C11.59 32.12 11.88 30.16 12.43 28.31C12.99 26.46 13.69 24.56 14.66 22.88C15.64 21.21 16.86 19.58 18.27 18.27C19.69 16.96 21.4 15.84 23.17 15.03C24.93 14.22 26.95 13.71 28.89 13.43C30.83 13.15 32.9 13.21 34.82 13.36C36.74 13.5 38.66 13.92 40.43 14.28C42.2 14.65 43.87 15.16 45.46 15.54C47.06 15.93 48.52 16.31 50 16.58C51.48 16.85 52.87 17.02 54.32 17.17C55.77 17.32 57.22 17.36 58.71 17.49C60.2 17.62 61.74 17.7 63.28 17.95C64.81 18.19 66.39 18.5 67.91 18.98C69.43 19.46 70.95 20.08 72.38 20.83C73.81 21.58 75.19 22.5 76.5 23.5C77.81 24.5 79.03 25.63 80.22 26.81C81.41 27.99 82.54 29.25 83.65 30.57C84.76 31.89 85.85 33.26 86.89 34.72C87.93 36.18 88.98 37.69 89.9 39.31C90.82 40.92 91.73 42.64 92.4 44.42C93.07 46.2 93.66 48.1 93.92 50Z",ghost:"M17 50C17 31.78 31.78 17 50 17C68.22 17 83 31.78 83 50V81.5Q72 93.5 61 81.5Q50 93.5 39 81.5Q28 93.5 17 81.5Z",circle:"M50 8A42 42 0 1 1 50 92A42 42 0 1 1 50 8Z",drop:"M50 8.5C52.2 8.5 53.4 10.3 56.4 15.2C62.9 25.5 84 44.6 84 61.5C84 80.3 68.8 92 50 92C31.2 92 16 80.3 16 61.5C16 44.6 37.1 25.5 43.6 15.2C46.6 10.3 47.8 8.5 50 8.5Z",star:"M45.77 9.7A5 5 0 0 1 54.23 9.7L65.02 26.81A4 4 0 0 0 67.42 28.55L87.02 33.53A5 5 0 0 1 89.63 41.57L76.7 57.12A4 4 0 0 0 75.78 59.94L77.11 80.12A5 5 0 0 1 70.26 85.09L51.48 77.59A4 4 0 0 0 48.52 77.59L29.74 85.09A5 5 0 0 1 22.89 80.12L24.22 59.94A4 4 0 0 0 23.3 57.12L10.37 41.57A5 5 0 0 1 12.98 33.53L32.58 28.55A4 4 0 0 0 34.98 26.81L45.77 9.7Z",droid:"M16 50C16 38.95 24.95 30 36 30H64C75.05 30 84 38.95 84 50V70C84 81.05 75.05 90 64 90H36C24.95 90 16 81.05 16 70ZM4 62A7 7 0 1 1 18 62A7 7 0 1 1 4 62ZM82 62A7 7 0 1 1 96 62A7 7 0 1 1 82 62Z",mech:"M10 48C10 38.06 18.06 30 28 30H72C81.94 30 90 38.06 90 48V70C90 79.94 81.94 88 72 88H28C18.06 88 10 79.94 10 70ZM3 54C3 51.79 4.79 50 7 50H11V72H7C4.79 72 3 70.21 3 68ZM89 50H93C95.21 50 97 51.79 97 54V68C97 70.21 95.21 72 93 72H89Z",alien:"M50 10C70 10 83 27 83 46C83 65 64 92 50 92C36 92 17 65 17 46C17 27 30 10 50 10Z",hexagon:"M91.4 45.5A9 9 0 0 1 91.4 54.5L74.6 83.61A9 9 0 0 1 66.8 88.11L33.2 88.11A9 9 0 0 1 25.4 83.61L8.6 54.5A9 9 0 0 1 8.6 45.5L25.4 16.39A9 9 0 0 1 33.2 11.89L66.8 11.89A9 9 0 0 1 74.6 16.39L91.4 45.5Z",cat:"M50 20A36 36 0 1 1 50 92A36 36 0 1 1 50 20ZM24.72 44.64A4.5 4.5 0 0 1 17.35 40.67L20.21 16.66A4.5 4.5 0 0 1 26.86 13.26L42.3 21.83A4.5 4.5 0 0 1 43.02 29.21L24.72 44.64ZM82.65 40.67A4.5 4.5 0 0 1 75.28 44.64L56.98 29.21A4.5 4.5 0 0 1 57.7 21.83L73.14 13.26A4.5 4.5 0 0 1 79.79 16.66L82.65 40.67Z",cloud:"M19 44A25 25 0 1 1 69 44A25 25 0 1 1 19 44ZM47 50A21 21 0 1 1 89 50A21 21 0 1 1 47 50ZM7 68A17 17 0 1 1 41 68A17 17 0 1 1 7 68ZM32 73A18 18 0 1 1 68 73A18 18 0 1 1 32 73ZM60 70A16 16 0 1 1 92 70A16 16 0 1 1 60 70Z",pill:"M28 28H72C84.15 28 94 37.85 94 50C94 62.15 84.15 72 72 72H28C15.85 72 6 62.15 6 50C6 37.85 15.85 28 28 28Z",pebble:"M94.6 50C94.71 51.92 94.56 53.93 94.17 55.82C93.79 57.7 93.13 59.6 92.28 61.33C91.44 63.06 90.32 64.72 89.1 66.19C87.87 67.67 86.41 69.01 84.92 70.16C83.42 71.31 81.75 72.29 80.11 73.1C78.47 73.92 76.73 74.55 75.06 75.06C73.39 75.58 71.7 75.91 70.1 76.2C68.5 76.48 66.93 76.62 65.45 76.76C63.96 76.9 62.55 76.94 61.2 77.03C59.84 77.11 58.57 77.16 57.31 77.26C56.05 77.36 54.86 77.48 53.64 77.63C52.42 77.79 51.24 77.98 50 78.18C48.76 78.39 47.52 78.64 46.2 78.85C44.89 79.06 43.53 79.3 42.11 79.46C40.69 79.61 39.2 79.75 37.67 79.77C36.14 79.78 34.54 79.74 32.95 79.54C31.35 79.33 29.7 79.03 28.1 78.55C26.49 78.07 24.86 77.45 23.33 76.67C21.8 75.88 20.29 74.94 18.92 73.85C17.54 72.77 16.23 71.51 15.08 70.16C13.94 68.8 12.9 67.29 12.04 65.72C11.17 64.16 10.45 62.46 9.91 60.74C9.36 59.03 8.98 57.22 8.76 55.43C8.55 53.64 8.5 51.8 8.6 50C8.71 48.2 8.98 46.39 9.38 44.65C9.79 42.91 10.35 41.19 11.02 39.56C11.7 37.92 12.52 36.34 13.43 34.85C14.34 33.37 15.39 31.96 16.5 30.66C17.61 29.36 18.84 28.15 20.11 27.07C21.39 25.98 22.76 25 24.15 24.15C25.54 23.3 27.01 22.56 28.48 21.95C29.94 21.33 31.46 20.85 32.95 20.46C34.44 20.08 35.95 19.83 37.43 19.66C38.91 19.48 40.38 19.43 41.81 19.43C43.24 19.43 44.64 19.53 46.01 19.66C47.37 19.78 48.7 19.98 50 20.18C51.3 20.39 52.57 20.63 53.83 20.87C55.1 21.11 56.34 21.37 57.6 21.62C58.87 21.87 60.13 22.12 61.43 22.39C62.74 22.66 64.07 22.93 65.45 23.24C66.83 23.56 68.25 23.88 69.72 24.3C71.19 24.72 72.71 25.17 74.25 25.75C75.78 26.34 77.37 27 78.91 27.81C80.46 28.63 82.04 29.56 83.5 30.66C84.97 31.75 86.43 33 87.7 34.38C88.98 35.77 90.19 37.32 91.17 38.97C92.14 40.62 92.98 42.43 93.56 44.27C94.13 46.1 94.5 48.08 94.6 50Z",puddle:"M85.34 50C85.65 51.54 85.9 53.13 86.01 54.74C86.11 56.35 86.11 58 85.95 59.63C85.8 61.26 85.51 62.93 85.07 64.52C84.62 66.12 84.03 67.72 83.3 69.23C82.58 70.74 81.7 72.21 80.72 73.57C79.74 74.94 78.62 76.23 77.43 77.43C76.24 78.62 74.93 79.72 73.58 80.73C72.23 81.74 70.79 82.65 69.33 83.48C67.86 84.31 66.34 85.04 64.79 85.71C63.24 86.37 61.65 86.95 60.04 87.46C58.42 87.96 56.77 88.4 55.1 88.75C53.43 89.09 51.72 89.37 50 89.54C48.28 89.71 46.52 89.81 44.76 89.76C43.01 89.72 41.22 89.58 39.47 89.29C37.72 89 35.95 88.58 34.26 88C32.57 87.42 30.89 86.69 29.33 85.8C27.77 84.92 26.26 83.87 24.91 82.7C23.56 81.53 22.3 80.19 21.23 78.77C20.16 77.35 19.22 75.79 18.47 74.2C17.71 72.61 17.13 70.91 16.7 69.23C16.26 67.55 16.02 65.81 15.88 64.13C15.75 62.45 15.78 60.76 15.88 59.14C15.97 57.52 16.21 55.94 16.45 54.42C16.7 52.89 17.03 51.43 17.34 50C17.65 48.57 18 47.2 18.32 45.83C18.63 44.46 18.94 43.13 19.24 41.76C19.53 40.39 19.79 39.03 20.08 37.61C20.36 36.18 20.62 34.74 20.95 33.23C21.28 31.72 21.61 30.16 22.07 28.57C22.52 26.98 23.02 25.32 23.69 23.69C24.35 22.06 25.11 20.38 26.05 18.79C26.99 17.21 28.08 15.62 29.33 14.2C30.58 12.78 32 11.41 33.54 10.26C35.08 9.12 36.8 8.11 38.57 7.35C40.34 6.6 42.27 6.04 44.17 5.73C46.08 5.43 48.08 5.37 50 5.54C51.92 5.71 53.87 6.15 55.69 6.75C57.52 7.36 59.3 8.22 60.94 9.19C62.57 10.15 64.11 11.33 65.51 12.56C66.91 13.78 68.17 15.15 69.33 16.52C70.48 17.89 71.5 19.34 72.44 20.76C73.38 22.18 74.19 23.62 74.97 25.03C75.75 26.43 76.44 27.83 77.12 29.19C77.8 30.56 78.42 31.89 79.05 33.23C79.67 34.57 80.28 35.87 80.87 37.21C81.46 38.55 82.05 39.88 82.6 41.27C83.14 42.65 83.68 44.05 84.14 45.51C84.6 46.96 85.03 48.46 85.34 50Z"},Np={droid:"M47.5 14H52.5V32H47.5ZM43 11A7 7 0 1 1 57 11A7 7 0 1 1 43 11Z",mech:"M19.5 32L24.5 32L17 13L12 13ZM75.5 32L80.5 32L88 13L83 13ZM10 11.5A4.5 4.5 0 1 1 19 11.5A4.5 4.5 0 1 1 10 11.5ZM81 11.5A4.5 4.5 0 1 1 90 11.5A4.5 4.5 0 1 1 81 11.5Z"};function Hl(t){const e=t.trim(),n=e.match(/^hsla?\(\s*([\d.]+)(?:deg)?[,\s]+([\d.]+)%[,\s]+([\d.]+)%/i);if(n)return J5([Number(n[1])/360,Number(n[2])/100,Number(n[3])/100]);const i=e.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(i){let r=i[1];r.length===3&&(r=r.split("").map(s=>s+s).join(""));const o=parseInt(r,16);return[o>>16&255,o>>8&255,o&255]}const a=e.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/i);return a?[Number(a[1]),Number(a[2]),Number(a[3])]:null}function Y5(t){const e=Hl(t);if(!e)return .5;const n=i=>{const a=i/255;return a<=.03928?a/12.92:((a+.055)/1.055)**2.4};return .2126*n(e[0])+.7152*n(e[1])+.0722*n(e[2])}const q5="#1E1A33",j5="#F7F5F2";function K5(t){return Y5(t)<.13?j5:q5}function Z5([t,e,n]){t/=255,e/=255,n/=255;const i=Math.max(t,e,n),a=Math.min(t,e,n),r=(i+a)/2;if(i===a)return[0,0,r];const o=i-a,s=r>.5?o/(2-i-a):o/(i+a);let l=0;return i===t?l=(e-n)/o+(e<n?6:0):i===e?l=(n-t)/o+2:l=(t-e)/o+4,[l/6,s,r]}function J5([t,e,n]){if(e===0)return[n*255,n*255,n*255];const i=n<.5?n*(1+e):n+e-n*e,a=2*n-i,r=o=>(o=(o%1+1)%1,o<1/6?a+(i-a)*6*o:o<1/2?i:o<2/3?a+(i-a)*(2/3-o)*6:a);return[r(t+1/3)*255,r(t)*255,r(t-1/3)*255]}function Q5([t,e,n]){return`hsl(${(t*360).toFixed(1)} ${(e*100).toFixed(1)}% ${(n*100).toFixed(1)}%)`}const Op=t=>Math.min(1,Math.max(0,t));function bn(t,e,n=0){const i=Hl(t);if(!i)return t;const[a,r,o]=Z5(i);return Q5([a,Op(r+n+(e<0?-e*.25:0)),Op(o+e)])}const fu=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4),e_=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055;function t_(t,e,n){const i=Math.cbrt(.4122214708*t+.5363325363*e+.0514459929*n),a=Math.cbrt(.2119034982*t+.6806995451*e+.1073969566*n),r=Math.cbrt(.0883024619*t+.2817188376*e+.6299787005*n);return[.2104542553*i+.793617785*a-.0040720468*r,1.9779984951*i-2.428592205*a+.4505937099*r,.0259040371*i+.7827717662*a-.808675766*r]}function $p(t,e,n){const i=Math.pow(t+.3963377774*e+.2158037573*n,3),a=Math.pow(t-.1055613458*e-.0638541728*n,3),r=Math.pow(t-.0894841775*e-1.291485548*n,3);return[4.0767416621*i-3.3077115913*a+.2309699292*r,-1.2684380046*i+2.6097574011*a-.3413193965*r,-.0041960863*i-.7034186147*a+1.707614701*r]}const n_=t=>t.every(e=>e>=-1e-4&&e<=1+1e-4);function i_(t,e){const n=Hl(t);if(!n||!(e>0))return t;const[i,a,r]=t_(fu(n[0]/255),fu(n[1]/255),fu(n[2]/255)),o=Math.hypot(a,r);if(o<1e-4)return t;const s=a/o,l=r/o,c=o*(1+.5*e);let f=null,h=o;for(let d=0;d<=6;d++){const g=i*(1-.15*e*d/6);let x=0,m=c;for(let p=0;p<18;p++){const b=(x+m)/2;n_($p(g,s*b,l*b))?x=b:m=b}if(x>h+.004*d&&(h=x,f=$p(g,s*x,l*x)),x>=c-1e-4)break}if(!f)return t;const u=f.map(d=>Math.round(255*e_(Math.min(1,Math.max(0,d)))));return`rgb(${u[0]} ${u[1]} ${u[2]})`}const e0=["default","working","sleeping"],t0=.68,nx=26,a_=.2,kp={height:nx,time:t0,stretch:1,squash:1.15,squashTime:.37,squashEase:"pulse",groundTime:.11,groundEase:"pulse",riseTime:.33,riseEase:"pulse",clickSquashTime:.24,spin:1,lean:6,every:8,land:0},ix=(t,e)=>e?t.clickSquashTime:a_*t.time,du=(t,e)=>ix(t,e)+t.time+ax[t.squashEase]*(e?t.clickSquashTime:t.squashTime)+Math.max(0,t.groundTime)+t.riseTime+Math.max(0,t.land)+.05,ax={sharp:0,pulse:2/7,soft:.5,bouncy:.144},Bp=(t,e)=>{if(t<=0)return 1;if(t>=1)return 0;switch(e){case"sharp":return(1-t)*(1-t);case"soft":return .5+.5*Math.cos(Math.PI*t);case"bouncy":return Math.exp(-3.2*t)*Math.cos(5.4*t)-t*t*t*.026;default:{const n=4.2*t;return(1+n)*Math.exp(-n)-t*t*t*.078}}},Hp=(t,e)=>1+.25*rx(t,e),rx=(t,e)=>{if(t<=0||t>=1)return 0;let n;switch(e){case"sharp":n=(1-t)*(1-t);break;case"soft":n=Math.sin(Math.PI*t)**2;break;case"bouncy":n=Math.exp(-3.15*t)*Math.sin(8.43*t)/.596;break;default:{const a=7*t;n=a*a*Math.exp(2-a)/4}}const i=t>.85?1-(t-.85)/.15:1;return n*i*i*(3-2*i)},pu=t=>Math.exp(-Math.pow(Math.min(Math.abs(t),Math.abs(t-1))/.11,2)),Xn=Math.PI/180,rr=Math.PI*2,r_={default:1.2,working:.7,sleeping:1.4},o_=1;function s_(t){let e=t*2654435761>>>0||1;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function to(t,e,n,i){return t+(e-t)*(1-Math.exp(-n*i))}const Ks=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,l_=t=>.5-.5*Math.cos(Math.PI*t);class Zs{constructor(e,n,i,a,r,o=!1){this.rand=e,this.amp=n,this.holdMin=i,this.holdMax=a,this.rate=r,this.spring=o,this.value=0,this.vel=0,this.target=0,this.next=0}update(e,n){if(e>=this.next&&(this.target=(this.rand()*2-1)*this.amp,this.next=e+this.holdMin+this.rand()*(this.holdMax-this.holdMin)),this.spring){const i=this.rate*1.6,a=.9;this.vel+=(i*i*(this.target-this.value)-2*a*i*this.vel)*n,this.value+=this.vel*n}else this.value=to(this.value,this.target,this.rate,n)}aim(e){this.target=e,this.next=1/0}set(e,n,i,a){this.amp=e,this.holdMin=n,this.holdMax=i,this.rate=a,this.next=0}}class Js{constructor(e){this.duration=e,this.p=-1}fire(){this.p=0}get active(){return this.p>=0}update(e){this.p<0||(this.p+=e/this.duration,this.p>=1&&(this.p=-1))}}const Wp=35*Xn,Gp=14*Xn,Vp=3.2*Xn,Xp=2.6,c_=4.4,ox={default:{pitch:0,roll:0,y:0,lookX:0,lookY:0},working:{pitch:5*Xn,roll:0,y:0,lookX:0,lookY:0},sleeping:{pitch:-16*Xn,roll:6*Xn,y:3,lookX:0,lookY:1}};class u_{constructor(e,n="default"){this.pose={yaw:0,pitch:0,roll:0,x:0,y:0,sx:1,sy:1,eyeOpen:1,blinkL:0,blinkR:0,lookX:0,lookY:0,breath:0,laugh:0,whirl:0,whirlAngle:0,w:[1,0,0]},this.state="default",this.t=0,this.wFrom=[1,0,0],this.tr=1,this.trDuration=1.2,this.blink=new Js(.17),this.blinkAgain=!1,this.dart=new Js(.12),this.dartX=0,this.dartY=0,this.flip=new Js(du(kp,!1)),this.flipPoked=!1,this.jump={...kp},this.flipSide=1,this.nod=new Js(1.7),this.hopPhase=0,this.hopCount=0,this.hopGain=0,this.laughEv=new Js(.8),this.prevYaw=0,this.jelly=0,this.jellyV=0,this.gazeLead=0,this.gazeDir=[0,0],this.gazeAt=0,this.turnK=1,this.breathPhase=0,this.ptrX=0,this.ptrY=0,this.ptrS=0,this.ptrTargetX=0,this.ptrTargetY=0,this.ptrTargetS=0,this.baseYaw=0,this.rand=s_(Math.floor(e*1e6)+1);const i=this.rand;this.yawW=new Zs(i,36*Xn,1.1,2.6,3,!0),this.pitchW=new Zs(i,10*Xn,1.1,2.6,2.6,!0),this.rollW=new Zs(i,5*Xn,1.6,3.2,2,!0),this.lookXW=new Zs(i,3.6,.5,2,14),this.lookYW=new Zs(i,2.4,.5,2,14),this.t=i()*10,this.hopPhase=i(),this.breathPhase=i(),this.blinkAt=this.t+1+i()*3,this.flipAt=this.nextFlip(this.t,1),this.nodAt=this.t+3+i()*4,this.dartAt=this.t+1+i()*2,this.laughAt=this.t+.6+i()*1.5,this.setState(n,!0)}setState(e,n=!1){if(e===this.state&&!n)return;const i=this.state;this.state=e;const a=this.pose.w;if(n){for(let r=0;r<3;r++)a[r]=e0[r]===e?1:0;this.tr=1}else this.wFrom=[a[0],a[1],a[2]],this.tr=0,this.trDuration=i==="sleeping"?o_:r_[e];switch(e){case"default":this.yawW.set(Wp,2.6,5.4,2),this.pitchW.set(Gp,2.8,5.8,1.8),this.rollW.set(Vp,3.4,6.6,1.5),this.gazeAt=0,this.gazeDir=[0,0],this.lookXW.set(3.6,.6,2.2,13),this.lookYW.set(2.4,.6,2.2,13),this.flipAt=this.nextFlip(this.t,.6);break;case"working":this.yawW.set(16*Xn,.9,1.8,4),this.pitchW.set(3*Xn,1.2,2.4,3),this.rollW.set(0,1,2,3),this.lookXW.set(2,.5,1.2,12),this.lookYW.set(1,.5,1.2,12),this.hopPhase=0,this.hopCount=0,this.laughAt=this.t+.5+this.rand()*1.2;break;case"sleeping":this.yawW.set(7*Xn,3,6,.7),this.pitchW.set(3*Xn,3,6,.7),this.rollW.set(2*Xn,3,6,.6),this.lookXW.set(0,2,4,2),this.lookYW.set(0,2,4,2),this.nodAt=this.t+2.5+this.rand()*4;break}}setPointer(e,n,i){this.ptrTargetX=Math.max(-1.2,Math.min(1.2,e)),this.ptrTargetY=Math.max(-1.2,Math.min(1.2,n)),this.ptrTargetS=Math.max(0,Math.min(1,i))}poke(){this.flip.active&&this.flip.p<.6||(this.flipPoked=!0,this.flip.duration=du(this.jump,!0),this.flipSide=this.rand()<.5?-1:1,this.flip.fire(),this.flipAt=this.nextFlip(this.t,1.1))}setTurn(e){const n=Math.max(0,e);n!==this.turnK&&(this.turnK=n,this.state==="default"&&(this.gazeAt=0))}setJump(e){const n=this.jump.every;Object.assign(this.jump,e),e.every!==void 0&&e.every!==n&&(this.flipAt=this.nextFlip(this.t,1))}nextGaze(){const e=this.rand,[n,i]=this.gazeDir;if(n!==0||i!==0){const r=e();return r<.66?[-n,-i]:r<.85?[-n,i]:[0,0]}const a=[[1,-1],[-1,1],[-1,-1],[1,1]];return a[Math.floor(e()*a.length)]}nextFlip(e,n){const i=this.jump.every;return i>0?e+i*n*(.625+this.rand()*.75):1/0}update(e){e=Math.min(e,.05),this.t+=e;const n=this.t,i=this.pose,a=i.w;if(this.tr<1){this.tr=Math.min(1,this.tr+e/this.trDuration);const N=l_(this.tr);for(let W=0;W<3;W++){const fe=e0[W]===this.state?1:0;a[W]=this.wFrom[W]+(fe-this.wFrom[W])*N}}const[r,o,s]=a,l={pitch:0,roll:0,y:0,lookX:0,lookY:0};for(let N=0;N<3;N++){const W=ox[e0[N]];l.pitch+=W.pitch*a[N],l.roll+=W.roll*a[N],l.y+=W.y*a[N],l.lookX+=W.lookX*a[N],l.lookY+=W.lookY*a[N]}if(this.state==="default"&&n>=this.gazeAt){const[N,W]=this.nextGaze();this.gazeDir=[N,W];const fe=.84+this.rand()*.16;this.yawW.aim(N*Wp*fe*this.turnK),this.pitchW.aim(W*Gp*fe),this.rollW.aim(N*Vp*fe*this.turnK),this.gazeAt=n+Xp+this.rand()*(c_-Xp)}this.yawW.update(n,e),this.pitchW.update(n,e),this.rollW.update(n,e),this.lookXW.update(n,e),this.lookYW.update(n,e),this.ptrS=to(this.ptrS,this.ptrTargetS,8,e),this.ptrX=to(this.ptrX,this.ptrTargetX,14,e),this.ptrY=to(this.ptrY,this.ptrTargetY,14,e);const c=this.ptrS,f=1-.75*c;this.baseYaw=to(this.baseYaw,this.yawW.value*f+22*Xn*this.ptrX*c,5,e);const h=l.pitch+this.pitchW.value*f-12*Xn*this.ptrY*c,u=l.roll+this.rollW.value*f,d=l.y,g=l.lookX+this.lookXW.value*f+4.5*this.ptrX*c,x=l.lookY+this.lookYW.value*f+3*this.ptrY*c;let m=0,p=0,b=1,_=1,E=0,M=0,v=0,S=0,T=0,y=0,w=0,A=0;const C=(N,W,fe)=>{const j=Math.min(1,Math.max(0,(fe-N)/(W-N)));return j*j*(3-2*j)},R=N=>C(.1,.26,N)*(1-C(.66,.9,N)),P=N=>rr*(1.5*N+.9*Ks(N));if(n>=this.blinkAt&&!this.blink.active&&r+o>.5&&(this.blink.fire(),this.blinkAgain=!this.blinkAgain&&this.rand()<.22,this.blinkAt=n+(this.blinkAgain?.28:2.2+this.rand()*2.6)),this.blink.update(e),this.blink.active&&(v=Math.sin(Math.PI*this.blink.p)),n>=this.dartAt&&!this.dart.active&&r+o>.5&&(this.dart.fire(),this.dartX=(this.rand()*2-1)*4,this.dartY=(this.rand()*2-1)*2,this.dart.duration=.25+this.rand()*.45,this.dartAt=n+1.2+this.rand()*2.6),this.dart.update(e),this.dart.active){const N=this.dart.p,W=N<.15?N/.15:N>.8?(1-N)/.2:1;S+=this.dartX*W*(r+o),T+=this.dartY*W*(r+o)}if(this.state==="default"&&n>=this.flipAt&&!this.flip.active&&(this.flipPoked=!1,this.flip.duration=du(this.jump,!1),this.flipSide=this.rand()<.5?-1:1,this.flip.fire(),this.flipAt=this.nextFlip(n,1)),this.flip.update(e),this.flip.active){const N=this.jump,W=ix(N,this.flipPoked),fe=(this.flip.p*this.flip.duration-W)/N.time,j=Math.min(1,Math.max(0,fe)),ue=Math.sin(Math.PI*j);m+=rr*N.spin*Ks(j),p-=N.height*ue;const de=(fe-1)*N.time-N.land,ae=this.flipPoked?N.clickSquashTime:N.squashTime,Ee=qe=>this.flipPoked?qe*qe*(3-2*qe):pu(qe-1),L=Math.max(0,N.groundTime),ve=ax[N.squashEase]*ae,me=de-ve-L,we=de<=ve?rx(de/ae,N.squashEase):me<=0?Hp((de-ve)/L,N.groundEase):Bp(me/N.riseTime,N.riseEase),te=(fe<0?Ee(Math.max(0,1+fe*N.time/W)):de>0?we:fe<.2?pu(fe):0)*N.squash;b+=.16*te-.06*ue*N.stretch,_+=-.18*te+.09*ue*N.stretch,M+=this.flipSide*N.lean*Xn*ue,N.spin>0&&(y=Math.max(y,ue),w=Math.max(w,R(j)),A=P(j))}const I=this.jump,z=Math.max(0,I.groundTime),B=z+I.riseTime;if(this.state==="working"&&(this.hopGain=o),this.hopGain>.02&&(this.state==="working"||this.hopPhase>0)){this.hopPhase+=e/t0,this.hopPhase>=1&&(this.state==="working"?(this.hopPhase-=1,this.hopCount+=1):(this.hopPhase-1)*t0>=B&&(this.hopPhase=0,this.hopGain=0));const N=this.hopGain,W=Math.min(1,this.hopPhase),fe=Math.sin(Math.PI*W),j=this.hopCount%3===2;p-=(j?nx:18)*fe*N;const ue=this.state!=="working"&&this.hopPhase>1?(this.hopPhase-1)*t0:-1,de=ue<0?pu(this.hopPhase):ue<z?Hp(ue/z,I.groundEase):Bp((ue-z)/I.riseTime,I.riseEase);b+=(.16*de-.06*fe)*N,_+=(-.18*de+.09*fe)*N,j&&(m+=rr*Ks(W)*N,y=Math.max(y,fe*N),R(W)*N>w&&(w=R(W)*N,A=P(W))),M+=(this.hopCount%2===0?1:-1)*6*Xn*fe*N}if(this.state==="working"&&n>=this.laughAt&&!this.laughEv.active&&(this.laughEv.fire(),this.laughEv.duration=.6+this.rand()*.5,this.laughAt=n+1.6+this.rand()*2.2),this.laughEv.update(e),this.laughEv.active){const N=this.laughEv.p;y=Math.max(y,N<.18?N/.18:N>.78?(1-N)/.22:1)}if(this.state==="sleeping"&&n>=this.nodAt&&!this.nod.active&&(this.nod.fire(),this.nodAt=n+4+this.rand()*4),this.nod.update(e),this.nod.active){const N=this.nod.p,W=N<.72?Ks(N/.72):1-Ks((N-.72)/.28);E-=13*Xn*W*s}this.breathPhase+=e/(3.6+1.2*s);const F=Math.sin(this.breathPhase*rr);i.breath=F,b+=F*(.008+.014*s),_+=F*(.012+.02*s);const O=Math.sin(n*rr/3.4)*2*(1-s);i.yaw=this.baseYaw+m;let k=this.baseYaw-this.prevYaw;k=((k+Math.PI)%rr+rr)%rr-Math.PI,this.prevYaw=this.baseYaw;const G=e>0?Math.abs(k)/e:0,ee=e>0?Math.max(-2.2,Math.min(2.2,k/e*2.4)):0;this.gazeLead=to(this.gazeLead,ee,9,e);const ne=Math.min(.22,.055*G),J=16,he=.45;this.jellyV+=(J*J*(ne-this.jelly)-2*he*J*this.jellyV)*e,this.jelly+=this.jellyV*e;const H=Math.max(-.08,Math.min(.28,this.jelly))*.6;b*=1+H,_*=1-.55*H,i.pitch=h+E,i.roll=u+M,i.x=0,i.y=d+p+O,i.sx=b,i.sy=_,i.eyeOpen=1,i.laugh=to(i.laugh,y,30,e),i.blinkL=v,i.blinkR=v,i.lookX=g+S+this.gazeLead,i.lookY=x+T,i.whirl=w,i.whirlAngle=A}}function Yp(t){const e=ox[t];return{yaw:0,pitch:e.pitch,roll:e.roll,x:0,y:e.y,sx:1,sy:1,eyeOpen:1,blinkL:0,blinkR:0,lookX:e.lookX,lookY:e.lookY,breath:0,laugh:0,whirl:0,whirlAngle:0,w:e0.map(n=>n===t?1:0)}}const it=3,Ft=100+2*it,Qn=64,n0=Qn*Qn,na=24,sx=1e12,lx=48*Math.PI/180,qp=Math.cos(lx),h_=Math.sin(lx);function jp(t,e,n,i,a,r){let o=0;a[0]=0,r[0]=-1e30,r[1]=1e30;for(let s=1;s<e;s++){let l=0;for(;;){const c=a[o];if(l=(t[s]+s*s-t[c]-c*c)/(2*(s-c)),l>r[o])break;o--}o++,a[o]=s,r[o]=l,r[o+1]=1e30}o=0;for(let s=0;s<e;s++){for(;r[o+1]<s;)o++;const l=a[o];n[s]=(s-l)*(s-l)+t[l],i[s]=l}}function Yh(t,e,n,i,a){const r=new Float32Array(n),o=new Float32Array(n),s=new Int32Array(n),l=new Int32Array(n),c=new Float32Array(n+1),f=new Float32Array(n*n),h=new Int32Array(n*n);for(let u=0;u<n;u++){for(let d=0;d<n;d++)r[d]=t[d*n+u]===e?0:sx;jp(r,n,o,s,l,c);for(let d=0;d<n;d++)f[d*n+u]=o[d],h[d*n+u]=s[d]}for(let u=0;u<n;u++){const d=u*n;for(let g=0;g<n;g++)r[g]=f[d+g];jp(r,n,o,s,l,c);for(let g=0;g<n;g++)i[d+g]=o[g],a&&(a[d+g]=h[d+s[g]]*n+s[g])}}function mu(t,e,n){for(let i=0;i<e;i++){const a=i*e;for(let r=0;r<e;r++){const o=r<2?0:r-2,s=r<1?0:r-1,l=r>e-2?e-1:r+1,c=r>e-3?e-1:r+2;n[a+r]=(t[a+o]+4*t[a+s]+6*t[a+r]+4*t[a+l]+t[a+c])*.0625}}for(let i=0;i<e;i++)for(let a=0;a<e;a++){const r=a<2?0:a-2,o=a<1?0:a-1,s=a>e-2?e-1:a+1,l=a>e-3?e-1:a+2;t[a*e+i]=(n[r*e+i]+4*n[o*e+i]+6*n[a*e+i]+4*n[s*e+i]+n[l*e+i])*.0625}}function f_(t,e,n){const i=[];for(let r=e,o=1;o<=4&&r%2===0||o===1;r>>=1,o<<=1){const s=new Uint8Array(r*r);for(let l=0;l<r;l++)for(let c=0;c<r;c++){let f=0;for(let h=0;h<o;h++)for(let u=0;u<o;u++)f+=t[(l*o+h)*e+c*o+u];s[l*r+c]=f>=128*o*o?1:0}if(i.push({n:r,mask:s,phi:new Float32Array(r*r)}),o===4)break}const a=(r,o,s,l)=>{const{n:c,mask:f,phi:h}=r,u=o*o;for(let d=0;d<s;d++)for(let g=1;g<c-1;g++){const x=g*c;for(let m=1;m<c-1;m++){const p=x+m;if(!f[p])continue;const b=(h[p-1]+h[p+1]+h[p-c]+h[p+c]+u)*.25;h[p]+=l*(b-h[p])}}};for(let r=i.length-1;r>=0;r--){const o=i[r],s=1<<r;if(r<i.length-1){const c=i[r+1],f=o.n,h=c.n;for(let u=0;u<f;u++){const d=Math.min(h-1,Math.max(0,(u+.5)/2-.5)),g=d|0,x=Math.min(h-1,g+1),m=d-g;for(let p=0;p<f;p++){const b=u*f+p;if(!o.mask[b])continue;const _=Math.min(h-1,Math.max(0,(p+.5)/2-.5)),E=_|0,M=Math.min(h-1,E+1),v=_-E;o.phi[b]=(c.phi[g*h+E]*(1-v)+c.phi[g*h+M]*v)*(1-m)+(c.phi[x*h+E]*(1-v)+c.phi[x*h+M]*v)*m}}}const l=Math.min(1.9,2/(1+Math.sin(Math.PI/o.n))-.05);a(o,n*s,4,1),a(o,n*s,r===2?100:r===1?30:16,l),a(o,n*s,8,1)}return i[0].phi}const d_=[1,1,0,-1,-1,-1,0,1],p_=[0,1,1,1,0,-1,-1,-1],m_=[1,Math.SQRT2,1,Math.SQRT2,1,Math.SQRT2,1,Math.SQRT2];function g_(t,e,n){const i=Ft/e,a=e*e,r=new Uint8Array(a);for(let y=0;y<a;y++)r[y]=t[y]>=128?1:0;const o=new Float32Array(a),s=new Float32Array(a),l=new Int32Array(a);Yh(r,0,e,o,null),Yh(r,1,e,s,l);const c=new Float32Array(a),f=new Float32Array(a);for(let y=0;y<a;y++){const w=t[y]/255;c[y]=i*(w>0&&w<1?w-.5:r[y]?Math.sqrt(o[y])-.5:.5-Math.sqrt(s[y]))}mu(c,e,f),mu(c,e,f);const h=f_(t,e,i);let u=0;for(let y=0;y<a;y++)h[y]>u&&(u=h[y]);const d=2*Math.sqrt(u),g=Math.min(1.5*n+.32*d,1.4*d),x=u>0?g/Math.sqrt(u):0,m=new Float32Array(a);for(let y=0;y<a;y++)m[y]=h[y]>0?x*Math.sqrt(h[y]):0;mu(m,e,f);const p={N:e,i00:new Uint16Array(a),wx:new Uint8Array(a),wy:new Uint8Array(a),ao:new Uint8Array(a),sd:c,h:m},{i00:b,wx:_,wy:E,ao:M}=p,v=e<=64?[1,2,3,5,8]:e<=96?[1,2,4,7,11]:[1,2,4,7,11,15],S=64,T=e-1;for(let y=0;y<e;y++)for(let w=0;w<e;w++){const A=y*e+w,C=r[A]?A:s[A]<=S?l[A]:-1;if(C<0)continue;const R=C%e,P=(C-R)/e,I=R>0?R-1:0,z=R<T?R+1:T,B=P>0?P-1:0,F=P<T?P+1:T;let O=-(m[P*e+z]-m[P*e+I])/(2*i),k=-(m[F*e+R]-m[B*e+R])/(2*i),G=1,ee=Math.sqrt(O*O+k*k+1);O/=ee,k/=ee,G/=ee;const ne=Math.max(0,c[C]);if(ne<2){let ae=c[P*e+z]-c[P*e+I],Ee=c[F*e+R]-c[B*e+R];const L=Math.hypot(ae,Ee)||1;ae/=L,Ee/=L;const ve=.7*(1-ne/2);O+=ve*(-ae-O),k+=ve*(-Ee-k),G+=ve*(0-G),ee=Math.sqrt(O*O+k*k+G*G)||1,O/=ee,k/=ee,G/=ee}const J=m[C];let he=0;for(let ae=0;ae<8;ae++){let Ee=0;for(let L=0;L<v.length;L++){const ve=v[L];let me=R+d_[ae]*ve,we=P+p_[ae]*ve;me<0?me=0:me>T&&(me=T),we<0?we=0:we>T&&(we=T);const te=(m[we*e+me]-J)/(ve*i*m_[ae]);te>Ee&&(Ee=te)}he+=Ee/Math.sqrt(1+Ee*Ee)}const H=1-Math.min(1,ne/3),N=1-.2*H*H,W=Math.pow(1-.9*he/8,1.5)*N;M[A]=Math.max(1,Math.round(255*Math.pow(W,1/2.2)));const fe=(O*.5+.5)*(Qn-1),j=(k*.5+.5)*(Qn-1),ue=Math.min(Qn-2,Math.max(0,fe|0)),de=Math.min(Qn-2,Math.max(0,j|0));b[A]=de*Qn+ue,_[A]=Math.round(255*Math.min(1,Math.max(0,fe-ue))),E[A]=Math.round(255*Math.min(1,Math.max(0,j-de)))}return p}function zn(t){if(typeof OffscreenCanvas=="function")return new OffscreenCanvas(t,t);if(typeof document<"u"){const e=document.createElement("canvas");return e.width=e.height=t,e}return null}function Dn(t,e){return t.getContext("2d",e?{willReadFrequently:!0}:void 0)}function cx(t,e){const n=zn(e),i=n&&Dn(n,!0);if(!i)return null;const a=Ft/e;i.setTransform(1/a,0,0,1/a,it/a,it/a),i.fillStyle="#fff",i.fill(t);const r=i.getImageData(0,0,e,e).data,o=new Uint8ClampedArray(e*e);for(let s=0;s<e*e;s++)o[s]=r[s*4+3];return o}const no=new Map,i0=new Set,Kp=new WeakMap;let x_=0;function gu(t){let e=Kp.get(t);return e||Kp.set(t,e=`p${x_++}`),e}const _l=[];let qh=!1;const b_=6,xu=()=>typeof performance<"u"?performance.now():Date.now(),v_=20;let Cl=0;function a0(t){qh=!1;const e=xu();let n=_l.shift();for(;n&&(n(),!((Cl>0?v_-(xu()-e):t&&!t.didTimeout?t.timeRemaining()-6:b_-(xu()-e))<=0));)n=_l.shift();_l.length&&ux()}function ux(){if(qh)return;if(qh=!0,Cl>0){setTimeout(()=>a0(),0);return}const t=globalThis.requestIdleCallback;t?t(a0,{timeout:60}):setTimeout(()=>a0(),24)}function mc(t){Cl=Math.max(0,Cl+(t?1:-1)),t&&_l.length&&setTimeout(()=>a0(),0)}function r0(){return i0.size>0||oo.size>0}function nd(t){_l.push(t),ux()}const E0=new Set;let A0=!1,bu=!1;function hx(){bu||!E0.size||(bu=!0,setTimeout(()=>{bu=!1;for(const t of[...E0])t()},0))}function vu(t){return E0.add(t),()=>{E0.delete(t)}}function gc(){const t=A0;return A0=!1,t}function fx(t,e,n,i,a){const r=`${t}|${n}|${Math.round(i)}`,o=no.get(r);if(o)return o;const s=()=>{if(i0.delete(r),no.has(r))return;const l=cx(e,n);l&&(no.size>=48&&no.clear(),no.set(r,g_(l,n,i)),hx())};return a?(s(),no.get(r)??null):(i0.has(r)||(i0.add(r),nd(s)),A0=!0,null)}function M_(t,e,n=192,i=.65,a=!1,r=Dr,o=295,s){const l=fx(t,e,dx(n),15*i,!0);if(a&&l){const c=o*Math.PI/180;ad(l,t,15*i,Math.ceil(Ft*n/100),!1,Math.sin(c),-Math.cos(c),r,s??Wl(Math.sin(c),-Math.cos(c)))}}function dx(t){return t<=100?64:t<=224?96:128}const Zp=new WeakMap;function __(t,e,n){const i=Math.max(.05,Math.min(1,n)),a=`${e}|${i.toFixed(2)}`;let r=Zp.get(t);r||Zp.set(t,r=new Map);const o=r.get(a);if(o)return o;const{N:s,h:l,sd:c}=t;let f=0;for(let v=0;v<s*s;v++)l[v]>f&&(f=l[v]);const h=Ft/s,u=new Float32Array(e),d=new Float32Array(e),g=new Float32Array(e),x=new Float32Array(e),m=new Float32Array(e);m[0]=1.2;const p=v=>{let S=0,T=0,y=0;for(let w=0,A=0;w<s;w++)for(let C=0;C<s;C++,A++)v(A)&&(S+=1,T+=C,y+=w);return S?[S,(T/S+.5)*h-it,(y/S+.5)*h-it]:[0,50,50]},[b,_,E]=p(v=>c[v]>=0);d[0]=1,g[0]=_,x[0]=E;for(let v=1;v<e;v++){const S=v/e;u[v]=f*S;const T=f*Math.pow(S,1/i),[y,w,A]=p(I=>c[I]>=0&&l[I]>=T);d[v]=Math.min(d[v-1],b?Math.sqrt(y/b):1),g[v]=w,x[v]=A;const C=f/(2*e);let R=0,P=0;for(let I=0;I<s*s;I++)c[I]>0&&Math.abs(l[I]-T)<C&&(P+=c[I],R++);m[v]=Math.max(m[v-1],R?P/R:m[v-1])}const M={top:f,z:u,q:i,scale:d,cx:g,cy:x,inset:m};return r.size>6&&r.clear(),r.set(a,M),M}function y_(t,e,n,i,a=1){const r=`${t}|`,o=`|${Math.round(e)}`;let s=null;for(const[M,v]of no)M.startsWith(r)&&M.endsWith(o)&&(s=v);if(!s)return null;const{N:l,h:c}=s,f=Ft/l,h=Math.min(l-1,Math.max(0,(n+it)/f-.5)),u=Math.min(l-1,Math.max(0,(i+it)/f-.5)),d=Math.min(l-2,h|0),g=Math.min(l-2,u|0),x=h-d,m=u-g,p=g*l+d,b=(c[p]*(1-x)+c[p+1]*x)*(1-m)+(c[p+l]*(1-x)+c[p+l+1]*x)*m;let _=0;for(let M=0;M<l*l;M++)c[M]>_&&(_=c[M]);if(_<=0)return 0;const E=Math.max(.05,Math.min(1,a));return _*Math.pow(Math.max(0,b)/_,E)}const Mu=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4),xc=new Map;function _o(t){let e=xc.get(t);if(!e){let n=Hl(t);if(!n){const i=zn(1),a=i&&Dn(i,!0);if(a){a.fillStyle=t,a.fillRect(0,0,1,1);const r=a.getImageData(0,0,1,1).data;n=[r[0],r[1],r[2]]}else n=[128,128,128]}e=[Mu(n[0]/255),Mu(n[1]/255),Mu(n[2]/255)],xc.size>200&&xc.clear(),xc.set(t,e)}return e}const U0=2048,px=2.5,mx=U0/px,gx=new Float32Array(U0);for(let t=0;t<U0;t++){const e=(t+.5)/mx,n=e<=.75?e:.75+.25*(1-Math.exp(-(e-.75)/.25));gx[t]=255*(n<=.0031308?12.92*n:1.055*Math.pow(n,1/2.4)-.055)}const _u=t=>gx[t<=0?0:t>=px?U0-1:t*mx|0],pi=t=>t<=0?0:t>=1?255:255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055),_s=1024,bc=new Map;function T0(t){let e=bc.get(t);if(!e){e=new Float32Array(_s+1);for(let n=0;n<=_s;n++)e[n]=Math.pow(n/_s,t);bc.size>16&&bc.clear(),bc.set(t,e)}return e}function xx(t,e,n=1/0){if(!(e>0))return;const i=.2126*t[0]+.7152*t[1]+.0722*t[2],a=Math.min(t[0],t[1],t[2]),r=Math.max(t[0],t[1],t[2]);let o=1+3*e;a<i&&(o=Math.min(o,i/(i-a))),r>i&&(o=Math.min(o,Math.max(1,(n-i)/(r-i)))),t[0]=i+(t[0]-i)*o,t[1]=i+(t[1]-i)*o,t[2]=i+(t[2]-i)*o}const yu=[.92,.96,1],wu=[1,.98,.95],wn=(t,e,n)=>{const i=n<=t?0:n>=e?1:(n-t)/(e-t);return i*i*(3-2*i)},Jp=(t,e,n)=>1-wn(t-e,t+e,n);function w_(t,e,n,i){const{L:a,V:r,H:o,U:s,W:l,A:c,B:f}=n,h=i.vivid??0,u=[0,0,0],d=Math.max(e[0],e[1],e[2],.05),g=[e[0]/d,e[1]/d,e[2]/d],x=Math.max(.03,.3-.15*i.shadow),m=.15+.14*i.spread,p=.85,b=Math.min(90,Math.round(110/Math.pow(i.spread,1.3))),_=Math.max(2,Math.round(8/i.spread)),E=T0(b),M=T0(_),v=.45*i.highlight,S=.1*i.highlight,T=.11*i.highlight,y=.3*i.rim,w=[x*g[0],x*g[1],x*g[2]];for(let A=0;A<Qn;A++)for(let C=0;C<Qn;C++){let R=C/(Qn-1)*2-1,P=A/(Qn-1)*2-1,I=R*R+P*P;if(I>1.14)continue;if(I>1){const L=1/Math.sqrt(I);R*=L,P*=L,I=1}const z=Math.sqrt(1-I),B=R*a[0]+P*a[1]+z*a[2],F=Math.max(0,R*r[0]+P*r[1]+z*r[2]),O=Math.max(0,R*o[0]+P*o[1]+z*o[2]),k=Math.min(1,Math.max(0,(B+m)/(1+m))),G=1-F,ee=G*G,ne=ee*G,J=ne*ee,he=O*_s|0,H=(v*E[he]+S*M[he])*(1+3*J),N=2*F*R-r[0],W=2*F*P-r[1],fe=2*F*z-r[2],j=.45+.55*wn(-.4,.6,N*s[0]+W*s[1]+fe*s[2]),ue=N*l[0]+W*l[1]+fe*l[2];let de=0;if(ue>.5){const L=(N*c[0]+W*c[1]+fe*c[2])/ue,ve=(N*f[0]+W*f[1]+fe*f[2])/ue;de=Jp(.34,.12,Math.abs(L))*Jp(.12,.06,Math.abs(ve))}const ae=y*ne*j+T*de,Ee=(A*Qn+C)*3;u[0]=e[0]*(w[0]+p*k),u[1]=e[1]*(w[1]+p*k),u[2]=e[2]*(w[2]+p*k),xx(u,h),t[Ee]=_u(u[0]+H*wu[0]+ae*yu[0]),t[Ee+1]=_u(u[1]+H*wu[1]+ae*yu[1]),t[Ee+2]=_u(u[2]+H*wu[2]+ae*yu[2])}}const Qp=new WeakMap;function S_(t){let e=Qp.get(t);if(e)return e;const{N:n,sd:i,ao:a}=t;e={ao:new Uint8Array(n*n),k:new Float32Array(n*n)};for(let r=0;r<n*n;r++){if(a[r]===0)continue;const o=Math.max(0,i[r]),s=1-Math.min(1,o/3),l=1-.2*s*s,c=Math.min(1,Math.pow(a[r]/255,2.2)/l);e.ao[r]=Math.max(1,Math.round(255*Math.pow(c,1/2.2))),e.k[r]=1}return Qp.set(t,e),e}const bx=5;function E_(t,e,n,i,a){const{N:r,i00:o,wx:s,wy:l,ao:c,sd:f}=t,h=Qn*3;for(let u=0,d=0;u<r*r;u++,d+=4){const g=c[u];if(g===0){n[d+3]=0;continue}let x=a?i[a.ao[u]]*a.k[u]:i[g];const m=o[u]*3,p=s[u]*(1/255),b=l[u]*(1/255);if(a){const T=(e[m+1]*(1-p)+e[m+4]*p)*(1-b)+(e[m+h+1]*(1-p)+e[m+h+4]*p)*b;x=1-(1-x)*(1.1-.75*Math.min(1,T/235))}const _=(1-p)*(1-b)*x,E=p*(1-b)*x,M=(1-p)*b*x,v=p*b*x;n[d]=e[m]*_+e[m+3]*E+e[m+h]*M+e[m+h+3]*v,n[d+1]=e[m+1]*_+e[m+4]*E+e[m+h+1]*M+e[m+h+4]*v,n[d+2]=e[m+2]*_+e[m+5]*E+e[m+h+2]*M+e[m+h+5]*v;const S=f[u]/bx;n[d+3]=S>=1?255:S<=0?0:Math.round(255*S*S*(3-2*S))}}const em=new WeakMap;function A_(t,e){let n=em.get(t);if(n||em.set(t,n=new Map),n.has(e))return n.get(e);const i=zn(e),a=i&&Dn(i,!1);if(!i||!a)return n.set(e,null),null;const{N:r,sd:o}=t,s=new ImageData(e,e),l=e/Ft;for(let c=0;c<e;c++)for(let f=0;f<e;f++){const h=(Tr(o,r,(f+.5)/l/Ft*r-.5,(c+.5)/l/Ft*r-.5)+.2)/.6,u=(c*e+f)*4;s.data[u]=s.data[u+1]=s.data[u+2]=255,s.data[u+3]=h>=1?255:h<=0?0:Math.round(255*h*h*(3-2*h))}return a.putImageData(s,0,0),n.set(e,i),i}const tm=new WeakMap;function N0(t){let e=tm.get(t);if(e)return e;const{N:n,sd:i}=t,a=Ft/n,r=[];for(let o=0,s=0;o<n;o++)for(let l=0;l<n;l++,s++)i[s]>=0&&i[s]<2*a&&r.push((l+.5)*a-it,(o+.5)*a-it,i[s]);return e=Float32Array.from(r),tm.set(t,e),e}const nm=new WeakMap;function T_(t){let e=nm.get(t);if(e)return e;const n=N0(t),i=[];let a=0,r=0;for(let l=0;l<n.length;l+=3)a+=n[l],r+=n[l+1];a/=n.length/3||1,r/=n.length/3||1;for(let l=0;l<n.length;l+=3)i.push([n[l],n[l+1],Math.atan2(n[l+1]-r,n[l]-a),n[l+2]]);i.sort((l,c)=>l[2]-c[2]);const o=Math.max(1,Math.floor(i.length/96)),s=i.filter((l,c)=>c%o===0);return e={x:Float32Array.from(s,l=>l[0]),y:Float32Array.from(s,l=>l[1]),d:Float32Array.from(s,l=>l[3])},nm.set(t,e),e}function im(t,e,n){const i=Math.round((e+Math.PI)/(2*Math.PI)*t),a=n&1?n+1>>1:-(n>>1);return((i+a)%t+t)%t}function C0(t,e,n){let i=-sx;for(let a=0;a<t.length;a+=3){const r=t[a]*e+t[a+1]*n+t[a+2];r>i&&(i=r)}return i}const xa=new Map,oo=new Set,vx=(t,e)=>Math.round(Math.atan2(e,t)/(Math.PI/12)),Mx=t=>t<=200?192:t<=360?320:512,Dr={length:1,density:1.6,fuzz:.9,clumps:.4,curl:.7,gravity:.9},C_=t=>`${t.length.toFixed(2)},${t.density.toFixed(2)},${t.fuzz.toFixed(2)},${t.clumps.toFixed(2)},${t.curl.toFixed(2)},${(t.gravity??Dr.gravity).toFixed(2)}`,_x=(t,e,n,i,a,r)=>`${t}|${Math.round(e)}|${n}|${i}|${C_(a)}|${Z_(r)}`,am=new Map,Su=new Set,Ca=128,R_=3.2,Eu=1/2.56,Au=1/(2/3*Math.sqrt(1/3)),P_=.6,rm=.07,om=.14,sm=.3,D_=.6,I_=.35,L_=.3,lm=.3,F_=1.26,z_=1.6,U_=.045,yx=.5,vc=Math.cos(yx),cm=Math.sin(yx),N_=.22,O_=.5,wx=.36,$_=1.1,um=1.625,k_=.5,B_=.9,Mc=.7,H_=.15,W_=1.3,Qi=20,Jn=Ft+2*Qi,G_=.8,V_=.3,X_=.8,Y_=.7,q_=.5,Qs=2.5,Tu=1.2,jh=3,j_=.8,K_=.3,hm=.1,yl=32*Math.PI/180,R0=1;function Sx(t,e,n=yl){const i=Math.cos(n),a=Math.sin(n);return Ga([t[0]*i+e[0]*a,t[1]*i+e[1]*a,t[2]*i+e[2]*a])}function Ex(t,e){return Ga([.94*t[0]-.34*e[0],.94*t[1]-.34*e[1],.94*t[2]-.34*e[2]])}function id(t,e){const n=-.5*t,i=-.5*e-.87,a=Math.hypot(n,i)||1;return[n/a,i/a]}const Wl=(t,e)=>{const[n,i]=id(t,e);return{bx:n,by:i,front:yl}},Z_=t=>`${Math.round(Math.atan2(t.by,t.bx)/(Math.PI/36))}|${Math.round(t.front/(Math.PI/90))}`;function o0(t,e){let n=t*374761393+e*668265263|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function Tr(t,e,n,i){const a=e-1,r=Math.min(a,Math.max(0,n)),o=Math.min(a,Math.max(0,i)),s=Math.min(a-1,r|0),l=Math.min(a-1,o|0),c=r-s,f=o-l,h=l*e+s;return(t[h]*(1-c)+t[h+1]*c)*(1-f)+(t[h+e]*(1-c)+t[h+e+1]*c)*f}function ad(t,e,n,i,a,r,o,s=Dr,l=Wl(r,o)){const c=Mx(i),f=vx(r,o),h=_x(e,n,c,f,s,l),u=xa.get(h);if(u)return u;if(a)return ty(t,e,n,i,r,o,s,l);const d=`${e}|${Math.round(n)}|`;if(c>192&&!Cl&&!oo.has(h)){let g=!1;for(const x of xa.keys())x.startsWith(d)&&(g=!0);for(const x of oo)x.startsWith(d)&&(g=!0);g||ad(t,e,n,1,!1,r,o,s,l)}if(!oo.has(h)){oo.add(h),Su.delete(h);const g=`${e}|${Math.round(n)}|${c}|${f}`,x=am.get(g)??[];for(x.push(h);x.length>2;){const p=x.shift();Su.add(p),oo.delete(p)}am.set(g,x);const m=Ax(t,h,c,r,o,s,l);if(m)for(const p of m.steps)nd(()=>Su.has(h)?void 0:p())}A0=!0;for(const[g,x]of xa)if(g.startsWith(d))return x;return null}function J_(t){let e=t>>>0;return()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Wo(t,e){return(n,i)=>{const a=n/t,r=i/t,o=Math.floor(a),s=Math.floor(r),l=a-o,c=r-s,f=l*l*(3-2*l),h=c*c*(3-2*c),u=(p,b)=>o0(p+e*131,b-e*71),d=u(o,s),g=u(o+1,s),x=u(o,s+1),m=u(o+1,s+1);return(d+(g-d)*f)*(1-h)+(x+(m-x)*f)*h}}function Q_(t,e,n){let i=t*374761393+e*668265263+n*1274126177|0;return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function ey(t,e){return(n,i,a)=>{const r=n/t,o=i/t,s=a/t,l=Math.floor(r),c=Math.floor(o),f=Math.floor(s),h=r-l,u=o-c,d=s-f,g=h*h*(3-2*h),x=u*u*(3-2*u),m=d*d*(3-2*d),p=(S,T,y)=>Q_(S+e*131,T-e*71,y+e*17),b=(S,T,y)=>S+(T-S)*y,_=b(p(l,c,f),p(l+1,c,f),g),E=b(p(l,c+1,f),p(l+1,c+1,f),g),M=b(p(l,c,f+1),p(l+1,c,f+1),g),v=b(p(l,c+1,f+1),p(l+1,c+1,f+1),g);return b(b(_,E,x),b(M,v,x),m)}}function ty(t,e="custom",n=9.75,i=320,a=-1,r=0,o=Dr,s=Wl(a,r)){const l=Mx(i),c=_x(e,n,l,vx(a,r),o,s),f=xa.get(c);if(f)return f;const h=Ax(t,c,l,a,r,o,s);if(h)for(const u of h.steps)u();return xa.get(c)??{R:0,mask:null,haze:null,cut:null,core:null,dark:null,light:null,glint:null,back:null,backSoft:null}}function Ax(t,e,n,i,a,r=Dr,o=Wl(i,a)){if(xa.has(e))return null;const s=Q=>{xa.size>=24&&xa.delete(xa.keys().next().value),xa.set(e,Q),oo.delete(e),hx()},{N:l}=t,c=n/Ft,f=(Q,ze,Ne)=>Tr(Q,l,(ze+it)/Ft*l-.5,(Ne+it)/Ft*l-.5),h=(Q,ze)=>f(t.sd,Q,ze),u=it+Qi,d=Math.round(n*Jn/Ft),g={R:n,mask:null,haze:null,cut:null,core:null,dark:null,light:null,glint:null,back:null,backSoft:null},x=zn(d),m=zn(d),p=zn(n),b=zn(d),_=zn(d),E=zn(d),M=x&&Dn(x,!1),v=m&&Dn(m,!1),S=p&&Dn(p,!1),T=b&&Dn(b,!1),y=_&&Dn(_,!1),w=E&&Dn(E,!1);if(!x||!m||!p||!b||!_||!E||!M||!v||!S||!T||!y||!w)return s(g),null;const A=J_(l*7919+17),C=Wo(3.4,21),R=Wo(22,9),P=Wo(13,57),{length:I,density:z,fuzz:B,clumps:F,curl:O}=r,k=r.gravity??Dr.gravity,G=Math.hypot(i,a)||1,ee=i/G,ne=a/G,J=[ee,ne,0],he=[0,0,1],H=[0,1,0],N=Sx(J,he,o.front),W=Ex([o.bx,o.by,0],he),fe=Ga([N[0],N[1],N[2]+1]),j=Ga([-.55*J[0]+.85*he[0]+.15*H[0],-.55*J[1]+.85*he[1]+.15*H[1],-.55*J[2]+.85*he[2]+.15*H[2]]);let ue=12;for(let Q=-it;Q<60;Q+=.5)if(h(50,Q)>.5){ue=Q+1;break}ue-=18;const de=50,ae=(Q,ze)=>{const Ne=h(Q-.8,ze)-h(Q+.8,ze),xe=h(Q,ze-.8)-h(Q,ze+.8),Re=Math.hypot(Ne,xe)||1;return[Ne/Re,xe/Re]},Ee=(Q,ze)=>{let Ne=Q-de,xe=ze-ue;const Re=Math.hypot(Ne,xe)||1;Ne/=Re,xe/=Re;const Ye=k*(1-.6*Math.exp(-Re/8));let Je=Ne*(1-.8*Ye),Ke=xe*(1-.8*Ye)+Ye;const Et=h(Q,ze);if(Et<5){const[Nt,kt]=ae(Q,ze),Lt=Math.max(0,-kt),xt=Nt*(1-k*Lt),bt=kt*(1-k*Lt)+1.2*k,Tt=Math.max(0,Math.min(1,1-Et/5))*.75;Je=Je*(1-Tt)+xt*Tt*1.6,Ke=Ke*(1-Tt)+bt*Tt*1.6}const gt=(C(Q,ze)-.5)*(.5+1.6*O)+(P(Q,ze)-.5)*(.6+O),pt=Math.cos(gt),ut=Math.sin(gt),Ze=Je*pt-Ke*ut,st=Je*ut+Ke*pt,Mt=Math.hypot(Ze,st)||1;return[Ze/Mt,st/Mt]},L=[],ve=(Q,ze,Ne)=>{for(let xe=0;xe<Q;xe+=ze)L.push(()=>Ne(xe,Math.min(Q,xe+ze)))},me=(Q,ze)=>f(t.h,Q,ze),we=(Q,ze)=>{const Ne=(me(Q+.6,ze)-me(Q-.6,ze))/1.2,xe=(me(Q,ze+.6)-me(Q,ze-.6))/(2*.6),Re=Math.hypot(Ne,xe);return[Re>1e-6?-Ne/Re:0,Re>1e-6?-xe/Re:0,Re/Math.sqrt(1+Re*Re)]},te=112,qe=Jn/te,Ue=new Float32Array(te*te),_e=new Float32Array(te*te),U=new Float32Array(te*te),D=new Float32Array(te*te),V=new Float32Array(te*te),pe=new Float32Array(te*te),q=new Float32Array(te*te),Z=new Float32Array(te*te),be=new Float32Array(te*te),Me=new Float32Array(te*te),Fe=new Float32Array(te*te),Pe=new Float32Array(te*te),Ae=new Float32Array(te*te);ve(te,28,(Q,ze)=>{for(let Ne=Q,xe=Q*te;Ne<ze;Ne++)for(let Re=0;Re<te;Re++,xe++){const Ye=(Re+.5)*qe-u,Je=(Ne+.5)*qe-u;let[Ke,Et]=Ee(Ye,Je);const[gt,pt,ut]=we(Ye,Je),Ze=ut*(.25+.5*(1-k))*(1-k*Math.max(0,-pt));Ke=Ke*(1-Ze)+gt*Ze,Et=Et*(1-Ze)+(pt+.35*k)*Ze;const st=Math.hypot(Ke,Et)||1;Ke/=st,Et/=st,Ue[xe]=Ke,_e[xe]=Et,U[xe]=ut;let Mt=gt*ut,Nt=pt*ut,kt=Math.sqrt(Math.max(0,1-ut*ut));const Lt=h(Ye,Je);if(Lt<2){const[jt,Kt]=ae(Ye,Je),Jt=Lt>=0?.7*(1-Lt/2):Math.min(1,.7-.2*Lt);Mt+=Jt*(jt-Mt),Nt+=Jt*(Kt-Nt),kt-=Jt*kt;const En=Math.hypot(Mt,Nt,kt)||1;Mt/=En,Nt/=En,kt/=En}D[xe]=Mt,V[xe]=Nt,pe[xe]=kt,q[xe]=wn(-3.5,-1.5,Lt),Ae[xe]=R(Ye,Je),Fe[xe]=Lt>0?me(Ye,Je):0;const xt=Math.sqrt(Mt*Mt+Nt*Nt),bt=xt>1e-4?Mt/xt:0,Tt=xt>1e-4?Nt/xt:0,Dt=Ke*bt+Et*Tt,zt=(1-Math.max(0,kt))*Dt;let Xt=vc*(Ke-zt*bt)+cm*xt*bt,Ut=vc*(Et-zt*Tt)+cm*xt*Tt;const Yt=wn(-.5,1.5,Lt);Xt=Ke+(Xt-Ke)*Yt,Ut=Et+(Ut-Et)*Yt;const en=Math.sqrt(Xt*Xt+Ut*Ut)||1;Z[xe]=Xt/en,be[xe]=Ut/en,Me[xe]=1+(Math.min(1,en)-1)*Yt}}),L.push(()=>{const Q=new Float32Array(te*te),ze=Float32Array.from(Fe);for(let Ne=0;Ne<3;Ne++){for(let xe=0,Re=0;xe<te;xe++)for(let Ye=0;Ye<te;Ye++,Re++){let Je=0;for(let Ke=-2;Ke<=2;Ke++)Je+=ze[xe*te+Math.min(te-1,Math.max(0,Ye+Ke))];Q[Re]=Je/5}for(let xe=0,Re=0;xe<te;xe++)for(let Ye=0;Ye<te;Ye++,Re++){let Je=0;for(let Ke=-2;Ke<=2;Ke++)Je+=Q[Math.min(te-1,Math.max(0,xe+Ke))*te+Ye];ze[Re]=Je/5}}for(let Ne=0,xe=0;Ne<te;Ne++)for(let Re=0;Re<te;Re++,xe++){const Ye=wn(.2,2,h((Re+.5)*qe-u,(Ne+.5)*qe-u)),Je=wn(.3,3.5,ze[xe]-Fe[xe])*Ye,Ke=wn(.15,.85,V[xe])*(1-pe[xe]);Pe[xe]=Math.min(1,Je+.45*Ke)*q[xe]}});const De=(Q,ze,Ne)=>Tr(Q,te,(ze+u)/qe-.5,(Ne+u)/qe-.5),Qe=(Q,ze)=>{const Ne=De(Z,Q,ze),xe=De(be,Q,ze),Re=Math.sqrt(Ne*Ne+xe*xe);return Re>1e-4?[Ne/Re,xe/Re]:[0,1]},ot=(Q,ze)=>{const Ne=De(Ue,Q,ze),xe=De(_e,Q,ze),Re=Math.sqrt(Ne*Ne+xe*xe);return Re>1e-4?[Ne/Re,xe/Re]:[0,1]},ke=d>>1,ct=ke/Jn,X=new Float32Array(ke*ke),He=new Float32Array(ke*ke),Se=(Q,ze,Ne)=>Tr(Q,ke,(ze+u)*ct-.5,(Ne+u)*ct-.5),Ie=Wo(.7+.35*I,61),Y=Wo(2.2+.6*I,67),oe=(.2+.5*B)*Math.min(1.8,I),Ce=(Q,ze)=>{const Ne=.3*Math.max(-1.6,Math.min(1.6,Se(X,Q,ze)))/1.6+.25*(Ie(Q,ze)-.5)*2.4+.45*(Y(Q,ze)-.5)*2.4;return oe*Math.max(-1,Math.min(1,Ne))},ce=(.8+.45*I)*(.65+.4*F),Te=1.5+1.6*I,Le=.32*ce*(.15+.85*F),$e=new Float32Array(d*d).fill(-.25*Le),We=new Int32Array(d*d).fill(-1),et=16,Ct=Math.sqrt(.6*ce*Te/R_/Eu),yt=Math.ceil(Jn/Ct),Ge=new Float32Array(yt*yt*et);let on=0;const Ot=.45-.2*k,je=ey(1.6*Te,79),Pt=Wo(9,73),Ht=1.5*Le*(.25+F);L.push(()=>{for(let Q=0;Q<yt;Q++)for(let ze=0;ze<yt;ze++){const Ne=(ze+A())*Ct-u,xe=(Q+A())*Ct-u,Re=A(),Ye=A(),Je=A(),Ke=A(),Et=A(),gt=A(),pt=A();let ut=De(D,Ne,xe),Ze=De(V,Ne,xe),st=De(pe,Ne,xe);const Mt=Math.hypot(ut,Ze,st)||1;ut/=Mt,Ze/=Mt,st/=Mt;const[Nt,kt]=ot(Ne,xe),Lt=(Re-.5)*(.2+.45*O),xt=Math.cos(Lt),bt=Math.sin(Lt),Tt=Nt*xt-kt*bt,Dt=Nt*bt+kt*xt,zt=Tt*ut+Dt*Ze;let Xt=Tt-zt*ut,Ut=Dt-zt*Ze,Yt=-zt*st,en=Math.hypot(Xt,Ut,Yt);en<.05&&(Xt=st*ut,Ut=st*Ze,Yt=st*st-1,en=Math.hypot(Xt,Ut,Yt)||1),Xt/=en,Ut/=en,Yt/=en;let jt=Ze*Yt-st*Ut,Kt=st*Xt-ut*Yt,Jt=ut*Ut-Ze*Xt;const En=Ot+.2*Ye,Gn=Math.cos(En),$n=Math.sin(En),Si=.8+.45*Pt(Ne,xe),Ei=ce*Si*(.8+.4*Je),ci=Te*Si*(.75+.5*Ke);let kn=(Xt*Gn+ut*$n)*ci*c,An=(Ut*Gn+Ze*$n)*ci*c,Tn=Math.hypot(kn,An);Tn<1.5?(kn=Tt,An=Dt,Tn=1.5):(kn/=Tn,An/=Tn);let Bn=-jt*An+Kt*kn;Bn<0&&(jt=-jt,Kt=-Kt,Jt=-Jt,Bn=-Bn);const ii=Math.max(.6,.5*Ei*c*Math.max(.15,Bn)),Ai=Tn/(ci*c)*(ii/(.5*Ei*c)),In=je(Ne,xe,me(Ne,xe));if(Et>Eu/Math.max(Eu,Ai)*(1-P_*F*(1-wn(.25,.65,In))))continue;const dn=on++*et;Ge[dn]=(Ne+u)*c,Ge[dn+1]=(xe+u)*c,Ge[dn+2]=kn,Ge[dn+3]=An,Ge[dn+4]=Tn,Ge[dn+5]=ii,Ge[dn+6]=.1*Le*gt+Ht*In,Ge[dn+7]=(pt-.5)*1.2*O,Ge[dn+8]=Xt,Ge[dn+9]=Ut,Ge[dn+10]=Yt,Ge[dn+11]=jt,Ge[dn+12]=Kt,Ge[dn+13]=Jt,Ge[dn+14]=ci,Ge[dn+15]=Ei}});const Zt=Q=>(Q<.25?4*Q:1)*(1-.5*Q),gn=6;for(let Q=0;Q<gn;Q++)L.push(()=>{const ze=Math.floor(on*Q/gn),Ne=Math.floor(on*(Q+1)/gn);for(let xe=ze;xe<Ne;xe++){const Re=xe*et,Ye=Ge[Re],Je=Ge[Re+1],Ke=Ge[Re+2],Et=Ge[Re+3],gt=Ge[Re+4],pt=Ge[Re+5],ut=Ge[Re+6],Ze=Ge[Re+7],st=pt*(1+Math.abs(Ze))+1,Mt=Ye+Ke*gt,Nt=Je+Et*gt,kt=Math.max(0,Math.floor(Math.min(Ye,Mt)-st)),Lt=Math.min(d-1,Math.ceil(Math.max(Ye,Mt)+st)),xt=Math.max(0,Math.floor(Math.min(Je,Nt)-st)),bt=Math.min(d-1,Math.ceil(Math.max(Je,Nt)+st)),Tt=1/gt,Dt=1/pt;for(let zt=xt;zt<=bt;zt++){const Xt=zt+.5-Je;for(let Ut=kt,Yt=zt*d+kt;Ut<=Lt;Ut++,Yt++){const en=Ut+.5-Ye,jt=(en*Ke+Xt*Et)*Tt;if(jt<=0||jt>=1)continue;const Kt=Au*Math.sqrt(jt)*(1-jt),Jt=(Xt*Ke-en*Et)*Dt-Ze*jt*jt;if(Jt>=Kt||Jt<=-Kt)continue;const En=Jt/Kt,Gn=ut+Le*Zt(jt)*(1-En*En);Gn>$e[Yt]&&($e[Yt]=Gn,We[Yt]=xe)}}}});const un=new Float32Array(d*d),It=Math.max(1,Math.round(.3*ce*c)),wt=new Float32Array(d),Rt=(Q,ze,Ne,xe,Re)=>{const Ye=Re===1?d:1,Je=1/(2*Ne+1),Ke=pt=>wt[pt<0?0:pt>=d?d-1:pt],Et=xe*Ye;for(let pt=0;pt<d;pt++)wt[pt]=Q[Et+pt*Re];let gt=0;for(let pt=-Ne;pt<=Ne;pt++)gt+=Ke(pt);for(let pt=0;pt<d;pt++)ze[Et+pt*Re]=gt*Je,gt+=Ke(pt+Ne+1)-Ke(pt-Ne)};L.push(()=>{for(let Q=0;Q<d;Q++)Rt($e,un,It,Q,1);for(let Q=0;Q<d;Q++)Rt(un,un,It,Q,1)}),L.push(()=>{for(let Q=0;Q<d;Q++)Rt(un,un,It,Q,d);for(let Q=0;Q<d;Q++)Rt(un,un,It,Q,d)}),L.push(()=>{for(let Q=0;Q<d;Q++)Rt($e,$e,1,Q,1);for(let Q=0;Q<d;Q++)Rt($e,$e,1,Q,d)});const Qt=new ImageData(d,d),ni=new ImageData(d,d),_i=new ImageData(d,d),$=new ImageData(d,d),se=new ImageData(d,d),ge=new Float32Array(d*d),re=new Float32Array(11),le=(Q,ze,Ne,xe,Re)=>{const Ye=Math.min(te-1,Math.max(0,(Q+u)/qe-.5)),Je=Math.min(te-1,Math.max(0,(ze+u)/qe-.5)),Ke=Math.min(te-2,Ye|0),Et=Math.min(te-2,Je|0),gt=Ye-Ke,pt=Je-Et,ut=Et*te+Ke,Ze=(1-gt)*(1-pt),st=gt*(1-pt),Mt=(1-gt)*pt,Nt=gt*pt,kt=dn=>dn[ut]*Ze+dn[ut+1]*st+dn[ut+te]*Mt+dn[ut+te+1]*Nt;let Lt=kt(D),xt=kt(V),bt=kt(pe);const Tt=Math.sqrt(Lt*Lt+xt*xt+bt*bt)||1;Lt/=Tt,xt/=Tt,bt/=Tt;const Dt=Lt*N[0]+xt*N[1]+bt*N[2];re[4]=Lt,re[5]=xt,re[6]=bt,re[7]=Dt,re[8]=kt(Pe);const zt=kt(q);if(re[9]=zt,re[10]=kt(Ae),zt<=0){re[0]=re[1]=re[3]=0,re[2]=.7;return}const Xt=wn(-.2,.5,Dt),Ut=Ne*Lt+xe*xt;let Yt=Ne-Ut*Lt,en=xe-Ut*xt,jt=-Ut*bt;const Kt=Math.sqrt(Yt*Yt+en*en+jt*jt);Kt>.001?(Yt/=Kt,en/=Kt,jt/=Kt):(Yt=0,en=0,jt=1);const Jt=Math.cos(Re),En=Math.sin(Re);Yt=Yt*Jt+Lt*En,en=en*Jt+xt*En,jt=jt*Jt+bt*En;const Gn=Yt*fe[0]+en*fe[1]+jt*fe[2],$n=Lt*fe[0]+xt*fe[1]+bt*fe[2],Si=Gn-.12*$n,Ei=Gn+.2*$n,ci=Math.max(0,1-Si*Si),kn=ci*ci,An=kn*kn,Tn=An*An,Bn=Tn*Tn,ii=Math.max(0,1-Ei*Ei),Ai=ii*ii;re[0]=Xt*(.85*Bn*Bn*An+.15*Ai*Ai),re[0]*=(.4+.6*(1-wn(.35,.85,Dt)))*zt;const In=Math.sqrt(Math.max(0,1-jt*jt));re[1]=wn(-.3,.6,Lt*W[0]+xt*W[1]+bt*W[2])*Math.pow(1-bt,1.6)*(.4+.6*In)*(1-.6*Math.max(0,xt))*zt,re[3]=wn(-.5,.75,Lt*W[0]+xt*W[1]+bt*W[2])*Math.pow(1-bt,.85)*(1-.6*Math.max(0,xt))*zt,re[2]=Xt*zt+.7*(1-zt)};L.push(()=>{for(let Q=0,ze=0;Q<d;Q++)for(let Ne=0;Ne<d;Ne++,ze++){const xe=o0(Ne+911,Q+37);ge[ze]=xe*xe*xe}});const Be=.25,Ve=Math.sqrt(1/7-1/16),at=Math.max(1,Math.round((.35+.4*I)*c)),nt=[],ft=new Float32Array(2*at+1),vt=new Float32Array(2*at+1);for(let Q=0;Q<=2*at;Q++){const ze=new Float32Array(Q+1);let Ne=0,xe=0;for(let Re=0;Re<=Q;Re++){const Ye=Q?Re/Q:0,Je=Ye<=Mc?1:(1-Ye)/(1-Mc);ze[Re]=1-k_*Ye,Ne+=ze[Re]*Je*Be,xe+=ze[Re]*ze[Re]*(Je/7-Be*Be*Je*Je)}nt.push(ze),ft[Q]=Ne,vt[Q]=Math.sqrt(Math.max(1e-6,xe))}const mt=.12*(n>=512?1:n>=320?.75:.4)*Math.min(1.4,.55+.35*z),$t=Math.max(1,1.5*ce*c),Xe=Math.max(1,Math.min(5,Math.round($t))),lt=new Int32Array(Xe),dt=new Int32Array(Xe),At=new Float32Array(Xe);for(let Q=0;Q<Xe;Q++){const ze=(Q+1)/Xe*$t;lt[Q]=Math.round(ee*ze),dt[Q]=Math.round(ne*ze),At[Q]=Math.hypot(lt[Q],dt[Q])/c}const rt=T0(1.35),Vt=T0(1/2.2),St=Q=>{const ze=(Q+sm)/(1+sm);return ze<=0?0:ze>=1?1:rt[ze*_s|0]},sn=n>=512?1:n>=320?.8:.55,hn=new Float32Array(4),xn=(Q,ze,Ne,xe,Re)=>{if(Re<0){const[zt,Xt]=Qe(Ne,xe);hn[0]=zt,hn[1]=Xt,hn[2]=.5,hn[3]=0;return}const Ye=Re*et,Je=Ge[Ye+2],Ke=Ge[Ye+3],Et=Ge[Ye+4],gt=Ge[Ye+5],pt=Ge[Ye+7],ut=Q+.5-Ge[Ye],Ze=ze+.5-Ge[Ye+1],st=Math.min(.995,Math.max(.005,(ut*Je+Ze*Ke)/Et)),Mt=Math.sqrt(st),Nt=Au*Mt*(1-st),kt=Au*(.5*(1-st)/Mt-Mt),Lt=Math.max(-1,Math.min(1,((Ze*Je-ut*Ke)/gt-pt*st*st)/Nt)),xt=Math.max(-1.2,Math.min(1.2,Lt*kt+2*pt*st)),bt=Et*Je-xt*gt*Ke,Tt=Et*Ke+xt*gt*Je,Dt=Math.sqrt(bt*bt+Tt*Tt)||1;hn[0]=bt/Dt,hn[1]=Tt/Dt,hn[2]=st,hn[3]=Zt(st)*(1-Lt*Lt)},Sn=new Float32Array(d*d);ve(d,32,(Q,ze)=>{for(let Ne=Q;Ne<ze;Ne++){const xe=(Ne+.5)/c-u;for(let Re=0,Ye=Ne*d;Re<d;Re++,Ye++){const Je=(Re+.5)/c-u;xn(Re,Ne,Je,xe,We[Ye]);const Ke=hn[0],Et=hn[1],gt=Math.min(te-1,Math.max(0,(Je+u)/qe-.5)),pt=Math.min(te-1,Math.max(0,(xe+u)/qe-.5)),ut=Math.min(te-2,gt|0),Ze=Math.min(te-2,pt|0),st=gt-ut,Mt=pt-Ze,Nt=Ze*te+ut,kt=(U[Nt]*(1-st)+U[Nt+1]*st)*(1-Mt)+(U[Nt+te]*(1-st)+U[Nt+te+1]*st)*Mt,Lt=(Me[Nt]*(1-st)+Me[Nt+1]*st)*(1-Mt)+(Me[Nt+te]*(1-st)+Me[Nt+te+1]*st)*Mt,xt=2*Math.max(1,Math.min(at,Math.round(at*(.5+.5*kt)*Lt/vc))),bt=nt[xt];let Tt=0,Dt=0;for(let Ut=0;Ut<=xt;Ut++){const Yt=Math.round(Re-Ke*Ut),en=Math.round(Ne-Et*Ut);if(Yt<0||en<0||Yt>=d||en>=d){Tt+=ft[xt]/(xt+1);continue}const jt=ge[en*d+Yt],Kt=jt*53.7,Jt=xt*(Mc+(1-Mc)*(Kt-Math.floor(Kt)));Ut<=Jt&&(Tt+=jt*bt[Ut],Dt+=jt*bt[Ut]*Ut/(Jt||1))}const zt=(Tt-ft[xt])/vt[xt],Xt=Tt>1e-4?Dt/Tt:.5;Sn[Ye]=zt+B_*Math.min(2.5,Math.max(0,zt))*(Xt-.45)}}});let nn=0,_n=0;ve(d,16,(Q,ze)=>{const Ne=Qt.data,xe=ni.data,Re=_i.data,Ye=$.data,Je=se.data;for(let Ke=Q;Ke<ze;Ke++){const Et=(Ke+.5)/c-u;for(let gt=0;gt<d;gt++){const pt=(gt+.5)/c-u,ut=Ke*d+gt,Ze=We[ut],st=Ze*et;xn(gt,Ke,pt,Et,Ze);const Mt=hn[0],Nt=hn[1],kt=hn[2],Lt=hn[3];le(pt,Et,Mt,Nt,.25+.2*Lt);const xt=re[4],bt=re[5],Tt=re[6],Dt=re[7],zt=gt>0?ut-1:ut,Xt=gt<d-1?ut+1:ut,Ut=Ke>0?ut-d:ut,Yt=Ke<d-1?ut+d:ut,en=($e[Xt]-$e[zt])*c/(Xt-zt||1),jt=($e[Yt]-$e[Ut])*c*d/(Yt-Ut||1),Kt=Math.sqrt(xt*xt+bt*bt);let Jt=1,En=0,Gn=0,$n=1,Si=0;Kt>.001&&(Jt=-bt/Kt,En=xt/Kt,Gn=-Tt*xt/Kt,$n=-Tt*bt/Kt,Si=Kt);const Ei=Math.max(-1.5,Math.min(1.5,en*Jt+jt*En)),ci=Math.max(-1.5,Math.min(1.5,en*Gn+jt*$n));let kn=xt-Ei*Jt-ci*Gn,An=bt-Ei*En-ci*$n,Tn=Tt-ci*Si;const Bn=Math.sqrt(kn*kn+An*An+Tn*Tn)||1;kn/=Bn,An/=Bn,Tn/=Bn;let ii=1;if(Ze>=0){const hi=Ge[st+8],fa=Ge[st+9],zi=Ge[st+10],Ui=.9*hi+.44*xt,da=.9*fa+.44*bt,pa=.9*zi+.44*Tt,ar=(Ui*N[0]+da*N[1]+pa*N[2])/(Math.sqrt(Ui*Ui+da*da+pa*pa)||1);ii=1-lm+lm*Math.min(1.2,Math.sqrt(Math.max(0,1-ar*ar))/.85)}const Ai=kn*N[0]+An*N[1]+Tn*N[2],In=$e[ut];let dn=1;if(Dt>-.25){const hi=Math.min(.97,Math.max(.05,Dt)),fa=hi/Math.sqrt(1-hi*hi);let zi=0;for(let Ui=0;Ui<Xe;Ui++){const da=gt+lt[Ui],pa=Ke+dt[Ui];if(da<0||pa<0||da>=d||pa>=d)break;const ar=$e[pa*d+da]-In-At[Ui]*fa;ar>zi&&(zi=ar)}dn=1-D_*wn(0,.35*Le,zi)}let nr=1-I_*wn(0,.6*Le,un[ut]-In);Ze>=0&&(nr*=1-L_*(1-wn(0,.35,kt)));const Vi=rm+om*Math.max(0,kn*j[0]+An*j[1]+Tn*j[2]),Fi=rm+om*Math.max(0,xt*j[0]+bt*j[1]+Tt*j[2]);let Ln=nr*(Vi+St(Ai)*dn*ii)*F_/(Fi+St(Dt));Ze>=0&&(Ln*=(1+.15*kt*kt)*(1+.08*(o0(Ze,5)-.5)));const ca=re[8];Ln*=1-N_*ca*(.6+.4*wn(0,.6*Le,un[ut]-In)),Ln=1+(Ln-1)*sn;const Ti=re[9],Xi=(Fi+St(Dt))/$_,ua=(Xi>=1?1:Vt[Xi*_s|0])*Ti+.75*(1-Ti);let Yi=Math.sqrt(Ln>2.4?2.4:Ln);Yi>1&&(Yi=1+(Yi-1)/(1+2.5*ua*(Yi-1)));const kr=Sn[ut];let tc=0;if(Dt>0){const hi=N[0]-Dt*xt,fa=N[1]-Dt*bt,zi=Math.sqrt(1-Dt*Dt),Ui=zi>.001?H_*c*Math.min(3,zi/Math.max(.2,Dt))/zi:0,da=Math.min(d-1.001,Math.max(0,gt+hi*Ui)),pa=Math.min(d-1.001,Math.max(0,Ke+fa*Ui)),ar=da|0,wd=pa|0,nc=da-ar,Sd=pa-wd,ic=wd*d+ar,T2=(Sn[ic]*(1-nc)+Sn[ic+1]*nc)*(1-Sd)+(Sn[ic+d]*(1-nc)+Sn[ic+d+1]*nc)*Sd;tc=Math.max(0,T2-Math.max(0,kr))*wn(0,.3,Dt)}let Br=Yi*(1+mt*(kr*(.45+.55*re[2])*(.75+.5*kt)-W_*tc))+.04*(re[10]-.5)+U_*sn*Ti;const ti=Math.min(pt+u,Jn-u-pt,Et+u,Jn-u-Et),G0=ti>=8?1:ti<=0?0:ti/8*(ti/8)*(3-2*ti/8);Br=1+(Br-1)*G0;const Vn=ut*4;Br<1?Ne[Vn+3]=Math.round(255*Math.min(1,(1-Br)*ua/Math.max(.4,ua-wx))):(xe[Vn]=xe[Vn+1]=xe[Vn+2]=255,xe[Vn+3]=Math.round(255*Math.min(1,z_*(um-1)*ua/(um-ua)*(Br-1)*(1-.7*ca))));const ha=Math.max(-2,Math.min(2,4*(Yi-1))),ln=gt>>1,Mn=Ke>>1;if(ln<ke&&Mn<ke){const hi=Mn*ke+ln;X[hi]+=.25*In,He[hi]+=.25*ha}const ui=wn(-.4,1,ha)*Math.max(0,Math.min(1.4,.65+.25*kr));Re[Vn]=Re[Vn+1]=Re[Vn+2]=Ye[Vn]=Ye[Vn+1]=Ye[Vn+2]=255,Re[Vn+3]=Math.round(255*Math.min(1,re[0]*ui)),Ye[Vn+3]=Math.round(255*Math.min(1,re[1]*Math.max(0,Math.min(1.6,.5+.4*kr))));const ir=Math.max(.55,Math.min(1.3,.85+.15*kr+.12*ha));Je[Vn]=Je[Vn+1]=Je[Vn+2]=255,Je[Vn+3]=Math.round(255*Math.min(1,.85*re[3]*ir))}}}),L.push(()=>{const Q=ke*ke;for(let xe=0;xe<Q;xe++)nn+=X[xe],_n+=X[xe]*X[xe];const ze=nn/Q,Ne=Math.sqrt(Math.max(1e-9,_n/Q-ze*ze));for(let xe=0;xe<Q;xe++)X[xe]=Math.max(-2.5,Math.min(2.5,(X[xe]-ze)/Ne))}),L.push(()=>{M.putImageData(Qt,0,0),v.putImageData(ni,0,0),T.putImageData(_i,0,0),w.putImageData(se,0,0),y.putImageData($,0,0);for(const Q of[M,v,T,y])Q.setTransform(1,0,0,1,Qi*c,Qi*c),Q.lineCap="round",Q.lineJoin="round"});const vn=16,fn=Jn*Jn,yn=n>=512?1:n>=320?.45:0,Gi=[{count:.12,len:1.2,vary:1,endOn:.6,width:.09,spread:30,alpha:.4,deep:1,lift:.25,light:.46,dark:.34,bend:.93,clump:[1,0],clumpW:0,shadow:0,shadowW:1,over:0,crowd:!1,short:0},{count:.4*yn,len:.9,vary:1.2,endOn:.35,width:.13,spread:100,alpha:.26,deep:.2,lift:.18,light:.55,dark:.06,bend:1.2,clump:[1,Math.round(1+2*F)],clumpW:.08+.07*F,shadow:.25,shadowW:2,over:.25,crowd:!0,short:1}],ei=Q=>Math.min(vn-1,Math.max(0,Math.round((Math.max(-1,Math.min(1,Q))+1)/2*(vn-1)))),oi=6,yi=Q=>Math.min(oi-1,Q*oi|0),Fo=4,si=new Float32Array(Fo+1),wi=new Float32Array(Fo+1);for(const Q of Gi){if(Q.count<=0)continue;const ze=Q.clump[0]+.5*Q.clump[1],Ne=Math.max(1,Math.ceil(fn*Q.count*z*(Q.crowd?2:1)*(.5+.5*ze)/9e3));for(let xe=0;xe<Ne;xe++)L.push(()=>{const Re=[],Ye=[],Je=[],Ke=[];for(let Ze=0;Ze<vn;Ze++)Re.push(new Path2D);for(let Ze=0;Ze<oi;Ze++)Ye.push(new Path2D),Je.push(new Path2D);for(let Ze=0;Ze<3;Ze++)Ke.push(new Path2D);const Et=new Path2D,gt=Math.round(fn*Q.count*z*(Q.crowd?2:1)/Ne);for(let Ze=0;Ze<gt;Ze++){const st=A()*Jn-u,Mt=A()*Jn-u,Nt=A(),kt=A(),Lt=A(),xt=A(),bt=A(),Tt=A();if(Tt*8>Math.min(st+u,Jn-u-st,Mt+u,Jn-u-Mt)||Q.crowd&&Tt>(h(st,Mt)>0?.5/Math.max(.25,De(pe,st,Mt)):.5))continue;const[Dt,zt]=Qe(st,Mt),Xt=De(U,st,Mt),Ut=De(Me,st,Mt)/vc,Yt=(kt-.5)*(.6+.8*O)*(1-.5*Xt),en=Math.cos(Yt),jt=Math.sin(Yt),Kt=Dt*en-zt*jt,Jt=Dt*jt+zt*en,En=Lt<.1?1.35+.6*xt:1,Gn=(Q.len+Q.vary*xt*xt)*c*I*En*Ut*(1-Q.endOn+1.25*Q.endOn*Xt);le(st,Mt,Kt,Jt,.1+.5*o0(Ze,7+xe));let $n=.22*Se(X,st,Mt)+.3*Se(He,st,Mt);const Si=Nt<Q.light*(.4+.6*re[2]);Si?$n+=.2+.28*bt:Nt<Q.light+Q.dark&&($n-=.2+.28*bt),$n+=Q.lift,$n+=.45*(re[2]-.5)-.35*re[8],$n>0&&($n*=.3+.7*re[2]);const Ei=.15*(1-re[2]),ci=(st+it)*c,kn=(Mt+it)*c,An=(A()-.5)*Q.bend*O*Gn,Tn=bt<.3?-.6*An:An*(.6+.8*A()),Bn=Q.clump[0]+(A()*(Q.clump[1]+1)|0),ii=Q.clumpW*c*Math.min(1.5,I);for(let Ai=0;Ai<Bn;Ai++){const In=Bn>1?A()-.5:0,dn=Bn>1?.7+.3*A():1,nr=Bn>1?(A()-.5)*.3:0,Vi=ci-Jt*In*ii,Fi=kn+Kt*In*ii,Ln=Gn*dn,ca=An+nr*Ln,Ti=Tn+nr*Ln-In*ii*.7,Xi=Vi+Kt*Ln*.33-Jt*ca,ua=Fi+Jt*Ln*.33+Kt*ca,Yi=Vi+Kt*Ln*.67-Jt*Ti,kr=Fi+Jt*Ln*.67+Kt*Ti,tc=Vi+Kt*Ln-Jt*(Tn-In*ii*.75),Br=Fi+Jt*Ln+Kt*(Tn-In*ii*.75),ti=Ln<4?2:Ln<10?3:Fo;for(let ln=0;ln<=ti;ln++){const Mn=ln/ti,ui=1-Mn,ir=ui*ui*ui,hi=3*ui*ui*Mn,fa=3*ui*Mn*Mn,zi=Mn*Mn*Mn;si[ln]=ir*Vi+hi*Xi+fa*Yi+zi*tc,wi[ln]=ir*Fi+hi*ua+fa*kr+zi*Br}const G0=$n+(Bn>1?(A()-.5)*.25:0),Vn=.3+.15*re[2];for(let ln=0;ln<ti;ln++){const Mn=Re[ei(G0-.3-Ei*(1-ln/ti)+Vn*(ln+.5)/ti)];Mn.moveTo(si[ln],wi[ln]),Mn.lineTo(si[ln+1],wi[ln+1])}if(Si&&Q.over>0){Et.moveTo(si[1],wi[1]);for(let ln=2;ln<=ti;ln++)Et.lineTo(si[ln],wi[ln])}if(Ai===0&&Q.shadow>0&&re[2]>.25&&$n>-.2){const ln=Q.shadow*c*Math.min(1,I),Mn=Ke[Math.min(2,(re[2]-.25)*4|0)];for(let ui=1;ui<=ti;ui++){const ir=ui/ti,hi=-ee*ln*ir,fa=-ne*ln*ir+.3*ln*ir;ui===1&&Mn.moveTo(si[0],wi[0]),Mn.lineTo(si[ui]+hi,wi[ui]+fa)}}const ha=ti>>1;if(re[0]>.3){const ln=Ye[yi(re[0])];ln.moveTo(si[ha],wi[ha]);for(let Mn=ha+1;Mn<=ti;Mn++)ln.lineTo(si[Mn],wi[Mn])}if(re[1]>.1){const ln=Je[yi(re[1])];ln.moveTo(si[ha],wi[ha]);for(let Mn=ha+1;Mn<=ti;Mn++)ln.lineTo(si[Mn],wi[Mn])}}}const pt=Math.min(1,I)**Q.short,ut=Math.max(.45,Q.width*c*(.5+.5*pt));if(Q.over>0&&(M.globalCompositeOperation="destination-out",M.lineWidth=ut,M.globalAlpha=Q.over*pt,M.strokeStyle="#000",M.stroke(Et),M.globalCompositeOperation="source-over"),Q.shadow>0){M.lineWidth=ut*Q.shadowW,M.strokeStyle="#000";for(let Ze=0;Ze<3;Ze++)M.globalAlpha=.03*(Ze+1)*pt,M.stroke(Ke[Ze])}for(let Ze=0;Ze<vn;Ze++){const st=Ca+(Ze/(vn-1)*2-1)*Q.spread,Mt=st<Ca?M:v;Mt.lineWidth=ut,Mt.globalAlpha=Q.alpha*pt*(st<Ca?Q.deep*(1-st/Ca):(st-Ca)/(255-Ca)),Mt.strokeStyle=st<Ca?"#000":"#fff",Mt.stroke(Re[Ze])}for(const Ze of[T,y])Ze.lineWidth=ut,Ze.strokeStyle="#fff";for(let Ze=0;Ze<oi;Ze++)T.globalAlpha=.4*(Ze+.5)/oi,y.globalAlpha=.8*(Ze+.5)/oi,T.stroke(Ye[Ze]),y.stroke(Je[Ze]);M.globalAlpha=v.globalAlpha=T.globalAlpha=y.globalAlpha=1})}const Ur=new Path2D,Hs=[];for(let Q=0;Q<oi;Q++)Hs.push(new Path2D);const Ea=[],sa=Ft/l;let er=0;const Ws=2;for(let Q=0;Q<Ws;Q++)L.push(()=>{if(Q===0){for(let Ne=0;Ne<l*l;Ne++)t.sd[Ne]>-1.6&&t.sd[Ne]<2.2&&Ea.push(Ne);er=Math.round(Ea.length*sa*sa*24*(.3+1.4*B)*Math.sqrt(z)*(.5+.5*Math.min(1,n/512))*(1-.55*yn))}const ze=Math.floor(er*(Q+1)/Ws);for(let Ne=Math.floor(er*Q/Ws);Ne<ze;Ne++){const xe=Ea[A()*Ea.length|0],Re=(xe%l+A())*sa-it,Ye=((xe/l|0)+A())*sa-it,Je=h(Re,Ye);if(Je<-1.2||Je>1.8)continue;const Ke=Je+Ce(Re,Ye);if(Ke<-.2||Ke>1.2)continue;const[Et,gt]=Ee(Re,Ye),[pt,ut]=ae(Re,Ye),Ze=(A()-.5)*1.1,st=Math.cos(Ze),Mt=Math.sin(Ze);let Nt=Et*st-gt*Mt,kt=Et*Mt+gt*st;const Lt=A(),xt=1+.5*k*Math.max(0,ut)-.35*k*Math.max(0,-ut);let bt=(.3+1.5*Lt*Lt*Lt)*c*I*(.5+B)*xt;const Tt=(Re+it)*c,Dt=(Ye+it)*c;let zt=(A()-.5)*1.17*O*bt;ut<-.3&&A()<.06*(.3+B)&&(Nt=pt*.8+(A()-.5)*.6,kt=ut*.8,bt*=1.2,zt=(A()<.5?-1:1)*(.25+.3*k)*bt),Ur.moveTo(Tt,Dt);const Xt=Tt+Nt*bt*.5-kt*zt,Ut=Dt+kt*bt*.5+Nt*zt,Yt=Tt+Nt*bt,en=Dt+kt*bt+k*bt*.25;if(Ur.quadraticCurveTo(Xt,Ut,Yt,en),le(Re,Ye,Nt,kt,.3),re[1]>.08){const jt=Hs[yi(re[1])];jt.moveTo(Tt,Dt),jt.quadraticCurveTo(Xt,Ut,Yt,en)}}});const la=new Path2D,Gs=[new Path2D,new Path2D,new Path2D],li=[];for(let Q=0;Q<oi;Q++)li.push(new Path2D);L.push(()=>{const Q=Ea.length*sa*sa,ze=Q/3.8,Ne=Math.round(ze/(.45+.3*I)*(.3+.8*B)*Math.sqrt(z)*(1+.6*yn));for(let xe=0,Re=0;xe<Ne&&Re<6*Ne;Re++){const Ye=Ea[A()*Ea.length|0],Je=(Ye%l+A())*sa-it,Ke=((Ye/l|0)+A())*sa-it,Et=A(),gt=A(),pt=A(),ut=A(),Ze=h(Je,Ke);if(Ze<-.5||Ze>1.6)continue;const st=Ze+Ce(Je,Ke);if(st<0||st>.9||Se(X,Je,Ke)<-.4+.8*ut)continue;xe++;const[Mt,Nt]=Ee(Je,Ke),[kt,Lt]=ae(Je,Ke),xt=(Et-.5)*.8*(.5+O),bt=Math.cos(xt),Tt=Math.sin(xt);let Dt=.75*kt+.25*Mt,zt=.75*Lt+.25*Nt,Xt=.55*Mt+.45*kt,Ut=.55*Nt+.45*Lt+.35*k;const Yt=Math.hypot(Dt,zt)||1,en=Math.hypot(Xt,Ut)||1;[Dt,zt]=[(Dt*bt-zt*Tt)/Yt,(Dt*Tt+zt*bt)/Yt],[Xt,Ut]=[(Xt*bt-Ut*Tt)/en,(Xt*Tt+Ut*bt)/en];const jt=1+.5*k*Math.max(0,Lt)-.35*k*Math.max(0,-Lt),Kt=(.5+1.1*gt*gt)*c*I*(.5+B)*jt,Jt=(.3+.35*pt)*c*Math.min(1.5,I),En=(Je+it)*c,Gn=(Ke+it)*c,$n=En+Dt*Kt*.5,Si=Gn+zt*Kt*.5,Ei=En+(Dt*.4+Xt*.6)*Kt,ci=Gn+(zt*.4+Ut*.6)*Kt,kn=-zt,An=Dt;le(Je,Ke,Xt,Ut,.4);const Tn=re[1]>.08?li[yi(re[1])]:null,Bn=Gs[Math.min(2,re[2]*3|0)],ii=4+(A()*5|0);for(let Ai=0;Ai<ii;Ai++){const In=A()-.5,dn=.7+.3*A(),nr=(A()-.5)*.35,Vi=En+kn*In*Jt,Fi=Gn+An*In*Jt,Ln=$n+kn*In*Jt*.6,ca=Si+An*In*Jt*.6,Ti=Vi+(Ei+kn*(In*.25+nr)*Jt-Vi)*dn,Xi=Fi+(ci+An*(In*.25+nr)*Jt-Fi)*dn;la.moveTo(Vi,Fi),la.quadraticCurveTo(Ln,ca,Ti,Xi);const ua=.25*Vi+.5*Ln+.25*Ti,Yi=.25*Fi+.5*ca+.25*Xi;Bn.moveTo(ua,Yi),Bn.quadraticCurveTo(.5*(Ln+Ti),.5*(ca+Xi),Ti,Xi),Tn&&(Tn.moveTo(ua,Yi),Tn.quadraticCurveTo(.5*(Ln+Ti),.5*(ca+Xi),Ti,Xi))}}}),L.push(()=>{const Q=Math.max(.4,.11*c);M.lineWidth=v.lineWidth=y.lineWidth=Q,M.globalCompositeOperation="destination-out",M.globalAlpha=.6,M.strokeStyle="#000",v.strokeStyle="#fff";for(let ze=0;ze<3;ze++)M.stroke(Gs[ze]),v.globalAlpha=.08+.11*ze,v.stroke(Gs[ze]);M.globalCompositeOperation="source-over",y.strokeStyle="#fff";for(let ze=0;ze<oi;ze++)y.globalAlpha=(ze+.5)/oi,y.stroke(li[ze]);M.globalAlpha=v.globalAlpha=y.globalAlpha=1,v.lineWidth=M.lineWidth=Math.max(.35,.08*c),v.globalAlpha=.5*((140-Ca)/(255-Ca)),v.strokeStyle="#fff",v.stroke(Ur),v.globalAlpha=1,y.lineWidth=v.lineWidth,y.strokeStyle="#fff";for(let ze=0;ze<oi;ze++)y.globalAlpha=(ze+.5)/oi,y.stroke(Hs[ze]);y.globalAlpha=1,M.globalCompositeOperation="destination-out",M.globalAlpha=.7,M.strokeStyle="#000",M.stroke(Ur),M.globalAlpha=1,M.globalCompositeOperation="source-over"});const Nr=new ImageData(n,n),zo=new ImageData(n,n),Zl=new ImageData(n,n),Or=.5+1.2*B,Jl=Or+oe,Uo=G_*(1-.6*yn),Ql=V_*(1+1.2*yn),tr=Math.max(1,Math.round(X_*I*c)),$r=tr+1,ec=Ve*Math.sqrt(1+tr*(2*tr+1)/(3*$r))/$r,No=Math.round(Qi*c);return ve(n,64,(Q,ze)=>{const Ne=Nr.data,xe=zo.data,Re=Zl.data;for(let Ye=Q;Ye<ze;Ye++){const Je=(Ye+.5)/c-it;for(let Ke=0;Ke<n;Ke++){const Et=(Ke+.5)/c-it,gt=(Ye*n+Ke)*4;Ne[gt]=Ne[gt+1]=Ne[gt+2]=xe[gt]=xe[gt+1]=xe[gt+2]=255;const pt=h(Et,Je);if(pt>=oe+Tu){Ne[gt+3]=Re[gt+3]=255;continue}const ut=pt<=-Jl?pt:pt+Ce(Et,Je);if(ut>=0){Ne[gt+3]=255,Re[gt+3]=Math.round(255*wn(.25*Tu,Tu,ut));continue}const Ze=Math.min(1,-ut/(2*Or)),st=De(D,Et,Je)*W[0]+De(V,Et,Je)*W[1];if(xe[gt+3]=Math.round(255*Y_*Ze*Ze*(3-2*Ze)*(.45+.55*wn(-.3,.6,st))),ut<=-Or)continue;const Mt=1+ut/Or,Nt=Mt*Mt*(3-2*Mt),[kt,Lt]=ot(Et,Je);let xt=0;for(let Tt=-tr;Tt<=tr;Tt++){const Dt=Math.round(Ke+No+kt*Tt),zt=Math.round(Ye+No+Lt*Tt);xt+=(Dt<0||zt<0||Dt>=d||zt>=d?Be:ge[zt*d+Dt])*(1-Math.abs(Tt)/$r)}const bt=(xt/$r-Be)/ec;Ne[gt+3]=Math.round(255*Math.max(0,Math.min(1,Nt*(Uo+Ql*bt))))}}}),L.push(()=>{const Q=zn(n),ze=Q&&Dn(Q,!1);Q&&ze&&(ze.putImageData(zo,0,0),g.haze=Q),S.putImageData(Nr,0,0),S.lineCap="round",S.lineWidth=Math.max(.35,.08*c),S.strokeStyle="rgba(255,255,255,0.45)",S.stroke(Ur),S.lineWidth=Math.max(.4,.11*c),S.strokeStyle="rgba(255,255,255,0.8)",S.stroke(la);const Ne=zn(n),xe=Ne&&Dn(Ne,!1);Ne&&xe&&(xe.putImageData(Zl,0,0),g.core=Ne),g.dark=x,g.light=m,g.glint=b,g.back=_,g.backSoft=E,g.mask=p,s(g)}),{steps:L}}function ny(t){if(t.cut||!t.mask)return t.cut;const e=t.mask.width,n=zn(e),i=n&&Dn(n,!1);return n&&i&&(i.fillRect(0,0,e,e),i.globalCompositeOperation="destination-out",i.drawImage(t.mask,0,0),t.cut=n),t.cut}function iy(t,e,n,i){const{V:a,U:r,D:o}=n,s=i.vivid??0,l=[0,0,0],c=Sx(r,a,i.front),f=Ex(n.K,a),h=Math.max(.03,.2-.15*i.shadow),u=Math.max(.04,.24-.13*i.shadow),d=Math.min(.7,.05+.12*i.spread),g=1.3,x=.34*Math.min(1.6,i.shadow/.35),m=Ga([-.55*r[0]+.85*a[0]+.15*o[0],-.55*r[1]+.85*a[1]+.15*o[1],-.55*r[2]+.85*a[2]+.15*o[2]]),p=i.sheen??0,b=Math.min(1,Math.max(0,i.backSoft??R0)),_=.16*i.highlight*p,E=1.15*i.rim*p,M=.2+.25*s,v=Math.max(e[0],e[1],e[2],.02),S=[e[0]/v,e[1]/v,e[2]/v],T=[S[0],S[1],S[2]],y=.45*(1-s),w=.25*(1-s),A=[y+(1-y)*S[0],y+(1-y)*S[1],y+(1-y)*S[2]],C=[w+(1-w)*S[0],w+(1-w)*S[1],w+(1-w)*S[2]],R=O=>.2126*O[0]+.7152*O[1]+.0722*O[2],P=1.8+2.2*s,I=[Math.pow(e[0],P),Math.pow(e[1],P),Math.pow(e[2],P)],z=R(e)/Math.max(1e-4,R(I)),B=[I[0]*z,I[1]*z,I[2]*z],F=[S[0]*S[0]*e[0],S[1]*S[1]*e[1],S[2]*S[2]*e[2]];for(let O=0;O<Qn;O++)for(let k=0;k<Qn;k++){let G=k/(Qn-1)*2-1,ee=O/(Qn-1)*2-1,ne=G*G+ee*ee;if(ne>1.14)continue;if(ne>1){const be=1/Math.sqrt(ne);G*=be,ee*=be,ne=1}const J=Math.sqrt(1-ne),he=G*c[0]+ee*c[1]+J*c[2],H=Math.max(0,G*a[0]+ee*a[1]+J*a[2]),N=G*o[0]+ee*o[1]+J*o[2],W=G*f[0]+ee*f[1]+J*f[2],fe=1-H,j=d+(.45-d)*fe*fe;let ue=Math.min(1,Math.max(0,(he+j)/(1+j)));ue=Math.pow(ue,1.35);const de=u*Math.max(0,G*m[0]+ee*m[1]+J*m[2]),ae=1-x*Math.max(0,N)*(.6+.4*fe),Ee=(h+g*ue+de)*ae,L=Math.min(1,Math.max(0,1-Ee)),ve=Math.max(0,1-(he+.08)*(he+.08)/.18),me=M*ve*ve*ae,we=Math.min(1,Math.max(0,(he+.2)/.8)),te=_*fe*fe*we,qe=wn(-.3,.6,W),Ue=wn(.18-.12*b,.62+.18*b,fe),_e=E*Ue*Math.sqrt(Ue)*(.3+.7*qe)*(1-.7*Math.max(0,N)),U=Ue*Ue*Math.sqrt(Ue)*(1-.5*b),D=(O*Qn+k)*3;let V=0,pe=0,q=0;for(let be=0;be<3;be++){const Me=(e[be]+(B[be]-e[be])*L*.9)*Ee+me*F[be]+te*C[be]+_e*(T[be]+(A[be]-T[be])*U);be===0?V=Me:be===1?pe=Me:q=Me}const Z=Math.max(V,pe,q);if(Z>.8){const be=(.8+.2*(1-Math.exp(-(Z-.8)/.2)))/Z;V*=be,pe*=be,q*=be}s>0&&(l[0]=V,l[1]=pe,l[2]=q,xx(l,s,1),[V,pe,q]=l),t[D]=pi(V),t[D+1]=pi(pe),t[D+2]=pi(q)}}const ay=.28,ry=.42,fm=new WeakMap;function oy(t,e,n=0){const i=t.dark;if(!i)return null;let a=fm.get(t);a||fm.set(t,a=new Map);const r=Math.round(Math.min(1,n)*10)/10,o=`${e}|${r}`,s=a.get(o);if(s!==void 0)return s;const l=zn(i.width),c=l&&Dn(l,!1);if(l&&c){const f=_o(e),h=[pi(f[0])/255,pi(f[1])/255,pi(f[2])/255],u=Math.max(h[0],h[1],h[2],.001),d=.2126*h[0]+.7152*h[1]+.0722*h[2],g=Math.min(h[0],h[1],h[2])/u,x=ay+ry*d*d*g,m=M=>Math.round(255*x*M*Math.pow(M/u,3.2+3*r)),p=m(h[0]),b=m(h[1]),_=m(h[2]),E=(.2126*p+.7152*b+.0722*_)/255/Math.max(.001,d);c.globalAlpha=Math.min(1,Math.sqrt((1-wx)/Math.max(.05,1-E))),c.drawImage(i,0,0),c.globalAlpha=1,c.globalCompositeOperation="source-in",c.fillStyle=`rgb(${p} ${b} ${_})`,c.fillRect(0,0,i.width,i.height)}return a.size>=4&&a.clear(),a.set(o,l&&c?l:null),l&&c?l:null}const dm=.6,pm=new WeakMap;function sy(t,e,n){const i=t.light;if(!i)return null;const a=Math.round((dm+(1-dm)*Math.min(1,Math.max(0,n)))*10)/10,r=`${e}|${a}`;let o=pm.get(t);o||pm.set(t,o=new Map);const s=o.get(r);if(s!==void 0)return s;const l=zn(i.width),c=l&&Dn(l,!1);if(l&&c){c.drawImage(i,0,0),c.globalCompositeOperation="source-in";const f=_o(e),h=[pi(f[0]),pi(f[1]),pi(f[2])],u=Math.max(h[0],h[1],h[2],1),d=g=>Math.round(255+(255*g/u-255)*Math.min(1,a));c.fillStyle=`rgb(${d(h[0])} ${d(h[1])} ${d(h[2])})`,c.fillRect(0,0,i.width,i.height)}return o.size>=6&&o.clear(),o.set(r,l&&c?l:null),l&&c?l:null}const mm=new WeakMap;function ly(t,e,n){const i=t.glint,a=t.back;if(!i||!a)return null;const r=Math.min(1,.45*n.highlight*(n.shine??0)),o=Math.min(1,1.1*n.rim);if(r<=.01&&o<=.01)return null;const s=Math.min(1,n.vivid??0),l=Math.min(1,Math.max(0,Math.round((n.backSoft??R0)*20)/20)),c=`${e}|${r.toFixed(2)}|${o.toFixed(2)}|${s.toFixed(1)}|${l}`;let f=mm.get(t);f||mm.set(t,f=new Map);const h=f.get(c);if(h!==void 0)return h;const u=i.width,d=zn(u),g=d&&Dn(d,!1),x=zn(u),m=x&&Dn(x,!1);if(d&&g&&x&&m){const p=_o(e),b=[pi(p[0]),pi(p[1]),pi(p[2])],_=Math.max(b[0],b[1],b[2],1),E=v=>`rgb(${[0,1,2].map(S=>Math.round(255+(255*b[S]/_-255)*v)).join(" ")})`,M=[[a,E(.65+.35*s),o*(1-.85*l)],[t.backSoft,E(.7+.3*s),o*l],[i,E(.45+.55*s),r]];for(const[v,S,T]of M)v&&(T<=.01||(m.globalCompositeOperation="copy",m.drawImage(v,0,0),m.globalCompositeOperation="source-in",m.fillStyle=S,m.fillRect(0,0,u,u),g.globalAlpha=T,g.drawImage(x,0,0)));g.globalAlpha=1}return f.size>=6&&f.clear(),f.set(c,d&&g?d:null),d&&g?d:null}const Ga=t=>{const e=Math.hypot(t[0],t[1],t[2])||1;return[t[0]/e,t[1]/e,t[2]/e]};function cy(t){const e=Math.cos(t.roll),n=Math.sin(t.roll),i=e*t.lx+n*t.ly,a=-n*t.lx+e*t.ly,r=t.facing<0?-1:1,o=r*Math.min(1,Math.abs(t.facing)/.16),{cy:s,sy:l,cp:c,sp:f}=t,h=(P,I,z,B=o)=>Ga([s*P+l*f*I-l*c*z,c*I+f*z,B*(l*P-s*f*I+s*c*z)]),u=h(qp*i,qp*a,h_),d=h(0,0,1,r),g=Ga([u[0]+d[0],u[1]+d[1],u[2]+d[2]]),x=h(i,a,0,r),m=Math.cos(80*Math.PI/180),p=Math.sin(80*Math.PI/180),b=m*i-p*a,_=p*i+m*a,E=Ga([.55*b,.55*_,.83]),M=Ga([E[1],-E[0],0]),v=[E[1]*M[2]-E[2]*M[1],E[2]*M[0]-E[0]*M[2],E[0]*M[1]-E[1]*M[0]],S=h(E[0],E[1],E[2],r),T=h(M[0],M[1],M[2],r),y=h(v[0],v[1],v[2],r),w=h(n,e,0,r),[A,C]=t.bx!==void 0&&t.by!==void 0?[t.bx,t.by]:id(t.lx,t.ly),R=h(e*A+n*C,-n*A+e*C,0,r);return{L:u,V:d,H:g,U:x,W:S,A:T,B:y,D:w,K:R}}const gm=new WeakMap;function uy(t,e){const n=t.canvas??t;let i=gm.get(n);i||(i=new Map,gm.set(n,i));let a=i.get(e);return a||(a={N:0,img:null,mc:new Float32Array(n0*3),mcPrev:new Float32Array(n0*3),mcMix:new Float32Array(n0*3),mixVersion:0,blendT:1,blendFrames:1,sinceBuild:0,L:null,V:null,lx:NaN,ly:NaN,base:"",shadow:NaN,highlight:NaN,spread:NaN,rim:NaN,vivid:NaN,front:NaN,sheen:NaN,backSoft:NaN,K:null,version:0,imgVersion:-1,imgAoK:NaN,imgForm:null,aoK:-1,aoMul:new Float32Array(256),scratch:[null,null],scratchIdx:0,scratchN:0,scratchStale:!0,sprites:[null,null,null,null,null],sliceG:[],sliceIns:[],sliceSpr:new Map,sliceSprKey:"",sliceSprMade:new Set,sliceKey:"",body:[null,null],bodyIdx:0,spriteVersion:-1,spritePx:0,spriteFur:null,miss:[0,0],missAt:[0,0],turnAt:[0,0],fade:null,lay:1,layTmp:null,haloTmp:null},i.size>4&&i.clear(),i.set(e,a)),a}const Cu=1/48,Ru=(t,e)=>!e||Math.abs(t[0]-e[0])>=Cu||Math.abs(t[1]-e[1])>=Cu||Math.abs(t[2]-e[2])>=Cu;function hs(t,e){return[t[0]*e[0]+t[2]*e[1],t[1]*e[0]+t[3]*e[1],t[0]*e[2]+t[2]*e[3],t[1]*e[2]+t[3]*e[3],t[0]*e[4]+t[2]*e[5]+t[4],t[1]*e[4]+t[3]*e[5]+t[5]]}function xm(t,e,n){const{N:i,sd:a}=e,r=t.data,o=c=>(c+it)/Ft*i-.5,s=[],l=[];for(let c=0;c<na;c++){const f=c/na*Math.PI*2,h=Math.cos(f),u=Math.sin(f),d=[],g=[];for(let x=0;x<80;x+=.5){const m=n[0]+h*x,p=n[1]+u*x,b=Tr(a,i,o(m),o(p));if(b<0)break;const _=Math.round(o(m)),E=Math.round(o(p));if(_<0||E<0||_>=i||E>=i)break;const M=(E*i+_)*4;d.push(b),g.push(r[M],r[M+1],r[M+2])}s.push(Float32Array.from(d)),l.push(Float32Array.from(g))}return{d:s,c:l}}function bm(t,e,n,i,a,r,o){const s=f=>{const h=e.d[f],u=e.c[f],d=typeof n=="number"?n:n[f],g=1-(typeof i=="number"?i:i[f]);let x=0;for(let m=0;m<h.length;m++)h[m]>=d&&(x=m);return u.length?`rgb(${u[x*3]*g|0} ${u[x*3+1]*g|0} ${u[x*3+2]*g|0})`:"rgb(0 0 0)"};if(!o&&typeof t.createConicGradient=="function"){const f=t.createConicGradient(0,a[0],a[1]);for(let h=0;h<=na;h++)f.addColorStop(h/na,s(h%na));return f}const l=t.createLinearGradient(a[0]+r[0]*50,a[1]+r[1]*50,a[0]-r[0]*50,a[1]-r[1]*50),c=f=>Math.round((f%(Math.PI*2)+Math.PI*2)%(Math.PI*2)/(Math.PI*2/na))%na;return l.addColorStop(0,s(c(Math.atan2(r[1],r[0])))),l.addColorStop(.5,s(c(Math.atan2(r[0],-r[1])))),l.addColorStop(1,s(c(Math.atan2(-r[1],-r[0])))),l}function hy(t,e,n,i=0){const a=/rgb\((\d+) (\d+) (\d+)\)/.exec(fy(t)),r=a?[+a[1],+a[2],+a[3]]:[255,255,255],o=_o(e),s=[pi(o[0]),pi(o[1]),pi(o[2])],l=Math.max(s[0],s[1],s[2],1),c=Math.min(.85,.75*n),f=.45+.55*Math.min(1,i),h=u=>Math.round(r[u]+(255+(255*s[u]/l-255)*f-r[u])*c);return`rgb(${h(0)} ${h(1)} ${h(2)})`}function fy(t){let e=-1,n=0,i=0,a=0;for(const o of t.c)for(let s=0;s<o.length;s+=3){const l=.2126*o[s]+.7152*o[s+1]+.0722*o[s+2];l>e&&(e=l,n=o[s],i=o[s+1],a=o[s+2])}const r=o=>Math.min(255,Math.round(o/4)*4);return`rgb(${r(n)} ${r(i)} ${r(a)})`}function Kh(t,e,n,i,a,r,o,s,l){const c=r*t.cx[0]+o*t.cy[0],f=(r*n+o*i)*a;let h=s,u=0,d=!1;for(let g=1;g<e;g++){const x=r*t.cx[g]+o*t.cy[g]+t.scale[g]*(s-c);x+t.z[g]*f>h&&(h=x+t.z[g]*f,u=g,d=!1),x-t.z[g]*f>h&&(h=x-t.z[g]*f,u=g,d=!0)}return l&&(l.k=u,l.far=d),h}function dy(t,e,n,i,a,r){if(r<=1e-4)return[1,0,0,1,0,0];const o=N0(t),s=C0(o,i,a),l=C0(o,-i,-a),c=Kh(e,n,i,a,r,i,a,s),f=Kh(e,n,i,a,r,-i,-a,l),h=(c+f)/Math.max(1,s+l)-1,u=c-(h+1)*s;return[1+h*i*i,h*i*a,h*i*a,1+h*a*a,i*u,a*u]}function py(t,e,n,i,a,r,o,s){const l=N0(t),c=new Float32Array(na),f=new Float32Array(na),h=o[0]+o[3]-2,u={k:0,far:!1};for(let d=0;d<na;d++){const g=d/na*Math.PI*2,x=Math.cos(g),m=Math.sin(g),p=x*i+m*a,b=h/(1+h);let _=x-b*p*i,E=m-b*p*a;const M=Math.hypot(_,E);_/=M,E/=M,Kh(e,n,i,a,r,_,E,C0(l,_,E),u),c[d]=Math.max(jh,e.inset[u.k]),f[d]=u.far?q_*s*(1-Math.exp(-2.4*(u.k/n))):0}return{inset:c,dark:f}}const vm=new WeakMap,fi=96,gs=.1;function my(t,e,n,i,a,r,o,s){const l=`${i}|${n.q}|${Math.round(r/gs)}|${Math.round(o/gs)}`;let c=vm.get(t);c||vm.set(t,c=new Map);const f=c.get(l);if(f||f===null&&!s)return f??null;if(c.size>256&&c.clear(),!s)return c.set(l,null),nd(()=>{c.set(l,Mm(t,e,n,i,a,r,o))}),null;const h=Mm(t,e,n,i,a,r,o);return c.set(l,h),h}function Mm(t,e,n,i,a,r,o){const s=zn(fi),l=s&&Dn(s,!0);if(!l)return[0,0];const c=Ft/fi,f=a[0]*a[3]-a[1]*a[2],h=a[3]/f,u=-a[1]/f,d=-a[2]/f,g=a[0]/f,x=-(h*a[4]+d*a[5]),m=-(u*a[4]+g*a[5]);l.fillStyle="#fff";for(let v=0;v<i;v++)for(const S of v?[n.z[v],-n.z[v]]:[0]){l.setTransform(1/c,0,0,1/c,it/c,it/c),l.transform(h,u,d,g,x,m),l.translate(S*r,S*o);const T=n.scale[v];v&&l.transform(T,0,0,T,n.cx[v]-T*n.cx[0],n.cy[v]-T*n.cy[0]),l.fill(e)}const p=l.getImageData(0,0,fi,fi).data,b=new Uint8Array(fi*fi),_=new Float32Array(fi*fi);for(let v=0;v<fi*fi;v++)b[v]=p[v*4+3]>127?1:0;Yh(b,1,fi,_,null);let E=0,M=0;for(let v=0,S=0;v<fi;v++)for(let T=0;T<fi;T++,S++){const y=Tr(t.sd,t.N,(T+.5)/fi*t.N-.5,(v+.5)/fi*t.N-.5);b[S]&&y<0&&(E=Math.max(E,-y)),!b[S]&&y>0&&(M=Math.max(M,Math.sqrt(_[S])*c))}return[E,M]}const Pu=typeof navigator<"u"&&/AppleWebKit\//.test(navigator.userAgent)&&!/Chrome\/|Chromium\/|Edg\//.test(navigator.userAgent),gy=typeof navigator<"u"&&/Firefox\//.test(navigator.userAgent);function xy(t,e,n,i,a,r){const o=dx(n.dev),s=fx(e.typeKey??gu(e.path),e.path,o,n.halfDepth,!!n.still);if(!s)return!1;const l=e.shading==="fabric",c=Math.ceil(Ft*n.dev/100),f=(()=>{const[ce,Te]=n.bx!==void 0&&n.by!==void 0?[n.bx,n.by]:id(n.lx,n.ly);return{bx:ce,by:Te,front:r.front??yl}})(),h=l?ad(s,e.typeKey??gu(e.path),n.halfDepth,c,!!n.still&&!e.furOnIdle,n.lx,n.ly,e.fur??Dr,f):null;if(l&&!h)return!1;const u=uy(t,(e.typeKey??gu(e.path))+(l?"|fabric":"")),d=cy(n),g=(()=>{const ce=Math.hypot(d.L[0],d.L[1]);return ce<.05?[0,-1]:[d.L[0]/ce,d.L[1]/ce]})();if((Ru(d.L,u.L)||Ru(d.V,u.V)||n.lx!==u.lx||n.ly!==u.ly||i.base!==u.base||r.shadow!==u.shadow||r.highlight!==u.highlight||r.spread!==u.spread||r.rim!==u.rim||(r.vivid??0)!==u.vivid||(r.front??yl)!==u.front||(r.sheen??0)!==u.sheen||(r.backSoft??R0)!==u.backSoft||l&&Ru(d.K,u.K))&&(u.version>0&&u.mcPrev.set(u.mcMix),l?iy(u.mc,_o(i.base),d,r):w_(u.mc,_o(i.base),d,r),u.version===0||n.still?(u.mcMix.set(u.mc),u.blendT=1):(u.blendFrames=Math.min(10,Math.max(1,u.sinceBuild)),u.blendT=0),u.sinceBuild=0,u.mixVersion++,u.L=d.L,u.V=d.V,u.lx=n.lx,u.ly=n.ly,u.base=i.base,u.shadow=r.shadow,u.highlight=r.highlight,u.spread=r.spread,u.rim=r.rim,u.vivid=r.vivid??0,u.front=r.front??yl,u.sheen=r.sheen??0,u.backSoft=r.backSoft??R0,u.K=d.K,u.version++),u.sinceBuild++,u.blendT<1){u.blendT=Math.min(1,u.blendT+1/u.blendFrames);const ce=u.blendT>=1?1:u.blendT*u.blendT*(3-2*u.blendT),Te=u.mcPrev,Le=u.mc,$e=u.mcMix;for(let We=0;We<n0*3;We++)$e[We]=Te[We]+(Le[We]-Te[We])*ce;u.mixVersion++}const x=h?Math.min(1.2,.3+.8*r.shadow):Math.min(1.3,1.2*r.shadow);if(x!==u.aoK){for(let ce=0;ce<256;ce++)u.aoMul[ce]=Math.max(0,1-x*(1-ce/255));u.aoK=x}if((!u.img||u.N!==o)&&(u.img=new ImageData(o,o),u.N=o,u.imgVersion=-1),(u.imgVersion!==u.mixVersion||u.imgAoK!==x||u.imgForm!==s)&&(E_(s,u.mcMix,u.img.data,u.aoMul,h?S_(s):void 0),u.imgVersion=u.mixVersion,u.imgAoK=x,u.imgForm=s,u.scratchStale=!0),u.scratchN!==o&&(u.scratch=[null,null],u.scratchN=o,u.scratchStale=!0),u.scratchStale){u.scratchIdx^=1;let ce=u.scratch[u.scratchIdx];if(!ce){const Te=zn(o),Le=Te&&Dn(Te,!1);if(!Te||!Le)return!1;ce=u.scratch[u.scratchIdx]={c:Te,g:Le}}ce.g.putImageData(u.img,0,0),u.scratchStale=!1}const m=u.scratch[u.scratchIdx].c,p=n.dev<=100?14:n.dev<=224?20:26,b=__(s,p,n.round??1),{cy:_,sy:E,cp:M,sp:v}=n,[S,T,y,w,A,C]=n.ctm,R=E*v,P=S*_+y*R,I=T*_+w*R,z=y*M,B=w*M;t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="high";const F=n.facing>=0?1:-1,O=E/_,k=-v/(_*M),G=Math.hypot(O,k);let ee=50;for(let ce=1;ce<p;ce++)ee=Math.max(ee,50*b.scale[ce]+b.z[ce]*G);const ne=G>1e-6?F*O/G:1,J=G>1e-6?F*k/G:0,he=Math.min(.7,.55*Math.min(1.6,r.shadow/.35)),H=h?dy(s,b,p,ne,J,G):null,N=Math.ceil(Ft*n.dev/100);if(u.spritePx!==N&&(u.sprites=[null,null,null,null,null],u.spritePx=N,u.spriteVersion=-1),u.spriteVersion!==u.version||u.spriteFur!==h){const ce=N/Ft,Te=h?A_(s,h.R):null,Le=xm(u.img,s,[b.cx[0],b.cy[0]]);for(let $e=0;$e<4;$e++){if($e===2)continue;let We=u.sprites[$e];if(!We){const Ge=zn(N),on=Ge&&Dn(Ge,!1);if(!Ge||!on)return!1;We=u.sprites[$e]={c:Ge,g:on}}const et=We.g;et.setTransform(1,0,0,1,0,0),et.globalCompositeOperation="source-over",et.clearRect(0,0,N,N),et.imageSmoothingEnabled=!0,et.imageSmoothingQuality="high";const Ct=$e===0&&h&&h.mask?h:null;Ct&&Ct.haze&&(et.imageSmoothingQuality="low",et.drawImage(Ct.haze,0,0,N,N),et.imageSmoothingQuality="high",et.globalCompositeOperation="source-in",et.fillStyle=hy(Le,i.base,r.rim,r.vivid??0),et.fillRect(0,0,N,N),et.globalCompositeOperation="destination-over"),et.setTransform(ce,0,0,ce,it*ce,it*ce);const yt=Ct&&H?py(s,b,p,ne,J,G,H,he):null;et.fillStyle=$e===1?"#000":bm(et,Le,yt?yt.inset:h?Math.max(jh,b.inset[0]):b.inset[0],yt?yt.dark:0,[b.cx[0],b.cy[0]],g,Pu),h&&h.mask?(et.fillRect(-it,-it,Ft,Ft),et.setTransform(1,0,0,1,0,0),et.globalCompositeOperation="destination-in",et.drawImage(($e===0?h.mask:Te)??h.mask,0,0,N,N),et.globalCompositeOperation="source-over"):et.fill(e.path)}if(h&&h.core){let $e=u.sprites[4];if(!$e){const We=zn(N),et=We&&Dn(We,!1);We&&et&&($e=u.sprites[4]={c:We,g:et})}$e&&($e.g.setTransform(1,0,0,1,0,0),$e.g.globalCompositeOperation="copy",$e.g.drawImage(u.sprites[0].c,0,0),$e.g.globalCompositeOperation="destination-out",$e.g.drawImage(h.core,0,0,N,N),$e.g.globalCompositeOperation="source-over")}u.spriteVersion=u.version,u.spriteFur=h}const W=(ee+50)/100,fe=(ee-50)/2,j=1+(W-1)*ne*ne,ue=(W-1)*ne*J,de=1+(W-1)*J*J,ae=hs(hs(n.ctm,[_,R,0,M,0,0]),[j,ue,ue,de,fe*ne-50*j-50*ue,fe*J-50*ue-50*de]),Ee=h!=null&&h.dark&&h.light?h:null;let L=t,ve=0,me=0,we=0,te=0;if(Ee){let ce=1/0,Te=1/0,Le=-1/0,$e=-1/0;for(const et of[-b.top,b.top]){const Ct=et*E-50*_,yt=-et*_*v-50*R-50*M,Ge=S*Ct+y*yt+A,on=T*Ct+w*yt+C;for(const Ot of[-it,100+it])for(const je of[-it,100+it]){const Pt=P*Ot+z*je+Ge,Ht=I*Ot+B*je+on;Pt<ce&&(ce=Pt),Pt>Le&&(Le=Pt),Ht<Te&&(Te=Ht),Ht>$e&&($e=Ht)}}ve=Math.floor(ce)-1,me=Math.floor(Te)-1,we=Math.ceil(Le)+1-ve,te=Math.ceil($e)+1-me,u.bodyIdx^=1;let We=u.body[u.bodyIdx];if(!We||We.w<we||We.h<te||We.w>2*we+64||We.h>2*te+64){const et=Math.ceil(we/64)*64,Ct=Math.ceil(te/64)*64;let yt=null;typeof document<"u"?(yt=document.createElement("canvas"),yt.width=et,yt.height=Ct):typeof OffscreenCanvas<"u"&&(yt=new OffscreenCanvas(et,Ct));const Ge=yt&&Dn(yt,!1);We=yt&&Ge?u.body[u.bodyIdx]={c:yt,g:Ge,w:yt.width,h:yt.height}:null}We?(L=We.g,L.setTransform(1,0,0,1,0,0),L.globalCompositeOperation="source-over",L.globalAlpha=1,L.clearRect(0,0,we,te),L.imageSmoothingEnabled=!0,L.imageSmoothingQuality="high"):ve=me=0}const qe=ce=>{const Te=ce*E-50*_,Le=-ce*_*v-50*R-50*M;L.setTransform(P,I,z,B,S*Te+y*Le+A-ve,T*Te+w*Le+C-me)},[Ue,_e,,U]=u.sprites,D=[b.cx[0],b.cy[0]],V=`${u.version}|${p}|${b.q}`;if(u.sliceKey!==V){const ce=xm(u.img,s,D);u.sliceG=[],u.sliceIns=[];for(let Te=0;Te<p;Te++){const Le=h?Math.max(jh,b.inset[Te]):b.inset[Te];u.sliceIns.push(Le),u.sliceG.push(bm(t,ce,Le,0,D,g,Pu))}u.sliceKey=V}const pe=gy&&typeof document<"u",q=`${V}|${N}`;pe&&u.sliceSprKey!==q&&(u.sliceSprKey=q,u.sliceSprMade=new Set,u.sliceSpr.size>32&&u.sliceSpr.clear());const Z=ce=>{const Te=u.sliceIns[ce];let Le=u.sliceSpr.get(Te);if(Le&&u.sliceSprMade.has(Te))return Le;if(!Le||Le.c.width!==N){const We=document.createElement("canvas");We.width=We.height=N;const et=We.getContext("2d");if(!et)return;Le={c:We,g:et},u.sliceSpr.set(Te,Le)}const $e=N/Ft;return Le.g.setTransform(1,0,0,1,0,0),Le.g.clearRect(0,0,N,N),Le.g.setTransform($e,0,0,$e,it*$e,it*$e),Le.g.fillStyle=u.sliceG[ce],Le.g.fill(e.path),u.sliceSprMade.add(Te),Le},be=(ce,Te,Le)=>{qe(Te);const $e=b.scale[ce];if(ce>0){L.transform($e,0,0,$e,b.cx[ce]-$e*b.cx[0],b.cy[ce]-$e*b.cy[0]);const We=pe?Z(ce):void 0;We?L.drawImage(We.c,-it,-it,Ft,Ft):(L.fillStyle=u.sliceG[ce],L.fill(e.path)),Le>.01&&(L.globalAlpha=Le,L.fillStyle="#000",L.fill(e.path),L.globalAlpha=1);return}h?L.drawImage(U.c,-it,-it,Ft,Ft):(L.fillStyle=u.sliceG[0],L.fill(e.path)),h&&L===t&&Fe>.01&&(L.globalAlpha=Fe,L.drawImage(Ue.c,-it,-it,Ft,Ft),L.globalAlpha=1),Le>.01&&(L.globalAlpha=Le,L.drawImage(_e.c,-it,-it,Ft,Ft),L.globalAlpha=1)},Me=Math.abs(n.facing),Fe=Me>=.8?1:Me<=.45?0:(Me-.45)/.35,Pe=T_(s),Ae=Pe.x.length,De=s.sd,Qe=s.N,ot=1.5/(Math.sqrt(Math.abs(P*B-I*z))||1)+.4,ke=Ft/Qe,ct=ce=>(ce+it)/Ft*Qe-.5,X=Math.atan2(-F*k,-F*O),He=Math.atan2(F*k,F*O);for(let ce=p-1;ce>=1;ce--){const Te=-F*b.z[ce],Le=b.scale[ce];if(h){const $e=b.cx[ce]-Le*b.cx[0]+Te*O,We=b.cy[ce]-Le*b.cy[0]+Te*k;let et=Number.isFinite($e)&&Number.isFinite(We);for(let Ct=0;et&&Ct<Ae;Ct++){const yt=im(Ae,X,Ct);Tr(De,Qe,ct(Le*Pe.x[yt]+$e),ct(Le*Pe.y[yt]+We))<ot+Le*(Pe.d[yt]+ke)&&(et=!1)}if(et)continue}be(ce,Te,h?0:he*(1-Math.exp(-2.4*(ce/p))))}if(h&&G>.001){const ce=C0(N0(s),-ne,-J),Te=1.3*b.top*G;qe(0);const Le=L.createLinearGradient(-ne*ce,-J*ce,-ne*(ce+Te),-J*(ce+Te));for(let $e=0;$e<=8;$e++){const We=$e/8;Le.addColorStop(We,`rgba(0,0,0,${(he*(1-Math.exp(-2.4*We))*We*We*(3-2*We)).toFixed(3)})`)}L.globalCompositeOperation="source-atop",L.fillStyle=Le,L.fillRect(-it-60,-it-60,Ft+120,Ft+120),L.globalCompositeOperation="source-over"}be(0,0,0);const Se=Math.abs(n.facing),Ie=Se>=.72?1:Se<=.34?0:((Se-.34)/.38)**1.5,Y=ae[0]*ae[3]-ae[1]*ae[2],oe=bx+1.5/(Math.sqrt(Math.abs(Y))||1);for(let ce=1;ce<p;ce++){const Te=F*b.z[ce],Le=b.scale[ce];if(Ie>=1&&Math.abs(Y)>1e-9){const $e=Te*E-50*_,We=-Te*_*v-50*R-50*M,et=S*$e+y*We+A-ae[4],Ct=T*$e+w*We+C-ae[5],yt=b.cx[ce]-Le*b.cx[0],Ge=b.cy[ce]-Le*b.cy[0];let on=!0;for(let Ot=0;on&&Ot<Ae;Ot++){const je=im(Ae,He,Ot),Pt=Le*Pe.x[je]+yt,Ht=Le*Pe.y[je]+Ge,Zt=P*Pt+z*Ht+et,gn=I*Pt+B*Ht+Ct,un=(ae[3]*Zt-ae[2]*gn)/Y,It=(ae[0]*gn-ae[1]*Zt)/Y;Tr(De,Qe,ct(un),ct(It))<oe+Le*(Pe.d[je]+ke)&&(on=!1)}if(on)continue}be(ce,Te,0)}if(Ie>.01&&(L.save(),L.setTransform(ae[0],ae[1],ae[2],ae[3],ae[4]-ve,ae[5]-me),L.globalAlpha=Ie,L.drawImage(m,-it,-it,Ft,Ft),L.restore()),h&&h.mask&&H&&L!==t){const ce=F*O,Te=F*k,Le=Math.abs(ce-u.missAt[0])>1.5*gs||Math.abs(Te-u.missAt[1])>1.5*gs,$e=G>1e-4?my(s,e.path,b,p,H,ce,Te,!!n.still||Le):[0,0];$e&&(u.miss=$e,u.missAt=[ce,Te]);const[We,et]=u.miss,Ct=Math.max(We,et);let yt=wn(Qs/2,2*Qs,Ct),Ge=wn(Qs/2,Qs,et);const on=Math.abs(ce-u.turnAt[0])>gs||Math.abs(Te-u.turnAt[1])>gs;u.turnAt=[ce,Te];const Ot=!n.still&&!on;if(Ot&&u.fade){const It=(wt,Rt)=>Math.abs(Rt-wt)<.02?Rt:wt+(Rt-wt)*.2;yt=It(u.fade[0],yt),Ge=It(u.fade[1],Ge)}u.fade=[yt,Ge];const je=u.sprites[4];L.imageSmoothingQuality="low",qe(0),L.transform(H[0],H[1],H[2],H[3],H[4],H[5]);const Pt=(1-wn(0,K_,yt))*(1-Ge),Ht=u.lay=Ot?u.lay+Math.max(-hm,Math.min(hm,Pt-u.lay)):Pt;let Zt=null;if(Ht>0&&Ht<1){let It=u.layTmp;if(!It||It.c.width<we||It.c.height<te){const wt=Math.ceil(Math.max(we,te)/64)*64;let Rt=null;typeof document<"u"?(Rt=document.createElement("canvas"),Rt.width=Rt.height=wt):Rt=zn(wt);const Qt=Rt&&Dn(Rt,!1);It=u.layTmp=Rt&&Qt?{c:Rt,g:Qt}:null}It&&(Zt=It.g,Zt.setTransform(1,0,0,1,0,0),Zt.globalAlpha=1,Zt.globalCompositeOperation="copy",Zt.drawImage(L.canvas,0,0,we,te,0,0,we,te),Zt.imageSmoothingQuality="low",Zt.setTransform(L.getTransform()))}const gn=j_*Math.min(1,G/.2),un=It=>{if(Pu){let wt=u.haloTmp;if(!wt||wt.c.width<we||wt.c.height<te){const Rt=Math.ceil(Math.max(we,te)/64)*64;let Qt=null;typeof document<"u"?(Qt=document.createElement("canvas"),Qt.width=Qt.height=Rt):Qt=zn(Rt);const ni=Qt&&Dn(Qt,!1);wt=u.haloTmp=Qt&&ni?{c:Qt,g:ni}:null}if(wt){const Rt=wt.g;Rt.setTransform(1,0,0,1,0,0),Rt.globalCompositeOperation="source-over",Rt.globalAlpha=1,Rt.clearRect(0,0,we,te),Rt.imageSmoothingEnabled=!0,Rt.imageSmoothingQuality="low",Rt.setTransform(It.getTransform()),Rt.drawImage(Ue.c,-it,-it,Ft,Ft),It.save(),It.setTransform(1,0,0,1,0,0),It.globalCompositeOperation="destination-atop",It.drawImage(wt.c,0,0,we,te,0,0,we,te),It.restore()}}else It.globalCompositeOperation="destination-atop",It.drawImage(Ue.c,-it,-it,Ft,Ft);je&&gn>.01&&(It.globalCompositeOperation="source-atop",It.globalAlpha=gn,It.drawImage(je.c,-it,-it,Ft,Ft),It.globalAlpha=1),It.globalCompositeOperation="source-over"};if(Zt&&un(Zt),Ht>=1||!Zt&&Ht>=.5)un(L);else{const It=yt<1?ny(h):null;if(It){const wt=1+yt*(Ct+Qs)/25,Rt=b.cx[0],Qt=b.cy[0];L.save(),L.transform(wt,0,0,wt,Rt*(1-wt),Qt*(1-wt)),L.globalCompositeOperation="destination-out",L.drawImage(It,-it,-it,Ft,Ft),L.restore()}Ge<1&&(L.globalAlpha=1-Ge,L.globalCompositeOperation="destination-over",L.drawImage(Ue.c,-it,-it,Ft,Ft),L.globalAlpha=1),Zt&&(L.setTransform(1,0,0,1,0,0),L.globalCompositeOperation="destination-in",L.globalAlpha=1-Ht,L.fillStyle="#000",L.fillRect(0,0,we,te),L.globalCompositeOperation="lighter",L.globalAlpha=Ht,L.drawImage(Zt.canvas,0,0,we,te,0,0,we,te),L.globalAlpha=1)}L.globalCompositeOperation="source-over"}if(L!==t&&Ee){L.globalCompositeOperation="source-atop",L.imageSmoothingQuality="low";const ce=_o(i.base),Te=Math.pow(.2126*ce[0]+.7152*ce[1]+.0722*ce[2],1/2.2),Le=oy(Ee,i.base,r.vivid??0)??Ee.dark,$e=sy(Ee,i.base,r.vivid??0)??Ee.light,We=n.dev<160?0:Se>=.88?1:Se<=.55?0:(Se-.55)/.33,et=We>.01?ly(Ee,i.base,r):null,Ct=F*O_*(e.fur??Dr).length,yt=hs(hs(hs(n.ctm,[1,0,0,1,Ct*E,-Ct*_*v]),[_,R,0,M,0,0]),[j,ue,ue,de,fe*ne-50*j-50*ue,fe*J-50*ue-50*de]),Ge=(Ot,je,Pt,Ht=Ot)=>{L.setTransform(Ot[0],Ot[1],Ot[2],Ot[3],Ot[4]-ve,Ot[5]-me),L.globalAlpha=je,L.drawImage(Le,-it-Qi,-it-Qi,Jn,Jn),Ht!==Ot&&L.setTransform(Ht[0],Ht[1],Ht[2],Ht[3],Ht[4]-ve,Ht[5]-me),L.globalAlpha=je*(.25+.75*Te),L.drawImage($e,-it-Qi,-it-Qi,Jn,Jn),Pt&&et&&(L.globalAlpha=je*We,L.drawImage(et,-it-Qi,-it-Qi,Jn,Jn)),L.globalAlpha=1},on=Se>=.62?0:Se<=.36?1:(.62-Se)/.26;if(on<1&&Ge(ae,1-on,!0,yt),on>0){const Ot=n.dev/100,je=ve+we/2,Pt=me+te/2;Ge([Ot,0,0,Ot,je-50*Ot,Pt-50*Ot],on,!1)}L.globalCompositeOperation="source-over",t.save(),t.setTransform(1,0,0,1,0,0),t.imageSmoothingEnabled=!1,t.drawImage(L.canvas,0,0,we,te,ve,me,we,te),t.restore()}t.setTransform(S,T,y,w,A,C);const Ce=Se>=.95?1:Se<=.8?0:(Se-.8)/.15;if(!h&&n.dev>=256&&r.rim>0&&r.highlight>0&&Ce>.01){t.save(),t.globalCompositeOperation="source-atop",t.setTransform(ae[0],ae[1],ae[2],ae[3],ae[4],ae[5]);const ce=Ce*Math.min(.5,.3*r.rim*Math.min(1.4,r.highlight)),Te=t.createLinearGradient(50+g[0]*50,50+g[1]*50,50-g[0]*50,50-g[1]*50);Te.addColorStop(0,`rgba(235,244,255,${ce.toFixed(3)})`),Te.addColorStop(.45,`rgba(235,244,255,${(.35*ce).toFixed(3)})`),Te.addColorStop(.75,"rgba(235,244,255,0)"),t.strokeStyle=Te,t.lineJoin="round",t.lineWidth=1.3,t.stroke(e.path),t.restore()}return!0}function Tx(t,e,n,i,a){return{m:t,o:e,L:n,H:i,px:a,toScreen:r=>{const o=r[0]-e[0],s=r[1]-e[1],l=r[2]-e[2];return[t[0]*o+t[1]*s+t[2]*l,t[3]*o+t[4]*s+t[5]*l]},depth:r=>t[6]*(r[0]-e[0])+t[7]*(r[1]-e[1])+t[8]*(r[2]-e[2]),dir:r=>oa([t[0]*r[0]+t[1]*r[1]+t[2]*r[2],t[3]*r[0]+t[4]*r[1]+t[5]*r[2],t[6]*r[0]+t[7]*r[1]+t[8]*r[2]])}}const yo=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Rl=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],gi=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],oa=t=>{const e=Math.hypot(t[0],t[1],t[2])||1;return[t[0]/e,t[1]/e,t[2]/e]},rd=Math.PI*2;function Wn(t,e,n,i,a=11){return Math.max(n,Math.min(i,Math.round(e*t.px/a)))}function Cx(t,e,n,i,a=!0){const r=e+1,o=r*(n+1),s=new Float64Array(o*3);let l=0;for(let x=0,m=0;x<=n;x++)for(let p=0;p<=e;p++,m++){const b=t(p/e,x/n);s[m*3]=b[0],s[m*3+1]=b[1],s[m*3+2]=b[2],l=Math.max(l,Math.abs(b[0]-s[0])+Math.abs(b[1]-s[1])+Math.abs(b[2]-s[2]))}const c=x=>[s[x*3],s[x*3+1],s[x*3+2]],f=new Float64Array(e*n*3);for(let x=0;x<n;x++)for(let m=0;m<e;m++){const p=x*r+m,b=c(p),_=c(p+1),E=c(p+r+1),M=c(p+r);let v=Rl(yo(E,b),yo(M,_));const S=[(b[0]+_[0]+E[0]+M[0])/4,(b[1]+_[1]+E[1]+M[1])/4,(b[2]+_[2]+E[2]+M[2])/4],T=typeof i=="function"?i((m+.5)/e,(x+.5)/n):i;gi(v,yo(S,T))<0&&(v=[-v[0],-v[1],-v[2]]),v=oa(v);const y=(x*e+m)*3;f[y]=v[0],f[y+1]=v[1],f[y+2]=v[2]}const h=1e-6+l*1e-5,u=(x,m)=>Math.abs(s[x*3]-s[m*3])+Math.abs(s[x*3+1]-s[m*3+1])+Math.abs(s[x*3+2]-s[m*3+2])<h;let d=!0;for(let x=0;x<=n&&d;x++)d=u(x*r,x*r+e);let g=null;if(a){const x=new Float64Array(o*3);for(let p=0;p<n;p++)for(let b=0;b<e;b++){const _=(p*e+b)*3,E=p*r+b;for(const M of[E,E+1,E+r+1,E+r])x[M*3]+=f[_],x[M*3+1]+=f[_+1],x[M*3+2]+=f[_+2]}const m=p=>{let b=0,_=0,E=0;for(const M of p)b+=x[M*3],_+=x[M*3+1],E+=x[M*3+2];for(const M of p)x[M*3]=b,x[M*3+1]=_,x[M*3+2]=E};if(d)for(let p=0;p<=n;p++)m([p*r,p*r+e]);for(const p of[0,n]){let b=!0;for(let _=1;_<=e&&b;_++)b=u(p*r,p*r+_);b&&m(Array.from({length:r},(_,E)=>p*r+E))}for(let p=0;p<o;p++){const b=x[p*3],_=x[p*3+1],E=x[p*3+2],M=Math.hypot(b,_,E)||1;x[p*3]=b/M,x[p*3+1]=_/M,x[p*3+2]=E/M}g=x}return{nu:e,nv:n,closed:d,pos:s,fn:f,vn:g}}function by(t,e,n,i,a,r=!1){const o=s=>t(r?(s%1+1)%1:Math.max(0,Math.min(1,s)));return Cx((s,l)=>{const c=t(s),f=oa(yo(o(s+.001),o(s-.001))),h=gi(e,f),u=oa([e[0]-f[0]*h,e[1]-f[1]*h,e[2]-f[2]*h]),d=Rl(f,u),[g,x]=n(s,l*rd);return[c[0]+u[0]*g+d[0]*x,c[1]+u[1]*g+d[1]*x,c[2]+u[2]*g+d[2]*x]},i,a,s=>t(s))}const Pl=(t,e,n=1)=>(i,a)=>{const r=Math.cos(a),o=Math.sin(a);return[t*Math.sign(r)*Math.pow(Math.abs(r),n),e*Math.sign(o)*Math.pow(Math.abs(o),n)]};function Rx(t,e){const{nu:n,nv:i,pos:a,fn:r,vn:o}=e,s=n+1,l=s*(i+1),c=n*i,[f,h,u,d,g,x,m,p,b]=t.m,[_,E,M]=t.o,v=new Float64Array(l),S=new Float64Array(l),T=new Float64Array(l);for(let R=0;R<l;R++){const P=a[R*3]-_,I=a[R*3+1]-E,z=a[R*3+2]-M;v[R]=f*P+h*I+u*z,S[R]=d*P+g*I+x*z,T[R]=m*P+p*I+b*z}const y=(R,P,I)=>{for(let z=0;z<I;z++){const B=R[z*3],F=R[z*3+1],O=R[z*3+2],k=f*B+h*F+u*O,G=d*B+g*F+x*O,ee=m*B+p*F+b*O,ne=Math.hypot(k,G,ee)||1;P[z*3]=k/ne,P[z*3+1]=G/ne,P[z*3+2]=ee/ne}};let w=null;o&&y(o,w=new Float64Array(l*3),l);const A=new Float64Array(c*3),C=new Float64Array(c);y(r,A,c);for(let R=0,P=0;R<i;R++)for(let I=0;I<n;I++,P++){const z=R*s+I;C[P]=(T[z]+T[z+1]+T[z+s]+T[z+s+1])/4}return{nu:n,nv:i,closed:e.closed,x:v,y:S,d:T,n:w,f:A,cd:C}}function od(t){let e=1/0,n=1/0,i=-1/0,a=-1/0;for(const r of t)for(let o=0;o<r.x.length;o++)r.x[o]<e&&(e=r.x[o]),r.x[o]>i&&(i=r.x[o]),r.y[o]<n&&(n=r.y[o]),r.y[o]>a&&(a=r.y[o]);return{x0:e,y0:n,x1:i,y1:a,cx:(e+i)/2,cy:(n+a)/2,w:i-e,h:a-n}}function vy(t,e,n,i){const a=t[i]-t[n],r=e[i]-e[n];let o=-1/0;for(let s=n;s<=i;s++){const l=(t[s]-t[n])*a+(e[s]-e[n])*r;if(l<o-1e-9)return!1;o=l}return!0}const Du=t=>t<0?0:t>255?255:Math.round(t),gr=t=>`rgb(${Du(t[0])},${Du(t[1])},${Du(t[2])})`;function Li(t,e,n){const i=[],a=[];for(const o of e){const s=o.bias??0,l=o.keep,c=o.cull!==!1;for(const f of o.parts){const{nu:h,nv:u,f:d,cd:g,x,y:m}=f,p=h+1,b=_=>(!c||d[_*3+2]>-.04)&&(!l||l(g[_]));for(let _=0;_<u;_++){if(o.flat){for(let v=0;v<h;v++){const S=_*h+v;b(S)&&(i.push({d:g[S]+s,l:o,p:f,j:_,cols:[v,v+1],cells:[S]}),a.push([x[_*p+v],m[_*p+v]],[x[(_+1)*p+v+1],m[(_+1)*p+v+1]]))}continue}const E=[];let M=null;for(let v=0;v<h;v++)b(_*h+v)?(M||E.push(M=[]),M.push(v)):M=null;f.closed&&E.length>1&&E[0][0]===0&&E[E.length-1][E[E.length-1].length-1]===h-1&&(E[0]=E.pop().concat(E[0]));for(const v of E){const S=v.concat(v[v.length-1]+1),T=[],y=[];for(let A=0;A<S.length;A++){const C=_*p+S[A],R=C+p;T.push((x[C]+x[R])/2),y.push((m[C]+m[R])/2),A===0||A===S.length-1?a.push([x[C],m[C]],[x[R],m[R]]):_===0?a.push([x[C],m[C]]):_===u-1&&a.push([x[R],m[R]])}let w=0;for(;w<S.length-1;){let A=w+1;for(;A+1<S.length&&vy(T,y,w,A+1);)A++;let C=0;for(let R=w;R<A;R++)C+=g[_*h+v[R]];i.push({d:C/(A-w)+s,l:o,p:f,j:_,cols:S.slice(w,A+1),cells:v.slice(w,A)}),w=A}}}}}i.sort((o,s)=>o.d-s.d);const r=.5/n;for(const o of i){const{p:s,l,j:c,cols:f,cells:h}=o,{x:u,y:d,n:g,f:x}=s,m=s.nu+1,p=f.length,b=[],_=[],E=[],M=[],v=c*m+f[0],S=c*m+f[p-1];let T=(u[S]+u[S+m])/2-(u[v]+u[v+m])/2,y=(d[S]+d[S+m])/2-(d[v]+d[v+m])/2;const w=Math.hypot(T,y),A=w>1e-9?T/w:0,C=w>1e-9?y/w:0;for(let I=0;I<p;I++){const z=c*m+f[I],B=z+m;let F=u[z]-u[B],O=d[z]-d[B];const k=Math.hypot(F,O);k>1e-9?(F/=k,O/=k):F=O=0;const G=I===0?-r:I===p-1?r:0;b.push(u[z]+F*r+A*G),_.push(d[z]+O*r+C*G),E.push(u[B]-F*r+A*G),M.push(d[B]-O*r+C*G)}const R=I=>{if(g&&!l.flat){const F=(c*m+f[I])*3,O=F+m*3;return l.shade(oa([g[F]+g[O],g[F+1]+g[O+1],g[F+2]+g[O+2]]))}const z=h[Math.max(0,Math.min(h.length-1,I-1))]*3,B=h[Math.min(h.length-1,I)]*3;return l.shade(l.flat?[x[B],x[B+1],x[B+2]]:oa([x[z]+x[B],x[z+1]+x[B+1],x[z+2]+x[B+2]]))};let P;if(l.flat||w<1e-6)P=gr(R(0));else{const I=t.createLinearGradient((u[v]+u[v+m])/2,(d[v]+d[v+m])/2,(u[S]+u[S+m])/2,(d[S]+d[S+m])/2);let z=null;const B=(u[v]+u[v+m])/2,F=(d[v]+d[v+m])/2;for(let O=0;O<p;O++){const k=R(O);if(z&&O<p-1&&Math.abs(k[0]-z[0])+Math.abs(k[1]-z[1])+Math.abs(k[2]-z[2])<5)continue;const G=c*m+f[O],ee=(((u[G]+u[G+m])/2-B)*T+((d[G]+d[G+m])/2-F)*y)/(w*w);I.addColorStop(ee<0?0:ee>1?1:ee,gr(k)),z=k}P=I}t.fillStyle=P,t.beginPath(),t.moveTo(b[0],_[0]);for(let I=1;I<p;I++)t.lineTo(b[I],_[I]);for(let I=p-1;I>=0;I--)t.lineTo(E[I],M[I]);t.closePath(),t.fill()}return a}function Ps(t){const e=t.slice().sort((r,o)=>r[0]-o[0]||r[1]-o[1]);if(e.length<3)return e;const n=(r,o,s)=>(o[0]-r[0])*(s[1]-r[1])-(o[1]-r[1])*(s[0]-r[0]),i=[],a=[];for(const r of e){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],r)<=0;)i.pop();i.push(r)}for(let r=e.length-1;r>=0;r--){const o=e[r];for(;a.length>=2&&n(a[a.length-2],a[a.length-1],o)<=0;)a.pop();a.push(o)}return i.pop(),a.pop(),i.concat(a)}const Un=t=>t<0?0:t>1?1:t,vi=(t,e,n)=>[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n,t[2]+(e[2]-t[2])*n],Ka=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Ir=[255,255,255];function Cr(t,e,n=1){const i=t.L;return a=>{const r=gi(a,i),o=Math.pow(Un((r+.4)/1.4),1.35),s=Math.pow(1-Un(a[2]),2),l=(.22+.95*o+.22*s*Un(r+.6))*n,c=26*o*n;return[e[0]*l+c,e[1]*l+c,e[2]*l+c*1.05]}}function My(t,e){const n=t.L,i=vi(e,Ir,.3);return a=>{const r=gi(a,n),o=Un((r+.3)/1.3),s=Math.pow(1-Un(a[2]),1.6);return vi(Ka(e,.2+.7*o),i,.6*s*(.4+.6*o))}}function _m(t,e){const n=t.L,i=t.H;return a=>{const r=Un((gi(a,n)+.2)/1.2),o=Math.pow(Un(gi(a,i)),22)*.3;return vi(Ka(e,.36+.7*r),Ir,o)}}function so(t,e,n=1){const i=t.L,a=t.H;return r=>{const o=Un((gi(r,i)+.25)/1.25),s=Un(gi(r,a)),l=(Math.pow(s,16)*.2+Math.pow(s,80)*.6)*n,c=Math.pow(1-Un(r[2]),3)*.14*n;return vi(Ka(e,.28+.78*o),Ir,Un(l+c))}}function ym(t,e){const n=t.L,i=t.H,a=Ka(e,.42),r=vi(e,Ir,.55);return o=>{const s=Un((gi(o,n)+.35)/1.35),l=Un(gi(o,i)),c=Math.pow(l,6)*.5+Math.pow(l,40)*.35;return vi(vi(a,e,s),r,Un(c))}}function sd(t,e,n,i){const a=t.H,r=t.L;return o=>{const s=2*o[2]*o[2]-1,l=-(2*o[2]*o[1]),c=Un(.45+l*.85+s*.1),f=Math.exp(-Math.pow((l+.12)/.16,2))*.55,h=Un(gi(o,r)),u=vi(n,e,Un(.1+c*.72+h*.3)),d=Math.pow(Un(gi(o,a)),70)+f*.4;return vi(u,i,Un(d))}}const Px=t=>sd(t,[255,200,88],[86,50,8],[255,247,220]),_y=t=>sd(t,[232,236,242],[58,62,72],[255,255,255]);function yy(t,e){const n=t.L,i=t.H,a=Ka(e,.22),r=vi(e,Ir,.3);return o=>{const s=vi(a,r,Un(Un(o[2])*.75+gi(o,n)*.4));return vi(s,Ir,Math.pow(Un(gi(o,i)),24)*.95)}}const wy={gold:[[0,"#fffbe8"],[.08,"#ffe7a0"],[.3,"#eeb546"],[.62,"#ad7214"],[.87,"#5a3806"],[1,"#8c5c18"]],silver:[[0,"#ffffff"],[.08,"#f3f5f9"],[.32,"#c6ccd6"],[.64,"#7a808c"],[.88,"#3d4149"],[1,"#6b717c"]],pearl:[[0,"#ffffff"],[.1,"#fdf9f7"],[.45,"#ebe4e6"],[.8,"#c6bccb"],[1,"#a89db5"]]};function ma(t,e,n,i,a){const r=e.toScreen(n),o=e.H,s=t.createRadialGradient(r[0]+o[0]*i*.85,r[1]+o[1]*i*.85,0,r[0],r[1],i);if(typeof a=="string")for(const[l,c]of wy[a])s.addColorStop(l,c);else s.addColorStop(0,gr(vi(a,Ir,.8))),s.addColorStop(.1,gr(vi(a,Ir,.3))),s.addColorStop(.35,gr(a)),s.addColorStop(.85,gr(Ka(a,.5))),s.addColorStop(1,gr(Ka(a,.62)));t.fillStyle=s,t.beginPath(),t.arc(r[0],r[1],i,0,rd),t.fill()}function Sy(t,e,n,i,a,r,o){const s=Rl(i,a),l=(m,p,b)=>{const _=m*Math.cos(p),E=m*Math.sin(p);return[n[0]+_*a[0]+E*s[0]+b*i[0],n[1]+_*a[1]+E*s[1]+b*i[1],n[2]+_*a[2]+E*s[2]+b*i[2]]},c=8,f=.55,h=.36*r,u=[],d=[];for(let m=0;m<c;m++){const p=(m+.5)/c*rd;u.push(l(r,p,0)),d.push(l(r*f,p,h))}const g=yy(e,o),x=(m,p)=>{const b=e.dir(p);b[2]<=.02||(t.fillStyle=gr(g(b)),t.beginPath(),m.forEach((_,E)=>{const M=e.toScreen(_);E?t.lineTo(M[0],M[1]):t.moveTo(M[0],M[1])}),t.closePath(),t.fill(),t.strokeStyle=t.fillStyle,t.stroke())};t.lineWidth=Math.min(.3,1/e.px),t.lineJoin="round";for(let m=0;m<c;m++){const p=u[m],b=u[(m+1)%c],_=d[(m+1)%c],E=d[m];let M=Rl(yo(_,p),yo(E,b));gi(M,i)<0&&(M=[-M[0],-M[1],-M[2]]),x([p,b,_,E],oa(M))}if(x(d,i),e.dir(i)[2]>.1){const m=e.toScreen(l(0,0,h)),p=e.L;t.fillStyle="rgba(255,255,255,0.3)",t.beginPath();const b=e.toScreen(l(r*f*.8,Math.atan2(-p[1],-p[0])+2.2,h)),_=e.toScreen(l(r*f*.9,Math.atan2(-p[1],-p[0])+Math.PI,h)),E=e.toScreen(l(r*f*.8,Math.atan2(-p[1],-p[0])+Math.PI+.94,h));t.moveTo(m[0],m[1]),t.lineTo(b[0],b[1]),t.lineTo(_[0],_[1]),t.lineTo(E[0],E[1]),t.closePath(),t.fill()}}function O0(t,e){const n=t.right-t.left;for(let i=0;i<t.widths.length;i++)if(t.widths[i]>=e*n)return i*t.step-it;return t.top}const wm=new WeakMap;function Dx(t){const e=wm.get(t);if(e)return e;const n=128,i=cx(t,n);if(!i)return null;const a=Ft/n,r=v=>(v+.5)*a-it,o=(v,S)=>i[S*n+v]>=128,s=Math.floor((42+it)/a),l=Math.ceil((58+it)/a);let c=n,f=-1;for(let v=s;v<=l;v++){for(let S=0;S<n;S++)if(o(v,S)){S<c&&(c=S);break}for(let S=n-1;S>=0;S--)if(o(v,S)){S>f&&(f=S);break}}const h=v=>{let S=-1,T=-1;for(let y=0;y<n;y++)o(y,v)&&(S<0&&(S=y),T=y);return[S,T]},u=Math.min(n-1,c+Math.round(8/a)),[d,g]=h(u);let x=-1,m=0,p=0,b=0;for(let v=Math.round((33+it)/a);v<=Math.round((67+it)/a);v++){const[S,T]=h(v);S>=0&&T-S>x&&(x=T-S,m=S,p=T,b=v)}const _=new Float32Array(n),E=[];for(let v=0;v<n;v++){const[S,T]=h(v);_[v]=S<0?0:(T-S+1)*a,S>=0&&E.push([r(S)-.5*a,r(v)],[r(T)+.5*a,r(v)])}const M={top:r(c)-.5*a,topL:r(d),topR:r(g),mid:r(b),left:r(m)-.5*a,right:r(p)+.5*a,bottom:r(f)+.5*a,widths:_,step:a,hull:Ps(E)};return wm.set(t,M),M}function Ds(t,e,n){const i=Math.cos(e),a=Math.sin(e),r=t[0]*i-t[1]*a,o=t[0]*a+t[1]*i,s=Math.cos(n),l=Math.sin(n);return[r,o*s-t[2]*l,o*l+t[2]*s]}const $0=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],ka=(t,e,n)=>[t[0]+e[0]*n,t[1]+e[1]*n,t[2]+e[2]*n];function Dl(t,e=!0){const n=new Path2D;return t.forEach((i,a)=>a?n.lineTo(i[0],i[1]):n.moveTo(i[0],i[1])),e&&n.closePath(),n}function Gl(t){let e=1/0,n=1/0,i=-1/0,a=-1/0;for(const[r,o]of t)r<e&&(e=r),o<n&&(n=o),r>i&&(i=r),o>a&&(a=o);return{x0:e,y0:n,x1:i,y1:a,cx:(e+i)/2,cy:(n+a)/2,w:i-e,h:a-n}}const ba=(t,e=0)=>{let n=t*2654435761+e*40503|0;return n=Math.imul(n^n>>>15,2246822507),n=Math.imul(n^n>>>13,3266489909),((n^n>>>16)>>>0)/4294967296};let Iu=null;function Ey(){if(Iu)return Iu;const t=48,e=typeof OffscreenCanvas=="function"?new OffscreenCanvas(t,t):typeof document<"u"?Object.assign(document.createElement("canvas"),{width:t,height:t}):null,n=e&&e.getContext("2d");if(!e||!n)return null;const i=n.createImageData(t,t);for(let a=0;a<t*t;a++){const r=a%t,o=a/t|0;let s=0;for(let c=-2;c<=2;c++)s+=ba((r+c+t)%t+(o+c+t)%t*t,5);s/=5;const l=Math.round(255*(.82+.36*s));i.data[a*4]=i.data[a*4+1]=i.data[a*4+2]=Math.min(255,l),i.data[a*4+3]=255}return n.putImageData(i,0,0),Iu=e,e}const Sm=new WeakMap;function ld(t,e,n,i=.18){var a;const r=Ey();if(!r||e.length<3)return;let o=Sm.get(t);o||Sm.set(t,o=new Map);let s=o.get(i);if(s===void 0&&(s=t.createPattern(r,"repeat"),(a=s?.setTransform)==null||a.call(s,new DOMMatrix().scale(i)),o.set(i,s)),!s)return;const l=Gl(e);t.save(),t.clip(Dl(e)),t.globalCompositeOperation="multiply",t.globalAlpha=n,t.fillStyle=s,t.fillRect(l.x0-1,l.y0-1,l.w+2,l.h+2),t.restore()}function cd(t,e,n,i,a,r=2.4){const o=e.length;if(o<3)return;let s=0;const l=[];for(let x=0;x<o;x++){const m=e[x],p=e[(x+1)%o],b=Math.hypot(p[0]-m[0],p[1]-m[1]);l.push(b),s+=b}const c=Math.min(360,Math.max(24,Math.round(s*Math.min(2.4,r*.5)))),f=Gl(e),h=new Path2D,u=new Path2D;let d=0,g=0;for(let x=0;x<c;x++){const m=(x+ba(x,i)*.8)*(s/c);for(;d<o-1&&g+l[d]<m;)g+=l[d++];const p=e[d],b=e[(d+1)%o],_=l[d]?(m-g)/l[d]:0,E=p[0]+(b[0]-p[0])*_,M=p[1]+(b[1]-p[1])*_;let v=E-f.cx,S=M-f.cy;const T=Math.hypot(v,S)||1;v/=T,S/=T;const y=(ba(x,i+1)-.5)*.9,w=Math.cos(y),A=Math.sin(y),C=v*w-S*A,R=v*A+S*w,P=a*(.35+ba(x,i+2)),I=ba(x,i+3)>.5?h:u;I.moveTo(E-C*.4,M-R*.4),I.lineTo(E+C*P,M+R*P)}t.save(),t.lineCap="round",t.lineWidth=.4,t.globalAlpha=.55,t.strokeStyle=bn(n,.14),t.stroke(h),t.strokeStyle=bn(n,-.06),t.stroke(u),t.restore()}function Os(t,e,n,i,a,r,o){if(!(a>0)||!(r>0))return;t.save(),e&&t.clip(e),t.translate(n,i),t.scale(1,r/a);const s=t.createRadialGradient(0,0,0,0,0,a);s.addColorStop(0,`rgba(0,0,0,${o})`),s.addColorStop(.55,`rgba(0,0,0,${o*.45})`),s.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=s,t.beginPath(),t.arc(0,0,a,0,Math.PI*2),t.fill(),t.restore()}const Em=48*Math.PI/180;function Ix(t,e){const n=Math.cos(Em),i=Math.sin(Em),a=oa([t*n,e*n,i]);return{L:a,H:oa([a[0],a[1],a[2]+1])}}function ud(t){var e;const n=(e=t.getTransform)==null?void 0:e.call(t);return n?Math.sqrt(Math.abs(n.a*n.d-n.b*n.c))||1:2}function Lx(t,e){const{L:n,H:i}=Ix(t.lx,t.ly);return Tx([t.cy,0,t.sy,t.sy*t.sp,t.cp,-t.cy*t.sp,-t.sy*t.cp,t.sp,t.cy*t.cp],[50,50,0],n,i,e)}const Zh=new WeakMap;let Il=Zh;function Fx(t,e){let n=Zh.get(Il);n||Zh.set(Il,n=new Map);let i=n.get(t);return i||(n.size>240&&n.clear(),i=e(),n.set(t,i)),i}function Yn(t,e,n,i,a,r,o=!0){return Rx(t,Fx(`${e}|${i}x${a}`,()=>Cx(n,i,a,r,o)))}function _r(t,e,n,i,a,r,o,s=!1){return Rx(t,Fx(`${e}|${r}x${o}`,()=>by(n,i,a,r,o,s)))}const _a=(t,e=[40,40,44])=>Hl(t)??e,Gt=Math.PI*2,zx=t=>t<=0?0:t>=1?1:t*t*(3-2*t),dr=(t,e)=>Math.sign(t)*Math.pow(Math.abs(t),e);function Ay(t,e,n,i,a,r){return Yn(t,e,(o,s)=>{const l=o*Gt,c=s*Math.PI;return[n[0]+i*Math.sin(c)*Math.cos(l),n[1]-i*Math.cos(c),n[2]+i*Math.sin(c)*Math.sin(l)]},a,r,n)}function P0(t,e,n,i,a,r,o,s,l){return Yn(t,e,(c,f)=>{const h=c*Gt,u=f*Gt,d=i+r*Math.cos(u);return n([d*Math.cos(h),a-r*Math.sin(u),d*o*Math.sin(h)])},s,l,c=>n([i*Math.cos(c*Gt),a,i*o*Math.sin(c*Gt)]))}function Am(t,e,n){return i=>{const a=oa(yo(t(Math.min(1,i+.001)),t(Math.max(0,i-.001)))),r=Rl(a,e);return ka(t(i),r,n(i))}}function Ux(t,e,n,i,a,r){const o=_a(a),s=Wn(e,Gt*i,12,20),l=Li(t,[{parts:[Ay(e,`ball${r}`,n,i*.86,s,Math.max(6,s>>1))],shade:Cr(e,o,.92)}],e.px),c=e.toScreen(n),f=Gl(l),h=Math.max(f.w,f.h)/2,u=Math.round(Math.min(340,50+h*e.px*5)),d=new Path2D,g=new Path2D;for(let p=0;p<u;p++){const b=ba(p,r)*Gt,_=h*(.25+.7*Math.sqrt(ba(p,r+1))),E=h*(.25+.35*ba(p,r+2)),M=c[0]+Math.cos(b)*_,v=c[1]+Math.sin(b)*_,S=(ba(p,r+3)-.5)*.6,T=Math.cos(b+S),y=Math.sin(b+S),w=ba(p,r+4)>.45?d:g;w.moveTo(M,v),w.quadraticCurveTo(M+Math.cos(b)*E*.5,v+Math.sin(b)*E*.5,M+T*E,v+y*E)}t.save(),t.lineCap="round",t.lineWidth=Math.max(.3,h*.06);const x=e.L,m=t.createLinearGradient(c[0]+x[0]*h,c[1]+x[1]*h,c[0]-x[0]*h,c[1]-x[1]*h);m.addColorStop(0,bn(a,.2,-.03)),m.addColorStop(1,bn(a,-.12,.02)),t.strokeStyle=m,t.globalAlpha=.85,t.stroke(d),t.strokeStyle=bn(a,-.18,.03),t.globalAlpha=.6,t.stroke(g),t.restore()}function Ty(t,e,n,i,a){const r=n.right-n.left,o=.46*r,s=.21*r,l=.33*r,c=.05*r,f=[50-.07*r,Math.max(n.top+.22*r,O0(n,.5)+.1*r),0],h=-.24,u=-.2,d=A=>$0(f,Ds(A,h,u)),g=Wn(e,Gt*o,32,56),x=Wn(e,1.2*o,10,32,6),m=Yn(e,"beret:dome",(A,C)=>{const R=A*Gt;let P,I;const z=.74;if(C<=z){const F=C/z*(Math.PI/2);P=o*Math.sin(F),I=-(c+s*Math.pow(Math.cos(F),.8))}else{const F=zx((C-z)/(1-z));P=o+(l-o)*F,I=-c*(1-F)}const B=Math.sin(Math.min(1,C/z)*Math.PI*.9);return P*=1+.035*Math.sin(R*7+.4)*B,d([P*Math.cos(R),I,P*.93*Math.sin(R)])},g,x,d([0,-c-s*.4,0])),p=Yn(e,"beret:under",(A,C)=>{const R=A*Gt,P=l*(1-C);return d([P*Math.cos(R),-.004*r*C,P*.93*Math.sin(R)])},24,2,d([0,-c-s*.4,0])),b=_a(i),_=e.toScreen(d([0,.02*r,0]));Os(t,a,_[0]+.02*r,_[1]+.045*r,l*1.25,.08*r,.4);const E=P0(e,"beret:binding",d,l,-.005*r,.022*r,.93,Wn(e,Gt*l,24,48),5),M=_a(bn(i,-.06)),v=Li(t,[{parts:[p],shade:Cr(e,b,.7)},{parts:[E],shade:so(e,M,.45)},{parts:[m],shade:Cr(e,b)}],e.px),S=Ps(v);ld(t,S,.5,.14),cd(t,S,i,11,.4,e.px);const T=.02*r,y=-c-s+.006*r,w=_r(e,"beret:stalk",A=>d([T+.014*r*A*A,y-.045*r*A,0]),[0,0,1],(A,C)=>[.016*r*(1-.25*A)*Math.cos(C),.016*r*(1-.25*A)*Math.sin(C)],8,3);Li(t,[{parts:[w],shade:Cr(e,b,.95)}],e.px),ma(t,e,d([T+.014*r,y-.047*r,0]),.019*r,Ka(b,1.15))}function Cy(t,e,n,i,a){const r=n.right-n.left,o=.53*Math.max(.5*r,n.topR-n.topL)+.08*r,s=.32*r,l=.1*r,c=o*1.05,f=[50,O0(n,.72)+.06*r,0],h=0,u=-.14,d=C=>$0(f,Ds(C,h,u)),g=(C,R)=>{const P=C*Gt,I=R*(Math.PI/2),z=o*Math.sin(I)*(1-.03*(1-R)),B=-(l+s*Math.cos(I));return d([z*Math.cos(P),B,z*.92*Math.sin(P)])},x=d([0,-l-s*.4,0]),m=Yn(e,"beanie:dome",g,Wn(e,Gt*o,28,48),Wn(e,1.3*s,9,24,6),x),p=(C,R)=>{const P=C*Gt,I=2*R-1,z=c*(1-.07*I*I*I*I)*1.01;return d([z*Math.cos(P),-l*(1-R),z*.92*Math.sin(P)])},b=Yn(e,"beanie:cuff",p,Wn(e,Gt*c,28,56),4,d([0,-l/2,0])),_=_a(i),E=_a(bn(i,.03)),M=od([b]);Os(t,a,M.cx,M.y1-.01*r,M.w*.5,.06*r,.34);const v=Li(t,[{parts:[m],shade:Cr(e,_,.96)}],e.px),S=40,T=11;if(o*Gt/S*e.px>=2.2){const C=Yn(e,"beanie:stitch",g,S,T,x,!1),R=new Path2D,P=new Path2D,I=S+1;for(let B=0;B<S*T;B++){if(C.f[B*3+2]<.12)continue;const F=Math.floor(B/S)*I+B%S,O=[C.x[F],C.y[F]],k=[C.x[F+1],C.y[F+1]],G=[C.x[F+I+1],C.y[F+I+1]],ee=[C.x[F+I],C.y[F+I]],ne=(J,he)=>{const H=[O[0]+(k[0]-O[0])*J,O[1]+(k[1]-O[1])*J],N=[ee[0]+(G[0]-ee[0])*J,ee[1]+(G[1]-ee[1])*J];return[H[0]+(N[0]-H[0])*he,H[1]+(N[1]-H[1])*he]};for(const[J,he]of[[R,0],[P,-.06]]){const H=ne(.14+he,.12),N=ne(.5+he,.88),W=ne(.86+he,.12);J.moveTo(H[0],H[1]),J.lineTo(N[0],N[1]),J.lineTo(W[0],W[1])}}const z=o*Gt/S;t.save(),t.clip(Dl(Ps(v))),t.lineCap="round",t.lineJoin="round",t.lineWidth=Math.max(.35,z*.2),t.strokeStyle=bn(i,-.22,.03),t.globalAlpha=.5,t.stroke(R),t.lineWidth=Math.max(.3,z*.12),t.strokeStyle=bn(i,.2,-.03),t.globalAlpha=.35,t.stroke(P),t.restore()}const y=Li(t,[{parts:[b],shade:Cr(e,E,.98)}],e.px),w=Gt*c/30;if(w*e.px>=3){const C=new Path2D,R=new Path2D;for(let P=0;P<60;P++){const I=P/60,z=I*Gt;if(e.dir(Ds([Math.cos(z),0,.92*Math.sin(z)],h,u))[2]<.08)continue;const B=e.toScreen(p(I,.1)),F=e.toScreen(p(I,.9)),O=P%2?C:R;O.moveTo(B[0],B[1]),O.lineTo(F[0],F[1])}t.save(),t.lineCap="round",t.lineWidth=w*.34,t.strokeStyle=bn(i,-.2,.03),t.globalAlpha=.45,t.stroke(C),t.lineWidth=w*.22,t.strokeStyle=bn(i,.16,-.02),t.globalAlpha=.4,t.stroke(R),t.restore()}const A=Ps(v.concat(y));cd(t,A,i,23,.35,e.px),Ux(t,e,d([0,-l-s-.055*r,0]),.085*r,bn(i,.06),31)}function Ry(t,e,n,i,a){const r=n.right-n.left,o=[50+.06*r,O0(n,.3)+.04*r,0],s=.18*r,l=Math.max(.3*r,Math.min(.46*r,o[1]+31-.1*r)),c=.18,f=-.12,h=y=>$0(o,Ds(y,c,f)),u=(y,w,A=1)=>{const C=y*Gt,R=s*(1-w)*(1+.04*Math.sin(w*Math.PI))*A;return h([R*Math.cos(C),-l*w,R*Math.sin(C)])},d=(y,w)=>h([0,-l*Math.min(.97,w),0]),g=Wn(e,Gt*s,20,40),x=Wn(e,l,10,24,6),m=Yn(e,"party:cone",(y,w)=>u(y,w),g,x,d),p=_a(i),b=[252,246,234],_=od([m]);Os(t,a,_.cx,_.y1,s*1.15,.04*r,.3);const E=P0(e,"party:trim",h,s*1.02,.004*r,.016*r,1,Wn(e,Gt*s,20,40),5),M=[],v=6,S=3.2;for(let y=0;y<v;y+=1)M.push(Yn(e,`party:stripe${y}`,(w,A)=>u((y+.5*A-S*w*.97)/v,w*.97,1.004),x+3,1,d));const T=Li(t,[{parts:[m],shade:_m(e,b)},{parts:[E],shade:Px(e)}],e.px);Li(t,[{parts:M,shade:_m(e,p)}],e.px),ld(t,Ps(T),.18,.1),Ux(t,e,h([0,-l-.035*r,0]),.06*r,"#f4efe6",37)}function Py(t,e,n,i){const a=n.right-n.left,r=.44*Math.max(.45*a,n.topR-n.topL)+.07*a,o=.11*a,s=.15*a,l=.9,c=[50,O0(n,.42)+.05*a,0],f=.05,h=-.22,u=j=>$0(c,Ds(j,f,h)),d=j=>oa(Ds(j,f,h)),g=(j,ue,de)=>u([ue*Math.cos(j),de,ue*l*Math.sin(j)]),x=j=>u([0,j,0]),m=Wn(e,Gt*r,32,64),p=Yn(e,"crown:band",(j,ue)=>g(j*Gt,r*(1-.018*Math.sin(ue*Math.PI)),-o*(1-ue)),m,2,(j,ue)=>x(-o*(1-ue))),b=.017*a,_=P0(e,"crown:rimTop",u,r+.004*a,-o,b,l,m,5),E=P0(e,"crown:rimBot",u,r+.004*a,0,b*1.15,l,m,5),M=-o*.55,v=Math.max(.12*a,c[1]-n.top+.04*a+M),S=Math.PI/2,T=Yn(e,"crown:cap",(j,ue)=>{const de=j*Gt,ae=ue*(Math.PI/2),Ee=.08*Math.sin(2*ae)*(.55+.45*Math.cos(5*(de-S-Math.PI/5)));return g(de,r*(.9*Math.sin(ae)+Ee),M-v*Math.cos(ae))},Wn(e,Gt*r,24,48),Wn(e,1.4*v,8,20,6),x(M-v*.4)),y=[],w=[],A=[],C=[],R=(j,ue,de,ae,Ee,L,ve)=>{ve.push(Yn(e,j,(me,we)=>{const te=me*2-1,qe=ue+te*de*Math.pow(1-we,1.3),Ue=r+.004*a+Ee*(1-Math.abs(te))*(1-.5*we)+L*we*we;return g(qe,Ue,-o-ae*we)},2,Wn(e,ae,3,5),(me,we)=>g(ue,r*.5,-o-ae*we),!1))};for(let j=0;j<5;j++){const ue=S+j/5*Gt;R(`crown:point${j}`,ue,Gt/5*.34,s,.05*a,.03*a,y),A.push(g(ue,r+.004*a+.03*a+.02*a,-o-s-.018*a));const de=ue+Math.PI/5;R(`crown:bud${j}`,de,Gt/5*.12,s*.36,.02*a,.01*a,w),C.push(g(de,r+.004*a+.012*a,-o-s*.36-.012*a))}const P=od([p]);Os(t,i,P.cx,P.y1,P.w*.5,.045*a,.34);const I=e.depth(x(M)),z=Px(e),B=sd(e,[255,196,80],[92,54,10],[255,222,150]),F=j=>B(j[2]<0?[-j[0],-j[1],-j[2]]:j),O=.024*a,k=.019*a;for(const j of A)e.depth(j)<I&&ma(t,e,j,O,"pearl");for(const j of C)e.depth(j)<I&&ma(t,e,j,k,"gold");Li(t,[{parts:[T],shade:My(e,[150,22,44])},{parts:[p],shade:z,bias:.01*a},{parts:[_],shade:z,bias:.012*a},{parts:[E],shade:z,bias:.012*a},{parts:y,shade:F,cull:!1,flat:!0},{parts:w,shade:F,cull:!1,flat:!0}],e.px);const G=[[208,20,60],[30,150,92],[36,90,220],[36,90,220],[30,150,92]];for(let j=0;j<5;j++)for(const[ue,de]of[[S+j/5*Gt,"stone"],[S+j/5*Gt+Math.PI/5,"stud"]]){const ae=d([Math.cos(ue),0,l*Math.sin(ue)]);if(e.dir(ae)[2]<.12)continue;const Ee=g(ue,r+.01*a,-o*.5);if(de==="stud"){ma(t,e,Ee,.013*a,"gold");continue}const L=(j===0?.034:.027)*a;ma(t,e,Ee,L*1.3,"gold");const ve=d([-Math.sin(ue),0,l*Math.cos(ue)]);Sy(t,e,ka(Ee,ae,.006*a),ae,ve,L,G[j])}for(const j of A)e.depth(j)>=I&&ma(t,e,j,O,"pearl");for(const j of C)e.depth(j)>=I&&ma(t,e,j,k,"gold");const ee=.034*a,ne=x(M-v-ee*.75),J=d([0,-1,0]),he=(j,ue,de)=>_r(e,j,ae=>[ue[0]+(de[0]-ue[0])*ae,ue[1]+(de[1]-ue[1])*ae,ue[2]+(de[2]-ue[2])*ae],d([0,0,1]),Pl(.009*a,.009*a,.5),2,6),H=ka(ne,J,ee*.8),N=ka(ne,J,ee*.8+.075*a),W=ka(ne,J,ee*.8+.05*a),fe=d([1,0,0]);ma(t,e,ne,ee,"gold"),Li(t,[{parts:[he("crown:barV",H,N)],shade:z},{parts:[he("crown:barH",ka(W,fe,-.026*a),ka(W,fe,.026*a))],shade:z}],e.px)}function Dy(t,e,n){const i=e.right-e.left,a=.15*i,r=1.1,o=.05*i,s=.068*i,l=e.mid-.07*i,c=.5,f=_a(n),h=_a(bn(n,-.12)),u=_a(bn(n,.08)),d=Wn(t,Gt*a,20,40),g=[],x=[],m=[],p=[],b=_y(t);for(const N of[-1,1]){const W=[N*Math.cos(c),0,Math.sin(c)],fe=[0,1,0],j=[-Math.sin(c),0,N*Math.cos(c)],ue=[(N<0?e.left:e.right)-N*.02*i,l,.01*i],de=(q,Z,be)=>{const Me=Math.cos(be)*r*Z,Fe=Math.sin(be)*Z;return[ue[0]+W[0]*q+fe[0]*Me+j[0]*Fe,ue[1]+W[1]*q+fe[1]*Me+j[1]*Fe,ue[2]+W[2]*q+fe[2]*Me+j[2]*Fe]},ae=q=>ka(ue,W,q);p.push({c:ue,ry:a*r});const Ee=a*.9-o*.5,L=d>=48?1:0,ve=Yn(t,`phones:cushion${N}`,(q,Z)=>{const be=q*Gt,Me=Z*Math.PI,Fe=1+.006*L*Math.sin(be*24)*Math.sin(Me);return de(o*.5*(1-Math.cos(Me)),(Ee+o*.62*Math.sin(Me))*Fe,be)},d,5,(q,Z)=>ae(o*.5*(1-Math.cos(Z*Math.PI)))),me=Yn(t,`phones:shell${N}`,(q,Z)=>{const be=Z*(Math.PI/2);return de(o+s*Math.pow(Math.sin(be),.55),a*(.7+.3*Math.pow(Math.cos(be),.55)),q*Gt)},d,5,ae(o+s*.5)),we=.66*a,te=.017*i,qe=Yn(t,`phones:ring${N}`,(q,Z)=>de(o+s+te*.45*Math.sin(Z*Gt),we+te*Math.cos(Z*Gt),q*Gt),d,5,q=>de(o+s,we,q*Gt)),Ue=we-te*.5,_e=Yn(t,`phones:plate${N}`,(q,Z)=>de(o+s+.013*i*(1-Z*Z),Ue*Z,q*Gt),d,3,ae(o+s-.02*i)),U=o+s*.45,D=a*1.04+.022*i,V=q=>{const Z=q*Math.PI,be=-Math.sin(Z)*r*D,Me=Math.cos(Z)*D;return[ue[0]+W[0]*U+fe[0]*be+j[0]*Me,ue[1]+W[1]*U+fe[1]*be+j[1]*Me,ue[2]+W[2]*U+fe[2]*be+j[2]*Me]},pe=_r(t,`phones:yoke${N}`,V,W,Pl(.013*i,.008*i,.6),Wn(t,Math.PI*D,12,24),6);x.push(V(0),V(1)),m.push(V(.5)),g.push({parts:[ve],shade:so(t,h,.35)},{parts:[me],shade:so(t,f,.8)},{parts:[qe],shade:b,bias:.02*i},{parts:[_e],shade:so(t,u,1.3),bias:.01*i},{parts:[pe],shade:b})}const[_,E]=m,M=(_[2]+E[2])/2,v=(_[0]+E[0])/2,S=(E[0]-_[0])/2,T=(_[1]+E[1])/2,y=N=>.005*i+.022*i*Math.pow(Math.sin(Math.PI*N),.35),w=2/2.2,A=N=>{let W=1/0;const fe=e.hull;for(let j=0;j<fe.length;j++){const ue=fe[j],de=fe[(j+1)%fe.length];ue[0]===de[0]||N<Math.min(ue[0],de[0])||N>Math.max(ue[0],de[0])||(W=Math.min(W,ue[1]+(de[1]-ue[1])*(N-ue[0])/(de[0]-ue[0])))}return W};let C=T-e.top;for(let N=1;N<64;N++){const W=Math.PI*(1-N/64),fe=Math.pow(Math.abs(Math.sin(W)),w),j=A(v+S*dr(Math.cos(W),w));fe>.05&&Number.isFinite(j)&&(C=Math.max(C,(T-j+2*y(N/64)+.006*i)/fe))}const R=N=>{const W=Math.PI*(1-N);return[v+S*dr(Math.cos(W),w),T-C*Math.pow(Math.abs(Math.sin(W)),w),M]},P=(N,W)=>fe=>R(N+(W-N)*fe),I=[0,0,1],z=S*2+C*2,B=Wn(t,z,24,48),F=.09,O=.016*i,k=Am(P(F,1-F),I,()=>O),G=N=>zx(Math.min(N,1-N)/.07),ee=_r(t,"phones:bandShell",k,I,(N,W)=>{const fe=G(N);return[(.024+.016*fe)*i*dr(Math.cos(W),.4),(.008+.008*fe)*i*dr(Math.sin(W),.4)]},B,6),ne=Am(P(F+.02,1-F-.02),I,N=>-y(F+.02+(1-2*F-.04)*N)),J=_r(t,"phones:bandPad",ne,I,(N,W)=>[.034*i*dr(Math.cos(W),.5),y(F+.02+(1-2*F-.04)*N)*dr(Math.sin(W),.7)],B,6),he=[P(0,F+.03),P(1-F-.03,1)].map((N,W)=>_r(t,`phones:slider${W}`,N,I,Pl(.022*i,.006*i,.4),4,6));g.push({parts:[ee],shade:so(t,f,.9)},{parts:[J],shade:so(t,h,.3)},{parts:he,shade:b});const H=[];for(let N=0;N<=48;N++)H.push(ka(ne(.04+.92*N/48),I,.034*i+.001*i));return{layers:g,pivots:x,pivotR:.017*i,stitch:H,seats:p}}let el=null;function Nx(t,e,n,i,a,r){const o=`${e.m.join()}|${e.px}|${e.L.join()}|${i}`;(!el||el.m!==n||el.key!==o)&&(el={m:n,key:o,ph:Dy(e,n,i)});const s=el.ph,l=n.right-n.left,c=f=>a==="front"?f>=0:f<0;if(a==="front")for(const f of s.seats){if(e.depth(f.c)<0)continue;const h=e.toScreen(f.c);Os(t,r,h[0],h[1]+.01*l,.06*l,f.ry*1.05,.26)}Li(t,s.layers.map(f=>({...f,keep:c})),e.px);for(const f of s.pivots)c(e.depth(f))&&ma(t,e,f,s.pivotR,"silver");if(a==="front"&&l*e.px>120&&e.dir([0,0,1])[2]>.3){const f=s.stitch.map(h=>e.toScreen(h));t.save(),t.setLineDash([.022*l,.014*l]),t.lineCap="round",t.lineWidth=.0045*l,t.strokeStyle=bn(i,.12),t.globalAlpha=.55,t.stroke(Dl(f,!1)),t.restore()}}function Iy(t,e,n,i,a,r,o,s,l=!1){if(n.facing<.05)return;const c=i.right-i.left,f=s.y+22*s.scale,h=Math.max(f,i.bottom-.15*c),u=Math.max(0,i.bottom-3-h),d=Math.min(c,100)*Math.max(.5,Math.min(1,u/15)),g=r(50,h),x=(A,C,R)=>[50+A*d,h+C*d,g+R*d],m=_a(a),p=[x(-.36,-.18,0),x(.36,.18,0),x(-.36,.18,0),x(.36,-.18,0)].map(A=>e.toScreen(A)),b=Gl(p),_=e.toScreen(x(.01,.08,0));Os(t,o,_[0],_[1],b.w*.52,b.h*.5,.3);const E=Wn(e,.32*d,8,16),M=Wn(e,.3*d,8,16,6),v=`${g.toFixed(2)},${h.toFixed(2)},${d.toFixed(2)}`,S=!!l,T=S?Cr(e,m):ym(e,m),y=[];for(const A of[-1,1]){const C=(R,P)=>{const I=.058+.3*R-.035*Math.pow(R,4)*Math.sin(Math.PI*P),z=-(.05+.12*Math.pow(R,.8))*Math.cos(Math.PI*P)+.012*R*R,B=.018+.058*Math.sin(Math.PI*(.12+.88*R)),F=.016*Math.sin(3*Math.PI*P)*Math.pow(1-R,1.3);return x(A*I,z,(B+F)*Math.sin(Math.PI*P)+.004)};y.push({parts:[Yn(e,`bow:wing${A}@${v}`,C,E,M,R=>x(A*(.058+.3*R),0,-.03))],shade:T}),y.push({parts:[Yn(e,`bow:end${A}@${v}`,(R,P)=>{const I=C(1,P);return[I[0],I[1],I[2]-(I[2]-g)*R]},1,M,x(A*.2,0,-.03))],shade:T})}const w=Yn(e,`bow:knot@${v}`,(A,C)=>{const R=.068*(2*A-1)*(1-.12*Math.sin(Math.PI*C)),P=.075*(2*C-1),I=Math.pow(Math.max(0,1-Math.pow(Math.abs(2*A-1),3)),.5),z=Math.pow(Math.max(0,1-Math.pow(Math.abs(2*C-1),5)),.4);return x(R,P,.012+.075*I*z)},6,6,x(0,0,-.02));if(y.push({parts:[w],shade:S?Cr(e,m,.9):ym(e,Ka(m,.9))}),!S){Li(t,y,e.px);return}for(let A=0;A<y.length;A+=2){const C=y.slice(A,A+2),R=Ps(Li(t,C,e.px));ld(t,R,.5,.1),cd(t,R,a,41+A,.3,e.px)}}const Tm={round:{rx:10.8,ry:10.8,n:2,tr:1.15,td:1.2},square:{rx:12,ry:9.6,n:4.2,tr:1.45,td:1.4},shades:{rx:12.6,ry:10,n:3.4,tr:1.6,td:1.5}};function Cm(t,e,n,i,a,r={yaw:0,pitch:0}){if(e==="none")return;Il=Tm;const o=Tm[e],s=Math.cos(r.yaw),l=Math.sin(r.yaw),c=Math.cos(r.pitch),f=Math.sin(r.pitch),{L:h,H:u}=Ix(i.lx,i.ly),d=Tx([s,0,l,f*l,c,-f*s,-c*l,f,c*s],[0,0,0],h,u,ud(t)),g=Math.max(n[0].fz,n[1].fz)+3.2,x=C=>g-.0045*C*C,m=2/o.n,p=(C,R)=>P=>{const I=P*Gt,z=C.ox+(o.rx+R)*dr(Math.cos(I),m),B=C.oy+(o.ry+R)*dr(Math.sin(I),m);return[z,B,x(z)]},b=(C,R,P=48)=>{const I=p(C,R),z=[];for(let B=0;B<P;B++)z.push(d.toScreen(I(B/P)));return z},_=n.map(C=>Math.max(0,Math.min(1,(C.z-.18)*3.2)));if(a==="shadow"){for(let C=0;C<2;C++)_[C]<=0||(t.save(),t.globalAlpha=.22*_[C],t.translate(-i.lx*1.6,-i.ly*1.6+.8),t.lineWidth=o.tr*2+.6,t.lineJoin="round",t.strokeStyle="#000",t.stroke(Dl(b(n[C],0))),t.restore());return}const E=so(d,[22,22,26],1.1);for(let C=0;C<2;C++){if(_[C]<=0)continue;const R=Dl(b(n[C],-o.tr*.5)),P=Gl(b(n[C],0,16));if(t.save(),t.globalAlpha=_[C],e==="shades"){const O=t.createLinearGradient(P.cx,P.y0,P.cx,P.y1);O.addColorStop(0,"rgba(58,60,78,0.97)"),O.addColorStop(.55,"rgba(18,18,26,0.98)"),O.addColorStop(1,"rgba(30,26,44,0.98)"),t.fillStyle=O}else{const O=t.createLinearGradient(P.cx,P.y0,P.cx,P.y1);O.addColorStop(0,"rgba(236,244,255,0.26)"),O.addColorStop(.45,"rgba(214,230,255,0.08)"),O.addColorStop(1,"rgba(214,230,255,0.14)"),t.fillStyle=O}t.fill(R),t.clip(R);const I=P.w,z=P.h,B=(O,k,G)=>{t.globalAlpha=_[C]*G,t.fillStyle="#fff",t.beginPath(),t.moveTo(P.x0+I*O,P.y1+z*.1),t.lineTo(P.x0+I*(O+.55),P.y0-z*.1),t.lineTo(P.x0+I*(O+.55+k),P.y0-z*.1),t.lineTo(P.x0+I*(O+k),P.y1+z*.1),t.closePath(),t.fill()},F=e==="shades"?1.4:1;B(-.28,.26,.16*F),B(.06,.07,.3*F),t.restore()}const M=Wn(d,Gt*o.rx*1.1,28,56,8),v=C=>_r(d,`rim:${e}:${C.ox},${C.oy},${C.fz.toFixed(2)}`,p(C,0),[0,0,1],Pl(o.td,o.tr,.55),M,6,!0),[S,T]=n,y=C=>{const R=e==="round",P=[S.ox+o.rx*(R?.9:.98),S.oy-o.ry*(R?.32:.42),0],I=[T.ox-o.rx*(R?.9:.98),T.oy-o.ry*(R?.32:.42),0],z=[0,(S.oy+T.oy)/2-o.ry*(R?.8:.6),0],B=1-C,F=B*B*P[0]+2*B*C*z[0]+C*C*I[0],O=B*B*P[1]+2*B*C*z[1]+C*C*I[1];return[F,O,x(F)+.3]},w=_r(d,`bridge:${e}:${S.ox},${S.oy},${T.ox},${g.toFixed(2)}`,y,[0,0,1],Pl(o.td*.8,o.tr*.75,.7),8,6),A=[{part:v(S),a:_[0],d:d.depth([S.ox,S.oy,g])},{part:v(T),a:_[1],d:d.depth([T.ox,T.oy,g])},{part:w,a:Math.min(_[0],_[1]),d:d.depth([0,S.oy,g])}].sort((C,R)=>C.d-R.d);for(const C of A)C.a<=0||(t.save(),t.globalAlpha=C.a,Li(t,[{parts:[C.part],shade:E}],d.px),t.restore());for(const[C,R,P]of[[S,-1,_[0]],[T,1,_[1]]]){if(P<=0)continue;t.save(),t.globalAlpha=P;const I=C.ox+R*o.rx*.93;ma(t,d,[I,C.oy-o.ry*.5,x(I)+o.td],.75,"silver"),t.restore()}}function Ly(t,e,n,i){if(!i.headphones)return;const a=Dx(e);a&&(Il=a,Nx(t,Lx(n,ud(t)),a,i.color,"behind",null))}function Fy(t,e,n,i,a,r,o){const s=Dx(e);if(!s)return;Il=s;const l=Lx(n,ud(t));switch(i.bowTie&&Iy(t,l,n,s,i.color,r,a,o,i.fabric),i.headphones&&Nx(t,l,s,i.color,"front",a),i.hat){case"beret":Ty(t,l,s,i.color,a);break;case"beanie":Cy(t,l,s,i.color,a);break;case"party":Ry(t,l,s,i.color,a);break;case"crown":Py(t,l,s,a);break}}const Ua=1.5,s0=.1,lo=17,zy=15,Uy=.9,Rm=(t,e)=>e+(1-e)*Math.sqrt(Math.max(0,1-t*t)),Ny=25,Oy=6.3,$y={eyes:1,mouth:-3.5},_c=new Map;function ky(t,e,n){const i=`${t}|${e}|${n}`;let a=_c.get(i);if(!a){const r=bn(t,-.3*e,.05*e),o=bn(t,-.12*e,.03*e),s=[],l=[];for(let c=0;c<lo;c++){const f=c/(lo-1);s.push(f>.6?"":Dm(r,o,f/.6)),l.push(f>=.5?t:Dm(r,t,f/.5))}a={base:t,far:r,near:o,light:bn(t,.04*n),dark:bn(t,-.3*e,.05*e),capTop:bn(t,.035*n),capBottom:bn(t,-.035*e),crispMix:s,smoothMix:l,grad:null},_c.size>200&&_c.clear(),_c.set(i,a)}return a}const Pm=t=>(t.startsWith("hsl(")?t:bn(t,0)).match(/[\d.]+/g).map(Number);function Dm(t,e,n){const i=Pm(t),a=Pm(e),r=i.map((o,s)=>o+(a[s]-o)*n);return`hsl(${r[0].toFixed(1)} ${r[1].toFixed(1)}% ${r[2].toFixed(1)}%)`}const Go=34,By=Math.PI*1.55,Hy=57,Wy=.4,Im=-.28,yc=new Map;function Gy(t){let e=yc.get(t);return e||(e={base:bn(t,.1,.02),light:bn(t,.3,.04),dark:bn(t,-.22,.08),halo:bn(t,.2)},yc.size>200&&yc.clear(),yc.set(t,e)),e}const wc=(t,e)=>t.replace(")",` / ${Math.max(0,Math.min(1,e)).toFixed(3)})`);function Lm(t,e,n,i,a,r,o){const s=o?.strength??0,l=Math.min(1,e.whirl*s);if(l<=.01)return;const c=o?.size??1,f=o?.width??1,h=o?.length??1,u=o?.tilt??1,d=By*h,g=Gy(n),x=-e.whirlAngle,m=Hy*c,p=m*Wy*u*(r?1.14:.86),b=Math.atan2(a,i)-Im;t.save(),t.rotate(Im),t.translate(0,5),t.lineCap="butt";const _=(E,M,v,S,T)=>{t.strokeStyle=S,t.lineWidth=v,t.beginPath(),t.ellipse(0,T,m,p,0,E,M,!1),t.stroke()};if(r)for(let E=0;E<Go;E++){const M=E/Go,v=x+M*d,S=v+d/Go+.012;if(Math.sin((S+v)/2)<=0)continue;const T=Math.pow(1-M,1.3);_(v,S,(2+8*T)*1.5*f,`rgba(0,0,0,${(.2*l*T).toFixed(3)})`,3.5)}for(let E=0;E<Go;E++){const M=E/Go,v=x+M*d,S=v+d/Go+.012,T=(S+v)/2;if(Math.sin(T)>0!==r)continue;const y=.6+.4*Math.sin(T),w=Math.pow(1-M,1.3),A=1+.18*Math.sin(M*9+1.2),C=(2+8*w)*y*f*A,R=l*(.3+.7*w)*y,P=.5+.5*Math.cos(T-b);_(v,S,C*2.6,wc(g.halo,R*.2),0),_(v,S,C*.8,wc(g.dark,R*.45),C*.32),_(v,S,C,wc(g.base,R*.72),0),_(v,S,C*.62,wc(g.light,R*.78*(.4+.6*P)),-C*.16),_(v,S,C*.24,`rgba(255,255,255,${(R*.9*(.15+.85*P*P)).toFixed(3)})`,-C*.3)}t.restore()}const Vy=t=>{if(t===void 0||!Number.isFinite(t))return{};const e=t*Math.PI/180;return{bx:Math.sin(e),by:-Math.cos(e)}},Ox={fabric:{shadow:1.15,highlight:1.45,light:295,rim:.6,spread:1.6},other:{shadow:.35,highlight:1.3,light:300,rim:.5,spread:1.55}};function Fm(t,e,n,i){const a=e*Ua;t.clearRect(0,0,a,a);const r=e/100;let o,s;if(i.dpr!==void 0)o=i.dpr,s=[o,0,0,o,0,0];else if(t.getTransform){const me=t.getTransform();s=[me.a,me.b,me.c,me.d,me.e,me.f],o=me.a||1}else o=1,s=[1,0,0,1,0,0];const l=Ox[i.shading==="fabric"?"fabric":"other"],c=i.shadow??l.shadow,f=i.highlight??l.highlight,h=zy*(i.depth??.65),u=i.rim??l.rim,d=1-(1-Uy)*u,g=i.spread??l.spread,x=(i.light??l.light)*Math.PI/180,m=Math.sin(x),p=-Math.cos(x),b=ky(i.color,c,f),_=Math.cos(n.yaw),E=Math.sin(n.yaw),M=Math.cos(n.pitch),v=Math.sin(n.pitch),S=_*M,T=me=>Math.abs(me)<.22?me<0?-.22:.22:me,y=T(_),w=T(M),A=Math.cos(n.roll),C=Math.sin(n.roll),R=n.sx*r,P=n.sy*r,I=50*(1-n.sy)*r,z=hs(s,[A*R,C*R,-C*P,A*P,a/2+n.x*r-C*I,a/2+s0*e+n.y*r+A*I]);t.save(),t.setTransform(z[0],z[1],z[2],z[3],z[4],z[5]),t.lineCap="round",t.lineJoin="round";const B=i.shading,F=(me,we,te,qe=!0)=>{let Ue=b.near,_e=b.base;if(B==="crisp"){if(!b.grad||b.grad.lx!==m||b.grad.ly!==p){const Se=t.createLinearGradient(m*56,p*56,-m*56,-p*56);Se.addColorStop(0,b.light),Se.addColorStop(.45,b.near),Se.addColorStop(1,b.dark);const Ie=t.createLinearGradient(m*46,p*46,-m*46,-p*46);Ie.addColorStop(0,b.capTop),Ie.addColorStop(1,b.capBottom),b.grad={lx:m,ly:p,lit:Se,cap:Ie}}Ue=b.grad.lit,_e=b.grad.cap}let U=!1;(B==="plastic"||B==="fabric")&&(U=xy(t,{...i,path:me,typeKey:we,shading:qe?B:"plastic"},{cy:y,sy:E,cp:w,sp:v,facing:S,roll:n.roll,halfDepth:te,lx:m,ly:p,...Vy(i.backLight),dev:e*o,ctm:z,still:i.still,round:i.roundness??1},b,null,{shadow:c,highlight:f,spread:g,rim:u,vivid:i.vivid??0,front:Math.min(85,Math.max(0,i.lightFront??32))*Math.PI/180,shine:i.shine??0,sheen:i.sheen??0,backSoft:i.backSoftness??1}));const D=(B==="plastic"||B==="fabric")&&!U?"smooth":B,V=D==="smooth",pe=V&&typeof Path2D=="function"?new Path2D:null,q=S>=0?1:-1,[Z,be,Me,Fe,Pe,Ae]=z;let De=null,Qe=1,ot=0,ke=0,ct=1,X=0,He=0;for(let Se=0;Se<lo&&!U;Se++){const Ie=-1+2*(q>0?Se:lo-1-Se)/(lo-1),Y=Rm(Ie,d),oe=Se/(lo-1),Ce=y*Y,ce=E*v*Y,Te=w*Y,Le=Ie*E*te-50*Ce,$e=-Ie*y*v*te-50*ce-50*Te,We=Qe*ct-ot*ke,et=ct/We,Ct=-ot/We,yt=-ke/We,Ge=Qe/We,on=(ke*He-ct*X)/We,Ot=(ot*X-Qe*He)/We;t.transform(et*Ce+yt*ce,Ct*Ce+Ge*ce,yt*Te,Ge*Te,et*Le+yt*$e+on,Ct*Le+Ge*$e+Ot),Qe=Ce,ot=ce,ke=0,ct=Te,X=Le,He=$e;let je;V?je=b.smoothMix[Se]:Se===lo-1?je=_e:oe>.6?je=Ue:je=b.crispMix[Se],je!==De&&(t.fillStyle=De=je),t.fill(me),pe&&pe.addPath(me,{a:Ce,b:ce,c:0,d:Te,e:Le,f:$e})}if(U||t.setTransform(Z,be,Me,Fe,Pe,Ae),pe&&D==="smooth"){t.save(),t.clip(pe);const Se=Math.min(1,.34*c),Ie=t.createRadialGradient(-m*45,-p*45,4*g,-m*45,-p*45,84*g);Ie.addColorStop(0,`rgba(0,0,0,${Se})`),Ie.addColorStop(.5,`rgba(0,0,0,${Se*.35})`),Ie.addColorStop(1,"rgba(0,0,0,0)"),t.globalCompositeOperation="multiply",t.fillStyle=Ie,t.fillRect(-120,-120,240,240),t.globalCompositeOperation="source-over";const Y=Math.min(1,.22*f),oe=t.createRadialGradient(m*37,p*37,0,m*37,p*37,62*g);oe.addColorStop(0,`rgba(255,255,255,${Y})`),oe.addColorStop(.6,`rgba(255,255,255,${Y*.23})`),oe.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=oe,t.fillRect(-120,-120,240,240),t.restore()}return U};Lm(t,n,i.color,m,p,!1,i.whirl);const O=i.wear,k=!!O&&(O.hat!=="none"||O.glasses!=="none"||O.headphones||O.bowTie),G={cy:y,sy:E,cp:w,sp:v,facing:S,lx:m,ly:p};k&&Ly(t,i.path,G,O);const ee=i.typeKey??"custom",ne=i.parts?Array.isArray(i.parts)?i.parts:[i.parts]:[];for(let me=0;me<ne.length;me++)F(ne[me],Array.isArray(i.parts)?`${ee}:parts${me}/${ne.length}`:`${ee}:parts`,h*(i.partsDepth??.4),!1);const J=F(i.path,ee,h),he=S>=0?1:-1,H=i.roundness??1,N=J,W=N?1:Rm(he,d),fe=(me,we)=>N?y_(ee,h,me,we,H)??.8*h:h*W,j=N?.55*fe(i.faceX,i.faceY):h,ue=y*W,de=E*v*W,ae=w*W,Ee=he*E*j-50*ue,L=-he*y*v*j-50*de-50*ae;let ve=null;if(k&&typeof Path2D=="function"&&(ve=new Path2D,ve.addPath(i.path,{a:ue,b:de,c:0,d:ae,e:Ee,f:L})),S>-.2){t.save();{const[qe,Ue,_e,U,D,V]=z;t.setTransform(qe*ue+_e*de,Ue*ue+U*de,_e*ae,U*ae,qe*Ee+_e*L+D,Ue*Ee+U*L+V),t.clip(i.path),t.setTransform(qe,Ue,_e,U,D,V)}t.translate(i.faceX-50,i.faceY-50),t.scale(i.faceScale,i.faceScale),B==="plastic"&&J&&(t.globalAlpha=.93);const me=qy(t,n,i);t.globalAlpha=1;const we=O&&O.glasses!=="none"?O.glasses:null,te={yaw:n.yaw,pitch:n.pitch};we&&Cm(t,we,me,{lx:m,ly:p},"shadow",te),t.restore(),we&&(t.save(),t.translate(i.faceX-50,i.faceY-50),t.scale(i.faceScale,i.faceScale),Cm(t,we,me,{lx:m,ly:p},"frame",te),t.restore())}k&&Fy(t,i.path,G,O,ve,fe,{y:i.faceY,scale:i.faceScale}),Lm(t,n,i.color,m,p,!0,i.whirl),t.restore()}const xs=30;function zm(t,e,n,i){const a=Math.asin(Math.max(-1,Math.min(1,t/xs)))+n,r=Math.asin(Math.max(-1,Math.min(1,-e/xs)))+i,o=Math.cos(r);return{x:xs*Math.sin(a)*o,y:-xs*Math.sin(r),sx:Math.cos(a),sy:o,z:Math.cos(a)*o}}const Um=8,Sc=new Map;function Xy(t,e,n){const i=Math.round(t*50),a=Math.round(e*50),r=Math.round(n*50),o=i+2e3*a+4e6*r;let s=Sc.get(o);if(!s){const l=i/50,c=a/50,f=r/50;let h=`M${-l} ${c}`;for(let u=1;u<=Um;u++){const d=u/Um,g=1-d;h+=` L${(g*g*-l+d*d*l).toFixed(3)} ${((g*g+d*d)*c+2*g*d*f).toFixed(3)}`}s=new Path2D(h),Sc.size>256&&Sc.clear(),Sc.set(o,s)}return s}const Nm=Math.sin(.684),Om=Math.cos(.684),Ec=new Map;function Yy(t){const e=T=>Math.round(T*50)/50,n=e(t.hw),i=e(t.t0),a=e(t.a),r=e(t.yt),o=e(t.ab),s=e(t.yb),l=`${n},${i},${a},${r},${o},${s}`;let c=Ec.get(l);if(c)return c;const f=T=>T.toFixed(3),h=i*Nm,u=i*Om,d=-n+h,g=-u,x=n-h,m=-u,p=-n-h,b=u,_=n+h,E=u,M=4/3*i*Om,v=4/3*i*Nm,S=`M${f(d)} ${f(g)}C${f(-n+a*n)} ${f(r-i)} ${f(n-a*n)} ${f(r-i)} ${f(x)} ${f(m)}C${f(x+M)} ${f(m-v)} ${f(_+M)} ${f(E-v)} ${f(_)} ${f(E)}C${f(n-o*n)} ${f(s+i)} ${f(-n+o*n)} ${f(s+i)} ${f(p)} ${f(b)}C${f(p-M)} ${f(b-v)} ${f(d-M)} ${f(g-v)} ${f(d)} ${f(g)}Z`;return c=new Path2D(S),Ec.size>256&&Ec.clear(),Ec.set(l,c),c}function qy(t,e,n){const[i,a,r]=e.w,o=n.ink,s=$y[n.face],l=Ny/2,c=e.lookX,f=e.lookY,{yaw:h,pitch:u}=e,d=(y,w,A,C=1)=>{const R=zm(y,w,h,u);R.z<=.02||C<=.01||(t.save(),t.globalAlpha=C*Math.min(1,R.z*5),t.translate(R.x,R.y),t.scale(Math.max(.02,R.sx),Math.max(.02,R.sy)),A(),t.restore())},g=(y,w)=>Math.abs(y)<=w?0:Math.sign(y)*(Math.abs(y)-w)/(1-w),x=y=>Math.max(-1,Math.min(1,y)),m=g(x(-e.pitch/.26-e.lookY/7),.34),p=Math.abs(g(x(e.lookX/4.5),.4)),b=Math.max(.3,1+.55*m-.1*p),_=1-.05*m+.12*p,E=i+a*(1-e.laugh),M=a*e.laugh,v=Math.max(0,-e.y)/26,S=.5+.5*e.breath;for(const y of[-1,1]){const w=y<0?e.blinkL:e.blinkR,A=Math.max(0,Math.min(1,e.eyeOpen*(1-w))),C=E*A,R=E*(1-A),P=M,I=r,z=C*.01+R*5.4+P*6.2+I*6,B=C*1.1*b+R*.6+P*(2.2-v*1.5)+I*(-1.4+S),F=C*-3.3*b+R*.6+P*(-11.4-4*v)+I*(5.4+2*S),O=C*Oy*2*_+R*2.8+P*4.4+I*4,k=c*(C+.5*(R+P)),G=f*(C+.5*R);d(y*l+k,s+G,()=>{t.strokeStyle=o,t.lineWidth=O,t.stroke(Xy(z,B,F))})}if(n.face==="mouth"){const y=c*.35,w=(.6+.4*i)*(1+.06*e.breath),A=(.6+.4*a)*(1+.25*Math.max(0,-e.y)/26),C=2.7*r*(1+.25*e.breath),R=(I,z,B)=>i*I+a*z+r*B,P={hw:R(6.5*w,9.5*A,C),t0:R(1.9,0,0),a:R(2/3,2/3,0),yt:R(3.53*w,1.6*A,-4*C/3),ab:R(2/3,0,0),yb:R(3.53*w,17.3*A,4*C/3)};d(y,R(12.5,11.6,15.5),()=>{t.fillStyle=o,t.fill(Yy(P))})}const T=y=>{const w=zm(y,s,h,u);return{x:w.x,y:w.y,sx:w.sx,sy:w.sy,z:w.z,ox:y,oy:s,fz:Math.sqrt(Math.max(0,xs*xs-y*y-s*s))}};return[T(-l),T(l)]}const Ba={x:NaN,y:NaN},ys=new Set;let ya=0,l0=0;function $x(t){ya=0;const e=l0?Math.min(.1,(t-l0)/1e3):0;l0=t,ys.forEach(n=>n(e)),ys.size&&(ya=requestAnimationFrame($x))}function kx(){ya||typeof document>"u"||document.hidden||(l0=0,ya=requestAnimationFrame($x))}let $m=!1;function jy(){$m||typeof document>"u"||($m=!0,document.addEventListener("pointermove",t=>{Ba.x=t.clientX,Ba.y=t.clientY},{passive:!0}),document.addEventListener("pointerleave",()=>{Ba.x=NaN,Ba.y=NaN}),window.addEventListener("blur",()=>{Ba.x=NaN,Ba.y=NaN}),document.addEventListener("visibilitychange",()=>{document.hidden?(ya&&cancelAnimationFrame(ya),ya=0):ys.size&&kx()}))}function Ky(t){return jy(),ys.add(t),kx(),()=>{ys.delete(t),!ys.size&&ya&&(cancelAnimationFrame(ya),ya=0)}}function km(t){let e=2166136261;for(let n=0;n<t.length;n++)e=Math.imul(e^t.charCodeAt(n),16777619);return(e>>>0)%1e3/1e3}const xi=(t,e,n)=>Math.min(n,Math.max(e,Number.isFinite(t)?t:1)),Bm=new Map;function Zy(t){let e=Bm.get(t);return e||(e=new Path2D(t),Bm.set(t,e)),e}const Hm=new Map;function Jy(t){let e=Hm.get(t);return e||(e=t.split(/(?=M)/).filter(n=>n.trim()).map(n=>new Path2D(n)),Hm.set(t,e)),e}const Wm=4e3,wl=new Map;function Ac(){if(r0())return;for(const e of wl.values())if(!e.ready())return;const t=[...wl.values()];wl.clear();for(const e of t)e.show()}const Lu=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Fu=ie.forwardRef(function({type:t="clover",path:e,face:n,state:i="default",size:a=64,color:r,ink:o,brightness:s,saturation:l,speed:c=1,paused:f=!1,seed:h,shading:u="fabric",hat:d="none",glasses:g="none",headphones:x=!1,bowTie:m=!1,accessoryColor:p="#27272b",shadow:b,highlight:_,depth:E=.65,roundness:M=1,furLength:v=1,furDensity:S=1.6,furFuzz:T=.9,furClumps:y=.4,furCurl:w=.7,furGravity:A=.9,light:C,rim:R,spread:P,backLight:I,lightFront:z,shine:B,sheen:F,backSoftness:O,pose:k,interactive:G=!0,turn:ee=1,theme:ne="auto",whirl:J=0,whirlSize:he=1,whirlWidth:H=1,whirlLength:N=1,whirlTilt:W=1,jumpHeight:fe=26,jumpTime:j=.68,jumpStretch:ue=1,jumpSpin:de=1,jumpLean:ae=6,jumpEvery:Ee=8,jumpLand:L=0,jumpSquash:ve=1.15,jumpSquashTime:me=.37,jumpSquashEase:we="pulse",jumpGroundTime:te=.11,jumpGroundEase:qe="pulse",jumpRiseTime:Ue=.33,jumpRiseEase:_e="pulse",jumpClickSquashTime:U=.24,className:D,style:V,"aria-label":pe,...q},Z){const be=ie.useRef(null);ie.useImperativeHandle(Z,()=>be.current);const Me=ie.useId(),Fe=S0[t]??S0.clover,Pe=n??Fe.face,Ae=r??Fe.color,De=s??Fe.brightness??1,Qe=l??Fe.saturation??1.5,ot=xi(Qe,1.5,2.5)-1.5,ke=i_(De===1&&Qe===1?Ae:bn(Ae,(Math.min(2,Math.max(0,De))-1)*.35,(Math.min(1.5,Math.max(0,Qe))-1)*.5),ot),ct=o??K5(ke),X=Math.min(1,Math.max(0,h??km(Me))),He=i in zp?i:"default",Se=f||!(c>0),Ie=u===!0?"crisp":u===!1?"flat":u,Y=typeof e=="string"&&e.trim()?e.trim():null,oe=Y?`path:${km(Y)}:${Y.length}`:t,Ce=Ox[Ie==="fabric"?"fabric":"other"],ce=(Xe,lt,dt)=>Math.round(xi(Xe,lt,dt)*20)/20,Te={length:ce(v,.3,2.5),density:ce(S,.3,2),fuzz:ce(T,0,1),clumps:ce(y,0,1),curl:ce(w,0,1),gravity:ce(A,0,1)},Le=`${Te.length},${Te.density},${Te.fuzz},${Te.clumps},${Te.curl},${Te.gravity}`,$e=ie.useRef(null),We=ie.useRef(null),et=ie.useRef(0),Ct=ie.useRef(c);Ct.current=c;const yt=ie.useRef(G);yt.current=G&&!k;const Ge=ie.useRef(k);Ge.current=k,We.current={path:typeof Path2D>"u"?null:Zy(Y??Up[t]??Up.clover),face:Pe,faceX:Fe.faceX,faceY:Fe.faceY,faceScale:Fe.faceScale,color:ke,ink:ct,shading:Ie,shadow:xi(b??Ce.shadow,0,2),highlight:xi(_??Ce.highlight,0,2),depth:xi(E,.2,2),roundness:xi(M,0,1),fur:Te,vivid:ot,backLight:I,lightFront:z,shine:B,sheen:F,backSoftness:O,light:C??Ce.light,rim:xi(R??Ce.rim,0,2),spread:xi(P??Ce.spread,.4,2.5),typeKey:oe,still:Se||Lu(),furOnIdle:!0,whirl:{strength:xi(J,0,2),size:xi(he,.6,1.6),width:xi(H,.4,2),length:xi(N,.4,1.6),tilt:xi(W,.5,1.8)},parts:typeof Path2D<"u"&&!Y&&Np[t]?Jy(Np[t]):void 0,wear:{hat:d,glasses:g,headphones:x,bowTie:m,color:p,fabric:Ie==="fabric"}};const on=Xe=>{if(ne!=="auto")return ne;const lt=Xe?.closest("[data-theme], .dark, .light");if(lt){const dt=lt.getAttribute("data-theme");if(dt==="dark"||dt==="light")return dt;if(lt.classList.contains("dark"))return"dark";if(lt.classList.contains("light"))return"light"}return typeof matchMedia=="function"&&matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"},Ot=()=>{const Xe=be.current,lt=We.current;if(!Xe||!lt||!lt.path)return;const dt=Xe.clientWidth/Ua||et.current||(typeof a=="number"?a:64);if(!dt)return;const At=Math.min(2,typeof devicePixelRatio=="number"&&devicePixelRatio||1),rt=Math.round(dt*Ua*At);(Xe.width!==rt||Xe.height!==rt)&&(Xe.width=rt,Xe.height=rt),et.current=dt;const Vt=Xe.getContext("2d");if(!Vt)return;Vt.setTransform(At,0,0,At,0,0),lt.dpr=At;const St=Ge.current,sn=Yp(He),hn=St?{...sn,yaw:St.yaw??0,pitch:St.pitch??sn.pitch,roll:St.roll??sn.roll}:$e.current?$e.current.pose:sn;Fm(Vt,dt,hn,lt)},je=ie.useRef(null),Pt=ie.useRef(null),Ht=()=>{Pt.current&&Pt.current(),Pt.current=null},Zt=Xe=>{gc(),Xe(),gc()?Pt.current||(Pt.current=vu(()=>{const lt=je.current;be.current&&lt?Zt(lt):Ht()})):Ht()};ie.useEffect(()=>Ht,[]);const gn=Ie==="plastic"||Ie==="fabric",[un,It]=ie.useState(!gn),wt=ie.useRef(un);wt.current=un;const Rt=ie.useRef(null),Qt=ie.useRef(null),ni=()=>{Qt.current&&Qt.current(),Qt.current=null},_i=ie.useRef({}),$=ie.useRef(!1),se=Xe=>{if(Rt.current=Xe,gc(),Xe(),$.current=!gc(),$.current&&!r0()){Ac();return}Qt.current||(Qt.current=vu(()=>{const lt=Rt.current;be.current&&lt&&!wt.current?se(lt):ni(),Ac()}))};ie.useEffect(()=>{if(un)return;wl.set(_i.current,{ready:()=>$.current,show:()=>It(!0)}),Ac(),mc(!0);const Xe=setTimeout(()=>It(!0),Wm);return()=>{mc(!1),clearTimeout(Xe),ni(),wl.delete(_i.current),Ac()}},[un]);const ge=()=>{var Xe;if(!gn||!((Xe=We.current)!=null&&Xe.path))return;const lt=We.current.path,dt=(typeof a=="number"?a:64)*Math.min(2,typeof devicePixelRatio=="number"&&devicePixelRatio||1),At=We.current.light??295,rt=At*Math.PI/180,Vt=(I??0)*Math.PI/180,St=Wl(Math.sin(rt),-Math.cos(rt));I!==void 0&&([St.bx,St.by]=[Math.sin(Vt),-Math.cos(Vt)]),z!==void 0&&(St.front=Math.min(85,Math.max(0,z))*Math.PI/180),M_(oe,lt,dt,E,Ie==="fabric",Te,At,St)},[,re]=ie.useState(0),le=`${Ie}|${oe}|${a}`,Be=ie.useRef(null),Ve=ie.useRef(null),at=()=>{if(ge(),!r0())return;mc(!0);const Xe=()=>{Ve.current&&(Ve.current(),re(At=>At+1))},lt=vu(()=>{r0()||Xe()}),dt=setTimeout(Xe,Wm);Ve.current=()=>{lt(),clearTimeout(dt),mc(!1),Ve.current=null}};ie.useEffect(()=>()=>{var Xe;return(Xe=Ve.current)==null?void 0:Xe.call(Ve)},[]),ie.useLayoutEffect(()=>{if($e.current?$e.current.setState(He):$e.current=new u_(X,He),$e.current.setTurn(xi(ee,0,2)),wt.current&&gn&&Be.current!==null&&Be.current!==le&&!Ve.current&&at(),Be.current=le,$e.current.setJump({height:fe,time:Math.max(.2,j),stretch:ue,spin:Math.max(0,Math.round(de)),lean:ae,every:Ee,land:L,squash:ve,squashTime:Math.max(.05,me),squashEase:we,groundTime:Math.max(0,te),groundEase:qe,riseTime:Math.max(.05,Ue),riseEase:_e,clickSquashTime:Math.max(.05,U)}),!Ve.current){if(Lu()){const Xe=()=>{const lt=be.current;if(!lt||!We.current||!We.current.path)return;const dt=lt.clientWidth/Ua||et.current||(typeof a=="number"?a:64);if(!dt)return;et.current=dt;const At=Math.min(2,typeof devicePixelRatio=="number"&&devicePixelRatio||1);lt.width=lt.height=Math.round(dt*Ua*At);const rt=lt.getContext("2d");rt&&(We.current.theme=on(lt),We.current.dpr=At,rt.setTransform(At,0,0,At,0,0),Fm(rt,dt,Yp(He),We.current))};je.current=Xe,wt.current?Zt(Xe):se(Xe);return}We.current&&be.current&&(We.current.theme=on(be.current)),wt.current?Se?(je.current=Ot,Zt(Ot)):(je.current=null,Ht(),Ot()):(je.current=Se?Ot:null,se(Ot))}}),ie.useEffect(()=>{var Xe;if(!gn||!((Xe=We.current)!=null&&Xe.path))return;const lt=(typeof requestIdleCallback=="function"?requestIdleCallback:dt=>setTimeout(dt,1))(ge);return()=>{typeof cancelIdleCallback=="function"?cancelIdleCallback(lt):clearTimeout(lt)}},[Ie,oe,a,E,Le,C,I,z]),ie.useEffect(()=>{if(Se||Lu())return;const Xe=be.current;if(!Xe)return;let lt=!0,dt=null;const At=3,rt=hn=>{const xn=$e.current;if(xn){if(yt.current&&!Number.isNaN(Ba.x)){const Sn=Xe.getBoundingClientRect(),nn=Sn.width/Ua||1,_n=(Ba.x-(Sn.left+Sn.width/2))/nn,vn=(Ba.y-(Sn.top+Sn.height/2+s0*nn))/nn,fn=Math.hypot(_n,vn),yn=fn<1?1:fn>At?0:1-(fn-1)/(At-1);xn.setPointer(_n/Math.max(1,fn),vn/Math.max(1,fn),yn)}else xn.setPointer(0,0,0);xn.update(hn*Ct.current),wt.current&&!Ve.current&&Ot()}},Vt=()=>{dt||(dt=Ky(rt))},St=()=>{dt&&dt(),dt=null};let sn=null;return typeof IntersectionObserver=="function"?(sn=new IntersectionObserver(hn=>{var xn;lt=((xn=hn[0])==null?void 0:xn.isIntersecting)??!0,lt?Vt():St()}),sn.observe(Xe)):Vt(),()=>{St(),sn&&sn.disconnect()}},[Se]);const nt=typeof a=="number"?`${a*Ua}px`:`calc(${a} * ${Ua})`,ft=Xe=>typeof a=="number"?`${-a*Xe}px`:`calc(${a} * ${-Xe})`,vt=(Ua-1)/2,mt={display:"inline-block",verticalAlign:"middle",width:nt,height:nt,marginLeft:ft(vt),marginRight:ft(vt),marginTop:ft(vt+s0),marginBottom:ft(vt-s0),flex:"none",opacity:un?1:0,transition:"opacity 0.3s ease-out",...V},$t=Xe=>{var lt,dt;G&&!Se&&!k&&((lt=$e.current)==null||lt.poke()),(dt=q.onClick)==null||dt.call(q,Xe)};return K.jsx("canvas",{ref:be,className:D?`ba ${D}`:"ba","data-bot-avatar":t,"data-face":Pe,"data-state":He,role:"img","aria-label":pe??`${Fe.label} bot, ${zp[He]}`,style:mt,...q,onClick:$t})});const hd="181",Qy=0,Gm=1,ew=2,Bx=1,tw=2,Na=3,Lr=0,Mi=1,Wa=2,qa=0,wo=1,Vm=2,Xm=3,Ym=4,nw=5,co=100,iw=101,aw=102,rw=103,ow=104,sw=200,lw=201,cw=202,uw=203,Jh=204,Qh=205,hw=206,fw=207,dw=208,pw=209,mw=210,gw=211,xw=212,bw=213,vw=214,ef=0,tf=1,nf=2,Is=3,af=4,rf=5,of=6,sf=7,Hx=0,Mw=1,_w=2,Rr=0,yw=1,ww=2,Sw=3,Ew=4,Aw=5,Tw=6,Cw=7,Wx=300,Ls=301,Fs=302,lf=303,cf=304,k0=306,uf=1e3,Va=1001,hf=1002,Di=1003,Rw=1004,Tc=1005,Wi=1006,zu=1007,go=1008,Za=1009,Gx=1010,Vx=1011,Ll=1012,fd=1013,Ro=1014,Xa=1015,$s=1016,dd=1017,pd=1018,Fl=1020,Xx=35902,Yx=35899,qx=1021,jx=1022,aa=1023,zl=1026,Ul=1027,Kx=1028,md=1029,gd=1030,xd=1031,bd=1033,c0=33776,u0=33777,h0=33778,f0=33779,ff=35840,df=35841,pf=35842,mf=35843,gf=36196,xf=37492,bf=37496,vf=37808,Mf=37809,_f=37810,yf=37811,wf=37812,Sf=37813,Ef=37814,Af=37815,Tf=37816,Cf=37817,Rf=37818,Pf=37819,Df=37820,If=37821,Lf=36492,Ff=36494,zf=36495,Uf=36283,Nf=36284,Of=36285,$f=36286,Pw=3200,Dw=3201,Iw=0,Lw=1,xr="",Bi="srgb",zs="srgb-linear",D0="linear",mn="srgb",Vo=7680,qm=519,Fw=512,zw=513,Uw=514,Zx=515,Nw=516,Ow=517,$w=518,kw=519,jm=35044,Km="300 es",va=2e3,I0=2001;function Jx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function L0(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Bw(){const t=L0("canvas");return t.style.display="block",t}const Zm={};function Jm(...t){const e="THREE."+t.shift();console.log(e,...t)}function Bt(...t){const e="THREE."+t.shift();console.warn(e,...t)}function Nn(...t){const e="THREE."+t.shift();console.error(e,...t)}function Nl(...t){const e=t.join(" ");e in Zm||(Zm[e]=!0,Bt(...t))}function Hw(t,e,n){return new Promise(function(i,a){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}class ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,o=a.length;r<o;r++)a[r].call(this,e);e.target=null}}}const ai=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uu=Math.PI/180,kf=180/Math.PI;function Vl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ai[t&255]+ai[t>>8&255]+ai[t>>16&255]+ai[t>>24&255]+"-"+ai[e&255]+ai[e>>8&255]+"-"+ai[e>>16&15|64]+ai[e>>24&255]+"-"+ai[n&63|128]+ai[n>>8&255]+"-"+ai[n>>16&255]+ai[n>>24&255]+ai[i&255]+ai[i>>8&255]+ai[i>>16&255]+ai[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function Ww(t,e){return(t%e+e)%e}function Nu(t,e,n){return(1-n)*t+n*e}function tl(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function bi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class pn{constructor(e=0,n=0){pn.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=rn(this.x,e.x,n.x),this.y=rn(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=rn(this.x,e,n),this.y=rn(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rn(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*a+e.x,this.y=r*a+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xl{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,r,o,s){let l=i[a+0],c=i[a+1],f=i[a+2],h=i[a+3],u=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(s<=0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(s>=1){e[n+0]=u,e[n+1]=d,e[n+2]=g,e[n+3]=x;return}if(h!==x||l!==u||c!==d||f!==g){let m=l*u+c*d+f*g+h*x;m<0&&(u=-u,d=-d,g=-g,x=-x,m=-m);let p=1-s;if(m<.9995){const b=Math.acos(m),_=Math.sin(b);p=Math.sin(p*b)/_,s=Math.sin(s*b)/_,l=l*p+u*s,c=c*p+d*s,f=f*p+g*s,h=h*p+x*s}else{l=l*p+u*s,c=c*p+d*s,f=f*p+g*s,h=h*p+x*s;const b=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=b,c*=b,f*=b,h*=b}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,a,r,o){const s=i[a],l=i[a+1],c=i[a+2],f=i[a+3],h=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return e[n]=s*g+f*h+l*d-c*u,e[n+1]=l*g+f*u+c*h-s*d,e[n+2]=c*g+f*d+s*u-l*h,e[n+3]=f*g-s*h-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,r=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),f=s(a/2),h=s(r/2),u=l(i/2),d=l(a/2),g=l(r/2);switch(o){case"XYZ":this._x=u*f*h+c*d*g,this._y=c*d*h-u*f*g,this._z=c*f*g+u*d*h,this._w=c*f*h-u*d*g;break;case"YXZ":this._x=u*f*h+c*d*g,this._y=c*d*h-u*f*g,this._z=c*f*g-u*d*h,this._w=c*f*h+u*d*g;break;case"ZXY":this._x=u*f*h-c*d*g,this._y=c*d*h+u*f*g,this._z=c*f*g+u*d*h,this._w=c*f*h-u*d*g;break;case"ZYX":this._x=u*f*h-c*d*g,this._y=c*d*h+u*f*g,this._z=c*f*g-u*d*h,this._w=c*f*h+u*d*g;break;case"YZX":this._x=u*f*h+c*d*g,this._y=c*d*h+u*f*g,this._z=c*f*g-u*d*h,this._w=c*f*h-u*d*g;break;case"XZY":this._x=u*f*h-c*d*g,this._y=c*d*h-u*f*g,this._z=c*f*g+u*d*h,this._w=c*f*h+u*d*g;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],r=n[8],o=n[1],s=n[5],l=n[9],c=n[2],f=n[6],h=n[10],u=i+s+h;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(r-c)*d,this._z=(o-a)*d}else if(i>s&&i>h){const d=2*Math.sqrt(1+i-s-h);this._w=(f-l)/d,this._x=.25*d,this._y=(a+o)/d,this._z=(r+c)/d}else if(s>h){const d=2*Math.sqrt(1+s-i-h);this._w=(r-c)/d,this._x=(a+o)/d,this._y=.25*d,this._z=(l+f)/d}else{const d=2*Math.sqrt(1+h-i-s);this._w=(o-a)/d,this._x=(r+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,r=e._z,o=e._w,s=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*s+a*c-r*l,this._y=a*f+o*l+r*s-i*c,this._z=r*f+o*c+i*l-a*s,this._w=o*f-i*s-a*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,a=e._y,r=e._z,o=e._w,s=this.dot(e);s<0&&(i=-i,a=-a,r=-r,o=-o,s=-s);let l=1-n;if(s<.9995){const c=Math.acos(s),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ye{constructor(e=0,n=0,i=0){ye.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,r=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*a-s*i),f=2*(s*n-r*a),h=2*(r*i-o*n);return this.x=n+l*c+o*h-s*f,this.y=i+l*f+s*c-r*h,this.z=a+l*h+r*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=rn(this.x,e.x,n.x),this.y=rn(this.y,e.y,n.y),this.z=rn(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=rn(this.x,e,n),this.y=rn(this.y,e,n),this.z=rn(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rn(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,r=e.z,o=n.x,s=n.y,l=n.z;return this.x=a*l-r*s,this.y=r*o-i*l,this.z=i*s-a*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ou.copy(this).projectOnVector(e),this.sub(Ou)}reflect(e){return this.sub(Ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ou=new ye,Qm=new Xl;class Wt{constructor(e,n,i,a,r,o,s,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,o,s,l,c)}set(e,n,i,a,r,o,s,l,c){const f=this.elements;return f[0]=e,f[1]=a,f[2]=s,f[3]=n,f[4]=r,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],f=i[4],h=i[7],u=i[2],d=i[5],g=i[8],x=a[0],m=a[3],p=a[6],b=a[1],_=a[4],E=a[7],M=a[2],v=a[5],S=a[8];return r[0]=o*x+s*b+l*M,r[3]=o*m+s*_+l*v,r[6]=o*p+s*E+l*S,r[1]=c*x+f*b+h*M,r[4]=c*m+f*_+h*v,r[7]=c*p+f*E+h*S,r[2]=u*x+d*b+g*M,r[5]=u*m+d*_+g*v,r[8]=u*p+d*E+g*S,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*s*c-i*r*f+i*s*l+a*r*c-a*o*l}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],f=e[8],h=f*o-s*c,u=s*l-f*r,d=c*r-o*l,g=n*h+i*u+a*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(a*c-f*i)*x,e[2]=(s*i-a*o)*x,e[3]=u*x,e[4]=(f*n-a*l)*x,e[5]=(a*r-s*n)*x,e[6]=d*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*r)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,r,o,s){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-a*c,a*l,-a*(-c*o+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply($u.makeScale(e,n)),this}rotate(e){return this.premultiply($u.makeRotation(-e)),this}translate(e,n){return this.premultiply($u.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $u=new Wt,e1=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),t1=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gw(){const t={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(a,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mn&&(a.r=ja(a.r),a.g=ja(a.g),a.b=ja(a.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mn&&(a.r=ws(a.r),a.g=ws(a.g),a.b=ws(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===xr?D0:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,o){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Nl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Nl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[zs]:{primaries:e,whitePoint:i,transfer:D0,toXYZ:e1,fromXYZ:t1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Bi},outputColorSpaceConfig:{drawingBufferColorSpace:Bi}},[Bi]:{primaries:e,whitePoint:i,transfer:mn,toXYZ:e1,fromXYZ:t1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Bi}}}),t}const cn=Gw();function ja(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ws(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Xo;class Vw{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xo===void 0&&(Xo=L0("canvas")),Xo.width=e.width,Xo.height=e.height;const a=Xo.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Xo}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=L0("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let o=0;o<r.length;o++)r[o]=ja(r[o]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ja(n[i]/255)*255):n[i]=ja(n[i]);return{data:n,width:e.width,height:e.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xw=0;class vd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xw++}),this.uuid=Vl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let o=0,s=a.length;o<s;o++)a[o].isDataTexture?r.push(ku(a[o].image)):r.push(ku(a[o]))}else r=ku(a);i.url=r}return n||(e.images[this.uuid]=i),i}}function ku(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Vw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}let Yw=0;const Bu=new ye;class mi extends ks{constructor(e=mi.DEFAULT_IMAGE,n=mi.DEFAULT_MAPPING,i=Va,a=Va,r=Wi,o=go,s=aa,l=Za,c=mi.DEFAULT_ANISOTROPY,f=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yw++}),this.uuid=Vl(),this.name="",this.source=new vd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new pn(0,0),this.repeat=new pn(1,1),this.center=new pn(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bu).x}get height(){return this.source.getSize(Bu).y}get depth(){return this.source.getSize(Bu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Bt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Bt(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uf:e.x=e.x-Math.floor(e.x);break;case Va:e.x=e.x<0?0:1;break;case hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uf:e.y=e.y-Math.floor(e.y);break;case Va:e.y=e.y<0?0:1;break;case hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mi.DEFAULT_IMAGE=null;mi.DEFAULT_MAPPING=Wx;mi.DEFAULT_ANISOTROPY=1;class On{constructor(e=0,n=0,i=0,a=1){On.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*a+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*a+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*a+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*a+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,r;const l=e.elements,c=l[0],f=l[4],h=l[8],u=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,E=(d+1)/2,M=(p+1)/2,v=(f+u)/4,S=(h+x)/4,T=(g+m)/4;return _>E&&_>M?_<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(_),a=v/i,r=S/i):E>M?E<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(E),i=v/a,r=T/a):M<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(M),i=S/r,a=T/r),this.set(i,a,r,n),this}let b=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(u-f)*(u-f));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-x)/b,this.z=(u-f)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=rn(this.x,e.x,n.x),this.y=rn(this.y,e.y,n.y),this.z=rn(this.z,e.z,n.z),this.w=rn(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=rn(this.x,e,n),this.y=rn(this.y,e,n),this.z=rn(this.z,e,n),this.w=rn(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rn(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qw extends ks{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new On(0,0,e,n),this.scissorTest=!1,this.viewport=new On(0,0,e,n);const a={width:e,height:n,depth:i.depth},r=new mi(a);this.textures=[];const o=i.count;for(let s=0;s<o;s++)this.textures[s]=r.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Wi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new vd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Po extends qw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Qx extends mi{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=Di,this.minFilter=Di,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jw extends mi{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=Di,this.minFilter=Di,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yl{constructor(e=new ye(1/0,1/0,1/0),n=new ye(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ji.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ji.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ji.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=r.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,ji):ji.fromBufferAttribute(r,o),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cc.copy(i.boundingBox)),Cc.applyMatrix4(e.matrixWorld),this.union(Cc)}const a=e.children;for(let r=0,o=a.length;r<o;r++)this.expandByObject(a[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nl),Rc.subVectors(this.max,nl),Yo.subVectors(e.a,nl),qo.subVectors(e.b,nl),jo.subVectors(e.c,nl),or.subVectors(qo,Yo),sr.subVectors(jo,qo),qr.subVectors(Yo,jo);let n=[0,-or.z,or.y,0,-sr.z,sr.y,0,-qr.z,qr.y,or.z,0,-or.x,sr.z,0,-sr.x,qr.z,0,-qr.x,-or.y,or.x,0,-sr.y,sr.x,0,-qr.y,qr.x,0];return!Hu(n,Yo,qo,jo,Rc)||(n=[1,0,0,0,1,0,0,0,1],!Hu(n,Yo,qo,jo,Rc))?!1:(Pc.crossVectors(or,sr),n=[Pc.x,Pc.y,Pc.z],Hu(n,Yo,qo,jo,Rc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ra=[new ye,new ye,new ye,new ye,new ye,new ye,new ye,new ye],ji=new ye,Cc=new Yl,Yo=new ye,qo=new ye,jo=new ye,or=new ye,sr=new ye,qr=new ye,nl=new ye,Rc=new ye,Pc=new ye,jr=new ye;function Hu(t,e,n,i,a){for(let r=0,o=t.length-3;r<=o;r+=3){jr.fromArray(t,r);const s=a.x*Math.abs(jr.x)+a.y*Math.abs(jr.y)+a.z*Math.abs(jr.z),l=e.dot(jr),c=n.dot(jr),f=i.dot(jr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>s)return!1}return!0}const Kw=new Yl,il=new ye,Wu=new ye;class Md{constructor(e=new ye,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Kw.setFromPoints(e).getCenter(i);let a=0;for(let r=0,o=e.length;r<o;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;il.subVectors(e,this.center);const n=il.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(il,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(il.copy(e.center).add(Wu)),this.expandByPoint(il.copy(e.center).sub(Wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pa=new ye,Gu=new ye,Dc=new ye,lr=new ye,Vu=new ye,Ic=new ye,Xu=new ye;class Zw{constructor(e=new ye,n=new ye(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pa.copy(this.origin).addScaledVector(this.direction,n),Pa.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){Gu.copy(e).add(n).multiplyScalar(.5),Dc.copy(n).sub(e).normalize(),lr.copy(this.origin).sub(Gu);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Dc),s=lr.dot(this.direction),l=-lr.dot(Dc),c=lr.lengthSq(),f=Math.abs(1-o*o);let h,u,d,g;if(f>0)if(h=o*l-s,u=o*s-l,g=r*f,h>=0)if(u>=-g)if(u<=g){const x=1/f;h*=x,u*=x,d=h*(h+o*u+2*s)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+s)),d=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+s)),d=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-o*r+s)),u=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(h=Math.max(0,-(o*r+s)),u=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+s)),d=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(Gu).addScaledVector(Dc,u),d}intersectSphere(e,n){Pa.subVectors(e.center,this.origin);const i=Pa.dot(this.direction),a=Pa.dot(Pa)-i*i,r=e.radius*e.radius;if(a>r)return null;const o=Math.sqrt(r-a),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,r,o,s,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,a=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,a=(e.min.x-u.x)*c),f>=0?(r=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(r=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),i>o||r>a||((r>i||isNaN(i))&&(i=r),(o<a||isNaN(a))&&(a=o),h>=0?(s=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(s=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||s>a)||((s>i||i!==i)&&(i=s),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,Pa)!==null}intersectTriangle(e,n,i,a,r){Vu.subVectors(n,e),Ic.subVectors(i,e),Xu.crossVectors(Vu,Ic);let o=this.direction.dot(Xu),s;if(o>0){if(a)return null;s=1}else if(o<0)s=-1,o=-o;else return null;lr.subVectors(this.origin,e);const l=s*this.direction.dot(Ic.crossVectors(lr,Ic));if(l<0)return null;const c=s*this.direction.dot(Vu.cross(lr));if(c<0||l+c>o)return null;const f=-s*lr.dot(Xu);return f<0?null:this.at(f/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qn{constructor(e,n,i,a,r,o,s,l,c,f,h,u,d,g,x,m){qn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,o,s,l,c,f,h,u,d,g,x,m)}set(e,n,i,a,r,o,s,l,c,f,h,u,d,g,x,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=a,p[1]=r,p[5]=o,p[9]=s,p[13]=l,p[2]=c,p[6]=f,p[10]=h,p[14]=u,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qn().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,a=1/Ko.setFromMatrixColumn(e,0).length(),r=1/Ko.setFromMatrixColumn(e,1).length(),o=1/Ko.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,r=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(a),c=Math.sin(a),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=o*f,d=o*h,g=s*f,x=s*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=d+g*c,n[5]=u-x*c,n[9]=-s*l,n[2]=x-u*c,n[6]=g+d*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*f,d=l*h,g=c*f,x=c*h;n[0]=u+x*s,n[4]=g*s-d,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-s,n[2]=d*s-g,n[6]=x+u*s,n[10]=o*l}else if(e.order==="ZXY"){const u=l*f,d=l*h,g=c*f,x=c*h;n[0]=u-x*s,n[4]=-o*h,n[8]=g+d*s,n[1]=d+g*s,n[5]=o*f,n[9]=x-u*s,n[2]=-o*c,n[6]=s,n[10]=o*l}else if(e.order==="ZYX"){const u=o*f,d=o*h,g=s*f,x=s*h;n[0]=l*f,n[4]=g*c-d,n[8]=u*c+x,n[1]=l*h,n[5]=x*c+u,n[9]=d*c-g,n[2]=-c,n[6]=s*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,d=o*c,g=s*l,x=s*c;n[0]=l*f,n[4]=x-u*h,n[8]=g*h+d,n[1]=h,n[5]=o*f,n[9]=-s*f,n[2]=-c*f,n[6]=d*h+g,n[10]=u-x*h}else if(e.order==="XZY"){const u=o*l,d=o*c,g=s*l,x=s*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=u*h+x,n[5]=o*f,n[9]=d*h-g,n[2]=g*h-d,n[6]=s*f,n[10]=x*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jw,e,Qw)}lookAt(e,n,i){const a=this.elements;return Ci.subVectors(e,n),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),cr.crossVectors(i,Ci),cr.lengthSq()===0&&(Math.abs(i.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),cr.crossVectors(i,Ci)),cr.normalize(),Lc.crossVectors(Ci,cr),a[0]=cr.x,a[4]=Lc.x,a[8]=Ci.x,a[1]=cr.y,a[5]=Lc.y,a[9]=Ci.y,a[2]=cr.z,a[6]=Lc.z,a[10]=Ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],f=i[1],h=i[5],u=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],b=i[3],_=i[7],E=i[11],M=i[15],v=a[0],S=a[4],T=a[8],y=a[12],w=a[1],A=a[5],C=a[9],R=a[13],P=a[2],I=a[6],z=a[10],B=a[14],F=a[3],O=a[7],k=a[11],G=a[15];return r[0]=o*v+s*w+l*P+c*F,r[4]=o*S+s*A+l*I+c*O,r[8]=o*T+s*C+l*z+c*k,r[12]=o*y+s*R+l*B+c*G,r[1]=f*v+h*w+u*P+d*F,r[5]=f*S+h*A+u*I+d*O,r[9]=f*T+h*C+u*z+d*k,r[13]=f*y+h*R+u*B+d*G,r[2]=g*v+x*w+m*P+p*F,r[6]=g*S+x*A+m*I+p*O,r[10]=g*T+x*C+m*z+p*k,r[14]=g*y+x*R+m*B+p*G,r[3]=b*v+_*w+E*P+M*F,r[7]=b*S+_*A+E*I+M*O,r[11]=b*T+_*C+E*z+M*k,r[15]=b*y+_*R+E*B+M*G,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],r=e[12],o=e[1],s=e[5],l=e[9],c=e[13],f=e[2],h=e[6],u=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*h-a*c*h-r*s*u+i*c*u+a*s*d-i*l*d)+x*(+n*l*d-n*c*u+r*o*u-a*o*d+a*c*f-r*l*f)+m*(+n*c*h-n*s*d-r*o*h+i*o*d+r*s*f-i*c*f)+p*(-a*s*f-n*l*h+n*s*u+a*o*h-i*o*u+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],f=e[8],h=e[9],u=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],b=h*m*c-x*u*c+x*l*d-s*m*d-h*l*p+s*u*p,_=g*u*c-f*m*c-g*l*d+o*m*d+f*l*p-o*u*p,E=f*x*c-g*h*c+g*s*d-o*x*d-f*s*p+o*h*p,M=g*h*l-f*x*l-g*s*u+o*x*u+f*s*m-o*h*m,v=n*b+i*_+a*E+r*M;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=b*S,e[1]=(x*u*r-h*m*r-x*a*d+i*m*d+h*a*p-i*u*p)*S,e[2]=(s*m*r-x*l*r+x*a*c-i*m*c-s*a*p+i*l*p)*S,e[3]=(h*l*r-s*u*r-h*a*c+i*u*c+s*a*d-i*l*d)*S,e[4]=_*S,e[5]=(f*m*r-g*u*r+g*a*d-n*m*d-f*a*p+n*u*p)*S,e[6]=(g*l*r-o*m*r-g*a*c+n*m*c+o*a*p-n*l*p)*S,e[7]=(o*u*r-f*l*r+f*a*c-n*u*c-o*a*d+n*l*d)*S,e[8]=E*S,e[9]=(g*h*r-f*x*r-g*i*d+n*x*d+f*i*p-n*h*p)*S,e[10]=(o*x*r-g*s*r+g*i*c-n*x*c-o*i*p+n*s*p)*S,e[11]=(f*s*r-o*h*r-f*i*c+n*h*c+o*i*d-n*s*d)*S,e[12]=M*S,e[13]=(f*x*a-g*h*a+g*i*u-n*x*u-f*i*m+n*h*m)*S,e[14]=(g*s*a-o*x*a-g*i*l+n*x*l+o*i*m-n*s*m)*S,e[15]=(o*h*a-f*s*a+f*i*l-n*h*l-o*i*u+n*s*u)*S,this}scale(e){const n=this.elements,i=e.x,a=e.y,r=e.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,o=e.x,s=e.y,l=e.z,c=r*o,f=r*s;return this.set(c*o+i,c*s-a*l,c*l+a*s,0,c*s+a*l,f*s+i,f*l-a*o,0,c*l-a*s,f*l+a*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,r,o){return this.set(1,i,r,0,e,1,o,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,r=n._x,o=n._y,s=n._z,l=n._w,c=r+r,f=o+o,h=s+s,u=r*c,d=r*f,g=r*h,x=o*f,m=o*h,p=s*h,b=l*c,_=l*f,E=l*h,M=i.x,v=i.y,S=i.z;return a[0]=(1-(x+p))*M,a[1]=(d+E)*M,a[2]=(g-_)*M,a[3]=0,a[4]=(d-E)*v,a[5]=(1-(u+p))*v,a[6]=(m+b)*v,a[7]=0,a[8]=(g+_)*S,a[9]=(m-b)*S,a[10]=(1-(u+x))*S,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;let r=Ko.set(a[0],a[1],a[2]).length();const o=Ko.set(a[4],a[5],a[6]).length(),s=Ko.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),e.x=a[12],e.y=a[13],e.z=a[14],Ki.copy(this);const c=1/r,f=1/o,h=1/s;return Ki.elements[0]*=c,Ki.elements[1]*=c,Ki.elements[2]*=c,Ki.elements[4]*=f,Ki.elements[5]*=f,Ki.elements[6]*=f,Ki.elements[8]*=h,Ki.elements[9]*=h,Ki.elements[10]*=h,n.setFromRotationMatrix(Ki),i.x=r,i.y=o,i.z=s,this}makePerspective(e,n,i,a,r,o,s=va,l=!1){const c=this.elements,f=2*r/(n-e),h=2*r/(i-a),u=(n+e)/(n-e),d=(i+a)/(i-a);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(s===va)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(s===I0)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,a,r,o,s=va,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-a),u=-(n+e)/(n-e),d=-(i+a)/(i-a);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(s===va)g=-2/(o-r),x=-(o+r)/(o-r);else if(s===I0)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ko=new ye,Ki=new qn,Jw=new ye(0,0,0),Qw=new ye(1,1,1),cr=new ye,Lc=new ye,Ci=new ye,n1=new qn,i1=new Xl;class Ja{constructor(e=0,n=0,i=0,a=Ja.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,r=a[0],o=a[4],s=a[8],l=a[1],c=a[5],f=a[9],h=a[2],u=a[6],d=a[10];switch(n){case"XYZ":this._y=Math.asin(rn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(s,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(s,d));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return n1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(n1,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return i1.setFromEuler(this),this.setFromQuaternion(i1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ja.DEFAULT_ORDER="XYZ";class e2{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eS=0;const a1=new ye,Zo=new Xl,Da=new qn,Fc=new ye,al=new ye,tS=new ye,nS=new Xl,r1=new ye(1,0,0),o1=new ye(0,1,0),s1=new ye(0,0,1),l1={type:"added"},iS={type:"removed"},Jo={type:"childadded",child:null},Yu={type:"childremoved",child:null};class Ii extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=Vl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ii.DEFAULT_UP.clone();const e=new ye,n=new Ja,i=new Xl,a=new ye(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new qn},normalMatrix:{value:new Wt}}),this.matrix=new qn,this.matrixWorld=new qn,this.matrixAutoUpdate=Ii.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new e2,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zo.setFromAxisAngle(e,n),this.quaternion.multiply(Zo),this}rotateOnWorldAxis(e,n){return Zo.setFromAxisAngle(e,n),this.quaternion.premultiply(Zo),this}rotateX(e){return this.rotateOnAxis(r1,e)}rotateY(e){return this.rotateOnAxis(o1,e)}rotateZ(e){return this.rotateOnAxis(s1,e)}translateOnAxis(e,n){return a1.copy(e).applyQuaternion(this.quaternion),this.position.add(a1.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(r1,e)}translateY(e){return this.translateOnAxis(o1,e)}translateZ(e){return this.translateOnAxis(s1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Da.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Fc.copy(e):Fc.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Da.lookAt(al,Fc,this.up):Da.lookAt(Fc,al,this.up),this.quaternion.setFromRotationMatrix(Da),a&&(Da.extractRotation(a.matrixWorld),Zo.setFromRotationMatrix(Da),this.quaternion.premultiply(Zo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Nn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(l1),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null):Nn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(iS),Yu.child=e,this.dispatchEvent(Yu),Yu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Da.multiply(e.parent.matrixWorld)),e.applyMatrix4(Da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(l1),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,e,tS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,nS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(s=>({...s,boundingBox:s.boundingBox?s.boundingBox.toJSON():void 0,boundingSphere:s.boundingSphere?s.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(s=>({...s})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(e.materials,this.material[l]));a.material=s}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let s=0;s<this.children.length;s++)a.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];a.animations.push(r(e.animations,l))}}if(n){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),u=o(e.skeletons),d=o(e.animations),g=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=a,i;function o(s){const l=[];for(const c in s){const f=s[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Ii.DEFAULT_UP=new ye(0,1,0);Ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zi=new ye,Ia=new ye,qu=new ye,La=new ye,Qo=new ye,es=new ye,c1=new ye,ju=new ye,Ku=new ye,Zu=new ye,Ju=new On,Qu=new On,eh=new On;class ia{constructor(e=new ye,n=new ye,i=new ye){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),Zi.subVectors(e,n),a.cross(Zi);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,n,i,a,r){Zi.subVectors(a,n),Ia.subVectors(i,n),qu.subVectors(e,n);const o=Zi.dot(Zi),s=Zi.dot(Ia),l=Zi.dot(qu),c=Ia.dot(Ia),f=Ia.dot(qu),h=o*c-s*s;if(h===0)return r.set(0,0,0),null;const u=1/h,d=(c*l-s*f)*u,g=(o*f-s*l)*u;return r.set(1-d-g,g,d)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,La)===null?!1:La.x>=0&&La.y>=0&&La.x+La.y<=1}static getInterpolation(e,n,i,a,r,o,s,l){return this.getBarycoord(e,n,i,a,La)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,La.x),l.addScaledVector(o,La.y),l.addScaledVector(s,La.z),l)}static getInterpolatedAttribute(e,n,i,a,r,o){return Ju.setScalar(0),Qu.setScalar(0),eh.setScalar(0),Ju.fromBufferAttribute(e,n),Qu.fromBufferAttribute(e,i),eh.fromBufferAttribute(e,a),o.setScalar(0),o.addScaledVector(Ju,r.x),o.addScaledVector(Qu,r.y),o.addScaledVector(eh,r.z),o}static isFrontFacing(e,n,i,a){return Zi.subVectors(i,n),Ia.subVectors(e,n),Zi.cross(Ia).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zi.subVectors(this.c,this.b),Ia.subVectors(this.a,this.b),Zi.cross(Ia).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ia.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ia.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,r){return ia.getInterpolation(e,this.a,this.b,this.c,n,i,a,r)}containsPoint(e){return ia.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ia.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,r=this.c;let o,s;Qo.subVectors(a,i),es.subVectors(r,i),ju.subVectors(e,i);const l=Qo.dot(ju),c=es.dot(ju);if(l<=0&&c<=0)return n.copy(i);Ku.subVectors(e,a);const f=Qo.dot(Ku),h=es.dot(Ku);if(f>=0&&h<=f)return n.copy(a);const u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Qo,o);Zu.subVectors(e,r);const d=Qo.dot(Zu),g=es.dot(Zu);if(g>=0&&d<=g)return n.copy(r);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return s=c/(c-g),n.copy(i).addScaledVector(es,s);const m=f*g-d*h;if(m<=0&&h-f>=0&&d-g>=0)return c1.subVectors(r,a),s=(h-f)/(h-f+(d-g)),n.copy(a).addScaledVector(c1,s);const p=1/(m+x+u);return o=x*p,s=u*p,n.copy(i).addScaledVector(Qo,o).addScaledVector(es,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const t2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},zc={h:0,s:0,l:0};function th(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tn{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,cn.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=cn.workingColorSpace){return this.r=e,this.g=n,this.b=i,cn.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=cn.workingColorSpace){if(e=Ww(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=th(o,r,e+1/3),this.g=th(o,r,e),this.b=th(o,r,e-1/3)}return cn.colorSpaceToWorking(this,a),this}setStyle(e,n=Bi){function i(r){r!==void 0&&parseFloat(r)<1&&Bt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=a[1],s=a[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Bt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Bt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bi){const i=t2[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Bt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ja(e.r),this.g=ja(e.g),this.b=ja(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bi){return cn.workingToColorSpace(ri.copy(this),e),Math.round(rn(ri.r*255,0,255))*65536+Math.round(rn(ri.g*255,0,255))*256+Math.round(rn(ri.b*255,0,255))}getHexString(e=Bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=cn.workingColorSpace){cn.workingToColorSpace(ri.copy(this),n);const i=ri.r,a=ri.g,r=ri.b,o=Math.max(i,a,r),s=Math.min(i,a,r);let l,c;const f=(s+o)/2;if(s===o)l=0,c=0;else{const h=o-s;switch(c=f<=.5?h/(o+s):h/(2-o-s),o){case i:l=(a-r)/h+(a<r?6:0);break;case a:l=(r-i)/h+2;break;case r:l=(i-a)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=cn.workingColorSpace){return cn.workingToColorSpace(ri.copy(this),n),e.r=ri.r,e.g=ri.g,e.b=ri.b,e}getStyle(e=Bi){cn.workingToColorSpace(ri.copy(this),e);const n=ri.r,i=ri.g,a=ri.b;return e!==Bi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+n,ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ur),e.getHSL(zc);const i=Nu(ur.h,zc.h,n),a=Nu(ur.s,zc.s,n),r=Nu(ur.l,zc.l,n);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ri=new tn;tn.NAMES=t2;let aS=0;class B0 extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=Vl(),this.name="",this.type="Material",this.blending=wo,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jh,this.blendDst=Qh,this.blendEquation=co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tn(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vo,this.stencilZFail=Vo,this.stencilZPass=Vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Bt(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Bt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wo&&(i.blending=this.blending),this.side!==Lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jh&&(i.blendSrc=this.blendSrc),this.blendDst!==Qh&&(i.blendDst=this.blendDst),this.blendEquation!==co&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const o=[];for(const s in r){const l=r[s];delete l.metadata,o.push(l)}return o}if(n){const r=a(e.textures),o=a(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class n2 extends B0{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ja,this.combine=Hx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hn=new ye,Uc=new pn;let rS=0;class wa{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=jm,this.updateRanges=[],this.gpuType=Xa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Uc.fromBufferAttribute(this,n),Uc.applyMatrix3(e),this.setXY(n,Uc.x,Uc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Hn.fromBufferAttribute(this,n),Hn.applyMatrix3(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Hn.fromBufferAttribute(this,n),Hn.applyMatrix4(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Hn.fromBufferAttribute(this,n),Hn.applyNormalMatrix(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Hn.fromBufferAttribute(this,n),Hn.transformDirection(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=tl(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=bi(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=tl(n,this.array)),n}setX(e,n){return this.normalized&&(n=bi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=tl(n,this.array)),n}setY(e,n){return this.normalized&&(n=bi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=tl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=bi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=tl(n,this.array)),n}setW(e,n){return this.normalized&&(n=bi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=bi(n,this.array),i=bi(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=bi(n,this.array),i=bi(i,this.array),a=bi(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,r){return e*=this.itemSize,this.normalized&&(n=bi(n,this.array),i=bi(i,this.array),a=bi(a,this.array),r=bi(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jm&&(e.usage=this.usage),e}}class i2 extends wa{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class a2 extends wa{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class So extends wa{constructor(e,n,i){super(new Float32Array(e),n,i)}}let oS=0;const Oi=new qn,nh=new Ii,ts=new ye,Ri=new Yl,rl=new Yl,Zn=new ye;class zr extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=Vl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jx(e)?a2:i2)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Wt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,n,i){return Oi.makeTranslation(e,n,i),this.applyMatrix4(Oi),this}scale(e,n,i){return Oi.makeScale(e,n,i),this.applyMatrix4(Oi),this}lookAt(e){return nh.lookAt(e),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const o=e[a];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new So(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const r=e[a];n.setXYZ(a,r.x,r.y,r.z||0)}e.length>n.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ye(-1/0,-1/0,-1/0),new ye(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];Ri.setFromBufferAttribute(r),this.morphTargetsRelative?(Zn.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(Zn),Zn.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(Zn)):(this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Md);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ye,1/0);return}if(e){const i=this.boundingSphere.center;if(Ri.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const s=n[r];rl.setFromBufferAttribute(s),this.morphTargetsRelative?(Zn.addVectors(Ri.min,rl.min),Ri.expandByPoint(Zn),Zn.addVectors(Ri.max,rl.max),Ri.expandByPoint(Zn)):(Ri.expandByPoint(rl.min),Ri.expandByPoint(rl.max))}Ri.getCenter(i);let a=0;for(let r=0,o=e.count;r<o;r++)Zn.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(Zn));if(n)for(let r=0,o=n.length;r<o;r++){const s=n[r],l=this.morphTargetsRelative;for(let c=0,f=s.count;c<f;c++)Zn.fromBufferAttribute(s,c),l&&(ts.fromBufferAttribute(e,c),Zn.add(ts)),a=Math.max(a,i.distanceToSquared(Zn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Nn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Nn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wa(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),s=[],l=[];for(let T=0;T<i.count;T++)s[T]=new ye,l[T]=new ye;const c=new ye,f=new ye,h=new ye,u=new pn,d=new pn,g=new pn,x=new ye,m=new ye;function p(T,y,w){c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),h.fromBufferAttribute(i,w),u.fromBufferAttribute(r,T),d.fromBufferAttribute(r,y),g.fromBufferAttribute(r,w),f.sub(c),h.sub(c),d.sub(u),g.sub(u);const A=1/(d.x*g.y-g.x*d.y);isFinite(A)&&(x.copy(f).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(A),m.copy(h).multiplyScalar(d.x).addScaledVector(f,-g.x).multiplyScalar(A),s[T].add(x),s[y].add(x),s[w].add(x),l[T].add(m),l[y].add(m),l[w].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let T=0,y=b.length;T<y;++T){const w=b[T],A=w.start,C=w.count;for(let R=A,P=A+C;R<P;R+=3)p(e.getX(R+0),e.getX(R+1),e.getX(R+2))}const _=new ye,E=new ye,M=new ye,v=new ye;function S(T){M.fromBufferAttribute(a,T),v.copy(M);const y=s[T];_.copy(y),_.sub(M.multiplyScalar(M.dot(y))).normalize(),E.crossVectors(v,y);const A=E.dot(l[T])<0?-1:1;o.setXYZW(T,_.x,_.y,_.z,A)}for(let T=0,y=b.length;T<y;++T){const w=b[T],A=w.start,C=w.count;for(let R=A,P=A+C;R<P;R+=3)S(e.getX(R+0)),S(e.getX(R+1)),S(e.getX(R+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wa(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const a=new ye,r=new ye,o=new ye,s=new ye,l=new ye,c=new ye,f=new ye,h=new ye;if(e)for(let u=0,d=e.count;u<d;u+=3){const g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);a.fromBufferAttribute(n,g),r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),f.subVectors(o,r),h.subVectors(a,r),f.cross(h),s.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),s.add(f),l.add(f),c.add(f),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)a.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),f.subVectors(o,r),h.subVectors(a,r),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Zn.fromBufferAttribute(e,n),Zn.normalize(),e.setXYZ(n,Zn.x,Zn.y,Zn.z)}toNonIndexed(){function e(s,l){const c=s.array,f=s.itemSize,h=s.normalized,u=new c.constructor(l.length*f);let d=0,g=0;for(let x=0,m=l.length;x<m;x++){s.isInterleavedBufferAttribute?d=l[x]*s.data.stride+s.offset:d=l[x]*f;for(let p=0;p<f;p++)u[g++]=c[d++]}return new wa(u,f,h)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zr,i=this.index.array,a=this.attributes;for(const s in a){const l=a[s],c=e(l,i);n.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let f=0,h=c.length;f<h;f++){const u=c[f],d=e(u,i);l.push(d)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){const d=c[h];f.push(d.toJSON(e.data))}f.length>0&&(a[l]=f,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere=s.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const f=a[c];this.setAttribute(c,f.clone(n))}const r=e.morphAttributes;for(const c in r){const f=[],h=r[c];for(let u=0,d=h.length;u<d;u++)f.push(h[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const u1=new qn,Kr=new Zw,Nc=new Md,h1=new ye,Oc=new ye,$c=new ye,kc=new ye,ih=new ye,Bc=new ye,f1=new ye,Hc=new ye;class Qa extends Ii{constructor(e=new zr,n=new n2){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=a.length;r<o;r++){const s=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const s=this.morphTargetInfluences;if(r&&s){Bc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=s[l],h=r[l];f!==0&&(ih.fromBufferAttribute(h,e),o?Bc.addScaledVector(ih,f):Bc.addScaledVector(ih.sub(n),f))}n.add(Bc)}return n}raycast(e,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nc.copy(i.boundingSphere),Nc.applyMatrix4(r),Kr.copy(e.ray).recast(e.near),!(Nc.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(Nc,h1)===null||Kr.origin.distanceToSquared(h1)>(e.far-e.near)**2))&&(u1.copy(r).invert(),Kr.copy(e.ray).applyMatrix4(u1),!(i.boundingBox!==null&&Kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Kr)))}_computeIntersections(e,n,i){let a;const r=this.geometry,o=this.material,s=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),_=Math.min(s.count,Math.min(m.start+m.count,d.start+d.count));for(let E=b,M=_;E<M;E+=3){const v=s.getX(E),S=s.getX(E+1),T=s.getX(E+2);a=Wc(this,p,e,i,c,f,h,v,S,T),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const g=Math.max(0,d.start),x=Math.min(s.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const b=s.getX(m),_=s.getX(m+1),E=s.getX(m+2);a=Wc(this,o,e,i,c,f,h,b,_,E),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=b,M=_;E<M;E+=3){const v=E,S=E+1,T=E+2;a=Wc(this,p,e,i,c,f,h,v,S,T),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const b=m,_=m+1,E=m+2;a=Wc(this,o,e,i,c,f,h,b,_,E),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function sS(t,e,n,i,a,r,o,s){let l;if(e.side===Mi?l=i.intersectTriangle(o,r,a,!0,s):l=i.intersectTriangle(a,r,o,e.side===Lr,s),l===null)return null;Hc.copy(s),Hc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Hc);return c<n.near||c>n.far?null:{distance:c,point:Hc.clone(),object:t}}function Wc(t,e,n,i,a,r,o,s,l,c){t.getVertexPosition(s,Oc),t.getVertexPosition(l,$c),t.getVertexPosition(c,kc);const f=sS(t,e,n,i,Oc,$c,kc,f1);if(f){const h=new ye;ia.getBarycoord(f1,Oc,$c,kc,h),a&&(f.uv=ia.getInterpolatedAttribute(a,s,l,c,h,new pn)),r&&(f.uv1=ia.getInterpolatedAttribute(r,s,l,c,h,new pn)),o&&(f.normal=ia.getInterpolatedAttribute(o,s,l,c,h,new ye),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a:s,b:l,c,normal:new ye,materialIndex:0};ia.getNormal(Oc,$c,kc,u.normal),f.face=u,f.barycoord=h}return f}class ql extends zr{constructor(e=1,n=1,i=1,a=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:o};const s=this;a=Math.floor(a),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],f=[],h=[];let u=0,d=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,a,o,2),g("x","z","y",1,-1,e,i,-n,a,o,3),g("x","y","z",1,-1,e,n,i,a,r,4),g("x","y","z",-1,-1,e,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new So(c,3)),this.setAttribute("normal",new So(f,3)),this.setAttribute("uv",new So(h,2));function g(x,m,p,b,_,E,M,v,S,T,y){const w=E/S,A=M/T,C=E/2,R=M/2,P=v/2,I=S+1,z=T+1;let B=0,F=0;const O=new ye;for(let k=0;k<z;k++){const G=k*A-R;for(let ee=0;ee<I;ee++){const ne=ee*w-C;O[x]=ne*b,O[m]=G*_,O[p]=P,c.push(O.x,O.y,O.z),O[x]=0,O[m]=0,O[p]=v>0?1:-1,f.push(O.x,O.y,O.z),h.push(ee/S),h.push(1-k/T),B+=1}}for(let k=0;k<T;k++)for(let G=0;G<S;G++){const ee=u+G+I*k,ne=u+G+I*(k+1),J=u+(G+1)+I*(k+1),he=u+(G+1)+I*k;l.push(ee,ne,he),l.push(ne,J,he),F+=6}s.addGroup(d,F,y),d+=F,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone():Array.isArray(a)?e[n][i]=a.slice():e[n][i]=a}}return e}function di(t){const e={};for(let n=0;n<t.length;n++){const i=Us(t[n]);for(const a in i)e[a]=i[a]}return e}function lS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function r2(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:cn.workingColorSpace}const cS={clone:Us,merge:di};var uS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sa extends B0{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uS,this.fragmentShader=hS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=lS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const o=this.uniforms[a].value;o&&o.isTexture?n.uniforms[a]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[a]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[a]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[a]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[a]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[a]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[a]={type:"m4",value:o.toArray()}:n.uniforms[a]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class o2 extends Ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qn,this.projectionMatrix=new qn,this.projectionMatrixInverse=new qn,this.coordinateSystem=va,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new ye,d1=new pn,p1=new pn;class ea extends o2{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=kf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kf*2*Math.atan(Math.tan(Uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,n){return this.getViewBounds(e,d1,p1),n.subVectors(p1,d1)}setViewOffset(e,n,i,a,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Uu*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*a/l,n-=o.offsetY*i/c,a*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ns=-90,is=1;class fS extends Ii{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ea(ns,is,e,n);a.layers=this.layers,this.add(a);const r=new ea(ns,is,e,n);r.layers=this.layers,this.add(r);const o=new ea(ns,is,e,n);o.layers=this.layers,this.add(o);const s=new ea(ns,is,e,n);s.layers=this.layers,this.add(s);const l=new ea(ns,is,e,n);l.layers=this.layers,this.add(l);const c=new ea(ns,is,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,r,o,s,l]=n;for(const c of n)this.remove(c);if(e===va)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===I0)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,s,l,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(n,r),e.setRenderTarget(i,1,a),e.render(n,o),e.setRenderTarget(i,2,a),e.render(n,s),e.setRenderTarget(i,3,a),e.render(n,l),e.setRenderTarget(i,4,a),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,a),e.render(n,f),e.setRenderTarget(h,u,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class s2 extends mi{constructor(e=[],n=Ls,i,a,r,o,s,l,c,f){super(e,n,i,a,r,o,s,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dS extends Po{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new s2(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new ql(5,5,5),r=new Sa({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mi,blending:qa});r.uniforms.tEquirect.value=n;const o=new Qa(a,r),s=n.minFilter;return n.minFilter===go&&(n.minFilter=Wi),new fS(1,10,this).update(e,o),n.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,a);e.setRenderTarget(r)}}class Gc extends Ii{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pS={type:"move"};class ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ye,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ye),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ye,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ye),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,r=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,a.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(a.linearVelocity)):s.hasLinearVelocity=!1,a.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(a.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(pS)))}return s!==null&&(s.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Gc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class mS extends Ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ja,this.environmentIntensity=1,this.environmentRotation=new Ja,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class gS extends mi{constructor(e=null,n=1,i=1,a,r,o,s,l,c=Di,f=Di,h,u){super(null,o,s,l,c,f,a,r,h,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rh=new ye,xS=new ye,bS=new Wt;class io{constructor(e=new ye(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=rh.subVectors(i,n).cross(xS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(rh),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||bS.getNormalMatrix(e),a=this.coplanarPoint(rh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new Md,vS=new pn(.5,.5),Vc=new ye;class l2{constructor(e=new io,n=new io,i=new io,a=new io,r=new io,o=new io){this.planes=[e,n,i,a,r,o]}set(e,n,i,a,r,o){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(i),s[3].copy(a),s[4].copy(r),s[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=va,i=!1){const a=this.planes,r=e.elements,o=r[0],s=r[1],l=r[2],c=r[3],f=r[4],h=r[5],u=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],b=r[12],_=r[13],E=r[14],M=r[15];if(a[0].setComponents(c-o,d-f,p-g,M-b).normalize(),a[1].setComponents(c+o,d+f,p+g,M+b).normalize(),a[2].setComponents(c+s,d+h,p+x,M+_).normalize(),a[3].setComponents(c-s,d-h,p-x,M-_).normalize(),i)a[4].setComponents(l,u,m,E).normalize(),a[5].setComponents(c-l,d-u,p-m,M-E).normalize();else if(a[4].setComponents(c-l,d-u,p-m,M-E).normalize(),n===va)a[5].setComponents(c+l,d+u,p+m,M+E).normalize();else if(n===I0)a[5].setComponents(l,u,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){Zr.center.set(0,0,0);const n=vS.distanceTo(e.center);return Zr.radius=.7071067811865476+n,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Vc.x=a.normal.x>0?e.max.x:e.min.x,Vc.y=a.normal.y>0?e.max.y:e.min.y,Vc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class c2 extends mi{constructor(e,n,i=Ro,a,r,o,s=Di,l=Di,c,f=zl,h=1){if(f!==zl&&f!==Ul)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:h};super(u,a,r,o,s,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class u2 extends mi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jl extends zr{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const r=e/2,o=n/2,s=Math.floor(i),l=Math.floor(a),c=s+1,f=l+1,h=e/s,u=n/l,d=[],g=[],x=[],m=[];for(let p=0;p<f;p++){const b=p*u-o;for(let _=0;_<c;_++){const E=_*h-r;g.push(E,-b,0),x.push(0,0,1),m.push(_/s),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<s;b++){const _=b+c*p,E=b+c*(p+1),M=b+1+c*(p+1),v=b+1+c*p;d.push(_,E,v),d.push(E,M,v)}this.setIndex(d),this.setAttribute("position",new So(g,3)),this.setAttribute("normal",new So(x,3)),this.setAttribute("uv",new So(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.width,e.height,e.widthSegments,e.heightSegments)}}class MS extends B0{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _S extends B0{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class h2 extends o2{constructor(e=-1,n=1,i=1,a=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,o=i+e,s=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,s-=f*this.view.offsetY,l=s-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class yS extends ea{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function m1(t,e,n,i){const a=wS(i);switch(n){case qx:return t*e;case Kx:return t*e/a.components*a.byteLength;case md:return t*e/a.components*a.byteLength;case gd:return t*e*2/a.components*a.byteLength;case xd:return t*e*2/a.components*a.byteLength;case jx:return t*e*3/a.components*a.byteLength;case aa:return t*e*4/a.components*a.byteLength;case bd:return t*e*4/a.components*a.byteLength;case c0:case u0:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case h0:case f0:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case df:case mf:return Math.max(t,16)*Math.max(e,8)/4;case ff:case pf:return Math.max(t,8)*Math.max(e,8)/2;case gf:case xf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case _f:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case yf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case wf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Af:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Tf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Df:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case If:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Lf:case Ff:case zf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Uf:case Nf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Of:case $f:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function wS(t){switch(t){case Za:case Gx:return{byteLength:1,components:1};case Ll:case Vx:case $s:return{byteLength:2,components:1};case dd:case pd:return{byteLength:2,components:4};case Ro:case fd:case Xa:return{byteLength:4,components:1};case Xx:case Yx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hd}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hd);function f2(){let t=null,e=!1,n=null,i=null;function a(r,o){n(r,o),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function SS(t){const e=new WeakMap;function n(s,l){const c=s.array,f=s.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),s.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=t.HALF_FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:h}}function i(s,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,s),h.length===0)t.bufferSubData(c,0,f);else{h.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<h.length;d++){const g=h[u],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,h[u]=x)}h.length=u+1;for(let d=0,g=h.length;d<g;d++){const x=h[d];t.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function r(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(t.deleteBuffer(l.buffer),e.delete(s))}function o(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const f=e.get(s);(!f||f.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const c=e.get(s);if(c===void 0)e.set(s,n(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,s,l),c.version=s.version}}return{get:a,remove:r,update:o}}var ES=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,TS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,IS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,FS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,US=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,OS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$S=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ZS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tE="gl_FragColor = linearToOutputTexel( gl_FragColor );",nE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ME=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_E=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,SE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,EE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$E=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,WE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,e4=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t4=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n4=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i4=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a4=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r4=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o4=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,s4=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,l4=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,c4=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u4=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h4=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,f4=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d4=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,p4=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m4=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x4=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,b4=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,v4=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,M4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,w4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E4=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T4=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,D4=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,I4=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,L4=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,F4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U4=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N4=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$4=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k4=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B4=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H4=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,W4=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G4=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,V4=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X4=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y4=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q4=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,j4=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J4=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Q4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:ES,alphahash_pars_fragment:AS,alphamap_fragment:TS,alphamap_pars_fragment:CS,alphatest_fragment:RS,alphatest_pars_fragment:PS,aomap_fragment:DS,aomap_pars_fragment:IS,batching_pars_vertex:LS,batching_vertex:FS,begin_vertex:zS,beginnormal_vertex:US,bsdfs:NS,iridescence_fragment:OS,bumpmap_pars_fragment:$S,clipping_planes_fragment:kS,clipping_planes_pars_fragment:BS,clipping_planes_pars_vertex:HS,clipping_planes_vertex:WS,color_fragment:GS,color_pars_fragment:VS,color_pars_vertex:XS,color_vertex:YS,common:qS,cube_uv_reflection_fragment:jS,defaultnormal_vertex:KS,displacementmap_pars_vertex:ZS,displacementmap_vertex:JS,emissivemap_fragment:QS,emissivemap_pars_fragment:eE,colorspace_fragment:tE,colorspace_pars_fragment:nE,envmap_fragment:iE,envmap_common_pars_fragment:aE,envmap_pars_fragment:rE,envmap_pars_vertex:oE,envmap_physical_pars_fragment:xE,envmap_vertex:sE,fog_vertex:lE,fog_pars_vertex:cE,fog_fragment:uE,fog_pars_fragment:hE,gradientmap_pars_fragment:fE,lightmap_pars_fragment:dE,lights_lambert_fragment:pE,lights_lambert_pars_fragment:mE,lights_pars_begin:gE,lights_toon_fragment:bE,lights_toon_pars_fragment:vE,lights_phong_fragment:ME,lights_phong_pars_fragment:_E,lights_physical_fragment:yE,lights_physical_pars_fragment:wE,lights_fragment_begin:SE,lights_fragment_maps:EE,lights_fragment_end:AE,logdepthbuf_fragment:TE,logdepthbuf_pars_fragment:CE,logdepthbuf_pars_vertex:RE,logdepthbuf_vertex:PE,map_fragment:DE,map_pars_fragment:IE,map_particle_fragment:LE,map_particle_pars_fragment:FE,metalnessmap_fragment:zE,metalnessmap_pars_fragment:UE,morphinstance_vertex:NE,morphcolor_vertex:OE,morphnormal_vertex:$E,morphtarget_pars_vertex:kE,morphtarget_vertex:BE,normal_fragment_begin:HE,normal_fragment_maps:WE,normal_pars_fragment:GE,normal_pars_vertex:VE,normal_vertex:XE,normalmap_pars_fragment:YE,clearcoat_normal_fragment_begin:qE,clearcoat_normal_fragment_maps:jE,clearcoat_pars_fragment:KE,iridescence_pars_fragment:ZE,opaque_fragment:JE,packing:QE,premultiplied_alpha_fragment:e4,project_vertex:t4,dithering_fragment:n4,dithering_pars_fragment:i4,roughnessmap_fragment:a4,roughnessmap_pars_fragment:r4,shadowmap_pars_fragment:o4,shadowmap_pars_vertex:s4,shadowmap_vertex:l4,shadowmask_pars_fragment:c4,skinbase_vertex:u4,skinning_pars_vertex:h4,skinning_vertex:f4,skinnormal_vertex:d4,specularmap_fragment:p4,specularmap_pars_fragment:m4,tonemapping_fragment:g4,tonemapping_pars_fragment:x4,transmission_fragment:b4,transmission_pars_fragment:v4,uv_pars_fragment:M4,uv_pars_vertex:_4,uv_vertex:y4,worldpos_vertex:w4,background_vert:S4,background_frag:E4,backgroundCube_vert:A4,backgroundCube_frag:T4,cube_vert:C4,cube_frag:R4,depth_vert:P4,depth_frag:D4,distanceRGBA_vert:I4,distanceRGBA_frag:L4,equirect_vert:F4,equirect_frag:z4,linedashed_vert:U4,linedashed_frag:N4,meshbasic_vert:O4,meshbasic_frag:$4,meshlambert_vert:k4,meshlambert_frag:B4,meshmatcap_vert:H4,meshmatcap_frag:W4,meshnormal_vert:G4,meshnormal_frag:V4,meshphong_vert:X4,meshphong_frag:Y4,meshphysical_vert:q4,meshphysical_frag:j4,meshtoon_vert:K4,meshtoon_frag:Z4,points_vert:J4,points_frag:Q4,shadow_vert:eA,shadow_frag:tA,sprite_vert:nA,sprite_frag:iA},tt={common:{diffuse:{value:new tn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new pn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new tn(16777215)},opacity:{value:1},center:{value:new pn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},ga={basic:{uniforms:di([tt.common,tt.specularmap,tt.envmap,tt.aomap,tt.lightmap,tt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:di([tt.common,tt.specularmap,tt.envmap,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.fog,tt.lights,{emissive:{value:new tn(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:di([tt.common,tt.specularmap,tt.envmap,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.fog,tt.lights,{emissive:{value:new tn(0)},specular:{value:new tn(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:di([tt.common,tt.envmap,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.roughnessmap,tt.metalnessmap,tt.fog,tt.lights,{emissive:{value:new tn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:di([tt.common,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.gradientmap,tt.fog,tt.lights,{emissive:{value:new tn(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:di([tt.common,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:di([tt.points,tt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:di([tt.common,tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:di([tt.common,tt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:di([tt.common,tt.bumpmap,tt.normalmap,tt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:di([tt.sprite,tt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:di([tt.common,tt.displacementmap,{referencePosition:{value:new ye},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:di([tt.lights,tt.fog,{color:{value:new tn(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};ga.physical={uniforms:di([ga.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new pn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new tn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new pn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new tn(0)},specularColor:{value:new tn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new pn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Xc={r:0,b:0,g:0},Jr=new Ja,aA=new qn;function rA(t,e,n,i,a,r,o){const s=new tn(0);let l=r===!0?0:1,c,f,h=null,u=0,d=null;function g(_){let E=_.isScene===!0?_.background:null;return E&&E.isTexture&&(E=(_.backgroundBlurriness>0?n:e).get(E)),E}function x(_){let E=!1;const M=g(_);M===null?p(s,l):M&&M.isColor&&(p(M,1),E=!0);const v=t.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,E){const M=g(E);M&&(M.isCubeTexture||M.mapping===k0)?(f===void 0&&(f=new Qa(new ql(1,1,1),new Sa({name:"BackgroundCubeMaterial",uniforms:Us(ga.backgroundCube.uniforms),vertexShader:ga.backgroundCube.vertexShader,fragmentShader:ga.backgroundCube.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(v,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(f)),Jr.copy(E.backgroundRotation),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(aA.makeRotationFromEuler(Jr)),f.material.toneMapped=cn.getTransfer(M.colorSpace)!==mn,(h!==M||u!==M.version||d!==t.toneMapping)&&(f.material.needsUpdate=!0,h=M,u=M.version,d=t.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Qa(new jl(2,2),new Sa({name:"BackgroundMaterial",uniforms:Us(ga.background.uniforms),vertexShader:ga.background.vertexShader,fragmentShader:ga.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=cn.getTransfer(M.colorSpace)!==mn,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,E){_.getRGB(Xc,r2(t)),i.buffers.color.setClear(Xc.r,Xc.g,Xc.b,E,o)}function b(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(_,E=1){s.set(_),l=E,p(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(s,l)},render:x,addToRenderList:m,dispose:b}}function oA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=u(null);let r=a,o=!1;function s(w,A,C,R,P){let I=!1;const z=h(R,C,A);r!==z&&(r=z,c(r.object)),I=d(w,R,C,P),I&&g(w,R,C,P),P!==null&&e.update(P,t.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,E(w,A,C,R),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return t.createVertexArray()}function c(w){return t.bindVertexArray(w)}function f(w){return t.deleteVertexArray(w)}function h(w,A,C){const R=C.wireframe===!0;let P=i[w.id];P===void 0&&(P={},i[w.id]=P);let I=P[A.id];I===void 0&&(I={},P[A.id]=I);let z=I[R];return z===void 0&&(z=u(l()),I[R]=z),z}function u(w){const A=[],C=[],R=[];for(let P=0;P<n;P++)A[P]=0,C[P]=0,R[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:C,attributeDivisors:R,object:w,attributes:{},index:null}}function d(w,A,C,R){const P=r.attributes,I=A.attributes;let z=0;const B=C.getAttributes();for(const F in B)if(B[F].location>=0){const k=P[F];let G=I[F];if(G===void 0&&(F==="instanceMatrix"&&w.instanceMatrix&&(G=w.instanceMatrix),F==="instanceColor"&&w.instanceColor&&(G=w.instanceColor)),k===void 0||k.attribute!==G||G&&k.data!==G.data)return!0;z++}return r.attributesNum!==z||r.index!==R}function g(w,A,C,R){const P={},I=A.attributes;let z=0;const B=C.getAttributes();for(const F in B)if(B[F].location>=0){let k=I[F];k===void 0&&(F==="instanceMatrix"&&w.instanceMatrix&&(k=w.instanceMatrix),F==="instanceColor"&&w.instanceColor&&(k=w.instanceColor));const G={};G.attribute=k,k&&k.data&&(G.data=k.data),P[F]=G,z++}r.attributes=P,r.attributesNum=z,r.index=R}function x(){const w=r.newAttributes;for(let A=0,C=w.length;A<C;A++)w[A]=0}function m(w){p(w,0)}function p(w,A){const C=r.newAttributes,R=r.enabledAttributes,P=r.attributeDivisors;C[w]=1,R[w]===0&&(t.enableVertexAttribArray(w),R[w]=1),P[w]!==A&&(t.vertexAttribDivisor(w,A),P[w]=A)}function b(){const w=r.newAttributes,A=r.enabledAttributes;for(let C=0,R=A.length;C<R;C++)A[C]!==w[C]&&(t.disableVertexAttribArray(C),A[C]=0)}function _(w,A,C,R,P,I,z){z===!0?t.vertexAttribIPointer(w,A,C,P,I):t.vertexAttribPointer(w,A,C,R,P,I)}function E(w,A,C,R){x();const P=R.attributes,I=C.getAttributes(),z=A.defaultAttributeValues;for(const B in I){const F=I[B];if(F.location>=0){let O=P[B];if(O===void 0&&(B==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),B==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),O!==void 0){const k=O.normalized,G=O.itemSize,ee=e.get(O);if(ee===void 0)continue;const ne=ee.buffer,J=ee.type,he=ee.bytesPerElement,H=J===t.INT||J===t.UNSIGNED_INT||O.gpuType===fd;if(O.isInterleavedBufferAttribute){const N=O.data,W=N.stride,fe=O.offset;if(N.isInstancedInterleavedBuffer){for(let j=0;j<F.locationSize;j++)p(F.location+j,N.meshPerAttribute);w.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let j=0;j<F.locationSize;j++)m(F.location+j);t.bindBuffer(t.ARRAY_BUFFER,ne);for(let j=0;j<F.locationSize;j++)_(F.location+j,G/F.locationSize,J,k,W*he,(fe+G/F.locationSize*j)*he,H)}else{if(O.isInstancedBufferAttribute){for(let N=0;N<F.locationSize;N++)p(F.location+N,O.meshPerAttribute);w.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let N=0;N<F.locationSize;N++)m(F.location+N);t.bindBuffer(t.ARRAY_BUFFER,ne);for(let N=0;N<F.locationSize;N++)_(F.location+N,G/F.locationSize,J,k,G*he,G/F.locationSize*N*he,H)}}else if(z!==void 0){const k=z[B];if(k!==void 0)switch(k.length){case 2:t.vertexAttrib2fv(F.location,k);break;case 3:t.vertexAttrib3fv(F.location,k);break;case 4:t.vertexAttrib4fv(F.location,k);break;default:t.vertexAttrib1fv(F.location,k)}}}}b()}function M(){T();for(const w in i){const A=i[w];for(const C in A){const R=A[C];for(const P in R)f(R[P].object),delete R[P];delete A[C]}delete i[w]}}function v(w){if(i[w.id]===void 0)return;const A=i[w.id];for(const C in A){const R=A[C];for(const P in R)f(R[P].object),delete R[P];delete A[C]}delete i[w.id]}function S(w){for(const A in i){const C=i[A];if(C[w.id]===void 0)continue;const R=C[w.id];for(const P in R)f(R[P].object),delete R[P];delete C[w.id]}}function T(){y(),o=!0,r!==a&&(r=a,c(r.object))}function y(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:s,reset:T,resetDefaultState:y,dispose:M,releaseStatesOfGeometry:v,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function sA(t,e,n){let i;function a(c){i=c}function r(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function s(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let d=0;for(let g=0;g<h;g++)d+=f[g];n.update(d,i,1)}function l(c,f,h,u){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],f[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,f,0,u,0,h);let g=0;for(let x=0;x<h;x++)g+=f[x]*u[x];n.update(g,i,1)}}this.setMode=a,this.render=r,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function lA(t,e,n,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function o(S){return!(S!==aa&&i.convert(S)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(S){const T=S===$s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Za&&i.convert(S)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Xa&&!T)}function l(S){if(S==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Bt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,v=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:E,vertexTextures:M,maxSamples:v}}function cA(t){const e=this;let n=null,i=0,a=!1,r=!1;const o=new io,s=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const d=h.length!==0||u||i!==0||a;return a=u,i=h.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){n=f(h,u,0)},this.setState=function(h,u,d){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=t.get(h);if(!a||g===null||g.length===0||r&&!m)r?f(null):c();else{const b=r?0:i,_=b*4;let E=p.clippingState||null;l.value=E,E=f(g,u,_,d);for(let M=0;M!==_;++M)E[M]=n[M];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,u,d,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=d+x*4,b=u.matrixWorldInverse;s.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,E=d;_!==x;++_,E+=4)o.copy(h[_]).applyMatrix4(b,s),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function uA(t){let e=new WeakMap;function n(o,s){return s===lf?o.mapping=Ls:s===cf&&(o.mapping=Fs),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===lf||s===cf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new dS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",a),n(c.texture,o.mapping)}else return null}}return o}function a(o){const s=o.target;s.removeEventListener("dispose",a);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const yr=4,g1=[.125,.215,.35,.446,.526,.582],uo=20,hA=256,ol=new h2,x1=new tn;let oh=null,sh=0,lh=0,ch=!1;const fA=new ye;class b1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,a=100,r={}){const{size:o=256,position:s=fA}=r;oh=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,s),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=M1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oh,sh,lh),this._renderer.xr.enabled=ch,e.scissorTest=!1,as(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ls||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oh=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Wi,minFilter:Wi,generateMipmaps:!1,type:$s,format:aa,colorSpace:zs,depthBuffer:!1},a=v1(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=v1(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=dA(r)),this._blurMaterial=mA(r,e,n),this._ggxMaterial=pA(r,e,n)}return a}_compileMaterial(e){const n=new Qa(new zr,e);this._renderer.compile(n,ol)}_sceneToCubeUV(e,n,i,a,r){const l=new ea(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(x1),h.toneMapping=Rr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qa(new ql,new n2({name:"PMREM.Background",side:Mi,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(x1),p=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[_],r.y,r.z)):E===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[_]));const M=this._cubeSize;as(a,E*M,_>2?M:0,M,M),h.setRenderTarget(a),p&&h.render(x,l),h.render(e,l)}h.toneMapping=d,h.autoClear=u,e.background=b}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===Ls||e.mapping===Fs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=_1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=M1());const r=a?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;as(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ol)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const a=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,s=this._lodMeshes[i];s.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=.05+c*.95,d=h*u,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-yr?i-g+yr:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-n,as(r,m,p,3*x,2*x),a.setRenderTarget(r),a.render(s,ol),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,as(e,m,p,3*x,2*x),a.setRenderTarget(e),a.render(s,ol)}_blur(e,n,i,a,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,a,"latitudinal",r),this._halfBlur(o,e,i,i,a,"longitudinal",r)}_halfBlur(e,n,i,a,r,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Nn("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[a];h.material=c;const u=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*uo-1),x=r/g,m=isFinite(r)?1+Math.floor(f*x):uo;m>uo&&Bt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${uo}`);const p=[];let b=0;for(let S=0;S<uo;++S){const T=S/x,y=Math.exp(-T*T/2);p.push(y),S===0?b+=y:S<m&&(b+=2*y)}for(let S=0;S<p.length;S++)p[S]=p[S]/b;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",s&&(u.poleAxis.value=s);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-i;const E=this._sizeLods[a],M=3*E*(a>_-yr?a-_+yr:0),v=4*(this._cubeSize-E);as(n,M,v,3*E,2*E),l.setRenderTarget(n),l.render(h,ol)}}function dA(t){const e=[],n=[],i=[];let a=t;const r=t-yr+1+g1.length;for(let o=0;o<r;o++){const s=Math.pow(2,a);e.push(s);let l=1/s;o>t-yr?l=g1[o-t+yr-1]:o===0&&(l=0),n.push(l);const c=1/(s-2),f=-c,h=1+c,u=[f,f,h,f,h,h,f,f,h,h,f,h],d=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*d),_=new Float32Array(m*g*d),E=new Float32Array(p*g*d);for(let v=0;v<d;v++){const S=v%3*2/3-1,T=v>2?0:-1,y=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];b.set(y,x*g*v),_.set(u,m*g*v);const w=[v,v,v,v,v,v];E.set(w,p*g*v)}const M=new zr;M.setAttribute("position",new wa(b,x)),M.setAttribute("uv",new wa(_,m)),M.setAttribute("faceIndex",new wa(E,p)),i.push(new Qa(M,null)),a>yr&&a--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function v1(t,e,n){const i=new Po(t,e,n);return i.texture.mapping=k0,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function as(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function pA(t,e,n){return new Sa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:H0(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function mA(t,e,n){const i=new Float32Array(uo),a=new ye(0,1,0);return new Sa({name:"SphericalGaussianBlur",defines:{n:uo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:H0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function M1(){return new Sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:H0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function _1(){return new Sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:H0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function H0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gA(t){let e=new WeakMap,n=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===lf||l===cf,f=l===Ls||l===Fs;if(c||f){let h=e.get(s);const u=h!==void 0?h.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==u)return n===null&&(n=new b1(t)),h=c?n.fromEquirectangular(s,h):n.fromCubemap(s,h),h.texture.pmremVersion=s.pmremVersion,e.set(s,h),h.texture;if(h!==void 0)return h.texture;{const d=s.image;return c&&d&&d.height>0||f&&d&&a(d)?(n===null&&(n=new b1(t)),h=c?n.fromEquirectangular(s):n.fromCubemap(s),h.texture.pmremVersion=s.pmremVersion,e.set(s,h),s.addEventListener("dispose",r),h.texture):null}}}return s}function a(s){let l=0;const c=6;for(let f=0;f<c;f++)s[f]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function xA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Nl("WebGLRenderer: "+i+" extension not supported."),a}}}function bA(t,e,n,i){const a={},r=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete a[u.id];const d=r.get(u);d&&(e.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function s(h,u){return a[u.id]===!0||(u.addEventListener("dispose",o),a[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const d in u)e.update(u[d],t.ARRAY_BUFFER)}function c(h){const u=[],d=h.index,g=h.attributes.position;let x=0;if(d!==null){const b=d.array;x=d.version;for(let _=0,E=b.length;_<E;_+=3){const M=b[_+0],v=b[_+1],S=b[_+2];u.push(M,v,v,S,S,M)}}else if(g!==void 0){const b=g.array;x=g.version;for(let _=0,E=b.length/3-1;_<E;_+=3){const M=_+0,v=_+1,S=_+2;u.push(M,v,v,S,S,M)}}else return;const m=new(Jx(u)?a2:i2)(u,1);m.version=x;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function f(h){const u=r.get(h);if(u){const d=h.index;d!==null&&u.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:s,update:l,getWireframeAttribute:f}}function vA(t,e,n){let i;function a(u){i=u}let r,o;function s(u){r=u.type,o=u.bytesPerElement}function l(u,d){t.drawElements(i,d,r,u*o),n.update(d,i,1)}function c(u,d,g){g!==0&&(t.drawElementsInstanced(i,d,r,u*o,g),n.update(d,i,g))}function f(u,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];n.update(m,i,1)}function h(u,d,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,u,0,x,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*x[b];n.update(p,i,1)}}this.setMode=a,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function MA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,s){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=s*(r/3);break;case t.LINES:n.lines+=s*(r/2);break;case t.LINE_STRIP:n.lines+=s*(r-1);break;case t.LINE_LOOP:n.lines+=s*r;break;case t.POINTS:n.points+=s*r;break;default:Nn("WebGLInfo: Unknown draw mode:",o);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function _A(t,e,n){const i=new WeakMap,a=new On;function r(o,s,l){const c=o.morphTargetInfluences,f=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,h=f!==void 0?f.length:0;let u=i.get(s);if(u===void 0||u.count!==h){let y=function(){S.dispose(),i.delete(s),s.removeEventListener("dispose",y)};u!==void 0&&u.texture.dispose();const d=s.morphAttributes.position!==void 0,g=s.morphAttributes.normal!==void 0,x=s.morphAttributes.color!==void 0,m=s.morphAttributes.position||[],p=s.morphAttributes.normal||[],b=s.morphAttributes.color||[];let _=0;d===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let E=s.attributes.position.count*_,M=1;E>e.maxTextureSize&&(M=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const v=new Float32Array(E*M*4*h),S=new Qx(v,E,M,h);S.type=Xa,S.needsUpdate=!0;const T=_*4;for(let w=0;w<h;w++){const A=m[w],C=p[w],R=b[w],P=E*M*4*w;for(let I=0;I<A.count;I++){const z=I*T;d===!0&&(a.fromBufferAttribute(A,I),v[P+z+0]=a.x,v[P+z+1]=a.y,v[P+z+2]=a.z,v[P+z+3]=0),g===!0&&(a.fromBufferAttribute(C,I),v[P+z+4]=a.x,v[P+z+5]=a.y,v[P+z+6]=a.z,v[P+z+7]=0),x===!0&&(a.fromBufferAttribute(R,I),v[P+z+8]=a.x,v[P+z+9]=a.y,v[P+z+10]=a.z,v[P+z+11]=R.itemSize===4?a.w:1)}}u={count:h,texture:S,size:new pn(E,M)},i.set(s,u),s.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];const g=s.morphTargetsRelative?1:1-d;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function yA(t,e,n,i){let a=new WeakMap;function r(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(a.get(h)!==c&&(e.update(h),a.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),a.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;a.get(u)!==c&&(u.update(),a.set(u,c))}return h}function o(){a=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const d2=new mi,y1=new c2(1,1),p2=new Qx,m2=new jw,g2=new s2,w1=[],S1=[],E1=new Float32Array(16),A1=new Float32Array(9),T1=new Float32Array(4);function Bs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let r=w1[a];if(r===void 0&&(r=new Float32Array(a),w1[a]=r),e!==0){i.toArray(r,0);for(let o=1,s=0;o!==e;++o)s+=n,t[o].toArray(r,s)}return r}function jn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Kn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function W0(t,e){let n=S1[e];n===void 0&&(n=new Int32Array(e),S1[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function wA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function SA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jn(n,e))return;t.uniform2fv(this.addr,e),Kn(n,e)}}function EA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jn(n,e))return;t.uniform3fv(this.addr,e),Kn(n,e)}}function AA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jn(n,e))return;t.uniform4fv(this.addr,e),Kn(n,e)}}function TA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Kn(n,e)}else{if(jn(n,i))return;T1.set(i),t.uniformMatrix2fv(this.addr,!1,T1),Kn(n,i)}}function CA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Kn(n,e)}else{if(jn(n,i))return;A1.set(i),t.uniformMatrix3fv(this.addr,!1,A1),Kn(n,i)}}function RA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Kn(n,e)}else{if(jn(n,i))return;E1.set(i),t.uniformMatrix4fv(this.addr,!1,E1),Kn(n,i)}}function PA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function DA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jn(n,e))return;t.uniform2iv(this.addr,e),Kn(n,e)}}function IA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jn(n,e))return;t.uniform3iv(this.addr,e),Kn(n,e)}}function LA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jn(n,e))return;t.uniform4iv(this.addr,e),Kn(n,e)}}function FA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function zA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jn(n,e))return;t.uniform2uiv(this.addr,e),Kn(n,e)}}function UA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jn(n,e))return;t.uniform3uiv(this.addr,e),Kn(n,e)}}function NA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jn(n,e))return;t.uniform4uiv(this.addr,e),Kn(n,e)}}function OA(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let r;this.type===t.SAMPLER_2D_SHADOW?(y1.compareFunction=Zx,r=y1):r=d2,n.setTexture2D(e||r,a)}function $A(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||m2,a)}function kA(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||g2,a)}function BA(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||p2,a)}function HA(t){switch(t){case 5126:return wA;case 35664:return SA;case 35665:return EA;case 35666:return AA;case 35674:return TA;case 35675:return CA;case 35676:return RA;case 5124:case 35670:return PA;case 35667:case 35671:return DA;case 35668:case 35672:return IA;case 35669:case 35673:return LA;case 5125:return FA;case 36294:return zA;case 36295:return UA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return OA;case 35679:case 36299:case 36307:return $A;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return BA}}function WA(t,e){t.uniform1fv(this.addr,e)}function GA(t,e){const n=Bs(e,this.size,2);t.uniform2fv(this.addr,n)}function VA(t,e){const n=Bs(e,this.size,3);t.uniform3fv(this.addr,n)}function XA(t,e){const n=Bs(e,this.size,4);t.uniform4fv(this.addr,n)}function YA(t,e){const n=Bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function qA(t,e){const n=Bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function jA(t,e){const n=Bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function KA(t,e){t.uniform1iv(this.addr,e)}function ZA(t,e){t.uniform2iv(this.addr,e)}function JA(t,e){t.uniform3iv(this.addr,e)}function QA(t,e){t.uniform4iv(this.addr,e)}function eT(t,e){t.uniform1uiv(this.addr,e)}function tT(t,e){t.uniform2uiv(this.addr,e)}function nT(t,e){t.uniform3uiv(this.addr,e)}function iT(t,e){t.uniform4uiv(this.addr,e)}function aT(t,e,n){const i=this.cache,a=e.length,r=W0(n,a);jn(i,r)||(t.uniform1iv(this.addr,r),Kn(i,r));for(let o=0;o!==a;++o)n.setTexture2D(e[o]||d2,r[o])}function rT(t,e,n){const i=this.cache,a=e.length,r=W0(n,a);jn(i,r)||(t.uniform1iv(this.addr,r),Kn(i,r));for(let o=0;o!==a;++o)n.setTexture3D(e[o]||m2,r[o])}function oT(t,e,n){const i=this.cache,a=e.length,r=W0(n,a);jn(i,r)||(t.uniform1iv(this.addr,r),Kn(i,r));for(let o=0;o!==a;++o)n.setTextureCube(e[o]||g2,r[o])}function sT(t,e,n){const i=this.cache,a=e.length,r=W0(n,a);jn(i,r)||(t.uniform1iv(this.addr,r),Kn(i,r));for(let o=0;o!==a;++o)n.setTexture2DArray(e[o]||p2,r[o])}function lT(t){switch(t){case 5126:return WA;case 35664:return GA;case 35665:return VA;case 35666:return XA;case 35674:return YA;case 35675:return qA;case 35676:return jA;case 5124:case 35670:return KA;case 35667:case 35671:return ZA;case 35668:case 35672:return JA;case 35669:case 35673:return QA;case 5125:return eT;case 36294:return tT;case 36295:return nT;case 36296:return iT;case 35678:case 36198:case 36298:case 36306:case 35682:return aT;case 35679:case 36299:case 36307:return rT;case 35680:case 36300:case 36308:case 36293:return oT;case 36289:case 36303:case 36311:case 36292:return sT}}class cT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=HA(n.type)}}class uT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=lT(n.type)}}class hT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let r=0,o=a.length;r!==o;++r){const s=a[r];s.setValue(e,n[s.id],i)}}}const uh=/(\w+)(\])?(\[|\.)?/g;function C1(t,e){t.seq.push(e),t.map[e.id]=e}function fT(t,e,n){const i=t.name,a=i.length;for(uh.lastIndex=0;;){const r=uh.exec(i),o=uh.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===a){C1(n,c===void 0?new cT(s,t,e):new uT(s,t,e));break}else{let h=n.map[s];h===void 0&&(h=new hT(s),C1(n,h)),n=h}}}class d0{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=e.getActiveUniform(n,a),o=e.getUniformLocation(n,r.name);fT(r,o,this)}}setValue(e,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let r=0,o=n.length;r!==o;++r){const s=n[r],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,r=e.length;a!==r;++a){const o=e[a];o.id in n&&i.push(o)}return i}}function R1(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const dT=37297;let pT=0;function mT(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=a;o<r;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${n[o]}`)}return i.join(`
`)}const P1=new Wt;function gT(t){cn._getMatrix(P1,cn.workingColorSpace,t);const e=`mat3( ${P1.elements.map(n=>n.toFixed(4))} )`;switch(cn.getTransfer(t)){case D0:return[e,"LinearTransferOETF"];case mn:return[e,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function D1(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+mT(t.getShaderSource(e),s)}else return r}function xT(t,e){const n=gT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function bT(t,e){let n;switch(e){case yw:n="Linear";break;case ww:n="Reinhard";break;case Sw:n="Cineon";break;case Ew:n="ACESFilmic";break;case Tw:n="AgX";break;case Cw:n="Neutral";break;case Aw:n="Custom";break;default:Bt("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Yc=new ye;function vT(){cn.getLuminanceCoefficients(Yc);const t=Yc.x.toFixed(4),e=Yc.y.toFixed(4),n=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}function _T(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function yT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=t.getActiveAttrib(e,a),o=r.name;let s=1;r.type===t.FLOAT_MAT2&&(s=2),r.type===t.FLOAT_MAT3&&(s=3),r.type===t.FLOAT_MAT4&&(s=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:s}}return n}function fl(t){return t!==""}function I1(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function L1(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bf(t){return t.replace(wT,ET)}const ST=new Map;function ET(t,e){let n=qt[e];if(n===void 0){const i=ST.get(e);if(i!==void 0)n=qt[i],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bf(n)}const AT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F1(t){return t.replace(AT,TT)}function TT(t,e,n,i){let a="";for(let r=parseInt(e);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function z1(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Bx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===tw?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Na&&(e="SHADOWMAP_TYPE_VSM"),e}function RT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ls:case Fs:e="ENVMAP_TYPE_CUBE";break;case k0:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PT(t){let e="ENVMAP_MODE_REFLECTION";return t.envMap&&t.envMapMode===Fs&&(e="ENVMAP_MODE_REFRACTION"),e}function DT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Hx:e="ENVMAP_BLENDING_MULTIPLY";break;case Mw:e="ENVMAP_BLENDING_MIX";break;case _w:e="ENVMAP_BLENDING_ADD";break}return e}function IT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function LT(t,e,n,i){const a=t.getContext(),r=n.defines;let o=n.vertexShader,s=n.fragmentShader;const l=CT(n),c=RT(n),f=PT(n),h=DT(n),u=IT(n),d=MT(n),g=_T(r),x=a.createProgram();let m,p,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(fl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(fl).join(`
`),p.length>0&&(p+=`
`)):(m=[z1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),p=[z1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Rr?"#define TONE_MAPPING":"",n.toneMapping!==Rr?qt.tonemapping_pars_fragment:"",n.toneMapping!==Rr?bT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,xT("linearToOutputTexel",n.outputColorSpace),vT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fl).join(`
`)),o=Bf(o),o=I1(o,n),o=L1(o,n),s=Bf(s),s=I1(s,n),s=L1(s,n),o=F1(o),s=F1(s),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Km?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Km?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=b+m+o,E=b+p+s,M=R1(a,a.VERTEX_SHADER,_),v=R1(a,a.FRAGMENT_SHADER,E);a.attachShader(x,M),a.attachShader(x,v),n.index0AttributeName!==void 0?a.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function S(A){if(t.debug.checkShaderErrors){const C=a.getProgramInfoLog(x)||"",R=a.getShaderInfoLog(M)||"",P=a.getShaderInfoLog(v)||"",I=C.trim(),z=R.trim(),B=P.trim();let F=!0,O=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,x,M,v);else{const k=D1(a,M,"vertex"),G=D1(a,v,"fragment");Nn("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+k+`
`+G)}else I!==""?Bt("WebGLProgram: Program Info Log:",I):(z===""||B==="")&&(O=!1);O&&(A.diagnostics={runnable:F,programLog:I,vertexShader:{log:z,prefix:m},fragmentShader:{log:B,prefix:p}})}a.deleteShader(M),a.deleteShader(v),T=new d0(a,x),y=yT(a,x)}let T;this.getUniforms=function(){return T===void 0&&S(this),T};let y;this.getAttributes=function(){return y===void 0&&S(this),y};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(x,dT)),w},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=v,this}let FT=0;class zT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(a)===!1&&(o.add(a),a.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new UT(e),n.set(e,i)),i}}class UT{constructor(e){this.id=FT++,this.code=e,this.usedTimes=0}}function NT(t,e,n,i,a,r,o){const s=new e2,l=new zT,c=new Set,f=[],h=a.logarithmicDepthBuffer,u=a.vertexTextures;let d=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,w,A,C,R){const P=C.fog,I=R.geometry,z=y.isMeshStandardMaterial?C.environment:null,B=(y.isMeshStandardMaterial?n:e).get(y.envMap||z),F=B&&B.mapping===k0?B.image.height:null,O=g[y.type];y.precision!==null&&(d=a.getMaxPrecision(y.precision),d!==y.precision&&Bt("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const k=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,G=k!==void 0?k.length:0;let ee=0;I.morphAttributes.position!==void 0&&(ee=1),I.morphAttributes.normal!==void 0&&(ee=2),I.morphAttributes.color!==void 0&&(ee=3);let ne,J,he,H;if(O){const Le=ga[O];ne=Le.vertexShader,J=Le.fragmentShader}else ne=y.vertexShader,J=y.fragmentShader,l.update(y),he=l.getVertexShaderID(y),H=l.getFragmentShaderID(y);const N=t.getRenderTarget(),W=t.state.buffers.depth.getReversed(),fe=R.isInstancedMesh===!0,j=R.isBatchedMesh===!0,ue=!!y.map,de=!!y.matcap,ae=!!B,Ee=!!y.aoMap,L=!!y.lightMap,ve=!!y.bumpMap,me=!!y.normalMap,we=!!y.displacementMap,te=!!y.emissiveMap,qe=!!y.metalnessMap,Ue=!!y.roughnessMap,_e=y.anisotropy>0,U=y.clearcoat>0,D=y.dispersion>0,V=y.iridescence>0,pe=y.sheen>0,q=y.transmission>0,Z=_e&&!!y.anisotropyMap,be=U&&!!y.clearcoatMap,Me=U&&!!y.clearcoatNormalMap,Fe=U&&!!y.clearcoatRoughnessMap,Pe=V&&!!y.iridescenceMap,Ae=V&&!!y.iridescenceThicknessMap,De=pe&&!!y.sheenColorMap,Qe=pe&&!!y.sheenRoughnessMap,ot=!!y.specularMap,ke=!!y.specularColorMap,ct=!!y.specularIntensityMap,X=q&&!!y.transmissionMap,He=q&&!!y.thicknessMap,Se=!!y.gradientMap,Ie=!!y.alphaMap,Y=y.alphaTest>0,oe=!!y.alphaHash,Ce=!!y.extensions;let ce=Rr;y.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ce=t.toneMapping);const Te={shaderID:O,shaderType:y.type,shaderName:y.name,vertexShader:ne,fragmentShader:J,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:H,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:j,batchingColor:j&&R._colorsTexture!==null,instancing:fe,instancingColor:fe&&R.instanceColor!==null,instancingMorph:fe&&R.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:N===null?t.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:zs,alphaToCoverage:!!y.alphaToCoverage,map:ue,matcap:de,envMap:ae,envMapMode:ae&&B.mapping,envMapCubeUVHeight:F,aoMap:Ee,lightMap:L,bumpMap:ve,normalMap:me,displacementMap:u&&we,emissiveMap:te,normalMapObjectSpace:me&&y.normalMapType===Lw,normalMapTangentSpace:me&&y.normalMapType===Iw,metalnessMap:qe,roughnessMap:Ue,anisotropy:_e,anisotropyMap:Z,clearcoat:U,clearcoatMap:be,clearcoatNormalMap:Me,clearcoatRoughnessMap:Fe,dispersion:D,iridescence:V,iridescenceMap:Pe,iridescenceThicknessMap:Ae,sheen:pe,sheenColorMap:De,sheenRoughnessMap:Qe,specularMap:ot,specularColorMap:ke,specularIntensityMap:ct,transmission:q,transmissionMap:X,thicknessMap:He,gradientMap:Se,opaque:y.transparent===!1&&y.blending===wo&&y.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Y,alphaHash:oe,combine:y.combine,mapUv:ue&&x(y.map.channel),aoMapUv:Ee&&x(y.aoMap.channel),lightMapUv:L&&x(y.lightMap.channel),bumpMapUv:ve&&x(y.bumpMap.channel),normalMapUv:me&&x(y.normalMap.channel),displacementMapUv:we&&x(y.displacementMap.channel),emissiveMapUv:te&&x(y.emissiveMap.channel),metalnessMapUv:qe&&x(y.metalnessMap.channel),roughnessMapUv:Ue&&x(y.roughnessMap.channel),anisotropyMapUv:Z&&x(y.anisotropyMap.channel),clearcoatMapUv:be&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Me&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:De&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&x(y.sheenRoughnessMap.channel),specularMapUv:ot&&x(y.specularMap.channel),specularColorMapUv:ke&&x(y.specularColorMap.channel),specularIntensityMapUv:ct&&x(y.specularIntensityMap.channel),transmissionMapUv:X&&x(y.transmissionMap.channel),thicknessMapUv:He&&x(y.thicknessMap.channel),alphaMapUv:Ie&&x(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(me||_e),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!I.attributes.uv&&(ue||Ie),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:W,skinning:R.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&A.length>0,shadowMapType:t.shadowMap.type,toneMapping:ce,decodeVideoTexture:ue&&y.map.isVideoTexture===!0&&cn.getTransfer(y.map.colorSpace)===mn,decodeVideoTextureEmissive:te&&y.emissiveMap.isVideoTexture===!0&&cn.getTransfer(y.emissiveMap.colorSpace)===mn,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Wa,flipSided:y.side===Mi,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ce&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&y.extensions.multiDraw===!0||j)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function p(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)w.push(A),w.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(b(w,y),_(w,y),w.push(t.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function b(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function _(y,w){s.disableAll(),w.supportsVertexTextures&&s.enable(0),w.instancing&&s.enable(1),w.instancingColor&&s.enable(2),w.instancingMorph&&s.enable(3),w.matcap&&s.enable(4),w.envMap&&s.enable(5),w.normalMapObjectSpace&&s.enable(6),w.normalMapTangentSpace&&s.enable(7),w.clearcoat&&s.enable(8),w.iridescence&&s.enable(9),w.alphaTest&&s.enable(10),w.vertexColors&&s.enable(11),w.vertexAlphas&&s.enable(12),w.vertexUv1s&&s.enable(13),w.vertexUv2s&&s.enable(14),w.vertexUv3s&&s.enable(15),w.vertexTangents&&s.enable(16),w.anisotropy&&s.enable(17),w.alphaHash&&s.enable(18),w.batching&&s.enable(19),w.dispersion&&s.enable(20),w.batchingColor&&s.enable(21),w.gradientMap&&s.enable(22),y.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.reversedDepthBuffer&&s.enable(4),w.skinning&&s.enable(5),w.morphTargets&&s.enable(6),w.morphNormals&&s.enable(7),w.morphColors&&s.enable(8),w.premultipliedAlpha&&s.enable(9),w.shadowMapEnabled&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),w.decodeVideoTextureEmissive&&s.enable(20),w.alphaToCoverage&&s.enable(21),y.push(s.mask)}function E(y){const w=g[y.type];let A;if(w){const C=ga[w];A=cS.clone(C.uniforms)}else A=y.uniforms;return A}function M(y,w){let A;for(let C=0,R=f.length;C<R;C++){const P=f[C];if(P.cacheKey===w){A=P,++A.usedTimes;break}}return A===void 0&&(A=new LT(t,w,y,r),f.push(A)),A}function v(y){if(--y.usedTimes===0){const w=f.indexOf(y);f[w]=f[f.length-1],f.pop(),y.destroy()}}function S(y){l.remove(y)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:M,releaseProgram:v,releaseShaderCache:S,programs:f,dispose:T}}function OT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function i(o){t.delete(o)}function a(o,s,l){t.get(o)[s]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:r}}function $T(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function U1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function N1(){const t=[];let e=0;const n=[],i=[],a=[];function r(){e=0,n.length=0,i.length=0,a.length=0}function o(h,u,d,g,x,m){let p=t[e];return p===void 0?(p={id:h.id,object:h,geometry:u,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},t[e]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function s(h,u,d,g,x,m){const p=o(h,u,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?a.push(p):n.push(p)}function l(h,u,d,g,x,m){const p=o(h,u,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?a.unshift(p):n.unshift(p)}function c(h,u){n.length>1&&n.sort(h||$T),i.length>1&&i.sort(u||U1),a.length>1&&a.sort(u||U1)}function f(){for(let h=e,u=t.length;h<u;h++){const d=t[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:s,unshift:l,finish:f,sort:c}}function kT(){let t=new WeakMap;function e(i,a){const r=t.get(i);let o;return r===void 0?(o=new N1,t.set(i,[o])):a>=r.length?(o=new N1,r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function BT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ye,color:new tn};break;case"SpotLight":n={position:new ye,direction:new ye,color:new tn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ye,color:new tn,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ye,skyColor:new tn,groundColor:new tn};break;case"RectAreaLight":n={color:new tn,position:new ye,halfWidth:new ye,halfHeight:new ye};break}return t[e.id]=n,n}}}function HT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pn};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pn};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pn,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let WT=0;function GT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function VT(t){const e=new BT,n=HT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ye);const a=new ye,r=new qn,o=new qn;function s(c){let f=0,h=0,u=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,b=0,_=0,E=0,M=0,v=0,S=0;c.sort(GT);for(let y=0,w=c.length;y<w;y++){const A=c[y],C=A.color,R=A.intensity,P=A.distance,I=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)f+=C.r*R,h+=C.g*R,u+=C.b*R;else if(A.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(A.sh.coefficients[z],R);S++}else if(A.isDirectionalLight){const z=e.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const B=A.shadow,F=n.get(A);F.shadowIntensity=B.intensity,F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,i.directionalShadow[d]=F,i.directionalShadowMap[d]=I,i.directionalShadowMatrix[d]=A.shadow.matrix,b++}i.directional[d]=z,d++}else if(A.isSpotLight){const z=e.get(A);z.position.setFromMatrixPosition(A.matrixWorld),z.color.copy(C).multiplyScalar(R),z.distance=P,z.coneCos=Math.cos(A.angle),z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),z.decay=A.decay,i.spot[x]=z;const B=A.shadow;if(A.map&&(i.spotLightMap[M]=A.map,M++,B.updateMatrices(A),A.castShadow&&v++),i.spotLightMatrix[x]=B.matrix,A.castShadow){const F=n.get(A);F.shadowIntensity=B.intensity,F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,i.spotShadow[x]=F,i.spotShadowMap[x]=I,E++}x++}else if(A.isRectAreaLight){const z=e.get(A);z.color.copy(C).multiplyScalar(R),z.halfWidth.set(A.width*.5,0,0),z.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=z,m++}else if(A.isPointLight){const z=e.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),z.distance=A.distance,z.decay=A.decay,A.castShadow){const B=A.shadow,F=n.get(A);F.shadowIntensity=B.intensity,F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,F.shadowCameraNear=B.camera.near,F.shadowCameraFar=B.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=I,i.pointShadowMatrix[g]=A.shadow.matrix,_++}i.point[g]=z,g++}else if(A.isHemisphereLight){const z=e.get(A);z.skyColor.copy(A.color).multiplyScalar(R),z.groundColor.copy(A.groundColor).multiplyScalar(R),i.hemi[p]=z,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=tt.LTC_FLOAT_1,i.rectAreaLTC2=tt.LTC_FLOAT_2):(i.rectAreaLTC1=tt.LTC_HALF_1,i.rectAreaLTC2=tt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;const T=i.hash;(T.directionalLength!==d||T.pointLength!==g||T.spotLength!==x||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==b||T.numPointShadows!==_||T.numSpotShadows!==E||T.numSpotMaps!==M||T.numLightProbes!==S)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=E+M-v,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=v,i.numLightProbes=S,T.directionalLength=d,T.pointLength=g,T.spotLength=x,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=b,T.numPointShadows=_,T.numSpotShadows=E,T.numSpotMaps=M,T.numLightProbes=S,i.version=WT++)}function l(c,f){let h=0,u=0,d=0,g=0,x=0;const m=f.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const _=c[p];if(_.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),h++}else if(_.isSpotLight){const E=i.spot[d];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),d++}else if(_.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const E=i.point[u];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:s,setupView:l,state:i}}function O1(t){const e=new VT(t),n=[],i=[];function a(f){c.camera=f,n.length=0,i.length=0}function r(f){n.push(f)}function o(f){i.push(f)}function s(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:s,setupLightsView:l,pushLight:r,pushShadow:o}}function XT(t){let e=new WeakMap;function n(a,r=0){const o=e.get(a);let s;return o===void 0?(s=new O1(t),e.set(a,[s])):r>=o.length?(s=new O1(t),o.push(s)):s=o[r],s}function i(){e=new WeakMap}return{get:n,dispose:i}}const YT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jT(t,e,n){let i=new l2;const a=new pn,r=new pn,o=new On,s=new MS({depthPacking:Dw}),l=new _S,c={},f=n.maxTextureSize,h={[Lr]:Mi,[Mi]:Lr,[Wa]:Wa},u=new Sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pn},radius:{value:4}},vertexShader:YT,fragmentShader:qT}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new zr;g.setAttribute("position",new wa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Qa(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bx;let p=this.type;this.render=function(v,S,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const y=t.getRenderTarget(),w=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),C=t.state;C.setBlending(qa),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const R=p!==Na&&this.type===Na,P=p===Na&&this.type!==Na;for(let I=0,z=v.length;I<z;I++){const B=v[I],F=B.shadow;if(F===void 0){Bt("WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;a.copy(F.mapSize);const O=F.getFrameExtents();if(a.multiply(O),r.copy(F.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(r.x=Math.floor(f/O.x),a.x=r.x*O.x,F.mapSize.x=r.x),a.y>f&&(r.y=Math.floor(f/O.y),a.y=r.y*O.y,F.mapSize.y=r.y)),F.map===null||R===!0||P===!0){const G=this.type!==Na?{minFilter:Di,magFilter:Di}:{};F.map!==null&&F.map.dispose(),F.map=new Po(a.x,a.y,G),F.map.texture.name=B.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const k=F.getViewportCount();for(let G=0;G<k;G++){const ee=F.getViewport(G);o.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),C.viewport(o),F.updateMatrices(B,G),i=F.getFrustum(),E(S,T,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===Na&&b(F,T),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(y,w,A)};function b(v,S){const T=e.update(x);u.defines.VSM_SAMPLES!==v.blurSamples&&(u.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Po(a.x,a.y)),u.uniforms.shadow_pass.value=v.map.texture,u.uniforms.resolution.value=v.mapSize,u.uniforms.radius.value=v.radius,t.setRenderTarget(v.mapPass),t.clear(),t.renderBufferDirect(S,null,T,u,x,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,t.setRenderTarget(v.map),t.clear(),t.renderBufferDirect(S,null,T,d,x,null)}function _(v,S,T,y){let w=null;const A=T.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(A!==void 0)w=A;else if(w=T.isPointLight===!0?l:s,t.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){const C=w.uuid,R=S.uuid;let P=c[C];P===void 0&&(P={},c[C]=P);let I=P[R];I===void 0&&(I=w.clone(),P[R]=I,S.addEventListener("dispose",M)),w=I}if(w.visible=S.visible,w.wireframe=S.wireframe,y===Na?w.side=S.shadowSide!==null?S.shadowSide:S.side:w.side=S.shadowSide!==null?S.shadowSide:h[S.side],w.alphaMap=S.alphaMap,w.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,w.map=S.map,w.clipShadows=S.clipShadows,w.clippingPlanes=S.clippingPlanes,w.clipIntersection=S.clipIntersection,w.displacementMap=S.displacementMap,w.displacementScale=S.displacementScale,w.displacementBias=S.displacementBias,w.wireframeLinewidth=S.wireframeLinewidth,w.linewidth=S.linewidth,T.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const C=t.properties.get(w);C.light=T}return w}function E(v,S,T,y,w){if(v.visible===!1)return;if(v.layers.test(S.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&w===Na)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,v.matrixWorld);const R=e.update(v),P=v.material;if(Array.isArray(P)){const I=R.groups;for(let z=0,B=I.length;z<B;z++){const F=I[z],O=P[F.materialIndex];if(O&&O.visible){const k=_(v,O,y,w);v.onBeforeShadow(t,v,S,T,R,k,F),t.renderBufferDirect(T,null,R,k,v,F),v.onAfterShadow(t,v,S,T,R,k,F)}}}else if(P.visible){const I=_(v,P,y,w);v.onBeforeShadow(t,v,S,T,R,I,null),t.renderBufferDirect(T,null,R,I,v,null),v.onAfterShadow(t,v,S,T,R,I,null)}}const C=v.children;for(let R=0,P=C.length;R<P;R++)E(C[R],S,T,y,w)}function M(v){v.target.removeEventListener("dispose",M);for(const T in c){const y=c[T],w=v.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}const KT={[ef]:tf,[nf]:of,[af]:sf,[Is]:rf,[tf]:ef,[of]:nf,[sf]:af,[rf]:Is};function ZT(t,e){function n(){let X=!1;const He=new On;let Se=null;const Ie=new On(0,0,0,0);return{setMask:function(Y){Se!==Y&&!X&&(t.colorMask(Y,Y,Y,Y),Se=Y)},setLocked:function(Y){X=Y},setClear:function(Y,oe,Ce,ce,Te){Te===!0&&(Y*=ce,oe*=ce,Ce*=ce),He.set(Y,oe,Ce,ce),Ie.equals(He)===!1&&(t.clearColor(Y,oe,Ce,ce),Ie.copy(He))},reset:function(){X=!1,Se=null,Ie.set(-1,0,0,0)}}}function i(){let X=!1,He=!1,Se=null,Ie=null,Y=null;return{setReversed:function(oe){if(He!==oe){const Ce=e.get("EXT_clip_control");oe?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),He=oe;const ce=Y;Y=null,this.setClear(ce)}},getReversed:function(){return He},setTest:function(oe){oe?N(t.DEPTH_TEST):W(t.DEPTH_TEST)},setMask:function(oe){Se!==oe&&!X&&(t.depthMask(oe),Se=oe)},setFunc:function(oe){if(He&&(oe=KT[oe]),Ie!==oe){switch(oe){case ef:t.depthFunc(t.NEVER);break;case tf:t.depthFunc(t.ALWAYS);break;case nf:t.depthFunc(t.LESS);break;case Is:t.depthFunc(t.LEQUAL);break;case af:t.depthFunc(t.EQUAL);break;case rf:t.depthFunc(t.GEQUAL);break;case of:t.depthFunc(t.GREATER);break;case sf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ie=oe}},setLocked:function(oe){X=oe},setClear:function(oe){Y!==oe&&(He&&(oe=1-oe),t.clearDepth(oe),Y=oe)},reset:function(){X=!1,Se=null,Ie=null,Y=null,He=!1}}}function a(){let X=!1,He=null,Se=null,Ie=null,Y=null,oe=null,Ce=null,ce=null,Te=null;return{setTest:function(Le){X||(Le?N(t.STENCIL_TEST):W(t.STENCIL_TEST))},setMask:function(Le){He!==Le&&!X&&(t.stencilMask(Le),He=Le)},setFunc:function(Le,$e,We){(Se!==Le||Ie!==$e||Y!==We)&&(t.stencilFunc(Le,$e,We),Se=Le,Ie=$e,Y=We)},setOp:function(Le,$e,We){(oe!==Le||Ce!==$e||ce!==We)&&(t.stencilOp(Le,$e,We),oe=Le,Ce=$e,ce=We)},setLocked:function(Le){X=Le},setClear:function(Le){Te!==Le&&(t.clearStencil(Le),Te=Le)},reset:function(){X=!1,He=null,Se=null,Ie=null,Y=null,oe=null,Ce=null,ce=null,Te=null}}}const r=new n,o=new i,s=new a,l=new WeakMap,c=new WeakMap;let f={},h={},u=new WeakMap,d=[],g=null,x=!1,m=null,p=null,b=null,_=null,E=null,M=null,v=null,S=new tn(0,0,0),T=0,y=!1,w=null,A=null,C=null,R=null,P=null;const I=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,B=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(F)[1]),z=B>=1):F.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),z=B>=2);let O=null,k={};const G=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),ne=new On().fromArray(G),J=new On().fromArray(ee);function he(X,He,Se,Ie){const Y=new Uint8Array(4),oe=t.createTexture();t.bindTexture(X,oe),t.texParameteri(X,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(X,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<Se;Ce++)X===t.TEXTURE_3D||X===t.TEXTURE_2D_ARRAY?t.texImage3D(He,0,t.RGBA,1,1,Ie,0,t.RGBA,t.UNSIGNED_BYTE,Y):t.texImage2D(He+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Y);return oe}const H={};H[t.TEXTURE_2D]=he(t.TEXTURE_2D,t.TEXTURE_2D,1),H[t.TEXTURE_CUBE_MAP]=he(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[t.TEXTURE_2D_ARRAY]=he(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),H[t.TEXTURE_3D]=he(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),N(t.DEPTH_TEST),o.setFunc(Is),ve(!1),me(Gm),N(t.CULL_FACE),Ee(qa);function N(X){f[X]!==!0&&(t.enable(X),f[X]=!0)}function W(X){f[X]!==!1&&(t.disable(X),f[X]=!1)}function fe(X,He){return h[X]!==He?(t.bindFramebuffer(X,He),h[X]=He,X===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=He),X===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=He),!0):!1}function j(X,He){let Se=d,Ie=!1;if(X){Se=u.get(He),Se===void 0&&(Se=[],u.set(He,Se));const Y=X.textures;if(Se.length!==Y.length||Se[0]!==t.COLOR_ATTACHMENT0){for(let oe=0,Ce=Y.length;oe<Ce;oe++)Se[oe]=t.COLOR_ATTACHMENT0+oe;Se.length=Y.length,Ie=!0}}else Se[0]!==t.BACK&&(Se[0]=t.BACK,Ie=!0);Ie&&t.drawBuffers(Se)}function ue(X){return g!==X?(t.useProgram(X),g=X,!0):!1}const de={[co]:t.FUNC_ADD,[iw]:t.FUNC_SUBTRACT,[aw]:t.FUNC_REVERSE_SUBTRACT};de[rw]=t.MIN,de[ow]=t.MAX;const ae={[sw]:t.ZERO,[lw]:t.ONE,[cw]:t.SRC_COLOR,[Jh]:t.SRC_ALPHA,[mw]:t.SRC_ALPHA_SATURATE,[dw]:t.DST_COLOR,[hw]:t.DST_ALPHA,[uw]:t.ONE_MINUS_SRC_COLOR,[Qh]:t.ONE_MINUS_SRC_ALPHA,[pw]:t.ONE_MINUS_DST_COLOR,[fw]:t.ONE_MINUS_DST_ALPHA,[gw]:t.CONSTANT_COLOR,[xw]:t.ONE_MINUS_CONSTANT_COLOR,[bw]:t.CONSTANT_ALPHA,[vw]:t.ONE_MINUS_CONSTANT_ALPHA};function Ee(X,He,Se,Ie,Y,oe,Ce,ce,Te,Le){if(X===qa){x===!0&&(W(t.BLEND),x=!1);return}if(x===!1&&(N(t.BLEND),x=!0),X!==nw){if(X!==m||Le!==y){if((p!==co||E!==co)&&(t.blendEquation(t.FUNC_ADD),p=co,E=co),Le)switch(X){case wo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vm:t.blendFunc(t.ONE,t.ONE);break;case Xm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ym:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Nn("WebGLState: Invalid blending: ",X);break}else switch(X){case wo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Xm:Nn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ym:Nn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nn("WebGLState: Invalid blending: ",X);break}b=null,_=null,M=null,v=null,S.set(0,0,0),T=0,m=X,y=Le}return}Y=Y||He,oe=oe||Se,Ce=Ce||Ie,(He!==p||Y!==E)&&(t.blendEquationSeparate(de[He],de[Y]),p=He,E=Y),(Se!==b||Ie!==_||oe!==M||Ce!==v)&&(t.blendFuncSeparate(ae[Se],ae[Ie],ae[oe],ae[Ce]),b=Se,_=Ie,M=oe,v=Ce),(ce.equals(S)===!1||Te!==T)&&(t.blendColor(ce.r,ce.g,ce.b,Te),S.copy(ce),T=Te),m=X,y=!1}function L(X,He){X.side===Wa?W(t.CULL_FACE):N(t.CULL_FACE);let Se=X.side===Mi;He&&(Se=!Se),ve(Se),X.blending===wo&&X.transparent===!1?Ee(qa):Ee(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);const Ie=X.stencilWrite;s.setTest(Ie),Ie&&(s.setMask(X.stencilWriteMask),s.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),s.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),te(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?N(t.SAMPLE_ALPHA_TO_COVERAGE):W(t.SAMPLE_ALPHA_TO_COVERAGE)}function ve(X){w!==X&&(X?t.frontFace(t.CW):t.frontFace(t.CCW),w=X)}function me(X){X!==Qy?(N(t.CULL_FACE),X!==A&&(X===Gm?t.cullFace(t.BACK):X===ew?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):W(t.CULL_FACE),A=X}function we(X){X!==C&&(z&&t.lineWidth(X),C=X)}function te(X,He,Se){X?(N(t.POLYGON_OFFSET_FILL),(R!==He||P!==Se)&&(t.polygonOffset(He,Se),R=He,P=Se)):W(t.POLYGON_OFFSET_FILL)}function qe(X){X?N(t.SCISSOR_TEST):W(t.SCISSOR_TEST)}function Ue(X){X===void 0&&(X=t.TEXTURE0+I-1),O!==X&&(t.activeTexture(X),O=X)}function _e(X,He,Se){Se===void 0&&(O===null?Se=t.TEXTURE0+I-1:Se=O);let Ie=k[Se];Ie===void 0&&(Ie={type:void 0,texture:void 0},k[Se]=Ie),(Ie.type!==X||Ie.texture!==He)&&(O!==Se&&(t.activeTexture(Se),O=Se),t.bindTexture(X,He||H[X]),Ie.type=X,Ie.texture=He)}function U(){const X=k[O];X!==void 0&&X.type!==void 0&&(t.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function D(){try{t.compressedTexImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function V(){try{t.compressedTexImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function pe(){try{t.texSubImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function q(){try{t.texSubImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function be(){try{t.compressedTexSubImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Me(){try{t.texStorage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Fe(){try{t.texStorage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Pe(){try{t.texImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Ae(){try{t.texImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function De(X){ne.equals(X)===!1&&(t.scissor(X.x,X.y,X.z,X.w),ne.copy(X))}function Qe(X){J.equals(X)===!1&&(t.viewport(X.x,X.y,X.z,X.w),J.copy(X))}function ot(X,He){let Se=c.get(He);Se===void 0&&(Se=new WeakMap,c.set(He,Se));let Ie=Se.get(X);Ie===void 0&&(Ie=t.getUniformBlockIndex(He,X.name),Se.set(X,Ie))}function ke(X,He){const Ie=c.get(He).get(X);l.get(He)!==Ie&&(t.uniformBlockBinding(He,Ie,X.__bindingPointIndex),l.set(He,Ie))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},O=null,k={},h={},u=new WeakMap,d=[],g=null,x=!1,m=null,p=null,b=null,_=null,E=null,M=null,v=null,S=new tn(0,0,0),T=0,y=!1,w=null,A=null,C=null,R=null,P=null,ne.set(0,0,t.canvas.width,t.canvas.height),J.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:N,disable:W,bindFramebuffer:fe,drawBuffers:j,useProgram:ue,setBlending:Ee,setMaterial:L,setFlipSided:ve,setCullFace:me,setLineWidth:we,setPolygonOffset:te,setScissorTest:qe,activeTexture:Ue,bindTexture:_e,unbindTexture:U,compressedTexImage2D:D,compressedTexImage3D:V,texImage2D:Pe,texImage3D:Ae,updateUBOMapping:ot,uniformBlockBinding:ke,texStorage2D:Me,texStorage3D:Fe,texSubImage2D:pe,texSubImage3D:q,compressedTexSubImage2D:Z,compressedTexSubImage3D:be,scissor:De,viewport:Qe,reset:ct}}function JT(t,e,n,i,a,r,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pn,f=new WeakMap;let h;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,D){return d?new OffscreenCanvas(U,D):L0("canvas")}function x(U,D,V){let pe=1;const q=_e(U);if((q.width>V||q.height>V)&&(pe=V/Math.max(q.width,q.height)),pe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Z=Math.floor(pe*q.width),be=Math.floor(pe*q.height);h===void 0&&(h=g(Z,be));const Me=D?g(Z,be):h;return Me.width=Z,Me.height=be,Me.getContext("2d").drawImage(U,0,0,Z,be),Bt("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+Z+"x"+be+")."),Me}else return"data"in U&&Bt("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),U;return U}function m(U){return U.generateMipmaps}function p(U){t.generateMipmap(U)}function b(U){return U.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?t.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(U,D,V,pe,q=!1){if(U!==null){if(t[U]!==void 0)return t[U];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Z=D;if(D===t.RED&&(V===t.FLOAT&&(Z=t.R32F),V===t.HALF_FLOAT&&(Z=t.R16F),V===t.UNSIGNED_BYTE&&(Z=t.R8)),D===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(Z=t.R8UI),V===t.UNSIGNED_SHORT&&(Z=t.R16UI),V===t.UNSIGNED_INT&&(Z=t.R32UI),V===t.BYTE&&(Z=t.R8I),V===t.SHORT&&(Z=t.R16I),V===t.INT&&(Z=t.R32I)),D===t.RG&&(V===t.FLOAT&&(Z=t.RG32F),V===t.HALF_FLOAT&&(Z=t.RG16F),V===t.UNSIGNED_BYTE&&(Z=t.RG8)),D===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(Z=t.RG8UI),V===t.UNSIGNED_SHORT&&(Z=t.RG16UI),V===t.UNSIGNED_INT&&(Z=t.RG32UI),V===t.BYTE&&(Z=t.RG8I),V===t.SHORT&&(Z=t.RG16I),V===t.INT&&(Z=t.RG32I)),D===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),V===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),V===t.UNSIGNED_INT&&(Z=t.RGB32UI),V===t.BYTE&&(Z=t.RGB8I),V===t.SHORT&&(Z=t.RGB16I),V===t.INT&&(Z=t.RGB32I)),D===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),V===t.UNSIGNED_INT&&(Z=t.RGBA32UI),V===t.BYTE&&(Z=t.RGBA8I),V===t.SHORT&&(Z=t.RGBA16I),V===t.INT&&(Z=t.RGBA32I)),D===t.RGB&&(V===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),V===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),D===t.RGBA){const be=q?D0:cn.getTransfer(pe);V===t.FLOAT&&(Z=t.RGBA32F),V===t.HALF_FLOAT&&(Z=t.RGBA16F),V===t.UNSIGNED_BYTE&&(Z=be===mn?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function E(U,D){let V;return U?D===null||D===Ro||D===Fl?V=t.DEPTH24_STENCIL8:D===Xa?V=t.DEPTH32F_STENCIL8:D===Ll&&(V=t.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===Ro||D===Fl?V=t.DEPTH_COMPONENT24:D===Xa?V=t.DEPTH_COMPONENT32F:D===Ll&&(V=t.DEPTH_COMPONENT16),V}function M(U,D){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==Di&&U.minFilter!==Wi?Math.log2(Math.max(D.width,D.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?D.mipmaps.length:1}function v(U){const D=U.target;D.removeEventListener("dispose",v),T(D),D.isVideoTexture&&f.delete(D)}function S(U){const D=U.target;D.removeEventListener("dispose",S),w(D)}function T(U){const D=i.get(U);if(D.__webglInit===void 0)return;const V=U.source,pe=u.get(V);if(pe){const q=pe[D.__cacheKey];q.usedTimes--,q.usedTimes===0&&y(U),Object.keys(pe).length===0&&u.delete(V)}i.remove(U)}function y(U){const D=i.get(U);t.deleteTexture(D.__webglTexture);const V=U.source,pe=u.get(V);delete pe[D.__cacheKey],o.memory.textures--}function w(U){const D=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(D.__webglFramebuffer[pe]))for(let q=0;q<D.__webglFramebuffer[pe].length;q++)t.deleteFramebuffer(D.__webglFramebuffer[pe][q]);else t.deleteFramebuffer(D.__webglFramebuffer[pe]);D.__webglDepthbuffer&&t.deleteRenderbuffer(D.__webglDepthbuffer[pe])}else{if(Array.isArray(D.__webglFramebuffer))for(let pe=0;pe<D.__webglFramebuffer.length;pe++)t.deleteFramebuffer(D.__webglFramebuffer[pe]);else t.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&t.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&t.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let pe=0;pe<D.__webglColorRenderbuffer.length;pe++)D.__webglColorRenderbuffer[pe]&&t.deleteRenderbuffer(D.__webglColorRenderbuffer[pe]);D.__webglDepthRenderbuffer&&t.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const V=U.textures;for(let pe=0,q=V.length;pe<q;pe++){const Z=i.get(V[pe]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(V[pe])}i.remove(U)}let A=0;function C(){A=0}function R(){const U=A;return U>=a.maxTextures&&Bt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+a.maxTextures),A+=1,U}function P(U){const D=[];return D.push(U.wrapS),D.push(U.wrapT),D.push(U.wrapR||0),D.push(U.magFilter),D.push(U.minFilter),D.push(U.anisotropy),D.push(U.internalFormat),D.push(U.format),D.push(U.type),D.push(U.generateMipmaps),D.push(U.premultiplyAlpha),D.push(U.flipY),D.push(U.unpackAlignment),D.push(U.colorSpace),D.join()}function I(U,D){const V=i.get(U);if(U.isVideoTexture&&qe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&V.__version!==U.version){const pe=U.image;if(pe===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{H(V,U,D);return}}else U.isExternalTexture&&(V.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+D)}function z(U,D){const V=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&V.__version!==U.version){H(V,U,D);return}else U.isExternalTexture&&(V.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+D)}function B(U,D){const V=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&V.__version!==U.version){H(V,U,D);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+D)}function F(U,D){const V=i.get(U);if(U.version>0&&V.__version!==U.version){N(V,U,D);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+D)}const O={[uf]:t.REPEAT,[Va]:t.CLAMP_TO_EDGE,[hf]:t.MIRRORED_REPEAT},k={[Di]:t.NEAREST,[Rw]:t.NEAREST_MIPMAP_NEAREST,[Tc]:t.NEAREST_MIPMAP_LINEAR,[Wi]:t.LINEAR,[zu]:t.LINEAR_MIPMAP_NEAREST,[go]:t.LINEAR_MIPMAP_LINEAR},G={[Fw]:t.NEVER,[kw]:t.ALWAYS,[zw]:t.LESS,[Zx]:t.LEQUAL,[Uw]:t.EQUAL,[$w]:t.GEQUAL,[Nw]:t.GREATER,[Ow]:t.NOTEQUAL};function ee(U,D){if(D.type===Xa&&e.has("OES_texture_float_linear")===!1&&(D.magFilter===Wi||D.magFilter===zu||D.magFilter===Tc||D.magFilter===go||D.minFilter===Wi||D.minFilter===zu||D.minFilter===Tc||D.minFilter===go)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(U,t.TEXTURE_WRAP_S,O[D.wrapS]),t.texParameteri(U,t.TEXTURE_WRAP_T,O[D.wrapT]),(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)&&t.texParameteri(U,t.TEXTURE_WRAP_R,O[D.wrapR]),t.texParameteri(U,t.TEXTURE_MAG_FILTER,k[D.magFilter]),t.texParameteri(U,t.TEXTURE_MIN_FILTER,k[D.minFilter]),D.compareFunction&&(t.texParameteri(U,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(U,t.TEXTURE_COMPARE_FUNC,G[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===Di||D.minFilter!==Tc&&D.minFilter!==go||D.type===Xa&&e.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||i.get(D).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(U,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,a.getMaxAnisotropy())),i.get(D).__currentAnisotropy=D.anisotropy}}}function ne(U,D){let V=!1;U.__webglInit===void 0&&(U.__webglInit=!0,D.addEventListener("dispose",v));const pe=D.source;let q=u.get(pe);q===void 0&&(q={},u.set(pe,q));const Z=P(D);if(Z!==U.__cacheKey){q[Z]===void 0&&(q[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),q[Z].usedTimes++;const be=q[U.__cacheKey];be!==void 0&&(q[U.__cacheKey].usedTimes--,be.usedTimes===0&&y(D)),U.__cacheKey=Z,U.__webglTexture=q[Z].texture}return V}function J(U,D,V){return Math.floor(Math.floor(U/V)/D)}function he(U,D,V,pe){const Z=U.updateRanges;if(Z.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,D.width,D.height,V,pe,D.data);else{Z.sort((Ae,De)=>Ae.start-De.start);let be=0;for(let Ae=1;Ae<Z.length;Ae++){const De=Z[be],Qe=Z[Ae],ot=De.start+De.count,ke=J(Qe.start,D.width,4),ct=J(De.start,D.width,4);Qe.start<=ot+1&&ke===ct&&J(Qe.start+Qe.count-1,D.width,4)===ke?De.count=Math.max(De.count,Qe.start+Qe.count-De.start):(++be,Z[be]=Qe)}Z.length=be+1;const Me=t.getParameter(t.UNPACK_ROW_LENGTH),Fe=t.getParameter(t.UNPACK_SKIP_PIXELS),Pe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,D.width);for(let Ae=0,De=Z.length;Ae<De;Ae++){const Qe=Z[Ae],ot=Math.floor(Qe.start/4),ke=Math.ceil(Qe.count/4),ct=ot%D.width,X=Math.floor(ot/D.width),He=ke,Se=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(t.UNPACK_SKIP_ROWS,X),n.texSubImage2D(t.TEXTURE_2D,0,ct,X,He,Se,V,pe,D.data)}U.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,Me),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(t.UNPACK_SKIP_ROWS,Pe)}}function H(U,D,V){let pe=t.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(pe=t.TEXTURE_2D_ARRAY),D.isData3DTexture&&(pe=t.TEXTURE_3D);const q=ne(U,D),Z=D.source;n.bindTexture(pe,U.__webglTexture,t.TEXTURE0+V);const be=i.get(Z);if(Z.version!==be.__version||q===!0){n.activeTexture(t.TEXTURE0+V);const Me=cn.getPrimaries(cn.workingColorSpace),Fe=D.colorSpace===xr?null:cn.getPrimaries(D.colorSpace),Pe=D.colorSpace===xr||Me===Fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,D.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,D.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let Ae=x(D.image,!1,a.maxTextureSize);Ae=Ue(D,Ae);const De=r.convert(D.format,D.colorSpace),Qe=r.convert(D.type);let ot=_(D.internalFormat,De,Qe,D.colorSpace,D.isVideoTexture);ee(pe,D);let ke;const ct=D.mipmaps,X=D.isVideoTexture!==!0,He=be.__version===void 0||q===!0,Se=Z.dataReady,Ie=M(D,Ae);if(D.isDepthTexture)ot=E(D.format===Ul,D.type),He&&(X?n.texStorage2D(t.TEXTURE_2D,1,ot,Ae.width,Ae.height):n.texImage2D(t.TEXTURE_2D,0,ot,Ae.width,Ae.height,0,De,Qe,null));else if(D.isDataTexture)if(ct.length>0){X&&He&&n.texStorage2D(t.TEXTURE_2D,Ie,ot,ct[0].width,ct[0].height);for(let Y=0,oe=ct.length;Y<oe;Y++)ke=ct[Y],X?Se&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ke.width,ke.height,De,Qe,ke.data):n.texImage2D(t.TEXTURE_2D,Y,ot,ke.width,ke.height,0,De,Qe,ke.data);D.generateMipmaps=!1}else X?(He&&n.texStorage2D(t.TEXTURE_2D,Ie,ot,Ae.width,Ae.height),Se&&he(D,Ae,De,Qe)):n.texImage2D(t.TEXTURE_2D,0,ot,Ae.width,Ae.height,0,De,Qe,Ae.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){X&&He&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,ot,ct[0].width,ct[0].height,Ae.depth);for(let Y=0,oe=ct.length;Y<oe;Y++)if(ke=ct[Y],D.format!==aa)if(De!==null)if(X){if(Se)if(D.layerUpdates.size>0){const Ce=m1(ke.width,ke.height,D.format,D.type);for(const ce of D.layerUpdates){const Te=ke.data.subarray(ce*Ce/ke.data.BYTES_PER_ELEMENT,(ce+1)*Ce/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,ce,ke.width,ke.height,1,De,Te)}D.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ke.width,ke.height,Ae.depth,De,ke.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,ot,ke.width,ke.height,Ae.depth,0,ke.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Se&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ke.width,ke.height,Ae.depth,De,Qe,ke.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,ot,ke.width,ke.height,Ae.depth,0,De,Qe,ke.data)}else{X&&He&&n.texStorage2D(t.TEXTURE_2D,Ie,ot,ct[0].width,ct[0].height);for(let Y=0,oe=ct.length;Y<oe;Y++)ke=ct[Y],D.format!==aa?De!==null?X?Se&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,ke.width,ke.height,De,ke.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,ot,ke.width,ke.height,0,ke.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Se&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ke.width,ke.height,De,Qe,ke.data):n.texImage2D(t.TEXTURE_2D,Y,ot,ke.width,ke.height,0,De,Qe,ke.data)}else if(D.isDataArrayTexture)if(X){if(He&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,ot,Ae.width,Ae.height,Ae.depth),Se)if(D.layerUpdates.size>0){const Y=m1(Ae.width,Ae.height,D.format,D.type);for(const oe of D.layerUpdates){const Ce=Ae.data.subarray(oe*Y/Ae.data.BYTES_PER_ELEMENT,(oe+1)*Y/Ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,Ae.width,Ae.height,1,De,Qe,Ce)}D.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,De,Qe,Ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ot,Ae.width,Ae.height,Ae.depth,0,De,Qe,Ae.data);else if(D.isData3DTexture)X?(He&&n.texStorage3D(t.TEXTURE_3D,Ie,ot,Ae.width,Ae.height,Ae.depth),Se&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,De,Qe,Ae.data)):n.texImage3D(t.TEXTURE_3D,0,ot,Ae.width,Ae.height,Ae.depth,0,De,Qe,Ae.data);else if(D.isFramebufferTexture){if(He)if(X)n.texStorage2D(t.TEXTURE_2D,Ie,ot,Ae.width,Ae.height);else{let Y=Ae.width,oe=Ae.height;for(let Ce=0;Ce<Ie;Ce++)n.texImage2D(t.TEXTURE_2D,Ce,ot,Y,oe,0,De,Qe,null),Y>>=1,oe>>=1}}else if(ct.length>0){if(X&&He){const Y=_e(ct[0]);n.texStorage2D(t.TEXTURE_2D,Ie,ot,Y.width,Y.height)}for(let Y=0,oe=ct.length;Y<oe;Y++)ke=ct[Y],X?Se&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,De,Qe,ke):n.texImage2D(t.TEXTURE_2D,Y,ot,De,Qe,ke);D.generateMipmaps=!1}else if(X){if(He){const Y=_e(Ae);n.texStorage2D(t.TEXTURE_2D,Ie,ot,Y.width,Y.height)}Se&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,De,Qe,Ae)}else n.texImage2D(t.TEXTURE_2D,0,ot,De,Qe,Ae);m(D)&&p(pe),be.__version=Z.version,D.onUpdate&&D.onUpdate(D)}U.__version=D.version}function N(U,D,V){if(D.image.length!==6)return;const pe=ne(U,D),q=D.source;n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+V);const Z=i.get(q);if(q.version!==Z.__version||pe===!0){n.activeTexture(t.TEXTURE0+V);const be=cn.getPrimaries(cn.workingColorSpace),Me=D.colorSpace===xr?null:cn.getPrimaries(D.colorSpace),Fe=D.colorSpace===xr||be===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,D.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,D.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Pe=D.isCompressedTexture||D.image[0].isCompressedTexture,Ae=D.image[0]&&D.image[0].isDataTexture,De=[];for(let oe=0;oe<6;oe++)!Pe&&!Ae?De[oe]=x(D.image[oe],!0,a.maxCubemapSize):De[oe]=Ae?D.image[oe].image:D.image[oe],De[oe]=Ue(D,De[oe]);const Qe=De[0],ot=r.convert(D.format,D.colorSpace),ke=r.convert(D.type),ct=_(D.internalFormat,ot,ke,D.colorSpace),X=D.isVideoTexture!==!0,He=Z.__version===void 0||pe===!0,Se=q.dataReady;let Ie=M(D,Qe);ee(t.TEXTURE_CUBE_MAP,D);let Y;if(Pe){X&&He&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,ct,Qe.width,Qe.height);for(let oe=0;oe<6;oe++){Y=De[oe].mipmaps;for(let Ce=0;Ce<Y.length;Ce++){const ce=Y[Ce];D.format!==aa?ot!==null?X?Se&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce,0,0,ce.width,ce.height,ot,ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce,ct,ce.width,ce.height,0,ce.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce,0,0,ce.width,ce.height,ot,ke,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce,ct,ce.width,ce.height,0,ot,ke,ce.data)}}}else{if(Y=D.mipmaps,X&&He){Y.length>0&&Ie++;const oe=_e(De[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,ct,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Ae){X?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,De[oe].width,De[oe].height,ot,ke,De[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ct,De[oe].width,De[oe].height,0,ot,ke,De[oe].data);for(let Ce=0;Ce<Y.length;Ce++){const Te=Y[Ce].image[oe].image;X?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce+1,0,0,Te.width,Te.height,ot,ke,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce+1,ct,Te.width,Te.height,0,ot,ke,Te.data)}}else{X?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ot,ke,De[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ct,ot,ke,De[oe]);for(let Ce=0;Ce<Y.length;Ce++){const ce=Y[Ce];X?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce+1,0,0,ot,ke,ce.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce+1,ct,ot,ke,ce.image[oe])}}}m(D)&&p(t.TEXTURE_CUBE_MAP),Z.__version=q.version,D.onUpdate&&D.onUpdate(D)}U.__version=D.version}function W(U,D,V,pe,q,Z){const be=r.convert(V.format,V.colorSpace),Me=r.convert(V.type),Fe=_(V.internalFormat,be,Me,V.colorSpace),Pe=i.get(D),Ae=i.get(V);if(Ae.__renderTarget=D,!Pe.__hasExternalTextures){const De=Math.max(1,D.width>>Z),Qe=Math.max(1,D.height>>Z);q===t.TEXTURE_3D||q===t.TEXTURE_2D_ARRAY?n.texImage3D(q,Z,Fe,De,Qe,D.depth,0,be,Me,null):n.texImage2D(q,Z,Fe,De,Qe,0,be,Me,null)}n.bindFramebuffer(t.FRAMEBUFFER,U),te(D)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,pe,q,Ae.__webglTexture,0,we(D)):(q===t.TEXTURE_2D||q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,pe,q,Ae.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(U,D,V){if(t.bindRenderbuffer(t.RENDERBUFFER,U),D.depthBuffer){const pe=D.depthTexture,q=pe&&pe.isDepthTexture?pe.type:null,Z=E(D.stencilBuffer,q),be=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=we(D);te(D)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,Z,D.width,D.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,Z,D.width,D.height):t.renderbufferStorage(t.RENDERBUFFER,Z,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,U)}else{const pe=D.textures;for(let q=0;q<pe.length;q++){const Z=pe[q],be=r.convert(Z.format,Z.colorSpace),Me=r.convert(Z.type),Fe=_(Z.internalFormat,be,Me,Z.colorSpace),Pe=we(D);V&&te(D)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,Fe,D.width,D.height):te(D)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe,Fe,D.width,D.height):t.renderbufferStorage(t.RENDERBUFFER,Fe,D.width,D.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function j(U,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,U),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=i.get(D.depthTexture);pe.__renderTarget=D,(!pe.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),I(D.depthTexture,0);const q=pe.__webglTexture,Z=we(D);if(D.depthTexture.format===zl)te(D)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(D.depthTexture.format===Ul)te(D)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function ue(U){const D=i.get(U),V=U.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==U.depthTexture){const pe=U.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),pe){const q=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,pe.removeEventListener("dispose",q)};pe.addEventListener("dispose",q),D.__depthDisposeCallback=q}D.__boundDepthTexture=pe}if(U.depthTexture&&!D.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const pe=U.texture.mipmaps;pe&&pe.length>0?j(D.__webglFramebuffer[0],U):j(D.__webglFramebuffer,U)}else if(V){D.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(t.FRAMEBUFFER,D.__webglFramebuffer[pe]),D.__webglDepthbuffer[pe]===void 0)D.__webglDepthbuffer[pe]=t.createRenderbuffer(),fe(D.__webglDepthbuffer[pe],U,!1);else{const q=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=D.__webglDepthbuffer[pe];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,Z)}}else{const pe=U.texture.mipmaps;if(pe&&pe.length>0?n.bindFramebuffer(t.FRAMEBUFFER,D.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=t.createRenderbuffer(),fe(D.__webglDepthbuffer,U,!1);else{const q=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=D.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,Z)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(U,D,V){const pe=i.get(U);D!==void 0&&W(pe.__webglFramebuffer,U,U.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&ue(U)}function ae(U){const D=U.texture,V=i.get(U),pe=i.get(D);U.addEventListener("dispose",S);const q=U.textures,Z=U.isWebGLCubeRenderTarget===!0,be=q.length>1;if(be||(pe.__webglTexture===void 0&&(pe.__webglTexture=t.createTexture()),pe.__version=D.version,o.memory.textures++),Z){V.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(D.mipmaps&&D.mipmaps.length>0){V.__webglFramebuffer[Me]=[];for(let Fe=0;Fe<D.mipmaps.length;Fe++)V.__webglFramebuffer[Me][Fe]=t.createFramebuffer()}else V.__webglFramebuffer[Me]=t.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){V.__webglFramebuffer=[];for(let Me=0;Me<D.mipmaps.length;Me++)V.__webglFramebuffer[Me]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(be)for(let Me=0,Fe=q.length;Me<Fe;Me++){const Pe=i.get(q[Me]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=t.createTexture(),o.memory.textures++)}if(U.samples>0&&te(U)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Me=0;Me<q.length;Me++){const Fe=q[Me];V.__webglColorRenderbuffer[Me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[Me]);const Pe=r.convert(Fe.format,Fe.colorSpace),Ae=r.convert(Fe.type),De=_(Fe.internalFormat,Pe,Ae,Fe.colorSpace,U.isXRRenderTarget===!0),Qe=we(U);t.renderbufferStorageMultisample(t.RENDERBUFFER,Qe,De,U.width,U.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,V.__webglColorRenderbuffer[Me])}t.bindRenderbuffer(t.RENDERBUFFER,null),U.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(V.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,pe.__webglTexture),ee(t.TEXTURE_CUBE_MAP,D);for(let Me=0;Me<6;Me++)if(D.mipmaps&&D.mipmaps.length>0)for(let Fe=0;Fe<D.mipmaps.length;Fe++)W(V.__webglFramebuffer[Me][Fe],U,D,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Fe);else W(V.__webglFramebuffer[Me],U,D,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);m(D)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let Me=0,Fe=q.length;Me<Fe;Me++){const Pe=q[Me],Ae=i.get(Pe);let De=t.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(De=U.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(De,Ae.__webglTexture),ee(De,Pe),W(V.__webglFramebuffer,U,Pe,t.COLOR_ATTACHMENT0+Me,De,0),m(Pe)&&p(De)}n.unbindTexture()}else{let Me=t.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Me=U.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Me,pe.__webglTexture),ee(Me,D),D.mipmaps&&D.mipmaps.length>0)for(let Fe=0;Fe<D.mipmaps.length;Fe++)W(V.__webglFramebuffer[Fe],U,D,t.COLOR_ATTACHMENT0,Me,Fe);else W(V.__webglFramebuffer,U,D,t.COLOR_ATTACHMENT0,Me,0);m(D)&&p(Me),n.unbindTexture()}U.depthBuffer&&ue(U)}function Ee(U){const D=U.textures;for(let V=0,pe=D.length;V<pe;V++){const q=D[V];if(m(q)){const Z=b(U),be=i.get(q).__webglTexture;n.bindTexture(Z,be),p(Z),n.unbindTexture()}}}const L=[],ve=[];function me(U){if(U.samples>0){if(te(U)===!1){const D=U.textures,V=U.width,pe=U.height;let q=t.COLOR_BUFFER_BIT;const Z=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(U),Me=D.length>1;if(Me)for(let Pe=0;Pe<D.length;Pe++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Fe=U.texture.mipmaps;Fe&&Fe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Pe=0;Pe<D.length;Pe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(q|=t.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(q|=t.STENCIL_BUFFER_BIT)),Me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[Pe]);const Ae=i.get(D[Pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,V,pe,0,0,V,pe,q,t.NEAREST),l===!0&&(L.length=0,ve.length=0,L.push(t.COLOR_ATTACHMENT0+Pe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(L.push(Z),ve.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ve)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Me)for(let Pe=0;Pe<D.length;Pe++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,be.__webglColorRenderbuffer[Pe]);const Ae=i.get(D[Pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const D=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[D])}}}function we(U){return Math.min(a.maxSamples,U.samples)}function te(U){const D=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function qe(U){const D=o.render.frame;f.get(U)!==D&&(f.set(U,D),U.update())}function Ue(U,D){const V=U.colorSpace,pe=U.format,q=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||V!==zs&&V!==xr&&(cn.getTransfer(V)===mn?(pe!==aa||q!==Za)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nn("WebGLTextures: Unsupported texture color space:",V)),D}function _e(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=C,this.setTexture2D=I,this.setTexture2DArray=z,this.setTexture3D=B,this.setTextureCube=F,this.rebindTextures=de,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=W,this.useMultisampledRTT=te}function QT(t,e){function n(i,a=xr){let r;const o=cn.getTransfer(a);if(i===Za)return t.UNSIGNED_BYTE;if(i===dd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===pd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Xx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Yx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gx)return t.BYTE;if(i===Vx)return t.SHORT;if(i===Ll)return t.UNSIGNED_SHORT;if(i===fd)return t.INT;if(i===Ro)return t.UNSIGNED_INT;if(i===Xa)return t.FLOAT;if(i===$s)return t.HALF_FLOAT;if(i===qx)return t.ALPHA;if(i===jx)return t.RGB;if(i===aa)return t.RGBA;if(i===zl)return t.DEPTH_COMPONENT;if(i===Ul)return t.DEPTH_STENCIL;if(i===Kx)return t.RED;if(i===md)return t.RED_INTEGER;if(i===gd)return t.RG;if(i===xd)return t.RG_INTEGER;if(i===bd)return t.RGBA_INTEGER;if(i===c0||i===u0||i===h0||i===f0)if(o===mn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===c0)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===u0)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===h0)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===f0)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===c0)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===u0)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===h0)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===f0)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ff||i===df||i===pf||i===mf)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ff)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===df)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pf)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mf)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gf||i===xf||i===bf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gf||i===xf)return o===mn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bf)return o===mn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vf||i===Mf||i===_f||i===yf||i===wf||i===Sf||i===Ef||i===Af||i===Tf||i===Cf||i===Rf||i===Pf||i===Df||i===If)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===vf)return o===mn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mf)return o===mn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_f)return o===mn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yf)return o===mn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wf)return o===mn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sf)return o===mn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ef)return o===mn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Af)return o===mn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tf)return o===mn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cf)return o===mn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rf)return o===mn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pf)return o===mn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Df)return o===mn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===If)return o===mn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lf||i===Ff||i===zf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Lf)return o===mn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ff)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uf||i===Nf||i===Of||i===$f)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Uf)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Nf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Of)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$f)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const eC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new u2(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Sa({vertexShader:eC,fragmentShader:tC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qa(new jl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iC extends ks{constructor(e,n){super();const i=this;let a=null,r=1,o=null,s="local-floor",l=1,c=null,f=null,h=null,u=null,d=null,g=null;const x=typeof XRWebGLBinding<"u",m=new nC,p={},b=n.getContextAttributes();let _=null,E=null;const M=[],v=[],S=new pn;let T=null;const y=new ea;y.viewport=new On;const w=new ea;w.viewport=new On;const A=[y,w],C=new yS;let R=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let N=M[H];return N===void 0&&(N=new ah,M[H]=N),N.getTargetRaySpace()},this.getControllerGrip=function(H){let N=M[H];return N===void 0&&(N=new ah,M[H]=N),N.getGripSpace()},this.getHand=function(H){let N=M[H];return N===void 0&&(N=new ah,M[H]=N),N.getHandSpace()};function I(H){const N=v.indexOf(H.inputSource);if(N===-1)return;const W=M[N];W!==void 0&&(W.update(H.inputSource,H.frame,c||o),W.dispatchEvent({type:H.type,data:H.inputSource}))}function z(){a.removeEventListener("select",I),a.removeEventListener("selectstart",I),a.removeEventListener("selectend",I),a.removeEventListener("squeeze",I),a.removeEventListener("squeezestart",I),a.removeEventListener("squeezeend",I),a.removeEventListener("end",z),a.removeEventListener("inputsourceschange",B);for(let H=0;H<M.length;H++){const N=v[H];N!==null&&(v[H]=null,M[H].disconnect(N))}R=null,P=null,m.reset();for(const H in p)delete p[H];e.setRenderTarget(_),d=null,u=null,h=null,a=null,E=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){s=H,i.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(a,n)),h},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(H){if(a=H,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",I),a.addEventListener("selectstart",I),a.addEventListener("selectend",I),a.addEventListener("squeeze",I),a.addEventListener("squeezestart",I),a.addEventListener("squeezeend",I),a.addEventListener("end",z),a.addEventListener("inputsourceschange",B),b.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(S),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,fe=null,j=null;b.depth&&(j=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,W=b.stencil?Ul:zl,fe=b.stencil?Fl:Ro);const ue={colorFormat:n.RGBA8,depthFormat:j,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(ue),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new Po(u.textureWidth,u.textureHeight,{format:aa,type:Za,depthTexture:new c2(u.textureWidth,u.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const W={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(a,n,W),a.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new Po(d.framebufferWidth,d.framebufferHeight,{format:aa,type:Za,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await a.requestReferenceSpace(s),he.setContext(a),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(H){for(let N=0;N<H.removed.length;N++){const W=H.removed[N],fe=v.indexOf(W);fe>=0&&(v[fe]=null,M[fe].disconnect(W))}for(let N=0;N<H.added.length;N++){const W=H.added[N];let fe=v.indexOf(W);if(fe===-1){for(let ue=0;ue<M.length;ue++)if(ue>=v.length){v.push(W),fe=ue;break}else if(v[ue]===null){v[ue]=W,fe=ue;break}if(fe===-1)break}const j=M[fe];j&&j.connect(W)}}const F=new ye,O=new ye;function k(H,N,W){F.setFromMatrixPosition(N.matrixWorld),O.setFromMatrixPosition(W.matrixWorld);const fe=F.distanceTo(O),j=N.projectionMatrix.elements,ue=W.projectionMatrix.elements,de=j[14]/(j[10]-1),ae=j[14]/(j[10]+1),Ee=(j[9]+1)/j[5],L=(j[9]-1)/j[5],ve=(j[8]-1)/j[0],me=(ue[8]+1)/ue[0],we=de*ve,te=de*me,qe=fe/(-ve+me),Ue=qe*-ve;if(N.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ue),H.translateZ(qe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),j[10]===-1)H.projectionMatrix.copy(N.projectionMatrix),H.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{const _e=de+qe,U=ae+qe,D=we-Ue,V=te+(fe-Ue),pe=Ee*ae/U*_e,q=L*ae/U*_e;H.projectionMatrix.makePerspective(D,V,pe,q,_e,U),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function G(H,N){N===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(N.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(a===null)return;let N=H.near,W=H.far;m.texture!==null&&(m.depthNear>0&&(N=m.depthNear),m.depthFar>0&&(W=m.depthFar)),C.near=w.near=y.near=N,C.far=w.far=y.far=W,(R!==C.near||P!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),R=C.near,P=C.far),C.layers.mask=H.layers.mask|6,y.layers.mask=C.layers.mask&3,w.layers.mask=C.layers.mask&5;const fe=H.parent,j=C.cameras;G(C,fe);for(let ue=0;ue<j.length;ue++)G(j[ue],fe);j.length===2?k(C,y,w):C.projectionMatrix.copy(y.projectionMatrix),ee(H,C,fe)};function ee(H,N,W){W===null?H.matrix.copy(N.matrixWorld):(H.matrix.copy(W.matrixWorld),H.matrix.invert(),H.matrix.multiply(N.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(N.projectionMatrix),H.projectionMatrixInverse.copy(N.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=kf*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(H){l=H,u!==null&&(u.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(H){return p[H]};let ne=null;function J(H,N){if(f=N.getViewerPose(c||o),g=N,f!==null){const W=f.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let fe=!1;W.length!==C.cameras.length&&(C.cameras.length=0,fe=!0);for(let ae=0;ae<W.length;ae++){const Ee=W[ae];let L=null;if(d!==null)L=d.getViewport(Ee);else{const me=h.getViewSubImage(u,Ee);L=me.viewport,ae===0&&(e.setRenderTargetTextures(E,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(E))}let ve=A[ae];ve===void 0&&(ve=new ea,ve.layers.enable(ae),ve.viewport=new On,A[ae]=ve),ve.matrix.fromArray(Ee.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(Ee.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(L.x,L.y,L.width,L.height),ae===0&&(C.matrix.copy(ve.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),fe===!0&&C.cameras.push(ve)}const j=a.enabledFeatures;if(j&&j.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const ae=h.getDepthInformation(W[0]);ae&&ae.isValid&&ae.texture&&m.init(ae,a.renderState)}if(j&&j.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let ae=0;ae<W.length;ae++){const Ee=W[ae].camera;if(Ee){let L=p[Ee];L||(L=new u2,p[Ee]=L);const ve=h.getCameraImage(Ee);L.sourceTexture=ve}}}}for(let W=0;W<M.length;W++){const fe=v[W],j=M[W];fe!==null&&j!==void 0&&j.update(fe,N,c||o)}ne&&ne(H,N),N.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:N}),g=null}const he=new f2;he.setAnimationLoop(J),this.setAnimationLoop=function(H){ne=H},this.dispose=function(){}}}const Qr=new Ja,aC=new qn;function rC(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,r2(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function a(m,p,b,_,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),f(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&s(m,p)):p.isPointsMaterial?l(m,p,b,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Mi&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Mi&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),_=b.envMap,E=b.envMapRotation;_&&(m.envMap.value=_,Qr.copy(E),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),m.envMapRotation.value.setFromMatrix4(aC.makeRotationFromEuler(Qr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function s(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=_*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mi&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function oC(t,e,n,i){let a={},r={},o=[];const s=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){const E=_.program;i.uniformBlockBinding(b,E)}function c(b,_){let E=a[b.id];E===void 0&&(g(b),E=f(b),a[b.id]=E,b.addEventListener("dispose",m));const M=_.program;i.updateUBOMapping(b,M);const v=e.render.frame;r[b.id]!==v&&(u(b),r[b.id]=v)}function f(b){const _=h();b.__bindingPointIndex=_;const E=t.createBuffer(),M=b.__size,v=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,M,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,E),E}function h(){for(let b=0;b<s;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Nn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const _=a[b.id],E=b.uniforms,M=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let v=0,S=E.length;v<S;v++){const T=Array.isArray(E[v])?E[v]:[E[v]];for(let y=0,w=T.length;y<w;y++){const A=T[y];if(d(A,v,y,M)===!0){const C=A.__offset,R=Array.isArray(A.value)?A.value:[A.value];let P=0;for(let I=0;I<R.length;I++){const z=R[I],B=x(z);typeof z=="number"||typeof z=="boolean"?(A.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,C+P,A.__data)):z.isMatrix3?(A.__data[0]=z.elements[0],A.__data[1]=z.elements[1],A.__data[2]=z.elements[2],A.__data[3]=0,A.__data[4]=z.elements[3],A.__data[5]=z.elements[4],A.__data[6]=z.elements[5],A.__data[7]=0,A.__data[8]=z.elements[6],A.__data[9]=z.elements[7],A.__data[10]=z.elements[8],A.__data[11]=0):(z.toArray(A.__data,P),P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,C,A.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(b,_,E,M){const v=b.value,S=_+"_"+E;if(M[S]===void 0)return typeof v=="number"||typeof v=="boolean"?M[S]=v:M[S]=v.clone(),!0;{const T=M[S];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return M[S]=v,!0}else if(T.equals(v)===!1)return T.copy(v),!0}return!1}function g(b){const _=b.uniforms;let E=0;const M=16;for(let S=0,T=_.length;S<T;S++){const y=Array.isArray(_[S])?_[S]:[_[S]];for(let w=0,A=y.length;w<A;w++){const C=y[w],R=Array.isArray(C.value)?C.value:[C.value];for(let P=0,I=R.length;P<I;P++){const z=R[P],B=x(z),F=E%M,O=F%B.boundary,k=F+O;E+=O,k!==0&&M-k<B.storage&&(E+=M-k),C.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=E,E+=B.storage}}}const v=E%M;return v>0&&(E+=M-v),b.__size=E,b.__cache={},this}function x(b){const _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Bt("WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){const _=b.target;_.removeEventListener("dispose",m);const E=o.indexOf(_.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(a[_.id]),delete a[_.id],delete r[_.id]}function p(){for(const b in a)t.deleteBuffer(a[b]);o=[],a={},r={}}return{bind:l,update:c,dispose:p}}const sC=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Fa=null;function lC(){return Fa===null&&(Fa=new gS(sC,32,32,gd,$s),Fa.minFilter=Wi,Fa.magFilter=Wi,Fa.wrapS=Va,Fa.wrapT=Va,Fa.generateMipmaps=!1,Fa.needsUpdate=!0),Fa}class cC{constructor(e={}){const{canvas:n=Bw(),context:i=null,depth:a=!0,stencil:r=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Set([bd,xd,md]),x=new Set([Za,Ro,Ll,Fl,dd,pd]),m=new Uint32Array(4),p=new Int32Array(4);let b=null,_=null;const E=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=Bi;let T=0,y=0,w=null,A=-1,C=null;const R=new On,P=new On;let I=null;const z=new tn(0);let B=0,F=n.width,O=n.height,k=1,G=null,ee=null;const ne=new On(0,0,F,O),J=new On(0,0,F,O);let he=!1;const H=new l2;let N=!1,W=!1;const fe=new qn,j=new ye,ue=new On,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function Ee(){return w===null?k:1}let L=i;function ve($,se){return n.getContext($,se)}try{const $={alpha:!0,depth:a,stencil:r,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${hd}`),n.addEventListener("webglcontextlost",Y,!1),n.addEventListener("webglcontextrestored",oe,!1),n.addEventListener("webglcontextcreationerror",Ce,!1),L===null){const se="webgl2";if(L=ve(se,$),L===null)throw ve(se)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch($){throw $("WebGLRenderer: "+$.message),$}let me,we,te,qe,Ue,_e,U,D,V,pe,q,Z,be,Me,Fe,Pe,Ae,De,Qe,ot,ke,ct,X,He;function Se(){me=new xA(L),me.init(),ct=new QT(L,me),we=new lA(L,me,e,ct),te=new ZT(L,me),we.reversedDepthBuffer&&u&&te.buffers.depth.setReversed(!0),qe=new MA(L),Ue=new OT,_e=new JT(L,me,te,Ue,we,ct,qe),U=new uA(v),D=new gA(v),V=new SS(L),X=new oA(L,V),pe=new bA(L,V,qe,X),q=new yA(L,pe,V,qe),Qe=new _A(L,we,_e),Pe=new cA(Ue),Z=new NT(v,U,D,me,we,X,Pe),be=new rC(v,Ue),Me=new kT,Fe=new XT(me),De=new rA(v,U,D,te,q,d,l),Ae=new jT(v,q,we),He=new oC(L,qe,we,te),ot=new sA(L,me,qe),ke=new vA(L,me,qe),qe.programs=Z.programs,v.capabilities=we,v.extensions=me,v.properties=Ue,v.renderLists=Me,v.shadowMap=Ae,v.state=te,v.info=qe}Se();const Ie=new iC(v,L);this.xr=Ie,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const $=me.get("WEBGL_lose_context");$&&$.loseContext()},this.forceContextRestore=function(){const $=me.get("WEBGL_lose_context");$&&$.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function($){$!==void 0&&(k=$,this.setSize(F,O,!1))},this.getSize=function($){return $.set(F,O)},this.setSize=function($,se,ge=!0){if(Ie.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}F=$,O=se,n.width=Math.floor($*k),n.height=Math.floor(se*k),ge===!0&&(n.style.width=$+"px",n.style.height=se+"px"),this.setViewport(0,0,$,se)},this.getDrawingBufferSize=function($){return $.set(F*k,O*k).floor()},this.setDrawingBufferSize=function($,se,ge){F=$,O=se,k=ge,n.width=Math.floor($*ge),n.height=Math.floor(se*ge),this.setViewport(0,0,$,se)},this.getCurrentViewport=function($){return $.copy(R)},this.getViewport=function($){return $.copy(ne)},this.setViewport=function($,se,ge,re){$.isVector4?ne.set($.x,$.y,$.z,$.w):ne.set($,se,ge,re),te.viewport(R.copy(ne).multiplyScalar(k).round())},this.getScissor=function($){return $.copy(J)},this.setScissor=function($,se,ge,re){$.isVector4?J.set($.x,$.y,$.z,$.w):J.set($,se,ge,re),te.scissor(P.copy(J).multiplyScalar(k).round())},this.getScissorTest=function(){return he},this.setScissorTest=function($){te.setScissorTest(he=$)},this.setOpaqueSort=function($){G=$},this.setTransparentSort=function($){ee=$},this.getClearColor=function($){return $.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function($=!0,se=!0,ge=!0){let re=0;if($){let le=!1;if(w!==null){const Be=w.texture.format;le=g.has(Be)}if(le){const Be=w.texture.type,Ve=x.has(Be),at=De.getClearColor(),nt=De.getClearAlpha(),ft=at.r,vt=at.g,mt=at.b;Ve?(m[0]=ft,m[1]=vt,m[2]=mt,m[3]=nt,L.clearBufferuiv(L.COLOR,0,m)):(p[0]=ft,p[1]=vt,p[2]=mt,p[3]=nt,L.clearBufferiv(L.COLOR,0,p))}else re|=L.COLOR_BUFFER_BIT}se&&(re|=L.DEPTH_BUFFER_BIT),ge&&(re|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Y,!1),n.removeEventListener("webglcontextrestored",oe,!1),n.removeEventListener("webglcontextcreationerror",Ce,!1),De.dispose(),Me.dispose(),Fe.dispose(),Ue.dispose(),U.dispose(),D.dispose(),q.dispose(),X.dispose(),He.dispose(),Z.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Ct),Ie.removeEventListener("sessionend",yt),Ge.stop()};function Y($){$.preventDefault(),Jm("WebGLRenderer: Context Lost."),S=!0}function oe(){Jm("WebGLRenderer: Context Restored."),S=!1;const $=qe.autoReset,se=Ae.enabled,ge=Ae.autoUpdate,re=Ae.needsUpdate,le=Ae.type;Se(),qe.autoReset=$,Ae.enabled=se,Ae.autoUpdate=ge,Ae.needsUpdate=re,Ae.type=le}function Ce($){Nn("WebGLRenderer: A WebGL context could not be created. Reason: ",$.statusMessage)}function ce($){const se=$.target;se.removeEventListener("dispose",ce),Te(se)}function Te($){Le($),Ue.remove($)}function Le($){const se=Ue.get($).programs;se!==void 0&&(se.forEach(function(ge){Z.releaseProgram(ge)}),$.isShaderMaterial&&Z.releaseShaderCache($))}this.renderBufferDirect=function($,se,ge,re,le,Be){se===null&&(se=de);const Ve=le.isMesh&&le.matrixWorld.determinant()<0,at=It($,se,ge,re,le);te.setMaterial(re,Ve);let nt=ge.index,ft=1;if(re.wireframe===!0){if(nt=pe.getWireframeAttribute(ge),nt===void 0)return;ft=2}const vt=ge.drawRange,mt=ge.attributes.position;let $t=vt.start*ft,Xe=(vt.start+vt.count)*ft;Be!==null&&($t=Math.max($t,Be.start*ft),Xe=Math.min(Xe,(Be.start+Be.count)*ft)),nt!==null?($t=Math.max($t,0),Xe=Math.min(Xe,nt.count)):mt!=null&&($t=Math.max($t,0),Xe=Math.min(Xe,mt.count));const lt=Xe-$t;if(lt<0||lt===1/0)return;X.setup(le,re,at,ge,nt);let dt,At=ot;if(nt!==null&&(dt=V.get(nt),At=ke,At.setIndex(dt)),le.isMesh)re.wireframe===!0?(te.setLineWidth(re.wireframeLinewidth*Ee()),At.setMode(L.LINES)):At.setMode(L.TRIANGLES);else if(le.isLine){let rt=re.linewidth;rt===void 0&&(rt=1),te.setLineWidth(rt*Ee()),le.isLineSegments?At.setMode(L.LINES):le.isLineLoop?At.setMode(L.LINE_LOOP):At.setMode(L.LINE_STRIP)}else le.isPoints?At.setMode(L.POINTS):le.isSprite&&At.setMode(L.TRIANGLES);if(le.isBatchedMesh)if(le._multiDrawInstances!==null)Nl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount,le._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))At.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const rt=le._multiDrawStarts,Vt=le._multiDrawCounts,St=le._multiDrawCount,sn=nt?V.get(nt).bytesPerElement:1,hn=Ue.get(re).currentProgram.getUniforms();for(let xn=0;xn<St;xn++)hn.setValue(L,"_gl_DrawID",xn),At.render(rt[xn]/sn,Vt[xn])}else if(le.isInstancedMesh)At.renderInstances($t,lt,le.count);else if(ge.isInstancedBufferGeometry){const rt=ge._maxInstanceCount!==void 0?ge._maxInstanceCount:1/0,Vt=Math.min(ge.instanceCount,rt);At.renderInstances($t,lt,Vt)}else At.render($t,lt)};function $e($,se,ge){$.transparent===!0&&$.side===Wa&&$.forceSinglePass===!1?($.side=Mi,$.needsUpdate=!0,Zt($,se,ge),$.side=Lr,$.needsUpdate=!0,Zt($,se,ge),$.side=Wa):Zt($,se,ge)}this.compile=function($,se,ge=null){ge===null&&(ge=$),_=Fe.get(ge),_.init(se),M.push(_),ge.traverseVisible(function(le){le.isLight&&le.layers.test(se.layers)&&(_.pushLight(le),le.castShadow&&_.pushShadow(le))}),$!==ge&&$.traverseVisible(function(le){le.isLight&&le.layers.test(se.layers)&&(_.pushLight(le),le.castShadow&&_.pushShadow(le))}),_.setupLights();const re=new Set;return $.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const Be=le.material;if(Be)if(Array.isArray(Be))for(let Ve=0;Ve<Be.length;Ve++){const at=Be[Ve];$e(at,ge,le),re.add(at)}else $e(Be,ge,le),re.add(Be)}),_=M.pop(),re},this.compileAsync=function($,se,ge=null){const re=this.compile($,se,ge);return new Promise(le=>{function Be(){if(re.forEach(function(Ve){Ue.get(Ve).currentProgram.isReady()&&re.delete(Ve)}),re.size===0){le($);return}setTimeout(Be,10)}me.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let We=null;function et($){We&&We($)}function Ct(){Ge.stop()}function yt(){Ge.start()}const Ge=new f2;Ge.setAnimationLoop(et),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function($){We=$,Ie.setAnimationLoop($),$===null?Ge.stop():Ge.start()},Ie.addEventListener("sessionstart",Ct),Ie.addEventListener("sessionend",yt),this.render=function($,se){if(se!==void 0&&se.isCamera!==!0){Nn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if($.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(se),se=Ie.getCamera()),$.isScene===!0&&$.onBeforeRender(v,$,se,w),_=Fe.get($,M.length),_.init(se),M.push(_),fe.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),H.setFromProjectionMatrix(fe,va,se.reversedDepth),W=this.localClippingEnabled,N=Pe.init(this.clippingPlanes,W),b=Me.get($,E.length),b.init(),E.push(b),Ie.enabled===!0&&Ie.isPresenting===!0){const Be=v.xr.getDepthSensingMesh();Be!==null&&on(Be,se,-1/0,v.sortObjects)}on($,se,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(G,ee),ae=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,ae&&De.addToRenderList(b,$),this.info.render.frame++,N===!0&&Pe.beginShadows();const ge=_.state.shadowsArray;Ae.render(ge,$,se),N===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=b.opaque,le=b.transmissive;if(_.setupLights(),se.isArrayCamera){const Be=se.cameras;if(le.length>0)for(let Ve=0,at=Be.length;Ve<at;Ve++){const nt=Be[Ve];je(re,le,$,nt)}ae&&De.render($);for(let Ve=0,at=Be.length;Ve<at;Ve++){const nt=Be[Ve];Ot(b,$,nt,nt.viewport)}}else le.length>0&&je(re,le,$,se),ae&&De.render($),Ot(b,$,se);w!==null&&y===0&&(_e.updateMultisampleRenderTarget(w),_e.updateRenderTargetMipmap(w)),$.isScene===!0&&$.onAfterRender(v,$,se),X.resetDefaultState(),A=-1,C=null,M.pop(),M.length>0?(_=M[M.length-1],N===!0&&Pe.setGlobalState(v.clippingPlanes,_.state.camera)):_=null,E.pop(),E.length>0?b=E[E.length-1]:b=null};function on($,se,ge,re){if($.visible===!1)return;if($.layers.test(se.layers)){if($.isGroup)ge=$.renderOrder;else if($.isLOD)$.autoUpdate===!0&&$.update(se);else if($.isLight)_.pushLight($),$.castShadow&&_.pushShadow($);else if($.isSprite){if(!$.frustumCulled||H.intersectsSprite($)){re&&ue.setFromMatrixPosition($.matrixWorld).applyMatrix4(fe);const Ve=q.update($),at=$.material;at.visible&&b.push($,Ve,at,ge,ue.z,null)}}else if(($.isMesh||$.isLine||$.isPoints)&&(!$.frustumCulled||H.intersectsObject($))){const Ve=q.update($),at=$.material;if(re&&($.boundingSphere!==void 0?($.boundingSphere===null&&$.computeBoundingSphere(),ue.copy($.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ue.copy(Ve.boundingSphere.center)),ue.applyMatrix4($.matrixWorld).applyMatrix4(fe)),Array.isArray(at)){const nt=Ve.groups;for(let ft=0,vt=nt.length;ft<vt;ft++){const mt=nt[ft],$t=at[mt.materialIndex];$t&&$t.visible&&b.push($,Ve,$t,ge,ue.z,mt)}}else at.visible&&b.push($,Ve,at,ge,ue.z,null)}}const Be=$.children;for(let Ve=0,at=Be.length;Ve<at;Ve++)on(Be[Ve],se,ge,re)}function Ot($,se,ge,re){const{opaque:le,transmissive:Be,transparent:Ve}=$;_.setupLightsView(ge),N===!0&&Pe.setGlobalState(v.clippingPlanes,ge),re&&te.viewport(R.copy(re)),le.length>0&&Pt(le,se,ge),Be.length>0&&Pt(Be,se,ge),Ve.length>0&&Pt(Ve,se,ge),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function je($,se,ge,re){if((ge.isScene===!0?ge.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[re.id]===void 0&&(_.state.transmissionRenderTarget[re.id]=new Po(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?$s:Za,minFilter:go,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:cn.workingColorSpace}));const Be=_.state.transmissionRenderTarget[re.id],Ve=re.viewport||R;Be.setSize(Ve.z*v.transmissionResolutionScale,Ve.w*v.transmissionResolutionScale);const at=v.getRenderTarget(),nt=v.getActiveCubeFace(),ft=v.getActiveMipmapLevel();v.setRenderTarget(Be),v.getClearColor(z),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),ae&&De.render(ge);const vt=v.toneMapping;v.toneMapping=Rr;const mt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),_.setupLightsView(re),N===!0&&Pe.setGlobalState(v.clippingPlanes,re),Pt($,ge,re),_e.updateMultisampleRenderTarget(Be),_e.updateRenderTargetMipmap(Be),me.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Xe=0,lt=se.length;Xe<lt;Xe++){const dt=se[Xe],{object:At,geometry:rt,material:Vt,group:St}=dt;if(Vt.side===Wa&&At.layers.test(re.layers)){const sn=Vt.side;Vt.side=Mi,Vt.needsUpdate=!0,Ht(At,ge,re,rt,Vt,St),Vt.side=sn,Vt.needsUpdate=!0,$t=!0}}$t===!0&&(_e.updateMultisampleRenderTarget(Be),_e.updateRenderTargetMipmap(Be))}v.setRenderTarget(at,nt,ft),v.setClearColor(z,B),mt!==void 0&&(re.viewport=mt),v.toneMapping=vt}function Pt($,se,ge){const re=se.isScene===!0?se.overrideMaterial:null;for(let le=0,Be=$.length;le<Be;le++){const Ve=$[le],{object:at,geometry:nt,group:ft}=Ve;let vt=Ve.material;vt.allowOverride===!0&&re!==null&&(vt=re),at.layers.test(ge.layers)&&Ht(at,se,ge,nt,vt,ft)}}function Ht($,se,ge,re,le,Be){$.onBeforeRender(v,se,ge,re,le,Be),$.modelViewMatrix.multiplyMatrices(ge.matrixWorldInverse,$.matrixWorld),$.normalMatrix.getNormalMatrix($.modelViewMatrix),le.onBeforeRender(v,se,ge,re,$,Be),le.transparent===!0&&le.side===Wa&&le.forceSinglePass===!1?(le.side=Mi,le.needsUpdate=!0,v.renderBufferDirect(ge,se,re,le,$,Be),le.side=Lr,le.needsUpdate=!0,v.renderBufferDirect(ge,se,re,le,$,Be),le.side=Wa):v.renderBufferDirect(ge,se,re,le,$,Be),$.onAfterRender(v,se,ge,re,le,Be)}function Zt($,se,ge){se.isScene!==!0&&(se=de);const re=Ue.get($),le=_.state.lights,Be=_.state.shadowsArray,Ve=le.state.version,at=Z.getParameters($,le.state,Be,se,ge),nt=Z.getProgramCacheKey(at);let ft=re.programs;re.environment=$.isMeshStandardMaterial?se.environment:null,re.fog=se.fog,re.envMap=($.isMeshStandardMaterial?D:U).get($.envMap||re.environment),re.envMapRotation=re.environment!==null&&$.envMap===null?se.environmentRotation:$.envMapRotation,ft===void 0&&($.addEventListener("dispose",ce),ft=new Map,re.programs=ft);let vt=ft.get(nt);if(vt!==void 0){if(re.currentProgram===vt&&re.lightsStateVersion===Ve)return un($,at),vt}else at.uniforms=Z.getUniforms($),$.onBeforeCompile(at,v),vt=Z.acquireProgram(at,nt),ft.set(nt,vt),re.uniforms=at.uniforms;const mt=re.uniforms;return(!$.isShaderMaterial&&!$.isRawShaderMaterial||$.clipping===!0)&&(mt.clippingPlanes=Pe.uniform),un($,at),re.needsLights=Rt($),re.lightsStateVersion=Ve,re.needsLights&&(mt.ambientLightColor.value=le.state.ambient,mt.lightProbe.value=le.state.probe,mt.directionalLights.value=le.state.directional,mt.directionalLightShadows.value=le.state.directionalShadow,mt.spotLights.value=le.state.spot,mt.spotLightShadows.value=le.state.spotShadow,mt.rectAreaLights.value=le.state.rectArea,mt.ltc_1.value=le.state.rectAreaLTC1,mt.ltc_2.value=le.state.rectAreaLTC2,mt.pointLights.value=le.state.point,mt.pointLightShadows.value=le.state.pointShadow,mt.hemisphereLights.value=le.state.hemi,mt.directionalShadowMap.value=le.state.directionalShadowMap,mt.directionalShadowMatrix.value=le.state.directionalShadowMatrix,mt.spotShadowMap.value=le.state.spotShadowMap,mt.spotLightMatrix.value=le.state.spotLightMatrix,mt.spotLightMap.value=le.state.spotLightMap,mt.pointShadowMap.value=le.state.pointShadowMap,mt.pointShadowMatrix.value=le.state.pointShadowMatrix),re.currentProgram=vt,re.uniformsList=null,vt}function gn($){if($.uniformsList===null){const se=$.currentProgram.getUniforms();$.uniformsList=d0.seqWithValue(se.seq,$.uniforms)}return $.uniformsList}function un($,se){const ge=Ue.get($);ge.outputColorSpace=se.outputColorSpace,ge.batching=se.batching,ge.batchingColor=se.batchingColor,ge.instancing=se.instancing,ge.instancingColor=se.instancingColor,ge.instancingMorph=se.instancingMorph,ge.skinning=se.skinning,ge.morphTargets=se.morphTargets,ge.morphNormals=se.morphNormals,ge.morphColors=se.morphColors,ge.morphTargetsCount=se.morphTargetsCount,ge.numClippingPlanes=se.numClippingPlanes,ge.numIntersection=se.numClipIntersection,ge.vertexAlphas=se.vertexAlphas,ge.vertexTangents=se.vertexTangents,ge.toneMapping=se.toneMapping}function It($,se,ge,re,le){se.isScene!==!0&&(se=de),_e.resetTextureUnits();const Be=se.fog,Ve=re.isMeshStandardMaterial?se.environment:null,at=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:zs,nt=(re.isMeshStandardMaterial?D:U).get(re.envMap||Ve),ft=re.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,vt=!!ge.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),mt=!!ge.morphAttributes.position,$t=!!ge.morphAttributes.normal,Xe=!!ge.morphAttributes.color;let lt=Rr;re.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(lt=v.toneMapping);const dt=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,At=dt!==void 0?dt.length:0,rt=Ue.get(re),Vt=_.state.lights;if(N===!0&&(W===!0||$!==C)){const fn=$===C&&re.id===A;Pe.setState(re,$,fn)}let St=!1;re.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==Vt.state.version||rt.outputColorSpace!==at||le.isBatchedMesh&&rt.batching===!1||!le.isBatchedMesh&&rt.batching===!0||le.isBatchedMesh&&rt.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&rt.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&rt.instancing===!1||!le.isInstancedMesh&&rt.instancing===!0||le.isSkinnedMesh&&rt.skinning===!1||!le.isSkinnedMesh&&rt.skinning===!0||le.isInstancedMesh&&rt.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&rt.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&rt.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&rt.instancingMorph===!1&&le.morphTexture!==null||rt.envMap!==nt||re.fog===!0&&rt.fog!==Be||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Pe.numPlanes||rt.numIntersection!==Pe.numIntersection)||rt.vertexAlphas!==ft||rt.vertexTangents!==vt||rt.morphTargets!==mt||rt.morphNormals!==$t||rt.morphColors!==Xe||rt.toneMapping!==lt||rt.morphTargetsCount!==At)&&(St=!0):(St=!0,rt.__version=re.version);let sn=rt.currentProgram;St===!0&&(sn=Zt(re,se,le));let hn=!1,xn=!1,Sn=!1;const nn=sn.getUniforms(),_n=rt.uniforms;if(te.useProgram(sn.program)&&(hn=!0,xn=!0,Sn=!0),re.id!==A&&(A=re.id,xn=!0),hn||C!==$){te.buffers.depth.getReversed()&&$.reversedDepth!==!0&&($._reversedDepth=!0,$.updateProjectionMatrix()),nn.setValue(L,"projectionMatrix",$.projectionMatrix),nn.setValue(L,"viewMatrix",$.matrixWorldInverse);const yn=nn.map.cameraPosition;yn!==void 0&&yn.setValue(L,j.setFromMatrixPosition($.matrixWorld)),we.logarithmicDepthBuffer&&nn.setValue(L,"logDepthBufFC",2/(Math.log($.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&nn.setValue(L,"isOrthographic",$.isOrthographicCamera===!0),C!==$&&(C=$,xn=!0,Sn=!0)}if(le.isSkinnedMesh){nn.setOptional(L,le,"bindMatrix"),nn.setOptional(L,le,"bindMatrixInverse");const fn=le.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),nn.setValue(L,"boneTexture",fn.boneTexture,_e))}le.isBatchedMesh&&(nn.setOptional(L,le,"batchingTexture"),nn.setValue(L,"batchingTexture",le._matricesTexture,_e),nn.setOptional(L,le,"batchingIdTexture"),nn.setValue(L,"batchingIdTexture",le._indirectTexture,_e),nn.setOptional(L,le,"batchingColorTexture"),le._colorsTexture!==null&&nn.setValue(L,"batchingColorTexture",le._colorsTexture,_e));const vn=ge.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Qe.update(le,ge,sn),(xn||rt.receiveShadow!==le.receiveShadow)&&(rt.receiveShadow=le.receiveShadow,nn.setValue(L,"receiveShadow",le.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(_n.envMap.value=nt,_n.flipEnvMap.value=nt.isCubeTexture&&nt.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&se.environment!==null&&(_n.envMapIntensity.value=se.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=lC()),xn&&(nn.setValue(L,"toneMappingExposure",v.toneMappingExposure),rt.needsLights&&wt(_n,Sn),Be&&re.fog===!0&&be.refreshFogUniforms(_n,Be),be.refreshMaterialUniforms(_n,re,k,O,_.state.transmissionRenderTarget[$.id]),d0.upload(L,gn(rt),_n,_e)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(d0.upload(L,gn(rt),_n,_e),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&nn.setValue(L,"center",le.center),nn.setValue(L,"modelViewMatrix",le.modelViewMatrix),nn.setValue(L,"normalMatrix",le.normalMatrix),nn.setValue(L,"modelMatrix",le.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const fn=re.uniformsGroups;for(let yn=0,Gi=fn.length;yn<Gi;yn++){const ei=fn[yn];He.update(ei,sn),He.bind(ei,sn)}}return sn}function wt($,se){$.ambientLightColor.needsUpdate=se,$.lightProbe.needsUpdate=se,$.directionalLights.needsUpdate=se,$.directionalLightShadows.needsUpdate=se,$.pointLights.needsUpdate=se,$.pointLightShadows.needsUpdate=se,$.spotLights.needsUpdate=se,$.spotLightShadows.needsUpdate=se,$.rectAreaLights.needsUpdate=se,$.hemisphereLights.needsUpdate=se}function Rt($){return $.isMeshLambertMaterial||$.isMeshToonMaterial||$.isMeshPhongMaterial||$.isMeshStandardMaterial||$.isShadowMaterial||$.isShaderMaterial&&$.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function($,se,ge){const re=Ue.get($);re.__autoAllocateDepthBuffer=$.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Ue.get($.texture).__webglTexture=se,Ue.get($.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ge,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function($,se){const ge=Ue.get($);ge.__webglFramebuffer=se,ge.__useDefaultFramebuffer=se===void 0};const Qt=L.createFramebuffer();this.setRenderTarget=function($,se=0,ge=0){w=$,T=se,y=ge;let re=!0,le=null,Be=!1,Ve=!1;if($){const nt=Ue.get($);if(nt.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(L.FRAMEBUFFER,null),re=!1;else if(nt.__webglFramebuffer===void 0)_e.setupRenderTarget($);else if(nt.__hasExternalTextures)_e.rebindTextures($,Ue.get($.texture).__webglTexture,Ue.get($.depthTexture).__webglTexture);else if($.depthBuffer){const mt=$.depthTexture;if(nt.__boundDepthTexture!==mt){if(mt!==null&&Ue.has(mt)&&($.width!==mt.image.width||$.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_e.setupDepthRenderbuffer($)}}const ft=$.texture;(ft.isData3DTexture||ft.isDataArrayTexture||ft.isCompressedArrayTexture)&&(Ve=!0);const vt=Ue.get($).__webglFramebuffer;$.isWebGLCubeRenderTarget?(Array.isArray(vt[se])?le=vt[se][ge]:le=vt[se],Be=!0):$.samples>0&&_e.useMultisampledRTT($)===!1?le=Ue.get($).__webglMultisampledFramebuffer:Array.isArray(vt)?le=vt[ge]:le=vt,R.copy($.viewport),P.copy($.scissor),I=$.scissorTest}else R.copy(ne).multiplyScalar(k).floor(),P.copy(J).multiplyScalar(k).floor(),I=he;if(ge!==0&&(le=Qt),te.bindFramebuffer(L.FRAMEBUFFER,le)&&re&&te.drawBuffers($,le),te.viewport(R),te.scissor(P),te.setScissorTest(I),Be){const nt=Ue.get($.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+se,nt.__webglTexture,ge)}else if(Ve){const nt=se;for(let ft=0;ft<$.textures.length;ft++){const vt=Ue.get($.textures[ft]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ft,vt.__webglTexture,ge,nt)}}else if($!==null&&ge!==0){const nt=Ue.get($.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,nt.__webglTexture,ge)}A=-1},this.readRenderTargetPixels=function($,se,ge,re,le,Be,Ve,at=0){if(!($&&$.isWebGLRenderTarget)){Nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=Ue.get($).__webglFramebuffer;if($.isWebGLCubeRenderTarget&&Ve!==void 0&&(nt=nt[Ve]),nt){te.bindFramebuffer(L.FRAMEBUFFER,nt);try{const ft=$.textures[at],vt=ft.format,mt=ft.type;if(!we.textureFormatReadable(vt)){Nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(mt)){Nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=$.width-re&&ge>=0&&ge<=$.height-le&&($.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+at),L.readPixels(se,ge,re,le,ct.convert(vt),ct.convert(mt),Be))}finally{const ft=w!==null?Ue.get(w).__webglFramebuffer:null;te.bindFramebuffer(L.FRAMEBUFFER,ft)}}},this.readRenderTargetPixelsAsync=async function($,se,ge,re,le,Be,Ve,at=0){if(!($&&$.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let nt=Ue.get($).__webglFramebuffer;if($.isWebGLCubeRenderTarget&&Ve!==void 0&&(nt=nt[Ve]),nt)if(se>=0&&se<=$.width-re&&ge>=0&&ge<=$.height-le){te.bindFramebuffer(L.FRAMEBUFFER,nt);const ft=$.textures[at],vt=ft.format,mt=ft.type;if(!we.textureFormatReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,$t),L.bufferData(L.PIXEL_PACK_BUFFER,Be.byteLength,L.STREAM_READ),$.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+at),L.readPixels(se,ge,re,le,ct.convert(vt),ct.convert(mt),0);const Xe=w!==null?Ue.get(w).__webglFramebuffer:null;te.bindFramebuffer(L.FRAMEBUFFER,Xe);const lt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Hw(L,lt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,$t),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Be),L.deleteBuffer($t),L.deleteSync(lt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function($,se=null,ge=0){const re=Math.pow(2,-ge),le=Math.floor($.image.width*re),Be=Math.floor($.image.height*re),Ve=se!==null?se.x:0,at=se!==null?se.y:0;_e.setTexture2D($,0),L.copyTexSubImage2D(L.TEXTURE_2D,ge,0,0,Ve,at,le,Be),te.unbindTexture()};const ni=L.createFramebuffer(),_i=L.createFramebuffer();this.copyTextureToTexture=function($,se,ge=null,re=null,le=0,Be=null){Be===null&&(le!==0?(Nl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Be=le,le=0):Be=0);let Ve,at,nt,ft,vt,mt,$t,Xe,lt;const dt=$.isCompressedTexture?$.mipmaps[Be]:$.image;if(ge!==null)Ve=ge.max.x-ge.min.x,at=ge.max.y-ge.min.y,nt=ge.isBox3?ge.max.z-ge.min.z:1,ft=ge.min.x,vt=ge.min.y,mt=ge.isBox3?ge.min.z:0;else{const vn=Math.pow(2,-le);Ve=Math.floor(dt.width*vn),at=Math.floor(dt.height*vn),$.isDataArrayTexture?nt=dt.depth:$.isData3DTexture?nt=Math.floor(dt.depth*vn):nt=1,ft=0,vt=0,mt=0}re!==null?($t=re.x,Xe=re.y,lt=re.z):($t=0,Xe=0,lt=0);const At=ct.convert(se.format),rt=ct.convert(se.type);let Vt;se.isData3DTexture?(_e.setTexture3D(se,0),Vt=L.TEXTURE_3D):se.isDataArrayTexture||se.isCompressedArrayTexture?(_e.setTexture2DArray(se,0),Vt=L.TEXTURE_2D_ARRAY):(_e.setTexture2D(se,0),Vt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,se.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,se.unpackAlignment);const St=L.getParameter(L.UNPACK_ROW_LENGTH),sn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),hn=L.getParameter(L.UNPACK_SKIP_PIXELS),xn=L.getParameter(L.UNPACK_SKIP_ROWS),Sn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,dt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ft),L.pixelStorei(L.UNPACK_SKIP_ROWS,vt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,mt);const nn=$.isDataArrayTexture||$.isData3DTexture,_n=se.isDataArrayTexture||se.isData3DTexture;if($.isDepthTexture){const vn=Ue.get($),fn=Ue.get(se),yn=Ue.get(vn.__renderTarget),Gi=Ue.get(fn.__renderTarget);te.bindFramebuffer(L.READ_FRAMEBUFFER,yn.__webglFramebuffer),te.bindFramebuffer(L.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let ei=0;ei<nt;ei++)nn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ue.get($).__webglTexture,le,mt+ei),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ue.get(se).__webglTexture,Be,lt+ei)),L.blitFramebuffer(ft,vt,Ve,at,$t,Xe,Ve,at,L.DEPTH_BUFFER_BIT,L.NEAREST);te.bindFramebuffer(L.READ_FRAMEBUFFER,null),te.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(le!==0||$.isRenderTargetTexture||Ue.has($)){const vn=Ue.get($),fn=Ue.get(se);te.bindFramebuffer(L.READ_FRAMEBUFFER,ni),te.bindFramebuffer(L.DRAW_FRAMEBUFFER,_i);for(let yn=0;yn<nt;yn++)nn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vn.__webglTexture,le,mt+yn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,vn.__webglTexture,le),_n?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,fn.__webglTexture,Be,lt+yn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,fn.__webglTexture,Be),le!==0?L.blitFramebuffer(ft,vt,Ve,at,$t,Xe,Ve,at,L.COLOR_BUFFER_BIT,L.NEAREST):_n?L.copyTexSubImage3D(Vt,Be,$t,Xe,lt+yn,ft,vt,Ve,at):L.copyTexSubImage2D(Vt,Be,$t,Xe,ft,vt,Ve,at);te.bindFramebuffer(L.READ_FRAMEBUFFER,null),te.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else _n?$.isDataTexture||$.isData3DTexture?L.texSubImage3D(Vt,Be,$t,Xe,lt,Ve,at,nt,At,rt,dt.data):se.isCompressedArrayTexture?L.compressedTexSubImage3D(Vt,Be,$t,Xe,lt,Ve,at,nt,At,dt.data):L.texSubImage3D(Vt,Be,$t,Xe,lt,Ve,at,nt,At,rt,dt):$.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Be,$t,Xe,Ve,at,At,rt,dt.data):$.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Be,$t,Xe,dt.width,dt.height,At,dt.data):L.texSubImage2D(L.TEXTURE_2D,Be,$t,Xe,Ve,at,At,rt,dt);L.pixelStorei(L.UNPACK_ROW_LENGTH,St),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,sn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,hn),L.pixelStorei(L.UNPACK_SKIP_ROWS,xn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Sn),Be===0&&se.generateMipmaps&&L.generateMipmap(Vt),te.unbindTexture()},this.initRenderTarget=function($){Ue.get($).__webglFramebuffer===void 0&&_e.setupRenderTarget($)},this.initTexture=function($){$.isCubeTexture?_e.setTextureCube($,0):$.isData3DTexture?_e.setTexture3D($,0):$.isDataArrayTexture||$.isCompressedArrayTexture?_e.setTexture2DArray($,0):_e.setTexture2D($,0),te.unbindTexture()},this.resetState=function(){T=0,y=0,w=null,te.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return va}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=cn._getDrawingBufferColorSpace(e),n.unpackColorSpace=cn._getUnpackColorSpace()}}const uC={name:"pixels-mechanic",modes:{dark:{theme:"dark",effectIndex:11,colors:["#949494","#2d2d2d","#333333","#3a3a3a","#0b0b0b","#060606","#2f2f2f"],alphas:[1,1,1,1,1,1,1],cardBg:"#0f0f0f",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.44,edgeFade:24,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:0,speed:.7,intensity:1,scale:1.4,softness:.76,distortion:.3,flicker:.5,complexity:.2,shape:.52,blur:1,highlight:.32,vignette:.26,vigOpacity:1,shaderOpacity:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"shaderColor4",softness:.5,blur:0,pixDuration:2.65,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Nebula"},light:{theme:"light",effectIndex:11,colors:["#e0e0e0","#fdfdfd","#f2f2f2","#0a0a0a","#dcdcdc","#f5f5f5","#f5f5f5"],alphas:[1,1,1,1,1,1,1],cardBg:"#f5f5f5",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.18,edgeFade:20,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:25,speed:.55,intensity:.85,scale:.9,softness:.76,distortion:.3,flicker:.5,complexity:.2,shape:.52,blur:1,highlight:.92,vignette:0,vigOpacity:0,shaderOpacity:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"shaderColor3",softness:.5,blur:0,pixDuration:2.6,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Nebula"}}},hC={name:"pixels-organic",modes:{dark:{theme:"dark",effectIndex:22,colors:["#0f0f0f","#4a4949","#b9b9b9","#0f0f0f","#d8d8d8","#0f0f0f","#2f2f2f"],alphas:[1,1,1,1,1,1,1],cardBg:"#0f0f0f",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.44,edgeFade:24,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:0,speed:.3,intensity:1,scale:1,softness:.76,distortion:.3,complexity:.2,shape:.52,blur:1,highlight:.2,vignette:.26,vigOpacity:1,shaderOpacity:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"shaderColor4",softness:.5,blur:0,pixDuration:2.65,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Chromium Flow"},light:{theme:"light",effectIndex:22,colors:["#e3e3e3","#ffffff","#f5f5f5","#f5f5f5","#080808","#f5f5f5","#f5f5f5"],alphas:[1,1,1,1,1,1,1],cardBg:"#f5f5f5",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.18,edgeFade:20,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:25,speed:.3,intensity:.85,scale:1,softness:.76,distortion:.3,complexity:.2,shape:.52,blur:1,highlight:.7,vignette:0,vigOpacity:0,shaderOpacity:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"shaderColor4",softness:.5,blur:0,pixDuration:2.55,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Chromium Flow"}}},fC={name:"sweep-gradient",modes:{dark:{theme:"dark",effectIndex:25,colors:["#0f0f0f","#0f0f0f","#282828","#3a3a3a","#525252","#0f0f0f","#0f0f0f"],alphas:[1,1,1,1,1,1,1],cardBg:"#0f0f0f",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.44,edgeFade:24,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:0,speed:2.65,intensity:1,scale:1,softness:.76,distortion:.3,flicker:.5,complexity:.2,shape:.52,blur:1,highlight:.32,vignette:.26,vigOpacity:1,shaderOpacity:1,sweepEase:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"gradientSweep",softness:.5,blur:0,pixDuration:2.65,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Gradient Sweep"},light:{theme:"light",effectIndex:25,colors:["#f5f5f5","#f5f5f5","#ededed","#eaeaea","#d2d2d2","#f5f5f5","#f5f5f5"],alphas:[1,1,1,1,1,1,1],cardBg:"#f5f5f5",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.18,edgeFade:20,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:0,speed:2.65,intensity:.85,scale:1,softness:.76,distortion:.3,flicker:.5,complexity:.2,shape:.52,blur:1,highlight:.92,vignette:0,vigOpacity:0,shaderOpacity:1,sweepEase:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"gradientSweep",softness:.5,blur:0,pixDuration:2.6,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Gradient Sweep"}}},dC={"pixels-organic":hC,"pixels-mechanic":uC,"sweep-gradient":fC},hh=dC;let sl;function pC(){if(sl!==void 0)return sl;if(typeof document>"u")return sl=null,null;const t=document.createElement("canvas");return t.width=1,t.height=1,sl=t.getContext("2d"),sl}function Eo(t){if(typeof t!="string"||t.length===0)return[0,0,0];if(t[0]==="#"){let o=t.slice(1);if(o.length===3&&(o=o[0]+o[0]+o[1]+o[1]+o[2]+o[2]),(o.length===6||o.length===8)&&/^[0-9a-fA-F]+$/.test(o))return[parseInt(o.slice(0,2),16)/255,parseInt(o.slice(2,4),16)/255,parseInt(o.slice(4,6),16)/255]}const e=pC();if(!e)return[0,0,0];e.fillStyle="#000000",e.fillStyle=t;const n=e.fillStyle;e.fillStyle="#ffffff",e.fillStyle=t;const i=e.fillStyle;if(n!==i)return[0,0,0];const a=n;if(a[0]==="#")return[parseInt(a.slice(1,3),16)/255,parseInt(a.slice(3,5),16)/255,parseInt(a.slice(5,7),16)/255];const r=a.match(/^rgba?\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)/);if(r){const o=s=>Math.max(0,Math.min(255,s))/255;return[o(parseFloat(r[1])),o(parseFloat(r[2])),o(parseFloat(r[3]))]}return[0,0,0]}const mC=`
  void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,gC=`
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
`;let $1=1e3/10,_d=1.25;const xC=2;function x2(){return typeof window>"u"?1:Math.min(window.devicePixelRatio||1,xC)}let _t=null;function bC(){return{u_resolution:{value:new pn(1,1)},u_dpr:{value:1},u_time:{value:0},u_color1:{value:new tn(1710618)},u_color2:{value:new tn(8421504)},u_color3:{value:new tn(14277081)},u_color4:{value:new tn(4210752)},u_color5:{value:new tn(12632256)},u_color6:{value:new tn(6316128)},u_color7:{value:new tn(10526880)},u_cardBg:{value:new tn(986895)},u_alpha1:{value:1},u_alpha2:{value:1},u_alpha3:{value:1},u_alpha4:{value:1},u_alpha5:{value:1},u_alpha6:{value:1},u_alpha7:{value:1},u_speed:{value:1},u_intensity:{value:1},u_scale:{value:1.5},u_direction:{value:0},u_softness:{value:.75},u_distortion:{value:.3},u_complexity:{value:.2},u_shape:{value:.5},u_flicker:{value:0},u_vignette:{value:.25},u_vigOpacity:{value:1},u_blur:{value:0},u_highlight:{value:.4},u_shaderOpacity:{value:1},u_cellSize:{value:.5},u_gap:{value:.3},u_dotSize:{value:.8},u_dotSoftness:{value:.1},u_dotOpacity:{value:1},u_hlScale:{value:0},u_fillOpacity:{value:0},u_edgeFade:{value:16},u_fadeStr:{value:1},u_dotMode:{value:2},u_effect:{value:4},u_sweepEase:{value:0}}}function vC(){if(_t)return _t;const t=document.createElement("canvas");t.width=8,t.height=8;const e=new cC({canvas:t,alpha:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!1,antialias:!1,powerPreference:"high-performance"});e.setPixelRatio(Math.min(typeof window<"u"?window.devicePixelRatio:1,_d)),e.setClearColor(0,0),e.autoClear=!0;const n=e.getContext(),i=new mS,a=new h2(-1,1,1,-1,0,1),r=bC(),o=new Sa({vertexShader:mC,fragmentShader:gC,uniforms:r,transparent:!0,depthTest:!1,depthWrite:!1,blending:wo}),s=new jl(2,2),l=new Qa(s,o);i.add(l),_t={glCanvas:t,gl:n,renderer:e,scene:i,camera:a,material:o,geometry:s,mesh:l,uniforms:r,instances:new Set,rafId:0,lastFrameMs:0,lastTickMs:performance.now(),lastInstance:null,onContextLost:null,onContextRestored:null,contextLost:!1};const c=h=>{h.preventDefault(),_t&&(_t.contextLost=!0,_t.rafId!==0&&(cancelAnimationFrame(_t.rafId),_t.rafId=0))},f=()=>{if(_t){_t.contextLost=!1,_t.lastInstance=null;for(const h of _t.instances)h.uniformsDirty=!0;Ol()}};return t.addEventListener("webglcontextlost",c,!1),t.addEventListener("webglcontextrestored",f,!1),_t.onContextLost=c,_t.onContextRestored=f,Ol(),_t}function MC(){_t&&(_t.rafId!==0&&cancelAnimationFrame(_t.rafId),_t.onContextLost&&_t.glCanvas.removeEventListener("webglcontextlost",_t.onContextLost,!1),_t.onContextRestored&&_t.glCanvas.removeEventListener("webglcontextrestored",_t.onContextRestored,!1),_t.geometry.dispose(),_t.material.dispose(),_t.renderer.dispose(),_t=null)}function _C(t,e){var n;const i=e.preset,a=t.uniforms;a.u_effect.value=i.effectIndex,a.u_speed.value=i.speed,a.u_intensity.value=i.intensity,a.u_scale.value=i.scale,a.u_direction.value=i.direction*Math.PI/180,a.u_softness.value=i.softness,a.u_distortion.value=i.distortion,a.u_complexity.value=i.complexity,a.u_shape.value=i.shape,a.u_flicker.value=i.flicker??0,a.u_vignette.value=i.vignette,a.u_vigOpacity.value=i.vigOpacity,a.u_blur.value=i.blur,a.u_highlight.value=i.highlight,a.u_shaderOpacity.value=i.shaderOpacity,a.u_dotMode.value=i.dotMode,a.u_sweepEase.value=i.sweepEase!=null?Math.floor(i.sweepEase):0;const r=i.dotMode===1?i.pixelConfig:i.dotConfig;a.u_cellSize.value=$l(r.cellSize,e.pixelScale),a.u_gap.value=r.gap,a.u_dotSize.value=r.dotSize,a.u_dotSoftness.value=r.dotSoftness,a.u_dotOpacity.value=r.dotOpacity,a.u_hlScale.value=r.hlScale,a.u_fillOpacity.value=r.fillOpacity,a.u_edgeFade.value=r.edgeFade,a.u_fadeStr.value=r.fadeStr;const[o,s,l]=Eo(e.cardBgOverride??i.cardBg);for(let c=0;c<7;c++){const f=(n=e.colorsOverride)==null?void 0:n[c],[h,u,d]=f!=null?Eo(f):p0(e,c);a[`u_color${c+1}`].value.setRGB(h,u,d),a[`u_alpha${c+1}`].value=i.alphas[c]}a.u_cardBg.value.setRGB(o,s,l),e.uniformsDirty=!1}function yC(t){return t.cardBgOverride??t.preset.cardBg}function p0(t,e){const n=t.preset,[i,a,r]=Eo(n.colors[e]);if(t.cardBgOverride==null)return[i,a,r];const[o,s,l]=Eo(n.cardBg),c=f=>Math.round(f*255);return c(i)===c(o)&&c(a)===c(s)&&c(r)===c(l)?Eo(t.cardBgOverride):[i,a,r]}function wC(t){return{iw:Math.max(1,Math.floor(t.cssWidth*t.dpr)),ih:Math.max(1,Math.floor(t.cssHeight*t.dpr))}}function b2(t){let e=0,n=0;for(const f of t.instances)!f.visible||f.paused||(f.cssWidth>e&&(e=f.cssWidth),f.cssHeight>n&&(n=f.cssHeight));if(e<=0||n<=0)return;const i=t.renderer.getPixelRatio(),a=Math.max(1,Math.floor(e*i)),r=Math.max(1,Math.floor(n*i)),o=t.glCanvas.width,s=t.glCanvas.height;if(a<=o&&r<=s)return;const l=Math.max(e,o/Math.max(i,1e-4)),c=Math.max(n,s/Math.max(i,1e-4));t.renderer.setSize(l,c,!1)}function v2(t,e,n){var i;if(t.contextLost)return;const{iw:a,ih:r}=wC(e),o=Math.max(1,e.cssWidth),s=Math.max(1,e.cssHeight);t.renderer.setViewport(0,0,o,s),t.renderer.setScissor(0,0,o,s),t.renderer.setScissorTest(!0),t.uniforms.u_resolution.value.set(a,r),t.uniforms.u_dpr.value=e.dpr||1,t.lastInstance===e&&!e.uniformsDirty||(_C(t,e),t.lastInstance=e),t.uniforms.u_time.value=e.accumulatedTime,t.renderer.render(t.scene,t.camera);const l=Math.max(1,Math.floor(e.cssWidth*e.canvasDpr)),c=Math.max(1,Math.floor(e.cssHeight*e.canvasDpr));(e.canvas.width!==l||e.canvas.height!==c)&&(e.canvas.width=l,e.canvas.height=c),e.ctx.clearRect(0,0,l,c);const f=t.glCanvas.height-r;e.ctx.imageSmoothingEnabled=!1,e.ctx.drawImage(t.glCanvas,0,f,a,r,0,0,l,c),(i=e.reveal)==null||i.afterShaderFrame(t,e,n),e.reveal&&e.reveal.isActive()&&(t.lastInstance=null)}function SC(t,e,n){!e.visible||e.paused||e.cssWidth<1||e.cssHeight<1||v2(t,e,n)}function qc(t){_t&&(_t.contextLost||t.visible&&(t.cssWidth<1||t.cssHeight<1||(b2(_t),v2(_t,t,performance.now()))))}function EC(t){for(const e of t.instances)if(e.visible&&!e.paused)return!0;return!1}const M2=t=>{if(!_t)return;if(_t.contextLost){_t.rafId=0;return}if(!EC(_t)){_t.rafId=0;return}_t.rafId=requestAnimationFrame(M2);const e=t-_t.lastFrameMs;if(e<$1)return;_t.lastFrameMs=t-e%$1;const n=(t-_t.lastTickMs)/1e3;_t.lastTickMs=t;for(const i of _t.instances)i.visible&&!i.paused&&(i.accumulatedTime+=n);b2(_t);for(const i of _t.instances)SC(_t,i,t)};function Ol(){_t&&(_t.contextLost||_t.rafId===0&&(_t.lastTickMs=performance.now(),_t.lastFrameMs=_t.lastTickMs,_t.rafId=requestAnimationFrame(M2)))}function $l(t,e){return!(e>0)||e===1?t:((6+t*74)/e-6)/74}function AC(t){const e=vC(),n=t.canvas.getContext("2d");if(!n)throw new Error("img-fx: 2D context unavailable");const i={canvas:t.canvas,ctx:n,cssWidth:t.cssWidth,cssHeight:t.cssHeight,dpr:Math.min(typeof window<"u"?window.devicePixelRatio:1,_d),canvasDpr:x2(),preset:t.preset,cardBgOverride:t.cardBg??null,colorsOverride:null,strength:t.strength??1,pixelScale:t.pixelScale!=null&&t.pixelScale>0?t.pixelScale:1,visible:!0,paused:!1,uniformsDirty:!0,reveal:null,accumulatedTime:Math.random()*1e3,startedAtMs:performance.now()};return e.instances.add(i),Ol(),i}function TC(t){var e;_t&&(_t.instances.delete(t),_t.lastInstance===t&&(_t.lastInstance=null),(e=t.reveal)==null||e.dispose(),t.reveal=null,_t.instances.size===0&&MC())}function CC(t,e,n){t.cssWidth=e,t.cssHeight=n,typeof window<"u"&&(t.dpr=Math.min(window.devicePixelRatio,_d),t.canvasDpr=x2())}function RC(t,e){t.preset=e,t.uniformsDirty=!0}function PC(t,e){t.cardBgOverride=e,t.uniformsDirty=!0}function DC(t,e){t.colorsOverride=e&&e.length>0?e.slice(0,7):null,t.uniformsDirty=!0}function IC(t,e){t.visible=e,e&&Ol()}function LC(t,e){t.paused=e,e||Ol()}function FC(t,e){t.strength=Math.max(0,Math.min(1,e))}function zC(t,e){t.pixelScale=e>0?e:1,t.uniformsDirty=!0}const k1={linear:t=>t,smoothstep:t=>t*t*(3-2*t),easeOutCubic:t=>1-Math.pow(1-t,3),easeOutQuint:t=>1-Math.pow(1-t,5),easeInOutCubic:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,easeOutExpo:t=>t===1?1:1-Math.pow(2,-10*t),easeOutBack:t=>1+(1.70158+1)*Math.pow(t-1,3)+1.70158*Math.pow(t-1,2)};function Kl(t,e){return(k1[t]??k1.smoothstep)(Math.max(0,Math.min(1,e)))}const UC=64,NC=96,Ns=320,OC=.006;function yd(t,e,n){const i=e/Math.max(1,n),a=t.width/Math.max(1,t.height);let r=0,o=0,s=t.width,l=t.height;a>i?(s=t.height*i,r=(t.width-s)/2):(l=t.width/i,o=(t.height-l)/2);const c=Math.min(s,l)*OC;return s-2*c>1&&l-2*c>1&&(r+=c,o+=c,s-=2*c,l-=2*c),{sx:r,sy:o,sw:s,sh:l}}const fh=new Map;function $C(t){let e=fh.get(t);return e||(e=new Promise((n,i)=>{const a=new Image,r=()=>n(a);a.onerror=o=>{fh.delete(t),i(o)},typeof a.decode=="function"?(a.src=t,a.decode().then(r,()=>{a.complete&&a.naturalWidth>0?r():a.onload=r})):(a.onload=r,a.src=t)}),fh.set(t,e),e)}function ra(t,e,n,i,a){let r=e==="a"?t.coverA:t.coverB;if(!r){const o=document.createElement("canvas"),s=o.getContext("2d");if(!s)throw new Error("img-fx: 2D context unavailable for cover bitmap");r={canvas:o,ctx:s,img:null,w:0,h:0},e==="a"?t.coverA=r:t.coverB=r}if(r.img!==n||r.w!==i||r.h!==a){r.canvas.width=i,r.canvas.height=a,r.w=i,r.h=a,r.img=n;const{sx:o,sy:s,sw:l,sh:c}=yd(n,i,a);r.ctx.clearRect(0,0,i,a),r.ctx.imageSmoothingEnabled=!0,r.ctx.imageSmoothingQuality="high",r.ctx.drawImage(n,o,s,l,c,0,0,i,a)}return r.canvas}function _2(t){return t.dotMode===2?NC:UC}function y2(t){const e=t.revealConfig;return t.dotMode===2?{duration:Math.max(.05,e.dotDuration),easingKey:e.dotEasing}:{duration:Math.max(.05,e.duration),easingKey:e.easing}}function kC(t,e,n,i){const a=n/(i-1),r=e/(i-1),o=a-.5,s=r-.5;switch(t){case"radialCenter":return 1-Math.sqrt(o*o+s*s)*2;case"radialCorner":return 1-Math.sqrt(a*a+r*r)/1.414;case"linearTop":return 1-r;case"linearBottom":return r;case"linearLeft":return 1-a;case"linearRight":return a;case"diagonalTL":return 1-(a+r)/2;case"diagonalBR":return(a+r)/2;case"diamond":return 1-(Math.abs(o)+Math.abs(s));case"blindsH":return 1-r*8%1;case"blindsV":return 1-a*8%1;default:return-1}}function w2(t,e,n,i,a){const r=e.uniforms.u_dotMode.value,o=e.uniforms.u_fillOpacity.value,s=n.preset.dotMode,l=s<1.5?0:1;e.uniforms.u_dotMode.value=l,e.uniforms.u_fillOpacity.value=l>.5?s===1?n.preset.pixelConfig.fillOpacity:n.preset.dotConfig.fillOpacity:0,e.renderer.render(e.scene,e.camera);const c=Math.max(1,Math.floor(n.cssWidth*n.dpr)),f=Math.max(1,Math.floor(n.cssHeight*n.dpr)),h=Math.max(0,e.glCanvas.height-f);t.sampleGpuCanvas||(t.sampleGpuCanvas=document.createElement("canvas"),t.sampleGpuCtx=t.sampleGpuCanvas.getContext("2d"));const u=t.sampleGpuCanvas,d=t.sampleGpuCtx;return(u.width!==a||u.height!==a)&&(u.width=a,u.height=a),d.clearRect(0,0,a,a),d.drawImage(e.glCanvas,0,h,c,f,0,0,a,a),i.clearRect(0,0,a,a),i.drawImage(u,0,0),e.uniforms.u_dotMode.value=r,e.uniforms.u_fillOpacity.value=o,t.sampleImgData=i.getImageData(0,0,a,a),t.sampleDataCache=t.sampleImgData.data,t.sampleDataCache}function S2(t,e){t.sampleCanvas||(t.sampleCanvas=document.createElement("canvas"),t.sampleCtx=t.sampleCanvas.getContext("2d",{willReadFrequently:!0})),(t.sampleCanvas.width!==e||t.sampleCanvas.height!==e)&&(t.sampleCanvas.width=e,t.sampleCanvas.height=e,t.sampleImgData=null,t.sampleDataCache=null,t.sampleFrameCounter=0),t.maskGrad||(t.maskGrad=document.createElement("canvas"),t.maskGradCtx=t.maskGrad.getContext("2d")),(t.maskGrad.width!==e||t.maskGrad.height!==e)&&(t.maskGrad.width=e,t.maskGrad.height=e,t.maskImgData=null),!t.maskImgData&&t.maskGradCtx&&(t.maskImgData=t.maskGradCtx.createImageData(e,e))}function BC(t,e,n,i){if(!t.image)return;const a=n.preset,r=n.canvas.width,o=n.canvas.height;(i.canvas.width!==r||i.canvas.height!==o)&&(i.canvas.width=r,i.canvas.height=o),i.clearRect(0,0,r,o);const{duration:s,easingKey:l}=y2(a),c=(performance.now()-t.revealStartMs)/1e3,f=Math.min(c/s,1),h=Kl(l,f),u=t.image,{sx:d,sy:g,sw:x,sh:m}=yd(u,r,o),p=a.revealConfig.blur;if(f<1&&p>0){const he=p*(1-h);i.canvas.style.filter=he>.1?`blur(${he.toFixed(1)}px)`:"none"}else i.canvas.style.filter="none";if(f>=1){i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.drawImage(ra(t,"a",u,r,o),0,0);return}const b=_2(a);S2(t,b);const _=t.sampleCtx,E=t.maskGrad,M=t.maskGradCtx,v=a.revealConfig.maskShape,S=a.revealConfig.softness,T=v.startsWith("shader");let y=null,w=null,A=null;if(T){const he=t.sampleFrameCounter++;t.sampleDataCache==null||(he&1)===0?y=w2(t,e,n,_,b):y=t.sampleDataCache;const H={shaderColor1:0,shaderColor2:1,shaderColor3:2,shaderColor4:3,shaderColor5:4};if(H[v]!=null&&(w=p0(n,H[v])),v==="shaderHighlight"){const N=Eo(yC(n));A=[];for(let W=0;W<5;W++){const fe=p0(n,W),j=fe[0]-N[0],ue=fe[1]-N[1],de=fe[2]-N[2];Math.sqrt(j*j+ue*ue+de*de)>.15&&A.push(fe)}A.length===0&&(A=[p0(n,0)])}}const C=1-h*(1+S),R=v==="gradientSweep";let P=0,I=0,z=2;const B=a.flicker??0;let F=null,O=null,k=0,G=0,ee=0;if(B>.003){z=Math.max(2,Math.floor(6+$l(a.pixelConfig.cellSize,n.pixelScale)*74));const he=n.accumulatedTime*Math.max(a.speed,2)*1.6,H=Math.floor(he);k=H%1024,G=(k+1)%1024,ee=he-H,ee=ee*ee*(3-2*ee);const N=(fe,j)=>{const ue=Math.sin(fe*127.1+j*17.23)*43758.5453;return ue-Math.floor(ue)};O=N;const W=z*z;(!t.gsFlickerTable||t.gsFlickerTable.length!==W)&&(t.gsFlickerTable=new Float32Array(W)),F=t.gsFlickerTable;for(let fe=0;fe<W;fe++){const j=N(fe,k)*(1-ee)+N(fe,G)*ee;F[fe]=(j-.5)*B*1.6}}R&&(P=.9/Math.max(a.scale,.25),I=-P+h*(1+2*P));const ne=t.maskImgData,J=ne.data;for(let he=0;he<b;he++)for(let H=0;H<b;H++){let N;if(T&&y){const j=(he*b+H)*4,ue=y[j]/255,de=y[j+1]/255,ae=y[j+2]/255;if(A){let Ee=0;for(const L of A){const ve=ue-L[0],me=de-L[1],we=ae-L[2],te=Math.exp(-10*(ve*ve+me*me+we*we));te>Ee&&(Ee=te)}N=Ee}else if(w){const Ee=ue-w[0],L=de-w[1],ve=ae-w[2];N=Math.exp(-8*(Ee*Ee+L*L+ve*ve))}else N=(y[j]*.299+y[j+1]*.587+y[j+2]*.114)/255}else R?N=0:N=kC(v,he,H,b);let W;if(R){const j=H/(b-1),ue=he/(b-1),de=(j+ue)*.5;W=(I+P-de)/(2*P)}else W=(N-C)/S;if(F&&W>-.5&&W<1.5){const j=W<0?0:W>1?1:W,ue=j*(1-j)*4;if(ue>.001){const de=H/(b-1),ae=he/(b-1),Ee=Math.floor(ae*z)*z+Math.floor(de*z);W+=F[Ee]*ue}}W<0?W=0:W>1&&(W=1),W=W*W*(3-2*W);const fe=(he*b+H)*4;J[fe]=255,J[fe+1]=255,J[fe+2]=255,J[fe+3]=W*255+.5|0}if(M.putImageData(ne,0,0),a.dotMode===1)WC(t,i,u,d,g,x,m,a,c,r,o,n,R?0:B,O,k,G,ee);else{a.dotMode===2?HC(t,i,u,d,g,x,m,$l(a.pixelConfig.cellSize,n.pixelScale),c,a.revealConfig.pixDuration,a.revealConfig.pixEasing,n,r,o):(i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.drawImage(ra(t,"a",u,r,o),0,0)),i.globalCompositeOperation="destination-in";const he=a.dotMode===2&&T;he&&(i.imageSmoothingEnabled=!1),i.drawImage(E,0,0,r,o),he&&(i.imageSmoothingEnabled=!0),i.globalCompositeOperation="source-over"}}function HC(t,e,n,i,a,r,o,s,l,c,f,h,u,d){const g=6+s*74,x=Math.max(1,h.cssWidth),m=Math.max(1,h.cssHeight),p=Math.max(2,Math.floor(g*x/Ns)),b=Math.max(2,Math.floor(g*m/Ns)),_=p*b,E=Math.max(.05,c),M=Math.max(0,Math.min(1,l/E)),v=Kl(f,M);t.pixCanvas||(t.pixCanvas=document.createElement("canvas"),t.pixCtx=t.pixCanvas.getContext("2d"));const S=t.pixCanvas,T=t.pixCtx;(S.width!==p||S.height!==b)&&(S.width=p,S.height=b),t.pixDrop||(t.pixDrop=document.createElement("canvas"),t.pixDropCtx=t.pixDrop.getContext("2d"));const y=t.pixDrop,w=t.pixDropCtx;if(y.width!==p||y.height!==b){y.width=p,y.height=b,t.pixDropImgData=w.createImageData(p,b);const I=t.pixDropImgData.data;for(let z=0;z<I.length;z+=4)I[z]=255,I[z+1]=255,I[z+2]=255}const A=.07,C=1/(2*A);if(!t.pixDropPattern||t.pixDropPatternW!==p||t.pixDropPatternH!==b||t.pixDropRevealStart!==t.revealStartMs){t.pixDropPattern=new Float32Array(_);const I=A,z=1-2*A;for(let B=0;B<t.pixDropPattern.length;B++)t.pixDropPattern[B]=I+Math.random()*z;t.pixDropPatternW=p,t.pixDropPatternH=b,t.pixDropRevealStart=t.revealStartMs}const R=t.pixDropImgData.data,P=t.pixDropPattern;for(let I=0;I<P.length;I++){let z=.5+(P[I]-v)*C;z<0?z=0:z>1&&(z=1),R[I*4+3]=z*255+.5|0}w.putImageData(t.pixDropImgData,0,0),T.globalCompositeOperation="source-over",T.clearRect(0,0,p,b),T.imageSmoothingEnabled=!0,T.imageSmoothingQuality="high",T.drawImage(ra(t,"a",n,u,d),0,0,u,d,0,0,p,b),T.globalCompositeOperation="destination-in",T.imageSmoothingEnabled=!1,T.drawImage(y,0,0),T.globalCompositeOperation="source-over",e.imageSmoothingEnabled=!0,e.imageSmoothingQuality="high",e.drawImage(ra(t,"a",n,u,d),0,0),e.imageSmoothingEnabled=!1,e.drawImage(S,0,0,p,b,0,0,u,d),e.imageSmoothingEnabled=!0}function WC(t,e,n,i,a,r,o,s,l,c,f,h,u,d,g,x,m){const p=6+$l(s.pixelConfig.cellSize,h.pixelScale)*74,b=Math.max(1,h.cssWidth),_=Math.max(1,h.cssHeight),E=Math.max(2,Math.floor(p*b/Ns)),M=Math.max(2,Math.floor(p*_/Ns)),v=E*M,S=Math.max(.05,s.revealConfig.pixDuration),T=Math.max(0,Math.min(1,l/S)),y=Kl(s.revealConfig.pixEasing,T);t.pixCanvas||(t.pixCanvas=document.createElement("canvas"),t.pixCtx=t.pixCanvas.getContext("2d"));const w=t.pixCanvas,A=t.pixCtx;(w.width!==E||w.height!==M)&&(w.width=E,w.height=M),t.pixDrop||(t.pixDrop=document.createElement("canvas"),t.pixDropCtx=t.pixDrop.getContext("2d"));const C=t.pixDrop,R=t.pixDropCtx;if(C.width!==E||C.height!==M){C.width=E,C.height=M,t.pixDropImgData=R.createImageData(E,M);const O=t.pixDropImgData.data;for(let k=0;k<O.length;k+=4)O[k]=255,O[k+1]=255,O[k+2]=255}const P=.07,I=1/(2*P);if(!t.pixDropPattern||t.pixDropPatternW!==E||t.pixDropPatternH!==M||t.pixDropRevealStart!==t.revealStartMs){t.pixDropPattern=new Float32Array(v);const O=P,k=1-2*P;for(let G=0;G<t.pixDropPattern.length;G++)t.pixDropPattern[G]=O+Math.random()*k;t.pixDropPatternW=E,t.pixDropPatternH=M,t.pixDropRevealStart=t.revealStartMs}const z=t.pixDropImgData.data,B=t.pixDropPattern,F=u>.003&&d!=null;for(let O=0;O<B.length;O++){const k=B[O];let G=.5+(k-y)*I;if(G<0?G=0:G>1&&(G=1),F){const ee=1-Math.abs(y-k)*6.25;if(ee>0){const ne=d(O,g)*(1-m)+d(O,x)*m;G+=(ne-.5)*u*1.6*ee,G<0?G=0:G>1&&(G=1)}}z[O*4+3]=G*255+.5|0}R.putImageData(t.pixDropImgData,0,0),A.globalCompositeOperation="source-over",A.clearRect(0,0,E,M),A.imageSmoothingEnabled=!0,A.imageSmoothingQuality="high",A.drawImage(ra(t,"a",n,c,f),0,0,c,f,0,0,E,M),A.globalCompositeOperation="destination-in",A.imageSmoothingEnabled=!1,A.drawImage(C,0,0),A.globalCompositeOperation="source-over",e.imageSmoothingEnabled=!0,e.imageSmoothingQuality="high",e.drawImage(ra(t,"a",n,c,f),0,0),e.imageSmoothingEnabled=!1,e.drawImage(w,0,0,E,M,0,0,c,f),e.imageSmoothingEnabled=!0,A.globalCompositeOperation="source-over",A.clearRect(0,0,E,M),A.imageSmoothingEnabled=!0,A.imageSmoothingQuality="high",A.drawImage(t.maskGrad,0,0,E,M),e.imageSmoothingEnabled=!1,e.globalCompositeOperation="destination-in",e.drawImage(w,0,0,E,M,0,0,c,f),e.imageSmoothingEnabled=!0,e.globalCompositeOperation="source-over"}const dh=800,ph=300,GC=1,VC=.5,XC=.03,B1=.6,H1=800,YC=400,qC=1200;function jC(t,e,n,i,a,r){var o;const s=t.image;if(!s)return;const l=n.preset,c=n.canvas.width,f=n.canvas.height;(i.canvas.width!==c||i.canvas.height!==f)&&(i.canvas.width=c,i.canvas.height=f),i.canvas.style.filter="none";const h=6+$l(l.pixelConfig.cellSize,n.pixelScale)*74,u=Math.max(1,n.cssWidth),d=Math.max(1,n.cssHeight),g=Math.max(2,Math.floor(h*u/Ns)),x=Math.max(2,Math.floor(h*d/Ns)),m=g*x,p=t.pendingReveal,b=p&&t.boilHandoffStartMs>0?r-t.boilHandoffStartMs:-1,_=U=>U*U*(3-2*U),E=b<0?0:_(Math.min(1,b/H1)),M=b<0?-1:b-H1,v=M<=0?0:_(Math.min(1,M/YC)),S=M<=0?0:Math.min(1,M/qC),T=p!=null&&M>0,y=r-t.boilStartMs,w=Math.min(1,y/dh),A=w*w*(3-2*w),C=w<1,R=Math.min(1,Math.max(0,y-(dh-ph))/ph),P=1-R*R*(3-2*R),I=Math.min(1,Math.max(0,y-(dh-ph))/(GC*1e3)),z=I*I*(3-2*I),B=z*VC;a.style.opacity=String(z),t.pixCanvas||(t.pixCanvas=document.createElement("canvas"),t.pixCtx=t.pixCanvas.getContext("2d"));const F=t.pixCanvas,O=t.pixCtx;(F.width!==g||F.height!==x)&&(F.width=g,F.height=x),t.pixDrop||(t.pixDrop=document.createElement("canvas"),t.pixDropCtx=t.pixDrop.getContext("2d"));const k=t.pixDrop,G=t.pixDropCtx;if(k.width!==g||k.height!==x||!t.pixDropImgData){k.width=g,k.height=x,t.pixDropImgData=G.createImageData(g,x);const U=t.pixDropImgData.data;for(let D=0;D<U.length;D+=4)U[D]=255,U[D+1]=255,U[D+2]=255}if(!t.boilPattern||t.boilPatternW!==g||t.boilPatternH!==x){t.boilPattern=new Float32Array(m);for(let U=0;U<m;U++)t.boilPattern[U]=Math.random();t.boilPatternW=g,t.boilPatternH=x}const ee=Math.max(l.flicker??0,.5),ne=n.accumulatedTime*Math.max(l.speed,2)*1.6,J=Math.floor(ne),he=J%1024,H=(he+1)%1024;let N=ne-J;N=N*N*(3-2*N);const W=(U,D)=>{const V=Math.sin(U*127.1+D*17.23)*43758.5453;return V-Math.floor(V)},fe=t.pixDropImgData.data,j=t.boilPattern,ue=_2(l);S2(t,ue);const de=t.sampleFrameCounter++,ae=t.sampleDataCache==null||de%3===0,Ee=!t.boilField||t.boilField.length!==m,L=ae?w2(t,e,n,t.sampleCtx,ue):t.sampleDataCache;if(ae||Ee){Ee&&(t.boilField=new Float32Array(m));const U=t.boilField;let D=1,V=0;for(let q=0;q<x;q++){const Z=Math.min(ue-1,(q+.5)*ue/x|0);for(let be=0;be<g;be++){const Me=Math.min(ue-1,(be+.5)*ue/g|0),Fe=(Z*ue+Me)*4,Pe=(L[Fe]*.299+L[Fe+1]*.587+L[Fe+2]*.114)/255;U[q*g+be]=Pe,Pe<D&&(D=Pe),Pe>V&&(V=Pe)}}const pe=V-D>.001?1/(V-D):0;for(let q=0;q<m;q++)U[q]=pe>0?(U[q]-D)*pe:.5}const ve=t.boilField,me=1/(2*XC),we=ee*.6*(1-S),te=1-B1,qe=T?Kl(l.revealConfig.pixEasing,S):0,Ue=1/(2*.07),_e=l.flicker??0;for(let U=0;U<m;U++){const D=W(U,he)*(1-N)+W(U,H)*N;let V=.5+(ve[U]*B1+j[U]*te+(D-.5)*we-B)*me;if(V<0?V=0:V>1&&(V=1),C){const pe=j[U];let q=.5+(A-pe)*Ue;q<0?q=0:q>1&&(q=1);const Z=1-Math.abs(A-pe)*6.25;Z>0&&(q+=(D-.5)*ee*1.6*Z,q<0?q=0:q>1&&(q=1)),q<V&&(V=q)}if(T){const pe=j[U];let q=.5+(pe-qe)*Ue;if(q<0?q=0:q>1&&(q=1),_e>.003){const Z=1-Math.abs(qe-pe)*6.25;Z>0&&(q+=(D-.5)*_e*1.6*Z,q<0?q=0:q>1&&(q=1))}q<V&&(V=q)}fe[U*4+3]=V*255+.5|0}G.putImageData(t.pixDropImgData,0,0),yd(s,c,f),O.globalCompositeOperation="source-over",O.clearRect(0,0,g,x),O.imageSmoothingEnabled=!0,O.imageSmoothingQuality="high",E<1&&O.drawImage(ra(t,"a",s,c,f),0,0,c,f,0,0,g,x),p&&E>0&&(O.globalAlpha=E,O.drawImage(ra(t,"b",p.image,c,f),0,0,c,f,0,0,g,x),O.globalAlpha=1),O.globalCompositeOperation="destination-in",O.imageSmoothingEnabled=!1,O.drawImage(k,0,0),O.globalCompositeOperation="source-over",i.clearRect(0,0,c,f),C&&P>0?(i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.globalAlpha=P,i.drawImage(ra(t,"a",s,c,f),0,0),i.globalAlpha=1):T&&p&&v>0&&(i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.globalAlpha=v,i.drawImage(ra(t,"b",p.image,c,f),0,0),i.globalAlpha=1),i.imageSmoothingEnabled=!1,i.drawImage(F,0,0,g,x,0,0,c,f),i.imageSmoothingEnabled=!0,T&&p&&S>=1&&v>=1&&(t.image=p.image,t.pendingReveal=null,t.boilHandoffStartMs=0,t.holdPaintedImg=null,t.phase="hold",a.style.opacity="0",(o=t.onRevealComplete)==null||o.call(t))}function KC(t){const e=t.canvas.getContext("2d");if(!e)throw new Error("img-fx: 2D context unavailable for reveal canvas");const n={active:!1,phase:"idle",revealStartMs:0,hideStartMs:0,hideDurationMs:300,boilStartMs:0,boilPattern:null,boilPatternW:0,boilPatternH:0,boilField:null,boilHandoffStartMs:0,pendingReveal:null,image:null,cssWidth:t.cssWidth,cssHeight:t.cssHeight,sampleCanvas:null,sampleCtx:null,sampleImgData:null,sampleDataCache:null,sampleFrameCounter:0,maskGrad:null,maskGradCtx:null,maskImgData:null,gsFlickerTable:null,pixCanvas:null,pixCtx:null,pixDrop:null,pixDropCtx:null,pixDropImgData:null,pixDropPattern:null,pixDropPatternW:0,pixDropPatternH:0,pixDropRevealStart:-1,coverA:null,coverB:null,holdPaintedImg:null,holdPaintedW:0,holdPaintedH:0,sampleGpuCanvas:null,sampleGpuCtx:null},i=t.shaderCanvas;function a(r){n.image=r.image,n.cssWidth=r.cssWidth,n.cssHeight=r.cssHeight,n.onRevealComplete=r.onRevealComplete,n.revealStartMs=performance.now(),n.phase="reveal",n.active=!0,n.boilHandoffStartMs=0,n.pendingReveal=null,n.sampleFrameCounter=0,n.sampleDataCache=null,n.holdPaintedImg=null,e.canvas.style.opacity="1"}return{canvas:t.canvas,ctx:e,afterShaderFrame(r,o,s){var l;if(n.cssWidth=o.cssWidth,n.cssHeight=o.cssHeight,!n.active){e.canvas.style.filter="none";return}const{duration:c,easingKey:f}=y2(o.preset);if(n.phase==="reveal"&&n.image){const h=(s-n.revealStartMs)/1e3,u=Math.min(h/c,1),d=Kl(f,u);i.style.opacity=String(1-d),BC(n,r,o,e),u>=1&&(n.phase="hold",i.style.opacity="0",(l=n.onRevealComplete)==null||l.call(n))}else if(n.phase==="hold"&&n.image){e.canvas.style.filter="none";const h=n.image,u=o.canvas.width,d=o.canvas.height;(e.canvas.width!==u||e.canvas.height!==d)&&(e.canvas.width=u,e.canvas.height=d,n.holdPaintedImg=null),(n.holdPaintedImg!==h||n.holdPaintedW!==u||n.holdPaintedH!==d)&&(e.clearRect(0,0,u,d),e.globalCompositeOperation="source-over",e.globalAlpha=1,e.imageSmoothingEnabled=!0,e.imageSmoothingQuality="high",e.drawImage(ra(n,"a",h,u,d),0,0),n.holdPaintedImg=h,n.holdPaintedW=u,n.holdPaintedH=d),i.style.opacity="0"}else if(n.phase==="boil"&&n.image)jC(n,r,o,e,i,s);else if(n.phase==="hide"){const h=s-n.hideStartMs,u=Math.min(h/Math.max(1,n.hideDurationMs),1),d=1-u;e.canvas.style.opacity=String(d),i.style.opacity=String(u),u>=1&&(n.active=!1,n.phase="idle",e.canvas.style.opacity="1",e.clearRect(0,0,e.canvas.width,e.canvas.height),i.style.opacity="1",n.image=null)}},startReveal(r){if(n.phase==="boil"&&n.active){n.pendingReveal=r,n.onRevealComplete=r.onRevealComplete,n.cssWidth=r.cssWidth,n.cssHeight=r.cssHeight,n.boilHandoffStartMs===0&&(n.boilHandoffStartMs=performance.now());return}a(r)},startHide(r=300){!n.active||n.phase==="hide"||(n.phase="hide",n.hideStartMs=performance.now(),n.hideDurationMs=r)},startBoil(){!n.active||!n.image||n.phase!=="hold"&&n.phase!=="reveal"||(n.phase="boil",n.boilStartMs=performance.now(),n.boilHandoffStartMs=0,n.pendingReveal=null,n.boilPattern=null,n.sampleFrameCounter=0,n.sampleDataCache=null,n.holdPaintedImg=null,e.canvas.style.opacity="1")},clear(){const r=n.active;n.active=!1,n.phase="idle",n.image=null,n.boilHandoffStartMs=0,n.pendingReveal=null,n.holdPaintedImg=null,e.clearRect(0,0,e.canvas.width,e.canvas.height),r&&(e.canvas.style.filter="none",e.canvas.style.opacity="1",i.style.opacity="1")},isActive(){return n.active},dispose(){n.image=null,n.sampleCanvas=null,n.sampleCtx=null,n.sampleImgData=null,n.sampleDataCache=null,n.sampleFrameCounter=0,n.maskGrad=null,n.maskGradCtx=null,n.maskImgData=null,n.gsFlickerTable=null,n.pixCanvas=null,n.pixCtx=null,n.pixDrop=null,n.pixDropCtx=null,n.pixDropImgData=null,n.pixDropPattern=null,n.boilPattern=null,n.boilField=null,n.pendingReveal=null,n.coverA=null,n.coverB=null,n.holdPaintedImg=null,n.sampleGpuCanvas=null,n.sampleGpuCtx=null}}}function W1(t,e){if(t.length===0)return null;if(t.length===1)return{src:t[0],idx:0};let n;do n=Math.floor(Math.random()*t.length);while(n===e);return{src:t[n],idx:n}}function ZC(t){let e=t.images.slice(),n=t.delayRange,i=t.holdMs,a=t.fadeOutMs,r=t.onPhase,o=t.excludeSrcs,s="idle",l=null,c=-1,f=!1,h=!1,u=null,d=!1,g="auto";function x(S){s=S,r?.({phase:S,src:u})}function m(){l!=null&&(clearTimeout(l),l=null)}function p(){if(typeof i=="number")return Math.max(0,i);const[S,T]=i,y=Math.max(0,Math.min(S,T)),w=Math.max(0,Math.max(S,T));return y+Math.random()*(w-y)}function b(S){if(!f||h)return;x("idle");const[T,y]=n,w=T+Math.random()*Math.max(0,y-T),A=S??w*1e3;m(),l=setTimeout(()=>{l=null,M(!0,"auto")},A)}function _(){h||(x("hide"),t.reveal.startHide(a),m(),l=setTimeout(()=>{l=null,!h&&(u=null,d?b():(f=!1,x("idle")))},a))}function E(){if(e.length===0)return null;const S=o?.(),T=S==null?null:S instanceof Set?S:new Set(S);if(!T||T.size===0)return W1(e,c);const y=c>=0&&c<e.length?e[c]:null,w=[];for(let C=0;C<e.length;C++){const R=e[C];T.has(R)||R===y&&e.length>T.size+1||w.push(C)}if(w.length===0)return W1(e,c);const A=w[Math.floor(Math.random()*w.length)];return{src:e[A],idx:A}}function M(S,T){if(!f||h)return;if(e.length===0){S?b(500):f=!1;return}const y=E();if(!y){S?b(500):f=!1;return}c=y.idx,u=y.src,d=S,g=T,$C(y.src).then(w=>{!f||h||(x("reveal"),t.reveal.startReveal({image:w,cssWidth:t.reveal.canvas.clientWidth||t.reveal.canvas.width,cssHeight:t.reveal.canvas.clientHeight||t.reveal.canvas.height,onRevealComplete:()=>{if(!f||h)return;if(x("visible"),T==="manual"){m();return}m();const A=p();l=setTimeout(()=>{l=null,!(!f||h)&&_()},A)}}))}).catch(()=>{u=null,S?b(500):f=!1})}function v(S){if(h||s==="reveal"||s==="visible"||s==="hide")return;const T=f;m(),T||(f=!0),M(T,S?.hold??"auto")}return{start(){if(f)return;f=!0,h=!1;const S=t.initialDelayMs??Math.random()*1500;b(S)},stop(){f=!1,m(),t.reveal.clear(),u=null,s="idle"},triggerOnce(S){v(S)},triggerHide(){h||s!=="reveal"&&s!=="visible"||_()},triggerBoil(S){if(h||s!=="reveal"&&s!=="visible")return;m(),t.reveal.startBoil(),u=null,f=!1,x("idle");const T=S?.autoRevealAfterMs;T!=null&&Number.isFinite(T)&&(l=setTimeout(()=>{l=null,v({hold:"manual"})},Math.max(0,T)))},getPhase(){return s},setPaused(S){if(h!==S){if(h=S,h)m();else if(f)if(s==="visible"){if(g==="manual")return;m(),l=setTimeout(()=>{l=null,_()},Math.min(p(),500))}else s==="hide"?(m(),l=setTimeout(()=>{l=null,u=null,b()},a)):b()}},setImages(S){e=S.slice(),c=-1},setExcludeSrcs(S){o=S??void 0},setOptions(S){S.delayRange&&(n=S.delayRange),S.holdMs!=null&&(i=S.holdMs),S.fadeOutMs!=null&&(a=S.fadeOutMs),S.onPhase&&(r=S.onPhase)},isRunning(){return f&&!h},dispose(){f=!1,m()}}}const G1=(t,e,n)=>.299*t+.587*e+.114*n,V1=(t,e,n)=>`#${[t,e,n].map(i=>Math.round(i).toString(16).padStart(2,"0")).join("")}`,pr=24;let jc=null,mh=null;function JC(){return mh||(typeof document>"u"?null:(jc=document.createElement("canvas"),jc.width=pr,jc.height=pr,mh=jc.getContext("2d",{willReadFrequently:!0}),mh))}function QC(t,e){if(t.width===0||t.height===0)return null;const n=JC();if(!n)return null;n.imageSmoothingEnabled=!0,n.clearRect(0,0,pr,pr),n.drawImage(t,0,0,pr,pr);let i;try{i=n.getImageData(0,0,pr,pr).data}catch{return null}const a=[];let r=0,o=0,s=0;for(let h=0;h<i.length;h+=4){if(i[h+3]<8)continue;const u=i[h],d=i[h+1],g=i[h+2];a.push({r:u,g:d,b:g,lum:G1(u,d,g)}),r+=u,o+=d,s+=g}if(a.length===0)return null;a.sort((h,u)=>h.lum-u.lum);const l=V1(r/a.length,o/a.length,s/a.length),c=e.map((h,u)=>{const[d,g,x]=Eo(h);return{slot:u,lum:G1(d,g,x)}}).sort((h,u)=>h.lum-u.lum),f=new Array(c.length);for(let h=0;h<c.length;h++){const u=.05+.9*h/Math.max(1,c.length-1),d=a[Math.min(a.length-1,Math.round(u*(a.length-1)))];f[c[h].slot]=V1(d.r,d.g,d.b)}return{colors:f,cardBg:l}}const X1="img-fx-styles",eR=`
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
`;let gh=!1;function E2(){if(typeof document>"u"||gh)return;if(document.getElementById(X1)){gh=!0;return}const t=document.createElement("style");t.id=X1,t.textContent=eR,document.head.appendChild(t),gh=!0}E2();function Y1(){if(typeof document>"u")return"dark";const t=document.documentElement,e=t.getAttribute("data-theme");if(e==="dark"||e==="light")return e;if(t.classList.contains("dark"))return"dark";if(t.classList.contains("light"))return"light";const n=t.style.colorScheme||getComputedStyle(t).colorScheme;return n==="dark"?"dark":n==="light"?"light":typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark"}function tR(t){const[e,n]=ie.useState(()=>t!=="auto"?t:Y1());return ie.useEffect(()=>{if(t!=="auto"){n(t);return}if(typeof window>"u")return;const i=()=>n(Y1());i();const a=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null;a?.addEventListener("change",i);let r=null;return typeof document<"u"&&typeof MutationObserver<"u"&&(r=new MutationObserver(i),r.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]})),()=>{a?.removeEventListener("change",i),r?.disconnect()}},[t]),e}function nR(t){return t?typeof t=="string"?[t]:t.slice():[]}const Hf=["pixels-mechanic","pixels-organic"];function iR(t){return Hf.includes(t)}const A2=ie.forwardRef(function({children:t,preset:e="pixels-organic",theme:n="auto",strength:i=1,pixelScale:a=1,cardBg:r,colors:o,images:s,autoReveal:l=!1,revealDelayRange:c=[2,4],revealInitialDelay:f,revealHoldMs:h=2e3,revealFadeOutMs:u=300,borderRadius:d,paused:g=!1,onCycle:x,excludeSrcs:m,className:p,style:b,..._},E){const M=ie.useRef(null),v=ie.useRef(null),S=ie.useRef(null),T=ie.useRef(null),y=ie.useRef(null),w=ie.useRef(null),A=ie.useRef(null),C=ie.useRef(x),R=ie.useRef(m),[P,I]=ie.useState(null),[z,B]=ie.useState(null);ie.useImperativeHandle(E,()=>({get element(){return M.current},triggerReveal(de){var ae;(ae=A.current)==null||ae.triggerOnce(de)},triggerHide(){var de;(de=A.current)==null||de.triggerHide()},triggerRegenerate(de){const ae=A.current;if(!ae||J.current)return;const Ee=ae.getPhase();if(Ee!=="reveal"&&Ee!=="visible")return;const L=ee.current,ve=iR(L)?null:Hf[Math.floor(Math.random()*Hf.length)];if(de?.tintFromImage??!0){const we=S.current;if(we){const te=ve?hh[ve].modes[ne.current].colors:G.current.colors,qe=QC(we,te);qe&&I(qe)}}ve&&B(ve);const me=de?.autoReveal??!0;ae.triggerBoil(me?{autoRevealAfterMs:de?.durationMs??4e3}:void 0)},isImageActive(){var de;const ae=((de=A.current)==null?void 0:de.getPhase())??"idle";return ae==="reveal"||ae==="visible"||ae==="hide"}}),[]),ie.useLayoutEffect(()=>{E2()},[]),ie.useEffect(()=>{C.current=x},[x]),ie.useEffect(()=>{R.current=m},[m]);const F=tR(n),O=ie.useMemo(()=>hh[e].modes[F],[e,F]),k=r??O.cardBg,G=ie.useRef(O);G.current=O;const ee=ie.useRef(e);ee.current=e;const ne=ie.useRef(F);ne.current=F;const J=ie.useRef(g);J.current=g;const he=ie.useMemo(()=>nR(s),[s]),H=ie.useRef(he),N=ie.useRef(c),W=ie.useRef(h),fe=ie.useRef(u);H.current=he,N.current=c,W.current=h,fe.current=u;const j=ie.useRef(ie.useMemo(()=>{if(f==null)return;if(typeof f=="number")return Math.max(0,f)*1e3;const[de,ae]=f,Ee=Math.max(0,Math.min(de,ae)),L=Math.max(0,Math.max(de,ae));return(Ee+Math.random()*(L-Ee))*1e3},[]));ie.useLayoutEffect(()=>{var de;const ae=M.current,Ee=v.current,L=S.current;if(!ae||!Ee||!L)return;const ve=()=>{var Fe;const Pe=ae.getBoundingClientRect(),Ae=Math.max(1,Math.round(Pe.width)),De=Math.max(1,Math.round(Pe.height));let Qe=0;if(typeof d=="number")Qe=d;else{const ot=(Fe=T.current)==null?void 0:Fe.firstElementChild;if(ot){const ke=parseFloat(getComputedStyle(ot).borderTopLeftRadius);Number.isFinite(ke)&&ke>0&&(Qe=ke)}if(Qe===0){const ke=parseFloat(getComputedStyle(ae).borderTopLeftRadius);Number.isFinite(ke)&&ke>0&&(Qe=ke)}}return{w:Ae,h:De,r:Qe}},me=ve(),we=AC({canvas:Ee,cssWidth:me.w,cssHeight:me.h,preset:O,strength:i,cardBg:r??null,pixelScale:a});y.current=we,we.canvas.style.opacity=String(Math.max(0,Math.min(1,i)));const te=KC({canvas:L,cssWidth:me.w,cssHeight:me.h,shaderCanvas:Ee});we.reveal=te,w.current=te;const qe=ZC({reveal:te,images:H.current,delayRange:N.current,holdMs:W.current,fadeOutMs:fe.current,initialDelayMs:j.current,onPhase:Fe=>{var Pe;Fe.phase==="visible"&&(I(null),B(null)),(Pe=C.current)==null||Pe.call(C,Fe)},excludeSrcs:()=>{var Fe;return((Fe=R.current)==null?void 0:Fe.call(R))??null}});A.current=qe,g&&qe.setPaused(!0),ae.style.setProperty("--image-gen-radius",`${me.r}px`),ae.style.borderRadius=`${me.r}px`;let Ue=0,_e=-1,U=-1,D=-1;const V=()=>{Ue=0;const Fe=y.current;if(!Fe)return;const Pe=ve();(Pe.w!==_e||Pe.h!==U)&&(CC(Fe,Pe.w,Pe.h),_e=Pe.w,U=Pe.h),Pe.r!==D&&(ae.style.setProperty("--image-gen-radius",`${Pe.r}px`),ae.style.borderRadius=`${Pe.r}px`,D=Pe.r)},pe=()=>{Ue===0&&(Ue=requestAnimationFrame(V))},q=new ResizeObserver(pe);q.observe(ae);const Z=(de=T.current)==null?void 0:de.firstElementChild;Z&&q.observe(Z);let be=null;Z&&typeof MutationObserver<"u"&&(be=new MutationObserver(pe),be.observe(Z,{attributes:!0,attributeFilter:["class","style"]})),_e=me.w,U=me.h,D=me.r;let Me=null;return typeof IntersectionObserver<"u"&&(Me=new IntersectionObserver(Fe=>{const Pe=y.current;if(Pe)for(const Ae of Fe)IC(Pe,Ae.isIntersecting)},{rootMargin:"64px"}),Me.observe(ae)),()=>{var Fe;q.disconnect(),be?.disconnect(),Me?.disconnect(),Ue!==0&&cancelAnimationFrame(Ue),(Fe=A.current)==null||Fe.dispose(),A.current=null,te.dispose(),w.current=null;const Pe=y.current;Pe&&TC(Pe),y.current=null}},[]),ie.useEffect(()=>{const de=y.current;if(!de)return;const ae=z?hh[z].modes[F]:O;RC(de,ae),qc(de)},[O,z,F]),ie.useEffect(()=>{const de=y.current;de&&(PC(de,P?.cardBg??r??null),qc(de))},[r,P]),ie.useEffect(()=>{const de=y.current;de&&(DC(de,P?.colors??o??null),qc(de))},[o,P]),ie.useEffect(()=>{const de=y.current;de&&(FC(de,i),de.canvas&&(de.canvas.style.opacity=String(Math.max(0,Math.min(1,i)))))},[i]),ie.useEffect(()=>{const de=y.current;de&&(zC(de,a),qc(de))},[a]),ie.useEffect(()=>{var de;const ae=y.current;ae&&LC(ae,g),(de=A.current)==null||de.setPaused(g)},[g]),ie.useEffect(()=>{var de;(de=A.current)==null||de.setImages(he)},[he]),ie.useEffect(()=>{var de;(de=A.current)==null||de.setOptions({delayRange:c,holdMs:h,fadeOutMs:u})},[c,h,u]),ie.useEffect(()=>{const de=A.current;if(de){if(l)return de.start(),()=>de.stop();de.stop()}},[l]);const ue=ie.useMemo(()=>({background:P?.cardBg??k,...b}),[k,P,b]);return K.jsxs("div",{..._,ref:M,className:["image-gen-root",p].filter(Boolean).join(" "),"data-preset":e,"data-theme":F,"data-paused":g?"true":void 0,style:ue,children:[K.jsx("canvas",{ref:v,className:"image-gen-shader","aria-hidden":"true"}),K.jsx("canvas",{ref:S,className:"image-gen-overlay","aria-hidden":"true"}),K.jsx("div",{ref:T,className:"image-gen-child",children:t})]})});A2.displayName="ImageGeneration";const q1=["searching","working","solving","listening","connecting","weaving","composing","breathing","shaping"];function aR(){const[t,e]=ie.useState(0);ie.useEffect(()=>{const i=setInterval(()=>e(a=>(a+1)%q1.length),2e3);return()=>clearInterval(i)},[]);const n=q1[t];return K.jsx(xo,{children:K.jsxs("div",{className:"flex flex-col items-center gap-3",children:[K.jsx(tv,{state:n,size:64,theme:"dark"}),K.jsx("p",{className:"text-xs text-[#8f877c]",children:n})]})})}function rR(){const[t,e]=ie.useState(!1);return ie.useEffect(()=>{const n=setInterval(()=>e(i=>!i),1800);return()=>clearInterval(n)},[]),K.jsx(xo,{children:K.jsx("div",{className:"relative h-44 w-44 pointer-events-auto",onClick:()=>e(n=>!n),children:K.jsxs(hc,{blur:8,contrast:20,fill:"#f2eee6",children:[K.jsx(hc.Item,{x:0,y:0,children:K.jsx("div",{className:"grid h-14 w-14 place-items-center rounded-full bg-[#f2eee6] text-[#0c0b09] text-sm font-medium",children:"+"})}),K.jsx(hc.Item,{x:t?-52:0,y:t?-36:0,transition:"bouncy",children:K.jsx("div",{className:"grid h-11 w-11 place-items-center rounded-full bg-[#e07a3d] text-white text-xs",children:"A"})}),K.jsx(hc.Item,{x:t?52:0,y:t?-36:0,transition:"bouncy",delay:40,children:K.jsx("div",{className:"grid h-11 w-11 place-items-center rounded-full bg-[#f0c37a] text-[#0c0b09] text-xs",children:"B"})})]})})})}function oR(){const[t,e]=ie.useState(0);ie.useEffect(()=>{let i=0;const a=()=>{e(performance.now()),i=requestAnimationFrame(a)};return i=requestAnimationFrame(a),()=>cancelAnimationFrame(i)},[]);const n=()=>(Math.sin(t/220)*.5+.5)*.85;return K.jsx(xo,{children:K.jsx(V5,{level:n,type:"pill",children:K.jsx("div",{style:{padding:"28px 36px",borderRadius:24,background:"#1d1b16",border:"1px solid #2a2620",minWidth:260,color:"#f2eee6",textAlign:"center"},children:"语音光晕"})})})}function sR(){const[t,e]=ie.useState(!0);return ie.useEffect(()=>{const n=setInterval(()=>e(i=>!i),2200);return()=>clearInterval(n)},[]),K.jsx(xo,{children:K.jsxs("div",{className:"flex items-end gap-4",children:[K.jsx(Fu,{type:"clover",state:t?"working":"default"}),K.jsx(Fu,{type:"droid",state:t?"working":"default"}),K.jsx(Fu,{type:"cat",state:t?"working":"default"})]})})}const uR={"libraries-border-beam":()=>K.jsx(xo,{children:K.jsx(cb,{size:"md",children:K.jsxs("div",{style:{padding:"36px 40px",borderRadius:18,background:"#1d1b16",minWidth:240,textAlign:"center"},children:[K.jsx("p",{className:"text-lg font-medium",children:"Border Beam"}),K.jsx("p",{className:"mt-1 text-sm text-[#8f877c]",children:"光沿边框走一圈"})]})})}),"libraries-thinking-orbs":()=>K.jsx(aR,{}),"libraries-metal-fx":()=>K.jsx(xo,{children:K.jsx(Vg,{variant:"button",preset:"chromatic",theme:"dark",children:K.jsx("button",{type:"button",className:"pointer-events-auto rounded-full px-6 py-2.5 text-sm font-medium text-white",style:{background:"#161410"},children:"Upgrade"})})}),"libraries-liquid-gooey":()=>K.jsx(rR,{}),"libraries-voice-glow":()=>K.jsx(oR,{}),"libraries-bot-avatars":()=>K.jsx(sR,{}),"libraries-img-fx":()=>K.jsx(xo,{children:K.jsx(A2,{preset:"pixels-organic",images:["./previews/fx-a.svg","./previews/fx-b.svg"],children:K.jsx("div",{style:{width:260,height:200,borderRadius:20,background:"#1c1a15"}})})})};export{uR as librariesPreviews};
