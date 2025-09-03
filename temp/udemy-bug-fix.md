#### code to fix rewind bug in udemy video
copy the code and paste that in url query field to enable the code in your tab.


```
javascript:(function(){"use strict";if(window.__uvr_loaded)return;window.__uvr_loaded=true;function rewind(){const videos=[...document.querySelectorAll("video")];const activeVideo=videos.find(x=>!x.paused&&x.readyState>0)||videos.find(x=>x.readyState>0)||videos[0];if(!activeVideo)return false;let currentTime=activeVideo.currentTime||0;activeVideo.currentTime=Math.max(0,currentTime-5);popup();return true}function popup(){const popupDiv=document.createElement("div");popupDiv.textContent="⏮ -5s";Object.assign(popupDiv.style,{position:"fixed",bottom:"20%",left:"50%",transform:"translateX(-50%)",background:"rgba(0,0,0,0.7)",color:"#fff",padding:"8px 14px",borderRadius:"8px",fontSize:"18px",zIndex:99999,transition:"opacity .5s",opacity:"1"});document.body.appendChild(popupDiv);setTimeout(()=>{popupDiv.style.opacity="0"},400);setTimeout(()=>{popupDiv.remove()},900)}window.addEventListener("click",e=>{if(e.ctrlKey&&e.button===0){e.preventDefault();rewind()}},false);window.addEventListener("keydown",e=>{if(e.key!=="ArrowLeft"||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)return;const target=e.target;if(target&&((target.tagName&&/^(INPUT|TEXTAREA|SELECT|BUTTON)$/i.test(target.tagName))||target.isContentEditable))return;if(rewind())e.preventDefault()},false)})();
```

#### references
[reddit](https://www.reddit.com/r/Udemy/comments/1n4rmej/temp_fix_udemy_video_rewind_issue/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)
[github](https://github.com/desnic-dev/udemy-rewind-bookmarklet/releases/tag/v1.0.0)