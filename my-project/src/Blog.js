function Blog()
{
    return(
        <div className="parent">

  
        <div className="grid min-[320px]:grid-cols-1 max-[600px]:grid-cols-1 min-[320px]:items-center max-[600px]:items-center sm:grid-cols-6 sm:gap-4  relative ">
          <div className="sm:col-span-2  container-1 sm:h-screen ">
            <img src="https://images.unsplash.com/photo-1664575601786-b00156752b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="img-fluid object-cover max-[320px]:h-64 max-[600px]:h-64" alt="office" />
            {/* <h1 className="absolute top-72 text-4xl left-8 ">Tvs Madhur</h1> */}
            <p style={{ textAlign: 'center' }}><i className="fa fa-briefcase fa-fw mx-5 my-5 min-[320px]:mx-2 max-[600px]:mx-2"></i>Designer</p>
            <p style={{ textAlign: 'center' }}><i className="fa fa-home fa-fw mx-5 my-5 min-[320px]:mx-2 max-[600px]:mx-2"></i>London&nbsp;UK</p>
            <p style={{ textAlign: 'center' }}><i className="fa fa-envelope fa-fw mx-5 my-5 min-[320px]:mx-2 max-[600px]:mx-2"></i>ex@mail.com</p>
            <p style={{ textAlign: 'center' }}><i className="fa fa-phone fa-fw mx-5 my-5 min-[320px]:mx-2 max-[600px]:mx-2"></i>1224435534</p>
            <hr className="my-5" />
            <p style={{ textAlign: 'center' }} ><b><i className="fa fa-asterisk fa-fw mx-5 my-3 min-[320px]:mx-2 max-[600px]:mx-2"></i>Skills</b></p>
            <p className="my-5" style={{ textAlign: 'center' }}>Adobe Photoshop</p>
            <div className="relative">
              <div className="w-full rounded-lg bg-gray-200  h-5 mb-6">
                <div className="flex rounded-lg items-center justify-center bg-blue-600 h-5 ml-5" style={{ width: '0%', textAlign: 'center' }}>
                  <p>0%</p>
                </div>
              </div>
              <p className="my-5" style={{ textAlign: 'center' }}>Photography</p>
              <div className=" w-full rounded-lg bg-gray-200  h-5 mb-6" >
    
                <div className="flex items-center justify-center rounded-lg bg-blue-600 h-5" style={{ width: "25%", color: 'white' }}>
                  <p>25%</p>
                </div>
              </div>
              <p className="my-5" style={{ textAlign: 'center' }}>Illustrator</p>
              <div className="w-full rounded-xl bg-gray-200   h-5 ">
                <div className="flex items-center justify-center rounded-xl bg-blue-600 h-5 mb-10" style={{ width: "50%", color: 'white' }}>
                  <p>50%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:col-span-4">
           <div className="grid grid-rows-2 gap-4 sm:h-screen">
          
              <div className="container-2">
              <h2 className="text-3xl mt-5 whitespace-nowrap"><i class="fa fa-suitcase fa-fw mx-5 my-5"></i>Work Experience</h2>
              <div className="container ml-5">
              <h5 className="my-5"><b>Front End Developer / w3schools.com</b></h5>
              <h6 className=""><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span class="w3-tag w3-teal w3-round">Current</span></h6>
              <p className="my-5">Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
              <hr/>
            </div>
    
            <div className="container ml-5">
              <h5 className="my-5"><b>Web Developer / something.com</b></h5>
              <h6 className=""><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span class="w3-tag w3-teal w3-round">Current</span></h6>
              <p className="my-5">Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
              
            </div>
            </div>
           
            <div className="container-2">
              <h2 className="text-3xl mt-5"><i class="fa fa-suitcase fa-fw mx-5 my-5"></i>Education</h2>
              <div className="container ml-5">
              <h5 className="my-5"><b>w3schools.com</b></h5>
              <h6 className=""><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span class="w3-tag w3-teal w3-round">Current</span></h6>
              <p className="my-5">Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
              <hr/>
            </div>
    
            <div className="container ml-5" >
              <h5 className="my-5"><b>London Business School</b></h5>
              <h6 className=""><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span class="w3-tag w3-teal w3-round">Current</span></h6>
              <p className="my-5">Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
           
             </div>
          </div>
    
            </div>
         
          </div>
        </div>
        </div>
    )
}
export default Blog