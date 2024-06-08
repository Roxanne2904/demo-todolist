import { useSelector } from "react-redux";

export const usePopupMessageSelectors = () => {
	const popupMessage = useSelector((state: any) => state.popupMessage);
	return popupMessage;
};
