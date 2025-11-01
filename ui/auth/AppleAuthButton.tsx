import React, { useState } from 'react'
import * as AppleAuthentication from 'expo-apple-authentication';
import { YStack, useTheme, Spinner } from 'tamagui';
import { Text } from 'react-native';
import { signInWithApple } from '@/src/lib/auth';
import { useAuthStore } from '@/src/store/auth';

const AppleAuthButton: React.FC = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePress = async () => {
    setError(null);
    setLoading(true);

    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        ],
      });

      // Pass credential to your firebase auth helper which handles web/native differences
      const user = await signInWithApple(credential as any);

      // Update local store immediately (subscribeToAuth also updates on auth state changes)
      if (user) {
        useAuthStore.getState().setUser(user as any);
      }
    } catch (err: any) {
      // User cancelled gets thrown as an error by expo-apple-authentication
      if (err && err.code === 'ERR_CANCELED') {
        // no-op: user cancelled
      } else {
        console.error('Apple sign in error', err);
        setError(err?.message || 'Apple sign-in failed.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <YStack
      borderWidth={1}
      borderBottomWidth={2}
      borderColor={'$color10'}
      bg={'$background'}
      style={{ borderRadius: 12, overflow: 'hidden' }}
    >
      {loading ? (
        <YStack style={{ padding: 12, alignItems: 'center', justifyContent: 'center' }}>
          <Spinner size="small" />
        </YStack>
      ) : (
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_UP}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.WHITE}
          style={{
            width: '100%',
            height: 48,
            borderWidth: 0,
            borderRadius: 12,
          }}
          cornerRadius={12}
          onPress={handlePress}
        />
      )}

      {error ? (
        <YStack style={{ padding: 8, alignItems: 'center' }}>
          <Text style={{ color: theme.color?.val ?? '#f43f5e' }}>{error}</Text>
        </YStack>
      ) : null}
    </YStack>
  );
};

export default AppleAuthButton