"use strict";(self.webpackChunkna_docs_site=self.webpackChunkna_docs_site||[]).push([[2907],{7203:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=i(5893),o=i(1151);const s={title:"Quick Start Guide"},a="Quick Start Guide",r={id:"suresight/quickstart",title:"Quick Start Guide",description:"Lets start simple with applying a preset, later in the guide we will go into making a custom sight.",source:"@site/docs/02_suresight/02_quickstart.md",sourceDirName:"02_suresight",slug:"/suresight/quickstart",permalink:"/suresight/quickstart",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Quick Start Guide"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/suresight/introduction"},next:{title:"Material Inspector",permalink:"/category/material-inspector"}},h={},d=[{value:"Importing the Asset",id:"importing-the-asset",level:2},{value:"Applying a Preset",id:"applying-a-preset",level:2},{value:"Creating a Sight From Scratch",id:"creating-a-sight-from-scratch",level:2},{value:"Creating the assets",id:"creating-the-assets",level:3},{value:"Making A New Material",id:"making-a-new-material",level:3},{value:"Creating the Mesh",id:"creating-the-mesh",level:3},{value:"Wrapping Up",id:"wrapping-up",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"quick-start-guide",children:"Quick Start Guide"}),"\n",(0,n.jsx)(t.p,{children:"Lets start simple with applying a preset, later in the guide we will go into making a custom sight."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Should you have any problems following along feel free to reach out on the ",(0,n.jsx)(t.a,{href:"https://discord.gg/gApGthAqbn",children:"Discord"})," server for help."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"importing-the-asset",children:"Importing the Asset"}),"\n",(0,n.jsxs)(t.p,{children:["Thanks for downloading! To add it into your unity project you simply need to drag the .unitypackage file into the unity window. ",(0,n.jsx)(t.strong,{children:"MAKE SURE"})," your project was created using the VRChat Creator Companion as it will have essential settings in unity already set and ready to go."]}),"\n",(0,n.jsxs)(t.p,{children:["Should you be using this asset outside of VRChat make sure your project color space is on ",(0,n.jsx)(t.strong,{children:"Linear"})," not Gamma."]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"How to set your project color space to Linear."}),(0,n.jsxs)("div",{children:[(0,n.jsx)(t.p,{children:"Open up your unity project and navigate to your Project Settings (Edit > Project Settings). Under project settings look for Player and Other Settings then set the color space to Linear from Gamma and restart your Unity."}),(0,n.jsx)("br",{}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Unity Preview",src:i(3893).Z+"",width:"735",height:"559"})})]})]}),"\n",(0,n.jsx)(t.h2,{id:"applying-a-preset",children:"Applying a Preset"}),"\n",(0,n.jsx)(t.p,{children:"Suresight comes with a wide selection of presets, lets go with the preset labeled Accuracy. You can find it in Nebula Animations > Suresight > Scope Prefabs."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Scope Preview",src:i(4318).Z+"",width:"130",height:"159"})}),"\n",(0,n.jsx)(t.p,{children:"Once you have found the prefab drag and drop it into the scene."}),"\n",(0,n.jsx)(t.p,{children:"After doing so while you are in the same folder locate the Depth_Get prefab. You only need 1 Get_Depth for your avatar or world so if another asset you are using includes one feel free to skip adding it."}),"\n",(0,n.jsx)(t.p,{children:"If you can confirm another asset does not already have one added then drag and drop the prefab onto the Sight or into the world scene."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"For avatars make sure it is attached to any other component that will be loaded with the avatar to ensure the shader functions properly."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"You may notice the prefab is not in an easy spot to reach to move it to the avatar or world location desired. You can press F to focus on the prsefab or you can go to the inspector window and reset the position to 0,0,0 aka the world center point."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Reset Position",src:i(1768).Z+"",width:"982",height:"794"})}),"\n",(0,n.jsx)(t.p,{children:"Once you can see the sight make any modifications you would like now and save your sight as a new prefab, this way you can reuse it in any other projects without the need to remake it each time."}),"\n",(0,n.jsx)(t.p,{children:"If you are happy with the sight go to the hierarchy and drag it onto whatever object you would like it parented to, for example a weapon. Once you have done so reset the position again and move/rotate the scope to your desired position."}),"\n",(0,n.jsx)(t.p,{children:"With that you should be ready to go! Publish your Avatar/World and have fun."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Yippie!",src:i(5343).Z+"",width:"320",height:"192"})}),"\n",(0,n.jsx)(t.h2,{id:"creating-a-sight-from-scratch",children:"Creating a Sight From Scratch"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["This section will cover creation of a sight with no presets used, only the shader. Defaults have been put in place to make this process as easy as possible however you may need to tweak some settings to get things looking just the way you want. ",(0,n.jsx)(t.strong,{children:"It is recommended to stick with the presets unless you are familiar with how materials work."})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"creating-the-assets",children:"Creating the assets"}),"\n",(0,n.jsx)(t.p,{children:"For the assets you will need to make 4 textures."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Main"}),"\n",(0,n.jsx)(t.li,{children:"Mask"}),"\n",(0,n.jsx)(t.li,{children:"Reticle"}),"\n",(0,n.jsx)(t.li,{children:"Secondary"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Here is a sample of what those look like:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Scope Tex",src:i(6129).Z+"",width:"533",height:"164"})}),"\n",(0,n.jsx)(t.p,{children:"The main thing to note when making your textures is:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The mask will determine the visible area of your Reticle"}),"\n",(0,n.jsx)(t.li,{children:"The main texture never moves unless specified in the animation settings for rotation and will be attached to the mask texture."}),"\n",(0,n.jsx)(t.li,{children:"The secondary texture can have rotation animations applied and also will be repeated along the length of the sight so it is recommended to not have it be to visually distracting."}),"\n",(0,n.jsx)(t.li,{children:"The reticle will be scaled down to fit the center of the sight within the shader so feel free to take up the entire space of the texture with your design."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"With this information in hand lets make a simple reticle inspired by Call of Duty. You can make your own textures or follow along with the ones I have made that you can download below:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://docs.nebulaanimations.com/assets/files/Tut_Tex-e6c61f4caf32e6186382e5cddb6f8821.zip",children:"Download Materials"})}),"\n",(0,n.jsx)(t.h3,{id:"making-a-new-material",children:"Making A New Material"}),"\n",(0,n.jsx)(t.p,{children:"Now that you have the textures you are going to want to make a new material for the shader."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Make sure Suresight is imported and navigate to the shader folder."}),"\n",(0,n.jsx)(t.li,{children:"Right click the shader and go to the option that says material. This will create a new material using the shader."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Scope Tex",src:i(5573).Z+"",width:"950",height:"776"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"Move the material into a folder of your choosing. Preferably one where you will be keeping your textures and prefab."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"creating-the-mesh",children:"Creating the Mesh"}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsx)(t.li,{children:"In the hierarchy view create a new plane, this will be our mesh that we apply the material to. By default the plane is quite large. Scale it down to the size of the scope you are looking to create."}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"IMPORTANT"})," Make sure you scale the plane to the desired size before moving forward. The shader does not take into account scale so if you make the reticle at a huge size and scale it down all the settings will need to be adjusted to account for the size change. ",(0,n.jsx)(t.strong,{children:"Reccomended scale for the default unity plane is 0.0052"})]}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{start:"5",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Once you have the plane in the desired position and size drag on your newly created material from step 2."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Now that we have the material applied you will need to drag on your textures either downloaded or created in the ",(0,n.jsx)(t.a,{href:"#creating-the-assets",children:"Creating the Assets"})," step."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Set Tex",src:i(1275).Z+"",width:"720",height:"534"})}),"\n",(0,n.jsxs)(t.ol,{start:"7",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"You may notice that the secondary texture is a bit dark depending on how your texture is set up. In color Settings go to secondary color and raise the intensity to your desired value."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"While in color settings you can also adjust the Main, Secondary, and Icon Color any color you like."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"One last thing before your ready to go. Make sure on the textures you imported to set the wrap mode to clamped and resolution to 1024."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Wrap and Rez",src:i(4133).Z+"",width:"950",height:"562"})}),"\n",(0,n.jsxs)(t.ol,{start:"10",children:["\n",(0,n.jsx)(t.li,{children:"With that you are ready to go with your own custom sight!"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"wrapping-up",children:"Wrapping Up"}),"\n",(0,n.jsx)(t.p,{children:"Thank you again for downloading and taking the time to read through this guide. I hope my shader is able to serve you well and empower you to make all sorts of cool effects. As always, my discord server is open for any questions and concerns and you can click the support button at the top to be linked directly to it."}),"\n",(0,n.jsx)(t.p,{children:"Thanks for reading - Neb"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Last Updated: 11/14/23"}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},5343:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/bugcat-capoo-animated-4cf81047b5807d8d588da1556ce2de80.gif"},5573:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/create_material-ee5c4e7554531376458fc1b4521a1366.gif"},1768:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/reset_position-bd3a4348ad0cdce390ddf0446aa807d4.gif"},1275:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/set_textures-8e3edfe1bc7a308bc7d48f918080a246.gif"},6129:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/texture_preview-74f7c2d4bc3d7b2c1049f5f9a4a12c0c.png"},3893:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/unity_linear_preview-ced9ef54ddf252f29b3ba6176bf75cb0.png"},4318:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/png;base64,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"},4133:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/wrap_and_rez-a918c6a1ed935f244127d3c312ae2f57.gif"},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>a});var n=i(7294);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);