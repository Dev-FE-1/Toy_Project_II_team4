import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, firebaseDB } from '../api/firebaseApp';
import { signInWithEmailAndPassword, User } from 'firebase/auth';
import { ref, get } from 'firebase/database';

export interface AuthState {
  user: User | null;
  profile: any;
  loading: boolean;
  error: string | null;
}

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProfile = createAsyncThunk(
  'auth/fetchProfile',
  async (userId: string, { rejectWithValue }) => {
    try {
      const profileRef = ref(firebaseDB, `users/${userId}`);
      const snapshot = await get(profileRef);
      return snapshot.val();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState: AuthState = {
  user: null,
  profile: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.profile = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
