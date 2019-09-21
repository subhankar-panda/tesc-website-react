(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{83:function(e,a,t){"use strict";t.r(a);var n=t(3),i=t(4),o=t(6),s=t(5),r=t(7),c=t(0),l=t.n(c),m=function(e){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{class:"about mb-5 mt-5"},l.a.createElement("div",{class:"text-center about__header-red"},"About TESC"),l.a.createElement("div",{class:"text-center about__header"},"Our Mission Statement"),l.a.createElement("div",{class:"about__text mt-5 text-center"},l.a.createElement("p",{class:"about__copy"},"The ",l.a.createElement("span",{class:"about__blue"},"Triton Engineering Student Council (TESC) ")," empowers UC San Diego engineering students by connecting them with impactful communities, projects, and career building opportunities.")))}}]),a}(l.a.Component),d=t(20),u=t(11),h=t.n(u),p=t(13),b=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(o.a)(this,Object(s.a)(a).call(this,e))).state={showFull:!1},t.click=t.click.bind(Object(d.a)(Object(d.a)(t))),t}return Object(r.a)(a,e),Object(i.a)(a,[{key:"hide",value:function(){h()(Object(p.findDOMNode)(this)).find(".board__member-full").eq(0).hide(),this.setState({showFull:!1})}},{key:"componentDidUpdate",value:function(){!this.props.isActive&&this.state.showFull&&this.hide(),this.props.isActive&&!this.state.showFull&&this.show()}},{key:"show",value:function(){h()(Object(p.findDOMNode)(this)).find(".board__member-full").eq(0).slideDown(),this.setState({showFull:!0})}},{key:"click",value:function(){if(this.state.showFull)return this.props.onActive(-1);this.props.onActive(this.props.val)}},{key:"render",value:function(){var e=this.props,a=e.data,t=e.idx,n=a.role.toLowerCase().replace(/ /g,""),i=a.name.split(" ")[0],o=this.state.showFull;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-md-3 m-0 px-1 py-1",id:n},l.a.createElement("div",{className:o?"board__member-active-".concat(t):"board__member",onClick:this.click},l.a.createElement("div",{src:a.img,className:"board__member-img",style:{backgroundImage:"url(".concat(a.img,")")}}," "),l.a.createElement("div",{className:"text-center board__member-name"},a.name),l.a.createElement("div",{className:"text-center board__member-title"},a.role)),l.a.createElement("div",{className:"board__member-full board__member-full-".concat(t)},l.a.createElement("div",{className:"full__title"},a.role),l.a.createElement("div",{className:"full__name"},a.name),l.a.createElement("p",{className:"full__bio"},a.bio),a.link&&l.a.createElement("div",{className:"full__connect"},"Connect with ",i," on ",l.a.createElement("a",{target:"_blank",href:a.link}," ",l.a.createElement("span",null,"LinkedIn")," ",l.a.createElement("i",{class:"fab fa-linkedin-in"}))),l.a.createElement("div",{className:"full__connect"},"Email ",i," at ",l.a.createElement("a",{target:"_blank",href:"mailto:"+a.email}," ",l.a.createElement("span",null,a.email)," ",l.a.createElement("i",{class:"far fa-envelope"}))))))}}]),a}(l.a.Component),g=[{name:"Jonathan Luck",role:"President",img:"https://tesc-website.s3.us-east-2.amazonaws.com/board/president.jpg",email:"jonathan@tesc.ucsd.edu",bio:"I am a fifth-year computer science major. As President for TESC, I strongly believe in supporting the engineering community at UCSD. Outside of engineering, I love reading, cooking, quizbowl, and event planning. I am interested in the intersection of cyber, intelligence, and national security."},{name:"Summer Joyce Batasin",role:"VP External",img:"https://tesc-website.s3.us-east-2.amazonaws.com/board/vp-external.jpeg",email:"summer@tesc.ucsd.edu",bio:"I am a third-year bioengineering: biotechnology major and this year\u2019s VP External for TESC. I will be supporting our marketing, sponsorship, and design teams to help TESC put on some great events for UCSD\u2019s engineering community. When I\u2019m not doing research or studying, I love to bake and relax at the beach.",link:"https://www.linkedin.com/in/summer-joyce"},{name:"Subhankar Panda",role:"VP Internal",img:"https://tesc-website.s3.us-east-2.amazonaws.com/board/vp-internal.jpg",email:"subhankar@tesc.ucsd.edu",bio:"I'm Panda, I'm a 4th year Math-CS major. I've been in TESC since my sophomore year, primarily working on the tech team. As VP Internal this year, my job is to maintain TESC's internal health and to provide our board members with the resources they need to be successful. Outside of TESC, you can find me at the rock climbing gym, watching Formula 1 or on the quest to find San Diego's best california burrito.",link:"https://www.linkedin.com/in/subhankar-panda/"},{name:"Kyle Gillaspy",role:"VP Finance",img:"https://tesc-website.s3.us-east-2.amazonaws.com/board/vp-finance.jpg",link:"https://www.linkedin.com/in/kylegillaspy/",email:"kyle.gillaspy@tesc.ucsd.edu",bio:"I am a third-year computer science major with an interest in finance. As the VP Finance for TESC I help maintain the funding cycle and internal financial metrics to help maximize our support of the engineering community! In my free time I enjoy hiking and UEFA football."},{name:"Sergio Villazon",role:"VP Events",img:"https://tesc-website.s3.us-east-2.amazonaws.com/board/vp-events.jpg",email:"sergio@tesc.ucsd.edu",bio:"I am the incoming VP Events. I am a fourth-year computer science major. I've been involved with TESC since my freshman-year and am really excited to work with everyone this year!"},{name:"Jimmy Dang",role:"SD Hacks Director",img:"https://tesc-website.s3.us-east-2.amazonaws.com/board/sd-hacks-director.jpg",email:"jimmy@tesc.ucsd.edu",bio:"My name is Jimmy Dang and I will be serving as the SD Hacks Director. I am a third-year computer science major who enjoys going out and getting food. You can also find me looking at dog pictures while playing Minecraft all day.",link:"https://www.linkedin.com/in/jimmydang1/"},{name:"Sneheil Saxena",role:"Sponsorship Lead",img:"https://tesc-website.s3.us-east-2.amazonaws.com/board/sponsorship-lead.jpg",link:"https://www.linkedin.com/in/sneheilsaxena/",email:"sneheil@tesc.ucsd.edu",bio:"I'm a fourth-year mathematics & computer science major, and I serve as the Sponsorship Lead for TESC! I aim to empower TESC to serve the engineering community by ensuring that our events are financially well supported and that our sponsors' expectations are exceeded. My academic interests include algorithms, mathematical statistics, and CS education research. I'm also working towards finishing up my first album and performing live more frequently."},{name:"Jocelyn Wei",role:"ProDev Lead",img:"https://tesc-website.s3.us-east-2.amazonaws.com/board/prodev-lead.jpeg",email:"jocelyn@tesc.ucsd.edu",bio:"I'm a fourth-year computer science major from northern California. When I'm not at work on my laptop, you can find me at home or in Geisel, probably still on my laptop. I'm also TESC's ProDev chair - feel free to talk to me about Decaf!",link:"https://www.linkedin.com/in/joswei"},{name:"Lisa Luo",role:"Technical Lead",img:"https://tesc-website.s3.us-east-2.amazonaws.com/board/tech-lead.jpg",bio:"I am Lisa Luo, and as the Technical Lead, I am responsible for developing websites and applications for TESC. I am a third-year computer science major and psychology minor. When I'm not obsessing over Marvel, musicals, and video games, I'm buying Lego sets, drinking coffee, and playing with jigsaw puzzles.",link:"https://www.linkedin.com/in/lisa--luo/",email:"lisa@tesc.ucsd.edu"},{name:"Jasmine Hoang",role:"Visual Design Lead",img:"https://tesc-website.s3.us-east-2.amazonaws.com/board/visual-design-lead.HEIC",bio:"I'm a third-year computer science major and this year's Visual Design Lead! I'm in charge of designing websites and other media for TESC events. When I'm not doing that, I'm probably playing Minecraft or painting.",link:"https://www.linkedin.com/in/jasminenhoang/",email:"jasmine@tesc.ucsd.edu"},{name:"Ashley Rojas",role:"Outreach Lead",img:"https://tesc-website.s3.us-east-2.amazonaws.com/board/outreach-lead.jpg",bio:"I am a third-year chemical engineering major with an interest in Material Science. I was a member of the TESC Social Committee, and I am now the Outreach Lead coordinating Enspire and Splash. As an Outreach Lead, I am dedicated in assisting San Diego's under-resourced and underrepresented communities, so if you have a big or small idea that you would like to incorporate into your community, talk to me! In my free time I like to go to concerts, volunteer for the WeLoveU Foundation and ASEZ, advocate for Women's Leadership Project, work out, and go to LA to hang out with family and friends!",email:"ashley@tesc.ucsd.edu",link:"https://www.linkedin.com/in/ashley-rojas-704048160"},{name:"Cindy Alberto",role:"Social Lead",img:"https://tesc-website.s3.us-east-2.amazonaws.com/board/social-lead.jpeg",email:"cindy@tesc.ucsd.edu",bio:"I am a third-year mechanical engineering major and Social Lead for TESC. Outside of school I enjoy reading, watching TV, and hanging out with friends."},{name:"Ysabelle Lam",role:"Council Lead",img:"https://tesc-website.s3.us-east-2.amazonaws.com/board/council-lead.jpg",email:"ysabelle@tesc.ucsd.edu",bio:"I'm a fourth-year aerospace engineering major with a minor in business. I joined TESC as the Council Lead with a hope to better serve the engineering community and facilitate an environment of collaboration and opportunities for academic and professional growth. Outside of school, I host outreach workshops for K-12 students, attend hackathons, or spend time outdoors.",link:"https://www.linkedin.com/in/ysabellelam/"},{name:"Katie Chen",role:"Marketing Lead",img:"https://tesc-website.s3.us-east-2.amazonaws.com/board/marketing-lead.jpg",email:"katie@tesc.ucsd.edu",link:"https://www.linkedin.com/in/katie-c-5827aa121",bio:"I am a third-year majoring in cognitive science with a specialization in human-computer interaction and minoring in design at UCSD. As Marketing Lead, I am in charge of sharing stories, leading campaigns, and curating marketing material for TESC. When I have free time, I like to go on food adventures with friends, drink A LOT of boba, and work on my graphic design skills, to name a few things."},{name:"Natalie Chen",role:"Project Spaces Lead",img:"https://tesc-website.s3.us-east-2.amazonaws.com/board/project-spaces-lead.JPG",email:"natalie@tesc.ucsd.edu",link:"https://www.linkedin.com/in/natalie-chen-6b68a2142/",bio:"I am a fourth-year bioengineering major and I currently serve as the Project Space Lead as well as the Assistant Director of SD Hacks 2019. In my free time I enjoy cooking and baking. If not in the kitchen I can be found cuddling with my dog Photon!"},{name:"Thant Htoo Zaw",role:"Internal Projects Lead",img:"https://tesc-website.s3.us-east-2.amazonaws.com/board/internal-projects-lead.JPG",link:"https://www.linkedin.com/in/htoo97/",email:"thant@tesc.ucsd.edu",bio:"I'm Thant, a fourth-year Computer Engineering major. As Internal Projects Lead, I am always looking for ways to improve TESC's technical processes. I like planning events, which have ranged from SD Hacks and HackXX to a fashion show back in high school. These days, I'm either on road trips, playing board games or testing my limits for spicy food."}],w=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(o.a)(this,Object(s.a)(a).call(this,e))).state={currActive:-1},t.setActive=t.setActive.bind(Object(d.a)(Object(d.a)(t))),t}return Object(r.a)(a,e),Object(i.a)(a,[{key:"setActive",value:function(e){this.setState({currActive:e})}},{key:"renderMembers",value:function(e){var a=this,t=e.reduce(function(e,a,t,n){return t%4?e:e.concat([n.slice(t,t+4)])},[]),n=this.state.currActive;return t.map(function(e,t){return l.a.createElement("div",{className:"row board__row"},e.map(function(e,i){return l.a.createElement(b,{onActive:a.setActive,isActive:4*t+i===n,data:e,val:4*t+i,idx:i})}))})}},{key:"render",value:function(){return l.a.createElement("div",{className:"board__body pb-3"},l.a.createElement("div",{className:"text-center board__body-small pt-5"},"Our Team"),l.a.createElement("div",{className:"text-center board__body-big"},"Executive Board",l.a.createElement("div",{className:"container mt-3 p-0"},this.renderMembers(g))))}}]),a}(l.a.Component),f=t(22),y=t(23),k=function(e){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,null),l.a.createElement(m,null),l.a.createElement(w,null),l.a.createElement(y.a,null))}}]),a}(l.a.Component);a.default=k}}]);
//# sourceMappingURL=3.799dd518.chunk.js.map