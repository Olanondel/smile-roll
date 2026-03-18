export const mapFirebaseUser = (user) => {
  if (!user) return null

  return {
    uid: user.uid,
    phoneNumber: user.phoneNumber ?? null,
    email: user.email ?? null,
    displayName: user.displayName ?? null,
    photoURL: user.photoURL ?? null,
  }
}
