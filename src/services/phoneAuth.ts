import {
  getAuth,
  signInWithPhoneNumber,
  signOut,
  ConfirmationResult,
} from "@react-native-firebase/auth";

const auth = getAuth();

let confirmation: ConfirmationResult | null = null;

export const sendOTP = async (phoneNumber: string) => {
  try {
    confirmation = await signInWithPhoneNumber(auth, phoneNumber);

    return {
      success: true,
    };
  } catch (error: any) {
    console.log("Send OTP Error:", error);

    return {
      success: false,
      message: error.message,
    };
  }
};

export const verifyOTP = async (code: string) => {
  try {
    if (!confirmation) {
      throw new Error("OTP session expired.");
    }

    const userCredential = await confirmation.confirm(code);

    return {
      success: true,
      user: userCredential.user,
    };
  } catch (error: any) {
    console.log("Verify OTP Error:", error);

    return {
      success: false,
      message: error.message,
    };
  }
};

export const logout = async () => {
  await signOut(auth);
};