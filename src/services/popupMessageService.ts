import { useDispatch } from "react-redux";
import { actions } from "../globalState/slice/popupMessageSlice";

export const usePopupMessageService = (): { successMessage: () => void } => {
	const dispatch = useDispatch();

	return {
		successMessage: () => dispatch(actions.addSuccess()),
	};
};
