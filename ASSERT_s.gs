function ASSERT_TRUE(condition, errorMessage) {
  if (!condition)
    throw(errorMessage);
}