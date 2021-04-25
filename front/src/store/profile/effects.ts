import { Dispatch } from "redux";
import { Address } from "../../domain/entity/address";
import { isCompletePostalcode, sanitizePostalcode } from "../../services/address";
import profileActions from "./actions";

export const searchAddressFromPostalcode = (code: string) => async (dispatch: Dispatch) => {
  if (!isCompletePostalcode(code)) return;
  const url = `https://apis.postcode-jp.com/api/v3/postcodes?apikey=Fgr9NP23zjWWr7pRvNh0CHyUy3orwiVfn7q4RuO&postcode=${sanitizePostalcode(code)}`;
  const result = await fetch(url).then(res => res.json());
  const address: Partial<Address> = {
    prefecture: result.data[0].pref,
    city: result.data[0].city + result.data[0].town
  };
  dispatch(profileActions.searchAddress.done({result: address, params: {}}));
}