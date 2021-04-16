const initialState = {
  notes: [],
  isLoading: false,
  error: null
};

export const fetchStart = (status) => {
  return { type: "notes/noteIsLoading", payload: status };
};

export const fetchError = (message) => {
  return { type: "notes/noteError", payload: message };
};

export const fetchSuccess = (data) => {
  return { type: "notes/noteList", payload: data };
};

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case "notes/noteList":
      return { ...state, notes: action.payload };
    case "notes/noteIsLoading":
      return {
        ...state,
        isLoading: action.payload
      };
    case "notes/noteError":
      return { ...state, error: action.payload };
    case "notes/noteAdded":
      return { ...state, notes: [...state.notes, action.payload] };
    case "notes/noteUpdate":
      return { ...state, notes: action.payload };
    case "notes/noteDeleted":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload)
      };
    default:
      return state;
  }
}
