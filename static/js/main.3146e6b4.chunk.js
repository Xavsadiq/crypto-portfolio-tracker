(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{129:function(e,t,a){},262:function(e,t,a){},283:function(e,t,a){},284:function(e,t,a){},339:function(e,t,a){},341:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(30),s=a.n(r),i=a(18),o=a(51),l=a(132),u=a(20),d=a(16),j=a(99),b=a(135),p=(a(257),a(259),{apiKey:"AIzaSyDzhwkNxIdwZJNQz5eTHUOgk6cFmEQTvuI",authDomain:"portfolio-tracker-317511.firebaseapp.com",databaseURL:"portfolio-tracker-317511-default-rtdb.europe-west1.firebasedatabase.app",projectId:"portfolio-tracker-317511",storageBucket:"portfolio-tracker-317511.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/crypto-portfolio-tracker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyDzhwkNxIdwZJNQz5eTHUOgk6cFmEQTvuI",REACT_APP_FIREBASE_APP_ID:"1:638442913480:web:459a3ba053fa53fc5eeffd",REACT_APP_FIREBASE_AUTH_DOMAIN:"portfolio-tracker-317511.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"portfolio-tracker-317511-default-rtdb.europe-west1.firebasedatabase.app",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-DD97WPNZ71",REACT_APP_FIREBASE_MESSAGING_SENDING_ID:"638442913480",REACT_APP_FIREBASE_PROJECT_ID:"portfolio-tracker-317511",REACT_APP_FIREBASE_STORAGE_BUCKET:"portfolio-tracker-317511.appspot.com"}).REACT_APP_FIREBASE_MESSAGING_SENDER_ID,appId:"1:638442913480:web:459a3ba053fa53fc5eeffd",measurementId:"G-DD97WPNZ71"}),h=b.a.initializeApp(p),O=(a(262),a(2)),f=Object(i.b)((function(e){return{crypto:e.crypto,transactions:e.transactions}}))((function(e){var t=e.crypto,a=e.transactions,c=Object(d.e)();Object(n.useEffect)((function(){h.auth().onAuthStateChanged((function(e){e||c.push("/")}))}),[c]);var r={datasets:[{data:function(){var e=[];return Object.keys(a).length>0&&a.transactions.reduce((function(a,n){return a[n.coin]||(a[n.coin]={x:n.coin,y:0},e.push(a[n.coin])),a[n.coin].y+=+n.quantity*function(e){if(t[e]){var a=t[e];return a[a.length-1].y}}(n.coin_id),a}),{}),e}(),backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},s={datasets:[{data:function(){var e=[];return Object.keys(a).length>0&&a.transactions.reduce((function(t,a){return t[a.transaction_date]||(t[a.transaction_date]={x:a.transaction_date,y:0},e.push(t[a.transaction_date])),t[a.transaction_date].y+=+a.total_value,t}),{}),e}(),backgroundColor:["rgba(54, 162, 235, 0.2)"],borderColor:["rgba(54, 162, 235, 1)"],borderWidth:1}]};return Object(O.jsxs)("div",{className:"ui segment teal",children:[Object(O.jsx)("h3",{className:"ui dividing header",children:"Current Portfolio Breakdown"}),Object(O.jsxs)("div",{className:"ui grid",children:[Object(O.jsx)("div",{className:"eight wide column",children:Object(O.jsx)(j.a,{data:r,options:{plugins:{title:{display:!0,text:"Current Value by Coin",padding:{top:10,bottom:10}},legend:{display:!1},tooltips:{enabled:!1}}}})}),Object(O.jsx)("div",{className:"eight wide column",children:Object(O.jsx)(j.a,{data:s,options:{plugins:{title:{display:!0,text:"Value of Transactions by Date",padding:{top:10,bottom:10}},legend:{display:!1},tooltips:{enabled:!1}}}})})]})]})})),x=a(8),m=a(22),y=a.n(m),v=a(37),g=a(136),S=a.n(g).a.create({baseURL:"https://api.coingecko.com/api/v3"}),_=a(343),N=a(137),T=a.n(N),C=function(e){return function(){var t=Object(v.a)(y.a.mark((function t(a){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.database().ref("Transactions").orderByChild("userId").equalTo(e);case 3:t.sent.on("value",(function(e){var t=[];e.forEach((function(e){t.push(Object(x.a)({id:e.key},e.val()))}));var n=T.a.uniqBy(t,"coin");a({type:"GET_TRANSACTIONS",payload:t}),a({type:"UNQIUE_CRYPTO",payload:n})})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},E=a(15),I=Object(i.b)((function(e){return{transactions:e.transactions,crypto:e.crypto}}),{getTransactions:C})((function(e){var t=e.transactions,a=e.getTransactions,c=e.crypto,r=Object(d.e)();Object(n.useEffect)((function(){h.auth().onAuthStateChanged((function(e){e||r.push("/"),e&&0===Object.keys(t).length&&a(e.uid)}))}),[a,t,c,r]);var s=function(){var e=[];return Object.keys(t).length>0&&t.transactions.reduce((function(t,a){return t[a.coin]||(t[a.coin]={coin:a.coin,quantity:0,total_value:0,current_value:0},e.push(t[a.coin])),t[a.coin].quantity+=+a.quantity,t[a.coin].total_value+=+a.total_value,t[a.coin].current_value+=+a.quantity*function(e){if(c[e]){var t=c[e];return t[t.length-1].y}}(a.coin_id),t}),{}),e},i=function(){if(Object.keys(t).length>0)return t.transactions.reduce((function(e,t){return e+ +t.quantity}),0)},o=function(){if(Object.keys(t).length>0)return t.transactions.reduce((function(e,t){return e+ +t.total_value}),0)},l=function(){if(Object.keys(t).length>0)return s().reduce((function(e,t){return e+ +t.current_value}),0)};return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"ui segment",children:[Object(O.jsx)("h3",{className:"ui dividing header",children:"View your holdings"}),Object(O.jsxs)("table",{className:"ui celled table unstackable",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Coin"}),Object(O.jsx)("th",{children:"Quantity"}),Object(O.jsx)("th",{children:"Average Price"}),Object(O.jsx)("th",{children:"Cost"}),Object(O.jsx)("th",{children:"Current Value"}),Object(O.jsx)("th",{children:"Profit/Loss"}),Object(O.jsx)("th",{children:"% Change"})]})}),function(){if(Object.keys(t).length>0)return s().map((function(e){return Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{"data-label":"Coin",children:e.coin}),Object(O.jsx)("td",{"data-label":"Quantity",children:Object(O.jsx)(E.a,{value:e.quantity,decimalScale:2,thousandSeparator:!0,displayType:"text"})}),Object(O.jsx)("td",{"data-label":"Price per coin",children:Object(O.jsx)(E.a,{value:Math.abs(e.total_value/e.quantity),decimalScale:2,thousandSeparator:!0,prefix:"\xa3",displayType:"text"})}),Object(O.jsx)("td",{"data-label":"Cost",children:Object(O.jsx)(E.a,{value:e.total_value,thousandSeparator:!0,decimalScale:4,prefix:"\xa3",displayType:"text"})}),Object(O.jsx)("td",{"data-label":"Current Value",children:Object(O.jsx)(E.a,{value:e.current_value,decimalScale:2,thousandSeparator:!0,prefix:"\xa3",displayType:"text"})}),Object(O.jsx)("td",{"data-label":"Net Gain",children:Object(O.jsx)(E.a,{value:e.current_value-e.total_value,decimalScale:2,thousandSeparator:!0,prefix:"\xa3",displayType:"text"})}),Object(O.jsx)("td",{"data-label":"% Change",children:Object(O.jsx)(E.a,{value:(e.current_value-e.total_value)/e.total_value*100,decimalScale:2,thousandSeparator:!0,suffix:"%",displayType:"text"})})]})},e.coin)}))}(),Object(O.jsx)("tfoot",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Total"}),Object(O.jsx)("th",{children:Object(O.jsx)(E.a,{value:i(),displayType:"text",decimalScale:2,thousandSeparator:!0})}),Object(O.jsx)("th",{children:Object(O.jsx)(E.a,{value:Math.abs(o()/i()),decimalScale:2,displayType:"text",prefix:"\xa3",thousandSeparator:!0})}),Object(O.jsx)("th",{children:Object(O.jsx)(E.a,{value:o(),displayType:"text",prefix:"\xa3",decimalScale:2,thousandSeparator:!0})}),Object(O.jsx)("th",{children:Object(O.jsx)(E.a,{value:l(),displayType:"text",decimalScale:2,prefix:"\xa3",thousandSeparator:!0})}),Object(O.jsx)("th",{children:Object(O.jsx)(E.a,{value:l()-o(),displayType:"text",decimalScale:2,prefix:"\xa3",thousandSeparator:!0})}),Object(O.jsx)("th",{children:Object(O.jsx)(E.a,{value:(l()-o())/o()*100,displayType:"text",decimalScale:2,suffix:"%",thousandSeparator:!0})})]})})]})]})})})),A=a(10),w=a(11),k=a(13),R=a(12),P=(a(283),function(e){Object(k.a)(a,e);var t=Object(R.a)(a);function a(){return Object(A.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"ui menu",children:[Object(O.jsx)(u.b,{to:"/dashboard",className:"item",children:"Dashboard"}),Object(O.jsx)(u.b,{to:"/transactions",className:"item",children:"Transactions"}),Object(O.jsx)(u.b,{to:"/add_transaction",className:"item",children:"Add Transaction"}),Object(O.jsx)(u.b,{to:"/crypto-portfolio-tracker",className:"right item",onClick:function(t){return e.props.signOut()},children:"Sign Out"})]})}}]),a}(c.a.Component)),D=Object(i.b)(null,{signOut:function(){return function(){var e=Object(v.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.auth().signOut();case 3:t({type:"SIGN_OUT"}),t({type:"CLEAR_PRICES"}),t({type:"CLEAR_TRANSACTIONS"}),t({type:"CLEAR_UNIQUE_CRYPTO"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}})(P),U=Object(i.b)((function(e){return{crypto:e.crypto,transactions:e.transactions,uniqueCrypto:e.uniqueCrypto}}),{cryptoPrices:function(e){return function(){var t=Object(v.a)(y.a.mark((function t(a){var n,c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.get("/coins/".concat(e,"/market_chart"),{params:{vs_currency:"gbp",days:"90",interval:"daily"}});case 3:return n=t.sent,t.next=6,n.data.prices.map((function(e){return{x:Object(_.default)(new Date(e[0]),"dd-MM-yyyy").toLocaleString("en-GB"),y:e[1]}}));case 6:c=t.sent,a({type:"CRYPTO_PRICES",payload:c,name:e}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.cryptoPrices,a=e.transactions,c=e.uniqueCrypto,r=Object(d.e)();return Object(n.useEffect)((function(){h.auth().onAuthStateChanged((function(e){e||r.push("/crypto-portfolio-tracker");return function(){if(0!==Object.keys(c).length&&e)return c.data.map((function(e){return t(e.coin_id)}))}()}))}),[t,a,c,r]),Object(O.jsxs)("div",{children:[Object(O.jsx)(D,{}),Object(O.jsx)(f,{}),Object(O.jsx)(I,{})]})})),q=a(21),L=(a(129),Object(i.b)(null,{signUp:function(e){return function(){var t=Object(v.a)(y.a.mark((function t(a){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.auth().createUserWithEmailAndPassword(e.email,e.password);case 3:n=t.sent,a({type:"SIGN_UP",payload:n.user.uid}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.signUp,a=function(e){var t=e.error;if(e.touched&&t)return Object(O.jsx)("div",{className:"ui error message",children:Object(O.jsx)("div",{className:"header",children:t})})},n=function(e){var t=e.input,n=e.label,c=e.meta,r=(e.type,e.icon),s="field ".concat(c.error&&c.touched?"error":"");return Object(O.jsxs)("div",{className:s,children:[Object(O.jsx)("label",{children:n}),Object(O.jsxs)("div",{className:"ui left icon input",children:[Object(O.jsx)("i",{className:r}),Object(O.jsx)("input",Object(x.a)(Object(x.a)({},t),{},{autoComplete:"off",type:t.type}))]}),a(c)]})};return Object(O.jsx)("div",{className:"signup-form-container",children:Object(O.jsxs)("div",{className:"ui segment teal signup-form",children:[Object(O.jsxs)("div",{className:"column",children:[Object(O.jsx)("h2",{className:"ui header",children:"Sign up"}),Object(O.jsx)(q.b,{onSubmit:function(e){t(e)},validate:function(e){var t={};return e.email||(t.email="You must enter an email"),e.password||(t.password="You must enter a password"),e.confirmPassword||(t.confirmPassword="You must enter a password"),e.password!==e.confirmPassword&&(t.confirmPassword="You must enter a matching password"),t},children:function(e){var t=e.handleSubmit;return Object(O.jsxs)("form",{onSubmit:t,className:"ui form error",children:[Object(O.jsx)(q.a,{name:"email",type:"text",component:n,label:"Email",icon:"user icon"}),Object(O.jsx)(q.a,{name:"password",type:"password",component:n,label:"Password",icon:"lock icon"}),Object(O.jsx)(q.a,{name:"confirmPassword",type:"password",component:n,label:"Confirm Password",icon:"lock icon"}),Object(O.jsx)("button",{className:"ui fluid teal submit button",children:"Create Account"})]})}})]}),Object(O.jsxs)("div",{className:"ui message signup-content",children:["Already have an account? ",Object(O.jsx)(u.b,{to:"/",children:"Sign-in"})]})]})})}))),G=Object(i.b)((function(e){return{auth:e.auth}}),{signIn:function(e){return function(){var t=Object(v.a)(y.a.mark((function t(a){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.auth().signInWithEmailAndPassword(e.email,e.password);case 3:n=t.sent,a({type:"SIGN_IN",payload:n.user.uid}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0),a({type:"ERROR_SIGN_IN",payload:t.t0.message});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.signIn,a=e.auth,c=Object(d.e)();Object(n.useEffect)((function(){h.auth().onAuthStateChanged((function(e){e&&c.push("/dashboard")}))}));var r=function(e){e.error;if(e.touched&&a.errorMessage)return Object(O.jsx)("div",{className:"ui error message",children:Object(O.jsx)("div",{className:"header",children:a.errorMessage})})},s=function(e){var t=e.input,a=e.label,n=e.meta,c=(e.type,e.icon),s="field ".concat(n.error&&n.touched?"error":"");return Object(O.jsxs)("div",{className:s,children:[Object(O.jsx)("label",{children:a}),Object(O.jsxs)("div",{className:"ui left icon input",children:[Object(O.jsx)("i",{className:c}),Object(O.jsx)("input",Object(x.a)(Object(x.a)({},t),{},{autoComplete:"off",type:t.type}))]}),r(n)]})},i={email:"guest-account@xavdev.io",password:"guestaccount123!"};return Object(O.jsx)("div",{className:"signup-form-container",children:Object(O.jsxs)("div",{className:"ui segment teal signup-form",children:[Object(O.jsxs)("div",{className:"column",children:[Object(O.jsx)("h2",{className:"ui header",children:"Sign In"}),Object(O.jsx)(q.b,{onSubmit:function(e){try{t(e)}catch(a){console.log(a)}},validate:function(e){var t={};return e.email||(t.email="You must enter an email"),e.password||(t.password="You must enter a password"),t},children:function(e){var t=e.handleSubmit;return Object(O.jsxs)("form",{onSubmit:t,className:"ui form error",children:[Object(O.jsx)(q.a,{name:"email",type:"text",component:s,label:"Email",icon:"user icon"}),Object(O.jsx)(q.a,{name:"password",type:"password",component:s,label:"Password",icon:"lock icon"}),Object(O.jsx)("button",{className:"ui fluid teal submit button",children:"Sign In"})]})}})]}),Object(O.jsxs)("div",{className:"ui message signup-content",children:["Don't have an account? ",Object(O.jsx)(u.b,{to:"/signup",children:"Sign-up"}),Object(O.jsxs)("div",{children:["Or, snoop around with the ",Object(O.jsx)(u.b,{to:"/dashboard",onClick:function(e){!function(e){try{t(e)}catch(e){console.log(e)}}(i)},children:"Demo Account"})]})]})]})})})),Y=a(141),B=a(138),M=a.n(B),V=a(88),F=a(337),Q=a(4),W=(a(284),a(285),Object(i.b)((function(e){return{coinList:e.cryptoList}}),{cryptoList:function(){return function(){var e=Object(v.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get("/coins/markets",{params:{vs_currency:"gbp",order:"market_cap_desc",per_page:150}});case 3:a=e.sent,n=a.data.map((function(e){return{label:e.name,value:e.id}})),t({type:"CRYPTO_LIST",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},writeTransaction:function(e,t){return function(a){try{var n={userId:t,type:e.type,coin:e.selectCoin.label,coin_id:e.selectCoin.value,quantity:"Sold"===e.type?"-".concat(e.quantity.replace(",","")):e.quantity.replace(",",""),total_value:"Sold"===e.type?"-"+e.totalValue.replace("\xa3","").replace(",",""):e.totalValue.replace("\xa3","").replace(",",""),transaction_date:e.selectDate,date_added:Object(_.default)(new Date,"dd-MM-yyyy")};h.database().ref("Transactions").push(n),a({type:"WRITE_TRANSACTION",payload:n})}catch(c){console.error(c)}}}})((function(e){var t=e.cryptoList,a=e.coinList,c=e.writeTransaction,r=Object(d.e)();Object(n.useEffect)((function(){h.auth().onAuthStateChanged((function(e){e||r.push("/crypto-portfolio-tracker"),e&&0===Object.keys(a).length&&t()}))}),[a,t,r]);var s=function(e){var t=e.input,n=e.label,c=e.meta,r="form-style ui field ".concat(c.error&&c.touched?"error":"");return Object(O.jsxs)("div",{className:r,children:[Object(O.jsx)("label",{className:"label-style",children:n}),Object(O.jsx)(Y.a,Object(x.a)(Object(x.a)({},t),{},{autoComplete:"off",type:"text",options:a.data,className:"input-style"}))]})},i=function(e){var t=e.name,a=e.label,n=e.input,c=e.meta,r=e.input,s=r.value,i=(r.onChange,"form-style ui field ".concat(c.error&&c.touched?"error":""));return Object(O.jsxs)("div",{className:i,children:[Object(O.jsx)("label",{className:"label-style",children:a}),Object(O.jsx)(M.a,Object(x.a)(Object(x.a)({},n),{},{className:"input-style",placeholderText:"Enter date",dateFormat:"P",selected:s&&Object(V.default)(Object(F.default)(s))?Object(Q.default)(Object(F.default)(s)):null,disabledKeyboardNavigation:!0,name:t,onChange:function(e){Object(V.default)(e)?n.onChange(Object(_.default)(new Date(e),"dd-MM-yyyy")):n.onChange(null)}}))]})},o=function(e){var t=e.label,a=e.input,n=e.meta,c=e.placeholder,r="form-style ui field ".concat(n.error&&n.touched?"error":"");return Object(O.jsxs)("div",{className:r,children:[Object(O.jsx)("label",{className:"label-style",children:t}),Object(O.jsx)(E.a,Object(x.a)(Object(x.a)({},a),{},{autoComplete:"off",type:"text",className:"input-style",placeholder:c,thousandSeparator:!0}))]})},l=function(e){var t=e.label,a=e.input,n=e.meta,c=e.placeholder,r="form-style ui field ".concat(n.error&&n.touched?"error":"");return Object(O.jsxs)("div",{className:r,children:[Object(O.jsx)("label",{className:"label-style",children:t}),Object(O.jsx)(E.a,Object(x.a)(Object(x.a)({},a),{},{autoComplete:"off",type:"text",className:"input-style",placeholder:c,prefix:"\xa3",thousandSeparator:!0}))]})},u=function(e){var t=e.label,a=e.input,n=e.meta,c=e.placeholder,r="ui field ".concat(n.error&&n.touched?"error":"");return Object(O.jsxs)("div",{className:r,children:[Object(O.jsx)("label",{children:t}),Object(O.jsx)("input",Object(x.a)(Object(x.a)({},a),{},{autoComplete:"off",type:"radio",placeholder:c}))]})};return Object(O.jsxs)("div",{children:[Object(O.jsx)(D,{}),Object(O.jsx)("div",{className:"ui container",children:Object(O.jsxs)("div",{className:"ui segment teal",children:[Object(O.jsx)("h3",{className:"ui dividing header",children:"Add Transaction"}),Object(O.jsx)(q.b,{onSubmit:function(e){try{h.auth().onAuthStateChanged((function(t){c(e,t.uid)})),r.push("/transactions")}catch(t){console.log(t)}},validate:function(e){var t={};return e.type||(t.type="You must select a transaction type"),e.selectDate||(t.selectDate="You must select a transaction date"),e.selectCoin||(t.selectCoin="You must select a coin"),e.quantity||(t.quantity="You must enter a quantity"),e.totalValue||(t.totalValue="You must enter a value"),t},children:function(e){var t=e.handleSubmit;return Object(O.jsx)("form",{onSubmit:t,className:"ui form error",children:Object(O.jsxs)("div",{className:"form-container",children:[Object(O.jsxs)("div",{className:"radio-style right",children:[Object(O.jsx)(q.a,{name:"type",component:u,type:"radio",label:"Bought",value:"Bought"}),Object(O.jsx)(q.a,{name:"type",component:u,type:"radio",label:"Sold ",value:"Sold"})]}),Object(O.jsx)(q.a,{name:"selectDate",component:i,label:"Transaction Date"}),Object(O.jsx)(q.a,{name:"selectCoin",component:s,label:"Select Coin"}),Object(O.jsx)(q.a,{name:"quantity",component:o,label:"Quantity"}),Object(O.jsx)(q.a,{name:"totalValue",component:l,label:"Total Value",placeholder:"\xa3"}),Object(O.jsx)("button",{className:"ui fluid teal submit button",children:"Save"})]})})}})]})})]})}))),z=(a(339),Object(i.b)((function(e){return{transactions:e.transactions}}),{getTransactions:C,removeTransaction:function(e){return function(){var t=Object(v.a)(y.a.mark((function t(a){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.database().ref("Transactions");case 3:t.sent.child(e).remove(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.transactions,a=e.getTransactions,c=e.removeTransaction,r=Object(d.e)();Object(n.useEffect)((function(){h.auth().onAuthStateChanged((function(e){e||r.push("/crypto-portfolio-tracker"),e&&0===Object.keys(t).length&&a(e.uid)}))}),[a,t,r]);var s=function(){if(t)return t.transactions.reduce((function(e,t){return e+ +t.quantity}),0)},i=function(){if(t)return t.transactions.reduce((function(e,t){return e+ +t.total_value}),0)};return 0===Object.keys(t).length?Object(O.jsx)("div",{children:"Loading..."}):Object(O.jsxs)("div",{children:[Object(O.jsx)(D,{}),Object(O.jsxs)("div",{className:"ui segment teal",children:[Object(O.jsx)("h3",{className:"ui dividing header",children:"View your transactions"}),Object(O.jsxs)("table",{className:"ui celled table unstackable",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Transaction Date"}),Object(O.jsx)("th",{children:"Coin"}),Object(O.jsx)("th",{children:"Type"}),Object(O.jsx)("th",{children:"Quantity"}),Object(O.jsx)("th",{children:"Price per coin"}),Object(O.jsx)("th",{children:"Value"}),Object(O.jsx)("th",{children:"Options"})]})}),function(){if(t)return t.transactions.map((function(e){return Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{"data-label":"Transaction Date",children:e.transaction_date}),Object(O.jsx)("td",{"data-label":"Coin",children:e.coin}),Object(O.jsx)("td",{"data-label":"Type",children:e.type}),Object(O.jsx)("td",{"data-label":"Quantity",children:Object(O.jsx)(E.a,{value:e.quantity,decimalScale:2,thousandSeparator:!0,displayType:"text"})}),Object(O.jsx)("td",{"data-label":"Price per coin",children:Object(O.jsx)(E.a,{value:e.total_value/e.quantity,decimalScale:2,thousandSeparator:!0,prefix:"\xa3",displayType:"text"})}),Object(O.jsx)("td",{"data-label":"Value",children:Object(O.jsx)(E.a,{value:e.total_value,thousandSeparator:!0,prefix:"\xa3",displayType:"text"})}),Object(O.jsx)("td",{children:Object(O.jsx)("i",{className:"red close icon",onClick:function(t){return c(e.id)}})})]})},e.id)}))}(),Object(O.jsx)("tfoot",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Total"}),Object(O.jsx)("th",{}),Object(O.jsx)("th",{}),Object(O.jsx)("th",{children:Object(O.jsx)(E.a,{value:s(),displayType:"text",decimalScale:2,thousandSeparator:!0})}),Object(O.jsx)("th",{children:Object(O.jsx)(E.a,{value:i()/s(),decimalScale:2,displayType:"text",prefix:"\xa3",thousandSeparator:!0})}),Object(O.jsx)("th",{children:Object(O.jsx)(E.a,{value:i(),displayType:"text",prefix:"\xa3",decimalScale:2,thousandSeparator:!0})}),Object(O.jsx)("th",{})]})})]})]})]})}))),K=function(){return Object(O.jsx)("div",{className:"ui container",children:Object(O.jsx)(u.a,{basename:"/crypto-portfolio-tracker",children:Object(O.jsxs)("div",{children:[Object(O.jsx)(d.a,{path:"/",exact:!0,component:G}),Object(O.jsx)(d.a,{path:"/signup",component:L}),Object(O.jsx)(d.a,{path:"/dashboard",component:U}),Object(O.jsx)(d.a,{path:"/add_transaction",component:W}),Object(O.jsx)(d.a,{path:"/transactions",component:z})]})})})},H={isSignedIn:null,userId:null,errorMessage:""},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(x.a)(Object(x.a)({},e),{},{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return Object(x.a)(Object(x.a)({},e),{},{isSignedIn:!1,userId:null});case"SIGN_UP":return Object(x.a)(Object(x.a)({},e),{},{isSignedIn:!0,userId:t.payload});case"ERROR_SIGN_IN":return Object(x.a)(Object(x.a)({},e),{},{isSignedIn:!1,userId:null,errorMessage:t.payload});default:return e}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CRYPTO_LIST":return Object(x.a)(Object(x.a)({},e),{},{data:t.payload});default:return e}},X=a(17),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CRYPTO_PRICES":return Object(x.a)(Object(x.a)({},e),{},Object(X.a)({},t.name,t.payload));case"CLEAR_PRICES":return Object(x.a)({},e={});default:return e}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WRITE_TRANSACTIONS":case"GET_TRANSACTIONS":return Object(x.a)(Object(x.a)({},e),{},{transactions:t.payload});case"CLEAR_TRANSACTIONS":return Object(x.a)({},e={});default:return e}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UNQIUE_CRYPTO":return Object(x.a)(Object(x.a)({},e),{},{data:t.payload});case"CLEAR_UNIQUE_CRYPTO":return Object(x.a)({},e={});default:return e}},ae=Object(o.b)({auth:J,crypto:$,cryptoList:Z,transactions:ee,uniqueCrypto:te}),ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,ce=Object(o.d)(ae,ne(Object(o.a)(l.a)));s.a.render(Object(O.jsx)(i.a,{store:ce,children:Object(O.jsx)(K,{})}),document.querySelector("#root"))}},[[341,1,2]]]);
//# sourceMappingURL=main.3146e6b4.chunk.js.map