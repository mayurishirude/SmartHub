import React, { useEffect, useState } from "react";

function Gototopbutton() {
  const [visible, setvisible] = useState();
  const gotobutton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listentoscroll = () => {
    let height = 400;
    const winscroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winscroll > height) {
      setvisible(true);
    } else {
      setvisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listentoscroll);
  }, []);
  return (
    <>
      {visible && (
        <section className="scrolltop">
          <div className="top-btn" onClick={gotobutton}>
            <i class="bx bx-up-arrow-alt"></i>
          </div>
        </section>
      )}
    </>
  );
}

export default Gototopbutton;
