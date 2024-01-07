def encode_rle(s):
    encoded = ""
    count = 1

    for i in range(1, len(s)):
        if s[i] == s[i - 1]:
            count += 1
        else:
            encoded += str(count) + s[i - 1]
            count = 1

    encoded += str(count) + s[-1]
    return encoded


def decode_rle(encoded):
    decoded = ""
    i = 0

    while i < len(encoded):
        count = int(encoded[i])
        character = encoded[i + 1]
        decoded += character * count
        i += 2
    return decoded
