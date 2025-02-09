import { notification1 } from "../assets/App";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-2 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={notification1}
        width={40}
        height={52}
        alt="image"
        className="rounded-xl w-[2.5rem] h-[2rem]"
      />

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {/*{notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={item}
                />
              </li>
            ))}*/}
          </ul>
          <h6 className="font-semibold text-base">{title}</h6>
          <div className="mt-[1.5rem] ml-[1rem] body-2 text-n-13 text-xs">1m</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
