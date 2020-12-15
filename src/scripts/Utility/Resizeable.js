// This hold the resize logic for panel

function ResizeableR(props) {
  let sideBar = props.parentElement;
  let prevX = 0;

  props.addEventListener("mousedown", (e) => {
    prevX = e.clientX;

    const mouseMove = (e) => {
      const rect = sideBar.getBoundingClientRect();

      // sideBar.style.flexBasis = rect.width - (prevX - e.clientX) + "px";
      sideBar.style.width = rect.width - (prevX - e.clientX) + "px";
      prevX = e.clientX;
    };

    const mouseUp = () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);

    console.log(sideBar);
  });
}

function ResizeableL(props) {
  let sideBar = props.parentElement;
  let prevX = 0;

  props.addEventListener("mousedown", (e) => {
    prevX = e.clientX;

    const mouseMove = (e) => {
      const rect = sideBar.getBoundingClientRect();

      sideBar.style.flexGrow = 0;
      // sideBar.style.flexBasis = rect.width - (e.clientX - prevX) + "px";
      sideBar.style.width = rect.width - (e.clientX - prevX) + "px";
      prevX = e.clientX;
    };

    const mouseUp = () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);

    console.log(sideBar);
  });
}

module.exports = {
  ResizeableR: ResizeableR,
  ResizeableL: ResizeableL,
};
