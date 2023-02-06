// vite.config.ts
import { defineConfig } from "file:///D:/Code/GitHub/vf-phonefinder/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Code/GitHub/vf-phonefinder/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "D:\\Code\\GitHub\\vf-phonefinder\\apps\\client";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__vite_injected_original_dirname, "src/components"),
      "@lib": path.resolve(__vite_injected_original_dirname, "src/lib"),
      "@hooks": path.resolve(__vite_injected_original_dirname, "src/hooks"),
      "@pages": path.resolve(__vite_injected_original_dirname, "src/pages"),
      "@services": path.resolve(__vite_injected_original_dirname, "src/services"),
      "@types": path.resolve(__vite_injected_original_dirname, "src/types")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxDb2RlXFxcXEdpdEh1YlxcXFx2Zi1waG9uZWZpbmRlclxcXFxhcHBzXFxcXGNsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcQ29kZVxcXFxHaXRIdWJcXFxcdmYtcGhvbmVmaW5kZXJcXFxcYXBwc1xcXFxjbGllbnRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0NvZGUvR2l0SHViL3ZmLXBob25lZmluZGVyL2FwcHMvY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAY29tcG9uZW50c1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9jb21wb25lbnRzXCIpLFxyXG4gICAgICBcIkBsaWJcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvbGliXCIpLFxyXG4gICAgICBcIkBob29rc1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9ob29rc1wiKSxcclxuICAgICAgXCJAcGFnZXNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvcGFnZXNcIiksXHJcbiAgICAgIFwiQHNlcnZpY2VzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL3NlcnZpY2VzXCIpLFxyXG4gICAgICBcIkB0eXBlc1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy90eXBlc1wiKSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVQsU0FBUyxvQkFBb0I7QUFDdFYsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUZqQixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsZUFBZSxLQUFLLFFBQVEsa0NBQVcsZ0JBQWdCO0FBQUEsTUFDdkQsUUFBUSxLQUFLLFFBQVEsa0NBQVcsU0FBUztBQUFBLE1BQ3pDLFVBQVUsS0FBSyxRQUFRLGtDQUFXLFdBQVc7QUFBQSxNQUM3QyxVQUFVLEtBQUssUUFBUSxrQ0FBVyxXQUFXO0FBQUEsTUFDN0MsYUFBYSxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ25ELFVBQVUsS0FBSyxRQUFRLGtDQUFXLFdBQVc7QUFBQSxJQUMvQztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
