import { act, render } from "@testing-library/react";
import IndexPage from "./pages/index.tsx";
import { useDashboardStore } from "./store.ts";

test('renders without crashing', () => {
    render(<IndexPage />);

});


describe('Authenticatiom', () => {

    // Test updating loggedIn state
    it('should update loggedIn state', () => {
        const { setLoggedIn } = useDashboardStore.getState();

        act(() => {
            setLoggedIn(true);
        });

        expect(useDashboardStore.getState().loggedIn).toBe(true);

        act(() => {
            setLoggedIn(false);
        });

        expect(useDashboardStore.getState().loggedIn).toBe(false);
    });

});