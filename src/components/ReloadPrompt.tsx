import {
  Button,
  HStack,
  Text,
  ToastId,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";

export const ReloadPrompt = () => {
  const toast = useToast();
  const toastRef = useRef<ToastId>();
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered: () => {
      console.debug("ServiceWorker registered");
    },
    onRegisterError: error => {
      console.error("ServiceWorker registration error!", error);
    },
  });
  const closeToast = () => {
    setOfflineReady(false);
    setNeedRefresh(false);

    if (toastRef.current !== undefined) {
      toast.close(toastRef.current);
    }
  };

  const offlineReadyToast = () =>
    toast({
      position: "bottom-right",
      title: "App ready to work offline",
      status: "info",
      isClosable: true,
    });

  const needRefreshToast = () =>
    toast({
      position: "bottom-right",
      title: "New version available!",
      description: (
        <VStack>
          <Text as={"span"}>Click on the reload button to update.</Text>
          <HStack>
            <Button
              colorScheme={"blackAlpha"}
              onClick={() => updateServiceWorker(true)}
            >
              Reload
            </Button>
            <Button
              colorScheme={"blackAlpha"}
              onClick={() => {
                closeToast();
              }}
            >
              Cancel
            </Button>
          </HStack>
        </VStack>
      ),
      status: "info",
      duration: null,
    });

  useEffect(() => {
    if (offlineReady) {
      offlineReadyToast();
    }

    if (needRefresh) {
      toastRef.current = needRefreshToast();
    }
  }, [offlineReady, needRefresh]);

  return null;
};
