function userAction(user){
  return{
    type: "user",
    payload: user,
  };
}
function contactAction(contact) {
  return {
    type: "contact",
    payload: contact,
  };
}
function experienceAction(experience) {
  return {
    type: "experience",
    payload: experience,
  };
}

function educationAction(education) {
  return {
    type: "education",
    payload: education,
  };
}

function summaryAction(summary) {
  return {
    type: "summary",
    payload: summary,
  };
}
function skillAction(skill) {
  return {
    type: "skill",
    payload: skill,
  };
}
function finalizeAction(final) {
  return {
    type: "final",
    payload: final,
  };
}
function colorAction(color) {
  return {
    type: "color",
    payload: color,
  };
}
function fontStyleAction(fontstyle) {
  return {
    type: "fontstyle",
    payload: fontstyle,
  };
}
function fontSizeAction(fontsize) {
  return {
    type: "fontsize",
    payload: fontsize,
  };
}

export {
  contactAction,
  experienceAction,
  educationAction,
  summaryAction,
  skillAction,
  finalizeAction,
  colorAction,
  fontStyleAction,
  fontSizeAction,
  userAction,
};
