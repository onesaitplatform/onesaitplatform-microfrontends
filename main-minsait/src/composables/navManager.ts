import { ref } from "vue";
import navigationConfig from "../assets/navigation.json";

interface NavigationItem {
  id: string | number;
  langs: {
    es: string;
    en: string;
  };
  icon?: string;
  disabled?: boolean;
  notifications?: number;
  children?: Record<string, NavigationItem>;
  to?: any;
  current?: boolean;
}

interface NavigationData {
  [key: string]: NavigationItem;
}

const navigation: NavigationData = ref(navigationConfig);
//old
// export const useNavManager = () => {
//   const setCurrentItem = (currentId: string | number) => {
//     const nestedItems = (nestedData: NavigationData) => {
//       for (const key of Object.keys(nestedData)) {
//         const item = nestedData[key];
//         item.current = currentId === item.id;
//         if (item.children) {
//           nestedItems(item.children);
//         }
//       }
//     };

//     const newNavigation = { ...navigation.value }
//     !!newNavigation && nestedItems(newNavigation)

//     navigation.value = { ...newNavigation }

//   };

//   return {
//     setCurrentItem,
//     navigation,
//   };
// };
export const useNavManager = () => {
  const setCurrentItem = (currentId: string | number) => {
    const nestedItems = (
      nestedData: NavigationData,
      parent: NavigationItem | null = null
    ) => {
      for (const key of Object.keys(nestedData)) {
        let fatherName = "";
        if (currentId.matched?.length) {
          fatherName = currentId.matched[0].name;
        }
        const item = nestedData[key];
        item.parent = parent;
        item.current = !fatherName.length
          ? currentId === item.id
          : fatherName === item.id;
        if (item.children) {
          nestedItems(item.children, item);
        }
      }
    };

    const newNavigation = { ...navigation.value };
    !!newNavigation && nestedItems(newNavigation);

    navigation.value = { ...newNavigation };
  };
  return {
    setCurrentItem,
    navigation,
  };
};
