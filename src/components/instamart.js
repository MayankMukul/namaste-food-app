import {useState} from 'react';

const Section = (props)=>{
    const[Visibility, setVisibility]=useState(false);
    const[ShoworHide, setShoworHide] = useState('Show');

    return (
      <div className="bg-slate-100 m-2 p-3">
        <h1 className="bg-black text-white font-bold p-3">
          {props.title}

          <button
            className="cursor-pointer bg-slate-500  text-white p-1 mx-2 rounded"
            onClick={() => {
              if (Visibility) {
                setVisibility(false);
                setShoworHide("Show");
                console.log(Visibility);
              } else {
                setVisibility(true);
                setShoworHide("Hide");
                console.log(Visibility);
              }
            }}
          >
            {ShoworHide}
          </button>
        </h1>

        {Visibility == true ? (
          <h2 className="p-2 font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium corrupti quam sunt nam dolores animi! Inventore placeat
            aspernatur eum ipsam accusamus, rerum aliquid? Odit, provident. Ex
            aliquam soluta quis illo, temporibus consequatur unde aspernatur
            beatae obcaecati deserunt est, voluptate architecto veniam, esse
            ratione optio. Commodi officia eum illum deleniti? Reprehenderit!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium veritatis odit distinctio repellat quod? Quisquam culpa
            facilis quam nostrum architecto corrupti magnam est placeat minima
            consequatur, nulla minus aut? Perferendis?
          </h2>
        ) : null}
      </div>
    );
}

const Instamart = ()=>{

    

    return (
      <>
        <Section title={"Title1"} />
        <Section title={"Title2"}/>
        <Section title={"Title3"}/>
        <Section title={"Title4"}/>
      </>
    );
}

export default Instamart;