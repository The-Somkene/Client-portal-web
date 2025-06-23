import Image from "next/image";

const Profile = () => {
  return (
    <section className="mt-6">
      <h1 className="font-semibold text-xl text-black">My Profile</h1>
      <div className="bg-white mt-5.5 px-10 py-8 rounded-[10px] border-l-10 border-l-[#543CDA] flex gap-9">
        <Image 
          src="/Profile-pic.svg"
          alt="User avatar"
          width={100}
          height={100}
        />
        <div className="text-black">
          <h2 className="text-2xl font-bold">Toluwani Ayomide</h2>
          <p className="font-medium text-[16px]">Product  Manager</p>
          <p className="font-medium text-[15px]">Lagos, Nigeria</p>
          <p className="font-normal text-[13px]">Joined January 1, 2025</p>
        </div>
      </div>
      <p className="py-6 font-medium text-lg text-black">Project Roles</p>
      <div className="cards grid grid-cols-4 gap-1.5">
        <div className="card1 bg-white mt-5.5 px-7.5 py-6 rounded-[10px] border-l-6 border-l-[#543CDA]">
          <h3 className="font-medium text-[#543CDA] text-sm">Food Delivery Website</h3>
          <p className="font-medium text-[12px] text-black">Project Manager</p>
          <h3 className="font-medium text-sm text-black pt-3.5 pb-2.5">Status:<span className="text-[#00D073]"> Active</span></h3>
          <p className="font-medium text-[12px] text-black">Date: May 1, 2025 - Aug 25, 2025</p>
        </div>
        <div className="card1 bg-white mt-5.5 px-7.5 py-6 rounded-[10px] border-l-6 border-l-[#543CDA]">
          <h3 className="font-medium text-[#543CDA] text-sm">Food Delivery Website</h3>
          <p className="font-medium text-[12px] text-black">Project Manager</p>
          <h3 className="font-medium text-sm text-black pt-3.5 pb-2.5">Status:<span className="text-[#00D073]"> Active</span></h3>
          <p className="font-medium text-[12px] text-black">Date: May 1, 2025 - Aug 25, 2025</p>
        </div>
        <div className="card1 bg-white mt-5.5 px-7.5 py-6 rounded-[10px] border-l-6 border-l-[#543CDA]">
          <h3 className="font-medium text-[#543CDA] text-sm">Food Delivery Website</h3>
          <p className="font-medium text-[12px] text-black">Project Manager</p>
          <h3 className="font-medium text-sm text-black pt-3.5 pb-2.5">Status:<span className="text-[#8E8E8E]"> Completed</span></h3>
          <p className="font-medium text-[12px] text-black">Date: May 1, 2025 - Aug 25, 2025</p>
        </div>
        <div className="card1 bg-white mt-5.5 px-7.5 py-6 rounded-[10px] border-l-6 border-l-[#543CDA]">
          <h3 className="font-medium text-[#543CDA] text-sm">Food Delivery Website</h3>
          <p className="font-medium text-[12px] text-black">Project Manager</p>
          <h3 className="font-medium text-sm text-black pt-3.5 pb-2.5">Status:<span className="text-[#8E8E8E]"> Completed</span></h3>
          <p className="font-medium text-[12px] text-black">Date: May 1, 2025 - Aug 25, 2025</p>
        </div>
      </div>
      <div className="mt-7 bg-white px-9.5 py-7 rounded-[10px] border-l-10 border-l-[#543CDA]">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-[32px] text-black">Personal Information</p>
          <div className="flex items-center gap-3 cursor-pointer text-black border-2 border-[#543CDA] px-2.5 py-2 rounded-[3px]">
            <span>Edit</span> 
            <Image src="/pencil--change-edit.svg" alt="Edit icon" width={18} height={17} />
          </div>
        </div>
        <div className="py-4.25">

        </div>
      </div>

    </section>
  );
};

export default Profile;
