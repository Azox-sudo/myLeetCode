
def gcdOfStrings(str1, str2):
    """
    :type str1: str
    :type str2: str
    :rtype: str
    """

    len1, len2 = len(str1), len(str2)

    # The loop and subsequent conditions should be indented inside the function
    for i in range(min(len1,len2),0,-1):
        if len1 % i == 0 and len2 % i == 0:
            if  str1[:i] * (len1//i) == str1 and str1[:i] *(len2//i) == str2:
                return str1[:i]
    return ""
# Example usage:
str1 = "ABCABC"
str2 = "AB"
result = gcdOfStrings(str1, str2)
print("Result:", result)
print(6/2)