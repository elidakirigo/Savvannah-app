interface Message {
  text: string;
  createdAt: AppBuildManifestPlugin.firestore.Timestamp;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}
