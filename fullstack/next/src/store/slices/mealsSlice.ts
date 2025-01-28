import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllMeals, fetchMealById } from '@/services/food/meals/mealsService';
import { createMeal, updateMeal } from '@/action_servers/food/meals/getMeals';
import { MealState, MealData, FETCH_MEALS, FETCH_MEAL_BY_ID, CREATE_MEAL, UPDATE_MEAL } from '../Constants';

const initialState: MealState = {
    meals: [],
    status: 'idle',
    error: null,
};

export const fetchMeals = createAsyncThunk(FETCH_MEALS, async () => {
    const response = await fetchAllMeals();
    return response;
});

export const fetchMeal = createAsyncThunk(FETCH_MEAL_BY_ID, async (id: number) => {
    const response = await fetchMealById(id);
    return response;
});

export const createNewMeal = createAsyncThunk(CREATE_MEAL, async (mealData: MealData) => {
    const response = await createMeal(mealData);
    return response;
});

export const updateExistingMeal = createAsyncThunk(UPDATE_MEAL, async ({ id, mealData }: { id: number, mealData: MealData }) => {
    const response = await updateMeal(id, mealData);
    return response;
});



const mealsSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchMeals.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchMeals.fulfilled, (state, action: PayloadAction<MealData[]>) => {
            state.status = 'succeeded';
            state.meals = action.payload;
        })
        .addCase(fetchMeals.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Failed to fetch meals';
        })
        .addCase(fetchMeal.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchMeal.fulfilled, (state, action: PayloadAction<MealData>) => {
            state.status = 'succeeded';
            const index = state.meals.findIndex(meal => meal.id_meal === action.payload.id_meal);
            if (index !== -1) {
            state.meals[index] = action.payload;
            } else {
            state.meals.push(action.payload);
            }
        })
        .addCase(fetchMeal.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Failed to fetch meal';
        })
        .addCase(createNewMeal.fulfilled, (state, action: PayloadAction<MealData>) => {
            state.meals.push(action.payload);
        })
        .addCase(updateExistingMeal.fulfilled, (state, action: PayloadAction<MealData>) => {
            const index = state.meals.findIndex(meal => meal.id_meal === action.payload.id_meal);
            if (index !== -1) {
            state.meals[index] = action.payload;
            }
        })
    },
});



// Selectors
export const selectAllMeals = (state: RootState) => state.meals.meals;
export const selectMealById = (state: RootState, mealId: number) => state.meals.meals.find(meal => meal.id_meal === mealId);
export const selectMealsStatus = (state: RootState) => state.meals.status;
export const selectMealsError = (state: RootState) => state.meals.error;



export default mealsSlice.reducer;