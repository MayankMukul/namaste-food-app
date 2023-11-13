import {useState} from 'react';

const Section = (props)=>{
    const[ShoworHide, setShoworHide] = useState('Show');
    // if(!props.VisibleSection===props.title){
    //   setShoworHide('Hide');
    // }
    return (
      <div className="bg-slate-100 m-2 p-3">
        <h1 className="bg-black text-white font-bold p-3">
          {props.title}

          <button
            className="cursor-pointer bg-slate-500  text-white p-1 mx-2 rounded"
            onClick={() => {
              if (props.Visibility) {
                props.setVisibility(false);
                setShoworHide("Show");
                props.setvisibleSection('');
                console.log(props.Visibility);
              } else {
                props.setVisibility(true);
                setShoworHide("Hide");
                props.setvisibleSection(props.title);
                console.log(props.Visibility);
              }
            }}
          >
            {ShoworHide}
          </button>
        </h1>

        {props.Visibility == true ? (
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

  
  const[Visibility, setVisibility]=useState(false);
  const[VisibleSection, setvisibleSection ] = useState('');

    return (
      <>
        <Section title={"Title1"} Visibility={(VisibleSection === 'Title1')} VisibleSection={VisibleSection} setVisibility={setVisibility} setvisibleSection={setvisibleSection}/>
        <Section title={"Title2"} Visibility={VisibleSection === 'Title2'} VisibleSection={VisibleSection} setVisibility={setVisibility} setvisibleSection={setvisibleSection}/>
        <Section title={"Title3"} Visibility={VisibleSection === 'Title3'} VisibleSection={VisibleSection} setVisibility={setVisibility} setvisibleSection={setvisibleSection}/>
        <Section title={"Title4"} Visibility={VisibleSection === 'Title4'} VisibleSection={VisibleSection} setVisibility={setVisibility} setvisibleSection={setvisibleSection}/>
      </>
    );
}

export default Instamart;