import React from "react";
const MyFirstComponent = () => {
 return (
   <>
     <div className="fullpage">
        <div className="body-full">
          <div className="feedback">
            <div className="feedback-corp">
              <header>
                <div className="etoile">
                  <img src="icon-star.svg" alt="" />
                </div>
                <div>
                  <h2> How did we do? </h2>
                </div>
              </header>
              <body>
                <div className="text-notes">
                  Please let us know how we did with your support request. All
                  feedback is appreciated to help us improve our offering!
                </div>
                <div className="notes">
                  <div className="button-1">
                    <p>1</p>
                  </div>
                  <div className="button-2">
                    <p>2</p>
                  </div>
                  <div className="button-3">
                    <p>3</p>
                  </div>
                  <div className="button-4">
                    <p>4</p>
                  </div>
                  <div className="button-5">
                    <p>5</p>
                  </div>
                </div>
              </body>
              <footer>
                <h4>SUBMIT</h4>
              </footer>
            </div>
          </div>
        </div>
      </div>
   </>
 );
};
export default MyFirstComponent;
