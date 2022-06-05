import { FacebookFilled, InstagramFilled, TwitterCircleFilled, YoutubeFilled } from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="w-full text-center border-t static bottom-0 left-0">
      <div className="pt-4 py-6 w-full">
        <h4 className="text-base font-medium">Visit Us :</h4>
        <div className="flex mx-auto text-3xl w-40 justify-between cursor-pointer">
          <YoutubeFilled className="hover:text-red-700 cursor-pointer"/>
          <FacebookFilled className="hover:text-blue-800 cursor-pointer"/>
          <TwitterCircleFilled className="hover:text-blue-400 cursor-pointer"/>
          <InstagramFilled className="hover:text-pink-400"/>
        </div>
      </div>
    </div>
  );
}
