import Image from "next/image";

const Settings = () => {
  return (
    <section className="mt-6 py-0">
      <p className="font-semibold text-[28px] text-black">Settings</p>
      <div className="box1 bg-white mt-6.5 px-10 py-8 rounded-[10px] border-l-10 border-l-[#543CDA]">
        <p className="font-medium text-lg text-black">Account Settings</p>
        <form action="" className="flex flex-col gap-5.5 mt-9.5 text-black">
          <label htmlFor="">Change Email</label>
          <input
            name="changeEmail"
            placeholder="toluayomide@gmail.com"
            className="bg-[#EAE8F7] px-10 py-6 rounded-sm border-b-3 border-b-[#543CDA] placeholder:text-black text-xs outline-none"
          />
          <label htmlFor="password">Change Password</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="bg-[#EAE8F7] px-10 py-6 rounded-sm border-b-3 border-b-[#543CDA] placeholder:text-black text-xs outline-none"
          />
          {/* <label htmlFor="" className="text-[#543CDA] font-semibold text-[16px]">Two-Factor Authentication</label> */}
        </form>
        <div className="flex justify-between switch-container mt-5.5">
          <h1 className="text-[#543CDA] font-semibold text-[16px]">
            Two-Factor Authentication
          </h1>
          <label className="switch">
            <input
              type="checkbox"
              checked={true}
              className="toggle border-[#543CDA] text-[#543CDA] bg-white checked:border-[#543CDA] checked:bg-[#543CDA] checked:text-white"
            />
          </label>
        </div>
        <div className="delete-btn mt-9 rounded-[7px] hover:bg-red-500 hover:text-white cursor-pointer w-[180px] flex items-center gap-2.5 py-4.5 px-4.5 border border-red-400 text-[12px] font-normal text-[#C43131] group">
          <span>
            <Image
              src="/delete-1.svg"
              alt="Edit icon"
              width={14}
              height={14}
              className="group-hover:hidden"
            />
            <Image
              src="/delete-1-hover.svg"
              alt="Edit icon"
              width={14}
              height={14}
              className="hidden group-hover:block"
            />
          </span>
          <p>Deactivate Account</p>
        </div>
      </div>
      <div className="box2 text-black bg-white mt-6.5 mb-32 px-10 py-8 rounded-[10px] border-l-10 border-l-[#543CDA]">
        <p className="font-medium text-lg mb-8.5">Notification Preferences</p>
        <div>
          <p className="text-[#543CDA] font-semibold text-lg">
            New Deliverable Upload
          </p>
          <p className="font-normal text-sm">
            Get notified when new deliverables have been uploaded{" "}
          </p>
        </div>
        <div className="border-1 border-[#EAE8F7] my-4"></div>
        <div>
          <p className="text-[#543CDA] font-semibold text-lg">
            New Comment From Client
          </p>
          <p className="font-normal text-sm">
            Get notified when clients send a comment{" "}
          </p>
        </div>
        <div className="border-1 border-[#EAE8F7] my-4"></div>
        <div>
          <p className="text-[#543CDA] font-semibold text-lg">
            Project Status Updates
          </p>
          <p className="font-normal text-sm">
            Get notified when the status of a project changes{" "}
          </p>
        </div>
        <div className="border-1 border-[#EAE8F7] my-4"></div>
        <div>
          <p className="text-[#543CDA] font-semibold text-lg">
            Meeting Reminders
          </p>
          <p className="font-normal text-sm">
            Get reminders for upcoming meetings{" "}
          </p>
        </div>
        <div className="border-1 border-[#EAE8F7] my-4"></div>
        <div className="mb-16">
          <p className="text-[#543CDA] font-semibold text-lg">
            Payment Updates
          </p>
          <p className="font-normal text-sm">
            Get updates when payments are made by clients{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Settings;
