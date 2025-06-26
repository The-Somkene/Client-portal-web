import Image from "next/image";

const senderMessage = {
  image: "/placeholder-image.svg",
  id: 123456,
  message: {
    0: "Great work, Chinedu! I’m reviewing them now. The layouts look promising.",
    1: "I have a couple of suggestion for the homepage. I’ll send you detailed feedback shortly. Can we schedule a quick call?",
  },
  time: "08:21",
};

const receiverMessage = {
  image: "/Profile-pic.svg",
  id: 987654,
  message: {
    0: "Hello! How can i help you?",
    1: "Let me know if you have any comments or need further revision. We’re also on track for our next milestone",
  },
};

const Message = () => {
  return (
    <section className="flex flex-cols-2 gap-5">
      <div className=" bg-white mt-4.5 py-8.5 px-6 rounded-[10px] w-[28%] flex flex-col"></div>

      <div className="chat chat-start bg-white mt-4.5 py-6 pl-[43px] pr-[76px]  rounded-[10px] w-full flex flex-col">
        <div className="profile-header flex justify-between items-center w-full mb-4.5">
          <div className="profile-image-name flex items-center gap-7.5 font-semibold text-[#543CDA] text-xl">
            <span>
              <Image
                alt=""
                src="/placeholder-image.svg"
                width={43}
                height={43}
                className="rounded-full border-1 border-[#543CDA]"
              />
            </span>
            <h2>Tayo Wellens</h2>
          </div>
          <div className="call flex items-center gap-1.5 font-semibold text-[#543CDA] text-[15px] cursor-pointer">
            <span>
              <Image
                alt=""
                src="/phone-icon.svg"
                width={32}
                height={32}
                className="rounded-full"
              />
            </span>
            <p>Call</p>
          </div>
        </div>
        <div className="border-1 border-[#EAE8F7] pl-[43px] pr-[76px] mb-6.5 w-full"></div>



        {/* <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image
                alt=""
                src="/placeholder-image.svg"
                width={43}
                height={43}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">You were the Chosen One!</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>


        <div className="chat ml-auto  flex flex-row-reverse">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image
                alt=""
                src="/placeholder-image.svg"
                width={43}
                height={43}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble ">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div> */}
      
      
      
        <div className="flex items-center justify-between gap-3 w-full">
          <div className="flex gap-4 border-1 border-[#543CDA80] rounded-[7px] w-full justify-between">
            <textarea name="message" id="message" className=" resize-none outline-none w-full pl-8 pt-6 custom-scrollbar" placeholder="Enter Message" ></textarea>
            <span className="flex items-center gap-[20px]">
            <Image
                alt=""
                src="/add-1.svg"
                width={14}
                height={14}
                className=""
              />
              <Image
                alt=""
                src="/camera-icon.svg"
                width={19}
                height={19}
                className=""
              />
              <Image
                alt=""
                src="/new-file.svg"
                width={32}
                height={32}
                className=""
              />

            </span>

          </div>

        <div className="button bg-[#543CDA] rounded-[7px] py-4.5 px-5 font-semibold text-white text-[16px] flex items-center">
          <p>Send</p>
          <span>
          <Image
                alt=""
                src="/send-message-icon.svg"
                width={20}
                height={20}
                className="rounded-full"
              />
          </span>
        </div>
        </div>

      </div>
    </section>
  );
};

export default Message;
