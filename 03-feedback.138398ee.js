!function(){var e=document.querySelector(".feedback-form");e.addEventListener("input",(function(e){var t=e.currentTarget.email.value,r=e.currentTarget.message.value;a={email:"".concat(t),message:"".concat(r)},localStorage.setItem("feedback-form-state",JSON.stringify(a))})),e.addEventListener("submit",(function(t){t.preventDefault(),console.log(a),localStorage.clear(),e.email.value="",e.message.value=""}));var a={};try{var t=JSON.parse(localStorage.getItem("feedback-form-state"));e.email.value=t.email,e.message.value=t.message}catch(e){}}();
//# sourceMappingURL=03-feedback.138398ee.js.map