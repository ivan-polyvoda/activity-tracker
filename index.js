const getActivityData = () => {
  const [
    startTimeNode,
    finishTimeNode,
    distanceNode
  ] = document.querySelectorAll(".nav > .objeckt > input");
  const activityTypeSelect = document.querySelector(".nav > .objeckt > select");

  return {
    startTime: startTimeNode.value,
    finishTime: finishTimeNode.value,
    distance: distanceNode.value,
    type: activityTypeSelect.value
  };
};

const addSpeedToActivity = activityWithoutSpeed => {
  return {
    ...activityWithoutSpeed,
    speed: 3 * activityWithoutSpeed.time
  };
};

const addTimeToActivity = activityWithoutTime => {
  return {
    ...activityWithoutTime,
    const time = new Date();
      const time= document.getElementById("date");
      elem.value = d.toISOString().slice(0,16);
    
  };
};

const addActivityToTable = activity => {
  const activityTable = document.querySelector("#activity-list > tbody");

  const startTimeTd = document.createElement("td");
  const timeTd = document.createElement("td");
  const distanceTd = document.createElement("td");
  const typeTd = document.createElement("td");
  const speedTd = document.createElement("td");

  startTimeTd.appendChild(document.createTextNode(activity.startTime));
  timeTd.appendChild(document.createTextNode(activity.time));
  distanceTd.appendChild(document.createTextNode(activity.distance));
  typeTd.appendChild(document.createTextNode(activity.type));
  speedTd.appendChild(document.createTextNode(activity.speed));

  const activityRow = document.createElement("tr");
  activityRow.appendChild(startTimeTd);
  activityRow.appendChild(typeTd);
  activityRow.appendChild(distanceTd);
  activityRow.appendChild(timeTd);
  activityRow.appendChild(speedTd);
  activityTable.appendChild(activityRow);
};

document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.querySelector("#save");

  saveButton.addEventListener("click", () => {
    const activity = getActivityData();
    const activityWithTime = addTimeToActivity(activity);
    const activityWithSpeed = addSpeedToActivity(activityWithTime);
    addActivityToTable(activityWithSpeed);
  });
});

// const a = {
//   startTime: startTimeNode.value,
//   finishTime: finishTimeNode.value,
//   distance: distanceNode.value,
//   type: activityTypeSelect.value,
//   // addTimeToActivity(activity)
//   time: 4,
//   // addSpeedToActivity(activityWithTime)
//   speed: 56
// };
