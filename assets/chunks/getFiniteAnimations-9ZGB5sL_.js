function r(t,n){return t.getAnimations(n).filter(e=>{const i=e.effect?.getTiming();return i?.duration!==1/0&&i?.iterations!==1/0})}export{r as g};
